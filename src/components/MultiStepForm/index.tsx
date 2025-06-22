import { useState } from "react"
import StepNav from "./StepNav"
import YourInfoStep from "./Steps/YourInfo";
import SelectPlanStep from "./Steps/SelectPlan";
import AddOnsStep from "./Steps/AddOns";
import SummaryStep from "./Steps/Summary";
import './MultiStepForm.css'

type BillingType = 'monthly' | 'yearly';

interface FormData {
  name: string;
  email: string;
  phone: string;
  level: string;
  billingType: BillingType;
  price: number;
  addons: { title: string; priceText: string }[];
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
        addons: [],
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
                    billingType={formData.billingType}
                    updateFormData={(data) => setFormData(prev => ({ ...prev, ...data }))}
                    setCurrentStep={setCurrentStep}
                    selectedAddOns={formData.addons.map(addon => addon.title)}
                />
                );

            case 4:
                return (
                <SummaryStep 
                    currentStep={currentStep} 
                    setCurrentStep={setCurrentStep}
                    formData={formData}
                />
                );
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