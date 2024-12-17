import { AboutUsSection } from "../components/about/AboutUsSection"
import { Banner } from "../components/home/Banner"
import { BusinessSolution } from "../components/home/BusinessSolution"

export const HomePage = () =>{
    return (
        <>
        <Banner/>
        <BusinessSolution/>
        <AboutUsSection/>
        </>
    )
}