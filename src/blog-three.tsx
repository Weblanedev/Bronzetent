import { useEffect } from "react";
import { Link } from "react-router-dom";

const BlogThree = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="w-full h-full flex flex-col pt-[66px] md:pt-[80px]">
      <section className="relative border h-[300px] md:h-[550px]">
        <div className="absolute z-10 opacity-20 w-full h-full  bg-black"></div>

        <img
          src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/news-3.jpg"
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute top-0 z-20 text-white flex flex-col gap-9 md:gap-9 items-center justify-center h-full w-full">
          <h4 className="text-sm leading-[14px] font-medium text-white bg-orange-500 hover:bg-orange-600 cursor-pointer transition-colors rounded-md md:rounded-md px-[14px] py-[7px] flex items-center justify-center gap-3">
            News
          </h4>
          <h1 className="font-medium md:font-semibold text-[40px] md:text-[44px] w-full sm:w-[550px] md:w-[1000px] text-center leading-snug md:leading-[54px] text-white">
            Google Bard Arrives in the EU, Privacy Concerns Addressed{" "}
          </h1>
        </div>
      </section>

      <section className="relative p-10 md:px-[262px] md:py-[80px] flex flex-col gap-9 items-center w-full justify-center">
        <div className="w-full flex flex-col md:flex-row gap-[66px] justify-between">
          <div className="flex flex-col items-start gap-[10px] md:pt-[78px]">
            <h3 className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-white py-[9px] px-[17px] rounded-md font-semibold text-[14px] leading-[14px]">
              Privacy
            </h3>
            <h2 className="font-mediium text-[30.68px] md:text-[40px] w-full sm:w-[530px] md:w-[382px] leading-[45px] text-[#010910]">
              A Balancing Act
            </h2>
            <p className="text-[16px] text-black leading-[28.8px] font-normal mt-[10px] w-full md:w-[382px]">
              Google Bard's launch in the European Union (EU) signifies a
              significant development for the large language model (LLM)
              landscape. However, this expansion comes after addressing concerns
              regarding data privacy, a major focus within the EU. Google likely
              implemented robust data security measures and adhered to strict
              regulations like the General Data Protection Regulation (GDPR) to
              gain approval for Bard's operation in the region.
            </p>
          </div>

          <img
            src="https://www.computerworld.com/wp-content/uploads/2024/03/google_bard-100943358-orig.jpg?quality=50&strip=all"
            alt=""
            className="w-full md:w-[500px] object-cover border-[18px] md:border-[25px] rounded-3xl"
          />
        </div>

        <div className="relative flex flex-col gap-8 items-center w-full justify-center">
          <h3 className="font-mediium text-[30.68px] md:text-[40px] w-full leading-[45px] text-[#010910]">
            A New Frontier for AI
          </h3>
          <p className="text-[16px] text-black leading-[28.8px] font-normal w-full">
            Bard's arrival in the EU opens doors for new possibilities in areas
            like research, education, and business applications. With data
            privacy concerns addressed, Google can now leverage Bard's
            capabilities to serve a wider European audience.
          </p>
        </div>


        <Link
          to="/blog/one"
          className="w-full sm:w-[660px] h-[334px] md:w-full md:h-[396px] relative rounded-2xl cursor-pointer group mt-20"
        >
          <div className="absolute z-10 opacity-50 w-full h-full  bg-black rounded-2xl group-hover:opacity-60 transition-all"></div>

          <img
            src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/news-1.png"
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute top-0 bottom-0 left-0 right-0 max-w-max max-h-max mx-auto my-auto z-20 text-white flex flex-col gap-4 items-center justify-center px-5 sm:px-1">
            <h4 className="text-lg leading-[14px] font-medium text-white px-[14px] py-[7px] flex items-center justify-center gap-3">
              Next post
            </h4>

            <h1 className="font-medium md:font-semibold text-[30px] md:text-[40px] w-full sm:w-[550px] md:w-[600px] leading-snug md:leading-snug text-center text-white">
            OpenAI launches new alignment division to tackle risks of
                superintelligent AI            </h1>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default BlogThree;
