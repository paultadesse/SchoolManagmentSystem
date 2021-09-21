import Home from "./components/Home";
import NavBar from "./components/NavBar";

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
        }
    ]
};
