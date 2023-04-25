import React, { useEffect, useState } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { GalleryContainer, GalleryGrid } from './styled';
import { GalleryItem } from '../GalleryItem';
import { GalleryActions } from '../GalleryActions';

export const Gallery = (): JSX.Element => {
  const { authState } = useOktaAuth();
  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/images`, {
      headers: {
        Authorization: `Bearer ${authState?.accessToken?.accessToken}`
      }
    })
      .then((response) => response.json())
      .then((imgs) => setImages(imgs));
  }, [authState?.accessToken?.accessToken]);

  return (
    <GalleryContainer>
      <GalleryActions />
      <GalleryGrid>
        {images.map((image) => (
          <GalleryItem src={image.thumbnailUrl} key={image.id} />
        ))}
      </GalleryGrid>
    </GalleryContainer>
  );
};
