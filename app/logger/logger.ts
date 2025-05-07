import * as FileSystem from "expo-file-system";
const LOG_FILE = FileSystem.documentDirectory + "trials.csv";

// Initialize the log file
export const initLogger = async () => {
  try {
    const fileInfo = await FileSystem.getInfoAsync(LOG_FILE);
    if (!fileInfo.exists) {
      await FileSystem.writeAsStringAsync(LOG_FILE, "timestamp,event,value\n");
    }
  } catch (error) {
    console.error("Failed to initialize logger:", error);
  }
};

// Append a new log entry
export const logToFile = async (data: string) => {
  try {
    // Read existing content first
    const existingContent = await FileSystem.readAsStringAsync(LOG_FILE).catch(
      () => ""
    );

    // Write old + new content
    await FileSystem.writeAsStringAsync(
      LOG_FILE,
      existingContent + `${data}\n`,
      { encoding: FileSystem.EncodingType.UTF8 }
    );
  } catch (error) {
    console.error("Failed to write log:", error);
  }
};

// Read all logs
export const readLogs = async () => {
  try {
    return await FileSystem.readAsStringAsync(LOG_FILE);
  } catch (error) {
    console.error("Failed to read logs:", error);
    return "";
  }
};

// Clear logs
export const clearLogs = async () => {
  try {
    await FileSystem.deleteAsync(LOG_FILE);
    await initLogger(); // Reinitialize
  } catch (error) {
    console.error("Failed to clear logs:", error);
  }
};
