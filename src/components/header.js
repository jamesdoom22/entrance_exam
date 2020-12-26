import '../scss/header.scss'
import lmcLogo from '../images/logo-lmc-white.png'
function Header(){
    return(
        <div className='header'>
            <ul>
                <li><a href='#home'><img src={lmcLogo} alt="LMC Logo"></img></a></li>
                <li><a href='#home'>HOME</a></li>
                <li><a href='#about'>ABOUT US</a></li>
                <li><a href='#core'>CORE FEATURES</a></li>
                <li><a href='#solution'>SOLUTIONS</a></li>
                <li><a href='#whats'>WHAT'S NEW</a></li>
                <li><a href='#contact'>CONTACT US</a></li>
            </ul>      
        </div>
    )
}

export default Header;