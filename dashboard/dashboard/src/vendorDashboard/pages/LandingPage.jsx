import React,{useState, useEffect, use} from 'react'
import NavBar from '../components/NavBar'
import SideBar from '../components/SideBar'
import Login from '../components/forms/Login'
import Register from '../components/forms/Register'
import AddFirm from '../components/forms/AddFirm'
import AddProduct from '../components/forms/AddProduct'
import Welcome from '../components/Welcome'
import AllProducts from '../components/forms/AllProducts'

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const[showAddFirm,setShowAddFirm]=useState(false);
  const[showAddProduct,setShowAddProduct]=useState(false);
  const[showWelcome,setShowWelcome]=useState(false);
  const[showAllProducts,setShowAllProducts]=useState(false);
  const[showLogOut,setShowLogOut]=useState(false);
  const[showFirmTitle,setShowFirmTitle]=useState(true);

  useEffect(()=>{
    const loginToken=localStorage.getItem('loginToken');
    if(loginToken){
      setShowLogOut(true);
    }
  },[])

  useEffect(()=>{
    const firmName=localStorage.getItem('firmName');
    if(firmName){
      setShowFirmTitle(false);
    }
  },[])
  const logOutHandler=()=>{
    confirm("Are you sure you want to logout?");
    localStorage.removeItem('loginToken');
    localStorage.removeItem('firmId');
    localStorage.removeItem('firmName');
    setShowLogOut(false);
  
    alert("Logged out successfully");
    setShowFirmTitle(true);


  }
  

  const showLoginHandler = () => {
    setShowLogin(true);
    setShowRegister(false);
    setShowAddProduct(false);
    setShowAddFirm(false);
    setShowWelcome(false);
    setShowAllProducts(false);
  };
  const showRegisterHandler = () => {
    setShowRegister(true);
    setShowLogin(false);
    setShowAddFirm(false);
    setShowAddProduct(false);
    setShowWelcome(false);
    setShowAllProducts(false);
  };
  const showAddFirmHandler=()=>{
    if(showLogOut){
      setShowAddFirm(true);
    setShowLogin(false);
    setShowRegister(false);
    setShowAddProduct(false);
    setShowWelcome(false);
    setShowAllProducts(false);
    }else{
      alert("please login first");
      setShowLogin(true);
    }
    
  } ;
  const showAddProductHandler=()=>{
    if(showLogOut){

      setShowAddProduct(true);
      setShowAddFirm(false);
      setShowLogin(false);
      setShowRegister(false);
      setShowWelcome(false);
      setShowAllProducts(false);
    }else{
      alert("please login first");
      setShowLogin(true);
    }
   
  } ;
  const showWelcomeHandler=()=>{
    setShowAddProduct(false);
    setShowAddFirm(false);
    setShowLogin(false);
    setShowRegister(false);
    setShowWelcome(true);
    setShowAllProducts(false);
  } ;
  const showAllProductsHandler=()=>{
    if(showLogOut){
      setShowAddProduct(false);
      setShowAddFirm(false);
      setShowLogin(false);
      setShowRegister(false);
      setShowWelcome(false);
      setShowAllProducts(true);
    }else{
      alert("please login first");
      setShowLogin(true);
    }
   
  };
  return (
    <>
        <section className="landingSection">
            <NavBar showLoginHandler={showLoginHandler} showRegisterHandler={showRegisterHandler} showLogOut={showLogOut} logOutHandler={logOutHandler}/>
            <div className="collectionSection">
     
            <SideBar showAddFirmHandler={showAddFirmHandler} showAddProductHandler={showAddProductHandler} 
            showAllProductsHandler={showAllProductsHandler} showFirmTitle={showFirmTitle}/>
            {showLogin && <Login showWelcomeHandler={showWelcomeHandler}/>}
            {showRegister && <Register showLoginHandler={showLoginHandler}/>}

            {showAddFirm && showLogOut && <AddFirm />}
            {showAddProduct && showLogOut && <AddProduct />}
            {showWelcome &&<Welcome/>}
            {showAllProducts && showLogOut && <AllProducts />}
            </div>
        </section>
    </>
  )
}

export default LandingPage