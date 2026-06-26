import { useSelector } from "react-redux";
import { selectCardData } from "../store/selectors";
import Card from "./Card";

const CardList = () => {
  const cardData = useSelector(selectCardData);
  // TODO: implement this component

  return cardData.map((card) => <Card key={card.id} card={card} />);
};

export default CardList;
