import React, { useState } from "react";
import styles from "@/styles/FormPage.module.css";
import {
  BsFillArrowRightSquareFill,
  BsFillArrowLeftSquareFill,
  BsFillSimFill,
  BsCameraFill,
  BsSdCardFill,
  BsFire,
} from "react-icons/bs";
import { GiProcessor } from "react-icons/gi";
import {MdCancel} from "react-icons/md"
import Link from "next/link";

const FormPage = () => {
  const totalSteps = 12;
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    os: "",
    Number_of_Sim: 0,
    Processor_Name: "",
    Processor_No_of_Cores: 0,
    Ram_Size_GB: 0,
    Rom_Size_GB: 0,
    Battery_Capacity: 0,
    Display_Size_inches: 0,
    Rear_Camera: 0,
    Front_Camera: 0,
    External_Card_Support: 0,
    // Other form fields
  });
  const [isFormIncomplete, setIsFormIncomplete] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const [apiError, setApiError] = useState(null);
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
    setApiResponse(null)
  };

  const handleButtonSelect = (fieldName,selectedValue) => {
    setFormData({ ...formData, [fieldName]: selectedValue });
  };

  const handleSubmit = async () => {
    const isFormComplete = Object.values(formData).every(
      (value) => value !== ""
    );

    if (!isFormComplete) {
      setIsFormIncomplete(true);
      return;
    }

    const requestData = {
      os: formData.os || "",
      Number_of_Sim: formData.Number_of_Sim || 0,
      Processor_Name: formData.Processor_Name || "",
      Processor_No_of_Cores: formData.Processor_No_of_Cores || 0,
      Ram_Size_GB: formData.Ram_Size_GB || 0,
      Rom_Size_GB: formData.Rom_Size_GB || 0,
      Battery_Capacity: formData.Battery_Capacity || 0,
      Display_Size_inches: formData.Display_Size_inches || 0,
      Rear_Camera: formData.Rear_Camera || 0,
      Front_Camera: formData.Front_Camera || 0,
      External_Card_Support: formData.External_Card_Support || 0,
    };

    try {
      const response = await fetch(
        "https://phonesuggest.onrender.com/predict_score",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );

      const responseData = await response.json();
      console.log("Response Data:", responseData);

      // Handle the response or any necessary logic here
      // For example:
      if (response.ok) {
        setApiResponse(responseData);
        setApiError(null);
      } else {
        setApiResponse(null);
        setApiError(responseData.error);
      }
    } catch (error) {
      setApiResponse(null);
      setApiError("An error occurred while making the API request.");
    }
    setFormData({
      os: "",
      Number_of_Sim: 0,
      Processor_Name: "",
      Processor_No_of_Cores: 0,
      Ram_Size_GB: 0,
      Rom_Size_GB: 0,
      Battery_Capacity: 0,
      Display_Size_inches: 0,
      Rear_Camera: 0,
      Front_Camera: 0,
      External_Card_Support: 0,
    });
    setIsFormIncomplete(false);
  };

  const handleCancelButton = () => {
    setFormData({
      os: "",
      Number_of_Sim: 0,
      Processor_Name: "",
      Processor_No_of_Cores: 0,
      Ram_Size_GB: 0,
      Rom_Size_GB: 0,
      Battery_Capacity: 0,
      Display_Size_inches: 0,
      Rear_Camera: 0,
      Front_Camera: 0,
      External_Card_Support: 0,
    });
    setCurrentStep(0);
    setIsFormIncomplete(false);
    setApiResponse(null);
  };

  

  const operatingSystems = [
    "Android v10",
    "Android v11",
    "Android v12",
    "Android v13",
    "iOS v16",
    "iOS v15",
    "iOS v13",
    "iOS v17",
  ];

  const sim = [1, 2];

  const core = [4, 6, 8];

  const ram = [2.0, 4.0, 6.0, 8.0, 12.0, 16.0];

  const rom = [32, 64, 128, 256, 512];

  const rearcam = [8, 12, 13, 16, 48, 50, 64, 108, 200];

  const frontcam = [5, 8, 10, 12, 16, 32, 44, 50, 60];

  const extcard = [1, 0];

  return (
    <div className={styles.container}>
      {/* //---STEP 0-----// */}
      {currentStep === 0 && (
        <div>
          <h1>Looking for Smartphone?</h1>
          <h2>Get Our Suggestion!</h2>
        </div>
      )}
      {/* //---STEP 1-----// */}
      {currentStep === 1 && (
        <div className={styles.step1}>
          {currentStep > 0 && (
            <div className={styles.buttonstyle}>
              <button onClick={handlePrevious} className={styles.nextButton}>
                <BsFillArrowLeftSquareFill />
              </button>
              <button
                onClick={handleCancelButton}
                className={styles.nextButton}
              >
                <MdCancel />
              </button>
            </div>
          )}

          <h2>What Operating System you are looking for?</h2>
          <div className={styles.buttonGroup}>
            {operatingSystems.map((os) => (
              <button
                key={os}
                onClick={() => handleButtonSelect("os", os)}
                className={
                  formData.os === os
                    ? `${styles.formButton} ${styles.active}`
                    : styles.formButton
                }
              >
                {os}
              </button>
            ))}
          </div>
        </div>
      )}
      {/* //---STEP 2-----// */}
      {currentStep === 2 && (
        <div className={styles.step1}>
          {currentStep > 0 && (
            <div className={styles.buttonstyle}>
              <button onClick={handlePrevious} className={styles.nextButton}>
                <BsFillArrowLeftSquareFill />
              </button>
              <button
                onClick={handleCancelButton}
                className={styles.nextButton}
              >
                <MdCancel />
              </button>
            </div>
          )}

          <h2>How much Sim do you want?</h2>
          <div className={styles.buttonGroup}>
            {sim.map((sim) => (
              <button
                key={sim}
                onClick={() => handleButtonSelect("Number_of_Sim", sim)}
                className={
                  formData.Number_of_Sim === sim
                    ? `${styles.formButton} ${styles.active}`
                    : styles.formButton
                }
              >
                <BsFillSimFill />
                {sim}
              </button>
            ))}
          </div>
        </div>
      )}
      {/* //---STEP 3-----// */}
      {currentStep === 3 && (
        <div className={styles.step1}>
          {currentStep > 0 && (
            <div className={styles.buttonstyle}>
              <button onClick={handlePrevious} className={styles.nextButton}>
                <BsFillArrowLeftSquareFill />
              </button>
              <button
                onClick={handleCancelButton}
                className={styles.nextButton}
              >
                <MdCancel />
              </button>
            </div>
          )}

          <h2>What Processor you want?</h2>
          <div className={styles.textInputContainer}>
            <input
              type="text"
              value={formData.Processor_Name || ""}
              onChange={(e) =>
                setFormData({ ...formData, Processor_Name: e.target.value })
              }
              placeholder="Enter Processor"
              className={styles.textInput}
            />
          </div>
          <div className={styles.buttonGroup}>
            {core.map((core) => (
              <button
                key={core}
                onClick={() =>
                  handleButtonSelect("Processor_No_of_Cores", core)
                }
                className={
                  formData.Processor_No_of_Cores === core
                    ? `${styles.formButton} ${styles.active}`
                    : styles.formButton
                }
              >
                <GiProcessor />
                {core} core
              </button>
            ))}
          </div>
        </div>
      )}
      {/* //---STEP 4-----// */}
      {currentStep === 4 && (
        <div className={styles.step1}>
          {currentStep > 0 && (
            <div className={styles.buttonstyle}>
              <button onClick={handlePrevious} className={styles.nextButton}>
                <BsFillArrowLeftSquareFill />
              </button>
              <button
                onClick={handleCancelButton}
                className={styles.nextButton}
              >
                <MdCancel />
              </button>
            </div>
          )}

          <h2>Ram you are looking for?</h2>
          <div className={styles.buttonGroup}>
            {ram.map((ram) => (
              <button
                key={ram}
                onClick={() => handleButtonSelect("Ram_Size_GB", ram)}
                className={
                  formData.Ram_Size_GB === ram
                    ? `${styles.formButton} ${styles.active}`
                    : styles.formButton
                }
              >
                {ram} GB
              </button>
            ))}
          </div>
        </div>
      )}
      {/* //---STEP 5-----// */}
      {currentStep === 5 && (
        <div className={styles.step1}>
          {currentStep > 0 && (
            <div className={styles.buttonstyle}>
              <button onClick={handlePrevious} className={styles.nextButton}>
                <BsFillArrowLeftSquareFill />
              </button>
              <button
                onClick={handleCancelButton}
                className={styles.nextButton}
              >
                <MdCancel />
              </button>
            </div>
          )}

          <h2>Rom you are looking for?</h2>
          <div className={styles.buttonGroup}>
            {rom.map((rom) => (
              <button
                key={rom}
                onClick={() => handleButtonSelect("Rom_Size_GB", rom)}
                className={
                  formData.Rom_Size_GB === rom
                    ? `${styles.formButton} ${styles.active}`
                    : styles.formButton
                }
              >
                {rom} GB
              </button>
            ))}
          </div>
        </div>
      )}
      {/* //---STEP 6-----// */}
      {currentStep === 6 && (
        <div className={styles.step1}>
          {currentStep > 0 && (
            <div className={styles.buttonstyle}>
              <button onClick={handlePrevious} className={styles.nextButton}>
                <BsFillArrowLeftSquareFill />
              </button>
              <button
                onClick={handleCancelButton}
                className={styles.nextButton}
              >
                <MdCancel />
              </button>
            </div>
          )}

          <h2>How much Battery Capacity you want?</h2>
          <div className={styles.textInputContainer}>
            <input
              type="text"
              value={formData.Battery_Capacity || ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  Battery_Capacity: e.target.value,
                })
              }
              placeholder="Battery Capacity (mAh)"
              className={styles.textInput}
            />
          </div>
        </div>
      )}
      {currentStep === 7 && (
        <div className={styles.step1}>
          {currentStep > 0 && (
            <div className={styles.buttonstyle}>
              <button onClick={handlePrevious} className={styles.nextButton}>
                <BsFillArrowLeftSquareFill />
              </button>
              <button
                onClick={handleCancelButton}
                className={styles.nextButton}
              >
                <MdCancel />
              </button>
            </div>
          )}

          <h2>How much Display you want?</h2>
          <div className={styles.textInputContainer}>
            <input
              type="text"
              value={formData.Display_Size_inches || ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  Display_Size_inches: e.target.value,
                })
              }
              placeholder="Display size (inch)"
              className={styles.textInput}
            />
          </div>
        </div>
      )}
      {currentStep === 8 && (
        <div className={styles.step1}>
          {currentStep > 0 && (
            <div className={styles.buttonstyle}>
              <button onClick={handlePrevious} className={styles.nextButton}>
                <BsFillArrowLeftSquareFill />
              </button>
              <button
                onClick={handleCancelButton}
                className={styles.nextButton}
              >
                <MdCancel />
              </button>
            </div>
          )}

          <h2>How much Rear Camera?</h2>
          <div className={styles.buttonGroup}>
            {rearcam.map((rearcam) => (
              <button
                key={rearcam}
                onClick={() => handleButtonSelect("Rear_Camera", rearcam)}
                className={
                  formData.Rear_Camera === rearcam
                    ? `${styles.formButton} ${styles.active}`
                    : styles.formButton
                }
              >
                <BsCameraFill />
                {rearcam} mp
              </button>
            ))}
          </div>
        </div>
      )}
      {/* //--STEP 8---// */}
      {currentStep === 9 && (
        <div className={styles.step1}>
          {currentStep > 0 && (
            <div className={styles.buttonstyle}>
              <button onClick={handlePrevious} className={styles.nextButton}>
                <BsFillArrowLeftSquareFill />
              </button>
              <button
                onClick={handleCancelButton}
                className={styles.nextButton}
              >
                <MdCancel />
              </button>
            </div>
          )}

          <h2>How much front Camera?</h2>
          <div className={styles.buttonGroup}>
            {frontcam.map((frontcam) => (
              <button
                key={frontcam}
                onClick={() => handleButtonSelect("Front_Camera", frontcam)}
                className={
                  formData.Front_Camera === frontcam
                    ? `${styles.formButton} ${styles.active}`
                    : styles.formButton
                }
              >
                <BsCameraFill />
                {frontcam} mp
              </button>
            ))}
          </div>
        </div>
      )}
      {/* //--STEP 9---// */}
      {currentStep === 10 && (
        <div className={styles.step1}>
          {currentStep > 0 && (
            <div className={styles.buttonstyle}>
              <button onClick={handlePrevious} className={styles.nextButton}>
                <BsFillArrowLeftSquareFill />
              </button>
              <button
                onClick={handleCancelButton}
                className={styles.nextButton}
              >
                <MdCancel />
              </button>
            </div>
          )}

          <h2>Need External Card Support?</h2>
          <div className={styles.buttonGroup}>
            {extcard.map((extcard) => (
              <button
                key={extcard}
                onClick={() =>
                  handleButtonSelect("External_Card_Support", extcard)
                }
                className={
                  formData.External_Card_Support === extcard
                    ? `${styles.formButton} ${styles.active}`
                    : styles.formButton
                }
              >
                <BsSdCardFill />
                {extcard}
              </button>
            ))}
          </div>
        </div>
      )}
      {currentStep === 11 && (
        <div className={styles.laststep}>
          {currentStep > 0 && (
            <div className={styles.buttonstyle}>
              <button onClick={handlePrevious} className={styles.nextButton}>
                <BsFillArrowLeftSquareFill />
              </button>
              <button
                onClick={handleCancelButton}
                className={styles.nextButton}
              >
                <MdCancel />
              </button>
            </div>
          )}
        </div>
      )}
      {apiResponse ? (
        <div className={styles.apiResponseContainer}>
          <div className={styles.res}>
            <h3>Suggested Brand</h3>
            <div className={styles.resdiv}>
              {apiResponse.suggested_brand}
              <BsFire />
            </div>
          </div>
          <div className={styles.res}>
            <h3>Estimated Budget</h3>
            <div className={styles.resdiv}>
              Rs. {apiResponse.estimated_price}
            </div>
          </div>
        </div>
      ) : currentStep < totalSteps - 1 ? (
        <button onClick={handleNext} className={styles.nextButton}>
          <BsFillArrowRightSquareFill />
        </button>
      ) : (
        <div className={styles.step1}>
          <h2>Filled every field?</h2>
          {isFormIncomplete && (
            <p className={styles.errorMessage}>
              * Please fill all the fields !
            </p>
          )}
          <button onClick={handleSubmit} className={styles.submitButton}>
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default FormPage;
