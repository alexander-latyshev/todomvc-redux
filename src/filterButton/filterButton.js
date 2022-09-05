import React from "react";
import { Link } from "react-router-dom";
import "./filterButton.css";
import classNames from "classnames";
import { connect } from "react-redux";

export class FilterButton extends React.Component {
  render() {
    const isActive = this.props.router.location.pathname === this.props.path;
    return (
      <Link
        to={this.props.path}
        className={classNames("filter-button", {
          "filter-button_active": isActive,
        })}
      >
        {this.props.name}
      </Link>
    );
  }
}

const mapDispatchToProps = {
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterButton);
