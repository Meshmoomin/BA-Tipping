import { create } from "zustand";

type ScenarioState = {
  currentScenario: number;
  completedScenarios: number[];
  currentTotal: number;
  logMessage: string;
  tippedTotal: number;
  nextParticipantID: number;
  nextScenario: () => void;
  setScenario: (id: number) => void;
  markCompleted: () => void;
  incrementParticipantID: (id: number) => void;
  setTotal: (total: number) => void;
  setTippedTotal: (total: number) => void;
  setLogMessage: (message: string) => void;
  resetLogMessage: () => void;
};

export const useScenarioStore = create<ScenarioState>((set) => ({
  currentScenario: 1,
  completedScenarios: [],
  currentTotal: 0,
  tippedTotal: 0,
  nextParticipantID: 1,
  logMessage: "\n start of log \n",
  incrementParticipantID: (id) => set({ nextParticipantID: id }),
  setTippedTotal: (total) => set({ tippedTotal: total }),
  setLogMessage: (message) =>
    set((state) => ({ logMessage: state.logMessage + message })),
  setTotal: (total) => set({ currentTotal: total }),
  nextScenario: () =>
    set((state) => ({
      currentScenario: (state.currentScenario % 4) + 1, // Cycles 1-4
    })),
  setScenario: (id) => set({ currentScenario: id }),
  markCompleted: () =>
    set((state) => ({
      completedScenarios: [...state.completedScenarios, state.currentScenario],
    })),
  resetLogMessage: () => set({ logMessage: "\n Next Trial \n" }),
}));
