import { StyleSheet } from "react-native";

export default StyleSheet.create({
  arrow: {
    position: "absolute",
    width: 0,
    height: 0,
    borderStyle: "solid",
    flexShrink: 1,
    borderRightColor: "transparent",
    borderLeftColor: "transparent",
    borderTopColor: "transparent",
    borderBottomColor: "transparent"
  },
  hsegment: {
    position: "relative",
    marginTop: 0,
    marginRight: "auto",
    marginBottom: 0,
    marginLeft: "auto"
  }
});
