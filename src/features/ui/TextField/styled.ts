import styled from 'styled-components';

export const StyledTextField = styled.fieldset`
  input + small {
    margin-top: ${({ theme }) => theme.spacing(0.75)};
  }
`;
