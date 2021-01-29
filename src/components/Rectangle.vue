<template>
  <div
    class="shape rectangle"
    :style="rectangleStyle()"
  ></div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  methods: {
    rectangleStyle () {
      return {
        height: this.rectangle.weight * 10 + 'px',
        width: this.rectangle.weight * 10 + 'px',
        left: 'calc( ' + (50 + this.rectangle.position * 10) +
            '% - ' + this.rectangle.weight * 10 + 'px )'}
    }
  },
  computed: {
    ...mapState(['rectangle'])
  }
}
</script>
<style scoped>
.rectangle {
  background: green;
  bottom: 10px;
}
</style>
