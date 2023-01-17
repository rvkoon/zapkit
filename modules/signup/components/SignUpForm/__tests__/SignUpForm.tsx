import { cleanup, RenderResult, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { render } from "modules/tests";
import "@testing-library/jest-dom";
import { SignUpForm, ISignUpFormProps } from "../SignUpForm";
import { useCreateUser } from "@Api";

const user = userEvent.setup();
const createUserMock = jest.fn();
jest.mock("@Api", () => ({
  useCreateUser: jest.fn(),
}));

describe("SignUpForm component", () => {
  const _getFunctionMock = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    targetFunction: (...args: any[]) => any
  ): jest.MockedFunction<typeof targetFunction> => {
    return targetFunction as jest.MockedFunction<typeof targetFunction>;
  };

  beforeEach(() => {
    _getFunctionMock(useCreateUser).mockImplementation(() => ({
      createUser: createUserMock,
      isCreatingUser: false,
    }));
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  function renderComponent(props: ISignUpFormProps): RenderResult {
    return render(<SignUpForm {...props} />);
  }
  it("should render the form", () => {
    const { getByTestId } = renderComponent({});
    expect(getByTestId("signUpForm")).toBeInTheDocument();
  });

  it("should display email error if empty", async () => {
    const { getByTestId } = renderComponent({});

    const submitBtn = getByTestId("signUpFormSubmitButton");
    await user.click(submitBtn as Element);

    await waitFor(() => {
      expect(getByTestId("inputTextEmailErrorMessage")).toBeInTheDocument();
    });
  });

  it("should display email error if not valid", async () => {
    const { container, getByTestId } = renderComponent({});

    const input = container.querySelector("input[name='email']");
    const submitBtn = getByTestId("signUpFormSubmitButton");

    await user.type(input as Element, "invalid@email.c");
    await user.click(submitBtn as Element);
    await waitFor(() => {
      expect(getByTestId("inputTextEmailErrorMessage")).toBeInTheDocument();
    });
  });

  it("should display password error if empty", async () => {
    const { getByTestId } = renderComponent({});

    const submitBtn = getByTestId("signUpFormSubmitButton");
    await user.click(submitBtn as Element);

    await waitFor(() => {
      expect(getByTestId("inputTextPasswordErrorMessage")).toBeInTheDocument();
    });
  });

  it("should display email error if not valid", async () => {
    const { container, getByTestId } = renderComponent({});

    const input = container.querySelector("input[name='password']");
    const submitBtn = getByTestId("signUpFormSubmitButton");

    await user.type(input as Element, "2small");
    await user.click(submitBtn as Element);
    await waitFor(() => {
      expect(getByTestId("inputTextPasswordErrorMessage")).toBeInTheDocument();
    });
  });

  it("should call createUser if form is valid", async () => {
    const { container, getByTestId } = renderComponent({});

    const inputEmail = container.querySelector("input[name='email']");
    const inputPassword = container.querySelector("input[name='password']");
    const submitBtn = getByTestId("signUpFormSubmitButton");

    await user.type(inputEmail as Element, "correct@email.com");
    await user.type(inputPassword as Element, "12345678");
    await user.click(submitBtn as Element);
    await waitFor(() => {
      expect(createUserMock).toHaveBeenCalled();
    });
  });
});
