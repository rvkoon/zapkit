import { Box, IBoxProps } from "../Box";
import { RenderResult } from "@testing-library/react";
import { render } from "modules/tests";

describe("Box component", () => {
  function renderComponent(props: IBoxProps): RenderResult {
    return render(<Box {...props} />);
  }

  it("should render correctly", () => {
    const { container } = renderComponent({ children: <div></div> });
    expect(container).toMatchSnapshot();
  });
});
