import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CartContext } from '../body/cardProvider';
import Modal from './modal';


export default function Middle() {

    const [open, setOpen] = useState(false);

    const showModal = () =>
        setOpen(true)

    const handleClose = () => {
        setOpen(false);
    };
    const [cart] = useContext(CartContext)

    const getCartCount = () => {
        let count = 0;
        cart.forEach(c => {
            count += c.count
        })
        return count
    }

    return (
        <div className="flex justify-between max-w-[100%] w-[95%] mx-auto items-center p-3 border-b border-[#d2d2d2] bg-white">
            <NavLink to={'/'} className='hidden md:flex'>
                <img src="/images-for-bazargam/logo.png" width={'120px'} alt="#" />
            </NavLink>
            <div className="flex justify-between items-center wi">
                <div className="flex justify-between items-center relative ml-6">
                    <input type="text" placeholder="جستجو در فروشگاه" className="border rounded-md border-[green] w-[210px] md:w-[500px] h-[30px] hover:shadow-md outline-none p-2  placeholder:text-[gray] placeholder:text-[16px]" />
                    <a href="#">
                        <img className="bg-[#158945] hover:bg-[#a6ce39] rounded-md absolute top-0 left-0 hover:bg" src="/images-for-bazargam/search.svg" width={'30px'} alt="#" />
                    </a>
                </div>
                <div className="relative">
                    <div className="absolute bg-green-500 rounded-full px-2 py-1 text-[13px] text-white left-[+14px] top-[-12px]">{getCartCount()}</div>
                    <button onClick={showModal}>
                        <img className='w-[20px] sm:w-[25px]' src="/images-for-bazargam/basket.png" alt="#" />
                    </button>
                </div>
            </div>
            <Modal open={open} onClose={handleClose} />
        </div>

    )
}