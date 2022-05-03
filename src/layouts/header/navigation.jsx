import UnstyledSelectSimple from "./selectMaterial";
import UnstyledSelectSimple2 from "./selectMaterial2";
import PhoneIcon from '@mui/icons-material/LocalPhone';
import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <nav className=" bg-[#f1f2f2] border-b border-[#d2d2d2] p-1">
            <div className="max-w-[100%] w-[95%] mx-auto flex justify-between items-center">
                <div className="flex justify-between items-center">
                    <UnstyledSelectSimple />
                    <a href="tel:021-91092080" className="hidden sm:flex justify-between items-center hover:text-red-500">
                        <span className="ml-2 text-xs sm:text-[14px]"> تماس با ما 2418-021 و91092080-021 </span>
                        <PhoneIcon sx={{ width: '19px' }} />
                    </a>
                </div>
                <div className="hidden lg:flex">
                    <div className="text-[16px]">
                        <UnstyledSelectSimple2 />
                        <a className="mr-3 last:mr-0 hover:text-red-500" href="#">
                            اخبار
                        </a>
                        <a className="mr-3 last:mr-0 hover:text-red-500" href="#">
                            بلاگ
                        </a>
                        <a className="mr-3 last:mr-0 hover:text-red-500" href="#">
                            دریافت لینک اپلیکیشن
                        </a>
                        <a className="mr-3 last:mr-0 text-red-500" href="#">
                            دعوت از دوستان
                        </a>
                    </div>
                </div>
                <div className="text-xs sm:text-[14px]">
                    <NavLink to={'/register'} >
                        <span>رجیستر</span>
                    </NavLink>
                    <NavLink to={'/login'} className="flex justify-between items-center">
                        <img src="/images-for-bazargam/login2.png" width={'19px'} alt="#" />
                        <span>ورود به حساب کاربری</span>
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}