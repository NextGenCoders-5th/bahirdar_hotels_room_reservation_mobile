import { useMemo } from 'react';
import { LOCAL_HOST, LOCAL_HOST_IP } from '@/constants/env';

export const useTransformImageUrl = ({ imageUrl }: { imageUrl: string }) => {
  // return useMemo(
  //   () => imageUrl?.replace(`${LOCAL_HOST}`, `${LOCAL_HOST_IP}`),
  //   [imageUrl]
  // );
  const transformedImageUrl = imageUrl?.replace(
    `${LOCAL_HOST}`,
    `${LOCAL_HOST_IP}`
  );
  return transformedImageUrl;
};
