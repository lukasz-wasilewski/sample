import { useState, useEffect } from 'react';
import { get } from '../../api';

export const useCategoryApi = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getCategories() {
      //TODO: add data from faker.js
      /*const url = '';
      const { data } = await get(url);*/
      const data = [];
      setItems(data.filter((c) => !c.hidden));
    }
    getCategories();
  }, []);

  return [items];
}