import {
  REQUEST,
  ERROR,
  SUCCESS,
  requestType,
  successType,
  errorType,
  generateAction
}  from '../common';

const testName = 'testName';
const testResponse = 'testResponse';
const testErr = 'testErr';

describe('common actions', () => {
  it('should return proper action types', () => {
    expect(requestType(testName)).toBe(`${testName}_${REQUEST}`);
    expect(successType(testName)).toBe(`${testName}_${SUCCESS}`);
    expect(errorType(testName)).toBe(`${testName}_${ERROR}`);
  });

  it('should generate proper action', () => {
    const {request, success,  failure} = generateAction(testName);
    expect(request()).toMatchObject({ type: requestType(testName) });
    expect(success({response: testResponse})).toMatchObject({ type: successType(testName), response: testResponse });
    expect(failure(testErr)).toMatchObject({ type: errorType(testName), error: testErr });
  });

});

