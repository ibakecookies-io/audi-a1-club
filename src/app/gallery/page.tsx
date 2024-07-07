import Navbar from "@/app/component/NavBar";
import React from "react";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <Navbar/>
            <div className="mt-36 relative flex flex-col text-white bg-gray-700/40 shadow-md bg-clip-border rounded-xl w-full">
                <div className="p-6">
                    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        Галерея пока пуста
                    </h5>

                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        Фото машин клуба обязательно тут появятся
                    </p>
                    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">

                    </p>


                </div>
            </div>

        </>


    )
}

