import React from 'react'
import MovieNavbarCompo from '../Components/NavigationBar/MovieNavbarCompo'

const MovieLayout = (Component) => ({...props}) => {
  return (
    <div>
        <MovieNavbarCompo />
        <Component {...props} />
        <footer>Footer</footer>
    </div>
  )
}

export default MovieLayout
