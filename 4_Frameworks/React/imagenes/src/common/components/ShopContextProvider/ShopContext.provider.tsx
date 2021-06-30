import React from 'react';
import * as viewModel from '../../../pods/ImageList/image-list.vm';

interface ShopContextType {
  imageList: viewModel.Image[];
  setImageList: (value: viewModel.Image[]) => void;
}

export const ShopContext = React.createContext<ShopContextType>({
  imageList: [],
  setImageList: (value) => {},
});

export const ShopContextProvider = (props) => {
  const [imageList, setImageList] = React.useState([]);

  return (
    <ShopContext.Provider
      value={{
        imageList,
        setImageList,
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};
