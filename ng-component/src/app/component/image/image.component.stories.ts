import { ImageComponent } from "./image.component";

export default {
  title: 'image component',
};

export const Image100x100 = () => ({
  component: ImageComponent,
  props: {
    src: '/assets/images/100x100.png',
    width: 200,
    height: 200
  }
});
export const Image200x200 = () => ({
  component: ImageComponent,
  props: {
    src: '/assets/images/200x200.png',
    width: 200,
    height: 200
  }
});
export const Image200x400 = () => ({
  component: ImageComponent,
  props: {
    src: '/assets/images/200x400.png',
    width: 200,
    height: 200
  }
});
export const Image400x200 = () => ({
  component: ImageComponent,
  props: {
    src: '/assets/images/400x200.png',
    width: 200,
    height: 200
  }
});
export const Image400x400 = () => ({
  component: ImageComponent,
  props: {
    src: '/assets/images/400x400.png',
    width: 200,
    height: 200
  }
});