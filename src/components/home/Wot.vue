<template>
  <v-container
    id="about"
    tag="section"
  >
    <base-subheading>{{ title }}</base-subheading>
    <base-subheading>{{ date }}</base-subheading>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus mattis rhoncus urna neque viverra justo nec. Aliquam faucibus purus in massa tempor nec feugiat. Urna molestie at elementum eu facilisis sed odio morbi. Sed nisi lacus sed viverra tellus in. Nulla malesuada pellentesque elit eget gravida cum sociis. Eget sit amet tellus cras adipiscing enim eu turpis. Posuere morbi leo urna molestie. Turpis tincidunt id aliquet risus feugiat in ante. Nisl suscipit adipiscing bibendum est. Ac tincidunt vitae semper quis lectus nulla at volutpat diam. Pulvinar elementum integer enim neque volutpat ac. Quis risus sed vulputate odio ut enim blandit. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Vel eros donec ac odio tempor. Posuere morbi leo urna molestie at. Volutpat est velit egestas dui id ornare. Imperdiet sed euismod nisi porta lorem mollis aliquam. Tempor id eu nisl nunc mi. Velit dignissim sodales ut eu sem integer vitae. Imperdiet sed euismod nisi porta lorem mollis aliquam. Sociis natoque penatibus et magnis dis parturient montes. Imperdiet proin fermentum leo vel orci porta non. Leo a diam sollicitudin tempor. Purus non enim praesent elementum facilisis leo vel. Bibendum enim facilisis gravida neque convallis. Fringilla phasellus faucibus scelerisque eleifend. Tellus mauris a diam maecenas sed enim ut sem viverra. Ut eu sem integer vitae justo eget magna. Nam aliquam sem et tortor consequat id porta nibh venenatis. In aliquam sem fringilla ut morbi tincidunt augue interdum velit. Vel facilisis volutpat est velit egestas dui id. Nibh ipsum consequat nisl vel pretium. Sem integer vitae justo eget magna fermentum iaculis eu non. Eleifend mi in nulla posuere sollicitudin. Amet nisl suscipit adipiscing bibendum. Libero volutpat sed cras ornare arcu. Nulla facilisi morbi tempus iaculis. Vitae et leo duis ut diam quam. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Non odio euismod lacinia at quis risus sed vulputate. Integer eget aliquet nibh praesent tristique. Habitant morbi tristique senectus et. Volutpat diam ut venenatis tellus in metus. Nunc eget lorem dolor sed viverra. Vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Tincidunt id aliquet risus feugiat in ante metus dictum at. Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam. Condimentum mattis pellentesque id nibh tortor id aliquet lectus proin. Lorem ipsum dolor sit amet consectetur adipiscing. Eget aliquet nibh praesent tristique magna sit. Urna nunc id cursus metus. Volutpat odio facilisis mauris sit amet. Neque egestas congue quisque egestas diam in arcu cursus. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat. Aliquet porttitor lacus luctus accumsan tortor. Dui nunc mattis enim ut tellus elementum sagittis. Habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat. Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Habitasse platea dictumst vestibulum rhoncus. Id porta nibh venenatis cras sed. Non curabitur gravida arcu ac. Vivamus arcu felis bibendum ut. Viverra tellus in hac habitasse. Viverra adipiscing at in tellus integer feugiat scelerisque varius morbi. Dui id ornare arcu odio ut sem nulla pharetra diam. Magna eget est lorem ipsum dolor sit amet consectetur adipiscing. Quisque non tellus orci ac auctor augue mauris augue. Imperdiet proin fermentum leo vel orci porta non. Tortor condimentum lacinia quis vel eros donec ac odio. Massa ultricies mi quis hendrerit dolor. Mollis nunc sed id semper risus in. A erat nam at lectus urna. Donec pretium vulputate sapien nec sagittis. At lectus urna duis convallis convallis tellus. Diam maecenas sed enim ut sem viverra aliquet. Ac feugiat sed lectus vestibulum mattis ullamcorper. Aenean pharetra magna ac placerat. Eget duis at tellus at urna condimentum.</p>
  </v-container>
</template>

<script>
  export default {
    name: 'WallOfText',
    data () {
      const cat = window.location.pathname.replace('/category/', '')
      const allArticles = require('@/data/articles.json')
      const filteredArticles = allArticles.filter((article) => {
        return article.category === cat
      })
      return {
        category: cat,
        articles: filteredArticles,
        index: 0,
        title: filteredArticles[0].title,
        date: filteredArticles[0].date
      }
    },
    updated: () => {
      let index = this.index
      return {
        title: this.articles[index].title,
        date: this.articles[index].date
      }
    }
  }
</script>
