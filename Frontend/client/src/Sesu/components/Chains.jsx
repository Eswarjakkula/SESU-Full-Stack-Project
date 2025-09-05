import React, { useState, useEffect } from 'react'
import { API_URL } from '../api'
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { MagnifyingGlass } from 'react-loader-spinner'
const Chains = () => {
  const [vendorData, setVendorData] = useState([])
  const [scrollPosition, setScrollPosition] = useState(0);
  const [loading, setLoading] = useState(true);
  const vendorFirmHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/vendor/all-vendors`)
      const newData = await response.json()
      setVendorData(newData)
      setLoading(false);

    } catch (error) {
      alert("Failed to fetch vendor data")
      console.log("Error fetching vendor data:", error)
      setLoading(true);
    }
  }

  useEffect(() => {
    vendorFirmHandler()
  }, [])

  const handleScroll = (direction) => {
    const gallery = document.getElementById('chainGallery');
    const scrollAmount = 500;
    if (direction === 'left') {
      gallery.scrollTo({
        left: gallery.scrollLeft - scrollAmount,
        behavior: 'smooth'

      })

    } else if (direction === 'right') {
      gallery.scrollTo({
        left: gallery.scrollLeft + scrollAmount,
        behavior: 'smooth'

      })

    }
  }

  return (
    <>
    <div className="loadersection">
    {loading && <>
        <div className='loader'>
          Your 🍽 is Loading
        </div>
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="magnifying-glass-loading"
          wrapperStyle={{}}
          wrapperClass="magnifying-glass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />

      </>

      }

    </div>
      <div className="btnSection">
        <button onClick={() => handleScroll("left")}>
          <FaArrowAltCircleLeft className='btnIcons' />
        </button>
        <button onClick={() => handleScroll("right")}>
          <FaArrowAltCircleRight className='btnIcons' />
        </button>

      </div>
      <h3 className='Top'>Top restaurant chains in vijayawada</h3>
      <div className="chainsection" id="chainGallery" onScroll={(e) => setScrollPosition(e.target.scrollLeft)}>

        {vendorData.vendors &&
          vendorData.vendors.map((vendor, vIndex) => (
            <div className="vendorBox" key={vIndex}>
              {vendor.firms.map((item, fIndex) => {

                return (
                  <div key={fIndex}>
                    {/* <div className="vendorGallery">{item.firmName}</div> */}
                    <div className="firmImage">
                      <img
                        src={`${API_URL}/uploads/${item.image}`}

                      />
                    </div>
                  </div>
                )
              })}
            </div>
          ))}
      </div>
    </>
  )
}

export default Chains
