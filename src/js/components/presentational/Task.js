import React from "react";
import PropTypes from "prop-types";

const Task = ({name, status, startDate, summary, details}) => (
  <div className="Task">
    <h1>{name}</h1>
    <p>{status}</p>
    <p>{startDate.toString()}</p>
    <p>{summary}</p>
    <p>{details}</p>
  </div>
);

Task.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
  summary: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired
}

export default Task;