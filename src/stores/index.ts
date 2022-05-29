import create from 'zustand';
import type { ViewName } from '../types';

interface Store {
  currView: ViewName;
  setCurrView: (viewName: ViewName) => void;
}

const useStore = create<Store>((set) => ({
  currView: 'home',
  setCurrView(viewName) {
    set({ currView: viewName });
  }
}));

export default useStore;
