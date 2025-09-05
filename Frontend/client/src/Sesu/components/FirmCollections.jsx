import React, { useState, useEffect, use } from 'react'
import { API_URL } from '../api'
import { Link } from 'react-router-dom'
const FirmCollections = () => {
    const [firmData, setFirmData] = useState([])
    const[selectedRegion,setSelectedRegion]=useState('All')
    const firmDataHandler = async () => {
        try {
            const response = await fetch(`${API_URL}/vendor/all-vendors`)
            const newFirmData = await response.json()
            setFirmData(newFirmData.vendors)


        } catch (error) {
            alert("Failed to fetch firm data")
            console.log("Error fetching firm data:", error)
        }
    }
    useEffect(() => {
        firmDataHandler()
    }, [])
    
    const filterhandler=(region)=>{
        setSelectedRegion(region)
    }
    return (
        <>
            <h3>Restaurants with online food delivery in Vijayawada</h3>
            <div className="filterButton">
                <button onClick={()=>filterhandler("All")}>All</button>
                <button onClick={()=>filterhandler("South-Indian")}>South-Indian</button>
                <button onClick={()=>filterhandler("North-Indian")}>North-Indian</button>
                <button onClick={()=>filterhandler("Chinese")}>Chinese</button>
                <button onClick={()=>filterhandler("Bakery")}>Bakery</button>
            </div>
            <section className="firmSection">
                {firmData.map((apple) => {
                    return apple.firms.map((item) => {
                        if(selectedRegion==="All" || item.region.includes(selectedRegion.toLocaleLowerCase()))

                        {
                            
                                return (
                                    <Link to={`/products/${item._id}/${item.firmName}`}className='link'>
                                        <div className="firmGroupBox">
                                            <div className="firmGroup">
                                                <img src={`${API_URL}/uploads/${item.image}`} />
                                                <div className="firmOffer">
                                                    {"Flat " + item.offer + " on Above 199"}
                                                </div>
                                            </div>
                                            <div className='firmDetails'>

                                                <strong>

                                                    {item.firmName}
                                                </strong>
                                                <div className="firmArea"> {item.region.join(', ')}</div>
                                                <div className="firmArea">{item.area}</div>

                                            </div>
                                        </div>

                                    </Link>



                                )
                            

                        }

                    })

                    return null;
                })}


            </section>
        </>
    )
}

export default FirmCollections