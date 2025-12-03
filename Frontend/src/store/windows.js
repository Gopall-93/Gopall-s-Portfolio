import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "@Constants";
import { immer } from "zustand/middleware/immer";
import { create } from "zustand";

const useWindowStore = create(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,

    openWindow: (WindowKey, data = null) =>
      set((state) => {
        const win = state.windows[WindowKey];
        win.isOpen = true;
        win.zIndex = state.nextZIndex;
        win.data = data ?? win.data;
        state.nextZIndex++;
      }),

    closeWindow: (WindowKey, data = null) =>
      set((state) => {
        const win = state.windows[WindowKey];
        win.isOpen = false;
        win.zIndex = INITIAL_Z_INDEX;
        win.data = null;
      }),

    focusWindow: (WindowKey, data = null) =>
      set((state) => {
        const win = state.windows[WindowKey];
        win.zIndex = state.nextZIndex;
      }),
  }))
);

export default useWindowStore;
