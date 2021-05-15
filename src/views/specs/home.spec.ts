import { mount } from '@vue/test-utils';
import Home from '../Home.vue';

describe('Home', () => {
  it('should display title', () => {
    const msg = 'Vite Vue3 Starter';
    const wrapper = mount(Home);
    expect(wrapper.find('.title').text()).toEqual(msg);
  })
});