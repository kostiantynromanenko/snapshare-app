import React from 'react';
import { GalleryContainer, GalleryGrid } from './styled';
import { GalleryItem } from '../GalleryItem';
import { GalleryActions } from '../GalleryActions';

export const Gallery = (): JSX.Element => (
  <GalleryContainer>
    <GalleryActions />
    <GalleryGrid>
      <GalleryItem
        src={`https://picsum.photos/seed/${Math.random() * (10000 - 100) + 100}/1000/700`}
      />
      <GalleryItem
        src={`https://picsum.photos/seed/${Math.random() * (10000 - 100) + 100}/600/200`}
      />
      <GalleryItem
        src={`https://picsum.photos/seed/${Math.random() * (10000 - 100) + 100}/400/300`}
      />
      <GalleryItem
        src={`https://picsum.photos/seed/${Math.random() * (10000 - 100) + 100}/400/300`}
      />
      <GalleryItem
        src={`https://picsum.photos/seed/${Math.random() * (10000 - 100) + 100}/400/300`}
      />
      <GalleryItem
        src={`https://picsum.photos/seed/${Math.random() * (10000 - 100) + 100}/200/300`}
      />
      <GalleryItem
        src={`https://picsum.photos/seed/${Math.random() * (10000 - 100) + 100}/200/300`}
      />
    </GalleryGrid>
  </GalleryContainer>
);
