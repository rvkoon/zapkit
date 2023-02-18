import { User, IUserProps} from '../User'
import { RenderResult } from '@testing-library/react'
import { render } from '@Tests'

describe("User component", () => {
    function renderComponent(props: IUserProps): RenderResult {
    return render(<User {...props}/>)
    }

    it('should render correctly', () => {
    const { container } = renderComponent({})
    expect(container).toMatchSnapshot()
    })
})