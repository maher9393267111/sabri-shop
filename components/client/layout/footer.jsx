'use client'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import Link from 'next/link'
import {WhatsappShareButton,WhatsappIcon} from 'react-share'

export default function Footer() {

        const TopButton = ()=> {
            window.scrollTo(0,0)
        }


    const shareUrl = "url";
    const title = "Title";
    
    return (
            <div>
            
            <svg xmlns="http://www.w3.org/2000/svg" 
            width="32" 
            height="32" 
            fill="currentColor"
            className="bi bi-arrow-up-circle mb-2   ml-auto -mx-11 hover:cursor-pointer bg-white text-sky-700   hover:scale-125 duration-500" 
            viewBox="0 0 16 16"
            onClick={TopButton}
            > 
            
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" fill=""></path> 
            </svg>
            
            <div className='bg-sky-700  bottom-0 left-0 right-0 mx-[-56px] sm:mx-[-70px] lg:mx-[-56px]  '>
                <h1
                    className='text-2xl font-bold tracking-wide text-center pt-6 text-gray-100 sm:text-3xl md:text-4xl h-2 hover:animate-pulse '
                >
                    <Link href='/'>IT PRO MAX</Link>
                </h1>
                <div className='max-w-screen-xl px-4 py-14 mx-auto 1space-y-6  overflow-hidden sm:px-6 lg:px-8'>
                    <Fade bottom>
                        <nav className='flex flex-wrap justify-center -mx-5 mt-1'>
                            <div className='sm:px-5 px-5 py-2'>
                                <Link
                                    href='/'
                                    className='text-base leading-6 text-gray-100 hover:text-gray-100 hover:bg-sky-500 px-3 py-2 rounded-md transition-all duration-300'
                                >
                                    Home
                                </Link>
                            </div>

                            <div className='px-5 py-2'>
                                <Link
                                    href={'/products?category'}
                                    className='text-base leading-6 text-gray-100 hover:text-gray-100 hover:bg-sky-500 px-3 py-2 rounded-md transition-all duration-300'
                                >
                                    Category
                                </Link>
                            </div>

                            <div className='px-6 py-2'>
                                <Link
                                    href='/products'
                                    className='text-base leading-6 text-gray-100 hover:text-gray-100 hover:bg-sky-500 px-3 py-2 rounded-md transition-all duration-300'
                                >
                                    Products
                                </Link>
                            </div>
                            <div className='px-5 py-2'>
                                <Link
                                    href='/tradein'
                                    className='text-base leading-6 text-gray-100 hover:text-gray-100 hover:bg-sky-500 px-3 py-2 rounded-md transition-all duration-300'
                                >
                                    Trade In
                                </Link>
                            </div>
                            <div className='px-2 py-2'>
                                <Link
                                    href='/contactus'
                                    className='text-base leading-6 text-gray-100 hover:text-gray-100 hover:bg-sky-500 px-3 py-2 rounded-md transition-all duration-300'
                                >
                                    Contact Us
                                </Link>
                            </div>
                            <div className='px-6 py-2'>
                                <Link
                                    href='/aboutus'
                                    className='text-base leading-6 text-gray-100 hover:text-gray-100 hover:bg-sky-500 px-3 py-2 rounded-md transition-all duration-300'
                                >
                                    About Us
                                </Link>
                            </div>
                        </nav>
                    </Fade>

                    {/* --------------------------------------Social Media Icons----------------------------------------- */}

                    <div className='flex justify-center mt-3 space-x-6 '>
                        <Fade left>
                            <a
                                href='https://www.facebook.com/BuyAndSellInBeirutOnline' target="_blank" rel="noreferrer"
                                className='text-gray-200 '
                            >
                                <span className='sr-only'>Facebook</span>
                                <svg
                                    className='w-8 h-8 hover:scale-125 duration-500'
                                    aria-hidden='true'
                                    fill='currentColor'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                                        clipRule='evenodd'
                                    ></path>
                                </svg>
                            </a>
                        </Fade>

                        <Fade left>
                            <a
                                href='https://www.instagram.com/itpromax.beirut/' target="_blank" rel="noreferrer"
                                className='text-gray-200 '
                            >
                                <span className='sr-only'>Instagram</span>
                                <svg
                                    className='w-8 h-8 hover:scale-125 duration-500'
                                    aria-hidden='true'
                                    fill='currentColor'
                                    viewBox='0 0 24 24'
                                >
                                    <path
                                        fillRule='evenodd'
                                        d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                                        clipRule='evenodd'
                                    ></path>
                                </svg>
                            </a>
                        </Fade>
                        <Fade right>
                            <a
                                href='https://wa.me/96170480041' target="_blank" rel="noreferrer" 
                                
                                className='text-gray-200 '
                            >
                                <span className='sr-only'>WhatsApp</span>
                                <svg
                                    className='w-10 h-11 hover:scale-125 duration-500'
                                    aria-hidden='true'
                                    fill='currentColor'
                                    viewBox='0 0 24 24'
                                >
                                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
                                </svg>
                            </a>
                        </Fade>

                        <Fade right>
                            <a
                                href='tel:+96170480041' target="_blank" rel="noreferrer" 
                                
                                className='text-gray-200 relative right-3'
                            >
                                <span className='sr-only'>Phone Call</span>
                                <svg
                                    className='w-8 h-8 hover:scale-125 duration-500'
                                    aria-hidden='true'
                                    fill='currentColor'
                                    viewBox='0 0 24 24'
                                >
                                    <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                            </a>
                        </Fade>

                    {/* whatsApp icon to share link and title */}
                        {/* <div className="Demo__some-network">
        <WhatsappShareButton
          url={shareUrl}
          title={title}
          separator=":: "
          className="Demo__some-network__share-button"
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </div> */}



                    </div>
                    <Fade bottom>
                        <p className='relative top-8 text-base leading-6 text-center text-gray-200'>
                            © 2024 ITPROMAX Lebanon, Inc. All rights reserved.
                        </p>
                    </Fade>
                </div>
            </div>
    </div>       
    )
}