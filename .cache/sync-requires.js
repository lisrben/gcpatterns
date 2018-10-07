// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/c_bflores/Documents/GitHub/gcpatterns/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/c_bflores/Documents/GitHub/gcpatterns/src/templates/blog-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/c_bflores/Documents/GitHub/gcpatterns/.cache/dev-404-page.js")),
  "component---src-pages-blog-js": preferDefault(require("/Users/c_bflores/Documents/GitHub/gcpatterns/src/pages/blog.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/c_bflores/Documents/GitHub/gcpatterns/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/c_bflores/Documents/GitHub/gcpatterns/.cache/json/layout-index.json"),
  "blog-automate-with-webhooks.json": require("/Users/c_bflores/Documents/GitHub/gcpatterns/.cache/json/blog-automate-with-webhooks.json"),
  "blog-hello-world.json": require("/Users/c_bflores/Documents/GitHub/gcpatterns/.cache/json/blog-hello-world.json"),
  "blog-static-sites-are-great.json": require("/Users/c_bflores/Documents/GitHub/gcpatterns/.cache/json/blog-static-sites-are-great.json"),
  "dev-404-page.json": require("/Users/c_bflores/Documents/GitHub/gcpatterns/.cache/json/dev-404-page.json"),
  "blog.json": require("/Users/c_bflores/Documents/GitHub/gcpatterns/.cache/json/blog.json"),
  "index.json": require("/Users/c_bflores/Documents/GitHub/gcpatterns/.cache/json/index.json")
}