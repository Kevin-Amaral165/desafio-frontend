// Libraries
import type { JSX } from "react";
import { useTranslation } from "react-i18next";

// Components
import { Card } from "../card/Card";
import { EmptyState } from "../emptyState/EmptyState";

// Types
import type { ContentListProps } from "./ContentList.types";
import type { Item } from "../../pages/dashboard/Dashboard.types";

export function ContentList({
  items,
  onToggleSelect,
  selectedItems,
}: ContentListProps): JSX.Element {
  const { t } = useTranslation();

  if (!items || items.length === 0) {
    return (
      <EmptyState
        title={t("empty.folderTitle")}
        description={t("empty.folderDesc")}
      />
    );
  }

  return (
    <div>
      {items.map((item: Item): JSX.Element => (
        <Card
          key={item.id}
          item={item}
          selected={selectedItems.includes(item.id)}
          onToggle={onToggleSelect}
        />
      ))}
    </div>
  );
}