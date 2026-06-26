import { useSelector } from "react-redux";
import { selectCardData } from "../store/selectors";

const CardList = () => {
  const cardData = useSelector(selectCardData);
  // TODO: implement this component
  return null;
};

export default CardList;
