<template>
  <div id="blog">
    <banner :key="$route.fullPath" />
    <wot :key="$route.fullPath" />
  </div>
</template>

<script>
  export default {
    name: 'PostView',
    components: {
      Banner: () => import('@/components/home/CustomBanner'),
      Wot: () => import('@/components/home/Wot')
    }
  }
</script>
