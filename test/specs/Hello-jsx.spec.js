import HelloJsx from 'src/Hello.jsx'
import { createVM } from '../helpers/utils.js'

describe('Hello.jsx', function () {
  it('should render correct contents', function () {
    const vm = createVM(this, `
<HelloJsx></HelloJsx>
`, { components: { HelloJsx }})
    vm.$el.querySelector('h1').textContent.should.eql('Hello JSX')
  })

  it('renders JSX too', function () {
    // You can write your tests in JSX but make sure to use the lower case
    // version of your component because otherw
    const vm = createVM(this, h => (
      <hello-jsx></hello-jsx>
    ), { components: { HelloJsx }})
    vm.$el.querySelector('h1').textContent.should.eql('Hello JSX')
  })
})
