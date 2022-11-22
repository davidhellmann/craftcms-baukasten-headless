"use client";
import classNames from "classnames";
import { useState } from 'react';
import {usePathname} from "next/navigation";
import Link from "next/link";
import {motion} from "framer-motion";
// import { setCompVariants } from '../../js/utils/setCompVariants';

interface INavigationMain extends IComponent {
  navItems: string
}

export const NavigationMain = ({propRootClasses, navItems}: INavigationMain) => {
  const path = usePathname();

  // Comp Settings
  const cs: IComponentSettings = {
    name: 'NavigationMain',
    propRootClasses
  };

  // Comp Classes
  const cc: IComponentClasses = {
    root: 'relativ',
    rootCustom: cs.propRootClasses || '',
    button: 'relative z-50 rounded-full w-16 h-16 bg-primary-700 text-white flex lg:hidden items-center justify-center',
    list: 'flex flex-col mt-8 lg:mt-0 lg:flex-row gap-y-4 gap-x-8 absolute right-4 xs:right-8 md:right-8 top-16 lg:top-0 mt-10 lg:mt-0 w-80 lg:w-auto rounded-md lg:relative bg-primary-700 lg:bg-transparent text-white lg:text-primary-900 p-8 lg:p-0',
    link: 'relative',
    motionSpan: 'absolute left-0 -bottom-1 h-1 bg-primary-500 w-full hidden lg:flex rounded-full',
    variants: {
      propSampleVariant: {
        optionA: '',
        default: '',
      },
    },
  };

  // States
  const [isOpen, setOpen] = useState(false);

  // Functions
  const toggleIsOpen = () => {
    setOpen(isOpen => !isOpen);
  };

  // Template
  return (
    <nav className={cc.root}>
      <button className={cc.button} onClick={toggleIsOpen}>
        {isOpen ? 'yes' : 'no'}
      </button>
      <ul className={classNames(cc.list, isOpen ? 'flex' : 'hidden lg:flex')}>
        {JSON.parse(navItems).map((link: INavigationLink) => (
          <li key={link.id}>
            <Link className={cc.link} href={link.url} onClick={toggleIsOpen}>
              {link.url.endsWith(path as string) && (
                <motion.span
                  layoutId="underline"
                  className={cc.motionSpan}
                />
              )}
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
