export default function Footer() {
    return (
        <div className="bg-[#ececec]">
            <div className="w-max-[100%] w-[95%] mx-auto">
                <div className="flex items-center my-10">
                    <div className="w-[1204px] p-5 text-14 md:text-[18px]">
                        <h1 className="text-[#9b9b9b] text-center mb-3">اپلیکیشن بازرگام برای Android و iOS در دسترس است.</h1>
                        <div className="grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-3 p-3">
                            <img className="ml-8 last:ml-0" width={'140px'} src="/images-for-bazargam/charkhune.png" alt="#" />
                            <img className="ml-8 last:ml-0" width={'140px'} src="/images-for-bazargam/android.png" alt="#" />
                            <img className="ml-8 last:ml-0" width={'140px'} src="/images-for-bazargam/google.png" alt="#" />
                            <img className="ml-8 last:ml-0" width={'140px'} src="/images-for-bazargam/bazar.png" alt="#" />
                            <img className="ml-8 last:ml-0" width={'140px'} src="/images-for-bazargam/myket.png" alt="#" />
                        </div>
                    </div>
                    <div className="hidden md:flex relative w-[246px]">
                        <img className="absolute  left-0 top-[-110px]" src="/images-for-bazargam/mobile.png" alt="#" />
                    </div>
                </div>
            </div>
            <div className="footer_bazargam p-5 pt-40 md:pt-20 z-[1] relative ">
                <div className="w-max-[100%] w-[95%] mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 text-[14px] md:text-[18px]">
                    <div className="p-2">
                        <h1 className="text-white">اطلاعالات </h1>
                        <div className="my-3">
                            <ul className="text-[#9e9599]">
                                <li >
                                    <a className="hover:mr-1 hover:text-green-700 transition-all duration-500" href="#">
                                        محصولات جدید
                                    </a>
                                </li>

                                <li >
                                    <a className="hover:mr-1 hover:text-green-700 transition-all duration-500" href="#">
                                        آخرین محصولات مشاهده شده
                                    </a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="p-2">
                        <h1 className="text-white">خدمت </h1>
                        <div className="my-3">
                            <ul className="text-[#9e9599]">
                                <li className="hover:mr-1 hover:text-green-700 transition-all duration-500">
                                    <a href="#">
                                        پرسش های متداول
                                    </a>
                                </li>
                                <li className="hover:mr-1 hover:text-green-700 transition-all duration-500">
                                    <a href="#">
                                        اطلاعات پرداخت
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-2">
                        <h1 className="text-white">شرکت </h1>
                        <div className="my-3">
                            <ul className="text-[#9e9599]">
                                <li className="hover:mr-1 hover:text-green-700 transition-all duration-500">
                                    <a href="#">
                                        درباره ما
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-2">
                        <h1 className="text-white mb-3">عضویت در خبرنامه</h1>
                        <input className="px-2 py-1 rounded-md outline-none w-[250px] md:max-w-full" type="text" placeholder="ایمیل" />
                    </div>
                    <img className="p-2 mx-auto" src="/images-for-bazargam/logo2.png" alt="" />
                </div>
            </div>
        </div>

    )
}