import { withContentlayer } from 'next-contentlayer'; // Importa la función correcta para Next.js
import remarkPrism from 'remark-prism';
import rehypePrism from 'rehype-prism-plus';

export default withContentlayer({
  webpack(config) {
    config.module.rules.push({
      test: /\.mdx$/,
      use: [
        {
          loader: '@mdx-js/loader',
          options: {
            remarkPlugins: [remarkPrism], // Agregamos el plugin remark-prism
            rehypePlugins: [rehypePrism], // Agregamos el plugin rehype-prism
          },
        },
      ],
    });

    return config;
  },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  compiler: {
    removeConsole: false,
  },
});
