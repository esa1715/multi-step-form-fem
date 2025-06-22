import React from "react";
import StepButton from "../../StepButton";
import './Summary.css'

interface SummaryProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  formData: {
    name: string;
    email: string;
    phone: string;
    level: string;
    billingType: 'monthly' | 'yearly';
    price: number;
    addons: { title: string; priceText: string }[];
  };
};



const SummaryStep: React.FC<SummaryProps> = ({setCurrentStep, formData}) => {
  const addonTotal = formData.addons.reduce((sum, addon) => {
    const match = addon.priceText.match(/\$([\d.]+)/);
    const price = match ? parseFloat(match[1]) : 0;
    return sum + price;
  }, 0);

  const total = formData.price + addonTotal;


  return(
    <form className="summary">
      <div className="step-title">
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming.</p>
      </div>
      <div className="summary-content">     
      <div className="summary-itens">
        <div className="summary-level">
          <div className="summary-level-info">
            <p>{formData.level} ({formData.billingType === 'monthly' ? 'Monthly' : 'Yearly'})</p>
            <span className="change" onClick={() => setCurrentStep(2)}>Change</span>
          </div>
          <div className="summary-level-cost">
            <span>{`$${formData.price}/${formData.billingType === 'monthly' ? 'mo' : 'yr'}`}</span>
          </div>
        </div>

        <hr className="summary-line"/>

        {formData.addons.map((addon, index) => (
          <div className="summary-addons" key={index}>
            <div className="summary-addons-info">
              <span>{addon.title}</span>
            </div>
            <div className="summary-addons-cost">
              <span>{addon.priceText}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="summary-value">
        <span className="summary-value-text">Total (per {formData.billingType === 'monthly' ? 'month' : 'year'})</span>
        <span className="total">+${total}{formData.billingType === 'monthly' ? '/mo' : '/yr'}</span>
      </div>
      </div>

        <div className="step-btns">
          <StepButton variant="back" onClick={() => setCurrentStep((prev) => prev - 1)}/>
          <StepButton variant="confirm" type="submit" onClick={() => setCurrentStep((prev) => prev + 1)}/>
        </div>  
    </form>
    )
}

export default SummaryStep;