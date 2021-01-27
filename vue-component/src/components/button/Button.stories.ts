import ButtonComponent from './Button.vue';

export default {
  title: 'Button',
  component: ButtonComponent,
};
export const ButtonDefault = () => ({
  props: {
    text: 'default'
  }
});