const fs = require("fs");
const path = require("path");

function logRequestBody(body) {
  const logFilePath = path.join(__dirname, "../logs/app.log");
  const logEntry = `[${new Date().toISOString()}] ${JSON.stringify(body)}\n`;
  fs.appendFile(logFilePath, logEntry, (err) => {
    if (err) {
      console.error("Failed to write log:", err);
    }
  });
}

module.exports = { logRequestBody };
