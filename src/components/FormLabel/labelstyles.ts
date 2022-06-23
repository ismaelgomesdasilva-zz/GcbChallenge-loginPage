import styled from 'styled-components'

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
  /* >div{
    margin: 0 auto;
    
  } */
  >p {
    margin-left: 3.2rem;
    font-weight: 500;
    font-size: 0.8rem;
    line-height: 1.3rem;
    text-align: center;
    color: #423b32;
    
  }
  a {
    cursor: pointer;
    color: #423b32;
    transition: all 0.3s ease-in-out;
    :hover {
      color: #e8ac5a;
    }
  }
  h1{
    font-weight: 600;
    font-size: 2rem;
    margin-left: 2.5rem;
    
    color: #e8ac5a;
    text-align: start;
  }
  h3{
    
    width: 23rem;
    font-weight: 400;
    font-size: 1rem;
    margin: 10px auto;
    text-align: start;
    color: #423b32;
    margin-left: 2.5rem;
  }
  
  @media (max-width: 1000px) {
    align-items: center;
    justify-content: center;
    margin: 0;
    
    background: transparent;
    width: 100vw;
    height: 100vh;
    box-shadow: none;
    p, a{
      margin: 1rem auto;
      color:#b3b3b3;
      font-size: 0.9rem;
      text-align: center;
      
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
  }
  `