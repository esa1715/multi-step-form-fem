import React from "react";
import { useForm } from "react-hook-form";
import StepButton from "../../StepButton";
import './YourInfo.css';

interface YourInfoProps {
  name: string;
  email: string;
  phone: string;
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

type UserData = {
  name: string;
  email: string;
  phone: string;
};

const PersonalInfoStep: React.FC<YourInfoProps> = (props) => {
  
  const { setCurrentStep } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({mode: 
    'onSubmit'
  });
  
  const onSubmit = (data: UserData) => {
    console.log('data', data);
    setCurrentStep((prev: number) => prev + 1);
  }
  
  return(
    <form className="personal-info" onSubmit={handleSubmit(onSubmit)}>
      <div className="your-info-content">
        
        <div className="step-title">
          <h2>Personal info</h2>
          <p>Please provide your name, email address, and phone number.</p>
        </div>
      <div className="user-info">
        <div className="user-input">
          <div className="user-input-info">
            <label htmlFor="name">Name</label>
            {errors.name && <span className="input-error-msg">This field is required</span>}
          </div>
          <input 
            id="name"
            type="text"
            placeholder="e.g. Stephen King"
            className={errors.name ? "input-error" : "input"}
            {...register('name', { required: true})}
          />
        </div>

        <div className="user-input">
          <div className="user-input-info">
            <label htmlFor="email">Email Address</label>
            {errors.email && <span className="input-error-msg">This field is required</span>}
          </div>
          <input 
            id="email"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            className={errors.email ? "input-error" : "input"}
            {...register('email', { required: true})}
          />
        </div>

        <div className="user-input">
          <div className="user-input-info">
            <label htmlFor="phone">Phone Number</label>
            {errors.phone && <span className="input-error-msg">This field is required</span>}
          </div>
          <input 
            id="phone"
            type="tel"
            placeholder="e.g. +1 234 567 890"
            className={errors.phone ? "input-error" : "input"}
            {...register('phone', { required: true})}
          />
        </div>
        </div>
      </div>
      <div className="your-info-btns">
        <StepButton variant="next" type="submit" />
      </div>
    </form>
  )
}

export default PersonalInfoStep;