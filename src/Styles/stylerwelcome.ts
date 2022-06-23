import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const FormLabel = styled.div`
  width: 460px;
  height: 500px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
 

  
  h3 {
    width: 25rem;
    font-weight: 400;
    font-size: 1.5rem;
    margin: 10px auto;
    text-align: center;
    color: #423b32;
    
  }
  @media (max-width: 1100px) {
    align-items: center;
    justify-content: center;
    margin: 0;
    
    background: transparent;
    width: 100vw;
    height: 100vh;
  
  }
h1{

    font-weight: 600;
    font-size: 2rem;
    margin: 10px auto;
    
    color: #e8ac5a;
    text-align: center;
}

h3{

  color:#ffffff;
} 
`


export const LabelText = styled.label`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  text-align: center;
  color: #8b6b4a;
  margin-left: 50px;
  @media (max-width: 1000px){
    margin: 1.5rem auto;
    color:#e8ac5a;
    
  }
`;


export const CheckboxButton = styled.input`
 background-color: #423b32;
`
export const  ContainerMain = styled.section`
background: linear-gradient(to right, #FFEBD6 0, #FFEBD6  63%, #423B32 42%);
@media (max-width: 1100px) {
  background: none;
    background-color: #423B32;
  
  }
`

export const imgBackground = styled.div`
position: absolute;
right: 0;
`
export const aliginIcons = styled.div`
display: flex;
gap: 1rem;
margin: 10px auto;
cursor: pointer;
align-items: center;
justify-content: start;
margin-left: 2.3rem;
`