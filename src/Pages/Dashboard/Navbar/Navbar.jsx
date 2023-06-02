import {BsArrowRight} from 'react-icons/bs';
import {BsBell} from 'react-icons/bs';
import {FiSearch} from 'react-icons/fi';
import {AiOutlineUser} from 'react-icons/ai';
import './Navbar.css';



export default function Navbar() {

  return (
    <div>
      <nav>
        {/* left side */}
        <div className="search-nav">
           <FiSearch className = 'icon-search'/> 
          
          <input className = "search-input"
            type="text"
            placeholder="search"
            name="search"/>
            <BsArrowRight className = 'icon-arrow' />
        </div>

        {/* right side */}
        <div className="user-notif">
          <BsBell classname = 'bell' />
          <div className='user-details'></div>
          <div className="user-photo">
            <AiOutlineUser />
            </div>
             <div className='user-name'>
              <small className='bold'> Gbenga Stutern </small>
              <small>Loan Analyst</small>
             </div>
             </div>
           
        
      </nav>
    </div>
  );
}