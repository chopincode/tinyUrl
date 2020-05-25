import React, { useState, ChangeEvent, FormEvent, Fragment } from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { loginAdmin, LoginBody } from "../redux/actions/adminAction";
import { AppState } from "../configureStore";
import AlertMsg from "./AlertMsg";
import { v4 } from "uuid";
import { Admin } from "../redux/stateTypes";

type Props = LinkStateProps & LinkDispatchToProps;

const AdminLogin: React.SFC<Props> = ({ loginAdmin, admin }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFormData({ ...formData, [event.target.name]: value });
  };

  const history = useHistory();

  const handleSubmit = (event: FormEvent<HTMLElement>) => {
    event.preventDefault();
    loginAdmin(formData);
    if (admin.isAuthentciated) {
      history.push("/admin");
    }
  };

  const { username, password } = formData;

  const alertMsgs = useSelector((state: AppState) => state.alert);
  return (
    <Fragment>
      {alertMsgs.length !== 0
        ? alertMsgs.map((alertMsg) => {
            return <AlertMsg alert={alertMsg} key={v4()} />;
          })
        : null}
      <form style={{ width: "250px" }} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Admin UserName</label>
          <input
            type="text"
            className="form-control"
            name="username"
            onChange={handleChange}
            value={username}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            onChange={handleChange}
            value={password}
          />
        </div>
        <input type="submit" value="Login" className="btn btn-primary btn-sm" />
        <Link to="/" className="btn btn-sm btn-danger ml-3">
          Home
        </Link>
      </form>
    </Fragment>
  );
};

interface LinkStateProps {
  admin: Admin;
}

interface LinkDispatchToProps {
  loginAdmin: (loginBody: LoginBody) => void;
}

const mapStateToProps = (state: AppState) => ({
  admin: state.admin,
});

export default withRouter(connect(mapStateToProps, { loginAdmin })(AdminLogin));
