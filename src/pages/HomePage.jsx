import{Container, Row, Col} from 'react-bootstrap';

import{about,dataSwiper} from '../data/index';
import ManPeople from '../assets/img/man.png';
import Contractor from '../assets/img/contractor.png';
import Company from '../assets/img/Company.png';
import Who from '../assets/img/who.jpg';

import video from '../assets/video/a.webm';

import FaqComponent from '../components/FaqComponent';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';


const HomePage = () => {
  return (
    <div className="homepage">
        <header className="w-100 min-vh-100 d-flex align-items-center overflow-hidden">
          <Container>
            <Row className='header-box d-flex align-items-center'>
              <Col lg='6'>
              <h1 className='mb-4 animate__animated animate__fadeInUp animate__delay-1s'>InfoLoker<span>Karawang</span></h1>
              <p className='mb-4 animate__animated animate__fadeInUp animate__delay-1s'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum possimus assumenda eum, sed laudantium earum quasi aut autem saepe quod!</p>
              <div className='all-btn'>
              <button className='btn-first me-2 mb-xs-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s'>SignUp</button>
              <button className='btn-second animate__animated animate__fadeInUp animate__delay-1s'>SignIn</button>
              </div>
              </Col>
              <Col lg='6' className='pt-lg-0 pt-5'>
              <div className='video animate__animated animate__fadeInUp'>
                <video src={video} autoPlay muted loop></video>
              </div>
              </Col>
            </Row>
          </Container>
        </header>
        <div className="about w-100 min-vh-100">
          <Container>
            <Row>
              <Col>
              <h1 className='fw-bold text-center'>Will You Join Them ?</h1>
              <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, vel?</p>
              </Col>
            </Row>
            <Row>
            <Col>
            <div className='kotak-first' data-aos="fade-up" data-aos-duration="1000">
            <img src={ManPeople} />
            <h3 className='fw-bold'>1.2 Juta <br /><span>Pengguna</span></h3>
            </div>
            </Col>
            <Col>
            <div className='kotak-second' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="150">
            <img src={Contractor} />
            <h3 className='fw-bold'>746K <br /><span>Pencari Kerja</span></h3>
            </div>
            </Col>
            <Col>
            <div className='kotak-third' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="250">
            <img src={Company} />
            <h3 className='fw-bold'>381K <br /><span>Perusahaan</span></h3>
            </div>
            </Col>
            </Row>
            <Row>
              <h1>Find Your Job...</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, ipsa.</p>
              <Col>
              <div className='psikotes'><span></span> Psikotest</div>
              <div className='interview'><span></span> Interview</div>
              <div className='joinwithus'><span></span> JoinWithUs</div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="updt py-5 ">
          <Container className='overflow-hidden'>
            <Row>
              <h1 className='text-center my-5'>UpdtBalaiLatihan <br /> KerjaKabupaten <br /><span>Karawang</span></h1>
            </Row>
            <Row>
              <div className='blk'>
              <button className="apbn" data-aos="fade-right" data-aos-duration="1000">APBN</button>
              <button className="apbd" data-aos="fade-left" data-aos-duration="1000">APBD</button>
              </div>
            </Row>
            <Row>
              <p className='py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sapiente laborum accusamus minima, vero dolor eveniet assumenda? Soluta, maiores consectetur!</p>
            </Row>
            <Row>
            <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {dataSwiper.map((data) => {
            return (
              <SwiperSlide key={data.id} className="shadow">
                <p className='desc'>{data.desc}</p>
                <div className='people'>
                  <img src={Who} alt="" />
                <div>
                  <h5 className='mb-1'>{data.name}</h5>
                  <p className='m-0 fw-bold'>{data.skill}</p>
                  </div>
                </div>
              </SwiperSlide>
            )
        })}
      </Swiper>
            </Row>
          </Container>
        </div>
        {/* Section FAQ */}
        <FaqComponent />
    </div>
  )
}

export default HomePage;