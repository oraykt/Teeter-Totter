<template>
  <div>
    <b-nav>
      <b-nav-item>
       <b-button variant="primary" @click="this.toggleGameAction">{{!this.getGameStatus() ? 'Play' : 'Pause'}}</b-button>
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  methods: {
    ...mapGetters(['getGameStatus']),
    ...mapActions(['toggleGameAction'])
  }
}
</script>

<style lang="css" scoped>

</style>
