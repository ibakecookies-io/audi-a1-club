import Image from 'next/image'
import Navbar from "@/app/component/NavBar";
import BodyText from "@/app/component/BodyText";
import BodyClubInfoText from "@/app/component/BodyClubInfoText";
import ImageCarousel from "@/app/component/ImageCarousel";
import Footer from "@/app/component/Footer";
import BodyTextBgImage from "@/app/component/BodyTextBgImage";
import BodyText1 from "@/app/component/BodyText1";
import BodyTextBgImage1 from "@/app/component/BodyTextBgImage1";
import BodyTextBgImage2 from "@/app/component/BodyTextBgImage2";
import BodyTextBgImageHorSla from "@/app/component/BodyTextBgImageHorSla";
import {model8xData} from "@/app/resources/StringResourses";

// bg-center - Делает хорошо перед


export default function Home() {
    return (
        <>
            <Navbar/>
            <div
                className="relative bg-[url('/image/bg.JPG')] w-full h-[300px] bg-cover md:h-[750px] opacity-75">
                <div className="absolute bottom-0 px-4 py-3 bg-gray-900/50 w-full">
                    <h1 className="text-white font-semibold text-xl">Сообщество ценителей Audi A1</h1>
                    <p className="text-white">
                    </p>
                </div>
            </div>
            <BodyClubInfoText/>
            <BodyTextBgImage inputData={model8xData}/>
            <BodyTextBgImage1/>
            <BodyTextBgImage2/>
            <BodyTextBgImageHorSla/>
            <Footer/>
        </>


    )
}
