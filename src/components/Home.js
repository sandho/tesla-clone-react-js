import React from 'react'
import styled from 'styled-components'
import Section from './Section'
import ModelS from '../images/model-s.jpg'
import ModelY from '../images/model-y.jpg'
import Model3 from '../images/model-3.jpg'
import ModelX from '../images/model-x.jpg'
import SolarPanel from '../images/solar-panel.jpg'
import SolarRoof from '../images/solar-roof.jpg'
import Accessories from '../images/accessories.jpg'

function Home() {
  return (
    <Container>
        <Section 
          title="Model S"
          desc="Order Online for Touchless Delivery"
          backgroundImg={ModelS}
          leftBtnTxt="Custom Order"
          rightBtnTxt="Existing Inventory"
         />
        <Section 
          title="Model Y"
          desc="Order Online for Touchless Delivery"
          backgroundImg={ModelY}
          leftBtnTxt="Custom Order"
          rightBtnTxt="Existing Inventory"
         />
        <Section 
          title="Model 3"
          desc="Order Online for Touchless Delivery"
          backgroundImg={Model3}
          leftBtnTxt="Custom Order"
          rightBtnTxt="Existing Inventory"
         />
        <Section 
          title="Model X"
          desc="Order Online for Touchless Delivery"
          backgroundImg={ModelX}
          leftBtnTxt="Custom Order"
          rightBtnTxt="Existing Inventory"
         />
        <Section 
          title="Lowest Cost Solar Panels in America"
          desc="Money-back guarantee"
          backgroundImg={SolarPanel}
          leftBtnTxt="Order now"
          rightBtnTxt="Learn more"
         />
        <Section 
          title="Solar for New Roofs"
          desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          backgroundImg={SolarRoof}
          leftBtnTxt="Order now"
          rightBtnTxt="Learn more"
         />
        <Section 
          title="Accessories"
          desc=""
          backgroundImg={Accessories}
          leftBtnTxt="Shop now"
         />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`