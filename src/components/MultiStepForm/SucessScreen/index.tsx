import SuccessIcon from './SucessIcon';
import './SucessScreen.css'

const SucessScreen: React.FC = () => {
    return (
        <div className="sucess-screen">
            <SuccessIcon width={100} height={100} className="sucess-icon" />
            <div className='sucess-text'>
                <h2>Thank you!</h2>
                <p>Thanks for confirming your subscription! We hope you have fun 
                using our platform. If you ever need support, please feel free 
                to email us at support@loremgaming.com.</p>
            </div>
        </div>
    )
}

export default SucessScreen;