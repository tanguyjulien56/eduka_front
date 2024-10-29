import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton } from "@mui/material";
import { useModal } from "../../services/Context/ModalContext";
import { TypeInterface } from "../../services/interfaces/event";
import { BlueButton, OrangeButton } from "../Button/CustomButton";

export default function TypeEventPage() {
  const {
    isTypeEventOpen,
    closeTypeEvent,
    openCategoryPublicEvent,
    openCategoryPrivateEvent,
  } = useModal();

  const typeEvents: string[] = ["Public", "Privé"];

  const handleButtonClick = (is_public: boolean) => {
    const storedDataEvent: TypeInterface = {
      is_public: is_public,
    };

    localStorage.setItem("storedDataEvent", JSON.stringify(storedDataEvent));
    closeTypeEvent();

    if (is_public === true) {
      openCategoryPublicEvent();
    } else {
      openCategoryPrivateEvent();
    }
  };

  return (
    <Box>
      {isTypeEventOpen && (
        <section className="fixed top-0 left-0 right-0 bottom-0 bg-opacity-20 bg-black backdrop-filter backdrop-blur-sm  z-30 "></section>
      )}
      {isTypeEventOpen && (
        <section className="fixed bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md border rounded-lg shadow-sm m-auto">
          <article className=" py-2 px-2">
            <IconButton
              className="py-2"
              aria-label="delete"
              size="large"
              onClick={closeTypeEvent}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
            <h3 className=" text-gray-900 mx-auto text-center">
              Souhaitez-vous que cet évènement soit public ou privé ?
            </h3>
          </article>

          <article className="grid grid-cols-1 justify-items-center gap-4 m-10 ">
            {typeEvents.map((event, index) => (
              <div key={event}>
                {index % 2 === 0 ? ( // Utilisation de l'indice pour alterner entre bleu et orange
                  <BlueButton onClick={() => handleButtonClick(true)}>
                    {event}
                  </BlueButton>
                ) : (
                  <OrangeButton onClick={() => handleButtonClick(false)}>
                    {event}
                  </OrangeButton>
                )}
              </div>
            ))}
          </article>
        </section>
      )}
    </Box>
  );
}
