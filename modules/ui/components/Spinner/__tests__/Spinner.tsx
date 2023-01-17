import { Spinner, ISpinnerProps} from '../Spinner'
import { RenderResult } from '@testing-library/react'
import { render } from 'modules/tests'

describe("Spinner component", () => {
    function renderComponent(props: ISpinnerProps): RenderResult {
    return render(<Spinner {...props}/>)
    }

    it('should render correctly', () => {
    const { container } = renderComponent({})
    expect(container).toMatchSnapshot()
    })
})