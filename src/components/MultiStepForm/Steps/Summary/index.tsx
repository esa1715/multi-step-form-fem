import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import StepButton from "../../StepButton";
import './Summary.css'

type SummaryProps = {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

const SummaryStep: React.FC<SummaryProps> = ({setCurrentStep}) => {

    return(
    <form className="personal-info">
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>
        
        <div className="progress-status">
          <FontAwesomeIcon icon={faGear} spin style={{color: " #9699ab",}} />
          <p>Working in progress...</p>
          <FontAwesomeIcon icon={faGear} spin style={{color: " #9699ab",}} />
        </div>
        

        <div className="step-btns">
          <StepButton variant="back" onClick={() => setCurrentStep((prev) => prev - 1)}/>
          <StepButton variant="confirm" type="submit" />
        </div>  
    </form>
    )
}

export default SummaryStep;