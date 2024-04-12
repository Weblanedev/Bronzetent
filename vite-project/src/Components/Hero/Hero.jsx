import "./Hero.css"
import HeroImage from "../../../public/HeroImage.jpg"
import Content from "../Content/Content"
import SecondContent from "../SecondContent/SecondContent"
const Heropage = ()=>{
  return(
    <>
    <div className="QualityContentScale">
        <div className="QualityContentScaleWrap">
          <div className="Textdiv">
            <div className="Textdivwrap">
              <h1 className="animate-charcter">Build & Grow Your <br /> Buiness.</h1>
              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit Turpis ridiculus tellus.</h2>
              <button className="HirebtnNow">Discover More</button>
            </div>
          </div>
          
        </div>
    </div>
    <Content/>
    <SecondContent/>
    </>
  )
}
export default Heropage