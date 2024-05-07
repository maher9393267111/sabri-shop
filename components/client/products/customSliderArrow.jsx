import React from 'react';
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { IconButton } from '@chakra-ui/react';
import { ChevronIcon } from '@/functions/icons';

const CustomSliderArrow = ({direction,onClick}) => {
    return (
        
        <div className={` ${direction==='next' ? " sm:-right-8 -right-3  lg:-right-16" : "sm:-left-8 -left-3 lg:-left-16" } absolute top-[40%] `} onClick={onClick} >
                 
      <button className={`${direction==='next' ? "rotate-180" : ""}`} >
        <ChevronIcon />

        </button>
        {/* <BiLeftArrowAlt /> */}
      {/* </IconButton> */}
      
        </div>
    );
}

export default CustomSliderArrow;
