export interface CardData {
  id: number;
  title: string;
  description: string;
}

interface Props {
  card: CardData;
}

const Card = ({ card }: Props) => {
  // TODO: implement this component
  return <article>{card.title}</article>;
};

export default Card;
