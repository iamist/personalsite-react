import React from 'react';
import {NavLink} from 'react-router-dom';
import { JsxElement } from 'typescript';
import { faBed, faCutlery, faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
interface IHeaderNav {
    page: string|JsxElement
    path: string
}
interface IProps {
    headerNavItems: Array<IHeaderNav>
}

const Header: React.FC<IProps> = ({headerNavItems}) => {
    return (
        <div className="w-full bg-zinc-900 border-b-slate-700 border-b-2">
            <div className="container flex flex-col sm:flex-row items-center justify-between text-2xl lg:text-xl py-8 sm:py-0">
                 <div className="brand font-bold bg-pink-600 text-zinc-900 px-4 flex flex-column items-center py-4 mb-5 sm:mb-0 justify-between">
                    <FontAwesomeIcon icon={faCutlery} className="mr-2" />
                    <FontAwesomeIcon icon={faCode} className="mr-2" />
                    <FontAwesomeIcon icon={faBed} />
                 </div>
                 <ul className="nav flex flex-col sm:flex-row items-center">
                     {
                         headerNavItems.map( link => (
                             <li key={link.path}className="m-2 sm:mx-4 text-sm">
                                 <NavLink className="duration-500 lg:text-xs text-slate-400" to={link.path}>{link.page}</NavLink>
                             </li>
                         ))
                     }
                 </ul>
            </div>
        </div>
    );
}

export default Header;
