import React from 'react';
import { CheckoutListComponent } from './checkout-list.component';
import { Image } from '../ImageList/image-list.vm';
import { ShopContext } from 'common/components/ShopContextProvider';

export const CheckoutListContainer: React.FC = () => {
  const [images, setImages] = React.useState<Image[]>([]);
  const { imageList, setImageList } = React.useContext(ShopContext);

  const onLoadCheckoutList = () => {
    setImages(imageList);
  };

  React.useEffect(() => {
    onLoadCheckoutList();
  }, [, imageList]);

  return (
    <>
      <CheckoutListComponent ImageCollection={images} />
    </>
  );
};
