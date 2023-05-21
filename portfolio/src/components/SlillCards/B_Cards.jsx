import React from 'react'
import '../skill.css'
const B_CardsData = (props) => {
  return (

    <>
        {props.details.map((value,index)=>(
             <div className='skill-div' key={index}>
                 <div >
                    <img className='skill-img' src={value.img} alt="" />
                </div>
                <div>
                    <span className='skill-name'>{value.title}</span> <br />
                    <span className='skill-level'>{value.level}</span>
                </div>
             </div>
        ))}
    </>
  )
}

export default B_CardsData