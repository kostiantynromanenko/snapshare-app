import styled from 'styled-components';
import { Icon } from '@features/ui';

export const Switcher = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const SwitcherLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.palette.common.white};

  &:hover {
    cursor: pointer;
  }
`;

export const SwitcherRadio = styled.input`
  display: none;

  &:checked + label {
    border-bottom: 3px solid;
    font-weight: bold;
  }
`;

export const SwitcherIcon = styled(Icon)`
  margin-right: ${({ theme }) => theme.spacing(0.5)};
`;
