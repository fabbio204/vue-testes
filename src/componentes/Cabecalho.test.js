import { mount } from '@vue/test-utils';
import Cabecalho from './Cabecalho.vue';

test('verifica se a quantidade de menus é 4', () => {
    const wrapper = mount(Cabecalho, {});
  
    const expressao = /[<li>]{4}/;
  
    expect(wrapper.html()).toMatch(expressao)
  })