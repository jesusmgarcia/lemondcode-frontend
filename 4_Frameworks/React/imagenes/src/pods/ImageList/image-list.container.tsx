import React from 'react';
import { ImageListComponent } from './image-list.component';
import { Image } from './image-list.vm';
import { getCatsCollection, getDogsCollection } from './api/';
import { mapImageListFromApiToVM } from './image-list.mapper';
import { ShopContext } from 'common/components/ShopContextProvider';

interface Props {
  useCats: boolean;
}

export const ImageListContainer: React.FC<Props> = (props) => {
  const { useCats } = props;
  const [images, setImages] = React.useState<Image[]>([]);
  const { imageList, setImageList } = React.useContext(ShopContext);

  const onLoadImageList = async () => {
    const apiImageList = useCats
      ? await getCatsCollection()
      : await getDogsCollection();
    const viewModelImageList = mapImageListFromApiToVM(apiImageList);

    imageList.forEach((cartElement) => {
      viewModelImageList.forEach((element) => {
        if (cartElement.id == element.id) element.selected = true;
      });
    });

    setImages(viewModelImageList);
  };

  React.useEffect(() => {
    onLoadImageList();
  }, []);

  return (
    <>
      <ImageListComponent ImageCollection={images} />
    </>
  );
};
