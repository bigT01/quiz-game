import React, {useRef} from 'react';
import './asideMobile.scss'
import Navbar from "../navbar";

type AsideMobileProps = {
    isMenuActive: boolean,
    setIsMenuActive: (isMenuActive : boolean) => void
}
const AsideMobile = ({isMenuActive, setIsMenuActive} :AsideMobileProps) => {
    const refMenu = useRef<HTMLElement>(null)


    return (
        <div className='mobile-aside-container'>
            {/*this container was divided for 2 part*/}
            {/*first part it is aside which will open on click to burger menu*/}
            <aside className={`mobile ${isMenuActive ? 'active' : 'non-active'}`} ref={refMenu}>
                <Navbar />
            </aside>
            {/*this part for closing aside part actually there are another way
            of using this however in my opinion this is not the worst idea of using of useState*/}
            <div className={`blur-aside ${isMenuActive ? 'active' : 'non-active'}`}
                 onClick={() => setIsMenuActive(false)}></div>
        </div>

    );
};

export default AsideMobile;