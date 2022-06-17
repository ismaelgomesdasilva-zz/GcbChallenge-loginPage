import styled from 'styled-components'
import { AppColors } from '../../Styles/global'

type FormLabelProps = {
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
export const FormLabel = styled.div<FormLabelProps>`
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
  ` 