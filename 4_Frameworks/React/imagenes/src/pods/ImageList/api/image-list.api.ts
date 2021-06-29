import { Image } from './image-list.api.model';
import { mockImagesCats, mockImagesDogs } from './image-list.mock-data';

let imagesCats = [...mockImagesCats];
let imagesDogs = [...mockImagesDogs];

export const getCatsCollection = async (): Promise<Image[]> => {
    return imagesCats;
}

export const getDogsCollection = async (): Promise<Image[]> => {
    return imagesDogs;
}