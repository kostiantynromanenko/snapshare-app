import styled from 'styled-components';

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-template-rows: repeat(auto-fit, 130px);
  grid-auto-flow: dense;
  gap: ${({ theme }) => theme.spacing(2)};
`;
