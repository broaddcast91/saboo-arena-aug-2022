import React, { useState, Fragment, useRef } from "react";
// import { BsCalendarCheck } from "react-icons/bs";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { Dialog, Transition } from "@headlessui/react";

import {
  brezzaColors,
  brezzaSliders,
  brezzaVariants,
} from "../../constants/brezzaData";
import Header from "../../components/header/Header";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";

function Brezza() {
  return (
    <>
      <Helmet>
        <title>
          Maruti Suzuki Brezza On Road Price in Secunderabad, Hyderabad & 2022
          Offers
        </title>
        <meta
          name="title"
          content="Maruti Suzuki brezza On Road Price in Hyderabad | Maruti Vitara Brezza Offers"
        />
        <meta
          name="description"
          content="Maruti Vitara brezza in Secunderabad & Hyderabad.Brezza 2022 Price Starts at 7.99* Lakh. Best price & offers on Maruti Vitara brezza at Saboo Maruti. Finance facility also available at the dealership. Please visit your nearest Showroom for best deals. "
        />
        {/* <meta
          name="keywords"
          content="Suzuki brezza on road price, Suzuki brezza offers, Suzuki brezza price, Suzuki brezza service center, maruti Suzuki brezza on road price, maruti Suzuki brezza offers, maruti Suzuki brezza price, maruti Suzuki brezza service center, maruti Suzuki brezza service center near me, maruti suzuki  brezza price, maruti suzuki Vitara brezza on road price, maruti suzuki Vitara brezza offers,maruti suzuki Vitara brezza, Vitara brezza on road price, Vitara brezza 2022 offers, Vitara brezza 2022 price, Vitara brezza on road price in hyderabad, breza offers in hyderabad, Vitara brezza price in hyderabad, maruti Vitara brezza 2022 price, maruti Vitara brezza 2022 on road price, maruti Vitara brezza 2022 offers, maruti Vitara brezza 2022 price in hyderabad, maruti Vitara brezza 2022 on road price in hyderabad, Maruti Suzuki Vitara brezza 2022 price, Maruti Suzuki Vitara brezza 2022 on road price, maruti suzuki Vitara brezza 2022 offers,  vitara Vitara brezza offers, Vitara Vitara brezza price, vitara Vitara brezza on road price, vitara Vitara brezza 2022 offers, vitara Vitara brezza 2022 price, vitara Vitara brezza 2022 on road price, vitara Vitara brezza 2022 offers,Vitara brezza on road price, Vitara brezza offers, Vitara brezza price, Vitara brezza service center, maruti Vitara brezza on road price, maruti Vitara brezza offers, maruti Vitara brezza price, maruti Vitara brezza service center, maruti Vitara brezza service center near me, maruti suzuki Vitara brezza price, maruti suzuki Vitara brezza on road price, maruti suzuki Vitara brezza offers,maruti suzuki Vitara brezza, Vitara brezza on road price, Vitara brezza 2022 offers, Vitara brezza 2022 price, Vitara brezza on road price in hyderabad, breza offers in hyderabad, ,Vitara brezza price in hyderabad, maruti Vitara brezza 2022 price, maruti Vitara brezza 2022 on road price, maruti Vitara brezza 2022 offers, maruti Vitara brezza 2022 price in hyderabad, maruti Vitara brezza 2022 on road price in hyderabad, Maruti Suzuki Vitara brezza 2022 price, Maruti Suzuki Vitara brezza 2022 on road price, maruti suzuki Vitara brezza 2022 offers,"
        /> */}
        <meta name="author" content="Broaddcast" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.saboomaruti.in/maruti-new-brezza-on-road-price-in-hyderabad"
        />
        <meta
          property="og:title"
          content="Maruti Suzuki Vitara Brezza Price | Vitara Brezza Mileage, Features, Specification | Saboo Maruti"
        />
        <meta
          property="og:description"
          content="Maruti Vitara brezza in Secunderabad & Hyderabad.Brezza 2022 Price Starts at 7.84* Lakh. Best price & offers on Maruti Vitara brezza at Saboo Maruti. Finance facility also available at the dealership. Please visit your nearest Showroom for best deals."
        />
        <meta property="og:image" content="img/og-tags/breeza.webp" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.saboomaruti.in/maruti-new-brezza-on-road-price-in-hyderabad"
        />
        <meta
          property="twitter:title"
          content="Maruti Suzuki Vitara Brezza Price | Vitara Brezza Mileage, Features, Specification | Saboo Maruti"
        />
        <meta
          property="twitter:description"
          content="Maruti Vitara brezza in Secunderabad & Hyderabad.Brezza 2022 Price Starts at 7.84* Lakh. Best price & offers on Maruti Vitara brezza at Saboo Maruti. Finance facility also available at the dealership. Please visit your nearest Showroom for best deals."
        />
        <meta property="twitter:image" content="img/og-tags/breeza.webp" />
      </Helmet>
      <Header />
      <img
        src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/banners/Brezza2022_June30_banner.webp"
        className="max-w-full w-full lg:mt-16"
        alt="1"
      />
      <CarsSlider />
      <div className="mx-5">
        <Colors />
        <Table />
      </div>
      <img
        src="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/specifications/Brezza2022_new.webp"
        alt="brochure"
        className="w-full"
      />
    </>
  );
}

const CarsSlider = () => {
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const cancelButtonRef = useRef(null);

  const pattern = /^[6-9][0-9]{6,9}$/;
  if (phone !== "" && phone.length === 10) {
    if (!pattern.test(phone)) {
      toast.error("Enter valid phone number", {
        theme: "colored",
      });
    }
  }

  return (
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 my-8 sm:px-0 px-5">
      <div>
        <ImageGallery
          lazyLoad={true}
          autoPlay={true}
          thumbnailPosition="left"
          showPlayButton={false}
          items={brezzaSliders}
        />
      </div>

      <div className="my-auto">
        <p className="text-3xl font-semibold">Maruti Brezza</p>
        <p className="font-semibold">
          Ex-Showroom Price:
          <span className="text-red-600 ml-3">???&nbsp;7.99 - 13.96 Lakh*</span>
        </p>
        <div className="flex items-center flex-wrap mt-5">
          <div className="flex items-center space-x-3 mr-7">
            <img
              src={require("../../assets/icons/speedometer.png")}
              className="h-8 w-8"
              alt="speedometer"
            />
            <p className="text-sm">
              Engine <br />
              <span>1462 CC</span>
            </p>
          </div>

          <div className="flex items-center space-x-3 mx-3 mb-1">
            <img
              src={require("../../assets/icons/gas-station.png")}
              className="h-8 w-8"
              alt="gas-station"
            />
            <p className="text-sm">
              Mileage <br />
              <span>20.15 kmpl*</span>
            </p>
          </div>

          <div className="flex items-center space-x-3 mr-7 mb-1">
            <img
              src={require("../../assets/icons/car.png")}
              className="h-8 w-8"
              alt="car-icon"
            />
            <p className="text-sm">
              Power (kW) <br />
              <span>75.8</span>
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2 mt-5 mb-1">
          <button
            className="px-4 py-1.5 text-sm border border-red-600 text-red-600 hover:bg-red-600 hover:text-white duration-500 rounded shadow-sm"
            onClick={() => setOpen(true)}
          >
            Get Best Offers
          </button>
          <button
            className="px-4 py-1.5 text-sm bg-red-600 border hover:bg-red-500 text-white rounded shadow-sm"
            onClick={() => setOpen(true)}
          >
            Book a Test Drive
          </button>
        </div>
        <p className="h-px my-6 w-full bg-gray-300"></p>
        {/* <p className="flex items-center">
          <BsCalendarCheck className="mr-1" />
          Delivery from Saboo RKS, 7-30 days
        </p> */}
        <p className="mt-2 mb-5 font-semibold">
          Our professional and well-trained staff is ready to assist you
        </p>
        <div className="flex items-center space-x-2 mt-5 mb-1">
          <a
            href="https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/brochures/Brezza2022_Hot_Techy_SUV_Broucher.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 text-sm bg-red-600 border hover:bg-red-500 text-white rounded shadow-sm uppercase"
          >
            View Brochure
          </a>
          <a
            href="/compare-cars"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 text-sm border border-red-600 text-red-600 hover:bg-red-600 hover:text-white duration-500 rounded shadow-sm"
          >
            Compare
          </a>
        </div>

        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            initialFocus={cancelButtonRef}
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <form
                    action="https://crm.zoho.in/crm/WebToLeadForm"
                    name="WebToLeads54158000000752015"
                    method="POST"
                    acceptCharset="UTF-8"
                  >
                    <input
                      type="text"
                      style={{ display: "none" }}
                      name="xnQsjsdp"
                      value="5b07d0b8ffc394794f6ba099ffd2ccc4accb79c8063e25060b4c64de95d0347b"
                    />
                    <input type="hidden" name="zc_gad" id="zc_gad" value="" />
                    <input
                      type="text"
                      style={{ display: "none" }}
                      name="xmIwtLD"
                      value="3e4c511e1bfac462fb9ac158b261b0d3cf3883ed222bfea597b99f9e00397c92"
                    />
                    <input
                      type="text"
                      style={{ display: "none" }}
                      name="actionType"
                      value="TGVhZHM="
                    />
                    <input
                      type="text"
                      style={{ display: "none" }}
                      name="returnURL"
                      value="https://www.saboomaruti.in/thank-you-for-contact-us"
                    />
                    <input
                      type="text"
                      style={{ display: "none" }}
                      id="ldeskuid"
                      name="ldeskuid"
                    />
                    <input
                      type="text"
                      style={{ display: "none" }}
                      id="LDTuvid"
                      name="LDTuvid"
                    />
                    <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                      <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="mt-3">
                          <Dialog.Title
                            as="h3"
                            className="text-lg leading-6 font-medium text-gray-900 text-center"
                          >
                            Book A Test Drive / Get Offers
                          </Dialog.Title>
                          <div className="mt-2 space-y-3">
                            <div className="mt-2 py-8 space-y-3">
                              <div>
                                <label className="block text-sm font-medium text-gray-700">
                                  Name
                                </label>
                                <input
                                  type="text"
                                  id="Last_Name"
                                  required
                                  name="Last Name"
                                  className="mt-1 px-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-600 rounded-md h-10"
                                />
                              </div>

                              <div>
                                <label className="block text-sm font-medium text-gray-700">
                                  Email
                                </label>
                                <input
                                  type="email"
                                  ftype="email"
                                  id="Email"
                                  name="Email"
                                  className="mt-1 px-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-600 rounded-md h-10"
                                />
                              </div>

                              <div>
                                <label className="block text-sm font-medium text-gray-700">
                                  Phone
                                </label>
                                <input
                                  type="text"
                                  id="Phone"
                                  name="Phone"
                                  minLength="10"
                                  maxLength="10"
                                  value={phone}
                                  onChange={(e) =>
                                    setPhone(
                                      e.target.value.replace(/[^1-9 ]/g, "") &&
                                        e.target.value.replace(/ /g, "")
                                    )
                                  }
                                  className="mt-1 px-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-600 rounded-md h-10"
                                />
                              </div>

                              <div>
                                <label className="block text-sm font-medium text-gray-700">
                                  Model
                                </label>
                                <select
                                  id="LEADCF6"
                                  name="LEADCF6"
                                  className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                >
                                  <option>Select Model</option>
                                  <option value="Maruti Alto 800">
                                    Maruti Alto K10
                                  </option>
                                  <option value="Maruti Alto 800">
                                    Maruti Alto
                                  </option>
                                  <option value="Maruti Wagon R">
                                    Maruti Wagon R
                                  </option>
                                  <option value="Maruti Celerio">
                                    Maruti New Celerio
                                  </option>
                                  <option value="Maruti Swift">
                                    Maruti Swift
                                  </option>
                                  <option value="Maruti Dzire">
                                    Maruti Dzire
                                  </option>
                                  <option value="Maruti S-Presso">
                                    Maruti S-Presso
                                  </option>
                                  <option value="Maruti Ertiga">
                                    Maruti Ertiga
                                  </option>
                                  <option value="Maruti Brezza">
                                    Maruti Brezza
                                  </option>
                                  <option value="Maruti Eeco">
                                    Maruti Eeco
                                  </option>
                                </select>
                              </div>
                            </div>

                            <div className="flex items-center space-x-2 mb-5">
                              <input
                                id="comments"
                                type="checkbox"
                                className=" h-4 w-4 border-gray-300 rounded"
                                required
                              />
                              <label
                                htmlFor="comments"
                                className="text-gray-700 text-sm"
                              >
                                I agree to the Privacy Policy and Terms of
                                Service.
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button
                          type="submit"
                          className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                        >
                          Submit
                        </button>
                        <button
                          type="button"
                          className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                          onClick={() => setOpen(false)}
                          ref={cancelButtonRef}
                        >
                          Cancel
                        </button>
                      </div>
                    </Dialog.Panel>
                  </form>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </div>
  );
};

const Colors = () => {
  const [current, setCurrent] = useState(1);
  return (
    <div className="container mx-auto bg-gray-100 rounded py-8">
      {brezzaColors.map((item) => (
        <img
          key={item.id}
          src={item.img}
          className={item.id === current ? "mx-auto sm:h-80" : "hidden"}
          alt={item.id}
        />
      ))}
      <div className="flex items-center justify-center space-x-3 sm:space-y-0 space-y-1">
        <p
          className={
            current === 1
              ? "h-5 rounded-full w-5 animate-bounce bg-[#5d5135]"
              : "h-5 rounded-full w-5 bg-[#5d5135]"
          }
          onClick={(e) => setCurrent(1)}
        ></p>
        <p
          className={
            current === 2
              ? "h-5 rounded-full w-5 bg-[#264b9c] animate-bounce"
              : "h-5 rounded-full w-5 bg-[#264b9c]"
          }
          onClick={(e) => setCurrent(2)}
        ></p>
        <p
          className={
            current === 3
              ? "h-5 rounded-full w-5 bg-[#8d8d8d] animate-bounce"
              : "h-5 rounded-full w-5 bg-[#8d8d8d] "
          }
          onClick={(e) => setCurrent(3)}
        ></p>
        <p
          className={
            current === 4
              ? "h-5 rounded-full w-5 animate-bounce"
              : "h-5 rounded-full w-5"
          }
          style={{
            background: "linear-gradient(61deg, #5d5135 50%, #ffffff 50%)",
          }}
          onClick={(e) => setCurrent(4)}
        ></p>
        <p
          className={
            current === 5
              ? "h-5 rounded-full w-5 bg-[#f7f7f7] border-2 border-gray-300 animate-bounce"
              : "h-5 rounded-full w-5 bg-[#f7f7f7] border-2 border-gray-300"
          }
          onClick={(e) => setCurrent(5)}
        ></p>
        <p
          className={
            current === 6
              ? "h-5 rounded-full w-5 animate-bounce"
              : "h-5 rounded-full w-5"
          }
          style={{
            background: "linear-gradient(61deg, #e62924 50%, #3e403f 50%)",
          }}
          onClick={(e) => setCurrent(6)}
        ></p>
        <p
          className={
            current === 7
              ? "h-5 rounded-full w-5 bg-[#e62924] animate-bounce"
              : "h-5 rounded-full w-5 bg-[#e62924]"
          }
          onClick={(e) => setCurrent(7)}
        ></p>
        <p
          className={
            current === 8
              ? "h-5 rounded-full w-5 animate-bounce"
              : "h-5 rounded-full w-5"
          }
          style={{
            background: "linear-gradient(61deg, #5d5135 50%, #000 50%)",
          }}
          onClick={(e) => setCurrent(8)}
        ></p>
        <p
          className={
            current === 9
              ? "h-5 rounded-full w-5 bg-[#c5c5c5] animate-bounce"
              : "h-5 rounded-full w-5 bg-[#c5c5c5]"
          }
          onClick={(e) => setCurrent(9)}
        ></p>
      </div>
    </div>
  );
};

const Table = () => {
  return (
    <div className="overflow-scroll md:overflow-hidden">
      <table className="table-auto border-collapse border border-slate-400 uppercase w-full container mx-auto my-8 text-left text-sm">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th className="border border-slate-300 font-normal px-3 py-1.5">
              Variants
            </th>
            <th className="border border-slate-300 font-normal px-3 py-1.5">
              Transmission
            </th>
            {/* <th className="border border-slate-300 font-normal px-3 py-1.5">
              Mileage
            </th> */}
            <th className="border border-slate-300 font-normal px-3 py-1.5">
              Ex-Showroom Price
            </th>
          </tr>
        </thead>
        <tbody>
          {brezzaVariants?.map((item) => (
            <tr key={item.id}>
              <td className="border border-slate-300 px-3 py-1.5">
                {item.title}
              </td>
              <td className="border border-slate-300 px-3 py-1.5">
                {item.transmission}
              </td>
              {/* <td className="border border-slate-300 px-3 py-1.5">
                {item.mileage}KM/L*
              </td> */}
              <td className="border border-slate-300 px-3 py-1.5">
                ???&nbsp;{item.price}*
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Brezza;
