import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { useAuth } from '@/functions/context'
import Loader from '../common/Loader'

export default function Layout({children ,dir}) {

const {pageLoading} = useAuth()



if(pageLoading) {
  return <Loader/>
}


  return (
    <div className='  ' dir={dir}>

<Navbar/>


<div className='min-h-[80vh]'>
    {children}
</div>


{/* <Footer/> */}


    </div>
  )
}
