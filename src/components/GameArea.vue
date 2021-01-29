<template>
  <div class="game-area">
    <DropArea/>
    <Platform/>
  </div>
</template>

<script>
import DropArea from '@/components/DropArea'
import Platform from '@/components/Platform'
export default {
  components: {
    DropArea,
    Platform
  }
}
</script>

<style scoped>

</style>
