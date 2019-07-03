import React from 'react';
import Badge from '@material-ui/core/Badge';
import Rating from 'material-ui-rating';

function StarRating({ reviewCount, reviewRating }) {
  return (
    <Badge badgeContent={reviewCount} color="primary">
      <Rating value={reviewRating} max={5} readOnly />
    </Badge>
  );
}

export default StarRating;
