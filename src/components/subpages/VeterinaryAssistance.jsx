import React from 'react'
import { Link } from 'react-router-dom';
import LeftImg from '../Cards/LeftImg';
import vaterinaryAssistance from '../../assets/VeterinaryAssistance2.svg'

function VeterinaryAssistance() {
  return (
    <div  className='relative top-16'>
      <LeftImg img={vaterinaryAssistance} title="vaterinary Assistance" content="In a veterinary assistant service for pets, we offer support with basic medical procedures, administer medications, assist in examinations, and provide post-operative care. Ensure a calm and comforting environment, maintain records, and facilitate communication between veterinarians and pet owners. " linked="/booking" btnText="Book Now"/>
    </div>
  )
}

export default VeterinaryAssistance