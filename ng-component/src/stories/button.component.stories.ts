import { ButtonComponent } from '../app/component/button/button.component';

export default {
  title: 'button component',
};

export const ButtonDefault = () => ({
  component: ButtonComponent,
  props: {
    text: 'default'
  }
});
export const ButtonSmall = () => ({
  component: ButtonComponent,
  props: {
    text: 'small button',
    size: 'small'
  }
});
export const ButtonLarge = () => ({
  component: ButtonComponent,
  props: {
    text: 'large button',
    size: 'large'
  }
});
export const ButtonPrimary = () => ({
  component: ButtonComponent,
  props: {
    text: 'primary button',
    type: 'primary'
  }
});