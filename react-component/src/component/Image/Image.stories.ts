import { ImageComponent } from './Image';

export default {
  title: 'Image',
  component: ImageComponent
};

export const Image100x100 = () => ImageComponent({src: '/images/100x100.png', width: 200, height: 200});
export const Image200x200 = () => ImageComponent({src: '/images/200x200.png', width: 200, height: 200});
export const Image200x400 = () => ImageComponent({src: '/images/200x400.png', width: 200, height: 200});
export const Image400x200 = () => ImageComponent({src: '/images/400x200.png', width: 200, height: 200});
export const Image400x400 = () => ImageComponent({src: '/images/400x400.png', width: 200, height: 200});
