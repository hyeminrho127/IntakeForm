import React, { useState, useRef } from 'react';

function ProcessingInformation() {
  const arrivalDepartureInputRefs = useRef([]);
  const [arrivalDepartureRecordNumber, setArrivalDepartureRecordNumber] = useState(['', '', '', '', '', '', '', '', '', '', '']);
  const handleArrivalDepartureChange = (e, index) => {
      const newValue = e.target.value;

      // Validate the input to allow only digits from 0 to 9
      if (/^[0-9]$/.test(newValue)) {
        const newDigit = [...arrivalDepartureRecordNumber];
        newDigit[index] = newValue;
        setArrivalDepartureRecordNumber(newDigit);

        // Automatically focus on the next input field if not the last one
        if (index < arrivalDepartureInputRefs.current.length - 1 && newValue.length === 1) {
          arrivalDepartureInputRefs.current[index + 1].focus();
        }
      }
    };

  return (
    <div>
      {/* Add the content of the ProcessingInformation component */}
      <h2>Processing Information</h2>
 <div>
          <strong>5. If the beneficiary is in the United States, complete the following:</strong>
        </div>

        {/* Date of Last Arrival */}
        <div>
          <label htmlFor="dateOfLastArrival">Date of Last Arrival (mm/dd/yyyy):</label>
          <input
            type="text"
            id="dateOfLastArrival"
            name="dateOfLastArrival"
            // Add value and onChange as needed for other fields
          />
        </div>

        {/* Arrival-Departure Record Number */}
        <div>
          <label htmlFor="arrivalDepartureRecordNumber">I-94 Arrival-Departure Record Number (11 digits):</label>
          <div className="arrival-departure-record-number">
            {arrivalDepartureRecordNumber.map((section, index) => (
              <input
                type="text"
                key={index}
                value={section}
                onChange={(e) => handleArrivalDepartureChange(e, index)}
                maxLength="1"
                pattern="\d"
                required={index === 0} // Require the first section
                style={{
                  width: '20px', // Set the width for each digit input
                  marginRight: '5px', // Add some spacing between digits
                  textAlign: 'center', // Center-align the digit
                }}
                ref={(el) => (arrivalDepartureInputRefs.current[index] = el)}
              />
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="passportNumber">Passport or Travel Document Number:</label>
          <input
            type="text"
            id="passportNumber"
            name="passportNumber"
            // Add value and onChange as needed for other fields
          />
        </div>

        <div>
          <label htmlFor="datePassportIssued">Date Passport or Travel Document Issued (mm/dd/yyyy):</label>
          <input
            type="text"
            id="datePassportIssued"
            name="datePassportIssued"
            // Add value and onChange as needed for other fields
          />
        </div>

        <div>
          <label htmlFor="datePassportExpires">Date Passport or Travel Document Expires (mm/dd/yyyy):</label>
          <input
            type="text"
            id="datePassportExpires"
            name="datePassportExpires"
            // Add value and onChange as needed for other fields
          />
        </div>

        <div>
          <label htmlFor="passportOfIssuance">Passport or Travel Document Country of Issuance:</label>
          <input
            type="text"
            id="passportOfIssuance"
            name="passportOfIssuance"
            // Add value and onChange as needed for other fields
          />
        </div>

        <div>
          <label htmlFor="currentNonimmigrantStatus">Current Nonimmigrant Status:</label>
          <input
            type="text"
            id="currentNonimmigrantStatus"
            name="currentNonimmigrantStatus"
            // Add value and onChange as needed for other fields
          />
        </div>

        <div>
          <label htmlFor="dateStatusExpires">Date Status Expires or D/S (mm/dd/yyyy):</label>
          <input
            type="text"
            id="dateStatusExpires"
            name="dateStatusExpires"
            // Add value and onChange as needed for other fields
          />
        </div>

        <div>
          <label htmlFor="sevis">Student and Exchange Visitor Information System (SEVIS) Number (if any):</label>
          <input
            type="text"
            id="sevis"
            name="sevis"
            // Add value and onChange as needed for other fields
          />
        </div>

        <div>
          <label htmlFor="ead">Employment Authorization Document (EAD)Number (if any):</label>
          <input
            type="text"
            id="ead"
            name="ead"
            // Add value and onChange as needed for other fields
          />
        </div>

        <div>
          <strong>6. Current Residential U.S. Address</strong> (if applicable) (do not list a P.O. Box)
        </div>

        <div>
          <label htmlFor="streetNumber">Street Number and Name:</label>
          <input
            type="text"
            id="streetNumber"
            name="streetNumber"
            // Add value and onChange as needed for other fields
          />
        </div>

          <div>
            <label>
              Apt.<input type="checkbox" name="aptCheckbox" />
            </label>
          </div>
          <div>
            <label>
              Ste.<input type="checkbox" name="steCheckbox" />
            </label>
          </div>
          <div>
            <label>
              Flr.<input type="checkbox" name="flrCheckbox" />
            </label>
          </div>

          <div>
          <label htmlFor="number">Number:</label>
          <input
            type="text"
            id="number"
            name="number"
            // Add value and onChange as needed for other fields
          />
          </div>

          <div>
          <label htmlFor="cityOrTown">City or Town:</label>
          <input
            type="text"
            id="cityOrTown"
            name="cityOrTown"
            // Add value and onChange as needed for other fields
          />
          </div>

           <div>
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            // Add value and onChange as needed for other fields
          />
          </div>

          <div>
          <label htmlFor="zipCode">ZIP Code:</label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            // Add value and onChange as needed for other fields
          />
          </div>    </div>
  );
}

export default ProcessingInformation;
