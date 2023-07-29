import axios from 'axios';

// export const API_URL = process.env.REACT_APP_BACKEND_URL;
// export const API_URL = 'https://www.api-admin.my11champ.com/api/v1/admin';
export const API_URL = 'https://api.kolkatafatafat.co';

export const ApiHelperFunction = async (props) => {
  const { urlPath, method, data } = props;
  let token = localStorage.getItem('token');
  var config = {
    method: `${method}`,
    url: `${API_URL}${urlPath}`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    data: data,
    Authorization: `Bearer ${token}`,
  };
  // console.log({ config });
  let responseData = '';
  await axios(config)
    .then(function (response) {
      responseData = response;
      // console.log(response, 'oooo');
    })
    .catch(function (error) {
      // console.log(error, 'err');
      if (error?.response?.status === 401) {
        // toast.error('Unauthorized');
        responseData = error;
      } else {
        responseData = error;
      }
    });
  return responseData;
};

export const ApiHelperFunctionFile = async (props) => {
  const { urlPath, method, data } = props;
  const token = localStorage.getItem('token');
  var config = {
    method: `${method}`,
    url: `${API_URL}${urlPath}`,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
    data: data,
    Authorization: `Bearer ${token}`,
  };
  console.log({ config });
  let responseData = '';
  await axios(config)
    .then(function (response) {
      responseData = response;
      // console.log(response, 'oooo');
    })
    .catch(function (error) {
      // console.log(error, 'err');
      if (error?.response?.status === 401) {
        // toast.error('Unauthorized');
        responseData = error;
      } else {
        responseData = error;
      }
    });
  return responseData;
};
