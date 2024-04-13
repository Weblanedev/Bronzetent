import { useEffect } from "react";
import { Link } from "react-router-dom";

const BlogOne = () => {
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
          src="https://images.ctfassets.net/5i1m3im8l2b5/4USD6n19mDElNYSVJGb3rS/de02a8a1774953e5429b6dfbadcb0dbf/offset-card-03.jpg?w=856&h=418&q=75&fm=webp&fit=fill"
          alt=""
          className="w-full h-full object-cover"
        />

        <div className="absolute top-0 z-20 text-white flex flex-col gap-9 md:gap-9 items-center justify-center h-full w-full">
          <h4 className="text-sm leading-[14px] font-medium text-white bg-orange-500 hover:bg-orange-600 cursor-pointer transition-colors rounded-md md:rounded-md px-[14px] py-[7px] flex items-center justify-center gap-3">
            News
          </h4>
          <h1 className="font-medium md:font-semibold text-[40px] md:text-[44px] w-full sm:w-[550px] md:w-[1000px] text-center leading-snug md:leading-[54px] text-white">
            How organisations can champion women every day of the year
          </h1>
        </div>
      </section>

      <section className="relative p-10 md:px-[262px] md:py-[80px] flex flex-col gap-9 items-center w-full justify-center">
        <div className="w-full flex flex-col md:flex-row gap-[66px] justify-between">
          <div className="flex flex-col items-start gap-[10px] md:pt-[78px]">
            <h3 className="bg-gradient-to-r from-orange-600 via-green-500 to-indigo-400 inline-block text-white py-[9px] px-[17px] rounded-md font-semibold text-[14px] leading-[14px]">
              Marketing Tips
            </h3>
            <h2 className="font-mediium text-[30.68px] md:text-[40px] w-full sm:w-[530px] md:w-[382px] leading-[45px] text-[#010910]">
              Statistical data in Marketing
            </h2>
            <p className="text-[16px] text-black leading-[28.8px] font-normal mt-[10px] w-full md:w-[382px]">
              We provide marketing services to startups and small businesses
              looking for a partner for their digital media. We work with you,
              not for you.We are lorem duoa headquartered in North-Eastern
              France, with our 19 associates located across nine countries in
              order to best serve a client base that stretches throughout North
              America.
            </p>
          </div>

          <img
            src="https://chopzbetlimited.com/wp-content/uploads/2024/02/leader.jpg"
            alt=""
            className="w-full md:w-[500px]  border-[18px] md:border-[25px] rounded-3xl"
          />
        </div>

        <div className="relative flex flex-col gap-8 items-center w-full justify-center">
          <h3 className="font-mediium text-[30.68px] md:text-[40px] w-full leading-[45px] text-[#010910]">
            Copywriting: What’s branding got to do with it?
          </h3>
          <p className="text-[16px] text-black leading-[28.8px] font-normal w-full">
            Using customer insights to build customer-centric campaigns that
            deliver high performance including messaging, propositions, campaign
            flows and media strategy. Untapping revenue. Creating more value.
            Unleashing the potential of your vision. Let us help you turn
            insights into engagement and strategy into action.
          </p>
        </div>

        <div className="relative flex flex-col gap-8 items-center w-full justify-center">
          <h3 className="font-mediium text-[30.68px] md:text-[40px] w-full leading-[45px] text-[#010910]">
            Copywriting: What’s branding got to do with it?
          </h3>
          <p className="text-[16px] text-black leading-[28.8px] font-normal w-full">
            Untapping revenue. Creating more value. Unleashing the potential of
            your vision. Let us help you turn insights into engagement and
            strategy into action. The right strategy will drive your business
            forward.
          </p>

          <ul className="text-[16px] text-black leading-[28.8px] font-normal w-full list-decimal pl-12 md:pl-20 mt-[-9px]">
            <li>
              Your online platforms: need to work for your business, showing
              your audience what you can do for them.
            </li>
            <li>
              Your online platforms: need to work for your business, showing
              your audience what you can do for them.
            </li>
            <li>
              Your online platforms: need to work for your business, showing
              your audience what you can do for them.
            </li>
            <li>
              Your online platforms: need to work for your business, showing
              your audience what you can do for them.
            </li>
            <li>
              Your online platforms: need to work for your business, showing
              your audience what you can do for them.
            </li>
          </ul>
        </div>

        <div className="relative flex flex-col gap-8 items-center w-full justify-center">
          <h3 className="font-mediium text-[30.68px] md:text-[40px] w-full leading-[45px] text-[#010910]">
            How to find your brand message?
          </h3>
          <p className="text-[16px] text-black leading-[28.8px] font-normal w-full">
            The right strategy will drive your business forward. Starting with
            an immersive discovery process, we get to know your company and
            understand your goals. Then, we map out a strategy that will achieve
            those goals in the smartest way possible. Using customer insights to
            build customer-centric campaigns that deliver high performance
            including messaging, propositions, campaign flows and media
            strategy.
          </p>
        </div>

        <div className="relative flex flex-col gap-8 items-center w-full justify-center">
          <h3 className="font-mediium text-[30.68px] md:text-[40px] w-full leading-[45px] text-[#010910]">
            Copywriting: What’s branding got to do with it?
          </h3>
          <p className="text-[16px] text-black leading-[28.8px] font-normal w-full">
            Untapping revenue. Creating more value. Unleashing the potential of
            your vision. Let us help you turn insights into engagement and
            strategy into action. The right strategy will drive your business
            forward.
          </p>

          <ul className="text-[16px] text-black leading-[28.8px] font-normal w-full list-decimal pl-12 md:pl-20 mt-[-9px]">
            <li>
              Your online platforms: need to work for your business, showing
              your audience what you can do for them.
            </li>
            <li>
              Your online platforms: need to work for your business, showing
              your audience what you can do for them.
            </li>
            <li>
              Your online platforms: need to work for your business, showing
              your audience what you can do for them.
            </li>
            <li>
              Your online platforms: need to work for your business, showing
              your audience what you can do for them.
            </li>
            <li>
              Your online platforms: need to work for your business, showing
              your audience what you can do for them.
            </li>
          </ul>
        </div>

        <Link
          to="/blog/two"
          className="w-full sm:w-[660px] h-[334px] md:w-full md:h-[396px] relative rounded-2xl cursor-pointer group mt-20"
        >
          <div className="absolute z-10 opacity-50 w-full h-full  bg-black rounded-2xl group-hover:opacity-60 transition-all"></div>

          <img
            src="https://assets-global.website-files.com/646f9696be2579248b7e3010/65cf9039d11098e171530daa_APV2-p-500.jpg"
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute top-0 bottom-0 left-0 right-0 max-w-max max-h-max mx-auto my-auto z-20 text-white flex flex-col gap-4 items-center justify-center px-5 sm:px-1">
            <h4 className="text-lg leading-[14px] font-medium text-white px-[14px] py-[7px] flex items-center justify-center gap-3">
              Next post
            </h4>

            <h1 className="font-medium md:font-semibold text-[30px] md:text-[40px] w-full sm:w-[550px] md:w-[600px] leading-snug md:leading-snug text-center text-white">
              Apple Vision Pro and its future in the business world
            </h1>
          </div>
        </Link>
      </section>
    </div>
  );
};

export default BlogOne;
