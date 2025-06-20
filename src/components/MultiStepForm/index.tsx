import { useState } from "react"
import StepNav from "./StepNav"
import YourInfoStep from "./Steps/YourInfo";
import SelectPlanStep from "./Steps/SelectPlan";
import AddOnsStep from "./Steps/AddOns";
import Summary from "./Steps/Summary";
import './MultiStepForm.css'

type BillingType = 'monthly' | 'yearly';

interface FormData {
  name: string;
  email: string;
  phone: string;
  level: string;
  billingType: BillingType;
  price: number;
}


const MultiStepForm: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        level: '',
        billingType: 'monthly',
        price: 0,
    });

    const handleUpdateFormData = (newData: { name: string; email: string; phone: string }) => {
        setFormData(prev => ({ ...prev, ...newData }));
    };

    const updateFormData = (newData: {
        level: string;
        billingType: BillingType;
        price: number;
    }) => {
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
                return (
                <SelectPlanStep
                    setCurrentStep={setCurrentStep}
                    updateFormData={updateFormData}
                    isMonthly={formData.billingType === 'monthly'}
                    level={formData.level}
                />
                );

            case 3:
                return (
                <AddOnsStep
                    currentStep={currentStep}
                    setCurrentStep={setCurrentStep}
                    billingType={formData.billingType}
                />
                );

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

export default MultiStepForm;