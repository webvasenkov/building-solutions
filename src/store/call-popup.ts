import { preventScrollByCondition } from '@/lib/helper';
import { create } from 'zustand';

interface CallPopupState {
  showCallPopup: boolean;
  setShowCallPopup: (showCallPopup: boolean) => void;
}

export const useCallPopupStore = create<CallPopupState>()((set) => ({
  showCallPopup: false,
  setShowCallPopup: (showCallPopup: boolean) =>
    set((state) => {
      preventScrollByCondition(showCallPopup);
      return { ...state, showCallPopup };
    }),
}));
