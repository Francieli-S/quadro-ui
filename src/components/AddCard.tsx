import { FC, useState } from 'react';

export interface AddCardProps {
  onAdd: (label: string) => void;
}

export const AddCard: FC<AddCardProps> = ({ onAdd }) => {
  const [card, setCard] = useState('');

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onAdd(card);
          setCard('');
        }}
      >
        <input
          onChange={(e) => setCard(e.target.value)}
          value={card}
          placeholder='Add a new card'
        />
      </form>
    </>
  );
};
