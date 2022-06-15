import classNames from 'classnames/bind';

const cx = (styles: { readonly [key: string]: string }) =>
  classNames.bind(styles);

export default cx;
