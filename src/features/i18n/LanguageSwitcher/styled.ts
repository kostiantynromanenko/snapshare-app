import styled, { css } from 'styled-components';
import { Icon } from '@features/ui';

export const Switcher = styled.fieldset`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing(1)};
`;

export const SwitcherOption = styled.div`
  border-radius: 4px;

  ${({ theme }) => css`
    padding: ${theme.spacing(0.5)};
    background-color: ${theme.palette.common.black};
    color: ${theme.palette.common.white};
    box-shadow: ${theme.shadows[1]};
  `}
`;

export const SwitcherLabel = styled.label`
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export const SwitcherRadio = styled.input`
  display: none;

  &:checked + label {
    font-weight: bold;
  }
`;

export const SwitcherIcon = styled(Icon)`
  width: 16px;
  height: 16px;
  margin-right: ${({ theme }) => theme.spacing(0.5)};
`;
