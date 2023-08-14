import React, { useState } from "react";
import styles from '@/styles/FormPage.module.css'

const FormPage = () => {
  const totalSteps = 3;
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    // Other form fields
  });

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async () => {
    // Send formData to the API using fetch or Axios
    // const response = await fetch(
    //   "https://phonesuggest.onrender.com/predict_score",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(formData),
    //   }
    // );

    // Handle the response
  };

  return (
    <div className={styles.container}>
      {currentStep === 0 && (
        <div>
          <h1>Looking for Smartphone?</h1>
          <h2>Get Our Suggestion!</h2>
        </div>
      )}

      {currentStep === 1 && <div>{
        <div>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        }
        </div>}

      {currentStep === 2 && <div>{/* Input fields for step 2 */}</div>}

      {currentStep > 0 && <button onClick={handlePrevious}>Previous</button>}
      {currentStep < totalSteps - 1 ? (
        <button onClick={handleNext}>Next</button>
      ) : (
        <button onClick={handleSubmit}>Submit</button>
      )}
    </div>
  );
};

export default FormPage;
