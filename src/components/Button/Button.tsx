import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

//Great Blue Button (blue on :hover)
export const GreatBlueButton = styled(Button)({
  color: "black",
  border: "2px solid #0FA3B1",
  borderRadius: "10px",
  width: "350px",
  height: "100px",
  "&:hover": {
    backgroundColor: "#0FA3B1",
    color: "white",
  },
}) as typeof Button;

//Blue Button normal size (bleu on :hover)
export const BlueButton = styled(Button)({
  color: "black",
  border: "2px solid #0FA3B1",
  borderRadius: "10px",
  width: "350px",
  height: "50px",
  "&:hover": {
    backgroundColor: "#0FA3B1",
    color: "white",
  },
}) as typeof Button;

//Great Orange Button
export const GreatOrangeButton = styled(Button)({
  color: "black",
  border: "2px solid #F7A072",
  borderRadius: "10px",
  width: "350px",
  height: "100px",
  "&:hover": {
    backgroundColor: "#F7A072",
    color: "white",
  },
}) as typeof Button;

//Orange Button normal size
export const OrangeButton = styled(Button)({
  color: "black",
  border: "2px solid #F7A072",
  borderRadius: "10px",
  width: "350px",
  height: "50px",
  "&:hover": {
    backgroundColor: "#F7A072",
    color: "white",
  },
}) as typeof Button;

//Great orange/bleu Button
export const GreatOrangeBleuButton = styled(Button)({
  color: "black",
  border: "2px solid #F7A072",
  borderTopColor: "#F7A072",
  borderLeftColor: "#F7A072",
  borderBottomColor: "#00b4d8",
  borderRightColor: "#00b4d8",
  borderRadius: "10px",
  width: "350px",
  height: "100px",
  "&:hover": {
    background: "linear-gradient(to bottom right, #F7A072 , #00b4d8 )",
    color: "white",
  },
}) as typeof Button;

//Full orange Button
export const OrangeFullButton = styled(Button)({
  color: "white",
  border: "2px solid #F7A072",
  borderRadius: "10px",
  width: "350px",
  height: "50px",
  backgroundColor: "#F7A072",
  "&:hover": {
    backgroundColor: "#F7A072",
    borderColor: "#F7A072",
  },
}) as typeof Button;

//Full blue Button
export const BlueFullButton = styled(Button)({
  color: "white",
  border: "2px solid #0FA3B1",
  borderRadius: "10px",
  width: "350px",
  height: "50px",
  backgroundColor: "#0FA3B1",
  "&:hover": {
    backgroundColor: "#0FA3B1",
    borderColor: "#0FA3B1",
  },
}) as typeof Button;

//Blue Button add a child
export const ButtonAddChild = styled(Button)({
  color: "black",
  border: "2px solid #0FA3B1",
  borderRadius: "5px",
  width: "180px",
  height: "40px",
  textTransform: "none",
  "& .MuiSvgIcon-root": {
    transition: "color 0.3s",
  },
  "&:hover": {
    backgroundColor: "#0FA3B1",
    color: "white",
    "& .MuiSvgIcon-root": {
      color: "white",
    },
  },
}) as typeof Button;

//Blue Button add a topic
export const ButtonAddDiscipline = styled(Button)({
  color: "black",
  border: "2px solid #0FA3B1",
  borderRadius: "5px",
  width: "190px",
  height: "40px",
  textTransform: "none",
  "& .MuiSvgIcon-root": {
    transition: "color 0.3s",
  },
  "&:hover": {
    backgroundColor: "#0FA3B1",
    color: "white",
    "& .MuiSvgIcon-root": {
      color: "white",
    },
  },
}) as typeof Button;

//Orange Button delete a child
export const ButtonDeleteChild = styled(Button)({
  color: "black",
  border: "2px solid #F7A072",
  borderRadius: "5px",
  width: "180px",
  height: "40px",
  textTransform: "none",
  "& .MuiSvgIcon-root": {
    transition: "color 0.3s",
  },
  "&:hover": {
    backgroundColor: "#F7A072",
    color: "white",
    "& .MuiSvgIcon-root": {
      color: "white",
    },
  },
}) as typeof Button;

export const ButtonAddChoice = styled(Button)({
  color: "black",
  border: "2px solid #0FA3B1",
  borderRadius: "5px",
  width: "170px",
  height: "40px",
  textTransform: "none",
  "& .MuiSvgIcon-root": {
    transition: "color 0.3s",
  },
  "&:hover": {
    backgroundColor: "#0FA3B1",
    color: "white",
    "& .MuiSvgIcon-root": {
      color: "white",
    },
  },
}) as typeof Button;
