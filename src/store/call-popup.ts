import { create } from 'zustand';

interface CallPopupState {
  showCallPopup: boolean;
  setShowCallPopup: (showCallPopup: boolean) => void;
}

export const useCallPopupStore = create<CallPopupState>()((set) => ({
  showCallPopup: false,
  setShowCallPopup: (showCallPopup: boolean) =>
    set((state) => ({ ...state, showCallPopup })),
}));
