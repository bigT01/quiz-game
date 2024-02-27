import React, {useRef} from 'react';
import './asideMobile.scss'

type AsideMobileProps = {
    isMenuActive: boolean,
    setIsMenuActive: (isMenuActive : boolean) => void
}
const AsideMobile = ({isMenuActive, setIsMenuActive} :AsideMobileProps) => {
    const refMenu = useRef<HTMLElement>(null)


    return (
        <div className='mobile-aside-container'>
            <aside className={`mobile ${isMenuActive ? 'active' : 'non-active'}`} ref={refMenu}>

            </aside>
            <div className={`blur-aside ${isMenuActive ? 'active' : 'non-active'}`} onClick={() => setIsMenuActive(false)}></div>
        </div>

    );
};

export default AsideMobile;