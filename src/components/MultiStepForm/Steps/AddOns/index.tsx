import React from "react";

type AddOnsProps = {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
};

const AddOns: React.FC<AddOnsProps> = () => {

    return(
    <form className="personal-info">
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
        
        
    </form>
    )
}

export default AddOns;