import About from "./components/aboutUs/About";
import Achievement from "./components/achievements/achievement";
import CreativeAndTalented from "./components/CreativeAndTalented/CreativeAndTalented";
import Delivering from "./components/Delivering/Delivering";
import Header from "./components/Header/Header";
import Hero from "./components/Herosection/Hero";
import Portfolio from "./components/portofolio/Portfolio";


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
        </>
    )
}
