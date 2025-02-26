const fetch = require('node-fetch');
const chalk = require('chalk');

module.exports = {
    command: 'plugin <action>',
    register: (command, modules) => {
      command.option('-p --plugin <pluginName>')
       .action(async (action, options) => {
         const response = await fetch('https://raw.githubusercontent.com/rahulptl165/Plugin-Finder/refs/heads/main/plugin.json')
         const data = await response.json();
         const { plugin: pluginName } = options;
         switch(action){
              case 'search':
                    if(!pluginName){
                         console.log(chalk.blue.bold("Available Plugins: "));
                         data.plugins.forEach( plugin => {
                         console.log(chalk.green("Name: "), plugin.name);
                         console.log(chalk.green("install: "), plugin.install);
                         console.log(chalk.gray("-------------------------"))
                        })
                    }else{
                        const plugin = data.plugins.find( plugin => plugin.name === pluginName)
                        if(plugin){
                           console.log(chalk.blue.bold("Plugin Found: "));
                           console.log(chalk.green("Name: "), plugin.name);
                           console.log(chalk.green("Description: "), plugin.description);
                        }else{
                            console.log(chalk.red("Error: "), chalk.yellow(`Plugin "${pluginName}" not found.`));
                        }
                    }
                break;
                case 'info':
                    if(!pluginName){
                        console.log(chalk.red("Error: "), chalk.yellow("Please provide a plugin name using --plugin <pluginName>."));
                    }else{
                        const plugin = data.plugins.find(plugin => plugin.name === pluginName)
                        if(plugin){
                           console.log(chalk.blue.bold("Plugin Found: "));
                           console.log(chalk.green("Name: "), plugin.name);
                           console.log(chalk.green("Descriptiom: "), plugin.description);
                           console.log(chalk.green("Version: "), plugin.version)
                           console.log(chalk.green("repository: "), plugin.repository);
                           console.log(chalk.green("Install: "), plugin.install);
                        }else{
                            console.log(chalk.red("Error: "), chalk.yellow(`Plugin "${pluginName}" not found.`));
                        }
                    }
                break;
                case 'help':
                    console.log(chalk.blue.bold("Plugin Command Help: "));
                    console.log(chalk.green("1. Search for a Plugin: "));
                    console.log(chalk.yellow("   neu plugin search --plugin <pluginName>"));
                    console.log(chalk.green("2. List All Available Plugins:"));
                    console.log(chalk.yellow("   neu plugin search"));
                    console.log(chalk.green("3. Provides information about the plugin:"));
                    console.log(chalk.yellow("   neu plugin info --plugin <pluginName>"));
                break;
                default:
                    console.log(chalk.red("Error: "), chalk.yellow("Invalid action. Use 'neu plugin help' for a list of commands."));
                break;
            }
       });
    }
}