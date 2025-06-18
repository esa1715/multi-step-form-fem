import React from "react";
import './AddOns.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';


type AddOnsProps = {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

const AddOns: React.FC<AddOnsProps> = () => {

    return(
    <form className="personal-info">
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
        <div className="progress-status">
          <FontAwesomeIcon icon={faGear} spin style={{color: " #9699ab",}} />
          <p>Working in progress...</p>
          <FontAwesomeIcon icon={faGear} spin style={{color: " #9699ab",}} />
        </div>
        
    </form>
    )
}

export default AddOns;