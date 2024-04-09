import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import slider1 from "../assets/slide1.avif"
import slider2 from "../assets/slide 2.jpg"
import slider3 from "../assets/slide 3.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Estate from '../Components/Estate';


AOS.init();
const Home = () => {
    return (
        <div className='lg:mx-28'>
            <Swiper navigation={true} modules={[Navigation]} loop={true} className="mySwiper">
                <SwiperSlide >
                    <div className="hero mt-12 rounded-3xl bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/GdXPmrD/Screenshot-2024-04-08-225728.png)'}}>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="flex flex-col md:flex-row justify-around lg:mx-16 gap-8 my-8">
                                <div data-aos="fade-right" data-aos-duration="1000" className="text-center lg:mt-24 mb-8">
                                    <h1 className="mb-5 text-5xl font-bold">Welcome to the <br /><span className='bg-gradient-to-r from-[#1DD100] via-primary to-secondary text-transparent bg-clip-text bg-300% animate-gradient'>Residential House</span></h1>
                                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                </div>
                                <img data-aos="fade-left" data-aos-duration="1500" className='w-[420px] md:w-96 h-[320px] lg:h-[360px] rounded-3xl' src={slider1} alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="hero mt-12 rounded-3xl bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/GdXPmrD/Screenshot-2024-04-08-225728.png)'}}>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="flex flex-col md:flex-row justify-around lg:mx-16 gap-8 my-8">
                                <div data-aos="fade-right" data-aos-duration="1000" className="text-center lg:mt-24 mb-8">
                                    <h1 className="mb-5 text-5xl font-bold">Welcome to the <br /><span className='bg-gradient-to-r from-[#1DD100] via-primary to-[#23BE0A] text-transparent bg-clip-text bg-300% animate-gradient'>Residential House</span></h1>
                                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                </div>
                                <img data-aos="fade-left" data-aos-duration="1500" className='w-[420px] md:w-96 h-[320px] lg:h-[360px] rounded-3xl' src={slider2} alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="hero mt-12 rounded-3xl bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/GdXPmrD/Screenshot-2024-04-08-225728.png)'}}>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="flex flex-col md:flex-row justify-around lg:mx-16 gap-8 my-8">
                                <div data-aos="fade-right" data-aos-duration="1000" className="text-center lg:mt-24 mb-8">
                                    <h1 className="mb-5 text-5xl font-bold">Welcome to the <br /><span className='bg-gradient-to-r from-[#1DD100] via-white to-[#23BE0A] text-transparent bg-clip-text bg-300% animate-gradient'>Residential House</span></h1>
                                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                </div>
                                <img data-aos="fade-left" data-aos-duration="1500" className='w-[420px] md:w-96 h-[320px] lg:h-[360px] rounded-3xl' src={slider3} alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <Estate />
        </div>
    );
};

export default Home;