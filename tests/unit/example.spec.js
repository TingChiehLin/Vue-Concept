import { mount } from '@vue/test-utils';
import ClickCounter from "../../src/components/ClickCounter";
import MouseOver from "../../src/components/MouseOver";

describe('Test Component unit test', () => {
  it('should render Vue instance', function () {
    const wrapper = mount(ClickCounter, {
      propsData: {
        name: "ClickCounter",
        completed: false
      }
    });
    expect(wrapper.exists()).toBe(true);
  });
})

describe("Whether Button contain text", () => {
  let wrapper;
  wrapper = mount(MouseOver);
  test("renders the correct markup", () => {
    expect(wrapper.html()).toContain('<h3>0 times</h3>');
  });

});
