import React, { useState, useRef } from 'react';
import ProcessingInformation from './ProcessingInformation'; // Import the ProcessingInformation component
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import axios from 'axios';

function Form() {
  const alienRegistrationInputRefs = useRef([]);
  const [countryOfBirth, setCountryOfBirth] = useState('');
  const [provinceOfBirth, setProvinceOfBirth] = useState('');
  const [countryOfCitizenship, setCountryOfCitizenship] = useState('');


  const [alienRegistrationNumber, setAlienRegistrationNumber] = useState(['', '', '', '', '', '', '', '', '']);

  const handleAlienRegistrationChange = (e, index) => {
    const newValue = e.target.value;
     const newRegistrationNumber = [...alienRegistrationNumber];
      newRegistrationNumber[index] = newValue;
      setAlienRegistrationNumber(newRegistrationNumber);

      // Automatically focus on the next input field if not the last one
      if (index < alienRegistrationInputRefs.current.length - 1 && newValue.length === 1) {
        alienRegistrationInputRefs.current[index + 1].focus();
      }
  };



  const handleNext = async () => {
  try {
     if (
      formattedAlienRegistrationNumber.length === 0 ||
      countryOfBirth.trim() === '' ||
      countryOfCitizenship.trim() === ''
    ) {
      console.error('Please fill in all required fields.');
      return; // Don't proceed with the request if any required field is empty
    }
    const formattedAlienRegistrationNumber = alienRegistrationNumber.join('');
    console.log(formattedAlienRegistrationNumber);
    console.log(countryOfBirth);
    console.log(provinceOfBirth);
    console.log(countryOfCitizenship);

    const formData = {
      anum: formattedAlienRegistrationNumber,
      country: countryOfBirth,
      province: provinceOfBirth,
      nationality: countryOfCitizenship,
    };
    // Make the POST request to your backend API endpoint
    const response = await axios.post('http://localhost:3001/api/beneficiary_info', formData);

    // Check if the request was successful
    if (response.status === 200) {
      // Handle success, e.g., show a success message or redirect to a confirmation page
      console.log('Form data saved successfully:', response.data);
    } else {
      // Handle other status codes or errors
      console.error('Error:', response.data);
    }
  } catch (error) {
    // Handle network errors or exceptions
    console.error('An error occurred:', error);
  }
};


   return (
    <div>
      <h2>Immigration Form</h2>
      <form>
        {/* Alien Registration Number */}
        <div>
          <label htmlFor="alienRegistrationNumber">Alien Registration Number:</label>
          <div className="alien-registration-number">
            <span style={{ fontWeight: 'bold', marginRight: '5px' }}>A-</span>
            {alienRegistrationNumber.map((section, index) => (
              <input
                type="text"
                key={index}
                value={section}
                onChange={(e) => handleAlienRegistrationChange(e, index)}
                maxLength="1"
                pattern="\d"
                required={index === 0} // Require the first section
                style={{
                  width: '20px', // Set the width for each digit input
                  marginRight: '5px', // Add some spacing between digits
                  textAlign: 'center', // Center-align the digit
                }}
                ref={(el) => (alienRegistrationInputRefs.current[index] = el)}
              />
            ))}
          </div>
        </div>

        {/* Country of Birth */}
        <div>
          <label htmlFor="countryOfBirth">Country of Birth:</label>
          <input
              type="text"
              id="countryOfBirth"
              name="countryOfBirth"
              value={countryOfBirth} // This sets the initial value from state
              onChange={(e) => setCountryOfBirth(e.target.value)} // Update the state when the field value changes
            />
        </div>

        {/* Province of Birth */}
        <div>
          <label htmlFor="provinceOfBirth">Province of Birth:</label>
          <input
            type="text"
            id="provinceOfBirth"
            name="provinceOfBirth"
            value={provinceOfBirth} // This sets the initial value from state
            onChange={(e) => setProvinceOfBirth(e.target.value)} // Update the state when the field value changes
                     />
        </div>

        {/* Country of Citizenship or Nationality */}
        <div>
          <label htmlFor="countryOfCitizenship">Country of Citizenship or Nationality:</label>
          <input
            type="text"
            id="countryOfCitizenship"
            name="countryOfCitizenship"
            value={countryOfCitizenship} // This sets the initial value from state
            onChange={(e) => setCountryOfCitizenship(e.target.value)} // Update the state when the field value changes
                      />
        </div>

        <button onClick={handleNext}>
          <Link to="/processing">Next</Link>
      </button>  
      </form>
    </div>
  );
}

export default Form;
