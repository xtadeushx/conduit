import clsx from 'clsx';
import { Link, NavLink } from 'react-router-dom';
import type { FC } from 'react';
import { LInksLIst } from './constants';
import { Container } from '../container/container.components';

interface HeaderProps { }


export const Header: FC<HeaderProps> = () => {

    const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
        clsx('py-navItem hover:text-black/60 hover:no-underline', {
            'text-black/30': !isActive,
            'text-black/80': isActive,
        });
    return (
        <header>
            <nav className="px-2 py-4">
                <Container>
                    <div className="flex justify-between items-center">
                        <Link
                            to='/'
                            className='font-titillilum text-2xl mr-8 text-conduit-green'>
                            conduit
                        </Link>
                        <ul className="pl-0 mb-0 list-none flex">
                            {LInksLIst.map(item => (
                                <li className="ml-4" key={item.title}>
                                    <NavLink
                                        to={item.href}
                                        className={navLinkClasses}>
                                        {item.title}
                                    </NavLink>
                                </li>
                            ))}

                        </ul>
                    </div>
                </Container>
            </nav>
        </header>);
}

