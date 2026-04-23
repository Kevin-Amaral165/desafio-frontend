// Libraries
import { useState, useRef, useEffect } from "react";

// Components
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Toolbar } from "../../components/toolbar/Toolbar";
import { ContentList } from "../../components/contentList/ContentList";

// Styles
import {
  Container,
  Main,
  Divider,
  RightPanel,
} from "./Dashboard.style";

// Types
import type { DashboardState } from "./Dashboard.types";

const mockMenus = [
  {
    id: 1,
    label: "Conta 1",
    count: 15,
    subMenus: [
      { id: 101, label: "Caixa de entrada" },
      { id: 102, label: "Enviados" },
    ],
  },
];

export function Dashboard() {
  const [state, setState] = useState<DashboardState>({
    selectedSubMenuId: 101,
    sidebarWidth: 260,
  });

  const isDragging = useRef(false);

  // ==============================
  // RESIZE SIDEBAR
  // ==============================
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;

      const newWidth = Math.max(200, Math.min(400, e.clientX));

      setState((prev) => ({
        ...prev,
        sidebarWidth: newWidth,
      }));
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      document.body.style.cursor = "default";
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const handleMouseDown = () => {
    isDragging.current = true;
    document.body.style.cursor = "col-resize";
  };

  const handleSelectSubMenu = (id: number) => {
    setState((prev) => ({
      ...prev,
      selectedSubMenuId: id,
    }));
  };

  return (
    <Container>
      {/* SIDEBAR */}
      <Sidebar
        width={state.sidebarWidth}
        menus={mockMenus}
        selectedSubMenuId={state.selectedSubMenuId}
        onSelectSubMenu={handleSelectSubMenu}
      />

      {/* DIVIDER (RESIZE) */}
      <Divider onMouseDown={handleMouseDown} />

      {/* MAIN AREA */}
      <Main>
        {/* TOOLBAR (layout 3) */}
        <Toolbar />

        {/* CONTENT (layout 4) */}
        <RightPanel>
          <ContentList selectedSubMenuId={state.selectedSubMenuId} />
        </RightPanel>
      </Main>
    </Container>
  );
}