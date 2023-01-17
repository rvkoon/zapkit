import { FieldGroup, IFieldGroupProps } from "../FieldGroup";
import { RenderResult } from "@testing-library/react";
import { render } from "modules/tests";

describe("FieldGroup component", () => {
  function renderComponent(props: IFieldGroupProps): RenderResult {
    return render(<FieldGroup {...props} />);
  }

  it("should render correctly", () => {
    const { container } = renderComponent({
      htmlFor: "test",
      children: <div></div>,
    });
    expect(container).toMatchSnapshot();
  });
});
