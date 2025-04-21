import { create } from 'zustand';

interface SurveyState {
  currentScenario: number;
  answers: Record<string, number>;
  setAnswer: (questionId: string, value: number) => void;
  goToScenario: (scenarioNumber: number) => void;
  nextScenario: () => void;
  reset: () => void;
}

export const useSurveyStore = create<SurveyState>()((set) => ({
  currentScenario: 1,
  answers: {},
  setAnswer: (questionId, value) => set((state) => ({
    answers: { ...state.answers, [questionId]: value }
  })),
  goToScenario: (scenarioNumber) => set({ currentScenario: scenarioNumber }),
  nextScenario: () => set((state) => ({
    currentScenario: state.currentScenario < 4 ? state.currentScenario + 1 : 1
  })),
  reset: () => set({ currentScenario: 1, answers: {} }),
}));