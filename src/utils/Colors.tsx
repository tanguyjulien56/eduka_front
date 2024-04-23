import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const ButtonCreateProfilBySchool = styled(Button)({
  color: "black",
  border: "2px solid #0FA3B1",
  borderRadius: "10px",
  width: "300px",
  height: "100px",
  "&:hover": {
    backgroundColor: "#0FA3B1",
  },
}) as typeof Button;

export const ButtonModifyProfilBySchool = styled(Button)({
    color: "black",
    border: "2px solid #F7A072",
    borderRadius: "10px",
    width: "300px",
    height: "100px",
    "&:hover": {
      backgroundColor: "#F7A072",
    },
  }) as typeof Button;