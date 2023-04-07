import React from 'react'

const suggestionModal = ({position,result,setFrom,setTo}) => {
    const style = {
        top : `${position.bottom + 5}px`,
        left : `${position.x}px`,
        width : `${position.right - position.x}px`

    }
    return (
    <div style={style} className="suggestionModal">
        {
            result && result.map(item => (<p>{item.source} -> {item.destination}</p>))
        }
    </div>
  )
}

export default suggestionModal