export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export const requestType = name => `${name}_${REQUEST}`;
export const successType = name => `${name}_${SUCCESS}`;
export const errorType = name => `${name}_${ERROR}`;

export const generateAction = name => ({
  request: () => ({ type: requestType(name) }),
  success: ({response}) => ({
    type: successType(name),
    response,
  }),
  failure: error => ({ type: errorType(name), error }),
});
