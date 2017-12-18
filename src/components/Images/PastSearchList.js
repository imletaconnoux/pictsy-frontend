import React from 'react'
import '../../App.css'
import PastSearchItem from './PastSearchItem'


const PastSearchList = (props) => {
  const PastSearchItems = props.items.map((item, index) =>{

      return <PastSearchItem key={index} item={item}/>
  })

  return (
    <div className="wrapper">


      {PastSearchItems}


    </div>
  )


}

export default PastSearchList
