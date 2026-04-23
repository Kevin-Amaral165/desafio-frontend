// Libraries
import { useState, type JSX } from "react";

// Components
import { Checkbox } from "../checkbox/Checkbox";

// Styles
import {
  Container,
  Name,
  Subject,
  Row,
  Avatar,
  Users,
  UserBubble,
} from "./Card.style";

// Types
import type { CardProps } from "./Card.types";

export function Card({
  item,
  selected,
  onToggle,
}: CardProps): JSX.Element {
  const [hover, setHover] = useState<boolean>(false);

  const showCheckbox: boolean = hover || selected;

  return (
    <Container
      selected={selected}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onToggle(item.id)}
    >
      <Name>{item.name}</Name>
      <Subject>{item.subject}</Subject>

      <Row>
        <Avatar selected={selected}>
          {showCheckbox ? (
            <Checkbox checked={selected} />
          ) : (
            item.owner
          )}
        </Avatar>

        <Users>
          {item.users?.map((user: string, index: number) => (
            <UserBubble key={index} selected={selected}>
              {user}
            </UserBubble>
          ))}
        </Users>
      </Row>
    </Container>
  );
}