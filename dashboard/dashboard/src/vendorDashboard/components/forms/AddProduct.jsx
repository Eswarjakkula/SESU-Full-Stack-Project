import React ,{useState} from 'react'

import { API_URL } from '../../data/apiPath';

const AddProduct = () => {
  const [productName,setProductName]=useState('')
  const [price,setPrice]=useState('')
  const [category,setCategory]=useState([])
  const [bestSeller,setBestSeller]=useState(false)
  const [description,setDescription]=useState('')
  const [file,setFile]=useState(null)
  const handleCategoryChange=(e)=>{
    const value=e.target.value;
    if(category.includes(value)){ 
      setCategory(category.filter((cat)=>cat!==value))
    }else{
      setCategory([...category,value])
    }
  }
  const handleImageUpload=(e)=>{
    const selecetedImage=e.target.files[0];
    setFile(selecetedImage)
  }

  const handleBestSeller=(e)=>{
    const value=e.target.value==='true'
    setBestSeller(value)
  }
  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const loginToken = localStorage.getItem('loginToken');
      const firmId = localStorage.getItem('firmId');
  
      if (!loginToken || !firmId) {
        console.error("No token or firmId found");
        alert("Please login and select a firm first");
        return;
      }
  
      const formData = new FormData();
      formData.append('productName', productName);
      formData.append('price', price);
      formData.append('bestSeller', bestSeller);
      formData.append('description', description);
      formData.append('image', file);
  
      category.forEach((cat) => {
        formData.append('category', cat);
      });
  
      const response = await fetch(`${API_URL}/product/addProduct/${firmId}`, {
        method: 'POST',
       
        body: formData,
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert('Product added successfully');
      } else {
        alert(data.message || 'Error adding product');
      }
      setProductName('');
      setPrice('');
      setCategory([]);
      setBestSeller(false);
      setDescription('');
      setFile(null);
      
    } catch (error) {
      console.error("Error in AddProduct:", error);
      alert('Error adding product');
    }
  };
  
  return (
    <div>
      <form className='addForm' onSubmit={handleAddProduct}>
        <h3>Add Product</h3>

        <label>Product Name</label>
        <input type="text" value={productName} onChange={(e)=>setProductName(e.target.value)}/>

        <label>Price</label>
        <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} />

        {/* Category Checkboxes */}
        <label>Category</label>
        <div className="checkbox-group">
          <label>
            Veg
          </label>
          <input type="checkbox" value="veg" checked={category.includes('veg')} onChange={handleCategoryChange}/> 
          <label>
             Non-Veg
          </label>
          <input type="checkbox" value="non-veg" checked={category.includes('non-veg')} onChange={handleCategoryChange} />
        </div>

        {/* BestSeller Checkboxes */}
        <label>Best Seller</label>
        <div className="checkbox-group">
          <label>
            Yes
          </label>
          <input type="radio" value="true" checked={bestSeller===true} onChange={handleBestSeller}/> 
          <label>
            No
          </label>
          <input type="radio" value="false" checked={bestSeller===false} onChange={handleBestSeller}/> 
        </div>

        <label>Description</label>
        <input type="text"  value={description} onChange={(e)=>setDescription(e.target.value)}/>

        <label>Image</label>
        <input type="file" onChange={handleImageUpload}/>

        <div className='btnSubmit'>
          <button type="submit">Add Product</button>
        </div>
      </form>
    </div>
  ) 
}

export default AddProduct
