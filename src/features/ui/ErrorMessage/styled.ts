import styled from 'styled-components';
import { ErrorMessageProps } from '@features/ui';

export const ErrorMessage = styled.span<Omit<ErrorMessageProps, 'message'>>`
  display: inline-block;
  margin-top: ${({ theme }) => theme.spacing()};
  text-align: ${({ align }) => align};
  color: ${({ theme }) => theme.palette.error.main};
  font-size: 0.85rem;
`;
