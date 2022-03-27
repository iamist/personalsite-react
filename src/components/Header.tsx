import React from 'react';
import {NavLink} from 'react-router-dom';
interface IHeaderNav {
    page: string
    path: string
}
interface IProps {
    headerNavItems: Array<IHeaderNav>
}

const Header: React.FC<IProps> = ({headerNavItems}) => {
    return (
        <div className="w-full bg-zinc-800 border-b-zinc-900 border-b-2">
            <div className="container md:flex items-center justify-between">
                 <div className="brand font-bold text-2xl flex flex-column items-center py-4">
                     {/* <img src={logo} alt="logo" className="h-6 logo" /> */}
                     iamist
                 </div>
                 <ul className="nav md:flex md:items-center uppercase">
                     {
                         headerNavItems.map( link => (
                             <li key={link.page.toLocaleLowerCase()}className="md:ml-8 text-sm">
                                 <NavLink className="duration-500 text-orange-600" to={link.path}>{link.page}</NavLink>
                             </li>
                         ))
                     }
                 </ul>
            </div>
        </div>
    );
}

export default Header;
