import { Accordion } from './Accordion';

export default {
  title: 'Accordion',
  component: Accordion
};

export const AccordionDefault = () => Accordion({
  itemList: [{
    title: 'アコーディオンタイトル',
    details: ['ここに折りたたまれてる内容']
  }]
});
export const Accordion2detail = () => Accordion({
  itemList: [{
    title: 'アコーディオンタイトル',
    details: ['ここに折りたたまれてる内容', 'ここに折りたたまれてる内容2']
  }]
});
export const Accordion2item = () => Accordion({
  itemList: [
    {
      title: 'アコーディオンタイトル1',
      details: ['ここに折りたたまれてる内容1', 'ここに折りたたまれてる内容2', 'ここに折りたたまれてる内容3']
    },
    {
      title: 'アコーディオンタイトル2',
      details: ['ここに折りたたまれてる内容']
    }
  ]
});