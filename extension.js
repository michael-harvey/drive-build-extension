// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "drivebuildextension" is now active!'
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "drivebuildextension.driveBuild",
    function () {
      // The code you place here will be executed every time your command is executed
      const tabOne = vscode.window.createTerminal("new build");
      tabOne.sendText("nvm use 12");
      tabOne.sendText("cd app//client");
      tabOne.sendText("yarn start");

      const tabTwo = vscode.window.createTerminal("old build");
      tabTwo.sendText("nvm use 10");
      tabTwo.sendText("cd themes//base");
      tabTwo.sendText("yarn start");

      // Display a message box to the user
      vscode.window.showInformationMessage("Welcome back commander");
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
