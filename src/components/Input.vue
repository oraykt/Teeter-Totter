<template>
  <div :class="this.getClass()">
        <p>{{ this.inputName }}</p>
        <label for>
          Weight :
          <input
            type="number"
            v-model="shape.weight"
            @change="()=>{
              if(shape.weight>10 ) {
                  shape.weight = parseInt(shape.weight) - 1;
                }
              else if(shape.weight<1 ) {
                shape.weight = parseInt(shape.weight) + 1;
              }
            }"
          />
        </label>
        <label for>
          position(arrow keys) :
          <input
            type="text"
            v-model="shape.position"
            v-on:keyup.37="(e)=>{ shape.position =  checkDownLimit(e,shape.position);}"
            v-on:keyup.38="(e)=>{ shape.position =  checkUpLimit(e,shape.position);}"
            v-on:keyup.39="(e)=>{ shape.position =  checkUpLimit(e,shape.position);}"
            v-on:keyup.40="(e)=>{ shape.position =  checkDownLimit(e,shape.position);}"
          />
        </label>
      </div>
</template>

<script>
export default {
  props: {
    inputName: {
      type: String,
      required: true
    },
    shape: {
      type: Object,
      required: true
    },
    checkUpLimit: {
      type: Function
    },
    checkDownLimit: {
      type: Function
    }
  },
  methods: {
    getClass: function () {
      return this.inputName + '-input'
    }
  }
}
</script>

<style scoped>

</style>
