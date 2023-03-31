import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div>
            <nav className='navbar'>
           <div>
           <h1>Programming Learn</h1>
           </div>
           <div className='menubar'>
           <h2>home</h2>
            <h2>About us</h2>
            <h2>Contuct us</h2>
           </div>
           <div>
           <img className='header-img' src="https://scontent.fdac2-1.fna.fbcdn.net/v/t1.6435-9/69494292_2419241018311770_5077845666902835200_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHGMfMBL7TdXN_5sR91FxNcKDEzkjcr9vsoMTOSNyv2-8Z5ki-enyaU4S3yNA4EvDU_AAo1gCisyhG6bU98r0bU&_nc_ohc=i6K0p54Rdt8AX9cG_I6&_nc_ht=scontent.fdac2-1.fna&oh=00_AfDcnotiWp9UOvfxMZj7RaQXe_KtczGR-5DNsndlb--NXA&oe=644DDBBE" alt="" />
           </div>
            </nav>

        </div>
    );
};

export default Header;