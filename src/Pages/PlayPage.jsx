import React from "react";
import DefaultLayout from "../Layouts/Default.Layout";

// Component
import PosterSliderComponent from '../Components/PosterSlider/PosterSliderComponent'
import PosterComponent from "../Components/Poster/PosterComponent";
import PlayFilterComponent from "../Components/PlayFilter/PlayFilterComponent";


const PlayPage = () => {
    return(
        <>
            <div className="container mx-auto px-4 my-10">

                <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-4">
                    <h2 className="text-2xl font-bold mb-4">Plays In Hospet</h2>
                    <div className="flex flex-wrap">
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex justify-center items-center">
                            <PosterComponent
                            isPlay={true}
                            src=""
                            title="So Rude of Me By Sweets"
                            subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
                            />
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center justify-center">
                            <PosterComponent
                            isPlay={true}
                            src=""
                            title="So Rude of Me By Sweets"
                            subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
                            />
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center justify-center">
                            <PosterComponent
                            isPlay={true}
                            src=""
                            title="So Rude of Me By Sweets"
                            subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
                            />
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex items-center justify-center">
                            <PosterComponent
                            isPlay={true}
                            src=""
                            title="So Rude of Me By Sweets"
                            subtitle="Comedy Shows | English, Kannada | 18yrs+ | 2hr 30mins"
                            />
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/4 p-4 bg-white rounded">
                    <h2 className="text-2xl font-bold mb-4">Filters</h2>
                    <div>
                        <PlayFilterComponent
                        title="Date"
                        tags={["Today", "Tomorrow", "This Weekend"]}
                        />
                    </div>
                    <div>
                        <PlayFilterComponent 
                        title="Language" 
                        tags={["English", "Kannada", "Hindi", "Telgu"]} 
                        />
                    </div>
                </div>

            </div>
        </>
    )
}

export default DefaultLayout(PlayPage)