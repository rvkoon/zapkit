import { Container, IContainerProps } from "../Container";
import { RenderResult } from "@testing-library/react";
import { render } from "modules/tests";

describe("Container component", () => {
  function renderComponent(props: IContainerProps): RenderResult {
    return render(<Container {...props} />);
  }

  it("should render correctly", () => {
    const { container } = renderComponent({ children: <div></div> });
    expect(container).toMatchSnapshot();
  });
});
