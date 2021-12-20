import { ButtonComponent } from './button.component';
import {Meta, Story} from '@storybook/angular';

export default {
  title: 'button component',
  component: ButtonComponent,
} as Meta;

export const ButtonDefault: Story = () => ({
  props: {
    text: 'default'
  }
});
export const ButtonSmall: Story = () => ({
  props: {
    text: 'small button',
    size: 'small'
  }
});
export const ButtonLarge: Story = () => ({
  props: {
    text: 'large button',
    size: 'large'
  }
});
export const ButtonPrimary: Story = () => ({
  props: {
    text: 'primary button',
    type: 'primary'
  }
});
