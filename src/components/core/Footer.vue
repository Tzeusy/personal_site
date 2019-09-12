<template>
  <v-footer
    class="py-4"
    dark
    height="auto"
  >
    <v-container mx-auto>
      <v-layout wrap>
        <div style="justify-content:center; display:flex">
          <base-btn
            v-for="(item, i) in contacts"
            :key="i"
            :href="item.href"
            square
          >
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-icon
                  style="background-color:white"
                  color="#000000cc"
                  v-on="on"
                  v-text="item.icon"
                />
              </template>
              <span>{{ item.text }}</span>
            </v-tooltip>
          </base-btn>
        </div>
        <div style="justify-content:center; display:flex">
          <base-btn
            v-for="(item, i) in details"
            :key="i"
            :href="item.href"
            square
          >
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-icon
                  style="background-color:white"
                  color="#000000cc"
                  v-on="on"
                  v-text="item.icon"
                />
              </template>
              <span>{{ item.text }}</span>
            </v-tooltip>
          </base-btn>
        </div>
        <v-spacer />
        <base-btn
          class="mr-0"
          square
          title="Go to top"
          @click="$vuetify.goTo(0)"
        >
          <v-icon>mdi-chevron-up</v-icon>
        </base-btn>
      </v-layout>
      <v-container>
        <p
          class="display-5"
          style="text-align:center"
        >
          I developed this site as part of my journey in learning Vue.js and messing around with differing hosting providers. The theme is adapted from Vuetify's fantastic <a href="https://github.com/vuetifyjs/theme-blog">
            theme library
          </a>. <br> Logo inspired by <a href="https://www.pinterest.com/pin/533324780869621926/?lp=true">
            this
          </a>, but is probably a placeholder until I decide paying for some designed assets is worth it.
        </p>
      </v-container>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      contacts: [
        {
          href: 'mailto:tzeuse@gmail.com',
          icon: 'mdi-email-outline',
          text: 'tzeuse@gmail.com'
        },
        {
          href: '/',
          icon: 'mdi-phone',
          text: "Drop me an email! Phone number's confidential"
        },
        {
          href: 'https://www.google.com/search?q=google+map+singapore&oq=google+map+singa',
          icon: 'mdi-map-marker',
          text: 'Not too wise to put my address in public domain!'
        }
      ],
      details: [
        {
          href: 'https://www.linkedin.com/in/tzehow/',
          text: 'https://www.linkedin.com/in/tzehow/',
          icon: 'mdi-linkedin'
        },
        {
          href: 'https://github.com/Tzeusy/',
          text: 'https://github.com/Tzeusy/',
          icon: 'mdi-github-circle'
        },
        {
          href: 'https://www.instagram.com/tzeusy/',
          icon: 'mdi-instagram',
          text: "I don't actively accept followers!"
        },
        {
          href: 'https://www.facebook.com/LeeTzeHow',
          icon: 'mdi-facebook',
          text: "I don't actively accept friends!"
        }
      ]
    })
  }
</script>
