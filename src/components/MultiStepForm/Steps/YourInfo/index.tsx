import { useState } from 'react';
import './YourInfo.css'

interface User {
  name: string;
  email: string;
  phone: string;
}

const PersonalInfoStep: React.FC<User> = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    
    return(
    <form className="personal-info">
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number.</p>
        
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={name} placeholder="e.g. Stephen King" onChange={e => setName(e.target.value)}/>

        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" value={email} placeholder="e.g. stephenking@lorem.com" onChange={e => setEmail(e.target.value)}/>

        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" value={phone} placeholder="e.g. +1 234 567 890" onChange={e => setPhone(e.target.value)}/>

    </form>
    )
}

export default PersonalInfoStep;