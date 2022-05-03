import { useContext } from "react"
import { CartContext } from "./cardProvider"

export default function Mahsul({ product }) {
    const { name, image, price, weight, runOut, discount, id } = product
    //  [name : 'hug' , image:'tyk' , price:'iiy' , weight:'54']
    const [cart, setCart] = useContext(CartContext)

    const handleAdd = () => {
        const d = cart.find(c => c.item.id === id)
        if (d) {
            setCart(cart.map(c => c.item.id === id ? { ...c, count: c.count + 1 } : c))
        } else
            setCart(cart.concat({ item: product, count: 1 }))
    }

    return (
        <div className="w-full border-2 rounded-lg bg-gray-50 p-2 hover:shadow-xl hover:bg-white relative">
            <img src={image} alt={name} className='mb-2 last:mb-0 w-full' />
            {Boolean(discount) && <div className="bg-yellow-500 text-white text-xs p-2 absolute top-3 right-3 rounded-3xl">{discount}%</div>}
            <div className="mb-2 last:mb-0 h-[100px]">
                <h1 className="text-center font-bold mb-2 last:mb-0'">{name.length > 20 ? `${name.slice(0, 20)} ...` : name}</h1>
                <div className="flex text-[#0ae] font-bold justify-center mb-2 last:mb-0'">
                    <h2 className=" ml-2">{weight}</h2>
                    <span> گرم </span>
                </div>
                <div className="flex text-[#158945] font-bold border-b mb-2 last:mb-0'">
                    <h3 className="ml-2">{price}</h3>
                    <span> تومان </span>
                </div>
            </div>
            {runOut ? <h6 className="text-red-500 text-center font-bold">تمام شد</h6> : <button onClick={handleAdd} className="flex  mx-auto items-center  text-[#7bb241] hover:text-[#158945] mb-2 last:mb-0'">
                <span className="ml-2">افزودن به سبد</span>
                <img src="/images-for-bazargam/basket.png" width={'15px'} alt="#" />
            </button>}
        </div>
    )
}