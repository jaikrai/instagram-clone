import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUser } from "../redux/actions";

export class Main extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    const { currentUser } = this.props;
    console.log(currentUser);
    if (currentUser == undefined) {
      return <View></View>;
    }
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text>User is logged in</Text>
      </View>
    );
  }
}
const mapDispatchProps = (dispatch) =>
  bindActionCreators({ fetchUser }, dispatch);

export default connect(null, mapDispatchProps)(Main);
