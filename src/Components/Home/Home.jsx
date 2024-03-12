const ASSETS_PATH = 'C:/Users/Jacob de Graaf/Documents/javascript/REACT/car-rental/src/assets'
import { useState } from 'react'

import './Home.css';
import redSuzuki from '../../assets/vehicle-library/2021-suzuki-swift-gl-navigator-red_featured.avif';
import * as images from '../../assets/banner-ads'

function TitleCard() {
    return (
        <div id='home-card'>
            <div className='text-container'>
                <h1>Big cars,
                    <br></br>
                    small prices
                </h1>
                <p> Choose from the largest rental fleet in Australia. 
                    With great prices and flexible pick-up and drop-off 
                    options, you can't beat Fast Car Rental.
                </p>
            </div>
            <div className='img-container'>
                <img src={redSuzuki} alt="red-suzuki" />
            </div>
        </div>
    )
}

function BookingForm() {

    // Set default drop-off value to date given by pick-up value
    const [pickupDate, setPickupDate] = useState('');
    const [dropoffDate, setDropoffDate] = useState('');

    const handlePickupDateChange = (event) => {
        const selectedDate = event.target.value;
        setPickupDate(selectedDate);
        if (selectedDate > dropoffDate) {
            setDropoffDate(selectedDate);
        }
    }

    const handleDropoffDateChange = (event) => {
        const newDropDate = event.target.value;
        setDropoffDate(newDropDate);
    }

    return (
        <div className='booking-container'>
            <h2 className='title-text'>Book a car</h2>
            <h4 className='fields-required-text'>Fields marked with * are required</h4>
            <form id='booking-details'>
                <div className='form-field'>
                    <label for='car-type'>Vehicle type*</label>
                    <select id='car-type' required>
                        <option value='' disabled selected>Select vehicle type</option>
                        <option>Compact (Suzuki Swift or similar)</option>
                        <option>Intermediate (Toyota Corolla Hatch or similar)</option>
                        <option>Standard (Toyotoa Corolla Sedan or similar)</option>
                        <option>Full-size (Toyota Camry or similar)</option>
                        <option>Compact SUV (Toyota C-HR or similar)</option>
                        <option>Full-size SUV (Toyota Kluger or similar)</option>
                        <option>Full-size van (Kia Carnival or similar)</option>
                        <option>Signature Series (BMW X5 or similar)</option>
                    </select>
                </div>
                <div className='form-field'>
                    <label for='pick-up-loc'>Pick-up location*</label>
                    <select id='pick-up-loc'>
                        <option disabled selected>Select pick-up location</option>
                        <option>Sydney</option>
                        <option>Melbourne</option>
                        <option>Brisbane</option>
                        <option>Gold Coast</option>
                        <option>Cairns</option>
                        <option>Perth</option>
                        <option>Adelaide</option>
                        <option>Darwin</option>
                        <option>Hobart</option>
                    </select>
                </div>
                <div className='form-field'>
                    <label for='drop-off-loc'>Drop-off location*</label>
                    <select id='drop-off-loc'>
                        <option disabled selected>Select drop-off location</option>
                        <option>Sydney</option>
                        <option>Melbourne</option>
                        <option>Brisbane</option>
                        <option>Gold Coast</option>
                        <option>Cairns</option>
                        <option>Perth</option>
                        <option>Adelaide</option>
                        <option>Darwin</option>
                        <option>Hobart</option>
                    </select>
                </div>
                <div className='form-field'>
                    <label for='pick-up-date'>Pick-up date*</label>
                    <input 
                        id='pick-up-date' 
                        type="date"
                        value={pickupDate}
                        onChange={handlePickupDateChange} />
                </div>
                <div className='form-field'>
                    <label for='drop-off-date'>Drop-off date*</label>
                    <input 
                        id='drop-off-date' 
                        type='date'
                        value={dropoffDate}
                        onChange={handleDropoffDateChange}
                        ></input>
                </div>
                <div className='form-field'>
                    <button className='form-button'>Find a vehicle</button>
                </div>
            </form>
        </div>
    )
}

function LargeBanner() {
    return (
        <>
            <div className='large-banner-ad-container'>
                <div className='large-banner-text'>
                    <h2>Breakdown? No worries.
                    <br></br>
                    Get peace of mind with free roadside assistance on all rentals.</h2>
                </div>
                <img src={images.roadsideAssistanceBanner} alt="roadside-offer" />
            </div>
        </>
    )
}

function ExploreThumbnails() {
    return (
        <>
            <header id='promo-header'>
                <div className='text-container'>
                    <h1 >Car hire has never been this easy</h1>
                    <p>Discover the Fast Car Rental difference.</p>
                </div>
                <button className='services-button'>EXPLORE OUR SERVICES</button>
            </header>

            <section className='promotions-grid'>
                <div className='promo-container'>
                    <div className='promo-image-container'>
                        <img src={images.offersThumbnail} alt="car-on-map" />
                    </div>
                    <div className='promo-text-container'>
                        <h2>SPECIAL OFFERS</h2>
                        <p>Explore our latest deals and offers.</p>
                        <a className='promo-link'>BOOK NOW</a>
                    </div>
                </div>
                <div className='promo-container'>
                    <div className='promo-image-container'>
                        <img src={images.electricCar} alt="electric-car-charging" />
                    </div>
                    <div className='promo-text-container'>
                        <h2>ELECTRIC</h2>
                        <p>Discover our Electric Vehicle range. Selected locations.</p>
                        <a className='promo-link'>FIND OUT MORE</a>
                    </div>
                </div>
                <div className='promo-container'>
                    <div className='promo-image-container'>
                        <img src={images.prestigeCar} alt="black-porsche" />
                    </div>
                    <div className='promo-text-container'>
                        <h2>PRESTIGE</h2>
                        <p>Ride in style. Super car and luxury car hire.</p>
                        <a className='promo-link'>LEARN MORE</a>
                    </div>
                </div>
                <div className='promo-container'>
                    <div className='promo-image-container'>
                        <img src={images.airportShuttle} alt="airport-arrival"/>
                    </div>
                    <div className='promo-text-container'>
                        <h2>AIRPORT SHUTTLES</h2>
                        <p>Transport to and from your pick-up/drop-off location
                            to the closest major airport.</p>
                        <a className='promo-link'>FIND OUT MORE</a>
                    </div>
                </div>
                <div className='promo-container'>
                    <div className='promo-image-container'>
                        <img src={images.clubMemberDriving} alt="woman-driving-car" />
                    </div>
                    <div className='promo-text-container'>
                        <h2>MEMBERSHIP</h2>
                        <p>Join our premium club for deals and benefits.</p>
                        <a className='promo-link'>SIGN UP NOW</a>
                    </div>
                </div>
                <div className='promo-container'>
                    <div className='promo-image-container'>
                        <img src={images.appDownload} alt="iphone-screenshot" />
                    </div>
                    <div className='promo-text-container'>
                        <h2>GET THE APP</h2>
                        <p>Make and mofidy reservations with the tap of a finger.
                            On iOS and Android.</p>
                        <a className='promo-link'>DOWNLOAD NOW</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default function Home() {
    return (
        <div id='homepage-container'>
            <TitleCard />
            <BookingForm />
            <LargeBanner />
            <ExploreThumbnails />
        </div>
    )
}