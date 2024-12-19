import { AboutUsSection } from "../components/about/AboutUsSection"
import { Banner } from "../components/home/Banner"
import { BusinessSolution } from "../components/home/BusinessSolution"
import { ServicesSection } from "../components/services/ServicesSection"
import { StatSection } from "../components/StatSection"

export const HomePage = () =>{
    return (
        <>
        <Banner/>
        <BusinessSolution/>
        <AboutUsSection/>
        <ServicesSection/>
        <StatSection/>
        </>
    )
}