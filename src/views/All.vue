<template>
  <div id="all">
    <articles />
  </div>
</template>

<script>
  export default {
    name: 'All',
    components: {
      Articles: () => import('@/components/home/Articles')
    }
  }
</script>
