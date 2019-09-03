<template>
  <div id="home">
    <v-container>
      <banner />
    </v-container>
    <about />
  </div>
</template>

<script>
  export default {
    name: 'Home',

    components: {
      About: () => import('@/components/home/About'),
      Banner: () => import('@/components/home/Banner')
    }
  }
</script>
