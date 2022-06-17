import styled from 'styled-components'
import { AppColors } from '../../Styles/global'

type ButtonProps = {
  bgColor: string
  borderColor: string
  color: string
  hoverColor: string
}

export const variantToColor = {
  primary: {
    bgColor: AppColors.secondary,
    borderColor: AppColors.primary,
    color: AppColors.primary,
    hoverColor: AppColors.HoverPrimary
  }, 
  secondary: {
    bgColor: AppColors.white,
    borderColor: AppColors.white,
    color: AppColors.secondary,
    hoverColor: AppColors.HoverPrimary
  },
  outline: {
    bgColor: 'transparent',
    color: AppColors.HoverPrimary
  }
}

export const ButtonPage = styled.button<ButtonProps>`
  width: 9.3rem;
  height: 3.1rem;
  font-weight: 500;
  font-size: 1.25rem;
  line-height: 2.2rem; 
  background: ${props => props.bgColor};
  border-radius: 0.6rem;
  text-align: center;

 margin: 1rem auto;
  color: ${props => props.color};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: 0rem 0.2rem 0.2rem rgba(0, 0, 0, 0.3);
  :hover {
    background-color: ${props => props.color};
    color: ${props => props.bgColor};
    border: none;
  }
  `