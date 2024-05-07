import React from 'react';
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaCalendar } from "react-icons/fa";
import { Card, SimpleGrid ,Button,Box} from '@chakra-ui/react';
import CustomSupportCard from './customSupportCard';
const Support = () => {
    return (
        <div className='my-18 sm:w-[75%] sm:m-auto '>
            <SimpleGrid columns={[1,1,2,3]} gap={5} mb={14} >
            
            <CustomSupportCard 
            title={"Chat Support"}
            desc={"Chat online with our team now from anywhere. We provide you with a seamless and hassle-free online chat experience from the comfort of your home. Get the proper assistance now!"}
            icon={ <IoChatboxEllipsesSharp className='mt-2 w-14 h-14 text-white bg-red-500 rounded-2xl p-3 relative -top-8 -right-8' />}
            
            buttonText= {"Chat now"} 
            linkText ={'https://wa.me/96170480041'} 
            target="_blank" rel="noreferrer" 
            />
            
            <CustomSupportCard 
            title={"Call Support"}
            desc={"Reach out to us with your questions, concerns, or challenges. We’ll be happy to help you at any time, and we’re always trying to make things easier for you!"}
            icon={ <FaPhone className='mt-2 w-14 h-14 text-white bg-red-500 rounded-2xl p-3 relative -top-8 -right-8' />}
            buttonText={"Call expert support"}
            linkText={"tel:+96170480041"}
            />
           

            <CustomSupportCard 
            title={"Buy and Sell your Product"}
            desc={"Looking for a new phone or new Laptop? Sell your old phone here for the most cash!"}
            icon={ <FaCalendar className='mt-2 w-14 h-14 text-white bg-red-500 rounded-2xl p-3 relative -top-8 -right-8' />}
            buttonText={"Submit an application "}
            />

            
            </SimpleGrid>
        </div>
    );
}

export default Support;
