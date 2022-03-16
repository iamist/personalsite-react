import React from "react";

interface IHeaderNav {
    label: string
    href: string
}

interface IProps {
    headerNavItems: Array<IHeaderNav>
}

const Header: React.FC<IProps> = ({headerNavItems}) => {
    return (
        <div className="w-full bg-slate-50 shadow-md absolute top-0 left-0">
            <div className="container md:flex items-center justify-between py-4 md:px-10 px-7">
                 <div className="brand font-bold text-2xl flex flex-column items-center py-4 text-sky-400">
                     {/* <img src={logo} alt="logo" className="h-6 logo" /> */}
                     iamist
                 </div>
                 <ul className="nav md:flex md:items-center uppercase">
                     {
                         headerNavItems.map( link => (
                             <li key={link.label.toLocaleLowerCase()} className="md:ml-8 text-sm">
                                 <a className="text-sky-500 hover:text-sky-900 duration-500" href={link.href}>{link.label}</a>
                             </li>
                         ))
                     }
                 </ul>
            </div>
        </div>
    );
}

export default Header;
