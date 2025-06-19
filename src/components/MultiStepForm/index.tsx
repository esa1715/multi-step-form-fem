import { useState } from "react"
import StepNav from "./StepNav"
import SelectPlan from "./Steps/SelectPlan";
import AddOns from "./Steps/AddOns";
import './MultiStepForm.css'
import Summary from "./Steps/Summary";
import YourInfoStep from "./Steps/YourInfo";

const MultiStepForm: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const handleUpdateFormData = (newData: { name: string; email: string; phone: string }) => {
        setFormData(prev => ({ ...prev, ...newData }));
    };


    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return (
                <YourInfoStep
                    setCurrentStep={setCurrentStep}
                    name={formData.name}
                    email={formData.email}
                    phone={formData.phone}
                    updateFormData={handleUpdateFormData}
                 />
                );

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
            </div>
        </main>
    );
}

export default MultiStepForm