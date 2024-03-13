const vscode = require('vscode');

function activate(context) {
    // Apply your theme settings
    const themeId = 'Yara-LTheme';
    vscode.workspace.getConfiguration().update('workbench.colorTheme', themeId, vscode.ConfigurationTarget.Workspace);
}
// Deactivate theme when unloading
function deactivate() {}

module.exports = {
    activate,
    deactivate
}
