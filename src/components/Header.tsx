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
            <div className="flex flex-col sm:flex-row items-center justify-between text-2xl lg:text-xl sm:px-20 sm:py-0 pb-0 mb-10">
                 <div className="brand font-bold bg-pink-600 text-teal-100 px-4 flex flex-column items-center py-4 mb-5 sm:mb-0 justify-between">
                    <div className="text-2xl mr-0.5">&lt;</div>
                    <div className="text-2xl">ist</div>
                    <div className="text-2xl ml-0.5">/&gt;</div>
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
