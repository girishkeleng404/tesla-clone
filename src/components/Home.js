import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
  return (
    <Container>
      <Section 
        title= "Model 3"
        description = "Schedule a Test Drive"
        backgroundImg ="model-3.jpg"
        leftBtnText = "Custom Order"
        rightBtnText = "Existing Inventory"
      
      />

      <Section 
      title= "Model Y"
      description = "Schedule a Test Drive"
      backgroundImg ="model-y.jpg"
      leftBtnText = "Custom Order"
      rightBtnText = "Existing Inventory"
      
      />
      <Section 
      title= "Model S"
      description = "Schedule a Test Drive"
      backgroundImg ="model-s.jpg"
      leftBtnText = "Custom Order"
      rightBtnText = "Existing Inventory"
      />
      <Section 
      title= "Model X"
      description = "Schedule a Test Drive"
      backgroundImg ="model-x.jpg"
      leftBtnText = "Custom Order"
      rightBtnText = "Existing Inventory"
      />
      <Section 
      title= "Solar Panels"
      description = "Lowest Cost Solar Panels in America"
      backgroundImg ="solar-panel.jpg"
      leftBtnText = "Order Now"
      rightBtnText = "Learn More"
      />
      <Section 
      title= "Solar Roof"
      description = "Produce Clean Energy From your Roof"
      backgroundImg ="solar-roof.jpg"
      leftBtnText = "Order Now"
      rightBtnText = "Learn More"
      />
      <Section 
      title= "Accessories"
      description = ""
      backgroundImg ="accessories.jpg"
      leftBtnText = "Shop Now"
      rightBtnText = ""
      />
      
        </Container>
  )
}

export default Home

const Container = styled.div`
   height: 100vh;
   
`