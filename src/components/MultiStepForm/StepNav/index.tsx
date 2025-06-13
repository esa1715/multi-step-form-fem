import './StepNav.css';
import React, { useEffect, useState } from 'react';
import DesktopBg from './DesktopBg';
import MobileBg from './MobileBg';

interface StepNavProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const StepNav: React.FC<StepNavProps> = ({currentStep, setCurrentStep}) => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 885);
  
  const steps = [
    { number: 1, title: 'YOUR INFO' },
    { number: 2, title: 'SELECT PLAN' },
    { number: 3, title: 'ADD-ONS' },
    { number: 4, title: 'SUMMARY' },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 885);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="step-nav">
        {isMobile ? (
            <MobileBg className="bg-mobile" />
        ) : (
            <DesktopBg className="bg-desktop" />
        )}

      <ul className="progress-steps">
        {steps.map((step) => (
          <li key={step.number} className="step">
            <button
              onClick={() => setCurrentStep(step.number)}
              className={currentStep === step.number ? 'active' : 'step-nav-btn'}
            >
              {step.number}
            </button>
          <div className="step-info">
            <h2>STEP {step.number}</h2>
            <h3>{step.title}</h3>
          </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default StepNav;