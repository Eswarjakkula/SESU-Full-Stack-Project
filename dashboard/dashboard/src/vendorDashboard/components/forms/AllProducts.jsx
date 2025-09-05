import React, {useState,useEffect, use}from 'react'
import { API_URL } from '../../data/apiPath'

const AllProducts = () => {
    const [products,setProducts]=useState([])
    const productsHandler=async(p)=>{
        const firmId=localStorage.getItem('firmId') 
        try {
            const response=await fetch(`${API_URL}/product/${firmId}/products`);
            const newProductsData=await response.json();
            setProducts(newProductsData.products);
            console.log(newProductsData);
            
        } catch (error) {
            console.log("Failed to fetch allProducts",error);
            alert("Failed to fetch allProducts")
        }
    }
    useEffect(()=>{ 
        productsHandler()
        console.log("this is products");
    }
    ,[])
    const deleteProductbyId = async (productId) => {
        if (!window.confirm("Are you sure you want to delete this product?")) return;
      
        try {
          const response = await fetch(`${API_URL}/product/${productId}`, {
            method: "DELETE",
          });
      
          const data = await response.json();
      
          if (response.ok) {
            setProducts((prev) => prev.filter((product) => product._id !== productId));
            alert(data.message || "Product deleted successfully");
          } else {
            alert(data.message || "Failed to delete product");
          }
        } catch (error) {
          console.error("Delete failed", error);
          alert("Failed to delete product");
        }
      };
      
      
  return (
    <div>
        {!products ? (
            <p>No products available</p>
        ):(
            <table className="product-table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Image</th>  
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                        {products.map((item)=>{
                            return(
                                
                                    <tr key={item._id}>
                                        <td>{item.productName}</td>
                                        <td>{item.price}</td>
                                        <td>
                                            {item.image &&(
                                                <img src={`${API_URL}/uploads/${item.image}`}
                                                alt={item.productName}
                                                />

                                            )} 
                                        </td>
                                        <td>
                                            <button onClick={()=>deleteProductbyId(item._id)}>Delete</button>
                                        </td>
                                    </tr>
                                
                            )

                        })}
                    </tbody>
                    
                    

                    
                
            </table>
        )}
    </div>
  )
}

export default AllProducts