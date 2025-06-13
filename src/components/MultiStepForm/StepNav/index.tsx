import './StepNav.css';
import React, { useEffect, useState } from 'react';
import DesktopBg from './DesktopBg';
import MobileBg from './MobileBg';

interface StepNavProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const StepNav: React.FC<StepNavProps> = ({currentStep, setCurrentStep}) => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
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
        <li className="step">
          <button onClick={() => setCurrentStep(1)} className={currentStep === 1 ? 'active' : 'step-nav-btn'} >1</button>
          <div className="step-info">
            <h2>STEP 1</h2>
            <h3>YOUR INFO</h3>
          </div>
        </li>
        <li className="step">
          <button onClick={() => setCurrentStep(2)} className={currentStep === 2 ? 'active' : 'step-nav-btn'} >2</button>
          <div className="step-info">
            <h2>STEP 2</h2>
            <h3>SELECT PLAN</h3>
          </div>
        </li>
        <li className="step">
          <button onClick={() => setCurrentStep(3)} className={currentStep === 3 ? 'active' : 'step-nav-btn'} >3</button>
          <div className="step-info">
            <h2>STEP 3</h2>
            <h3>ADD-ONS</h3>
          </div>
        </li>
        <li className="step">
          <button onClick={() => setCurrentStep(4)} className={currentStep === 4 ? 'active' : 'step-nav-btn'} >4</button>
          <div className="step-info">
            <h2>STEP 4</h2>
            <h3>SUMMARY</h3>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default StepNav;
