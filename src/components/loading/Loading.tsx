// Libraries
import type { JSX } from "react";

// Translation
import { useTranslation } from "react-i18next";

// Styles
import {
  LoadingContainer,
  Spinner,
  Text,
} from "./Loading.style";

// Types
import type { LoadingProps } from "./Loading.types";

export function Loading({
  fullHeight = false,
  text,
}: LoadingProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <LoadingContainer fullHeight={fullHeight}>
      <Spinner />
      <Text>
        {text ?? t("loading.default")}
      </Text>
    </LoadingContainer>
  );
}