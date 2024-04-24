import AddCircleIcon from '@mui/icons-material/AddCircle';
import { ButtonAddChild } from './CustomButton';

export default function AddCHildButton() {
  return (
    <ButtonAddChild
      variant="outlined"
      endIcon={<AddCircleIcon sx={{ color: "#0FA3B1" }} />}
    >
      Ajouter un enfant
    </ButtonAddChild>
  );
}