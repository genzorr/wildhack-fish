import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { Empty } from 'antd';
import 'antd/dist/antd.css';


import {
    Avatar,
    Box,
    Card,
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    Typography
} from '@mui/material';
import { getInitials } from '../../utils/get-initials';

export const AnalyzedSetResults = ({ photos, ...rest }) => {
    console.log(photos)
    const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(0);

    const handleLimitChange = (event) => {
        setLimit(event.target.value);
    };

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <Card {...rest}>
     
        {(photos.length == 0)
          ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          : <Box sx={{ minWidth: 1050}}> <PerfectScrollbar>
                        <Box sx={{ minWidth: 1050 }}>

            <Table sx={{
            maxHeight: "30rem",
            overflow: "auto",
          }}>
            <TableHead>
              <TableRow>
                {/* <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedCustomerIds.length === photos.length}
                  color="primary"
                  indeterminate={
                    selectedCustomerIds.length > 0
                    && selectedCustomerIds.length < photos.length
                  }
                  onChange={handleSelectAll}
                />
              </TableCell> */}
                   <TableCell>
                                    Файл
                                </TableCell>
                           <TableCell>
                                    Дата фотографии
                                </TableCell>
                           
                                <TableCell>
                                    Кол-во определённых рыб
                                </TableCell>
                                <TableCell>
                                    Cтепень уверенности
                                </TableCell>
                                <TableCell>
                                    Статус обработки
                                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {photos.slice(0, limit).map((customer) => (

                  <TableRow
                    hover
                    key={customer.name}
                    selected={selectedCustomerIds.indexOf(customer.name) !== -1}
                  >
                  <TableCell>
                    {customer.date}
                    </TableCell>
                    <TableCell>
                      <Box
                        sx={{
                          alignItems: 'center',
                          display: 'flex'
                        }}
                      >
                        <Typography
                          color="textPrimary"
                          variant="body1"
                        >
                          {customer.count}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      { /* TODO later add here not count (for fish) but count for pics*/}
                      {customer.conf}
                    </TableCell>
                    <TableCell>
                      {`${customer.status}`}
                    </TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
          </Box>
    </PerfectScrollbar> 
    <TablePagination
      component="div"
      count={photos.length}
      onPageChange={handlePageChange}
      onRowsPerPageChange={handleLimitChange}
      page={page}
      rowsPerPage={limit}
      rowsPerPageOptions={[5, 10, 25]}
    /></Box>}
    
  </Card>
    );
};

AnalyzedSetResults.propTypes = {
    photos: PropTypes.array.isRequired
};
