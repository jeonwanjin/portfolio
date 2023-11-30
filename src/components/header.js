import '../css/header.css'
import logo from '../img/logo.png'
const Header = () => {

    return (  
      <div className="headerWrap">
        <header className='header'>
            <h1 className='logo'><img src={logo}></img></h1>
            <ul className='nav'>
                    <li>Project</li>
                    <li>Cloning</li>
                    <li>About me</li>
                    <li>Contact</li>
            </ul>
        </header>
      </div>
    );
}
 
export default Header;