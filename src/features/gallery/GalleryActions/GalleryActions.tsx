import React from 'react';
import { Button } from '@features/ui';
import { GalleryActionsContainer } from './styled';

export const GalleryActions = (): JSX.Element => (
  <GalleryActionsContainer>
    <Button>Upload</Button>
  </GalleryActionsContainer>
);
