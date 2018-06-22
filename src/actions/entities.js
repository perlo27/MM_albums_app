import { generateAction } from './common';

export const GET_ALBUMS = 'GET_ALBUMS';
export const getAlbumsAction = generateAction(GET_ALBUMS);

export const GET_PHOTOS = 'GET_PHOTOS';
export const getPhotosAction = generateAction(GET_PHOTOS);