import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';


const MainComp = (prop) => (
  <div>
    <Button variant="contained">log in</Button>
    <Button variant="contained">sign up</Button>
  </div>
);

MainComp.propTypes = {};

MainComp.defaultProps = {};

export default MainComp;
