import styled, { css } from 'styled-components';
import { LanguageSwitcher } from '@features/i18n';

export const Container = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.background.landing};
`;

export const ContentBox = styled.main`
  display: grid;
  grid-template-columns: 2fr 2fr;
  overflow: hidden;
  height: 600px;
  width: 800px;
  border-radius: 10px;

  ${({ theme }) => css`
    box-shadow: ${theme.shadows[1]};
    background-color: ${theme.palette.common.white};

    ${theme.breakpoints.down('laptop')} {
      width: 90%;
    }

    ${theme.breakpoints.down('tablet')} {
      grid-template-columns: 1.5fr 1fr;
    }

    ${theme.breakpoints.down('mobile')} {
      grid-template-columns: 1fr;
    }
  `}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(4)};
`;

export const WordMark = styled.h1`
  font-size: 2.5rem;

  ${({ theme }) => css`
    margin-bottom: ${theme.spacing(4)};
    color: ${theme.palette.primary.main};
  `}
`;

export const ImageSection = styled.div`
  background-image: url(/images/sign-in-form-bg-lg.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  ${({ theme }) => css`
    background-color: ${theme.palette.grey[800]};

    ${theme.breakpoints.down('mobile')} {
      grid-row-start: 1;
      background-image: url(/images/sign-in-form-bg-sm.png);
      background-position-y: top;
    }
  `}
`;

export const LangSwitcher = styled(LanguageSwitcher)`
  position: absolute;
  top: 24px;
  right: 24px;

  ${({ theme }) => theme.breakpoints.down('mobile')}: {
    right: 5%;
    top: 5%;
  }
`;
