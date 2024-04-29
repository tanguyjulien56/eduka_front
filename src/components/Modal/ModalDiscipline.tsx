import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useModalDiscipline } from "../../utils/Context/ModalDisciplineContext";

export default function ModalDiscipline() {
  const [selectedDiscipline, setSelectedDiscipline] = useState<string[]>(() => {
    const storedDiscipline = localStorage.getItem("selectedDiscipline");
    return storedDiscipline ? JSON.parse(storedDiscipline) : [];
  });



  useEffect(() => {
    // Mettre à jour les données dans le local storage à chaque changement de selectedDiscipline
    localStorage.setItem(
      "selectedDiscipline",
      JSON.stringify(selectedDiscipline)
    );
  }, [selectedDiscipline]);

  const { isModalOpenDiscipline, closeModalDiscipline } = useModalDiscipline();

  if (!isModalOpenDiscipline) {
    return null;
  }

  const handleToggleDiscipline = (discipline: string) => {
    const index = selectedDiscipline.indexOf(discipline);
    if (index === -1) {
      setSelectedDiscipline([...selectedDiscipline, discipline]);
    } else {
      const newSelectedDiscipline = [...selectedDiscipline];
      newSelectedDiscipline.splice(index, 1);
      setSelectedDiscipline(newSelectedDiscipline);
    }
  };

  const handleSubmit = () => {
    const tagsToLoad = selectedDiscipline.map((discipline) => ({
      discipline,
    }));
    console.log("Catégories sélectionnées:", tagsToLoad);
    closeModalDiscipline();
  };
  return (
    <Box>
      {isModalOpenDiscipline && (
        <section className="absolute top-0 left-0 right-0 bottom-0 backdrop-filter backdrop-blur-sm  z-30"></section>
      )}
      {isModalOpenDiscipline && (
        <section className="absolute bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md  border rounded-lg shadow-sm m-auto ">
          <div className=" w-full flex items-center justify-between py-2 px-2">
            <IconButton aria-label="delete" size="large">
              <CloseIcon fontSize="inherit" onClick={closeModalDiscipline} />
            </IconButton>
            <h3 className=" text-gray-900 mx-auto">
              Quel(s) filtre(s) voulez-vous appliquer?
            </h3>
          </div>
          <div className="grid grid-cols-3 justify-center border-2 border-custom-blue rounded-lg mx-2 p-2">
            {eventDiscipline.map((discipline) => (
              <button
                key={discipline}
                className={`flex border items-center justify-center border-custom-blue m-2 py-3 px-0 rounded-lg ${selectedDiscipline.includes(discipline)
                  ? "bg-custom-blue text-white"
                  : ""
                  }`}
                onClick={() => handleToggleDiscipline(discipline)}
              >
                <p className="text-xs">{discipline}</p>
              </button>
            ))}
          </div>
          <div className="bg-white w-full  flex flex-col gap-3 items-center justify-between  mx-auto px-2 py-3">
            <button
              onClick={handleSubmit}
              className="w-full border items-center justify-center border-custom-blue bg-custom-blue text-white m-2 py-3 px-0 rounded-lg">Valider
            </button>
          </div>
        </section>
      )}
    </Box>
  );
}
