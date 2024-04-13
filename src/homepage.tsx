import { Link } from "react-router-dom";
import { books } from "./utils";
import { useEffect } from "react";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="w-full h-full flex flex-col pt-[66px] md:pt-[80px] bg-orange-50/20">
      <section className="flex overflow-hidden relative flex-col-reverse md:flex-row h-[90vh] md:h-[85vh] px-10 md:px-[130px] items-center justify-center md:justify-between gap-5 ">
        <div className=" text-black flex flex-col gap-9 md:gap-12 items-center justify-center md:items-start">
          <h1 className="font-medium md:font-semibold text-[30px] sm:text-[40px] md:text-[50px] md:text-left w-full md:w-[530px] leading-snug md:leading-[62px] text-center">
          Seamless IT for your business, boosting your growth.
          </h1>

          <p className="text-center md:text-left mt-[-30px] w-[450px] md:w-[600px]">
          We provide the expertise and support to propel your business forward in the digital landscape.
          </p>

          <Link
            to="/products"
            className="text-base font-medium text-white bg-orange-500 rounded-md px-7 md:px-12 py-4  hover:bg-orange-600 flex items-center justify-center gap-3"
          >
            Explore Products
          </Link>
        </div>

        <img
          src="https://ideally.io/wp-content/uploads/2021/11/verkkokaupat-idea-768x685.jpg"
          alt=""
          className="w-full opacity-0 h-[300px] md:h-[500px] md:w-[500px] object-cover rounded-full shadow-lg"
        />
        <img
          src="https://ideally.io/wp-content/uploads/2021/11/verkkokaupat-idea-768x685.jpg"
          alt=""
          className="w-full -top-[450px] left-0 right-0 mx-auto absolute md:-right-80 h-[800px] md:h-[1000px] md:w-[1000px] md:top-auto md:left-auto object-cover rounded-full shadow-lg"
        />
      </section>

      <section className="flex w-full flex-col md:flex-row items-center justify-center md:justify-between gap-5 bg-orange-500/30 py-14 md:py-20 border-y border-orange-900/10">
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full">
          {books.slice(0, 3).map((book) => (
            <div className="flex flex-col items-center justify-center pt-12 pb-8 px-16 md:px-20 gap-7 bg-white rounded-2xl text-orange-900 round ed-xl">
              <img
                src={book.img}
                alt=""
                className="w-[120px] h-[160px] object-cover rou nded-xl drop-shadow-lg"
              />
              <h4 className="font-medium text-[18px] md:text-[20px] md:w-[240px] leading-tight text-center w-[200px] line-clamp-2">
                {book.title}
              </h4>
              <p className="mt-[-15px] text-[12px] md:text-[14px] text-center w-[200px] line-clamp-3 md:w-[240px]">
                {book.summary}
              </p>
              <Link
                to="/billing"
                className="text-base font-medium text-white bg-orange-500 rounded-md px-7 md:px-8 py-2 md:py-3 hover:bg-orange-600 flex items-center justify-center gap-3"
              >
                Purchase
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="flex w-full flex-col items-center justify-center md:justify-between gap-[30px] bg-white !text-white py-14 md:py-20 px-10 md:px-[130px]">
        <div className="flex flex-col md:flex-row gap-[30px] w-full items-center justify-center">
          <Link
            to="/blog/one"
            className="w-full sm:w-[660px] h-[334px] md:w-[760px] md:h-[396px] relative rounded-2xl cursor-pointer group"
          >
            <div className="absolute z-10 opacity-50 w-full h-full  bg-black rounded-2xl group-hover:opacity-60 transition-all"></div>

            <img
              src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/news-1.png"
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute top-0 z-20 text-white flex flex-col gap-4 items-start justify-start ml-10 mt-10">
              <h4 className="text-sm leading-[14px] font-medium text-white bg-orange-500 rounded-md md:rounded-md px-[14px] py-[7px] flex items-center justify-center gap-3">
                News
              </h4>

              <h1 className="font-medium md:font-semibold text-[30px] md:text-[32px] w-full sm:w-[550px] md:w-[400px] leading-tight !text-white">
              OpenAI launches new alignment division to tackle risks of superintelligent AI
              </h1>
            </div>
          </Link>

          <Link
            to="/blog/two"
            className="w-full sm:w-[660px] h-[334px] md:w-[470px] md:h-[396px] relative rounded-2xl cursor-pointer group"
          >
            <div className="absolute z-10 opacity-50 w-full h-full  bg-black rounded-2xl group-hover:opacity-60 transition-all"></div>

            <img
              src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/news-2.jpg"
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute top-0 z-20 text-white flex flex-col gap-4 items-start justify-start ml-10 mt-10">
              <h4 className="text-sm leading-[14px] font-medium text-white bg-orange-500 rounded-md md:rounded-md px-[14px] py-[7px] flex items-center justify-center gap-3">
                News
              </h4>

              <h1 className="font-medium md:font-semibold text-[30px] md:text-[32px] w-full sm:w-[550px] md:w-[400px] leading-tight !text-white">
              Bluebase launches Tap to Pay on smartphone for international and domestic business
              </h1>
            </div>
          </Link>
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-[30px] w-full items-center justify-center">
          <Link
            to="/blog/three"
            className="w-full sm:w-[660px] h-[334px] md:w-[760px] md:h-[396px] relative rounded-2xl cursor-pointer group"
          >
            <div className="absolute z-10 opacity-50 w-full h-full  bg-black rounded-2xl group-hover:opacity-60 transition-all"></div>

            <img
              src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/news-3.jpg"
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute top-0 z-20 text-white flex flex-col gap-4 items-start justify-start ml-10 mt-10">
              <h4 className="text-sm leading-[14px] font-medium text-white bg-orange-500 rounded-md md:rounded-md px-[14px] py-[7px] flex items-center justify-center gap-3">
                News
              </h4>

              <h1 className="font-medium md:font-semibold text-[30px] md:text-[32px] w-full sm:w-[550px] md:w-[400px] leading-tight !text-white">
              Google Bard launches in EU, overcoming data privacy concerns in the region
              </h1>
            </div>
          </Link>

          <Link
            to="/blog/one"
            className="w-full sm:w-[660px] h-[334px] md:w-[470px] md:h-[396px] relative rounded-2xl cursor-pointer group"
          >
            <div className="absolute z-10 opacity-50 w-full h-full  bg-black rounded-2xl group-hover:opacity-60 transition-all"></div>

            <img
              src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/news-4.jpg"
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />

            <div className="absolute top-0 z-20 text-white flex flex-col gap-4 items-start justify-start ml-10 mt-10">
              <h4 className="text-sm leading-[14px] font-medium text-white bg-orange-500 rounded-md md:rounded-md px-[14px] py-[7px] flex items-center justify-center gap-3">
                News
              </h4>

              <h1 className="font-medium md:font-semibold text-[30px] md:text-[32px] w-full sm:w-[550px] md:w-[400px] leading-tight !text-white">
              Regulatory tech companies fear 25% knock-on hit from gaming GST
              </h1>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
