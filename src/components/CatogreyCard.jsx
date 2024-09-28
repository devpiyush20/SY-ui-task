import React from 'react'
import "./catogeryCard.css"
import { BsArrowUpRightCircle } from "react-icons/bs";


const CatogreyCard = ({catogery,img,color}) => {
  return (
    <div className='catogeryCard' style={{backgroundColor:`${color}`}}>
    <div className="leftSection">
    <div className='headingCatogery'>
    <h2>The</h2>
    <h2>{catogery}</h2>
    </div>
    <BsArrowUpRightCircle size={"30px"} />

    </div>
    <div className="rightSection">
    <img src={img} alt="Image" />
    </div>

      
    </div>
  )
}

export default CatogreyCard
