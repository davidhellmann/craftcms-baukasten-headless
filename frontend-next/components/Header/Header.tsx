import Link from "next/link";
import {Container} from "../Container/Container";
import {NavigationMain} from "../Navigation/NavigationMain";

interface ICompHeader extends IComponent {
  navItems: string
}

export const Header = ({navItems, propRootClasses}: ICompHeader) => {
  const cs: IComponentSettings = {
    name: 'Header',
    propRootClasses
  };

  // Comp Classes
  const cc: IComponentClasses = {
    root: 'w-screen max-w-full',
    rootCustom: cs.propRootClasses || '',
    header: 'bg-primary-100 relative z-10 w-full',
    container: 'flex flex-row items-center justify-between border-b border-black py-8',
    logo: 'text-2xl font-bold',
    variants: {
      propSectionBackgroundColor: {
        transparent: 'bg-transparent',
        default: 'transparent',
      },
      propSectionPaddingVertical: {
        sm: 'py-2 md:py-4',
        default: 'md',
      },
    },
  };

  return (
    <header className={cc.header} style={{perspective: '1000px'}}>
      <Container className={cc.container}>
        <Link href="/" className={cc.logo}>Baukasten</Link>
        <NavigationMain navItems={navItems}/>
      </Container>
    </header>
  );
};
