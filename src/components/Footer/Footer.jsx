import React from 'react'
import { Link } from 'react-router-dom';
import Grid from './Grid';
import dogLogo from '../../assets/logoDog.svg'
import qrCode from '../../assets/QrCode.svg'
import twitter from '../../assets/twitter.svg'
import linkedIn from '../../assets/linkedIn.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'

export default function Footer() {
    return (
        <footer className="bg-orange-300 border-y dark:bg-slate-900 bottom-0 mt-28">
            <div className="mx-auto w-full  p-4 py-6 lg:py-8 text-white dark:text-slate-300">
                <div className="md:flex md:justify-between mx-5">
                    <div className="mb-6 md:mb-0 ">
                        
                       <div className="space-y-4">
                        <div className="flex gap-1 ">
                           <img src={qrCode} alt="QR-Code" className=" " />
                           <div className="mt-3">
                            <div className="flex">
                                <img src={dogLogo} alt="" className="h-8" />
                                <h1 className="text-2xl font-bold mt-1">Pawfect</h1>
                            </div>
                            <p className="text-md text-center">Scan QR For More</p>
                           </div>
                        </div>
                        <hr />
                        {/* bottom */}
                        <div className="flex gap-3">
                         <a href="" className=""><img src={twitter} alt="twitter" className="h-8 w-8" /></a>
                         <a href="" className=""><img src={linkedIn} alt="linkedIn" className="h-8 w-8" /></a>
                         <a href="h-8 w-8" className=""><img src={facebook} alt="facebook" className="h-8 w-8" /></a>
                         <a href="" className=""><img src={instagram} alt="instagram" className="h-8 w-8" /></a>
                        </div>
                       </div>

                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-4  ml-8">
                        
                        <Grid heading="Services" list1="Pet Caretaking" list2="Grooming" list3="Veterinary Services"/>
                        <Grid heading="Our Trust" list1="Reliability" list2="Professionalism" list3="Commitment to excellence"/>
                        <Grid heading="Contact us" list1="9156761677"  />
                        <Grid heading="Visit our FAQ page" />
                         
                    </div>
                </div>

  
                
            </div>
        </footer>
    );
}