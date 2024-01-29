import Identicon from 'identicon.js';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo-1.png'

const SiteNavbar = ({token, account, setAccount, setToken}) => {
    const navigate = useNavigate()
    
    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('account')
        setToken('')
        setAccount('');
        navigate('/login');
    }

    const openInNewTab = () => {
        window.open('https://fyp-medllama.vercel.app/', '_blank', 'noopener,noreferrer');
    };
    return (
        <Navbar collapseOnSelect expand="md" variant="dark" fixed="top" className="site-navbar" style={{ backgroundColor: '#008181' }}>
            <Container>
                <Navbar.Brand as={Link} to="/"><img className='ml-2' height="40" src={logo} /></Navbar.Brand>
                <Nav justify>
                    { token!=='' && account!=="" ? 
                        <>
                        <small onClick={openInNewTab} className='text-nav' style={{color: "white", cursor: "pointer", textDecoration: "underline"}}>Check Out MedLlama 🦙</small>
                            <Nav.Link className='img'>
                                <img
                                    className='ml-2'
                                    width='40'
                                    height='40'
                                    src={`data:image/png;base64,${new Identicon(account, 40).toString()}`}
                                    alt="profile"
                                />
                            </Nav.Link>
                            <Nav.Link>
                                <small className='text-nav'>
                                    {account.slice(0, 5)+ '...' + account.slice(-4)}
                                </small>
                            </Nav.Link>
                            <Nav.Link onClick={logout}>
                                <small className='text-nav'>
                                    Log&nbsp;Out
                                </small>
                            </Nav.Link>
                        </>
                        : 
                        <>
                            <Nav.Link as={Link} to="/login" >
                                <small className='text-nav'>
                                    Login
                                </small>
                            </Nav.Link>
                            <Nav.Link  as={Link} to="/register" >
                                <small className='text-nav'>
                                    Register
                                </small>
                            </Nav.Link>
                        </>
                    }
                </Nav>
            </Container>
        </Navbar>
    )
}


export default SiteNavbar
