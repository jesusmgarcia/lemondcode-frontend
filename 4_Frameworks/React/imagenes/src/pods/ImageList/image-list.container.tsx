import React from 'react';
import { ImageListComponent } from './image-list.component';
import { Image } from './image-list.vm';
import { getCatsCollection, getDogsCollection } from './api/';
import { mapImageListFromApiToVM } from './image-list.mapper';

interface Props {
  useCats: boolean;
}

export const ImageListContainer: React.FC<Props> = (props) => {
  const { useCats } = props;
  const [images, setImages] = React.useState<Image[]>([]);

  const onLoadImageList = async () => {
    const apiImageList = useCats
      ? await getCatsCollection()
      : await getDogsCollection();
    const viewModelImageList = mapImageListFromApiToVM(apiImageList);
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
