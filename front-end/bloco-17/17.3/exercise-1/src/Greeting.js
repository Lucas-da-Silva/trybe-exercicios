import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

function Greeting({ name, onNameChange }) {
  useEffect(() => {
    window.localStorage.setItem("name", name);
  }, [name]);

  return (
    <div>
        <label htmlFor="name">
          Name:
          <input
            value={name}
            onChange={(event) => onNameChange(event.target.value)}
            id="name"
          />
        </label>
    </div>
  );
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired,
};

export default Greeting;
