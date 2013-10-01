exports.GREP_CMD = process.platform === "win32" ? "grep" : __dirname + "/bin/grep";
exports.FIND_CMD = process.platform === "win32" ? "find" : __dirname + "/bin/find";
