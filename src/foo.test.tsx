import { render } from "@testing-library/react-native";
import React from "react";
import { MockedNavigator } from "./MockedNavigator";
import { View } from "react-native";

test("foo", () => {
  const component = render(
    <MockedNavigator name="MockedScreen">{() => <View />}</MockedNavigator>
  );
});

