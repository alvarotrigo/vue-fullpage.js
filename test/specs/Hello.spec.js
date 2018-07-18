import Hello from 'src/Hello.vue'
import { createVM } from '../helpers/utils.js'

describe('Hello.vue', function () {
  it('should render correct contents', function () {
    const vm = createVM(this, `
<Hello></Hello>
`, { components: { Hello }})
    vm.$el.querySelector('.hello h1').textContent.should.eql('Hello World!')
  })
})
