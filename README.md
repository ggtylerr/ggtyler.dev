# ggtyler.dev

A modern portfolio and blog, made with Astro.

[Visit the site](https://www.ggtyler.dev)

Currently in public alpha. A lot of parts are still missing.

To run, [download Node 16](https://nodejs.org) and `corepack enable`, then install and configure [Isso](https://isso-comments.de), then run:

```sh
yarn install
yarn dev
```

To build and deploy:
```sh
yarn build
yarn preview
```

npm and pnpm also works, **but PRs made with their lockfiles still present will be ignored.**

**NOTE:** You may need to configure the site itself by going into `/astro.config.mjs` and `/src/config.ts`.

## Made with

* [Astro](https://astro.build)
* [Astro's blog template](https://github.com/withastro/astro/tree/latest/examples/blog?on=github)
* [Astro SPA](https://github.com/RafidMuhymin/astro-spa)
* [React](https://reactjs.org/)
* [Tailwind](https://tailwindcss.com/)
* [MDX](https://mdxjs.com/)
* [Floating UI](https://floating-ui.com/)
* [Isso](https://isso-comments.de/)
* Blood, sweat, tears, and love.

## License
This project is under the [GPL 3.0 license.](https://www.gnu.org/licenses/gpl-3.0.en.html)
