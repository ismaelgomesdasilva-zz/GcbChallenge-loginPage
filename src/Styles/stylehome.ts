import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
 
`;
export const FormLabel = styled.div`
  width: 28rem;
  height: 31rem;
  background: #ffffff;
  box-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.5);
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  z-index: 2;
  p {
    font-weight: 500;
    font-size: 0.8rem;
    line-height: 1.3rem;
    text-align: center;
    color: #423b32;
    margin-left: 3.1rem;
    margin-top: -0.6rem;
  }
  a {
    cursor: pointer;
    color: #423b32;
    transition: all 0.3s ease-in-out;
    :hover {
      color: #e8ac5a;
    }
  }
  @media (max-width: 1000px) {
    align-items: center;
    justify-content: center;
    margin: 0;
    background: transparent;
    
    width: 100vw;
    height: 100vh;
    p, a{
      margin: 0;
      color:#b3b3b3;
      margin-top: 1rem;
    }
  }
`;

export const InputLabel = styled.input`
  width: 75%;
  border: none;
  border-bottom: 0.15rem solid #423b32;
  margin-left: 3.2rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
  font-size: 1rem;
  line-height: 2.2rem;
  color: #423b32;
  transition: all 0.3s ease-in-out;
  :focus {
    outline: none;
    border: none;
    border-bottom: 0.15rem solid #e8ac5a;
  }
  @media (max-width: 1000px){
    margin: 0;
    width: 75%;
    background-color: transparent;
    border-bottom: 0.15rem solid #b3b3b3;
    color: #b3b3b3;
    
    :focus{
      outline: none;
    border: none;
    border-bottom: 0.15rem solid #e8ac5a;
    }
  }
`;
export const LabelText = styled.label`
  font-weight: 500;
  font-size: 1.6rem;
  color: #8b6b4a;
  margin-left: 3.1rem;
  @media (max-width: 1000px){
    margin: 1.5rem auto;
    color:#e8ac5a;
    
  }
`;

export const Description = styled.div`
  width: 37.5rem;
  h1 {
    font-weight: 500;
    font-size: 2.2rem;
    color: #423b32;
    margin-bottom: 3rem;
    width: 32rem;
  }
  p {
    font-size: 1.6rem;
    color: #423b32;
    width: 25rem;
    margin-bottom: 3rem;
  }
  @media (max-width: 1000px) {
    display: none;
    
  }
`;
export const ButtonPage = styled.button`
  width: 9.3rem;
  height: 3.1rem;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 2.2rem;
  background: #423b32;
  border-radius: 0.6rem;
  text-align: center;
  margin-left: 3.1rem;
  margin-top: 2rem;
  color: #f5ca9c;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0rem 0.2rem 0.2rem rgba(0, 0, 0, 0.3);
  :hover {
    background-color: #f5ca9c;
    color: #423b32;
    border: none;
  }
  @media (max-width: 1000px){
    margin:1rem auto;
    background-color: #fff;
    color: #423b32;
  }
`;
export const imgBackground = styled.div`
  position: absolute;
  right: 0;
  pointer-events: none;
`;
export const ContainerMain = styled.section`
  background: linear-gradient(to right, #ffebd6 0, #ffebd6 63%, #423b32 42%);
  @media (max-width: 1000px) {
    background: none;
    background-color: #423b32;
  }
`;
export const imgNone = styled.div`
display: none;
@media (max-width: 1000px){
    display: block;
    margin-right: 1rem;
    
  }
`