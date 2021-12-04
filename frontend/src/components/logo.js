import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

// const LogoOld = styled((props) => {
//   const { variant, ...other } = props;

//   const color = variant === 'light' ? '#C1C4D6' : '#5048E5';

//   return (
//     <svg
//       width="42"
//       height="42"
//       viewBox="0 0 42 42"
//       xmlns="http://www.w3.org/2000/svg"
//       {...other}>
//       <path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M22.6744 4.50247L31.9038 9.66459C32.117 9.78381 32.2944 9.95738 32.4178 10.1674C32.5413 10.3775 32.6064 10.6164 32.6064 10.8597C32.6064 11.1031 32.5413 11.342 32.4178 11.5521C32.2944 11.7621 32.117 11.9357 31.9038 12.0549L22.6745 17.2172C22.0854 17.5467 21.4212 17.7198 20.7456 17.7198C20.0698 17.7198 19.4056 17.5467 18.8166 17.2172L9.5873 12.0549C9.37415 11.9357 9.1967 11.7621 9.0732 11.5521C8.94971 11.342 8.8846 11.1031 8.8846 10.8597C8.8846 10.6164 8.94971 10.3775 9.0732 10.1674C9.1967 9.95738 9.37415 9.78381 9.5873 9.66459L18.8166 4.50247C19.4056 4.17301 20.0698 4 20.7456 4C21.4212 4 22.0854 4.17301 22.6744 4.50247Z"
//         fill={color}
//       />
//       <path
//         opacity="0.7"
//         d="M22.6244 9.34853L35.8422 16.7415C36.0554 16.8607 36.2328 17.0343 36.3563 17.2443C36.4798 17.4544 36.5449 17.6933 36.5449 17.9366C36.5449 18.18 36.4798 18.419 36.3563 18.629C36.2328 18.8391 36.0554 19.0126 35.8422 19.1319L22.6244 26.5248C22.0355 26.8541 21.3712 27.0272 20.6956 27.0272C20.0199 27.0272 19.3557 26.8541 18.7667 26.5248L5.54893 19.1319C5.33578 19.0126 5.15833 18.8391 5.03483 18.629C4.91133 18.419 4.84623 18.18 4.84623 17.9366C4.84623 17.6933 4.91133 17.4544 5.03483 17.2443C5.15833 17.0343 5.33578 16.8607 5.54893 16.7415L18.7667 9.34853C19.3557 9.01916 20.0199 8.84615 20.6956 8.84615C21.3712 8.84615 22.0355 9.01916 22.6244 9.34853Z"
//         fill={color}
//       />
//       <path
//         opacity="0.4"
//         d="M22.9257 14.1939L41.2984 24.4703C41.5113 24.5894 41.6884 24.7626 41.8117 24.9724C41.935 25.182 42 25.4206 42 25.6636C42 25.9065 41.935 26.1451 41.8117 26.3548C41.6884 26.5645 41.5113 26.7378 41.2984 26.8568L22.9257 37.1329C22.3377 37.4618 21.6745 37.6346 21 37.6346C20.3254 37.6346 19.6623 37.4618 19.0743 37.1329L0.701542 26.8568C0.488743 26.7378 0.311581 26.5645 0.188286 26.3548C0.0649948 26.1451 0 25.9065 0 25.6636C0 25.4206 0.0649948 25.182 0.188286 24.9724C0.311581 24.7626 0.488743 24.5894 0.701542 24.4703L19.0743 14.1939C19.6623 13.8651 20.3254 13.6923 21 13.6923C21.6745 13.6923 22.3377 13.8651 22.9257 14.1939Z"
//         fill={color}
//       />
//     </svg>
//   );
// })``;


export const Logo = styled((props) => {
  const { variant, ...other } = props;

  const color = variant === 'light' ? '#C1C4D6' : '#5048E5';

  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="31"
    height="36"
    version="1.2"
    viewBox="0 0 36.85 43.041"
  >
    <path
      fill={color}
      d="M28.383 24.883l.172.101c.226.133.53.04.68-.21l.535-.907c.148-.25.09-.562-.137-.695l-.406-.242c-.016-.008-.032-.008-.047-.016a.887.887 0 00-.41-.105c-1.45.011-3.063.757-4.926 1.617-.23.105-.461.21-.696.32-.433-3.121-1.496-6.308-4.84-8.293-4.886-2.898-10.39-.332-11.058.793-.668 1.129-.285 7.188 4.605 10.09 3.34 1.98 6.649 1.387 9.598.273.016.254.035.508.05.758.138 2.051.259 3.82.942 5.102a.878.878 0 00.325.34l.406.242c.226.133.531.039.68-.211l.535-.906c.148-.25.086-.563-.137-.696l-.172-.101c-.414-.942-.52-2.477-.629-4.102a73.993 73.993 0 00-.09-1.226c.383-.172.754-.344 1.121-.512 1.477-.684 2.875-1.324 3.899-1.414zm-15.453.637c-3.64-2.16-4.035-6.102-3.98-7.266.991-.602 4.64-2.149 8.284.012 2.809 1.668 3.668 4.445 4.024 7.293-2.668 1.05-5.516 1.628-8.328-.04zm0 0"
    ></path>
    <path
      fill="none"
      stroke={color}
      strokeWidth="2.835"
      d="M35.434 24.618c0 9.39-7.613 17.008-17.008 17.008S1.418 34.008 1.418 24.618c0-9.395 7.613-17.009 17.008-17.009s17.008 7.614 17.008 17.009zm0 0"
    ></path>
    <path
      fill={color}
      stroke={color}
      strokeWidth="0.992"
      d="M14.16.496h8.532v3.77h-8.531zm0 0"
    ></path>
    <path
      fill={color}
      stroke={color}
      strokeWidth="0.582"
      d="M36.359 6.918l-3.355 3.715-1.641-1.485 3.355-3.71zm0 0"
    ></path>
  </svg>
  );
})``;

Logo.defaultProps = {
  variant: 'primary'
};

Logo.propTypes = {
  variant: PropTypes.oneOf(['light', 'primary'])
};