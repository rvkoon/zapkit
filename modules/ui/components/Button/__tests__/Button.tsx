import { Button, IButtonProps } from "../Button";
import { RenderResult } from "@testing-library/react";
import { render } from "modules/tests";

describe("Button component", () => {
  function renderComponent(props: IButtonProps): RenderResult {
    return render(<Button {...props} />);
  }

  it("should render correctly", () => {
    const { container } = renderComponent({ content: "Click me" });
    expect(container).toMatchSnapshot();
  });
});
