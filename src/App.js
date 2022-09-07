import React from "react";
import Header from "./header/header.js";
import Footer from "./footer/footer.js";
import Main from "./main/main.js";
import "./app.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";

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
    // console.log(test);
    // console.log(this.props);
    localStorage.setItem("react-todos", JSON.stringify(this.props.todoList));
    return (
      <div className="todos">
        <Header />
        <Main router={this.props.router} />
        <Footer router={this.props.router} />
      </div>
    );
  }
}

const mapDispatchToProps = {};

const mapStateToProps = (state) => {
  const todos = state.todos;
  const todoList = state.todos.todoList;
  const todo = state.todos.todoList.map((todo) => todo);
  return { todoList, state };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
