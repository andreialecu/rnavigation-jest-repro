import { render } from "@testing-library/react-native";
import React from "react";
import { Text } from "react-native";

function TestText({ children }) {
  return <Text>{children}</Text>;
}

function TestComponent() {
  return (
    <TestText>
      <TestText>Foo</TestText>
    </TestText>
  );
}

test('shows bug', () => {
  const component = render(<TestComponent />);
  component.getByText('Foo'); // Found multiple elements with text: Foo
});