import styled from 'styled-components';

interface IconImgProps {
  readonly size: number;
}

export const IconImg = styled.img<IconImgProps>`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
`;
