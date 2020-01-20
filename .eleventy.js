const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const svgContents = require("eleventy-plugin-svg-contents");
// const pluginRespimg = require( "eleventy-plugin-respimg" );

module.exports = function(config) {

    config.addPassthroughCopy({ "src/assets/images": "assets/images" });
    config.addPassthroughCopy({ "src/assets/js": "assets/js" });
    config.addPassthroughCopy({ "src/assets/fonts": "assets/fonts" });
    config.addPassthroughCopy({ "src/assets/css": "assets/css" });
    config.addPassthroughCopy("favicon.ico");
    config.addPlugin(eleventyNavigationPlugin);
    config.addPlugin(syntaxHighlight);
    config.addPlugin(svgContents);
    config.addFilter('formatDate', value => {
        const ISOcode = 'en-GB';
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const d = new Date(value);
        return `${d.toLocaleDateString(ISOcode, options)}`;
      })
      
    // config.cloudinaryCloudName = 'indexed';
    // config.srcsetWidths = [ 320, 640, 960, 1280, 1600, 1920, 2240, 2560 ];
    // config.fallbackWidth = 640;
    // config.addPlugin( pluginRespimg );

    if(process.env.ELEVENTY_ENV == 'prod') {
        config.addTransform("htmlmin", require("./src/utils/minify-html.js"));
    }

    return {
        markdownTemplateEngine: "njk",
        templateFormats: ["html", "njk", "md"],
        passthroughFileCopy: true,
        
        dir: {
            input: "src/site",
            output: "_dist",
            includes: "_includes"
        }
    }
}