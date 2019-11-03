import React from "react";
import { View, ViewStyle } from "react-native";
import SevenSegmentDisplay, { bitReadAll, segmentMap } from "../src/index";

import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<SevenSegmentDisplay />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("render example README ", () => {
  const tree = renderer.create(
    <View style={{ flexDirection: "row", backgroundColor: "black", alignSelf : "center" }}>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "F", "a", "b", "c"].map(value => (
        <SevenSegmentDisplay
          key={value}
          value={String(value)}
          onColor="green"
        />
      ))}
    </View>
  );
  expect(tree).toMatchSnapshot();
});
it("number render correctly", () => {
  const tree = renderer
    .create(
      <View>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "F", "a", "b", "c"].map(value => (
          <SevenSegmentDisplay key={value} value={String(value)} />
        ))}
      </View>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("bit read all correctly", () => {
  expect.assertions(2);
  expect(segmentMap[0]).toBe(0x3f);
  expect(bitReadAll(segmentMap[0])).toStrictEqual([
    false,
    true,
    true,
    true,
    true,
    true,
    true
  ]);
});
