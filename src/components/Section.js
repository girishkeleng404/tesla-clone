import React from 'react'
import styled from 'styled-components'

const Section = ({ title,description,leftBtnText, rightBtnText,backgroundImg}) => {  // or you can pass only props and use {props.title} inside
   
  return (
    <Wrap bgImage ={backgroundImg} >
        
        <ItemText>
             <h1>{title}</h1>
             <p>{description}</p>
        </ItemText>

        <Buttons> 

        <ButtonGroup>
            <LeftButton>
                {leftBtnText}
            </LeftButton>

            {rightBtnText && 
               <RightButton> 
                {rightBtnText}
               </RightButton>
            } 

            
        </ButtonGroup>

       <DownArrow src="/images/down-arrow.svg" />
</Buttons>
       

    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
width: 100vw;
height: 100vh;
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-image: url('/images/model-3.jpg');
display: flex;
flex-direction: column;
justify-content: space-between;  // Vertical alignment
align-items: center;  // Horizontal alignment
background-image: ${props => `url('/images/${props.bgImage}')`}

`

const ItemText = styled.div`
padding-top: 15vh;
text-align: center;

`
const ButtonGroup = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 2rem;
cursor: pointer;
@media (max-width: 768px){
    flex-direction: column;
}

`
const LeftButton = styled.div`
background-color: rgba(23,26,32,0.8);
height :40px;
width: 256px;
color: #fff;
display: flex;
justify-content: center;
align-items: center;
border-radius:8px;
opacity: 0.85;
text-transform: uppercase;
font-size:0.9rem;
font-weight:500;
margin:10px;

`

const RightButton = styled(LeftButton)`
opacity: 0.9;
background-color:rgb(240, 240, 240);
color:#888;


`
const DownArrow = styled.img`
margin-top: 20px;
height:40px;
animation: animateDown infinite 1.5s;
overflow: hidden;

`
const Buttons= styled.div`

`