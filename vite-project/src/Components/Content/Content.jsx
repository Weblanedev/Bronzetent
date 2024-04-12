import "./Content.css";
import Hero2 from "../../../public/Hero2.jpg"
import Hero3 from "../../../public/Hero3.jpg"
import Hero4 from "../../../public/Hero4.jpg"

export default function () {
  return (
    <>
      <div className="contact">
        <div className="contactWrap">
          <GetInTouch />
        </div>
      </div>
    </>
  );
}

function GetInTouch() {
  return (
    <>
      <div className="getIn">
        <div className="touch">
          <h1>
          Professional And Dedicated <br/>
            Consulting Solutions.
          </h1>
        </div>
        <div className="getCard">
          <Reviewcard
            text="Amet minim mollit no duis sit enim aliqua dolor do amet officia."
            ptext="Business Planning "
            image={Hero2}
          />
          <Reviewcard
            text="Amet minim mollit no duis sit enim aliqua dolor do amet officia. "
            ptext="Tax Strategy"
            image={Hero3}
          />
          <Reviewcard
            text="Amet minim mollit no duis sit enim aliqua dolor do amet officia."
            // text=" Webyourinfo@gmail.com"        
            ptext="Business Intelligence "
            image={Hero4}
          />
        </div>
      </div>
    </>
  );
}

const Reviewcard = ({ text, ptext, image }) => {
  return (
    <div className="revCard">
      <div className="reviewcirlce">
        <img src={image} alt="" />
      </div>
      <div className="reviewcardwrap">
        <p>{ptext}</p>
        <div className="reviewdown">
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
};
