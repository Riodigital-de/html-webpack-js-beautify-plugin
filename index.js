const jsBeautify = require("js-beautify"),
    _ = require('lodash');

function HtmlWebpackJSBeautifyPlugin(options) {
    this.options = _.merge(
        {
            indent_size: 2,
            indent_char: " ",
            indent_inner_html: true,
            extra_liners: []
        },
        options
    );
}

HtmlWebpackJSBeautifyPlugin.prototype.apply = function (compiler) {
    var self = this;

    compiler.plugin('compilation', function (compilation) {
        compilation.plugin('html-webpack-plugin-after-html-processing', function (htmlPluginData, callback) {

            htmlPluginData.html = jsBeautify.html(htmlPluginData.html, self.options)

            callback(null, htmlPluginData);
        });
    });
};

module.exports = HtmlWebpackJSBeautifyPlugin;
