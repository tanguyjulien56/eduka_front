import { NavLink } from "react-router-dom";
import { GreatBlueButton, GreatOrangeBleuButton, GreatOrangeButton } from "../components/Button/CustomButton";
import { NavBarNewProfil } from "../components/NavBar/NavBarNewProfil";



export const SchoolCreateUser = () => {
    return (
        <>
            <NavBarNewProfil />
            <div className="flex flex-col items-center justify-center mt-44 gap-10">
                <h2 className="text-xl font-semibold">Choisissez le rôle du profil :</h2>
                <div className="grid gap-10 lg:gap-20 lg:grid-cols-2">
                        <NavLink to="/ParentSignUpPage">
                        <GreatOrangeButton>Parent</GreatOrangeButton>
                        </NavLink>
                    <GreatBlueButton>
                        Enseignant
                    </GreatBlueButton>
                    <GreatOrangeBleuButton>
                        Parent + Enseignant
                    </GreatOrangeBleuButton>

                </div>
            </div>
        </>
    );
}