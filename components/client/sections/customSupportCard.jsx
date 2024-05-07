import React from "react";
import { Box, Card, Button } from "@chakra-ui/react";
import Link from "next/link";


const CustomSupportCard = ({ title, desc, icon, buttonText,linkText }) => {
  return (
    <Card
      flexDirection={"column"}
      borderRadius={10}
      gap={5}
      className="!bg-[#F3F8FF] !my-5 md:my-0 !shadow-2xl !rounded-3xl"
    >
      
      <Box flexGrow={1}>
        {icon}
        <Box padding={5}>
          <p className="text-xl font-medium text-gray-800 pb-2">{title}</p>
          <p>{desc}</p>
        </Box>
      </Box>

      <Button
        py="25"
        borderRadius={"0px 0px 9px 9px"}
        fontSize={18}
        mt="4"
        bg={"red"}
        textColor={"white"}
        _hover={{ bg: "red.600" }}
        
      >
        {linkText 
        ? 
        <a href={linkText} target='_blank'> 
        <div>{buttonText} </div> 
        </a> 
        : 
        <div>{buttonText}</div> }
        
      </Button>
    </Card>
  );
};

export default CustomSupportCard;
