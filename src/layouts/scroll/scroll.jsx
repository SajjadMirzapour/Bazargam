import { useState, useEffect } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


export default function Scroll() {

    const [showBtn, setShowBtn] = useState(false)
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowBtn(true);
            } else {
                setShowBtn(false);
            }
        });
        setTimeout(() => {
            goToTop()
        }, 500)

    }, []);

    return (
        showBtn && <button onClick={goToTop} className='fixed right-[40px] bottom-[20px] rounded-full bg-blue-600 z-20 p-3' >
            <ArrowUpwardIcon sx={{ width: '40px', height: '40px', color: 'white' }} />
        </button>
    )

    // if (showBtn)
    //     return <button onClick={goToTop} className='fixed right-[40px] bottom-[20px] rounded-full bg-blue-600 z-20 p-3' >
    //         <ArrowUpwardIcon sx={{ width: '40px', height: '40px', color: 'white' }} />
    //     </button>
    // return null
}