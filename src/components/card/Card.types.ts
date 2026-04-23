export type CardProps = {
  item: {
    id: number;
    name: string;
    owner: string;
    subject: string;
    users?: string[];
  };
  onToggle: (id: number) => void;
  selected: boolean;
};