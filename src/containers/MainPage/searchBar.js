import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Select from '../../components/Select';
import { useCategoryApi } from './categoryApi';

function SearchBar({ search }) {
  const [category, setCategory] = React.useState('');
  const [postcode, setPostcode] = React.useState('');
  const [errors, setErrors] = React.useState({});
  const [items] = useCategoryApi();

  function handlePostcodeChange(evt) {
    setPostcode(evt.target.value);
  }

  function handleSubmitButton() {
    const error = {};
    if(!category) {
      error.category = true;
    }
    if(!postcode) {
      error.postcode = true;
    }
    if(Object.entries(error).length === 0) {
      setErrors({});
      search({ category, postcode: postcode });
    }
    else setErrors(error)
  }
  return (
    <div className="search-bar">
      <Select label="Category" value={category} onChange={setCategory} items={items} error={errors.category} />
      <Input label="Postcode" value={postcode} onChange={handlePostcodeChange} error={errors.postcode} />
      <Button onClick={handleSubmitButton}>Submit</Button>
    </div>
  );
}

export default SearchBar;
