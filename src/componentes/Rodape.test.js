import {
  mount
} from '@vue/test-utils';
import Rodape from './Rodape.vue';

test('verifica ano corrente', () => {
  const wrapper = mount(Rodape, {});

  const anoCorrente = new Date().getFullYear()

  // verifica se o ano corrente está no texto componente
  expect(wrapper.text()).toMatch(anoCorrente.toString())
})