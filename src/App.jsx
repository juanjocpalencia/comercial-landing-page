import React from 'react'
import HeaderComponent from './components/HeaderComponent'
import AboutMe from './components/AboutMe.jsx'
import Services from './components/Services.jsx'
import MisionVision from './components/MisionVision.jsx'
import FooterComponet from './components/FooterComponet.jsx'
import KnowMore from './components/KnowMore.jsx'
import { useEffect } from 'react'
export default function App() {
  const presentationCard=()=>{
    console.log("%c***************************************************************************",'color:#58C200 ;')
    console.log("%c***************************************************************************",'color:#58C200 ;')
    console.log("%c***************************************************************************",'color:#58C200 ;')
    console.log("%c***************************************************************************",'color:#58C200 ;')
    console.log("%c***************************************************************************",'color:#58C200 ;')
    console.log("%c***************************************************************************",'color:#58C200 ;')
    console.log("%c***************************************************************************",'color:#58C200 ;')
    console.log("%cWelcome",'color:white;font-size:30px;');
    console.log("%cHello everyone if you want to know more about the develoment team who developed this webapp you can contact us on",'font-size:15px;');
    console.log("%juanjocpalencia@gmail.com",'font-size:15px;color:#F7F723 ;');
    console.log("%c***************************************************************************",'color:#58C200 ;')
    console.log("%c***************************************************************************",'color:#58C200 ;')
    console.log("%c***************************************************************************",'color:#58C200 ;')
    console.log("%c***************************************************************************",'color:#58C200 ;')
    console.log("%c***************************************************************************",'color:#58C200 ;')
    console.log("%c***************************************************************************",'color:#58C200 ;')
    console.log("%c***************************************************************************",'color:#58C200 ;')
  }

  useEffect(() => {
    presentationCard();
  }, [])
  
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <AboutMe></AboutMe>
      <Services></Services>
      <KnowMore></KnowMore>
      <MisionVision></MisionVision>
      <FooterComponet></FooterComponet>
    </>
  )
}
