import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

const initState = {
  entities: {
    photos: {
      1: [
        {
          albumId: 1,
          id: 1,
          title: 'Test',
          url: 'url',
          thumbnailUrl: 'thumbnailUrl',
        },
      ],
      2: [
        {
          albumId: 2,
          id: 2,
          title: 'Test2',
          url: 'url2',
          thumbnailUrl: 'thumbnailUrl',
        },
      ],
    },
    albums: [
      {
        userId: 1,
        id: 1,
        title: 'Quidem molestiae enim',
      },
      {
        userId: 2,
        id: 2,
        title: 'Quidem molestiae enim 1',
      },
    ],
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
    },
  },
};
