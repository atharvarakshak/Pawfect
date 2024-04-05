import React from 'react'
import { Link } from 'react-router-dom';
import homeImg from '../../assets/mainPage.svg'
import HomeCard from '../Cards/HomeCard';
import LeftImg from '../Cards/LeftImg';
import RightImg from '../Cards/RightImg';
import dayCare2 from '../../assets/dayCare2.svg'
import grooming2 from '../../assets/grooming2.svg'

import petTraining from '../../assets/PetTraining2.svg'
import vaterinaryAssistance from '../../assets/VeterinaryAssistance2.svg'
import Walking from '../../assets/Walking2.svg'
import breedingAssistance from '../../assets/BreedingAssistance2.svg'


export default function Home() {
    return (
        <div className="mx-auto w-full ">

        
        <div className="  ">
        <img src={homeImg} alt="" className=" w-screen " />
        <HomeCard/>
        <div className="flex space-y-24 flex-col">
        <LeftImg img={dayCare2} title="Day Care" content="Where furry friends feel at home: Find your perfect pet caretaker today! " linked="/daycare" btnText="Enquire Now"/>
        <RightImg img={grooming2} title="Grooming" content=" Let us handle it all for you, so you can focus on the more important things in life." linked="/grooming" btnText="Enquire Now"/>
        <LeftImg img={petTraining} title="Pet Training" content="Let us handle the stress of training pets to provide mental stimulation and to make your bond with your pet even stronger. " linked="/pettraining" btnText="Enquire Now"/>
        <RightImg img={vaterinaryAssistance} title="Veterinary Assistance" content="We're committed to providing best health assistance to your pets so you can stay worry free." linked="/veterinary-assistance" btnText="Enquire Now"/>
        <LeftImg img={Walking} title="Walking" content="We provide regular and on-demand dog walks, tailored to the pet's needs. 
So stay free from the stress to ensure proper walk for your pet dog." linked="/walking" btnText="Enquire Now"/>
        <RightImg img={breedingAssistance} title="Breeding Assistance" content=" We offer support for mating, pregnancy monitoring, birthing, and postnatal care. Provide guidance on nutrition, health, and hygiene, and assist with finding suitable mates and coordinating veterinary care." linked="/breeding-assistance" btnText="Enquire Now"/>
        </div>
        </div>
    
       
        </div>
    );
}