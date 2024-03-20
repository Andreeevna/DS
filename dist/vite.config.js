"use strict";
exports.__esModule = true;
var plugin_react_1 = require("@vitejs/plugin-react");
var vite_1 = require("vite");
var vite_plugin_svgr_1 = require("vite-plugin-svgr");
var vite_tsconfig_paths_1 = require("vite-tsconfig-paths");
exports["default"] = vite_1.defineConfig({
    plugins: [plugin_react_1["default"](), vite_tsconfig_paths_1["default"](), vite_plugin_svgr_1["default"]()],
    optimizeDeps: {
        esbuildOptions: {
            loader: {
                '.js': 'jsx'
            }
        }
    }
});
