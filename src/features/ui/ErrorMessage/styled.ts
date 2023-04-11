import styled from 'styled-components';

interface StyledErrorMessageProps {
  readonly align: 'left' | 'right' | 'center';
}

export const StyledErrorMessage = styled.small<StyledErrorMessageProps>`
  display: inline-block;
  text-align: ${({ align }) => align};
  color: ${({ theme }) => theme.palette.error.main};
  font-size: 0.85rem;
`;
