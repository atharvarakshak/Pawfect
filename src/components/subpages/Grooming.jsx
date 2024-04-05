import React from 'react'
import { Link } from 'react-router-dom';
import RightImg from '../Cards/RightImg';
import grooming2 from '../../assets/grooming2.svg'

function Grooming() {
  return (
    <div>
      <RightImg img={grooming2} title="Grooming" content=" In pet grooming services, we offer bathing, hair trimming, nail clipping, ear cleaning, and teeth brushing. Ensure a comfortable and stress-free experience for the pets, and provide  additional services like flea/tick treatments or stylish grooming options as per the owner's preference" linked="/grooming"/>
    </div>
  )
}

export default Grooming