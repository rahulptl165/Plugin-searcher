# Neutralinojs CLI - Plugin-Explorer

This plugin allows users to search for available plugins, 
get detailed information about specific plugins, and 
list all available plugins. 

# Installation
This plugin extends the Neutralinojs CLI to allow users to extende plugin management. Follow these steps to install:

## 1. Install Neutralino CLI
``` 
npm install -g @neutralinojs/neu
```
## 2. Add the Plugin-Explorer Plugin
```
neu plugins --add plugin-explorer
```
# Usage
## List all available plugin:
```
neu plugin search
```
## Search plugin by name:
```
neu plugin search --plugin <pluginName>
```
## Get detailed information about specific plugins:
```
neu plugin info --plugin <pluginName>
```
## Plugin command Help:
```
neu plugin help
```
# Uninstallation
```
neu plugins --remove plugin-explorer
```
