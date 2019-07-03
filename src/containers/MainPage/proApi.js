import { useState, useEffect, useReducer } from 'react';
import { post } from '../../api';

const FETCH_SUCCESS_CONSTANT = 'FETCH_SUCCESS';
const FETCH_ERROR_CONSTANT = 'FETCH_ERROR';

const crateFetchSuccessAction = (itemsCount, items) => {
  return {
    type: FETCH_SUCCESS_CONSTANT,
    itemsCount,
    items
  };
};

const createFetchErrorAction = err => {
  return {
    type: FETCH_ERROR_CONSTANT,
    err
  };
};

const initialState = {
  itemsCount: 0,
  items: [],
  error: false
};

function reducer(state, action) {
  switch (action.type) {
    case FETCH_SUCCESS_CONSTANT:
      return { itemsCount: action.itemsCount, items: action.items };
    case FETCH_ERROR_CONSTANT:
      return { error: true };
    default:
      throw new Error();
  }
}

function cleanNameFromHash(pro) {
  return pro.name
    .split(' ')
    .slice(0, -1)
    .join(' ');
}

function prepareCategoryForRequest(postcode) {
  return postcode
    .trim()
    .toLowerCase()
    .split(' ')
    .join('');
}

export const useProApi = () => {
  const [search, setSearch] = useState(null);
  const paginationLimit = 20; // in example, pagination limit can not be changed
  const [paginationOffset, setPaginationOffset] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    async function getPro({ category, postcode }) {
      const paginationHeaders = {
        'x-pagination-limit': paginationLimit,
        'x-pagination-offset': paginationOffset
      };
      console.log(paginationOffset);
      const url = '';
      try {
        const body = {
          category_id: category,
          location: prepareCategoryForRequest(postcode)
        };
        //TODO: add data from faker.js
        //const { data, headers } = await post(url, body, paginationHeaders);
        const data = { response: { pros: [] } };
        const headers = { count: 0 };
        dispatch(
          crateFetchSuccessAction(
            headers.count,
            data.response.pros.map(pro => ({
              ...pro,
              name: cleanNameFromHash(pro)
            }))
          )
        );
      } catch (err) {
        dispatch(createFetchErrorAction(err));
      }
    }
    if (search !== null) getPro(search);
  }, [search, paginationOffset]);

  return [
    state,
    paginationLimit,
    paginationOffset,
    setSearch,
    setPaginationOffset
  ];
};
