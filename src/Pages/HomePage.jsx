import React,{ useEffect, useState } from "react";
import DefaultLayout from "../Layouts/Default.Layout";

// Components For the Home Page
import EntertaimentCardCompoSlider from "../Components/Entertainment/EntertaimentCardCompo";
import HeroCarousalCompo from "../Components/HeroCaraousel/HeroCarousalCompo"
import PosterSliderComponent from "../Components/PosterSlider/PosterSliderComponent";
import axios from "axios";


const HomePage = () => {
    const [recommendedMovies, setRecommendedMovies] = useState([])
    const [premiumMovies, setPremiumMovies] = useState([])
    const [onlineStreamEvents, setOnlineStreamEvents] = useState([])

    useEffect(() => {
        const requestTopRatedMovies = async () => {
            const getTopRatedMovies = await axios.get(
                'https://api.themoviedb.org/3/movie/top_rated?api_key=ccfa4ecd270cd9e26cc5791a495b5aca'
            )
            setRecommendedMovies(getTopRatedMovies.data.results)
        } 

        requestTopRatedMovies()
    }, [])

    useEffect(() => {
        const requestPremiumMovies = async () => {
            const getPremiumMovies = await axios.get(
                'https://api.themoviedb.org/3/movie/popular?api_key=ccfa4ecd270cd9e26cc5791a495b5aca'
            )
            setPremiumMovies(getPremiumMovies.data.results)
        } 

        requestPremiumMovies()
    }, [])

    useEffect(() => {
        const requestStreamingMovies = async () => {
            const getStreamingMovies = await axios.get(
                'https://api.themoviedb.org/3/movie/upcoming?api_key=ccfa4ecd270cd9e26cc5791a495b5aca'
            )
            setOnlineStreamEvents(getStreamingMovies.data.results)
        } 

        requestStreamingMovies()
    }, [])


    return(
        <>
            <HeroCarousalCompo />
            
            <div className="container mx-auto px-4 md:px-12 my-8">
                <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">The Best Of Entertainment</h1>
                <EntertaimentCardCompoSlider />
            </div>

            <div className="container mx-auto px-4 md:px-12 my-8">
                <PosterSliderComponent title="Recommended Movies" subtitle="List of recommended movies" posters={recommendedMovies} isDark={false} />
            </div>

            <div className="bg-premier-800 py-12">
                <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
                    <div className="hidden md:flex">
                        <img src="" 
                        className="w-full h-full" alt="rupay" />
                    </div>
                    <PosterSliderComponent title="Premium" subtitle="Brand New Release every Friday" 
                    posters={premiumMovies} isDark={true} />
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3">
                <PosterSliderComponent title="Online Streaming Events" subtitle="Online Stream Events." 
                posters={onlineStreamEvents} isDark={false} />
            </div>
        </>
    )
}

export default DefaultLayout(HomePage)