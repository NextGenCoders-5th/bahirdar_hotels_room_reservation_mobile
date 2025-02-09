import { LOCAL_HOST, LOCAL_HOST_IP } from '@/constants/env';
import { useMemo } from 'react';

export const useTransformedImageUrls = ({
  imageUrls,
}: {
  imageUrls: string[];
}) => {
  return useMemo(
    () =>
      imageUrls?.map((url) =>
        url?.replace(`${LOCAL_HOST}`, `${LOCAL_HOST_IP}`)
      ),
    [imageUrls]
  );
};
