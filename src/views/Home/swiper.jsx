import { Navigation, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'


export default function Mid() {
    return (
        <div className="flex justify-between max-w-[100%] w-[95%] mx-auto my-3" >
            <div className='w-[470px]'>
                <img className="rounded-lg" width={'100%'} src="/images-for-bazargam/fruit1.png" alt="#" />
            </div>
            <div className='w-[calc(100%-505px)]'>
                <Swiper modules={[Navigation, A11y]} autoplay slidesPerView={1} navigation={{
                    nextEl: '#next-slide-button',
                    prevEl: '#prev-slide-button',
                }}
                    loop // loop={true}
                    pagination={false}
                    scrollbar={false}
                // breakpoints={{
                //     0: {
                //         slidesPerView: 2,
                //         spaceBetween: 10
                //     },
                //     768: {
                //         slidesPerView: 1,
                //         spaceBetween: 50
                //     }
                // }}
                >
                    <SwiperSlide> <img className="rounded-lg max-h-[329px] w-full" src="/images-for-bazargam/fruit4slide.jpg" alt="#" /></SwiperSlide>
                    <SwiperSlide> <img className="rounded-lg max-h-[329px] w-full" src="/images-for-bazargam/fruit3slide.png" alt="#" /></SwiperSlide>
                    <SwiperSlide> <img className="rounded-lg max-h-[329px] w-full" src="/images-for-bazargam/fruit2slide.png" alt="#" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}