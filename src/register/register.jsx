import { useRef, useState } from "react"
import { ToastContainer, toast } from "material-react-toastify"
import 'material-react-toastify/dist/ReactToastify.css';
import { CircularProgress } from "@material-ui/core";

export default function Register() {

    const [information, setInformation] = useState([])
    const nameRef = useRef([])
    const lastNameRef = useRef([])
    const [loading, setLoading] = useState(false)

    const add = () => {
        const name = nameRef.current.value
        const lastName = lastNameRef.current.value
        const notify = () => toast(` با موفقیت اضافه شد ${name} ${lastName}`, { style: { direction: 'rtl' }, type: 'success' });

        if (name && lastName && !information.find(item => item.name === name && item.lastName === lastName)) {
            setLoading(true)
            setTimeout(() => {
                setInformation(information.concat({ name, lastName }))
                notify()
                setLoading(false)
            }, 1000)
        }

        if (!name || !lastName) {
            const notifyError = () => toast(' لطفا پر کنید', { position: 'bottom-right', type: 'error' });
            notifyError()
        }
        if (information.find(item => item.name === name && item.lastName === lastName)) {
            const notifyError = () => toast('تکراری می باشد', { position: 'bottom-right', type: 'error' });
            notifyError()
        }
    }

    return (<>
        <div className="md:w-[40%] w-[60%] mx-auto text-[14px]">
            <h1 className="text-center font-bold my-3 md:text-[22px]">خوش آمدید، لطفا اضافه کنید!</h1>
            <div className="border bg-[#fcfcfc]">
                <div className="p-4 text-[14px] md:text-[16px]">
                    <h3 className="border-b-2 mb-3 py-3 font-bold">
                        اعضاء فروشگاه
                    </h3>
                    <div className="mb-3">
                        <input ref={nameRef} className="p-2 border border-[green] w-full mb-2 outline-none" type="text" placeholder="نام" />
                    </div>
                    <div className="mb-3">
                        <input ref={lastNameRef} className="p-2 border border-[green] w-full outline-none" type="text" placeholder="نام خانوادگی" />
                    </div>
                    <button onClick={add} className="flex justify-center items-center bg-[#268b26] text-white p-3 w-full disabled:bg-gray-300 hover:bg-white hover:text-[#268b26] transition-all duration-300" disabled={loading}>
                        اضافه کردن
                        {loading && <CircularProgress style={{ marginRight: 4, fontSize: 10, color: 'white', height: '24px', width: '24px' }} />}
                    </button>
                    <ToastContainer />

                </div>
            </div>
        </div>
        {information.length > 0 && <div className="md:w-[40%] w-[60%] mx-auto text-[14px]  bg-[#fcfcfc] my-10 border p-4">
            {information.map((i, index) =>
                <div className="border p-4 my-3 bg-white md:text-[16px]" key={index}>
                    <span>کاربر {index + 1}: </span>
                    <span className="mr-1">{i.name}</span>
                    <span className="mr-1">{i.lastName}</span>
                </div>
            )}
        </div>}
    </>
    )
}