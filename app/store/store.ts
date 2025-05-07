import { create } from "zustand";
import * as FileSystem from "expo-file-system";

type ScenarioState = {
  currentScenario: number;
  completedScenarios: number[];
  currentTotal: number;
  logMessage: string;
  totalEntryLog: string;
  tipSelectionLog: string;
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
  setTotalEntryLog: (log: string) => void;
  setTipSelectionLog: (log: string) => void;
  appendToLog: (data: string) => Promise<void>;
  initLogFile: () => Promise<void>;
};

const LOG_FILE = FileSystem.documentDirectory + "trials.csv";

export const useScenarioStore = create<ScenarioState>((set) => ({
  currentScenario: 1,
  completedScenarios: [],
  currentTotal: 0,
  tippedTotal: 0,
  nextParticipantID: 1,
  logMessage: "\n start of log \n",
  totalEntryLog: "no total entered",
  tipSelectionLog: "no tip selected",
  incrementParticipantID: (id) => set({ nextParticipantID: id }),
  setTippedTotal: (total) => set({ tippedTotal: total }),
  setLogMessage: (message) =>
    set((state) => ({ logMessage: state.logMessage + message })),
  setTotalEntryLog: (log) => set({ totalEntryLog: log }),
  setTipSelectionLog: (log) => set({ tipSelectionLog: log }),
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
  initLogFile: async () => {
    try {
      const fileInfo = await FileSystem.getInfoAsync(LOG_FILE);
      if (!fileInfo.exists) {
        await FileSystem.writeAsStringAsync(
          LOG_FILE,
          "timestamp,event,value\n"
        );
      }
      const contents = await FileSystem.readAsStringAsync(LOG_FILE);
      set({ logMessage: contents });
    } catch (error) {
      console.error("Error initializing log file:", error);
    }
  },
  appendToLog: async (data) => {
    try {
      // Read existing content
      const existing = await FileSystem.readAsStringAsync(LOG_FILE).catch(
        () => ""
      );

      // Write old + new content
      const newContent = existing + `${data}\n`;
      await FileSystem.writeAsStringAsync(LOG_FILE, newContent, {
        encoding: FileSystem.EncodingType.UTF8,
      });

      set({ logMessage: "\n" });
    } catch (error) {
      console.error("Error appending log:", error);
    }
  },
}));
