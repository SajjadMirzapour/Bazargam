import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import { useContext, useMemo } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Heart from '@mui/icons-material/FavoriteBorder';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { CartContext } from '../body/cardProvider';
// import { CatchingPokemon, Send } from '@mui/icons-material';

const items = [
    {
        label: 'سبد',
        icon: <LocalGroceryStoreIcon />
    },
    {
        label: 'آدرس',
        icon: <LocationOnIcon />
    },
    {
        label: 'ارسال',
        icon: <LocalShippingIcon />
    },
    {
        label: 'پرداخت',
        icon: <PaymentIcon />
    },
    {
        label: 'تایید',
        icon: <EventAvailableIcon />
    },
    {
        label: 'تکمیل',
        icon: <CheckIcon />
    },
]

export default function Modal({ open, onClose }) {
    const [cart, setCart] = useContext(CartContext)
    // این ای دی قرمز رنگ برابر با سی.ایتم.ای دی می باشد 
    const handleAddCount = (id) => {
        setCart(cart.map(el => el.item.id === id ? { ...el, count: el.count + 1 } : el))
    }

    const handleRemoveCount = (id) => {
        setCart(cart.map(el => el.item.id === id ? el.count > 0 ? { ...el, count: el.count - 1 } : el : el))
    }

    const handleDelete = (id) => {
        setCart(cart.filter(el => el.item.id !== id))
    }
    // const sum = () => {
    //     let jam = 0
    //     for (let i = 0; i < cart.length; i++) {
    //         jam += cart[i].item.price * cart[i].count
    //     }
    //     return jam
    // }     اگ بنویسیم فور (){ریتزن فلان} اشتباه است

    // const sum = () => {
    //     let total = 0
    //     cart.forEach(c => { total += c.item.price * c.count })
    //     return total
    // }

    const sum = useMemo(() => {
        let total = 0
        cart.forEach(c => { total += c.item.price * c.count })
        return total
    }, [cart])

    let Send = (1 / 10 * sum)
    let Send2 = Send.toFixed(1)

    const Maliat = (5 / 100 * sum)
    const Maliat2 = (Maliat).toFixed(1)


    const Majmue = (sum + Send + Maliat).toFixed(1)

    return (
        <Dialog dir='rtl' maxWidth="sm w-[90%]" open={open} onClose={onClose}>
            <DialogTitle sx={{ fontWeight: 'bold', fontSize: '22px', textAlign: 'center' }}>سبد خرید</DialogTitle>
            <DialogContent className='w-[85%] mx-auto '>
                <img className='my-7' src="/images-for-bazargam/backgroundbuy.jpg" alt="#" />
                <hr />
                <div className='flex justify-between -translate-y-[22px]'>
                    {
                        items.map(({ label, icon }) => <div className='text-center' key={label}>
                            <div className='rounded-full border p-2 bg-white'>{icon}</div>
                            <span >{label}</span>
                        </div>)
                    }
                </div>
                <div>
                    {cart.length > 0 ?
                        <>
                            <div className='grid grid-cols-5 text-center border-b font-bold mb-2'>
                                <div className='col-span-2'> <span>محصول</span></div>
                                <div> <span>قیمت</span></div>
                                <div><span>تعداد</span></div>
                                <div><span>مجموع</span></div>
                            </div>
                            {cart.map(c =>
                                <div key={c.item.id} className='grid grid-cols-5 text-center border-b mb-2'>
                                    <div className='col-span-2 text-center'>
                                        <div className='flex items-center justify-between'>
                                            <img width={'84px'} src={c.item.image} alt="#" />
                                            <h2 className='font-bold'>{c.item.name}</h2>
                                            <div className='border'>
                                                <button onClick={() => handleDelete(c.item.id)} className='block border text-red-500 bg-slate-300 hover:bg-red-500 hover:text-white'>
                                                    <CloseIcon />
                                                </button>
                                                <button className='border text-green-500  hover:bg-gray-100'>
                                                    <Heart />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center'>{c.item.price} ریال</div>
                                    <div className='flex items-center justify-center'>
                                        <div className='border border-green-700 text-center w-fit h-fit mx-auto'>
                                            <button onClick={() => handleAddCount(c.item.id)} className='text-[#158945] hover:text-green-500'>
                                                <AddIcon sx={{ marginLeft: '1rem' }} />
                                            </button>
                                            <span className='ml-[16px]'>{c.count}</span>
                                            <button onClick={() => handleRemoveCount(c.item.id)} className='text-[#158945] hover:text-green-500'>
                                                <RemoveIcon />
                                            </button>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center font-bold'>{`${c.count * c.item.price}`} ریال</div>
                                </div>)}
                            <div className='flex items-center bg-[#fcf8e3] my-10'>
                                <div className='bg-[#ff9094]'>
                                    <img width={'48px'} src="/images-for-bazargam/warning.png" alt="" />
                                </div>
                                <div className='bg-[#fcf8e3] text-red-500 px-3'>
                                    <p className='bg-[yellow] px-3'>
                                        مشتری عزیز 15درصد هدیه اعتباری زرگام در سفارشات بدون کالای تنظیم بازار و بدون کدتخفیف شما اعمال می شود (اعتبار یک هفته و سقف ماهیانه ۱۰۰هزار تومان)
                                    </p>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    <div className='mb-2'>
                                        <h2>مبلغ اعتبار(زرگام : 0ریال)</h2>
                                        <div className='flex items-center rounded-md'>
                                            <input className='p-2 outline-none border w-[300px]' type="text" placeholder=' مبلغ اعتباری را به ریال وارد نمایید' />
                                            <button className='flex bg-[green] text-white p-2 hover:bg-white hover:text-[green] w-[205px] justify-center border-l border-y'>
                                                <CheckIcon sx={{ marginLeft: '4px' }} />
                                                <span>تایید اعتبار(زرگام) به ریال</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <h2>
                                            کد تخفیف
                                        </h2>
                                        <div className='flex items-center rounded-md '>
                                            <input className='outline-none p-2 border w-[300px]' type="text" placeholder='کد تخفیف خود را اینجا وارد کنید' />
                                            <button className='flex bg-[green] text-white p-2 hover:bg-white hover:text-[green] w-[205px] justify-center border-l border-y'>
                                                <div>
                                                    <CheckIcon sx={{ marginLeft: '4px' }} />
                                                    <span>تایید کد تخفیف</span>
                                                </div>

                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='shadow-lg p-6 rounded-lg mb-4'>
                                        <table className='w-full'>
                                            <tr>
                                                <td>قیمت کل:</td>
                                                <td>{sum}</td>
                                            </tr>
                                            <tr>
                                                <td>ارسال:</td>
                                                <td className='text-[red]'>{Send2}</td>
                                            </tr>
                                            <tr>
                                                <td >مالیات:</td>
                                                <td className='text-[orange]'>{Maliat2}</td>
                                            </tr>
                                            <tr className='font-bold'>
                                                <td>مجموع:</td>
                                                <td>{Majmue} ریال</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div className='flex'>
                                        <button className='p-3 text-[green] bg-[white] border ml-2 hover:bg-gray-200'>
                                            < ChevronRightIcon />
                                            <span>ادامه خرید</span>
                                        </button>
                                        <button className='p-3 text-[white] bg-[green] hover:bg-[#a6ce39]'>
                                            <span>پرداخت</span>
                                            <ChevronLeftIcon />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                        : <div className='flex items-center bg-[#fcf8e3] my-10'>
                            <div className='bg-[#ff9094]'>
                                <img width={'48px'} src="/images-for-bazargam/warning.png" alt="" />
                            </div>
                            <div className='bg-[#fcf8e3] text-red-500 px-3'>
                                <p className='px-3'>
                                    سبد خرید شما خالی است!
                                </p>
                            </div>
                        </div>
                    }
                </div>
            </DialogContent>
        </Dialog >
    )
}