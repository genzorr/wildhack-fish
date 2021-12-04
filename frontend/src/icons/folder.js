import React from "react";
import { styled } from "@mui/system";
import PropTypes from 'prop-types';

const FolderIcon = styled((props) => {
    const { variant, ...other } = props;
  
    const color = variant === 'light' ? '#5048E5'/*'#C1C4D6'*/ : '#5048E5';
  
    return (
        <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path fill={color} d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"></path>
    </svg>
    );
  })``;
  
  FolderIcon.defaultProps = {
    variant: 'primary'
  };
  
  FolderIcon.propTypes = {
    variant: PropTypes.oneOf(['light', 'primary'])
  };
  
  export default FolderIcon