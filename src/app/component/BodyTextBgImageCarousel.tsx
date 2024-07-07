export default function BodyTextBgImageCarousel() {
    return (
        <div
            className="relative border-t border-amber-400 bg-[url('/image/audi_bg_1_2.jpg')] w-full h-full bg-cover bg-center md:h-[900px] bg-gray-700/40 bg-opacity-70 flex flex-col m-auto p-auto">
            <div
                className="relative carousel container"
            >
                <div className="carousel-inner relative overflow-hidden w-full">
                    {/*Slide 1*/}
                    <input
                        className="carousel-open"
                        type="radio"
                        id="carousel-1"
                        name="carousel"
                        aria-hidden="true"
                    />
                    <div
                        className="carousel-item absolute opacity-0"
                    >
                        <div className="p-4">
                            <div className="rounded-lg bg-black bg-opacity-50 p-4">
                                <h1 className="mt-10 text-xl font-semibold">Поколение 8X Рестайлинг (2014 – 2018)</h1>
                                <p className="mt-4">
                                    Attraction: базовая модель со стальными дисками, динамической подвеской, магнитолой/CD-плеером, электроприводом регулировки внешних зеркал заднего вида, регулируемым по высоте водительским сиденьем, системой «старт-стоп», но без противотуманных фар и климатической установки.</p>
                                <p className="mt-4">
                                    Ambition: в отличие от версии Attraction комплектуется 16-дюймовыми легкосплавными дисками, спортивной подвеской, противотуманными фарами, алюминиевыми декоративными элементами в салоне, спортивными сиденьями, спортивным кожаным рулем, информационной системой водителя и климатической установкой с ручным управлением (только с двигателем 185 л. с.).</p>
                            </div>
                        </div>
                    </div>
                    {/*Slide 2*/}
                    <input
                        className="carousel-open"
                        type="radio"
                        id="carousel-2"
                        name="carousel"
                        aria-hidden="true"
                    />
                    <div
                        className="carousel-item absolute opacity-0"
                    >
                        <div className="p-4">
                            <div className="rounded-lg bg-black bg-opacity-50 p-4">
                                <h1 className="mt-10 text-xl font-semibold">Поколение 8X Рестайлинг (2014 – 2018)</h1>
                                <p className="mt-4">
                                    Attraction: базовая модель со стальными дисками, динамической подвеской, магнитолой/CD-плеером, электроприводом регулировки внешних зеркал заднего вида, регулируемым по высоте водительским сиденьем, системой «старт-стоп», но без противотуманных фар и климатической установки.</p>
                                <p className="mt-4">
                                    Ambition: в отличие от версии Attraction комплектуется 16-дюймовыми легкосплавными дисками, спортивной подвеской, противотуманными фарами, алюминиевыми декоративными элементами в салоне, спортивными сиденьями, спортивным кожаным рулем, информационной системой водителя и климатической установкой с ручным управлением (только с двигателем 185 л. с.).</p>
                            </div>
                        </div>
                    </div>
                    {/*Slide 3*/}
                    <input
                        className="carousel-open"
                        type="radio"
                        id="carousel-3"
                        name="carousel"
                        aria-hidden="true"
                    />
                    <div
                        className="carousel-item absolute opacity-0"
                    >
                        <div className="p-4">
                            <div className="rounded-lg bg-black bg-opacity-50 p-4">
                                <h1 className="mt-10 text-xl font-semibold">Поколение 8X Рестайлинг (2014 – 2018)</h1>
                                <p className="mt-4">
                                    Attraction: базовая модель со стальными дисками, динамической подвеской, магнитолой/CD-плеером, электроприводом регулировки внешних зеркал заднего вида, регулируемым по высоте водительским сиденьем, системой «старт-стоп», но без противотуманных фар и климатической установки.</p>
                                <p className="mt-4">
                                    Ambition: в отличие от версии Attraction комплектуется 16-дюймовыми легкосплавными дисками, спортивной подвеской, противотуманными фарами, алюминиевыми декоративными элементами в салоне, спортивными сиденьями, спортивным кожаным рулем, информационной системой водителя и климатической установкой с ручным управлением (только с двигателем 185 л. с.).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Add additional indicators for each slide*/}
            <div className="p-4 mt-4">
                <ol className="carousel-indicators">
                    <li className="inline-block mr-3">
                        <label
                            htmlFor="carousel-1"
                            className="carousel-bullet cursor-pointer block text-6xl text-gray-600 hover:text-white"
                        >
                            •
                        </label>
                    </li>
                    <li className="inline-block mr-3">
                        <label
                            htmlFor="carousel-2"
                            className="carousel-bullet cursor-pointer block text-6xl text-gray-600 hover:text-white"
                        >
                            •
                        </label>
                    </li>
                    <li className="inline-block mr-3">
                        <label
                            htmlFor="carousel-3"
                            className="carousel-bullet cursor-pointer block text-6xl text-gray-600 hover:text-white"
                        >
                            •
                        </label>
                    </li>
                </ol>

            </div>

        </div>
    )
}