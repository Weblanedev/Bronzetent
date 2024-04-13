import { useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="w-full h-full flex flex-col pt-[66px] md:pt-[80px] bg-white">
      <section className="flex relative overflow-hidden flex-col-reverse md:flex-row h-[90vh] md:h-[55vh] w-full px-10 md:px-[130px] items-center justify-center md:justify-between gap-5 bg-orange-50/20">
        <div className=" text-black flex flex-col gap-9 md:gap-12 items-center justify-center md:items-start">
          <h1 className="font-medium md:font-semibold text-[50px] sm:text-[40px] md:text-[50px] text-orange-950 md:text-left w-full md:w-[530px] leading-snug md:leading-[62px] text-center">
            About Bronzetent
          </h1>

          <p className="text-center md:text-left mt-[-30px] w-[450px] md:w-[330px] text-orange-950">
            Our story, our values and how our customers drive everything we do.
          </p>

          <Link
            to="/products"
            className="text-base font-medium text-white bg-orange-500 rounded-md px-7 md:px-12 py-4 md:py-5 hover:bg-orange-600 flex items-center justify-center gap-3"
          >
            Explore Products
          </Link>
        </div>

        <img
          src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/about-service-3.png"
          alt=""
          className="w-full opacity-0 h-[300px] md:h-[300px] md:w-[500px] object-cover rounded-full shadow-lg"
        />
        <img
          src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/about-service-3.png"
          alt=""
          className="w-full h-[750px] -top-96 md:top-auto absolute md:-right-20 md:h-[700px] md:w-[700px] object-cover rounded-full shadow-lg"
        />
      </section>

      <section className="flex w-full flex-col-reverse md:flex-row-reverse px-10 md:px-[130px] items-center justify-center md:justify-between gap-5 bg-white py-14 md:py-20 border-t border-orange-900/10">
        <div className=" text-black flex flex-col gap-9 md:gap-12 items-center justify-center md:items-start">
          <h1 className="font-medium md:font-semibold text-[50px] sm:text-[40px] md:text-[50px] md:text-left w-full md:w-[530px] leading-snug md:leading-[62px] text-center">
            Who We Are
          </h1>

          <p className="text-center md:text-left mt-[-10px]  w-full md:w-[550px] leading-relaxed">
            We're the leader in Secure Remote Access and Support. We deliver an
            in-person experience users need with security IT can trust. What is
            an in-person experience? Unlike clunky remote access solutions, our
            products are as fast, simple and secure as being right in front of
            your on-site work computer, yet you can be anywhere, on any device.
            Our solutions provide high performance with 4K quality at 60fps;
            advanced security features and compliance; one application for
            access and support across operating systems, including Windows and
            Mac; and global support with direct access to an expert.
          </p>
        </div>

        <img
          src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/hero-company-about.jpg"
          alt=""
          className="w-full h-[300px] md:h-[500px] md:w-[500px] object-cover rounded-full shadow-lg"
        />
      </section>

      <section className="flex w-full flex-col items-center justify-center md:justify-between gap-16 bg-orange-950  py-14 md:py-20">
        <h2 className="font-medium md:font-semibold text-[50px] sm:text-[40px] md:text-[50px] md:text-left leading-snug md:leading-[62px] text-center text-white">
          What we value
        </h2>
        <div className="px-10 md:px-[130px] flex flex-col md:flex-row justify-center items-center w-full gap-5">
          <div className="flex gap-[20px] flex-col sm:flex-row">
            <div className="flex flex-col gap-5 items-start justify-start bg-white p-8 rounded-2xl w-full md:w-[300px] h-[400px]">
              <h3 className="font-medium text-[28px] leading-tight">
                Delighting Our Customers, Globally
              </h3>
              <p className="">
                Listening to and acting on customer feedback drives all that we
                do. It's reflected in our 2,000+ 5-star reviews.
              </p>
            </div>
            <div className="flex flex-col gap-5 items-start justify-start p-8 bg-white rounded-2xl w-full md:w-[300px] h-[400px]">
              <h3 className="font-medium text-[28px] leading-tight">
                Delivering the Best Value
              </h3>
              <p className="">
                We offer our best-in-class solutions at competitive prices. Our
                clear, consistent and stable subscription pricing means no
                hidden conditions and no surprises.
              </p>
            </div>
          </div>
          <div className="flex gap-[20px] flex-col sm:flex-row">
            <div className="flex flex-col gap-5 items-start justify-start bg-white p-8 rounded-2xl w-full md:w-[300px] h-[400px]">
              <h3 className="font-medium text-[28px] leading-tight">
                Focusing on Security and Compliance
              </h3>
              <p className="">
                We comply with and support the latest security standards and
                regulations, including GDPR, HIPAA, SOC 2 and PCI. Our Security
                Advisory Council guides us toward our ever-more-rigorous
                security and compliance goals.
              </p>
            </div>
            <div className="flex flex-col gap-5 items-start justify-start p-8 bg-white rounded-2xl w-full md:w-[300px] h-[400px]">
              <h3 className="font-medium text-[28px] leading-tight">
                Providing Reliable, High Performing User Experiences
              </h3>
              <p className="">
                Our products' award-winning reliability and performance
                translate directly into our customers' abilities to achieve
                their goals in work, school or entertainment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col-reverse md:flex-row mx-10 md:mx-[130px] items-center justify-center md:justify-between gap-5 bg-orange-50/20 py-14 md:py-20">
        <div className=" text-black flex flex-col gap-9 md:gap-12 items-center justify-center md:items-start">
          <h1 className="font-medium md:font-semibold text-[50px] sm:text-[40px] md:text-[50px] md:text-left w-full md:w-[530px] leading-snug md:leading-[62px] text-center">
            Why Bronzetent
          </h1>

          <p className="text-center md:text-left mt-[-10px]  w-full md:w-[550px] leading-relaxed">
            With an experience of 16+ years, we deliver quality and reliability
            to our clients. We craft customized solutions as per the needs of
            your business. Our interactive web and ecommerce development
            solutions have helped our clients climb the ladder of success in an
            agile way.
          </p>

          <p className="text-center md:text-left mt-[-25px]  w-full md:w-[550px] leading-relaxed">
            We have helped countries from all over the world – clients grow
            tremendously. With us, you get a perfect blend of experience and
            creativity. We help you to get complete guidance to select the type
            of service suitable for your business. The web and ecommerce
            development is done by our expert developers in their fields.
          </p>
          <Link
            to="/contact-us"
            className="text-base font-medium text-white bg-orange-500 rounded-md px-7 md:px-12 py-4 md:py-5 hover:bg-orange-600 flex items-center justify-center gap-3"
          >
            Contact Us
          </Link>
        </div>

        <img
          src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/partner-trusted.jpg"
          alt=""
          className="w-full h-[300px] md:h-[500px] md:w-[500px] object-cover rounded-full shadow-lg"
        />
      </section>
    </div>
  );
};

export default About;
