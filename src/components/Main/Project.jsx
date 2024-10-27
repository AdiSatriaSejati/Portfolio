import React from 'react';
import '../../pages/Project/ProjectPage.css'
import { Link } from 'react-router-dom';
import { ButtomGet } from '../ButtomGet/ButtomGet';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Swiper */
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

/* Img */
const proyectImg = require.context('../../img', true);

const Project = () => {
    return (
        <section className="proyectos" id="proyectos">
            <h2 className="heading">
                <FormattedMessage
                    id='projects'
                    defaultMessage='Projects'
                />
            </h2>
            <div className="proyect-site" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <Swiper
                    spaceBetween={30}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className='proyectos-slider mySwiper'
                >
                    <SwiperSlide className='caja'>
                        <img
                            src="https://ik.imagekit.io/AdiSatriaSejati/turtle.png?updatedAt=1729340416868"
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Logo Universitas BSI</h3>
                            <p>
                                Group Project
                            </p>
                            <p className="tecnologias">
                                Python
                                <span> -</span> Turtle
                            </p>
                            <a href="https://github.com/AdiSatriaSejati/Project_Dasar_Pemrograman_Semester-1" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src="https://ik.imagekit.io/AdiSatriaSejati/Project-WebUniversity.png?updatedAt=1729342044578"
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>University Home Page</h3>
                            <p>
                                Group Project
                            </p>
                            <p className="tecnologias">
                                HTML
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                            </p>
                            <a href="https://12-2-a-03-github-io.vercel.app/" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/AdiSatriaSejati/12.2A.03.github.io" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src="https://github.com/AdiSatriaSejati/CI4_E-LibraryAradh/blob/main/screenshots/Home.gif?raw=true"
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Library Administration Web</h3>
                            <p>
                                Group Project
                            </p>
                            <p className="tecnologias">
                                PHP
                                <span> -</span> CSS
                                <span> -</span> JavaScript
                                <span> -</span> CodeIgniter 4
                                <span> -</span> Bootstrap 5
                                <span> -</span> Modernize Free Bootstrap 5 Admin Template
                                <span> -</span> APEXCHARTS
                                <span> -</span> Tabler Icons
                                <span> -</span> Endroid QR Code Generator
                                <span> -</span> Mebjas Html5-QRCode Scanner
                                <span> -</span> Composer
                                <span> -</span> MySQL
                                <span> -</span> Laragon
                            </p>
                            <a href="#" className="custom-btn btn" target="_blank" rel="noopener noreferrer"><span>Demo</span></a>
                            <a href="https://github.com/Nahuel61920/CoinPlus" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='caja'>
                        <img
                            src="https://camo.githubusercontent.com/5ba5a12291cffd599244349dc62be6e2d6f34b8656b97d26d8a6f19bb9c78376/68747470733a2f2f696b2e696d6167656b69742e696f2f41646953617472696153656a6174692f66697273742e706e673f7570646174656441743d31373230323734343730343138"
                            alt='proyectos'

                        />
                        <div className="content">
                            <h3>Flame Puzzle Challenge</h3>
                            <p>
                                Group Project
                            </p>
                            <p className="tecnologias">
                                Dart
                                <span> -</span> Flutter
                                <span> -</span> Go_router
                                <span> -</span> Audioplayers
                                <span> -</span> Logging
                                <span> -</span> Provider
                                <span> -</span> Shared_preferences
                                <span> -</span> Carousel_slider
                                <span> -</span> Google_mobile_ads
                                <span> -</span> Flame
                                <span> -</span> Flame_audio
                                <span> -</span> Infinite_scroll_pagination
                                <span> -</span> Cached_network_image
                                <span> -</span> Flutter_cache_manager
                                <span> -</span> Flutter_image_compress
                                <span> -</span> Flutter_screenutil
                                <span> -</span> Card_swiper
                                <span> -</span> Awesome_dialog
                                <span> -</span> Lottie
                                <span> -</span> Mime
                                <span> -</span> Cherry_toast
                                <span> -</span> Flutter_easyloading
                                <span> -</span> Url_launcher
                                <span> -</span> Package_info_plus
                                <span> -</span> Dio
                                <span> -</span> Connectivity_plus
                                <span> -</span> Animated_text_kit
                                <span> -</span> Mixpanel_flutter
                            </p>
                            <a href="https://github.com/AdiSatriaSejati/flutter_kelompok_1" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination"></div>
            </div>
            {/* <Link className="custom-btn btn-codigo portafolio-btn" to="/project">
                <FormattedMessage
                    id='btn-more-projects'
                    defaultMessage='More projects'
                />
            </Link> */}
            <div className='portafolio-btn'>
                <Link to="/project">
                    <ButtomGet/>
                </Link>
            </div>
        </section>

    )
};
export default React.memo(Project);