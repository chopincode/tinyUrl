import React from "react";
import { connect } from "react-redux";
import { Admin } from "../redux/stateTypes";
import { AppState } from "../configureStore";
import { Redirect } from "react-router-dom";
import { v4 } from "uuid";

type Props = LinkStateToProps;

const AdminPage: React.SFC<Props> = ({ admin }) => {
  if (!admin.isAuthentciated) {
    return <Redirect to="/" />;
  }
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Original Url</th>
          <th scope="col">Truncated Url</th>
          <th scope="col">Requested Times</th>
        </tr>
      </thead>
      <tbody>
        {admin.tinyUrlHistory.map((record, index) => {
          return (
            <tr key={v4()}>
              <th scope="row">{index + 1}</th>
              <td>{record.url}</td>
              <td>{record.truncatedUrl}</td>
              <td>{record.requestTimes}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

interface LinkStateToProps {
  admin: Admin;
}

const mapStateToProps = (state: AppState) => ({
  admin: state.admin,
});

export default connect(mapStateToProps)(AdminPage);
