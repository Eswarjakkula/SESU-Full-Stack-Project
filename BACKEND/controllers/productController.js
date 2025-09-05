const product= require('../models/product');
const Firm = require('../models/Firm');
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb)  {
      cb(null, "uploads/"); // Folder where images will be stored
    },
    filename: function(req, file, cb) {
      cb(null, Date.now() +path.extname(file.originalname)); // unique file name
    },
  });
const upload = multer({ storage: storage });

const addProduct = async(req, res) => {
    try{
        const { productName, price,category,bestSeller, description } = req.body;
    
        const image= req.file ? req.file.filename : undefined; 
    
        const firmId = req.params.firmId; 
    
        const firm = await Firm.findById(firmId);
        if (!firm) {
            return res.status(404).json({ message: "Firm not found" });
        }
        const Product = new product({
            productName,
            price,
            category,
            image,
            bestSeller,
            description,
            firm: firmId,
        });
        const savedProduct = await Product.save();
        
        firm.products.push(savedProduct);
    


        
        await firm.save();
        res.status(201).json({ message: "Product added successfully", product: savedProduct });
        
    }catch (error) {
        console.error("Error in addProduct:", error.message);
        return res.status(500).json({ message: "Server error, please try again later" });
    }
    }
    const getProductByFirm = async (req, res) => {
        try {
            const firmId = req.params.firmId;

            // Fetch the firm by ID
            const firm = await Firm.findById(firmId);
            if (!firm) {
                return res.status(404).json({ message: "Firm not found" });
            }

            const restaurantName = firm.firmName; // Get the firm name
            const products = await product.find({ firm: firmId }); // Fetch products for the firm

            res.status(200).json({ restaurantName, products });
        } catch (error) {
            console.error("Error in getProductByFirm:", error.message);
            return res.status(500).json({ message: "Server error, please try again later" });
        }
    };

    const deleteProductById = async (req, res) => {
        try {
          const { firmId, productId } = req.params;
      
          // Delete product from collection
          const deletedProduct = await product.findByIdAndDelete(productId);
          if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
          }
      
          // Remove product reference from Firm
          await Firm.findByIdAndUpdate(firmId, { $pull: { products: productId } });
      
          return res.status(200).json({ message: "Product deleted successfully" });
        } catch (error) {
          console.error("Error in deleteProductById:", error.message);
          return res
            .status(500)
            .json({ message: "Server error, please try again later" });
        }
      };
      

module.exports = { addProduct: [upload.single('image'), addProduct],getProductByFirm ,deleteProductById };