import ButtonSchoolCreateProfil from "../../components/Button/ButtonSchoolCreateProfil";
import ButtonSchoolModifyProfil from "../../components/Button/ButtonSchoolModifyProfil";



export default function HomePageSchool() {

    return (
        <>
        <div className="flex flex-col items-center justify-center mt-60 gap-10">
        <h2 className="text-xl font-semibold">Que souhaitez-vous faire ?</h2>
        <ButtonSchoolCreateProfil />
        <ButtonSchoolModifyProfil />
        </div>
        </>
    )
}