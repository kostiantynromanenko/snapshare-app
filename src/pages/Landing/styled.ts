import styled from 'styled-components';
import { LanguageSwitcher } from '@features/i18n';

export const Container = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-image: url(/images/landing-bg.png);
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ContentBox = styled.main`
  display: grid;
  grid-template-columns: 2fr 2fr;
  overflow: hidden;
  height: 600px;
  width: 800px;
  border-radius: 10px;
  box-shadow: 2px 1px 5px 1px rgba(0, 0, 0, 0.5);
  background-color: ${({ theme }) => theme.palette.common.white};

  ${({ theme }) => theme.breakpoints.down('laptop')} {
    width: 90%;
  }

  ${({ theme }) => theme.breakpoints.down('tablet')} {
    grid-template-columns: 1.5fr 1fr;
  }

  ${({ theme }) => theme.breakpoints.down('mobile')} {
    display: flex;
    flex-direction: column;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(4)};
`;

export const ImageSection = styled.div`
  background-image: url(/images/sign-in-form-bg.png);
  background-color: ${({ theme }) => theme.palette.primary.main};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  ${({ theme }) => theme.breakpoints.down('mobile')} {
    height: 100%;
  }
`;

export const LangSwitcher = styled(LanguageSwitcher)`
  position: absolute;
  top: 24px;
  right: 24px;
`;
