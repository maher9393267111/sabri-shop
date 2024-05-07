import { ChakraProvider } from '@chakra-ui/react'
//import '../styles/globals.css'
import '../styles/global.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import  ProgressBar from '../components/common/progressBar';
import { useEffect } from 'react';


import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { StateContextProvider } from '@/functions/context'

import { Provider } from 'react-redux';
import store from '@/redux/store';

import { appWithTranslation } from "next-i18next";
import nextI18NextConfig from "../next-i18next.config"



const MyApp=({ Component, pageProps }) =>{


    // useEffect(() => {
      
    //     AOS.init({
    //        // once: true,
    //         // Animations always disabled in dev mode; disabled on phones in prod
    //         disable:  "phone",
    //         duration: 700,
    //         easing: "ease-out-cubic",
    //     }
    //     );
    //   }, [])
  


    return (
        <>
    <ChakraProvider>
    <Provider store={store}>
    <StateContextProvider>
    
    <Component {...pageProps} />
    <ToastContainer />
    <ProgressBar/>
    </StateContextProvider>
    </Provider>
    
    </ChakraProvider>
    </>
)
}

export default appWithTranslation(MyApp, nextI18NextConfig);