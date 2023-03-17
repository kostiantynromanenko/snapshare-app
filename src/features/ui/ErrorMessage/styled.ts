import styled from 'styled-components';

export const ErrorMessage = styled.span`
  display: inline-block;
  margin-top: ${({ theme }) => theme.spacing()};
  color: ${({ theme }) => theme.palette.error.main};
  font-size: 0.85rem;
`;
