import styled, { css } from 'styled-components';

interface GalleryItemProps {
  rowEndSpan: number;
  colEndSpan: number;
}

export const StyledGalleryItem = styled.div<GalleryItemProps>`
  display: flex;
  border-radius: 6px;
  overflow: hidden;

  ${({ theme, rowEndSpan, colEndSpan }) => css`
    grid-column-end: span ${colEndSpan};
    grid-row-end: span ${rowEndSpan};
    box-shadow: ${theme.shadows[1]};
  `}
`;

export const GalleryItemImage = styled.img`
  object-fit: cover;
  width: 100%;
`;
