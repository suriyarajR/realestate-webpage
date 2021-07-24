import React from 'react'
import styled from 'styled-components'
import {Button} from './Button'

const Section=styled.section`
    width:100%;
    height:100%;
    padding:4rem 0rem;
`;
const Container = styled.div`
  padding: 1rem calc((5vw -500px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    grid-template-column: 1fr;
  }
`;
const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2 rem;
  order: $(({reverse}) =>(reverse ? "2": "1"));

  h1 {
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }
  p {
    margin-bottom: 2rem;
  }
`;
const RightColumn = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  
  img{
      width:100%;
      height:100%;
      object-fit:cover;

      @media screen and (max-width:768px){
          width:90%;
          height:90%;
      }
  }
  `;

const InfoSection = ({ heading, paragraphOne, paragraphTwo,buttonLabel,reverse,image }) => {
  return (
    <Section>
      <Container>
        <LeftColumn>
          <h1>{heading}</h1>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <Button to="/homes" primary='true'>{buttonLabel}</Button>
        </LeftColumn>
        <RightColumn>
          <img src={image}  alt="home" />
        </RightColumn>
      </Container>
    </Section>
  );
};

export default InfoSection
