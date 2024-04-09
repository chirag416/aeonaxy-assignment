import React from "react";
import Navbar from "./Navbar";
import img1 from "../assets/img-1.jpg";
import img2 from "../assets/img-2.jpg";
import img3 from "../assets/img-3.jpg";
import { IoIosArrowUp } from "react-icons/io";


const Home = () => {
  return (
    <>
      <div className="home overflow-hidden">
        <Navbar />
        <div className="justify-center overflow-x-hidden text-center mt-9">
          <div className="text-5xl font-medium m-5">
            {" "}
            <h1>
              {" "}
              Global payment <br /> processing solutions{" "}
            </h1>{" "}
          </div>
          <div className="text-left  mx-[30%]">
            Grow and optimize your business with a flexible , end-to-end
            payments platform <br /> powered by Braintree technology
          </div>
          <div className="mt-6">
            {" "}
            <button className="border-2 border-blue-800 bg-blue-800 text-white px-10 rounded-full py-2">
              {" "}
              Connect with a Payments Expert{" "}
            </button>{" "}
          </div>
          <div className=" imgdiv flex items-center p-20">
            <img className="img w-1/3 object-cover h-[23.5rem]" src={img1} alt="" />
            <img className="img w-1/3 rounded-2xl object-cover absolute left-1/4 h-96" src={img2} alt="" />
            <img className="img w-1/3 rounded-2xl object-cover absolute left-1/2 h-96" src={img3} alt="" />
            <div className="imgtext absolute left-3/4 top-2/3 items-center gap-4 border shadow-md bg-white rounded-t-lg px-12 py-2 flex"> PayPal Instant <IoIosArrowUp /> </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
