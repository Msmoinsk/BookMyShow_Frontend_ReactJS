import React, { useContext, useEffect, useState } from "react";
import { FaCcVisa, FaCcApplePay } from "react-icons/fa";
import axios from "axios";
import Slider from "react-slick";
import { useParams } from "react-router-dom";
import { MovieContext } from "../Context/MovieContext";
import { NextArrow, PrveArrow } from "../Components/HeroCaraousel/ArrowComponent";
import PosterSliderComponent from "../Components/PosterSlider/PosterSliderComponent";
import MovieHeroCompo from "../Components/MovieHero/MovieHeroCompo";
import MovieLayout from "../Layouts/Movie.Layout";
import CastCompo from "../Components/Cast/CastCompo";

const MoviePage = () => {
    const { id } = useParams()

    const { movie, setMovie } = useContext(MovieContext)

    const [cast, setCast] = useState([])
    const [similarMovies, setSimilarMovies] = useState([])
    const [recommendedMovies, setRecommendedMovies] = useState([])

    // Requesting the movie with [ id ] all details
    useEffect(() => {
        const requestMovie = async () => {
            const getMovieDate = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=ccfa4ecd270cd9e26cc5791a495b5aca`);
            setMovie(getMovieDate.data);
        };
        requestMovie();
    }, [id]);

    // This is to remove the list of all Cast members
    useEffect( () => {
        const requestCast = async () => {
            const getCast = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=ccfa4ecd270cd9e26cc5791a495b5aca`)
            setCast(getCast.data.cast);
        };
        requestCast();
    }, [id]);

    // This is to remove the similar movie like the [ id ] movies
    useEffect(() => {
        const requestSimilarMovies = async () => {
            const getSimilarMovies = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=ccfa4ecd270cd9e26cc5791a495b5aca`);
            setSimilarMovies(getSimilarMovies.data.results);
        };
        requestSimilarMovies();
    }, [id]);

    // TO remove the Recommended movies like this
    useEffect(() => {
        const requestRecommededMovies = async () => {
            const getRecommendedMovies = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=ccfa4ecd270cd9e26cc5791a495b5aca`
            );
            setRecommendedMovies(getRecommendedMovies.data.results);
        };
        requestRecommededMovies();
    }, [id]);

    const settings = {
        infinite:true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrveArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings :{
                    slidesToScroll: 3,
                    slidesToShow: 3,
                    initialSlide: 0,
                },
            },
            {
                breakpoint: 600,
                settings :{
                    slidesToScroll: 2,
                    slidesToShow: 2,
                    initialSlide: 3,
                },
            },
            {
                breakpoint: 450,
                settings :{
                    slidesToScroll: 1,
                    slidesToShow: 2,
                    initialSlide: 2,
                },
            },
        ]
    }

    const settingsCast = {
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrveArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true
            },
          },
          {
            breakpoint: 750,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 0,
              infinite: true
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 0,
              infinite: true
            },
          },
        ],
      };

    return(
        <>
            <MovieHeroCompo />
            <div className="my-12 container px-4 mx-auto">
                <div className="flex flex-col items-start gap-3 mx-auto px-4 md:px-12 my-8">
                    <h1 className="text-gray-800 font-bold gap-3 text-2xl">
                        About the movie
                    </h1>
                    <p className="text-justify">{movie.overview}</p>
                </div>

                <div className="my-8">
                    <hr />
                </div>

                <div className="mx-auto px-4 md:px-12 my-8">
                    <h2 className="text-gray-800 font-bold text-2xl mb-3">
                        Applicable Offers
                    </h2>
                    <div className="flex flex-col gap-3 lg:flex-row ">
                        <div className="flex items-center gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
                            <div className="w-8 h-8">
                                <FaCcVisa className="w-full h-full" />
                            </div>
                            <div className="flex flex-col items-start">
                                <h3 className="text-gray-700 text-xl font-bold">
                                Visa Stream Offer
                                </h3>
                                <p className="text-gray-600">
                                Get 75% off up to INR 200 on all RuPay Card* on BookMyShow
                                Stream
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md">
                            <div className="w-8 h-8">
                                <FaCcApplePay className="w-full h-full" />
                            </div>
                            <div className="flex flex-col items-start">
                                <h3 className="text-gray-700 text-xl font-bold">Film Pass</h3>
                                <p className="text-gray-600">
                                Get 75% off up to INR 200 on all RuPay Card* on BookMyShow
                                Stream
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cast Slider */}
                <div className="my-8">
                    <hr />
                </div>

                <div className="my-8 mx-auto px-4 md:px-12">
                    <h2 className="text-gray-800 font-bold text-2xl mb-4">
                        Cast & Crew
                    </h2>
                    <Slider {...settingsCast}>
                        {
                            cast.map( (castData, index) => 
                                <CastCompo 
                                image={castData.profile_path} 
                                castName={castData.original_name} 
                                role={castData.character}
                                key={index} 
                                />
                            )
                        }
                    </Slider>
                </div>

                {/* Recommended Movies Sliders */}
                <div className="my-8">
                    <hr />
                </div>

                <div className="my-8 mx-auto px-4 md:px-12">
                <PosterSliderComponent
                    config={settings}
                    title="Recommended Movies"
                    posters={recommendedMovies}
                    isDark={false}
                />
                </div>

                {/* Similar movies Slider */}
                <div className="my-8">
                    <hr />
                </div>

                <div className="mx-auto px-4 md:px-12 my-8">
                <PosterSliderComponent
                    config={settings}
                    title="BMS XCLUSIVE Movies"
                    posters={similarMovies}
                    isDark={false}
                />
                </div>

            </div>
        </>
    )
}

export default MovieLayout(MoviePage)