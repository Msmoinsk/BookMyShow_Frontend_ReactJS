import React from 'react'
// Use [ rafce ]
import NavbarCompo from '../Components/NavigationBar/NavbarCompo'

const DefaultLayout = (Component) => ({...props}) => {
  return (
    <>
        <NavbarCompo />
        <Component {...props} />
        <footer>Footer</footer>
    </>
  )
}

export default DefaultLayout
