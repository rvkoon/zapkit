import { Navigation, INavigationProps } from "../Navigation";
import { RenderResult } from "@testing-library/react";
import { render } from "modules/tests";
import mockRouter from "next-router-mock";

jest.mock("next/router", () => require("next-router-mock"));

describe("Navigation component", () => {
  function renderComponent(props: INavigationProps): RenderResult {
    return render(<Navigation {...props} />);
  }

  it("should render correctly", () => {
    const { container } = renderComponent({});
    expect(container).toMatchSnapshot();
  });
});
