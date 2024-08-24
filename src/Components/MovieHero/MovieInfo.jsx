import React, { useContext, useState } from 'react'
import { MovieContext } from '../../Context/MovieContext'
import PaymentComponent from '../PaymentModal/PaymentComponent'

const MovieInfo = () => {
    const { movie } = useContext(MovieContext)
    const [isOpen, setIsOpen] = useState(false)
    const [price, setPrice] = useState(0)

    const genres = movie.genres?.map( ({name}) => name ).join(", ");
    
    const rentMovie = () => {
        setIsOpen(true)
        setPrice(149)
    }
    const buyMovie = () => {
        setIsOpen(true)
        setPrice(499)
    }

  return (
    <>
        <PaymentComponent setIsOpen={setIsOpen} isOpen={isOpen} price={price} setPrice={setPrice} /> 
        <div className="flex flex-col gap-3 px-4 my-3">
            <h1 className='text-white text-5xl font-bold'>{movie.title}</h1>
            <div className="text-white text-xl font-medium">
                <h4>4.4k ratings</h4>
                <h4>Hindi, Urdu, English, Arabic</h4>
                <h4>{movie.runtime} min | {genres} </h4>
            </div>
            <div className="flex items-center gap-3 text-xl">
              <button onClick={rentMovie} className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
                Rent $149
              </button>
              <button onClick={buyMovie} className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg">
                Buy $499
              </button>
            </div>
        </div>
    </>
  )
}


export default MovieInfo
