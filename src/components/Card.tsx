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
  return (
    <div>
      <article>
        <h2>{card.title}</h2>
        <p>{card.description}</p>
      </article>
    </div>
  );
};

export default Card;
