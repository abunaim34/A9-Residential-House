import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/bundle';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Estate from '../Components/Estate';
import { Helmet } from 'react-helmet-async';


AOS.init();
const Home = () => {
    return (
        <div className='lg:mx-28'>
            <Helmet>
                <title>Residential House | Home</title>
            </Helmet>
            <Swiper
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Navigation, Autoplay, Pagination]}
                loop={true}
                autoplay={{
                    delay: 3000,
                }}
                className="mySwiper">
                <SwiperSlide >
                    <div className="hero mt-12 h-[510px] rounded-3xl" style={{ backgroundImage: 'url(https://i.ibb.co/bKbc80F/modern-farmhouse-meadow-hill-generative-ai-587448-2232.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-xl ">
                                <h1 data-aos="fade-right" className="mb-5 md:leading-[65px] text-4xl md:text-5xl  font-bold">Welcome to the <br /><span className='bg-gradient-to-r from-[#1DD100] via-white to-primary text-transparent bg-clip-text bg-300% animate-gradient'>Residential House</span></h1>
                                <p data-aos="fade-left" className="mb-5">Experience the best of Bangladesh with Residential House. From luxury stays to gourmet dining, Your journey of dsicovery starts here.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="hero mt-12 h-[510px] cover rounded-3xl" style={{ backgroundImage: 'url(https://i.ibb.co/pQB0nGm/luxury-twostorey-house-softly-lit-by-light-with-contemporary-exterior-house-124507-67156.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-xl">
                                <h1 data-aos="fade-right" data-aos-duration="1000" className="mb-5 md:leading-[65px] text-4xl md:text-5xl font-bold">Welcome to the <br /><span className='bg-gradient-to-r from-[#1DD100] via-white to-secondary text-transparent bg-clip-text bg-300% animate-gradient'>Residential House</span></h1>
                                <p data-aos="fade-left" data-aos-duration="1000" className="mb-5">Experience the best of Bangladesh with Residential House. From luxury stays to gourmet dining, Your journey of dsicovery starts here.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="hero mt-12 h-[510px] cover rounded-3xl" style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/stunning-modern-residence-design_810293-62919.jpg?w=826)' }}>
                        <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-xl">
                                <h1 data-aos="fade-right" data-aos-duration="3000" className="mb-5 md:leading-[65px] text-4xl md:text-5xl text-[#C7FF34] font-bold">Welcome to the <br /><span className='bg-gradient-to-r from-[#1DD100] via-white to-[#C8FD15] text-transparent bg-clip-text bg-300% animate-gradient'>Residential House</span></h1>
                                <p data-aos="fade-left" data-aos-duration="3000" className="mb-5">Experience the best of Bangladesh with Residential House. From luxury stays to gourmet dining, Your journey of dsicovery starts here.</p>
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