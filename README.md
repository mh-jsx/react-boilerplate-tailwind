# React boilerplate

Redux Toolkit | Tailwind | React Router | Eslint (Airbnb) | Prettier | Husky | Proptypes | clsx | Helmet

#### Things that are configured: 

- [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)
- [Husky](https://github.com/typicode/husky)  pre commit hook 
- [Eslint](https://github.com/eslint/eslint) (Airbnb)
- [Prettier](https://github.com/prettier/prettier)
- [Redux](https://github.com/reduxjs/redux-toolkit) included Store and base configs and authentication slice

## Getting started

```bash
git clone https://github.com/mh-jsx/react-boilerplate-with-tailwind

npm i -g yarn

yarn # install the dependencies

yarn start
```

#### Husky Pre-Commit:

Husky pre-commit hook will test linting and prettier rules. If you got an error on commit, try running fix scripts.

```bash
yarn run fix:prettier
# and
yarn run fix:lint

# or
yarn run fix

## If yous still got an Linting error on Commit, You have to manually fix the linting errors.
```

#### Run Tests:

To run test cases run the following script.

```bash
yarn run test:app
```

## Scripts explained
```bash
    start: "react-scripts start", # run the app in dev mode
    build: "react-scripts build", # create a optimze build
    eject: "react-scripts eject", # gives you full control over the React app configuration
    prepare: "husky install", # add husky script config in package.json file
    test:app: "react-scripts test", # top run test scripts
    test: "npm run test:prettier && npm run test:lint", # run prettier and lint test scripts
    test:lint: "eslint . --ext .js,.jsx,.ts,.tsx", # testing eslint rules for all fiven file extensions
    test:prettier: "prettier --check .", # test prettier rules
    fix: "npm run fix:lint && npm run fix:prettier", # run prettier and eslint fix scripts
    fix:lint: "eslint . --ext .js,.jsx,.ts,.tsx --fix", # fix lint warnings. Note: you have manually fix errors
    fix:prettier: "prettier --write ." # apply prettier rules (.prettierrc) on all files 
```

## Folder Structure

📦src <br />
 ┣ 📂assets - <small> should contain assets, make sure to create separate folder for each asset type, i.e videos, images, icons.</small> <br />
 ┣ 📂components - <small> should contain components reusable as well as component for individual page.</small> <br />
 ┣ 📂components <br />
 ┃ ┗ 📂common - <small> should contain reusable components.</small> <br />
 ┣ 📂constants - <small> should contain constants, i.e enums, validation rules, or any global constant.</small> <br />
 ┣ 📂data - <small> should contain fake/constant json data.</small> <br />
 ┣ 📂hooks - <small> hooks.</small> <br />
 ┣ 📂layout - <small> layout components, i.e Header, Footer, Aside.</small> <br />
 ┣ 📂pages - <small> pages that map to a route.</small> <br />
 ┃ ┣ 📂auth - <small> each page consist of folder which contains jsx file and a redux slice file.</small> <br />
 ┃ ┃ ┗ 📜authSlice.js <br /> 
 ┃ ┃ ┗ 📜Index.jsx <br />
 ┃ ┗ 📜Home.jsx <br />
 ┣ 📂routes - <small> each page consist of folder which contains jsx file and a redux slice file.</small> <br />
 ┣ 📂services - <small> should contain services, it might be a firebase service or api's, etc.</small> <br />
 ┃ ┗ 📂api <br />
 ┣ 📂store - <small> should contain store configs, i.e redux-store, zustand-store.</small> <br />
 ┣ 📂styles - <small> contains css styles.</small> <br />
 ┣ 📂utils  <small> contains js utilities.</small>

 <!-- CONTRIBUTING -->
## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- CONTACT -->
## Contact

Mudasir H - [Twitter](https://twitter.com/mh_jsx) - mudasir.ee@gmail.com

Project Link: [https://github.com/mh-jsx/react-boilerplate-with-tailwind](https://github.com/mh-jsx/react-boilerplate-with-tailwind)

<p align="right">(<a href="#readme-top">back to top</a>)</p>




