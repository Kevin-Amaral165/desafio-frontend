import { useState, useRef, useEffect } from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Container, Content, Divider } from "./Dashboard.style";

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

type DashboardState = {
  selectedSubMenuId: number;
  sidebarWidth: number;
};

export function Dashboard() {
  const [state, setState] = useState<DashboardState>({
    selectedSubMenuId: 101,
    sidebarWidth: 260,
  });

  const isDragging = useRef(false);

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
  };

  const handleSelectSubMenu = (id: number) => {
    setState((prev) => ({
      ...prev,
      selectedSubMenuId: id,
    }));
  };

  return (
    <Container>
      <Sidebar
        width={state.sidebarWidth}
        menus={mockMenus}
        selectedSubMenuId={state.selectedSubMenuId}
        onSelectSubMenu={handleSelectSubMenu}
      />

      <Divider onMouseDown={handleMouseDown} />

      <Content>
        <h1>Conteúdo</h1>
        <p>Selecionado: {state.selectedSubMenuId}</p>
      </Content>
    </Container>
  );
}