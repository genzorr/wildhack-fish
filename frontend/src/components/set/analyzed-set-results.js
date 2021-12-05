import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import NextLink from 'next/link';

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

    const handleSelectAll = (event) => {
        let newSelectedCustomerIds;

        if (event.target.checked) {
            newSelectedCustomerIds = photos.map((photo) => photo.id);
        } else {
            newSelectedCustomerIds = [];
        }

        setSelectedCustomerIds(newSelectedCustomerIds);
    };

    const handleSelectOne = (event, id) => {
        const selectedIndex = selectedCustomerIds.indexOf(id);
        let newSelectedCustomerIds = [];

        if (selectedIndex === -1) {
            newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
        } else if (selectedIndex === 0) {
            newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
        } else if (selectedIndex === selectedCustomerIds.length - 1) {
            newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelectedCustomerIds = newSelectedCustomerIds.concat(
                selectedCustomerIds.slice(0, selectedIndex),
                selectedCustomerIds.slice(selectedIndex + 1)
            );
        }

        setSelectedCustomerIds(newSelectedCustomerIds);
    };

    const handleLimitChange = (event) => {
        setLimit(event.target.value);
    };

    const handlePageChange = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <Card {...rest}>
            <PerfectScrollbar>
                <Box sx={{ minWidth: 1050 }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {/* <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.length === customers.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0
                      && selectedCustomerIds.length < customers.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell> */}
                                <TableCell>
                                    Дата фотографии
                                </TableCell>
                                <TableCell>
                                    файл
                                </TableCell>
                                <TableCell>
                                    Кол-во определённых рыб
                                </TableCell>
                                <TableCell>
                                    Средняя степень уверенности
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {photos.slice(0, limit).map((photo) => {
                                console.log(photo)
                                return <TableRow
                                    hover
                                    key={photo.id}
                                    selected={selectedCustomerIds.indexOf(photo.id) !== -1}
                                >
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
                                                {photo.date}
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        {photo.name}
                                    </TableCell>
                                    <TableCell>
                                        {`${photo.count}`}
                                    </TableCell>
                                    <TableCell>
                                        {photo.degree}
                                    </TableCell>

                                </TableRow>
                            })}
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
            />
        </Card>
    );
};

AnalyzedSetResults.propTypes = {
    photos: PropTypes.array.isRequired
};
