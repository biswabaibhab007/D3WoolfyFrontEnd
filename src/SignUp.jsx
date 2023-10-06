import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import "./SignUp.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [nationalID, setNationalID] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setpinCode] = useState("");
  const [country, setCountry] = useState("");
  const [farmName, setFarmName] = useState("");
  const [farmLocation, setFarmLocation] = useState("");
  const [farmSize, setFarmSize] = useState("");
  const [farmingActivities, setFarmingActivities] = useState("");
  const [experienceYears, setExperienceYears] = useState("");
  const [processingFacilities, setProcessingFacilities] = useState("");
  const [productionPractices, setProductionPractices] = useState("");
  const [specializations, setSpecializations] = useState([]);

  const navigator = useNavigate();

  // Already Signed Up
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigator("/");
    }
  });

  const handleSpecializationChange = (e) => {
    setSpecializations(e.target.value.split(","));
  };

  const collectData = async () => {
    // MongoDB connection
    if (
      category === "farmer"
        ? name !== "" &&
        email !== "" &&
        password !== "" &&
        category !== "" &&
        dateOfBirth !== "" &&
        gender !== "" &&
        nationalID !== "" &&
        phoneNumber !== "" &&
        street !== "" &&
        city !== "" &&
        state !== "" &&
        pinCode !== "" &&
        country !== "" &&
        farmName !== "" &&
        farmLocation !== "" &&
        farmSize !== "" &&
        farmingActivities !== "" &&
        experienceYears !== ""
        : name !== "" &&
        email !== "" &&
        password !== "" &&
        category !== "" &&
        dateOfBirth !== "" &&
        gender !== "" &&
        nationalID !== "" &&
        phoneNumber !== "" &&
        street !== "" &&
        city !== "" &&
        state !== "" &&
        pinCode !== "" &&
        country !== ""
    ) {
      const userData = {
        name,
        email,
        password,
        category,
        personalInfo: {
          dateOfBirth,
          gender,
          nationalID,
        },
        contactInfo: {
          phoneNumber,
          address: {
            street,
            city,
            state,
            pinCode,
            country,
          },
        },
      };
      if (category === "buyer" || category === "producer") {
        userData.farmInfo = {
          farmName: null,
          farmLocation: null,
          farmSize: null,
          farmingActivities: null,
          experienceYears: null,
        };
        userData.woolInfo = {
          animalType: null,
          animalCount: null,
          processingFacilities: null,
          productionPractices: null,
          specializations: [],
        };
      }

      if (category === "farmer") {
        userData.farmInfo = {
          farmName,
          farmLocation,
          farmSize: Number(farmSize),
          farmingActivities,
          experienceYears: Number(experienceYears),
          woolInfo: {
            animalType: "",
            animalCount: 0,
            processingFacilities,
            productionPractices,
            specializations,
          },
        };
      }

      // Send userData to the server
      let result = await fetch("http://localhost:5000/signup", {
        method: "post",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();

      // Local Storage
      localStorage.setItem("user", JSON.stringify(result));

      // Render to Home page
      navigator("/");
    } else {
      alert("Please enter all required fields");
    }
  };

  return (
    <div className="signup flex justify-center font-Raleway bg-blue-200 h-full">

      {/* left side */}
      <div className="w-6/12 bg-blue-700 flex justify-center items-center flex-col">

        <div>
          <p className="font-YoungSerif mx-14 my-4 text-2xl text-white"><span className="text-pink-500">Join us</span> and start weaving your digital journey through the <span className="text-pink-500">world of wool.</span></p>
        </div>

        <div className="flex justify-center">
          <img src="" alt="" />
        </div>
        <div>
          <img width={320} src="/login_asset.png" alt="" />
        </div>
      </div>

      {/* right side */}
      <div className="w-7/12 flex items-center justify-center">
        <div className="w-11/12">
          <div className="font-Croissant text-4xl text-center mb-5 font-bold ">
            <h1 className="mt-4">Signup</h1>
          </div>

          <div className="input-form flex flex-col items-center">
            <div className="">
              <div className="">
                <p>Name:</p>
                <input
                  className="inputBox mt-1 mb-4 px-3 py-2 bg-gray-100 text-gray-700 w-96 rounded-lg"
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                ></input>
              </div>

              <div>
                <p>Email:</p>
                <input
                  className="inputBox mt-1 mb-4 px-3 py-2 bg-gray-100 text-gray-700 w-96 rounded-lg"
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></input>
              </div>
            </div>

            <div className="">
              <div className="">
                <p>Password:</p>
                <input
                  className="inputBox mt-1 mb-4 px-3 py-2 bg-gray-100 text-gray-700 w-96 rounded-lg"
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>

              <div className="">
                <p>DOB:</p>
                <input
                  className="inputBox mt-1 mb-4 px-3 py-2 bg-gray-100 text-gray-700 w-96 rounded-lg"
                  type="date"
                  placeholder="Date of Birth"
                  value={dateOfBirth}
                  onChange={(e) => {
                    setDateOfBirth(e.target.value);
                  }}
                />
              </div>
            </div>

            <div>
              <div className="">
                <p>Category:</p>
                <select
                  className="inputBox mt-1 mb-4 px-3 py-2 bg-gray-100 text-gray-700 w-96 rounded-lg"
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                >
                  <option value="">Select Category</option>
                  <option value="farmer">Farmer</option>
                  <option value="buyer">Buyer</option>
                  <option value="producer">producer</option>
                </select>
              </div>

              <div className="">
                <p>Gender:</p>
                <select
                  className="inputBox mt-1 mb-4 px-3 py-2 bg-gray-100 text-gray-700 w-96 rounded-lg"
                  value={gender}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                >
                  <option value="">Select Gender</option>
                  <option value="male">male</option>
                  <option value="female">female</option>
                </select>
              </div>
            </div>

            <div>
              <p>Aadhaar ID:</p>
              <input
                className="inputBox mt-1 mb-4 px-3 py-2 bg-gray-100 text-gray-700 w-96 rounded-lg"
                type="text"
                placeholder="Enter Aadhaar No."
                value={nationalID}
                onChange={(e) => {
                  setNationalID(e.target.value);
                }}
              />
            </div>

            <div className="">
              <p>Phone Number:</p>
              <input
                className="inputBox mt-1 mb-4 px-3 py-2 bg-gray-100 text-gray-700 w-96 rounded-lg"
                type="tel"
                placeholder="Enter Phone Number"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
            </div>

            <div>
              <p className="mb-1">Address:</p>
              <div>

                <input
                  className="inputBox px-3 py-2 w-96"
                  type="text"
                  placeholder="Street"
                  value={street}
                  onChange={(e) => {
                    setStreet(e.target.value);
                  }}
                />
              </div>

              <div>
                <input
                  className="inputBox px-3 py-2 w-96"
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                />
              </div>

              <div>
                <input
                  className="inputBox px-3 py-2 w-96"
                  type="text"
                  placeholder="State"
                  value={state}
                  onChange={(e) => {
                    setState(e.target.value);
                  }}
                />
              </div>
              <div>
                <input
                  className="inputBox px-3 py-2 w-96"
                  type="text"
                  placeholder="Zip Code"
                  value={pinCode}
                  onChange={(e) => {
                    setpinCode(e.target.value);
                  }}
                />
              </div>
              <div>
                <input
                  className="inputBox px-3 py-2 w-96"
                  type="text"
                  placeholder="Country"
                  value={country}
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                />
              </div>
            </div>
            {category === "farmer" && (
              <>
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
                <p>Farm Size (in acres):</p>
                <div>
                  <input
                    className="inputBox px-3 py-2 w-96"
                    type="number"
                    placeholder="Enter Farm Size"
                    value={farmSize}
                    onChange={(e) => {
                      setFarmSize(e.target.value);
                    }}
                  />
                </div>
                <p>Farming Activities:</p>
                <div>
                  <input
                    className="inputBox px-1 py-1 bg-gray-100 text-gray-700 w-11/12 rounded-lg"
                    type="text"
                    placeholder="Enter Farming Activities"
                    value={farmingActivities}
                    onChange={(e) => {
                      setFarmingActivities(e.target.value);
                    }}
                  />
                </div>
                <p>Experience Years:</p>
                <div>
                  <input
                    className="inputBox px-1 py-1 bg-gray-100 text-gray-700 w-11/12 rounded-lg"
                    type="number"
                    placeholder="Enter Experience Years"
                    value={experienceYears}
                    onChange={(e) => {
                      setExperienceYears(e.target.value);
                    }}
                  />
                </div>
                <p>Processing Facilities:</p>
                <div>
                  <input
                    className="inputBox px-1 py-1 bg-gray-100 text-gray-700 w-11/12 rounded-lg"
                    type="text"
                    placeholder="Enter Processing Facilities"
                    value={processingFacilities}
                    onChange={(e) => {
                      setProcessingFacilities(e.target.value);
                    }}
                  />
                </div>
                <p>Production Practices:</p>
                <div>
                  <input
                    className="inputBox px-1 py-1 bg-gray-100 text-gray-700 w-11/12 rounded-lg"
                    type="text"
                    placeholder="Enter Production Practices"
                    value={productionPractices}
                    onChange={(e) => {
                      setProductionPractices(e.target.value);
                    }}
                  />
                </div>
                <p>Specializations (comma-separated):</p>
                <div>
                  <input
                    className="inputBox px-1 py-1 bg-gray-100 text-gray-700 w-11/12 rounded-lg"
                    type="text"
                    placeholder="Enter Specializations"
                    value={specializations}
                    onChange={handleSpecializationChange}
                  />
                </div>
              </>
            )}
            <div className="flex justify-center">

            <div className="w-11/12 mb-2 flex justify-center">

              <div className=" flex justify-center mt-12">
                <button className=" bg-blue-600 p-4 text-white font-semibold w-96 rounded-xl hover:bg-blue-800" type="button" onClick={collectData}>
                  Sign Up
                </button>
              </div>

            </div>
            </div>
            <div className="text-center">
            <p>Already have an account?{" "}</p>
            <a
              onClick={() => {
                navigator("/login");
              }}
            >
              Click Here to login
            </a>{" "}
          </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;