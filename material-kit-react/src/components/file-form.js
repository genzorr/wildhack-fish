import { useForm} from 'react-hook-form';
import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    InputAdornment,
    SvgIcon, Typography
  } from '@mui/material';
  import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
  import { Menu } from '@mui/material';
import { useState } from 'react';

  const FileForm = (props) => {
    // console.log(props)
    // const child = props.children
    // const items = [...props.selectionItems]
    // console.log(items)
    const [anchorEl, setAnchorEl] = useState(null)

    const handleOpenMenu = (e) => {
        setAnchorEl(e.currentTarget)
    }
    const handleMenuClose = (e) => {
        setAnchorEl(null)
    }

    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <>
         <form onSubmit={handleSubmit(onSubmit)}>
                    <input ref={register} type="file" name="picture" />
                    <button>Submit</button>
                    </form>
            {/* <Button
                aria-controls='menu'
                endIcon={<ArrowDropDownIcon fontSize="small" />}
                size="small"
                onClick={handleOpenMenu}>
                {child}
            </Button>

            <Menu MenuListProps={{
                'aria-labelledby': 'fade-button',
            }} id='menu' onClose={handleMenuClose} anchorEl={anchorEl} open={Boolean(anchorEl)}>
               
                { {items.map((item, index) => {
                    { console.log(index + "" + { item }) }
                    return <MenuItem>{item.name}</MenuItem>
                })} 
            </Menu> */}
        </>
    )

}

FileForm.propsType = {

}

export default FileForm