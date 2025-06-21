import React from "react";
import { useForm } from "react-hook-form";
import './AddOns.css'
import StepButton from "../../StepButton";

interface AddOnsProps {
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  billingType: 'monthly' | 'yearly';
  updateFormData: (data: { addons: { title: string; priceText: string }[] }) => void;
};

type AddOn = {
  title: string;
  description: string;
  monthly: {
    price: number;
  };
  yearly: {
    price: number;
  }
}

const AddOnsStep: React.FC<AddOnsProps> = ({setCurrentStep, billingType, updateFormData }) => {
  const addOns: AddOn[] = [
    {
      title: 'Online service',
      description: 'Access to multiplayer games',
      monthly: {
        price: 1,
      },
      yearly: {
        price: 10,
      },
    },
    {
      title: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      monthly: {
        price: 2,
      },
      yearly: {
        price: 20,
      },
    },
    {
      title: 'Customizable profile',
      description: 'Custom theme on your profile',
      monthly: {
        price: 2,
      },
      yearly: {
        price: 20,
      },
    },
  ];

  const { register, watch, handleSubmit } = useForm({
    defaultValues: {
      addons: [] as string[]
    }
  });

  const selectedAddOns = watch("addons") as string[];

  const onSubmit = (data: { addons: string[] }) => {
  const selected = addOns
    .filter(addOn => data.addons.includes(addOn.title))
    .map(addOn => {
      const price = billingType === 'monthly' ? addOn.monthly.price : addOn.yearly.price;
      const suffix = billingType === 'monthly' ? '/mo' : '/yr';
      return {
        title: addOn.title,
        priceText: `+${price}${suffix}`
      };
    });

    console.log({ addons: selected });


  updateFormData({ addons: selected });
  setCurrentStep(prev => prev + 1);
};


  return (
    <form className="addons" onSubmit={handleSubmit(onSubmit)}>
      <div className="step-title">
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>
      </div>
      <div className="addons-content">
        {addOns.map((addOn) => {
          const isChecked = selectedAddOns.includes(addOn.title);
          return (
            <div 
              key={addOn.title} 
              className={`addon-item ${isChecked ? 'checked' : ''}`}
            >
              <label htmlFor={addOn.title}>
                <input
                  type="checkbox"
                  id={addOn.title}
                  value={addOn.title}
                  {...register("addons")}
                />
                <div className="addon-info">
                  <h2>{addOn.title}</h2>
                  <p>{addOn.description}</p>
                </div>
              </label>
              <div className="addon-cost">
                <p>+${billingType === 'monthly' ? addOn.monthly.price : addOn.yearly.price}{billingType === 'monthly' ? '/mo' : '/yr'}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="step-btns">
        <StepButton variant="back" onClick={() => setCurrentStep((prev) => prev - 1)} />
        <StepButton variant="next" type="submit" />
      </div>
    </form>
  );
}

export default AddOnsStep;
