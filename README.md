# vue-router-project

## Experiments with [vue-router](https://router.vuejs.org/)

I used [vue-cli](https://cli.vuejs.org/) to set up this project.

Also uses [bulma](https://bulma.io/) for styling.

Here's a good reference for using bulma with vue-cli: https://github.com/neovive/bulma-vuecli

Tutorial for using Vue to create a SPA: https://laracasts.com/series/learn-vue-2-step-by-step

Tutorial for CRUD with Vue: https://www.taniarascia.com/getting-started-with-vue/

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
