import React from 'react'
import { Link } from 'react-router-dom';
import RightImg from '../Cards/RightImg';
import petTraining from '../../assets/PetTraining2.svg'

function PetTraining() {
  return (
    <RightImg img={petTraining} title="Pet Training" content=" Provide basic obedience training, behavior modification, and socialization for pets. Customize programs, use positive reinforcement, address behavior issues, and educate owners for a well-behaved pet." linked="/booking" btnText="Book Now"/>
  )
}

export default PetTraining