import { Button, MenuList, Menu, MenuItem } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const DropDownButton = (props) => {
    console.log(props)
    const child = props.children
    const items = [...props.selectionItems]
    console.log(items)
    const [anchorEl, setAnchorEl] = useState(null)

    const handleOpenMenu = (e) => {
        setAnchorEl(e.currentTarget)
    }
    const handleMenuClose = (e) => {
        setAnchorEl(null)
    }

    return (
        <>
            <Button
                aria-controls='menu'
                endIcon={<ArrowDropDownIcon fontSize="small" />}
                size="small"
                onClick={handleOpenMenu}>
                {child}
            </Button>
            <Menu MenuListProps={{
                'aria-labelledby': 'fade-button',
            }} id='menu' onClose={handleMenuClose} anchorEl={anchorEl} open={Boolean(anchorEl)}>
                {items.map((item, index) => {
                    { console.log(index + "" + { item }) }
                    return <MenuItem key={index}>{item.name}</MenuItem>
                })}
            </Menu>
        </>
    )
}

DropDownButton.propTypes = {
    selectionItems: PropTypes.array
};

export default DropDownButton
