import { Products1 } from "./data"
import Mahsul from "./mahsul"
import { Fade } from "react-awesome-reveal";

export default function Container() {
    return (
        <Fade delay={500} direction="up" triggerOnce>
            <div className="text-center py-14">
                {/* background: radial-gradient(ellipse at center,#979797 5%,rgba(255,255,255,0.55) 50%); */}
                <div className="w-[95%] text-gray-300 mx-auto font-medium"><hr /></div>
                {/* <span className="border-b border-gray-300 w-1/3 mx-auto"></span> */}
                <h1 className="inline-block text-[28px] text-[#158945] bg-white -translate-y-5 px-4">اقلام تنظیم بازار</h1>
                {/* <span className="border-b border-gray-300 w-1/3 mx-auto"></span> */}
            </div>
            <div className="w-max-[100%] w-[95%] mx-auto grid gap-3 xl:grid-cols-7  lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
                {Products1.map(product => <Mahsul
                    key={product.id}
                    product={product}
                // قرمز برابر سفید است
                />)}
            </div>
        </Fade>
    )
}