import { LOCAL_HOST, LOCAL_HOST_IP } from '@/constants/env';

export const useTransformedImageUrls = ({
  imageUrls,
}: {
  imageUrls: string[];
}) => {
  const transformedImageUrls = imageUrls.map((url) =>
    url.replace(`${LOCAL_HOST}`, `${LOCAL_HOST_IP}`)
  );
  return transformedImageUrls;
};
