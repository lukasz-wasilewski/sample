import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';

import PaginationItem from './paginationItem';
import './styles.css';

function EnhancedTable(props) {
  const {
    items: rows,
    count,
    limit,
    headRows,
    render,
    setPaginationOffset,
    offset
  } = props;
  const rowsPerPage = limit;

  const emptyRows = count > rowsPerPage ? rows.length - rowsPerPage : 0;

  const paginationNumbers = [];
  for (let i = 1; i <= Math.ceil(count / rowsPerPage); i++) {
    paginationNumbers.push(i);
  }

  function paginationPrev() {
    if (offset > 0) setPaginationOffset(offset - limit);
  }

  function paginationNext() {
    if (offset < count - limit) setPaginationOffset(offset + limit);
  }

  function paginationClick(i) {
    return () => setPaginationOffset(i * limit);
  }

  return (
    <div className="root">
      <Paper className="paper">
        <div className="table-wrapper">
          <Table className="table" aria-labelledby="tableTitle">
            <TableHead>
              <TableRow>
                {headRows.map(row => (
                  <TableCell key={row.id}>
                    <span>{row.label}</span>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => {
                return (
                  <TableRow hover tabIndex={-1} key={row.id}>
                    {render(row)}
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="pagination">
          <PaginationItem onClick={paginationPrev}>
            <ChevronLeft />
          </PaginationItem>
          {paginationNumbers.map(i => (
            <PaginationItem
              className={i-1 === offset / limit ? ' active' : ''}
              key={i}
              onClick={paginationClick(i - 1)}
            >
              {i}
            </PaginationItem>
          ))}
          <PaginationItem onClick={paginationNext}>
            <ChevronRight />
          </PaginationItem>
        </div>
      </Paper>
    </div>
  );
}

export default EnhancedTable;
