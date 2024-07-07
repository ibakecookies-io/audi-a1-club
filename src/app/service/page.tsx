import Navbar from "@/app/component/NavBar";
import React from "react";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <Navbar/>
            <div className="mt-36 relative flex flex-col text-white bg-gray-700/40 shadow-md bg-clip-border rounded-xl w-full">
                <div
                    className="relative h-56 mx-8 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40 sm:w-96">
                    <img
                        src="https://a.d-cd.net/2Tit0-WeocX0JV-Xoikgljq2kX4-1920.jpg?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                        alt="card-image" />
                </div>
                <div className="p-6">
                    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Автосервис "MOT Remworks"
                    </h5>

                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        Ремонта и обслуживания автомобилей Volkswagen, Audi, Skoda, Seat.
                    </p>
                  <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">

                    </p>


                </div>
                <div className="p-6 pt-0">
                    <div className="mt-6 space-y-8 md:mt-8">
                        <div>
                            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Контакты</h2>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Пн-Вс: с 10:00 до 21:00</p>
                            <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">г. Москва, улица Люблинская, д.64 (район Люблино, Юго-Восточный АО).</p>
                        </div>

                        <p className="flex items-start -mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>

                            <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">+7(493) 563-7401</span>
                        </p>
                        <p className="flex items-start -mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>

                            <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">+7(493) 123-4567</span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-28 relative flex flex-col text-white bg-gray-700/40 shadow-md bg-clip-border rounded-xl w-full">
                <div
                    className="relative h-56 mx-8 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-white shadow-blue-gray-500/40 sm:w-96">
                    <img
                        src="https://static.tildacdn.com/tild6166-3136-4664-b133-623563666133/____.png?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
                        alt="card-image" />
                </div>
                <div className="p-6">
                    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Автосервис "VAG engine"
                    </h5>
                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        Профильный сервис послегарантийного обслуживания автомобилей Volkswagen, Audi, Skoda, Seat.
                    </p>
                  <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        Обращаясь к нам, Вы получаете квалифицированный ремонт, который проводят опытные специалисты работающие не один год с автомобилями VAG группы.
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <div className="mt-6 space-y-8 md:mt-8">
                        <div>
                            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Контакты</h2>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Пн-Вс: с 10:00 до 21:00</p>
                            <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">г. Москва, улица Люблинская, д.64 (район Люблино, Юго-Восточный АО).</p>
                        </div>

                        <p className="flex items-start -mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>

                            <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">+7(493) 563-7401</span>
                        </p>
                        <p className="flex items-start -mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>

                            <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">+7(493) 123-4567</span>
                        </p>
                        <p className="flex items-start -mx-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.417 9.57a7.917 7.917 0 1 1-8.144-7.908 1.758 1.758 0 0 1 .451 0 7.913 7.913 0 0 1 7.693 7.907zM5.85 15.838q.254.107.515.193a11.772 11.772 0 0 1-1.572-5.92h-3.08a6.816 6.816 0 0 0 4.137 5.727zM2.226 6.922a6.727 6.727 0 0 0-.511 2.082h3.078a11.83 11.83 0 0 1 1.55-5.89q-.249.083-.493.186a6.834 6.834 0 0 0-3.624 3.622zm8.87 2.082a14.405 14.405 0 0 0-.261-2.31 9.847 9.847 0 0 0-.713-2.26c-.447-.952-1.009-1.573-1.497-1.667a8.468 8.468 0 0 0-.253 0c-.488.094-1.05.715-1.497 1.668a9.847 9.847 0 0 0-.712 2.26 14.404 14.404 0 0 0-.261 2.309zm-.974 5.676a9.844 9.844 0 0 0 .713-2.26 14.413 14.413 0 0 0 .26-2.309H5.903a14.412 14.412 0 0 0 .261 2.31 9.844 9.844 0 0 0 .712 2.259c.487 1.036 1.109 1.68 1.624 1.68s1.137-.644 1.623-1.68zm4.652-2.462a6.737 6.737 0 0 0 .513-2.107h-3.082a11.77 11.77 0 0 1-1.572 5.922q.261-.086.517-.194a6.834 6.834 0 0 0 3.624-3.621zM11.15 3.3a6.82 6.82 0 0 0-.496-.187 11.828 11.828 0 0 1 1.55 5.89h3.081A6.815 6.815 0 0 0 11.15 3.3z"></path>
                            </svg>
                            <Link href="https://www.vagengine.ru/">
                                <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">vagengine.ru</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>


        </>


    )
}
