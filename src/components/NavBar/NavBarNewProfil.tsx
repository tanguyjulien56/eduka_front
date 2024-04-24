import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom';

export const NavBarNewProfil = () => {
    return (
        <div className='flex justify-between items-center mt-10 border-b-2'>
            <NavLink to="/">
                <CloseIcon className="ml-8 mb-4" style={{ fontSize: 32 }} />
            </NavLink>
            <h2 className="mr-16 mb-4 text-2xl">Nouveau Profil</h2>
            <div></div>
        </div>
    )
}