import { useEffect } from "react";
import "./Header.css"
import { useState } from "react";
// import { Link } from "react-router-dom"
// import { useNavigate } from "react-router-dom";

const Header = () => {
//   const Nav = useNavigate()
//   const handleContactUs =()=>{
//     Nav("/contact")
// }
//   const handleAboutUs =()=>{
//     Nav("/About")
// }
// const handleBlog =()=>{
//   Nav("/Blog")
// }
// const handleBilling =()=>{
//   Nav("/Billing")
// }

// const handlehome =()=>{
  
//     Nav("/")
// }

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldChangeColor = scrollPosition > 100;

      setIsScrolled(shouldChangeColor);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div className={`Header1 ${isScrolled ? 'scrolled' : ''}`}>
        <div className="Headerwrapper">
          <div className={`writterLogo ${isScrolled ? 'logo-scrolled' : ''}`}>
            <h1 className={`writterLogo ${isScrolled ? 'logo-scrolled' : ''}`}>Bronzetent</h1>
          </div>
          <div className={`NavDiv ${isScrolled ? 'text-scrolled' : ''}`}>
            <div className={`NavDiv ${isScrolled ? 'text-scrolled' : ''}`}>Home</div>

            <div className={`NavDiv ${isScrolled ? 'text-scrolled' : ''}`}>About Us</div>
            
              <div className={`NavDiv ${isScrolled ? 'text-scrolled' : ''}`}>Contact Us</div>
            
            <div className={`NavDiv ${isScrolled ? 'text-scrolled' : ''}`}>Blog </div>

            <div className={`NavDiv ${isScrolled ? 'text-scrolled' : ''}`}>Billing </div>

          
          </div>
          <div className="Hirewriterbtn"> <button className={`Hirewriterbtnbutton  ${isScrolled ? 'hirewritterbtn-scrolled' : ''}`}>Free Consulting</button></div>
        </div>
      </div>
    </>
  )
}
export default Header