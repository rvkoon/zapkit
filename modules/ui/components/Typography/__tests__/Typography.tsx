import { Typography, ITypographyProps } from "../Typography";
import { RenderResult } from "@testing-library/react";
import { render } from "modules/tests";

describe("Typography component", () => {
  const defaultProps: ITypographyProps = {
    content: "typography",
  };

  function renderComponent(props: ITypographyProps): RenderResult {
    return render(<Typography {...props} />);
  }

  it("should render correctly", () => {
    const { container } = renderComponent({ ...defaultProps });
    expect(container).toMatchSnapshot();
  });
});
