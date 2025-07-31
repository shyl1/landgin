import About from "./components/aboutUs/About";
import Achievement from "./components/achievements/achievement";
import CreativeAndTalented from "./components/CreativeAndTalented/CreativeAndTalented";
import Delivering from "./components/Delivering/Delivering";
import Header from "./components/Header/Header";
import Hero from "./components/Herosection/Hero";
import Partners from "./components/Partners/Partners";
import Portfolio from "./components/portofolio/Portfolio";
import Team from "./components/Team/Team";
import Testimonials from "./components/Testimonials/Testimonials";
import WebHosting from "./components/WebHosting/WebHosting";


export default function App() {
    return (
        <>
            <Header />
            <Hero />
            <Achievement />
            <About />
            <Delivering />
            <CreativeAndTalented />
            <Portfolio />
            <Partners />
            <WebHosting />
            <Testimonials />
            <Team />
        </>
    )
}
