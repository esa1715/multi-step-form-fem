import React from "react";

type SelectPlanProps = {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

const SelectPlanStep: React.FC<SelectPlanProps> = () => {

    return(
    <form className="personal-info">
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly biling.</p>
        
        
    </form>
    )
}

export default SelectPlanStep;