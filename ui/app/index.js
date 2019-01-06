require('@babel/register')({
    //extensions: [".es6", ".es", ".jsx", ".js"],
    ignore: [/\/(node_modules)\//],
    presets: [
        "@babel/preset-react",
        [
            "@babel/preset-env",
            {
                "targets": {
                    "electron": "3.0",
                    "esmodules": true
                }
            }
        ]],
});

require('electron-react-devtools').install();

require('./App');