import { Layout, ILayoutProps } from "../Layout";
import { RenderResult } from "@testing-library/react";
import { render } from "modules/tests";
import mockRouter from "next-router-mock";

jest.mock("next/router", () => require("next-router-mock"));
describe("Layout component", () => {
  const defaultProps: ILayoutProps = {
    children: <div></div>,
  };

  function renderComponent(props: ILayoutProps): RenderResult {
    return render(<Layout {...props} />);
  }

  it("should render correctly", () => {
    const { container } = renderComponent({ ...defaultProps });
    expect(container).toMatchSnapshot();
  });
});
