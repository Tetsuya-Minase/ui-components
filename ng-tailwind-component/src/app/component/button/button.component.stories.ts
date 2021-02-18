import { ButtonComponent } from './button.component';

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
export const ButtonPrimarySmall = () => ({
  component: ButtonComponent,
  props: {
    text: 'primary small',
    size: 'small',
    type: 'primary'
  }
});
export const ButtonPrimaryLarge = () => ({
  component: ButtonComponent,
  props: {
    text: 'primary button large',
    size: 'large',
    type: 'primary'
  }
});
export const ButtonError = () => ({
  component: ButtonComponent,
  props: {
    text: 'error button',
    type: 'error'
  }
});
export const ButtonErrorSmall = () => ({
  component: ButtonComponent,
  props: {
    text: 'error small',
    size: 'small',
    type: 'error'
  }
});
export const ButtonErrorLarge = () => ({
  component: ButtonComponent,
  props: {
    text: 'error button large',
    size: 'large',
    type: 'error'
  }
});
export const ButtonWarning = () => ({
  component: ButtonComponent,
  props: {
    text: 'warning button',
    type: 'warning'
  }
});
export const ButtonWarningSmall = () => ({
  component: ButtonComponent,
  props: {
    text: 'warning small',
    size: 'small',
    type: 'warning'
  }
});
export const ButtonWarningLarge = () => ({
  component: ButtonComponent,
  props: {
    text: 'warning button large',
    size: 'large',
    type: 'warning'
  }
});