import './Help.css'
import phoneIcon from '../../assets/contact-icons/phone-icon.png'
import mailIcon from '../../assets/contact-icons/mail-icon.png'
import addressIcon from '../../assets/contact-icons/address-icon.png'

export default function App() {
    return (
        <>
            <header className="page-header" id='contact-header'>
                <h1 className='page-title'>Contact Us</h1>
            </header>
            <section style={{display: 'flex'}} id='company-contact-info'>
                <div style={{width: '50%'}} id='company-info'>
                    <h2>Can't find what you're looking for?</h2>
                    <p>We're here to help! You can contact us via email, or
                        speak directly to one of friendly service staff by calling 
                        the number below. Alternatively leave us your feedback  
                        using the form and a customer representative will be in
                        touch with you shortly.
                    </p>
                    <ul style={{listStyle: 'none'}}>
                        <li>
                            <img className='contact-icon' src={phoneIcon} alt="phone-icon" />
                            <p>(123) 4567-8923</p>
                        </li>
                        <li>
                            <img className='contact-icon' src={mailIcon} alt="mail-icon" />
                            <p>contact@fastcarrental.com.au</p>
                        </li>
                        <li>
                            <img className='contact-icon' src={addressIcon} alt="location-icon" />
                            <p>123 Main St, Sydney NSW 2000</p>
                        </li>
                    </ul>
                </div>
                <form style={{width: '50%'}} className='contact-form'>
                    <label htmlFor="full-name">Full Name</label>
                    <input type="text" id='full-name' />
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' />
                    <label htmlFor="contact-number">Phone Number</label>
                    <input type="tel" id='contact-number' />
                    <label htmlFor="user-message">Tell us about it</label>
                    <textarea id='user-message'></textarea>
                    <button type='submit'>Send Message</button>
                </form>
            </section>
        </>
    )
}