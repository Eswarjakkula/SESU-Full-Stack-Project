const express = require('express');
const firmController = require('../controllers/firmController');
const verifyToken = require('../middlewares/verifyToken');  
const router = express.Router();

router.post('/add-firm',verifyToken, firmController.addFirm);

router.get('/uploads/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    const imagePath = path.join(__dirname, '..', 'uploads', imageName);
  
    res.sendFile(imagePath, (err) => {
      if (err) {
        console.error("Error sending image:", err);
        res.status(404).send("Image not found");
      }
    });
  });


    
router.delete('/:firmId',firmController.deleteFirmById);  

module.exports = router;