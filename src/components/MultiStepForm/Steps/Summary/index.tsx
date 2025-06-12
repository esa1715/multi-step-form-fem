import React from "react";

type SummaryProps = {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

const Summary: React.FC<SummaryProps> = () => {

    return(
    <form className="personal-info">
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>
        
        
    </form>
    )
}

export default Summary;