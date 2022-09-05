import React from "react";
import Header from "./header/header.js";
import Footer from "./footer/footer.js";
import Main from "./main/main.js";
import "./app.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}

class App extends React.Component {
  render() {
    return (
      <div className="todos">
        <Header />
        <Main router={this.props.router} />
        <Footer router={this.props.router} />
      </div>
    );
  }
}
export default withRouter(App);
