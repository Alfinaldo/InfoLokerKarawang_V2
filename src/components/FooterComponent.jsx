import{Container, Row, Col} from 'react-bootstrap';
import{Link} from 'react-router-dom'

import flag from '../assets/img/idn.png';

const FooterComponent = () => {
  return (
    <div className='footer py-5'>
      <Container>
        <Row className='d-flex justify-content-between'>
          <Col lg='5'>
          <h3 className='fw-bold'>InfoLoker<span>Karawang</span></h3>
          <p className='desc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis libero, voluptatem mollitia exercitationem natus totam impedit quo doloribus odio quas!</p>
          <div className='no mb-1 mt-4'>
            <Link className='text-decoration-none'>
            <i className='fa-brands fa-whatsapp me-2'></i>
            <p className='m-0'>+62 123-4567-8912</p>
            </Link>
            </div>
            <div className='mail'>
              <Link className='text-decoration-none'>
              <i className='fa-regular fa-envelope me-2'></i>
              <p className='m-0'>infolokerkarawang@gmail.com</p>
              </Link>
            </div>
          </Col>
          <Col className= 'd-flex flex-column col-lg-2 col mt-lg-0 mt-5'>
          <h5 className='fw-bold'>Menu</h5>
          <Link to="/">Home</Link>
          <Link to="about">About</Link>
          <Link to="updt">Updt</Link>
          <Link to="faq">Faq</Link>
          <Link to="syaratketentuan">Starat & Ketentuan</Link>
          </Col>
          <Col lg='4' className='mt-lg-0 mt-5'>
          <h5 className='fw-bold mb-3'>Address</h5>
          <p>Jl. Surokunto KM.6, Warungbambu <br />Kecamatan Karawang Timur, <br />Kabupaten Karawang Jawa-Barat 41371</p>
          <div className='sosial mt-3'>
            <i className='fa-brands fa-facebook'></i>
            <i className='fa-brands fa-instagram'></i>
            <i className='fa-brands fa-twitter'></i>
            <i className='fa-brands fa-facebook'></i>
          </div>
          </Col>
        </Row>
        <Row>
          <Col>
          <p className='text-center'>&copy; Copyright {new Date().getFullYear()} by <span>Alfinaldo</span>, All right reverse</p>
          </Col>
        </Row>
        <Row>
          <Col>
          <div className='krw'>
            <p className='text-center me-2'>Karawang</p>
            <img src={flag} />
          </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterComponent;