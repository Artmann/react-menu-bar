import { motion, useAnimation } from 'framer-motion';
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { IconType } from 'react-icons';
import { FaHome, FaBars, FaSync, FaUserAlt } from 'react-icons/fa';
import { Link, RouteProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Background = styled(motion.div)`
  align-items: center;
  background: rgb(47, 46, 48);
  border-radius: 50%;
  bottom: 2rem;
  color: #fff;
  display: flex;
  font-size: 1.25rem;
  justify-content: center;
  line-height: 0;
  padding: 0.5rem;
  position: absolute;
  right: 2rem;
`;
const BurgerMenu = styled(motion.div)`
  padding: 0.5rem;
`;
const ButtonBackground = styled(motion.div)`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
`;
const MenuButton = styled(motion.div)`
  font-size: 0;

  margin: 0 1.5rem;
`;
const MenuLink = styled(Link)`
  color: inherit;
  display: block;
  outline: 0;
  -webkit-tap-highlight-color: transparent;
`;

interface Route {
  icon: IconType;
  path: string;
}

interface ButtonProps {
  isActive: boolean;
  route: Route;
}

function Button({ isActive, route }: ButtonProps): ReactElement {
  const controls = useAnimation();

  useEffect(() => {
    const openAnimation = async(): Promise<void> => {
      await controls.start({
        height: '0rem',
        rotate: -125,
        width: '0rem'
      });
      await controls.start({
        height: '2rem',
        fontSize: '1.5rem',
        rotate: 0,
        width: '2rem',
      });
      await controls.start({
        fontSize: '1.25rem'
      });
    };

    openAnimation();
  }, [ controls ]);

  const variants = {
    active: {
      backgroundColor: '#ffbc40',
      borderRadius: '50%',
      color: '#2f2e30'
    },
    inactive: {
      backgroundColor: '#2f2e30',
      color: '#fff'
    }
  };

  return (
    <MenuButton animate={ controls }>
      <ButtonBackground animate={ isActive ? 'active' : 'inactive' } variants={ variants }>
        <MenuLink to={ route.path }>
          <route.icon />
        </MenuLink>
      </ButtonBackground>
    </MenuButton>
  );
}

function Navigation({ location }: RouteProps): ReactElement {
  const [ isOpen, setIsOpen ] = useState(false);
  const backgroundRef = useRef<HTMLDivElement>(null);

  const routes: Route[] = [
    { icon: FaHome, path: '/' },
    { icon: FaSync, path: '/transfers' },
    { icon: FaUserAlt, path: '/profile' }
  ];

  const pathname = location ? location.pathname : '/';
  const currentPath = routes
    .map(route => route.path)
    .sort((a,b) => a.length > b.length ? -1 : 1)
    .find(path => pathname.startsWith(path)) || '/';

  const backgroundControls = useAnimation();
  const menuIconControls = useAnimation();

  const openMenuAnimation = async(): Promise<void> => {
    await menuIconControls.start({
      rotate: -90,
      transition: { duration: 0.1 }
    });

    await menuIconControls.start({
      display: 'none'
    });

    await backgroundControls.start({
      left: '50%',
      right: 'auto',
      transform: 'translate(-50%, 0)',
      transition: { duration: 0.15 }
    });

    await backgroundControls.start({
      borderRadius: '0.5rem',
      minHeight: '1.5rem',
      minWidth: '16rem',
      transition: { duration: 0.15 }
    })
  };

  const openMenuHandler = (): void => {
    openMenuAnimation().then(() => {
      setIsOpen(true);
    });
  };

  useEffect(() => {
    const closeMenuAnimation = async(): Promise<void> => {
      await backgroundControls.start({
        borderRadius: '50%',
        left: 'auto',
        minHeight: 'initial',
        minWidth: 'initial',
        right: '2rem',
        transform: 'none',
        transition: { duration: 0.15 }
      });

      await menuIconControls.start({
        display: 'block'
      });

      await menuIconControls.start({
        rotate: 0,
        transition: { duration: 0.1 }
      });
    };

    const clickHandler = (event: MouseEvent): void => {
      const { current } = backgroundRef;

      if (!current || !event.currentTarget) {
        return;
      }

      if (current.contains(event.target as HTMLElement)) {
        return;
      }

      if (!isOpen) {
        return;
      }

      console.log('CLOSE');

      setIsOpen(false);

      closeMenuAnimation();
    };

    document.addEventListener('click', clickHandler);

    return () => document.removeEventListener('click', clickHandler);
  }, [ backgroundControls, isOpen, menuIconControls ]);

  return (
    <Background animate={ backgroundControls } ref={ backgroundRef }>
      <BurgerMenu animate={ menuIconControls }>
        <FaBars onClick={ openMenuHandler } />
      </BurgerMenu>

      {
        isOpen && routes.map((route, index) =>
          <Button
            isActive={ route.path === currentPath }
            key={ index }
            route={ route }
            />
        )
      }

    </Background>
  );
}

export default withRouter(Navigation);
