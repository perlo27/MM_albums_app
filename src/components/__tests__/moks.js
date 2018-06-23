import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

export const testPhoto = {
  albumId: 1,
  id: 1,
  title: 'Test',
  url: 'url',
  thumbnailUrl: 'thumbnailUrl',
};


const initState = {
  entities: {
    photos: {
      1: [testPhoto],
    },
    albums: [],
  },
};

export const store = mockStore(initState);
export const storeWithoutPhoto = mockStore({
  entities: {
    photos: {
      1: [],
    },
    albums: [],
  },
});

export const navigation = {
  navigate: jest.fn(),
  goBack: jest.fn(),
  state: {
    params: {
      id: 1,
      albumId: 1,
    }
  },
};