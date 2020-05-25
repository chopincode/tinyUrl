import React, { Fragment, useState, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const TinyUrlForm = () => {
  const [formData, setFormdata] = useState({ url: "" });

  const [truncatedUrl, setTruncatedUrl] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFormdata({ ...formData, [event.target.name]: value });
  };

  const handleClick = async () => {
    const res = await axios.post("/api/data", formData);
    setTruncatedUrl(res.data.result);
  };
  return (
    <Fragment>
      <Link to="/login" className="btn btn-primary btn-sm mt-3">
        Admin
      </Link>
      <div className="text-center mt-5">
        <h4>Enter a Long URL to make tiny</h4>
        <input
          type="text"
          className="rounded"
          name="url"
          onChange={handleChange}
          value={formData.url}
        />
      </div>
      <div className="text-center">
        {" "}
        <button className="btn btn-success btn-sm mt-2" onClick={handleClick}>
          Truncate
        </button>
      </div>
      <p className="text-center">http://www.chrisTinyUrl/{truncatedUrl}</p>
    </Fragment>
  );
};

export default TinyUrlForm;
