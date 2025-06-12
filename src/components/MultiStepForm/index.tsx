import { useState } from "react"
import StepNav from "./StepNav"
import YourInfo from "./Steps/YourInfo";
import SelectPlan from "./Steps/SelectPlan";
import AddOns from "./Steps/AddOns";
import './MultiStepForm.css'
import Summary from "./Steps/Summary";

const MultiStepForm: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1);

    function goBack() {
        setCurrentStep(prev => prev - 1);
    }

    function nextStep() {
        setCurrentStep(prev => prev + 1);
    }

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <YourInfo currentStep={currentStep} setCurrentStep={setCurrentStep} />;
            case 2:
                return <SelectPlan currentStep={currentStep} setCurrentStep={setCurrentStep} />
            case 3:
                return <AddOns currentStep={currentStep} setCurrentStep={setCurrentStep} />
            case 4:
                return <Summary currentStep={currentStep} setCurrentStep={setCurrentStep} />
        }
    }


    return (
        <main>
            <StepNav currentStep={currentStep} setCurrentStep={setCurrentStep}/>
            <div className="step-container">
                {renderStep()}
                <div className="steps-btns">
                {currentStep > 1 && <button className="back-btn" onClick={goBack}>Go back</button>}
                {currentStep < 4 && <button className="next-btn" onClick={nextStep}>Next Step</button>}
                </div>
            </div>
        </main>
    );
}

export default MultiStepForm