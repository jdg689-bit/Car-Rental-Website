import './Gallery.css'
import { useState } from 'react';

import suzukiSwift from '../../assets/vehicle-library/2021-suzuki-swift-gl-navigator-red_featured.avif';
import corollaHatch from '../../assets/vehicle-library/2022-toyota-corolla-hatch-pacific-black_featured.avif';
import corollaSedan from '../../assets/vehicle-library/2022-toyota-corolla-sedan-pacific-black_featured.avif';
import toyotaCamry from '../../assets/vehicle-library/2022-toyota-camry-accent-pacific-red_featured.avif';
import toyotaCHR from '../../assets/vehicle-library/2022-toyota-c-hr-nightshade-edition-suv-black_featured.avif';
import toyotaKluger from '../../assets/vehicle-library/2022-toyota-kluger-gx-pacific-black_featured.avif';
import kiaCarnival from '../../assets/vehicle-library/2022-kia-carnival-s-pacific-red_featured.avif';
import bmwX5 from '../../assets/vehicle-library/2022-bmw-x5-xdrive40i-xline-design-4wd-suv-black_featured.avif';

const DETAILS = {
  doors: '5 Door',
  seats: '5 seats',
  transmission: 'Automatic',
  largeBagStorage: '1 Large Bag',
  smallBagStorage: '1 Small Bag',
  description: `5 Door Hatch, 5 Speed Automatic, Smartphone Connectivity, Reverse
  Camera/Sensors, Central Locking Power Windows`
}

const CAR_DATA = [{
  id: 'COMPACT',
  info: 'Suzuki Swift or similar',
  img: {
      src: suzukiSwift,
      alt: 'suzuki-swift'
  }
}, {
  id: 'INTERMEDIATE',
  info: 'Toyota Corolla Hatch or similar',
  img: {
      src: corollaHatch,
      alt: 'toyota-corolla-hatch'
  }
}, {
  id: 'STANDARD',
  info: 'Toyota Corolla Sedan or similar',
  img: {
      src: corollaSedan,
      alt: 'toyota-corolla-sedan'
  }
}, {
  id: 'FULL-SIZE',
  info: 'Toyota Camry or similar',
  img: {
      src: toyotaCamry,
      alt: 'toyota-camry'
  }
}, {
  id: 'COMPACT SUV',
  info: 'Toyota C-HR or similar',
  img: {
      src: toyotaCHR,
      alt: 'toyota-c-hr'
  },
}, {
  id: 'FULL-SIZE SUV',
  info: 'Toyota Kluger or similar',
  img: {
      src: toyotaKluger,
      alt: 'toyota-kluger'
  }
}, {
  id: 'FULL-SIZE VAN',
  info: 'Kia Carnival or similar',
  img: {
      src: kiaCarnival,
      alt: 'kia-carnival'
  }
}, {
  id: 'SIGNATURE SERIES',
  info: 'BMW X5 or similar',
  img: {
      src: bmwX5,
      alt: 'bmw-x5'
  }
}];




function DetailsPanel({ vehicleDetails }) {
return (
  <div className='details-gray-bg'>
    <div className='spec-icons'>
      <span className='spec door-feat'>
        <span className='icon door-icon'></span>
        {vehicleDetails.doors}
      </span>
      <span className='spec seats-feat'>
        <span className='icon seats-icon'></span>
        {vehicleDetails.seats}
      </span>
      <span className='spec trans-feat'>
        <span className='icon trans-icon'></span>
        {vehicleDetails.transmission}
        </span>
      <span className='spec large-feat'>
        <span className='icon large-bag-icon'></span>
        {vehicleDetails.largeBagStorage}
        </span>
      <span className='spec small-feat'>
        <span className='icon small-bag-icon'></span>
        {vehicleDetails.smallBagStorage}
        </span>
    </div>
    <div className='description'>
      <p>{vehicleDetails.description}</p>
    </div>
  </div>
)
}


function Vehicle({ vehicleInfo }) {
const [detailsHidden, setDetailsHidden] = useState(true);

  return (
      <div className='vehicle-container'>
          <div className='vehicle-info-wrapper'>
            <div className="vehicle-info">
                <h2 className='vehicle-type' style={{margin: '0px'}}>{vehicleInfo.id}</h2>
                <h4 style={{margin: '0px'}}>{vehicleInfo.info}</h4>
            </div>
            <a className='vehicle-details' onClick={() => setDetailsHidden(!detailsHidden)}>
              See all details
              <span className={detailsHidden ? 'red-down-arrow' : 'red-cross'}></span>
            </a>
          </div>
          
          <div className='content-container'>
            {/* Sliding details panel within content area */}
            <div className={`sliding-panel-wrapper ${!detailsHidden ? 'details-visible' : ''}`}>
              <DetailsPanel vehicleDetails={DETAILS}/>
              <img className="vehicle-img"
                  src={vehicleInfo.img.src} 
                  alt={vehicleInfo.img.alt}
                  height={200} 
              />
            </div>
          </div>
          
      </div>
  );
}


export default function VehicleGallery() {
  return (
    <section>
      <div className='page-header' id='gallery-header'>
        <h1 className='page-title'>Available Models</h1>
      </div>
      {CAR_DATA.map((car) => <Vehicle key={car.id} vehicleInfo={car} />)}
    </section>
  )
}
