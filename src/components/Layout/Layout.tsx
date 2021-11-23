import React from 'react';
import s from './Layout.module.scss'

const Layout: React.FC<any> = ({children}) => {
    return (
        <div className={s.wrapper}>
            {children}
        </div>
    );
};

export default Layout;
