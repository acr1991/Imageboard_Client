import React from "react";
import { getImages } from "../actions";
import { connect } from "react-redux";
import List from "./List";
class ListContainer extends React.Component {
  componentDidMount() {
    this.props.getImages();
  }
  render() {
    return <List loggedIn={this.props.loggedIn} images={this.props.images} />;
  }
}
function mapStateToProps(state) {
  console.log(state.loggedIn, state);

  return { images: state.image, loggedIn: state.user };
}
const mapDispatchToProps = { getImages };
export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
