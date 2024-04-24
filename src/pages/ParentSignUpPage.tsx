import { useState } from 'react';
import { NavBarNewProfil } from "../components/NavBar/NavBarNewProfil"
import { FormAddParent } from '../components/Form/FormAddParent';


export const ParentSignUpPage = () => {
    const [childFormsCount, setChildFormsCount] = useState(1);

    const handleAddChildClick = () => {
        if (childFormsCount < 4) {
            setChildFormsCount(childFormsCount + 1);
        }
    }

    const handleDeleteChildClick = () => {
        if (childFormsCount > 1) {
            setChildFormsCount(childFormsCount - 1);
        }
    }

    return (
        <>
            <NavBarNewProfil />
            <div className='grid grid-col items-center justify-center mt-44'>
                <h2 className='text-xl font-semibold mb-3'>Remplissez les informations requises :</h2>
            <FormAddParent />
            </div>
        </>
    )
}