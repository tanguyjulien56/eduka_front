import { ButtonCreateProfilBySchool, ButtonModifyProfilBySchool } from "../../components/Button/CustomButton";

export default function HomePageSchool() {
    return (
        <>
            <div className="flex flex-col items-center justify-center mt-44 gap-10">
                <h2 className="text-xl font-semibold">Que souhaitez-vous faire ?</h2>
                <div className="grid gap-10 lg:gap-20 lg:grid-cols-2">
                    <ButtonCreateProfilBySchool>
                        Créer un profil
                    </ButtonCreateProfilBySchool>
                    <ButtonModifyProfilBySchool>
                        Modifier un profil
                    </ButtonModifyProfilBySchool>
                </div>
            </div>
        </>
    );
}