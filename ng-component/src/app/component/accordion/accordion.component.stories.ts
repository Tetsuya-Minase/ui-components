import {AccordionComponent} from './accordion.component';
import {Meta, Story} from '@storybook/angular';

export default {
  title: 'accordion component',
  component: AccordionComponent
} as Meta;

export const AccordionDefault: Story = () => ({
  props: {
    accordionItemList: [
      {
        title: 'アコーディオンタイトル',
        details: ['ここに折りたたまれてる内容']
      }
    ]
  }
});

export const Accordion2detail: Story = () => ({
  props: {
    accordionItemList: [
      {
        title: 'アコーディオンタイトル',
        details: ['ここに折りたたまれてる内容', 'ここに折りたたまれてる内容2']
      }
    ]
  }
});

export const Accordion2item: Story = () => ({
  component: AccordionComponent,
  props: {
    accordionItemList: [
      {
        title: 'アコーディオンタイトル1',
        details: ['ここに折りたたまれてる内容1', 'ここに折りたたまれてる内容2', 'ここに折りたたまれてる内容3']
      },
      {
        title: 'アコーディオンタイトル2',
        details: ['ここに折りたたまれてる内容']
      }

    ]
  }
});
