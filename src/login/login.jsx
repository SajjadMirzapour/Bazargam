export default function Login() {
    return (
        <div className="md:w-[40%] w-[60%] mx-auto text-[14px]">
            <h1 className="text-center font-bold my-3 md:text-[22px]">خوش آمدید، لطفا ثبت نام کنید!</h1>
            <div className="border bg-[#fcfcfc]">
                <div className="p-4 ">
                    <h3 className="border-b-2 mb-3 py-3 font-bold md:text-[22px]">
                        اعضاء فروشگاه
                    </h3>
                    <div className="mb-3">
                        <input className="p-2 border border-[green] w-full mb-2 outline-none" type="text" placeholder="نام کاربری(موبایل)" />
                    </div>
                    <div className="mb-3">
                        <input className="p-2 border border-[green] w-full outline-none" type="text" placeholder="کلمه عبور" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 mb-3 md:text-[16px]  md:mb-4">
                        <div className="flex items-center mb-0 md:mb-2">
                            <input className="ml-2" type="checkbox" />
                            <p className="">مرا به خاطر بسپار</p>
                        </div>
                        <p><a href="#">رمز خود را فراموش کرده اید؟</a></p>
                    </div>
                    <button className="md:text-[17px] bg-[#268b26] text-center text-white p-3 w-full mb-3 hover:bg-white hover:text-[#268b26] transition-all duration-500">
                        ورود به سیستم
                    </button>
                    <div className="md:text-[17px]">
                        <p className="mb-3">
                            هنوز ثبت نام نکرده اید؟
                        </p>
                        <button className="bg-[#268b26] text-center text-white p-3 w-full ">
                            ثبت نام
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}