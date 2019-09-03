<template>
  <v-container
    grid-list-xl
  >
    <base-card dark>
      <v-img
        height="300"
        width="100%"
        :src="require('@/assets/categories/'+ picture)"
      >
        <div style="background-color:rgba(0,0,0,0.7); height:100%">
          <v-layout
            fill-height
            pa-3
            style="margin:0"
          >
            <v-flex
              xs12
              md0
            >
              <h1
                class="display-2 font-weight-light"
                style="text-align:center; margin-top:3rem"
              >
                {{ category }}
              </h1>
              <v-container
                class="subheading"
                style="text-align:center"
              >
                {{ blurb }}
              </v-container>
            </v-flex>
          </v-layout>
        </div>
      </v-img>
    </base-card>
  </v-container>
</template>
<script>
  export default {
    name: 'CustomBanner',
    data: () => {
      const category = window.location.pathname.replace('/category/', '')
      const description = require('@/data/descriptions.json')
      return description[category] ? {
        category: description[category].title,
        blurb: description[category].blurb,
        picture: description[category].picture
      } : {
        category: 'Invalid URL',
        blurb: 'You have come to the wrong place',
        picture: 'Invalid.png'
      }
    },
    created: () => {
      const category = window.location.pathname.replace('/category/', '')
      const description = require('@/data/descriptions.json')
      return description[category] ? {
        category: description[category].title,
        blurb: description[category].blurb,
        picture: description[category].picture
      } : {
        category: 'Invalid URL',
        blurb: 'You have come to the wrong place',
        picture: 'Invalid.png'
      }
    }
  }
</script>
