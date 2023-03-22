import styled from 'styled-components';

interface StyledErrorMessageProps {
  readonly align: 'left' | 'right' | 'center';
}

export const StyledErrorMessage = styled.span<StyledErrorMessageProps>`
  display: inline-block;
  margin-top: ${({ theme }) => theme.spacing()};
  text-align: ${({ align }) => align};
  color: ${({ theme }) => theme.palette.error.main};
  font-size: 0.85rem;
`;
