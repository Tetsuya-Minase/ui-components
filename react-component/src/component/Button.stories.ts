import { ButtonComponent } from '../component/Button';

export default {
  title: 'Button',
  component: ButtonComponent
};

export const ButtonDefault = () => ButtonComponent({text: 'default'});
export const ButtonSmall = () => ButtonComponent({text: 'small', size: 'small'});
export const ButtonLarge = () => ButtonComponent({text: 'large', size: 'large'});
export const ButtonPrimary = () => ButtonComponent({text: 'primary', types: 'primary'});