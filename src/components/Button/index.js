import React from 'react';
import Button from '@material-ui/core/Button';

function ButtonComponent(props) {
  return <Button variant="contained" color="primary" {...props} />;
}

export default ButtonComponent;
