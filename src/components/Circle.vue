<template>
  <div
    class="shape circle"
    :style="circleStyle()"
  ></div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  methods: {
    circleStyle () {
      return {
        height: this.circle.weight * 10 + 'px',
        width: this.circle.weight * 10 + 'px',
        left: 'calc( ' + (50 - this.circle.position * 10) +
          '% - ' + this.circle.weight * 10 + 'px )' }
    }
  },
  computed: {
    ...mapState(['circle'])
  }
}
</script>
<style scoped>
.circle {
  border-radius: 100%;
  bottom: 10px;
  background: red;
}
</style>
