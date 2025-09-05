const express = require('express');
const mongoose = require('mongoose');
const dotEnv = require('dotenv');
const vendorRoutes = require('./routes/vendorRoutes');
const bodyParser = require('body-parser');
const firmRoutes = require('./routes/firmRoutes');
const productRoutes = require('./routes/productRoutes')
const cors = require('cors');
const path = require('path');

const app = express();

const port = process.env.PORT || 4000;
dotEnv.config();
app.use(cors());
mongoose.connect(process.env.MONGO_URI)

.then(() => {   
    console.log('Connected to MongoDB');
    }
).catch((err) => {
    console.error('Error connecting to MongoDB:', err);

});

app.use(bodyParser.json());
app.use('/vendor', vendorRoutes);
app.use('/firm', firmRoutes);
app.use('/product', productRoutes); 
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.listen(port, () => {
  console.log(`Server is running  http://localhost:${port}`);
});

app.use('/', (req, res) => {
  res.send("Welcome to the Vendor Management System API");
});
