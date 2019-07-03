import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import Header from '../../components/Header';
import Table from '../../components/Table';
import StarRating from '../../components/StarRating';
import SearchBar from './searchBar';
import { useProApi } from './proApi';
import './styles.css';

function MainPage() {
  const [state, paginationLimit, paginationOffset, setSearch, setPaginationOffset] = useProApi();
  const headRows = [
    {
      id: 'id',
      label: 'Id'
    },
    { id: 'name', label: 'Name' },
    { id: 'postcode', label: 'Postcode' },
    {
      id: 'review_rating',
      label: 'Review Rating'
    }
  ];
  function TableContent(row) {
    return (
      <React.Fragment>
        <TableCell>{row.id}</TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.main_address.postcode}</TableCell>
        <TableCell style={{ minWidth: '170px' }}>
          <StarRating
            reviewRating={row.review_rating}
            reviewCount={row.reviews_count}
          />
        </TableCell>
      </React.Fragment>
    );
  }
  return (
    <div className="App">
      <Header />
      <SearchBar search={setSearch} />
      <Table
        headRows={headRows}
        items={state.items}
        count={state.itemsCount}
        limit={paginationLimit}
        offset={paginationOffset}
        setPaginationOffset={setPaginationOffset}
        render={TableContent}
      />
    </div>
  );
}

export default MainPage;
