<template>
  <div class="shape triangle" v-bind:style="triangleStyle()"></div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  methods: {
    triangleStyle () {
      return {
        height: this.triangle.weight * 10 + 'px',
        width: this.triangle.weight * 10 + 'px',
        left:
          'calc( ' +
          (50 - this.triangle.position * 10) +
          '% - ' +
          parseInt(this.triangle.weight) * 10 +
          'px )',
        borderLeft:
          (this.triangle.weight * 10) / 2 + 'px solid transparent',
        borderRight:
          (this.triangle.weight * 10) / 2 + 'px solid transparent',
        borderBottom: this.triangle.weight * 10 + 'px solid black'
      }
    }
  },
  computed: {
    ...mapState(['triangle'])
  }
}
</script>
<style scoped>
.triangle {
  bottom: 10px;
}
</style>
