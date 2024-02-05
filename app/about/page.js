import React from 'react'
import Header from '@/components/ui/header'
import Content from '@/components/ui/aboutUi/content'
import Progress from '@/components/ui/aboutUi/progress'
import Valuation from '@/components/ui/aboutUi/Valuation'
import DetailedValuation from '@/components/ui/aboutUi/DetailedValuation'
import Footer from '@/components/ui/footer'

export default function page() {
  return (
    <>
  <div className=" w-[100%] min-h-screen bg-gradient-to-b from-[#06234B] to-[#1a3bc0] via-[#162A81] text-white max-md:text-[12px] text-base">
     
     <div>
     <Header/>
      <Content/>
      <Progress/>
      <Valuation/>
      <DetailedValuation/>
      <Footer/>
      </div>
    </div>

    </>
  )
}
