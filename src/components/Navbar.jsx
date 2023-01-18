import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Icon from '../image/Icon.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaSearch } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import '../components/navbar.css'

function Navbars() {
  return (
    // <Navbar style={{height: 80}} bg='light' sticky='top'>
    //   <Container>
    //     <Navbar.Brand href="#home"><img src={Icon} alt='icon website'/></Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //     <Form className="d-flex m-auto">
    //       <Form.Control type="search" placeholder="Tangerang Selatan" className="w-100" aria-label="Tangerang Selatan"/>
    //       </Form>
    //     </Navbar.Collapse>
    //     <Nav>
    //       <Nav.Link>Sign In</Nav.Link>
    //       <Nav.Link>Sign Up</Nav.Link>
    //     </Nav>
    //   </Container>
    // </Navbar>
    <Container className='w-100' fluid>
      <Row className='bg-white d-flex align-items-center' style={{height: 120}}>
        <Col className='ms-4' xxl={4}>
          <img src={Icon} alt='ini icon'/>
        </Col>
        <Col className='d-flex align-items-center justify-content-center' xxl={3}>
          <InputGroup>
            <Form.Control
              type="search"
              placeholder="Search"
              className='bg-light'
              aria-label="Search">
              </Form.Control>
              <InputGroup.Text className="bg-custom hover-search border-0" style={{cursor: 'pointer', }}>
                <FaSearch />
              </InputGroup.Text>
          </InputGroup>
        </Col>
        <Col className="d-flex align-items-center ms-auto" xxl={2}>
          <Nav>
            <Button className='fw-bold fs-5 btn-transparent me-3 '>Sign In</Button>
            <Button className='fw-bold fs-5 btn-custom'>Sign Up</Button>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
}

export default Navbars;