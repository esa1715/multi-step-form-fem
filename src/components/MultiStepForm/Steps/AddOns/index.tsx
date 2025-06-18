import React from "react";
import './AddOns.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import StepButton from "../../StepButton";


type AddOnsProps = {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

const AddOns: React.FC<AddOnsProps> = ({setCurrentStep}) => {

    return(
    <form className="personal-info">
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
        <div className="progress-status">
          <FontAwesomeIcon icon={faGear} spin style={{color: " #9699ab",}} />
          <p>Working in progress...</p>
          <FontAwesomeIcon icon={faGear} spin style={{color: " #9699ab",}} />
        </div>


        
        <div className="step-btns">
          <StepButton variant="back" onClick={() => setCurrentStep((prev) => prev - 1)}/>
          <StepButton variant="next" type="submit" />
        </div>  
    </form>
    )
}

export default AddOns;