const express= require('express');
const productController = require('../controllers/productController');
const router = express.Router();

router.post('/addProduct/:firmId', productController.addProduct);
router.get('/:firmId/products', productController.getProductByFirm);
router.get('/uploads/:imageName', (req, res) => {
  const imageName = req.params.imageName;
  const imagePath = path.join(__dirname, '..', 'uploads', imageName);
  res.sendFile(imagePath, (err) => {
    if (err) {
      console.error("Error sending file:", err);
      res.status(404).send("Image not found");
    }
  });
});


router.delete('/:productId', productController.deleteProductById);

module.exports = router;