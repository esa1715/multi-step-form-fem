import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';

type SummaryProps = {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

const Summary: React.FC<SummaryProps> = () => {

    return(
    <form className="personal-info">
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>
        
        <div className="progress-status">
          <FontAwesomeIcon icon={faGear} spin style={{color: " #9699ab",}} />
          <p>Working in progress...</p>
          <FontAwesomeIcon icon={faGear} spin style={{color: " #9699ab",}} />
        </div>
        
    </form>
    )
}

export default Summary;