import React,{useState} from 'react';
import { API_URL } from '../../data/apiPath';

const AddFirm = () => {
  const [firmName,setFirmName]=useState('')
  const [area,setArea]=useState('')
  const [category,setCategory]=useState([])
  const [region,setRegion]=useState([])
  const [offer,setOffer]=useState('')
  const [file,setFile]=useState(null)

  const handleCategoryChange=(e)=>{
    const value=e.target.value;
    if(category.includes(value)){ 
      setCategory(category.filter((cat)=>cat!==value))
    }else{
      setCategory([...category,value])
    }
  }
  const handleRegionChange=(e)=>{
    const value=e.target.value;
    if(region.includes(value)){
      setRegion(region.filter((reg)=>reg!==value))
    }else{
      setRegion([...region,value])
    }
  }

  const handleImageUpload=(e)=>{
    const selecetedImage=e.target.files[0];
    setFile(selecetedImage)
  }


  const handleFirmSubmit=async(e)=>{
    e.preventDefault();
   try{
    const loginToken=localStorage.getItem('loginToken')
    if(!loginToken){
      alert('Please login first')
      console.log('no token found')
    }
    const formData=new FormData();
    formData.append('firmName',firmName)
    formData.append('area',area)
    formData.append('image',file)
    formData.append('offer',offer)
 
    category.forEach((cat)=>{
      formData.append('category',cat)
    })
    region.forEach((reg)=>{
      formData.append('region',reg)
    })
    const response=await fetch(`${API_URL}/firm/add-firm`,{
      method:'POST',
      headers:{
        'token':` ${loginToken}`
      },
      body:formData
    });
    const data=await response.json();
    if(response.ok){
     
      setFirmName('')
      setArea('')
      setCategory([])
      setRegion([])
      setOffer('')
      setFile(null)
      alert('Firm added successfully')
    }else if(data.message==="Vendor already has a firm"){
      alert('Vendor already has a firm')
    }else{
      alert('Error adding firm')
    }
    console.log("this is Firm Id",data.firmId)
    const mango=data.firmId;
    localStorage.setItem('firmId',mango)
    
   }catch(error){
    console.log(error)
   }
  }
  return (
    <div className="firmSection">
      <form className="tableForm" onSubmit={handleFirmSubmit}>
        <h3 className="formTitle">Add Firm</h3>

        <label>Firm Name</label>
        <input type="text" name='firmName' value={firmName} onChange={(e)=>setFirmName(e.target.value)} />

        <label>Area</label>
        <input type="text" name='area' value={area} onChange={(e)=>setArea(e.target.value)}  />

        <label>Category</label>
        <div className="categoryContainer">
          <label className="checkboxLabel">
            <input type="checkbox" checked={category.includes('veg')} value="veg" onChange={handleCategoryChange} />
            Veg
          </label>
          <label className="checkboxLabel">
            <input type="checkbox" checked={category.includes('non-veg')} value="non-veg" onChange={handleCategoryChange} />
            Non-Veg
          </label>
        </div>
        <label>Region</label>
        <div className="categoryContainer">
          <label className="checkboxLabel">
            <input type="checkbox"  value="south-indian"checked={region.includes('south-indian')} onChange={handleRegionChange} />
            South Indian
          </label>
          <label className="checkboxLabel">
            <input type="checkbox"  value="north-indian" checked={region.includes('north-indian')} onChange={handleRegionChange} />
            North Indian
          </label>
          <label className="checkboxLabel">
            <input type="checkbox"   value="chinese" checked={region.includes('chinese')}  onChange={handleRegionChange}/>
            Chinese
          </label>
          <label className="checkboxLabel">
            <input type="checkbox"   value="bakery" checked={region.includes('bakery')} onChange={handleRegionChange}/>
            Bakery
          </label>
        </div>
        {/* <label>Region</label>
        <input type="text" /> */}

        <label>Offer</label>
        <input type="text"  name='offer' value={offer} onChange={(e)=>setOffer(e.target.value)} />

        <label>Image</label>
        <input type="file" onChange={handleImageUpload}/>

        <div className="btnSubmit">
          <button type="submit">Add Firm</button>
        </div>
      </form>
    </div>
  );
};

export default AddFirm;