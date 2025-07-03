const fs = require("fs");
const { exec } = require("child_process");
const { promisify } = require("util");

const execAsync = promisify(exec);

const codeRunner = async (code, test, extension) => {
  fs.writeFileSync("input.txt", test || "");

  let command = "";
  try {
    switch (extension) {
      case "cpp":
        fs.writeFileSync("main.cpp", code);
        command = "g++ main.cpp -o main && ./main < input.txt";
        break;

      case "py":
        fs.writeFileSync("main.py", code);
        command = "python3 main.py < input.txt";
        break;

      case "java":
        fs.writeFileSync("Main.java", code);
        command = "javac Main.java && java Main < input.txt";
        break;

      case "js":
        fs.writeFileSync("main.js", code);
        command = "node main.js < input.txt";
        break;

      default:
        return { success: false, output: "Unsupported language extension." };
    }

    const { stdout } = await execAsync(command);
    return { success: true, output: stdout };
  } catch (error) {
    return { success: false, output: error.stderr || error.message };
  }
};


module.exports = {
  codeRunner,
};
