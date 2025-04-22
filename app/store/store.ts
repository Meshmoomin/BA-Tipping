import { create } from 'zustand';

type ScenarioState = {
  currentScenario: number;
  completedScenarios: number[];
  nextScenario: () => void;
  setScenario: (id: number) => void;
  markCompleted: () => void;
};

export const useScenarioStore = create<ScenarioState>((set) => ({
  currentScenario: 1,
  completedScenarios: [],
  nextScenario: () => set((state) => ({
    currentScenario: state.currentScenario % 4 + 1 // Cycles 1-4
  })),
  setScenario: (id) => set({ currentScenario: id }),
  markCompleted: () => set((state) => ({
    completedScenarios: [...state.completedScenarios, state.currentScenario]
  }))
}));