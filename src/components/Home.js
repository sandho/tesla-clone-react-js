import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
        <Section 
          title="Mode S"
          desc="Order Online for Touchless Delivery"
          backgroundImg="model-s.jpg"
          leftBtnTxt="Custom Order"
          rightBtnTxt="Existing Inventory"
         />
        <Section 
          title="Mode Y"
          desc="Order Online for Touchless Delivery"
          backgroundImg="model-y.jpg"
          leftBtnTxt="Custom Order"
          rightBtnTxt="Existing Inventory"
         />
        <Section 
          title="Mode 3"
          desc="Order Online for Touchless Delivery"
          backgroundImg="model-3.jpg"
          leftBtnTxt="Custom Order"
          rightBtnTxt="Existing Inventory"
         />
        <Section 
          title="Mode X"
          desc="Order Online for Touchless Delivery"
          backgroundImg="model-x.jpg"
          leftBtnTxt="Custom Order"
          rightBtnTxt="Existing Inventory"
         />
        <Section 
          title="Lowest Cost Solar Panels in America"
          desc="Money-back guarantee"
          backgroundImg="solar-panel.jpg"
          leftBtnTxt="Order now"
          rightBtnTxt="Learn more"
         />
        <Section 
          title="Solar for New Roofs"
          desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          backgroundImg="solar-roof.jpg"
          leftBtnTxt="Order now"
          rightBtnTxt="Learn more"
         />
        <Section 
          title="Accessories"
          desc=""
          backgroundImg="accessories.jpg"
          leftBtnTxt="Shop now"
         />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
`