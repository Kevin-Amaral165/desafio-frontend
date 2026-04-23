// Libraries
import {
  useState,
  useEffect,
  type JSX,
} from "react";

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
    selectedSubMenuId: 0,
    trashItems: [],
    view: ViewMode.INBOX,
  });

  /**
   * Load persisted state from localStorage when component mounts.
   * This simulates a backend persistence layer.
   */
  useEffect(() => {
    const saved: string | null = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setState(parsed);
      } catch (e) {
        console.warn("Corrupted storage ignored");
      }
    }
  }, []);

   /**
   * Persist the entire dashboard state to localStorage
   * to simulate backend persistence behavior.
   */
  useEffect((): void => {
    const safeState: DashboardState = {
      selectedSubMenuId: state.selectedSubMenuId,
      menus: state.menus,
      inboxBySubMenu: state.inboxBySubMenu,
      trashItems: state.trashItems,
      selectedItems: state.selectedItems,
      view: state.view,
      isLoadingMenus: state.isLoadingMenus,
      isLoadingItems: state.isLoadingItems,
    };

    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(safeState)
      );
    } catch (err) {
      console.warn("Failed to persist state", err);
    }
  }, [state]);

   /**
   * Fetch available menus from API (runs once on mount).
   * Sets initial selected submenu automatically.
   */
  useEffect((): void => {
    async function loadMenus(): Promise<void> {
      const res: Response = await fetch(MENUS_URL);
      const data: Menu[] = await res.json();

      setState((prev) => ({
        ...prev,
        menus: data,
        selectedSubMenuId: data?.[0]?.subMenus?.[0]?.id ?? null,
        isLoadingMenus: false,
      }));
    }

    loadMenus();
  }, []);

  /**
   * Fetch items for selected submenu.
   * Uses local cache to avoid unnecessary API calls.
   */
  useEffect((): void => {
    if (!state.selectedSubMenuId) return;

    const id: number = state.selectedSubMenuId;

    if (state.inboxBySubMenu[id]) return;

    async function loadItems() {
      setState((prev) => ({ ...prev, isLoadingItems: true }));

      const res: Response = await fetch(`${ITEMS_URL}/${id}`);
      const data: { subMenuItems: Item[] } = await res.json();

      setState((prev) => ({
        ...prev,
        inboxBySubMenu: {
          ...prev.inboxBySubMenu,
          [id]: data.subMenuItems || [],
        },
        isLoadingItems: false,
      }));
    }

    loadItems();
  }, [state.selectedSubMenuId]);

  /**
   * Determines which items to display based on current view (inbox vs trash).
   * Uses cached inbox items and state for trash items.
   */
  const currentItems: Item[] =
    state.view === "inbox"
      ? state.inboxBySubMenu[state.selectedSubMenuId ?? 0] || []
      : state.trashItems;

  /**
   * Toggle selection of an item (checkbox logic).
   * Adds or removes item ID from selected list.
   */
  const toggleSelectItem: (id: number) => void = (id: number) => {
    setState((prev) => {
      const exists = prev.selectedItems.includes(id);

      return {
        ...prev,
        selectedItems: exists
          ? prev.selectedItems.filter((i) => i !== id)
          : [...prev.selectedItems, id],
      };
    });
  };

  /**
   * Archive selected items.
   * Moves items from inbox to trash.
   */
  const handleArchive: () => void = () => {
    const subId: number | null= state.selectedSubMenuId;
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

  /**
   * Restore items from trash back to inbox.
   * Simulates restore operation from backend.
   */
  const handleRestore: () => void = () => {
    const subId: number | null = state.selectedSubMenuId;
    if (!subId) return;

    const selected: Item[] = state.trashItems.filter((i) =>
      state.selectedItems.includes(i.id)
    );

    const inbox: Item[] = state.inboxBySubMenu[subId] || [];

    setState((prev) => ({
      ...prev,
      trashItems: prev.trashItems.filter(
        (i) => !prev.selectedItems.includes(i.id)
      ),
      inboxBySubMenu: {
        ...prev.inboxBySubMenu,
        [subId]: [...inbox, ...selected],
      },
      selectedItems: [],
    }));
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
          }))
        }
      />

      <Divider onMouseDown={startResize} />

      <Main>
        <Toolbar
          view={state.view}
          setView={(view: ViewMode) =>
            setState((prev) => ({ ...prev, view: view }))
          }
          onArchive={handleArchive}
          onRestore={handleRestore}
        />

        <RightPanel>
          {state.isLoadingItems ? (
            <Loading />
          ) : (
            <ContentList
              items={currentItems}
              selectedItems={state.selectedItems}
              onToggleSelect={toggleSelectItem}
            />
          )}
        </RightPanel>
      </Main>
    </Container>
  );
}