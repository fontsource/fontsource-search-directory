## Installation

Fontsource assumes you are using a bundler, such as Webpack, to load in CSS. Solutions like [CRA](https://create-react-app.dev/), [Gatsby](https://www.gatsbyjs.org/) and [Next.js](https://nextjs.org/) are prebuilt examples that are compatible.

This is an installation example using Open Sans, applicable to all other fonts searchable via NPM or the packages directory.

```javascript
yarn add @fontsource/open-sans // npm install @fontsource/open-sans
```

Then within your app entry file or site component, import it in. For example in Gatsby, you could choose to import it into a layout template (`layout.js`), page component (`index.js`), or `gatsby-browser.js`.

```javascript
import '@fontsource/open-sans'; // Defaults to weight 400 with normal variant.
```

Fontsource allows you to select weights and even individual styles, allowing you to cut down on payload sizes to the last byte! Utilizing the CSS unicode-range selector, all language subsets are accounted for.

```javascript
import '@fontsource/open-sans/500.css'; // Weight 500.
import '@fontsource/open-sans/900-italic.css'; // Italic variant.
```

Alternatively, the same solutions could be imported via SCSS!

```scss
@import '~@fontsource/open-sans/index.css';
@import '~@fontsource/open-sans/300-italic.css';
```