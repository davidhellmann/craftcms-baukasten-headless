import classNames from 'classnames';
import {setCompVariants} from '@/utils/setCompVariants';

interface IHeadline extends IComponent {
  text: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span';
  size?:
    | 'default'
    | '9xl'
    | '8xl'
    | '7xl'
    | '6xl'
    | '5xl'
    | '4xl'
    | '3xl'
    | '2xl'
    | 'xl'
    | 'lg'
    | 'base'
    | 'sm'
    | 'xs';
  weight?: 'default' | 'extrabold' | 'bold' | 'semibold' | 'normal';
  center?: boolean;
}

export const Headline = ({
                           rootClasses = '',
                           text,
                           tag = 'h2',
                           size = 'default',
                           weight = 'bold',
                           center = false,
                         }: IHeadline) => {
  // Comp Settings
  const cs: IComponentSettings = {
    name: 'Headline',
    root: 'relativ',
    rootClasses,
    variants: {
      size: {
        DEFAULT: 'text-3xl',
        '9xl': 'text-9xl tracking-tighter',
        '8xl': 'text-8xl',
        '7xl': 'text-7xl',
        '6xl': 'text-6xl',
        '5xl': 'text-5xl',
        '4xl': 'text-4xl',
        '3xl': 'text-3xl',
        '2xl': 'text-2xl',
        xl: 'text-xl',
        lg: 'text-lg',
        base: 'text-base',
        sm: 'text-sm',
        xs: 'text-xs',
      },
      weight: {
        DEFAULT: 'font-bold',
        extrabold: 'font-extrabold',
        bold: 'font-bold',
        semibold: 'font-semibold',
        medium: 'font-medium',
        normal: 'font-normal',
      },
    },
  };

  // Comp Classes
  const cc: IComponentClasses = {
    root: `${cs.root} ${cs.rootClasses} ${setCompVariants(cs.variants, {size, weight})} ${center ? 'text-center' : ''}`,
  };

  // Set Tag Name
  const TagName = tag;

  // Template
  return (
    <>
      {text && TagName && (
        <TagName className={cc.root}>
          {text}
        </TagName>
      )}
    </>
  );
};
