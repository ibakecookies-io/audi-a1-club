import {InputDataBodyTextBgImage} from "@/app/resources/Types";
import {CardsData} from "@/app/resources/Types";

import {JSX} from "react";

function addCards(cards : CardsData[]): JSX.Element {

    const cardsRender = cards?.map((item) => (
            <div className="inline-block p-4">
                <div
                    className="rounded-lg bg-black bg-opacity-50 p-4 w-screen h-max max-w-xs overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
                >
                    <h1 className="mt-2 text-xl font-semibold">{item.title}</h1>
                    {item.subtitle?.map(paragraph =>(
                        <p className="mb-2 mt-2">
                            {paragraph}
                        </p>
                    )) }
                </div>
            </div>
        ))

    return cardsRender;

}


export default function BodyTextBgImage({inputData}: {inputData: InputDataBodyTextBgImage}){
    return(
        <div
            className={inputData.bgImage + " overflow-x-auto scroll-smooth scroll-bar-gold hover:scroll-auto relative border-amber-400 w-full h-[580px] bg-cover bg-center md:h-[900px] bg-gray-700/40 flex flex-col m-auto p-auto"}>
                <div
                    className="relative text-white mt-6 mb-6 flex flex-nowrap lg:ml-20 md:ml-2 ml-1"
                >

                {addCards(inputData.cardsData)}

               {/* <div className="inline-block">
                        <div
                            className="rounded-lg bg-black bg-opacity-50 p-4 w-screen h-max max-w-xs overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        >
                            <h1 className="mt-10 text-xl font-semibold">{inputData.cardsData[0].title}</h1>
                            <p className="mt-4">
                                {inputData.cardsData[0].subtitle[0]}
                            </p>
                            <p className="mt-4">
                                {inputData.cardsData[0].subtitle[1]}
                            </p>
                            <p className="mb-10 mt-4">
                                {inputData.cardsData[0].subtitle[2]}
                            </p>
                        </div>
                </div>
                <div className="inline-block p-4">
                        <div
                            className="rounded-lg bg-black bg-opacity-50 p-4 w-screen h-max max-w-xs overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        >
                            <h1 className="mt-8 text-xl font-semibold">{inputData.cardsData[1].title}</h1>
                            <p className="mt-4">
                                {inputData.cardsData[1].subtitle[0]}
                            </p>
                            <p className="mt-4">
                                {inputData.cardsData[1].subtitle[1]}
                            </p>
                        </div>
                    </div>*/}

                </div>

            {/*<div className="flex mx-auto my-8">*/}
            {/*    <ul className="flex justify-center">*/}
            {/*        <li className="h-6 w-6 rounded-full mx-2 cursor-pointer bg-gray-500"></li>*/}
            {/*        <li className="h-6 w-6 rounded-full mx-2 cursor-pointer bg-gray-500"></li>*/}
            {/*    </ul>*/}
            {/*</div>*/}

        </div>
    )
}
