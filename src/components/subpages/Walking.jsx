import React from 'react'
import { Link } from 'react-router-dom';
import RightImg from '../Cards/RightImg';
import walking from '../../assets/Walking2.svg'

function Walking() {
  return (
    <div>
    <RightImg img={walking} title="Walking" content=" We provide regular and on-demand dog walks, tailored to the pet's needs. 
So stay free from the stress to ensure proper walk for your pet dog." linked="/walking" btnText="Book Now"/>
  </div>
  )
}

export default Walking