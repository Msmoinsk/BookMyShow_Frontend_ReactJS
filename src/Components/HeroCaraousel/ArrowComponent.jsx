import React from 'react'

export function NextArrow (props) {
  return (
    <>
        <div className={`mx-10 ${props.className}`} style={{...props.style}} onClick={props.onClick}></div>
    </>
  )
}

export function PrveArrow (props) {
    return(
        <>
            <div className={`mx-10 z-10 ${props.className}`} style={{...props.style}} onClick={props.onClick}></div>
        </>
    )
}

