import React from "react";
import { connect } from "react-redux";
import { Alert } from "../redux/stateTypes";

interface OwnProps {
  alert: Alert;
}

type Props = OwnProps;

const AlertMsg: React.SFC<OwnProps> = ({ alert }) => {
  return <div className={`alert alert-${alert.alertType}`}>{alert.msg}</div>;
};

export default connect()(AlertMsg);
