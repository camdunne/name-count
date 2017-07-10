import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ handleSubmit, handleChange, value }) => (
  <center>
    <form onSubmit={handleSubmit}>
      <label htmlFor="xmlfile">
        {'Enter an xml file:  '}
        <input
          type="text"
          name="xmlfile"
          value={value}
          onChange={handleChange}
        />
      </label>
      <button id="submit" type="submit" value="Submit" />
    </form>
  </center>
);
Form.defaultProps = {
  value: '',
};
Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default Form;
