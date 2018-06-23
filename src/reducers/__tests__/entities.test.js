import entities, {initialState} from '../entities';
import { getAlbumsAction, getPhotosAction } from '../../actions';
import { initState  } from '../../../jest/moks';

const testAlbumsRequestAction = getAlbumsAction.request();
const testAlbumsSuccessAction = getAlbumsAction.success({response: initState.entities.albums});
const testPhotosRequestAction = getAlbumsAction.request();
const testPhotosSuccessAction = getPhotosAction.success({response: initState.entities.photos});

describe('entities', () => {
  it('should handle getAlbumsAction request action properly', () => {
    expect(entities(initialState, testAlbumsRequestAction)).toMatchSnapshot();
  });
  it('should handle getAlbumsAction success action properly', () => {
    expect(entities(initialState, testAlbumsSuccessAction)).toMatchSnapshot();
  });
  it('should handle getPhotosAction request action properly', () => {
    expect(entities(initialState, testPhotosRequestAction)).toMatchSnapshot();
  });
  it('should handle getPhotosAction success action properly', () => {
    expect(entities(initialState, testPhotosSuccessAction)).toMatchSnapshot();
  });
});