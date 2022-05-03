import { Outlet, useLocation, useParams } from "react-router-dom"
import Header from "./header/header"
import Footer from "./footer/footer"
import CartProvider from "../providers/CartProvider";
import Scroll from "./scroll/scroll";
// import { useEffect, useState } from "react";


export default function Layout() {
    const location = useLocation()
    // const [state, setState] = useState("T")
    // const variable = null
    // const handleChange = () => {
    //     true && setState("U")
    //     setState(variable ?? "O")
    //     setState(variable || "O")

    // }
    // const params = useParams()
    // const id = false || undefined || 2 || -1
    // useEffect(() => {
    //     axios(`/article/${id}`)
    // }, [])
    // const isFixedHeader = location.pathname !== '/bazargam/login' || location.pathname !== '/bazargam/register';
    const isFixedHeader = !['/bazargam/login', '/bazargam/register'].includes(location.pathname)
    return (
        <CartProvider>
            <Scroll />
            <div dir="rtl">
                <div className={`${isFixedHeader ? 'fixed' : ''} top-0 w-full z-10`}>
                    <Header />
                </div>
                <div className={isFixedHeader ? "mt-[240px]" : ''}>
                    <Outlet />
                    <Footer />
                </div>
            </div>
        </CartProvider>
    )
}