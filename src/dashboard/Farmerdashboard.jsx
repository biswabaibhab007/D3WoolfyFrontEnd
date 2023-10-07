import React, { useState } from "react";
import { ReactDialogBox } from "react-js-dialog-box";
import "react-js-dialog-box/dist/index.css";

const Farmerdashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [farmName, setFarmName] = useState("");
  const [farmLocation, setFarmLocation] = useState("");
  const [wooltype, setWooltype] = useState("");
  const [woolweight, setWoolweight] = useState("");
  const [dateofdelivery, setDateOfDelivery] = useState("");

  let formData = localStorage.getItem("formData");
  formData = JSON.parse(formData);

  const openBox = () => {
    setIsOpen(true);
  };

  const closeBox = () => {
    setIsOpen(false);
  };

  const handleSave = async () => {
    // Create an object to store the form data
    const formData = {
      farmName,
      farmLocation,
      wooltype,
      woolweight,
      dateofdelivery,
    };

    // Save the form data to localStorage (you can adjust the key as needed)
    localStorage.setItem("formData", JSON.stringify(formData));
    let result = await fetch("http://localhost:5000/farmerdashboard", {
      method: "post",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();

    // Close the dialog box
    closeBox();
  };

  return (
    <div>

    <div className="bg-blue-200">
    <div className='heading'>
      <h1 className='pt-10 font-YoungSerif text-5xl text-center'>Welcome back NAME, 👋 </h1>
    </div>
    <div className='details flex justify-around mt-10 bg-white mx-32 py-20 rounded shadow-2xl'>
      <div className='details-text mx-10 text-2xl'>
        <p>Biswa Baibhab Subudhi</p>
        <p>Location</p>
        <p>contact no.</p>
        <p>Address</p>
      </div>
      <div className='image border-2 border-black rounded-full'>
        <img width='200rem' className=" rounded-full" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1696638129~exp=1696638729~hmac=c440099ba3d8294de2e6c5a50383e752d7f653074b8c09debc61d8a80796a3d7" alt="" />
      </div>
    </div>

    </div>

      <div className="flex justify-center mt-4">
      <button className="bg-blue-600 text-white p-2 shadow-2xl rounded-xl" onClick={openBox}>Open ReactDialogBox</button>
      </div>

      {isOpen && (
        <ReactDialogBox 
          closeBox={closeBox}
          modalWidth="80%"
          headerBackgroundColor="red"
          headerTextColor="white"
          headerHeight="65"
          closeButtonColor="white"
          bodyBackgroundColor="white"
          bodyTextColor="black"
          bodyHeight="600px"
          headerText="Create Tender"
        >
          <div>
            <p>Farm Name:</p>
            <div>
              <input
                className="inputBox"
                type="text"
                placeholder="Enter Farm Name"
                value={farmName}
                onChange={(e) => {
                  setFarmName(e.target.value);
                }}
              />
            </div>
            <p>Farm Location:</p>
            <div>
              <input
                className="inputBox"
                type="text"
                placeholder="Enter Farm Location"
                value={farmLocation}
                onChange={(e) => {
                  setFarmLocation(e.target.value);
                }}
              />
            </div>
            <p>Wool Type:</p>
            <div>
              <input
                className="inputBox px-3 py-2 w-96"
                type="text"
                placeholder="Enter Wool Type"
                value={wooltype}
                onChange={(e) => {
                  setWooltype(e.target.value);
                }}
              />
            </div>
            <p>Wool Weight (in Kgs):</p>
            <div>
              <input
                className="inputBox px-3 py-2 w-96"
                type="number"
                placeholder="Enter Wool Weight"
                value={woolweight}
                onChange={(e) => {
                  setWoolweight(e.target.value);
                }}
              />
            </div>
            <p>Date Of Delivery:</p>
            <input
              type="date"
              placeholder="Date of Delivery"
              value={dateofdelivery}
              onChange={(e) => {
                setDateOfDelivery(e.target.value);
              }}
            />
            <button onClick={handleSave}>Save</button>
          </div>
        </ReactDialogBox>
      )}
    </div>
  );
};

export default Farmerdashboard;