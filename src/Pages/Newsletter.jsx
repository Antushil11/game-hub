import React, { useState } from "react";
import MyContainer from "../components/MyContainer";

const Newsletter = () => {
  const [selected, setSelected] = useState("");
  return (
    <MyContainer className={"mt-6"}>
      <h2 className="text-2xl font-bold text-gray-400 mb-6 text-center">
        Newsletter Subscription Form
      </h2>
      <div className="p-8 mt-6">
        <form className="p-8 ">
          <div className=" rounded-2xl shadow-md ">
            <h2 className="text-xl font-semibold mb-6">
              Choose a Subscription Plan
            </h2>

            <div className="space-y-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="subscription"
                  value="monthly"
                  checked={selected === "monthly"}
                  onChange={() => setSelected("monthly")}
                  className="mt-1 accent-blue-500"
                />
                <div>
                  <div className="font-medium">Monthly Subscription</div>
                  <div className="text-white text-sm">
                    $9.99 for the first month then, $19.99 for each month
                  </div>
                </div>
              </label>

              <br />

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="subscription"
                  value="6months"
                  checked={selected === "6months"}
                  onChange={() => setSelected("6months")}
                  className="mt-1 accent-blue-500"
                />
                <div>
                  <div className="font-medium">6-months</div>
                  <div className="text-white text-sm">
                    $5.99 for the first payment then, $49.99 for each six months
                  </div>
                </div>
              </label>

              <br />

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="subscription"
                  value="annual"
                  checked={selected === "annual"}
                  onChange={() => setSelected("annual")}
                  className="mt-1 accent-blue-500"
                />
                <div>
                  <div className="font-medium">Annual</div>
                  <div className="text-white text-sm">
                    $69.99 for the first year then, $89.99 for each year
                  </div>
                </div>
              </label>
            </div>
          </div>
          
          <option value=""></option>
          <label className="mb-6">Full Name</label>
          <span className="text-red-600">*</span>
          <div className="flex gap-2 mb-6">
            <input
              className="border border-gray-300 rounded-lg p-2 flex-1 "
              placeholder="First Name"
              type="text"
            />
            <input
              className="border border-gray-300 rounded-lg p-2 flex-1 "
              placeholder="Middle Name"
              type="text"
            />
            <input
              className="border border-gray-300 rounded-lg p-2 flex-1 "
              placeholder="Last Name"
              type="text"
            />
          </div>
          <div className="mb-6 ">
            <label>Email</label>
            <br />
            <input
              className="border border-gray-300 rounded-lg p-2 "
              type="email"
              name=""
              id=""
              placeholder="example@example.com"
            />
          </div>
          <div className="mb-6">
            <label>Phone Number</label>
            <br />
            <input
              className="border border-gray-300 rounded-lg p-2 "
              type="text"
              name=""
              id=""
              placeholder="+088****"
            />
          </div>
          <label>Address</label>
          <span className="text-red-600">*</span>
          <div className="flex flex-col gap-2 mb-6">
            <input
              className="border mb-6  border-gray-300 rounded-lg p-2 flex-1 "
              placeholder="Street Address"
              type="text"
            />
            <input
              className="border border-gray-300 rounded-lg p-2 flex-1 mb-6  "
              placeholder="Street Address Line 2"
              type="text"
            />
            <div className="flex mb-6 gap-4">
              <input
                className="border border-gray-300 rounded-lg p-2 flex-1 "
                placeholder="City"
                type="text"
              />
              <input
                className="border  border-gray-300 rounded-lg p-2 flex-1 "
                placeholder="State / Province"
                type="text"
              />
            </div>
            <input
              className="border border-gray-300 rounded-lg p-2 flex-1 "
              placeholder="Postal / Zip Code"
              type="text"
            />
          </div>

          <div className="w-full  flex items-center justify-center">
            <button className=" btn  bg-linear-to-r from-[#FFA726] to-[#FB8C00] text-white">
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </MyContainer>
  );
};

export default Newsletter;
