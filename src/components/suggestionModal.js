import React from 'react'

const suggestionModal = ({position,result,setFrom,setTo,focusedInp}) => {
    const style = {
        top : `${position.bottom + 5}px`,
        left : `${position.x}px`,
        width : `${position.right - position.x}px`

    }
    const handleClick = (e) => {
        // console.log(focusedInp,e.target,e.target.dataset.source);
        
        setFrom(e.target.dataset.source)
        setTo(e.target.dataset.destination)
        // if(focusedInp === "from"){
        // }
        // if(focusedInp === "to"){
        // }
    }
    return (
    <div style={style} className="suggestionModal">
        {
            result && result.map((item,index) => (<p key={'s'+index} onClick={handleClick} data-source={item.source} data-destination={item.destination}>{item.source} -> {item.destination}</p>))
        }
    </div>
  )
}

export default suggestionModal