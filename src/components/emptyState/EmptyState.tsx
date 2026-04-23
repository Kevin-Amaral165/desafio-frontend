// Libraries
import type { JSX } from "react";

// Styles
import {
  Container,
  Icon,
  Title,
  Description,
} from "./EmptyState.style";

// Types
import type { EmptyStateProps } from "./EmptyState.types";

export function EmptyState({
  description,
  title,
}: EmptyStateProps): JSX.Element {
  return (
    <Container>
      <Icon>📭</Icon>

      <Title>
        {title}
      </Title>

      <Description>
        {description}
      </Description>
    </Container>
  );
}