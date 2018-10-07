// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": require("gatsby-module-loader?name=component---src-templates-blog-post-js!/Users/c_bflores/Documents/GitHub/gcpatterns/src/templates/blog-post.js"),
  "component---cache-dev-404-page-js": require("gatsby-module-loader?name=component---cache-dev-404-page-js!/Users/c_bflores/Documents/GitHub/gcpatterns/.cache/dev-404-page.js"),
  "component---src-pages-blog-js": require("gatsby-module-loader?name=component---src-pages-blog-js!/Users/c_bflores/Documents/GitHub/gcpatterns/src/pages/blog.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/c_bflores/Documents/GitHub/gcpatterns/src/pages/index.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/c_bflores/Documents/GitHub/gcpatterns/.cache/json/layout-index.json"),
  "blog-automate-with-webhooks.json": require("gatsby-module-loader?name=path---blog-automate-with-webhooks!/Users/c_bflores/Documents/GitHub/gcpatterns/.cache/json/blog-automate-with-webhooks.json"),
  "blog-hello-world.json": require("gatsby-module-loader?name=path---blog-hello-world!/Users/c_bflores/Documents/GitHub/gcpatterns/.cache/json/blog-hello-world.json"),
  "blog-static-sites-are-great.json": require("gatsby-module-loader?name=path---blog-static-sites-are-great!/Users/c_bflores/Documents/GitHub/gcpatterns/.cache/json/blog-static-sites-are-great.json"),
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/Users/c_bflores/Documents/GitHub/gcpatterns/.cache/json/dev-404-page.json"),
  "blog.json": require("gatsby-module-loader?name=path---blog!/Users/c_bflores/Documents/GitHub/gcpatterns/.cache/json/blog.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/c_bflores/Documents/GitHub/gcpatterns/.cache/json/index.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/c_bflores/Documents/GitHub/gcpatterns/.cache/layouts/index.js")
}