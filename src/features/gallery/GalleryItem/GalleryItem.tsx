import React, { useMemo, useRef, useState } from 'react';
import { GalleryItemImage, StyledGalleryItem } from './styled';
import { getGridSpanEdges } from '../utils';

interface GalleryItemProps {
  src: string;
}

export const GalleryItem = ({ src }: GalleryItemProps): JSX.Element => {
  const imgEl = useRef<HTMLImageElement>(null);
  const [originalHeight, setOriginalHeight] = useState<number>(0);
  const [originalWidth, setOriginalWidth] = useState<number>(0);

  const gridSpanEdges: { colEnd: number; rowEnd: number } = useMemo(
    () => getGridSpanEdges(originalWidth, originalHeight),
    [originalWidth, originalHeight]
  );

  const handleImageLoad = (): void => {
    const { current } = imgEl;

    if (current) {
      setOriginalWidth(current.naturalWidth);
      setOriginalHeight(current.naturalHeight);
    }
  };

  return (
    <StyledGalleryItem colEndSpan={gridSpanEdges.colEnd} rowEndSpan={gridSpanEdges.rowEnd}>
      <GalleryItemImage ref={imgEl} src={src} onLoad={() => handleImageLoad()} alt="Gallery item" />
    </StyledGalleryItem>
  );
};
