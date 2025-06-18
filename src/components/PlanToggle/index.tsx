import React from "react";
import './PlanToggle.css';

interface PlanToggleProps {
  isMonthly: boolean;
  onChange: (value: boolean) => void;
}

const PlanToggle: React.FC<PlanToggleProps> = ({ isMonthly, onChange }) => {
  const handleToggle = () => {
    onChange(!isMonthly);
  };

  return (
    <div className="plan-toggle-container">
      <span className={isMonthly ? 'plan-type-active' : 'plan-type'}>Monthly</span>
      <label className="switch">
        <input type="checkbox" checked={!isMonthly} onChange={handleToggle} />
        <span className="slider" />
      </label>
      
      <span className={!isMonthly ? 'plan-type-active' : 'plan-type'}>Yearly</span>
    </div>
  );
};

export default PlanToggle;