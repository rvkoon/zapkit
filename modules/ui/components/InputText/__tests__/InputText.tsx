import { InputText, IInputTextProps } from "../InputText";
import { RenderResult } from "@testing-library/react";
import { render } from "modules/tests";

describe("InputText component", () => {
  const defaultProps: IInputTextProps = {
    placeholder: "placeholder",
    name: "name",
    value: "value",
    onChange: () => null,
  };

  function renderComponent(props: IInputTextProps): RenderResult {
    return render(<InputText {...defaultProps} {...props} />);
  }

  it("should render correctly", () => {
    const { container } = renderComponent({ ...defaultProps });
    expect(container).toMatchSnapshot();
  });
});
