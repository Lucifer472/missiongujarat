import { create } from "zustand";

interface useNavStoreProps {
  isShow: boolean;
  toggle: (b: boolean) => void;
}

export const useNavStore = create<useNavStoreProps>((set) => ({
  isShow: true,
  toggle: (b) => set({ isShow: b }),
}));

interface useAdStateProp {
  adCode: {
    label: string;
    id: string;
    size: googletag.GeneralSize;
    divSize?: { x: number; y: number };
  }[];
  setAdCode: (
    code: {
      label: string;
      id: string;
      size: googletag.GeneralSize;
      divSize?: { x: number; y: number };
    }[]
  ) => void;
}

export const useAdState = create<useAdStateProp>((set) => ({
  adCode: [
    {
      label: "/23060189646/N5",
      id: "div-gpt-ad-1720162921566-0",
      size: [336, 280],
    },
    {
      label: "/23060189646/N6",
      id: "div-gpt-ad-1720163009476-0",
      size: [336, 280],
    },
    {
      label: "/23060189646/N7",
      id: "div-gpt-ad-1720163069527-0",
      size: [336, 280],
    },
    {
      label: "/23060189646/N8",
      id: "div-gpt-ad-1720163121014-0",
      size: [336, 280],
    },
    {
      label: "/23060189646/N8",
      id: "div-gpt-ad-1720163121014-0",
      size: [336, 280],
    },
    {
      label: "/22725519965/106",
      id: "div-gpt-ad-1716294101983-0",
      size: [336, 280],
    },
    {
      label: "/22725519965/17",
      id: "div-gpt-ad-1712814369147-0",
      size: [336, 280],
    },
    {
      label: "/23060189646/MSG_300x600",
      id: "div-gpt-ad-1716294295818-0",
      size: [300, 600],
      divSize: { x: 300, y: 600 },
    },
    {
      label: "/23060189646/BNR2",
      id: "div-gpt-ad-1720163358420-0",
      size: [300, 75],
      divSize: { x: 300, y: 75 },
    },
    {
      label: "/23060189646/A2",
      id: "div-gpt-ad-1720163175891-0",
      size: [320, 50],
      divSize: { x: 300, y: 50 },
    },
    {
      label: "/23060189646/F2",
      id: "div-gpt-ad-1720163279509-0",
      size: [320, 480],
      divSize: { x: 300, y: 480 },
    },
  ],
  setAdCode: (code) => set({ adCode: code }),
}));
