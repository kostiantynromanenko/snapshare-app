import styled from 'styled-components';

export const Switcher = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const SwitcherLabel = styled.label`
  display: inline-block;
  color: ${({ theme }) => theme.palette.common.white};
  font-size: 1.25rem;

  &:hover {
    cursor: pointer;
  }
`;

export const SwitcherRadio = styled.input`
  display: none;

  &:checked + label {
    color: ${({ theme }) => theme.palette.primary.main};
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;
