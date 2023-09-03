import{Container, Row, Col} from 'react-bootstrap';

import ManPeople from '../assets/img/man.png';
import Contractor from '../assets/img/contractor.png';
import Company from '../assets/img/Company.png';

const AboutUsPage = () => {
  return (
    <div className="homepage">
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
        <div className='kotak-first'>
        <img src={ManPeople} />
        <h3 className='fw-bold'>1.2 Juta <br /><span>Pengguna</span></h3>
        </div>
        </Col>
        <Col>
        <div className='kotak-second'>
        <img src={Contractor} />
        <h3 className='fw-bold'>746K <br /><span>Pencari Kerja</span></h3>
        </div>
        </Col>
        <Col>
        <div className='kotak-third'>
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
    </div>
  )
}

export default AboutUsPage;