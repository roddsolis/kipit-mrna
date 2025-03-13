// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true }
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (page) => `/${page._raw.flattenedPath.replace("content/", "")}`
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "apps/design-system-docs/content",
  // Asegúrate de que apunte a la ubicación correcta
  documentTypes: [Page],
  disableImportAliasWarning: true
});
export {
  Page,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-ZOW6ND3C.mjs.map
