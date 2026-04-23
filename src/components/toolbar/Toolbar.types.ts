// Enum
import type { ViewMode } from "../../enum/enum";

export interface ToolbarProps {
  onArchive?: () => void;
  onRestore?: () => void;
  setView?: (v: ViewMode) => void;
  view?: ViewMode;
}