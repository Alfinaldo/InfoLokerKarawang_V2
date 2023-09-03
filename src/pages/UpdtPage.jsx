import{Container, Row, Col} from 'react-bootstrap';

import Who from '../assets/img/who.jpg';

import{about,dataSwiper} from '../data/index';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const UpdtPage = () => {
  return (
    <div className="homepage">
    <div className="updt py-5">
      <Container>
        <Row>
          <h1 className='text-center my-5'>UpdtBalaiLatihan <br /> KerjaKabupaten <br /><span>Karawang</span></h1>
        </Row>
        <Row>
          <div className='blk'>
          <button className="apbn">APBN</button>
          <button className="apbd">APBD</button>
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
    </div>
  )
}

export default UpdtPage;