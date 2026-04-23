// Libraries
import { useState, useEffect, type JSX } from "react";

// Components
import { ContentList } from "../../components/contentList/ContentList";
import { Loading } from "../../components/loading/Loading";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Toolbar } from "../../components/toolbar/Toolbar";

// Config
import { ITEMS_URL, MENUS_URL } from "../../config/api";

// Enum
import { ViewMode } from "../../enum/enum";

// Hooks
import { useResizableSidebar } from "../../hooks/useResisableSidebar";

// Style
import {
  Container,
  Main,
  Divider,
  RightPanel,
  ContentWrapper,
} from "./Dashboard.style";

// Types
import type { DashboardState, Item, Menu } from "./Dashboard.types";

const STORAGE_KEY: string = "mail_simulation_state";

export function Dashboard(): JSX.Element {
  const { width, startResize } = useResizableSidebar();

  const [state, setState] = useState<DashboardState>({
    inboxBySubMenu: {},
    isLoadingMenus: true,
    isLoadingItems: false,
    menus: [],
    selectedItems: [],
    selectedSubMenuId: null,
    trashItems: [],
    view: ViewMode.INBOX,
  });

  // ================= LOAD STORAGE =================
  useEffect(() => {
    const saved: string | null = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      try {
        setState(JSON.parse(saved));
      } catch {
        console.warn("Corrupted storage ignored");
      }
    }
  }, []);

  // ================= PERSIST STATE =================
  useEffect((): void => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  // ================= LOAD MENUS =================
  useEffect((): void => {
    async function loadMenus() {
      const res: Response = await fetch(MENUS_URL);
      const data: Menu[] = await res.json();

      setState((prev): DashboardState => ({
        ...prev,
        menus: data,
        selectedSubMenuId: data?.[0]?.subMenus?.[0]?.id ?? null,
        isLoadingMenus: false,
      }));
    }

    loadMenus();
  }, []);

  // ================= LOAD ITEMS =================
  useEffect(() => {
    if (!state.selectedSubMenuId) return;

    const id: number = state.selectedSubMenuId;

    if (state.inboxBySubMenu[id]) return;

    async function loadItems() {
      setState((prev): DashboardState => ({ ...prev, isLoadingItems: true }));

      const res: Response = await fetch(`${ITEMS_URL}/${id}`);
      const data: { subMenuItems?: Item[] } = await res.json();

      const enriched: Item[] = (data.subMenuItems || []).map(
        (item: Item) => ({
          ...item,
          originSubMenuId: id,
        })
      );

      setState((prev): DashboardState => ({
        ...prev,
        inboxBySubMenu: {
          ...prev.inboxBySubMenu,
          [id]: enriched,
        },
        isLoadingItems: false,
      }));
    }

    loadItems();
  }, [state.selectedSubMenuId]);

  // ================= VIEW ITEMS =================
  const currentItems: Item[] =
    state.view === ViewMode.INBOX
      ? state.inboxBySubMenu[state.selectedSubMenuId ?? 0] || []
      : state.trashItems;

  // ================= TOGGLE SELECT ITEM =================
  const toggleSelectItem: (id: number) => void = (id: number) => {
    setState((prev): DashboardState => {
      const exists: boolean = prev.selectedItems.includes(id);

      return {
        ...prev,
        selectedItems: exists
          ? prev.selectedItems.filter((i) => i !== id)
          : [...prev.selectedItems, id],
      };
    });
  };

  // ================= ARCHIVE =================
  const handleArchive: () => void = () => {
    const subId: number | null = state.selectedSubMenuId;
    if (!subId) return;

    const inbox: Item[] = state.inboxBySubMenu[subId] || [];

    const selected: Item[] = inbox.filter((i) =>
      state.selectedItems.includes(i.id)
    );

    setState((prev) => ({
      ...prev,
      inboxBySubMenu: {
        ...prev.inboxBySubMenu,
        [subId]: inbox.filter(
          (i) => !prev.selectedItems.includes(i.id)
        ),
      },
      trashItems: [...prev.trashItems, ...selected],
      selectedItems: [],
    }));
  };

  // ================= RESTORE =================
  const handleRestore: () => void = () => {
    const selected: Item[] = state.trashItems.filter((i) =>
      state.selectedItems.includes(i.id)
    );

    const updatedInbox: { [key: number]: Item[] } = { ...state.inboxBySubMenu };

    selected.forEach((item) => {
      const subId = (item as Item & { originSubMenuId: number }).originSubMenuId;

      if (!updatedInbox[subId]) {
        updatedInbox[subId] = [];
      }

      updatedInbox[subId].push(item);
    });

    setState((prev) => ({
      ...prev,
      trashItems: prev.trashItems.filter(
        (i) => !prev.selectedItems.includes(i.id)
      ),
      inboxBySubMenu: updatedInbox,
      selectedItems: [],
    }));
  };

  // ================= CHANGE VIEW =================
  const setView: (view: ViewMode) => void = (view: ViewMode) => {
    setState((prev): DashboardState => {
      const firstSubMenu =
        prev.menus?.[0]?.subMenus?.[0]?.id ?? null;

      if (view === ViewMode.TRASH) {
        return {
          ...prev,
          view,
          selectedSubMenuId: null,
          selectedItems: [],
        };
      }

      return {
        ...prev,
        view,
        selectedSubMenuId: firstSubMenu,
        selectedItems: [],
      };
    });
  };

  return (
    <Container>
      <Sidebar
        width={width}
        menus={state.menus}
        selectedSubMenuId={state.selectedSubMenuId ?? undefined}
        onSelectSubMenu={(id: number) =>
          setState((prev) => ({
            ...prev,
            selectedSubMenuId: id,
            selectedItems: [],
            view: ViewMode.INBOX,
          }))
        }
      />

      <Divider onMouseDown={startResize} />

      <Main>
        <Toolbar
          view={state.view}
          setView={setView}
          onArchive={handleArchive}
          onRestore={handleRestore}
        />

        <RightPanel>
          {state.isLoadingItems ? (
            <Loading />
          ) : (
            <ContentWrapper>
              <ContentList
                items={currentItems}
                selectedItems={state.selectedItems}
                onToggleSelect={toggleSelectItem}
              />
            </ContentWrapper>
          )}
        </RightPanel>
      </Main>
    </Container>
  );
}