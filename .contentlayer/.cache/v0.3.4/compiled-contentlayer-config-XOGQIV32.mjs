// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
};
var Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `./**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    published: {
      type: "boolean",
      default: true,
    },
  },
  computedFields,
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "app/content",
  documentTypes: [Doc],
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
            if (node.children.length === 0) {
              node.children = [{ type: "text", value: " " }];
            }
          },
          onVisitHighlightedLine(node) {
            node.properities.className.push("line-highlighted");
          },
          onVisitHighlightedWord(node) {
            node.properities.className.push("word-highlighted");
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: "subheading-anchor",
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
  },
});
export { Doc, contentlayer_config_default as default };
//# sourceMappingURL=compiled-contentlayer-config-XOGQIV32.mjs.map
