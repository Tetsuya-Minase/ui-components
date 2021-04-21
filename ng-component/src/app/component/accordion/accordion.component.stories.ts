import { AccordionComponent } from './accordion.component';
export default {
  title: 'accordion component',
};

export const AccordionDefault = () => ({
  component: AccordionComponent,
  props: {
    accordionItemList: [
      {
        title: 'アコーディオンタイトル',
        details: ['ここに折りたたまれてる内容']
      }
    ]
  }
});

export const Accordion2detail = () => ({
  component: AccordionComponent,
  props: {
    accordionItemList: [
      {
        title: 'アコーディオンタイトル',
        details: ['ここに折りたたまれてる内容', 'ここに折りたたまれてる内容2']
      }
    ]
  }
});

export const Accordion2item = () => ({
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