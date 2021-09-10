const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: 'ATMO-Plan documentation',
    tagline: 'Supporting Urban Air Quality Plans',
    // url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'facebook', // Usually your GitHub org/user name.
    projectName: 'docusaurus', // Usually your repo name.

    presets: [
      [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            // Please change this to your repo.
            editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
            routeBasePath: '/',
            remarkPlugins: [math],
            rehypePlugins: [katex],
          },
          blog: false,
          // blog: {
          //   showReadingTime: true,
          //   // Please change this to your repo.
          //   editUrl:
          //     'https://github.com/facebook/docusaurus/edit/main/website/blog/',
          // },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],

    stylesheets: [
      {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
        integrity: 'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
        crossorigin: 'anonymous',
      },
    ],

    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: 'ATMO-Plan documentation',
          logo: {
            alt: 'ATMO-Plan Logo',
            src: 'img/ATMO-Plan_logo.png',
          },
          items: [
            // {
            //   type: 'doc',
            //   docId: 'intro',
            //   position: 'left',
            //   label: 'Docs',
            // },
            {
              href: 'https://www.vito.be',
              label: 'VITO',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            // {
            //   title: 'Docs',
            //   items: [
            //     // {
            //     //   label: 'Tutorial',
            //     //   to: '/docs/manual/introduction',
            //     // },
            //   ],
            // },
            {
              title: 'Links',
              items: [
                {
                  label: 'VITO',
                  href: 'https://www.vito.be',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} VITO, Built with Docusaurus.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
