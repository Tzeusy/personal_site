<template>
  <v-container
    id="about"
    tag="section"
  >
    <v-container
      align-center
      text-xs-center
    >
      <v-layout justify-center>
        <v-flex size="1">
          <button @click="minusIndex">
            LEFT
          </button>
        </v-flex>
        <v-flex size="10">
          <div> Article {{ counter }} </div>
          <base-subheading> {{ title }} </base-subheading>
          <base-subheading :key="counter">
            {{ date }}
          </base-subheading>
          <vue-simple-markdown :source="content" />
        </v-flex>
        <v-flex size="1">
          <button @click="plusIndex">
            RIGHT
          </button>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
  export default {
    name: 'WallOfText',
    data: () => {
      return {
        category: 'Blank',
        articles: [],
        counter: 0,
        title: 'Blank',
        date: 'Blank',
        content: 'Blank'
      }
    },
    computed: {
      contentComputed () {
        console.log('I change when this.content changes.')
        return this.content
      }
    },
    created () {
      const cat = window.location.pathname.replace('/category/', '')
      const allArticles = require('@/data/articles.json')
      const filteredArticles = allArticles.filter((article) => {
        return article.category === cat
      })
      this.category = cat
      this.articles = filteredArticles
      this.counter = 0
      this.title = this.articles[this.counter].title
      this.date = this.articles[this.counter].date
      // this.content = require(`@/data/${this.articles[this.counter].category}/${this.articles[this.counter].date}.json`).text + `\n ![${this.articles[this.counter].picture}](@/assets/images/${this.articles[this.counter].picture})`
      this.content = require(`@/data/${this.articles[this.counter].category}/${this.articles[this.counter].date}.md`) + `\n ![${this.articles[this.counter].picture}](@/assets/images/${this.articles[this.counter].picture}))`
      // this.content = "# Test Markdown" + ` ![${this.articles[this.counter].picture}](../../assets/images/${this.articles[this.counter].picture})`
    },
    beforeUpdate () {
      console.log(this.counter) // Logs the counter value every second, before the DOM updates.
    },
    updated () {
      console.log('Current index', this.counter)
      this.title = this.articles[this.counter].title
      this.date = this.articles[this.counter].date
      this.content = require(`@/data/${this.articles[this.counter].category}/${this.articles[this.counter].date}.md`) + `\n ![${this.articles[this.counter].picture}](@/assets/images/${this.articles[this.counter].picture}))`
    },
    methods: {
      plusIndex: function () {
        this.counter += 1
        console.log('plus called')
        return this.counter
      },
      minusIndex: function () {
        this.counter -= 1
        console.log('minus called')
        return this.counter
      }
    }
  }
</script>
