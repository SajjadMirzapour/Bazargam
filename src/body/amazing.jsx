import { Fade } from "react-awesome-reveal";
import { Products2 } from "./data2";
import Mahsul from "./mahsul";

export default function Amazings() {
    return (
        <Fade delay={500} direction='up' triggerOnce>
            <div className="flex justify-between items-center">
                <span className="border-b border-gray-300 w-1/3 mx-auto"></span>
                <h1 className="text-center text-[28px] text-[#158945] my-10">شگفت انگیز ها</h1>
                <span className="border-b border-gray-300 w-1/3 mx-auto"></span>
            </div>
            <div className="w-max-[100%] w-[95%] mx-auto grid gap-3 xl:grid-cols-7  lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
                {Products2.map(p => <Mahsul
                    key={p.id}
                    product={p}
                />)}
            </div>
        </Fade>
    )
}