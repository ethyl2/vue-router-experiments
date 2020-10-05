# vue-router-experiments

[![Netlify Status](https://api.netlify.com/api/v1/badges/8fe722af-10d9-4310-a6f2-db8d5707835c/deploy-status)](https://app.netlify.com/sites/vue-router-experiments/deploys)

## Experiments with [vue-router](https://router.vuejs.org/)

### Deployed site: https://vue-router-experiments.netlify.app/

---

I used [vue-cli](https://cli.vuejs.org/) to set up this project.

Also uses [bulma](https://bulma.io/) for styling.

Here's a good reference for using bulma with vue-cli: https://github.com/neovive/bulma-vuecli

Tutorial for using Vue to create a SPA: https://laracasts.com/series/learn-vue-2-step-by-step

Tutorial for CRUD with Vue: https://www.taniarascia.com/getting-started-with-vue/

## Deploying with netlify -- so easy!

Because I started this site with vue-cli, all I need to do is:

1. Go to netlify.com, log in, and choose 'new site from git'
2. After linking this repo, when prompted, type the build command 'npm run build' and type the publish directory as 'dist' in the inputs.
3. Click 'Deploy site'!

More info on deploying with netlify: https://www.netlify.com/blog/2019/11/30/how-to-deploy-a-vue-site/

<img src="https://raw.githubusercontent.com/ethyl2/vue-router-experiments/main/src/assets/logo.png" />

---

## Other handy resources:

### Vue related:

Because this project doesn't use vuex for state management, I needed a way for a grandchild to emit an event for its grandparent, so I used
an approach discussed here: [stackoverflow.com](https://stackoverflow.com/questions/42615445/vuejs-2-0-emit-event-from-grand-child-to-his-grand-parent-component/51661633)

### Assorted topics:

**Accessible Emoji** -- how to wrap in a span: https://tink.uk/accessible-emoji/

**To disable eslint for a specific line of code:** [stackoverflow.com](https://stackoverflow.com/questions/47277133/disable-unnecessary-escape-character-no-useless-escape)

**Email input validation:**

- Examples of invalid email addresses for checking validation: https://www.w3resource.com/javascript/form/email-validation.php

- Examples of javascript regexes for email validation: [stackoverflow.com](https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript)

**To add images to your README that are located inside the repo:**

1. In GitHub, go to the image inside your repo.
2. Right-click the image and choose 'open image in new tab'
3. Copy the url from the new tab. It will start with raw.githubusercontent.com/
4. Use that url as the src for your image.

---

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
