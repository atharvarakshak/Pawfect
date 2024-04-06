import React from 'react'
import { Link } from 'react-router-dom';
import LeftImg from '../Cards/LeftImg';
import breedingAssistance from '../../assets/BreedingAssistance2.svg'

function BreedingAssistance() {
  return (
    
    <div className='relative top-16' >
      <LeftImg img={breedingAssistance} title="Breeding Assistance" content="In a breeding assistant service for pets, you can offer support for mating, pregnancy monitoring, birthing, and postnatal care. Provide guidance on nutrition, health, and hygiene, and assist with finding suitable mates and coordinating veterinary care" linked="/booking" btnText="Book Now" />
    </div>
  )
}

export default BreedingAssistance