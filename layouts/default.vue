<template>
  <div>
    <vs-navbar padding-scroll fixed shadow-scroll square v-model="active">
      <template #left>
        <img height="30" src="https://vuesax.com/logos/logo-vuesax-svg-3.svg" alt="">
      </template>
      <vs-navbar-item :active="active === 'guide'" id="guide">
        Guide
      </vs-navbar-item>
      <vs-navbar-item :active="active === 'docs'" id="docs">
        Documents
      </vs-navbar-item>
      <vs-navbar-item :active="active === 'components'" id="components">
        Components
      </vs-navbar-item>
      <vs-navbar-group>
        Classifies
        <template #items>
          <vs-navbar-item :active="active == 'Github'" id="Github">
            Github
          </vs-navbar-item>
          <vs-navbar-item :active="active == 'Discord'" id="Discord">
            Discord
          </vs-navbar-item>
          <vs-navbar-item :active="active == 'Twitter'" id="Twitter">
            Twitter
          </vs-navbar-item>
          <vs-navbar-item :active="active == 'Medium'" id="Medium">
            Medium
          </vs-navbar-item>
        </template>
      </vs-navbar-group>
      <vs-navbar-item :active="active === 'license'" id="license">
        license
      </vs-navbar-item>
      <template #right>
        <vs-button flat>Login</vs-button>
        <vs-button>Get Started</vs-button>
      </template>
    </vs-navbar>

    <Nuxt/>
    <Nuxt/>

  </div>
</template>

<script>
export default {
  data: () => ({
    active: 'guide'
  })
}
</script>

<style>
.child {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

html, body {
  font-family: 'Source Sans Pro',
  -apple-system,
  BlinkMacSystemFont,
  'Segoe UI',
  Roboto,
  'Helvetica Neue',
  Arial,
  sans-serif;
}

html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #f4f7f8;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
