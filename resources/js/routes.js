import Home from "./components/Home";
import NavBar from "./components/NavBar";
import HeroSection from "./components/hero/HeroSection";
import HeroSecond from "./components/hero/HeroSecond";
import HeroData from "./components/hero/HeroData";

export default {
    mode: "history",
    linkActiveClass: "border-b-2 border-t-2 border-gray-400 text-gray-500 ",
    routes: [
        // {
        //     path: "*",
        //     component: PageNotFound
        // },

        {
            path: "/",
            component: Home,
            name: "Home"
        },
        {
            path: "/navbar",
            component: NavBar,
            name: "Navbar"
        },
        {
            path: "/herosection",
            component: HeroSection,
            name: "Herosection"
        }
        ,
        {
            path: "/herosecond",
            component: HeroSecond,
            name: "Herosecond"
        }
        ,
        {
            path: "/herodata",
            component: HeroData,
            name: "Herodata"
        }
    ]
};
