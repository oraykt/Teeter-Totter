<template>
  <div class="container">
    <div class="inputs">
      <div class="circle-input">
        <p>Circle</p>
        <label for>
          Weight :
          <input
            type="number"
            v-model="circle.weight"
            @change="()=>{
              if(circle.weight>10 ) {
                  circle.weight = parseInt(circle.weight) - 1;
                }
              else if(circle.weight<1 ) {
                circle.weight = parseInt(circle.weight) + 1;
              }
            }"
          />
        </label>
        <label for>
          position(arrow keys) :
          <input
            type="text"
            v-model="circle.position"
            v-on:keyup.37="(e)=>{ circle.position =  checkDownLimit(e,circle.position);}"
            v-on:keyup.38="(e)=>{ circle.position =  checkUpLimit(e,circle.position);}"
            v-on:keyup.39="(e)=>{ circle.position =  checkUpLimit(e,circle.position);}"
            v-on:keyup.40="(e)=>{ circle.position =  checkDownLimit(e,circle.position);}"
          />
        </label>
      </div>
      <div class="triangle-input">
        <p>triangle</p>
        <label for>
          Weight :
          <input type="number" v-model="triangle.weight" />
        </label>
        <label for>
          position(arrow keys) :
          <input
            type="text"
            v-model="triangle.position"
            v-on:keyup.37="(e)=>{ triangle.position =  checkDownLimit(e,triangle.position);}"
            v-on:keyup.38="(e)=>{ triangle.position =  checkUpLimit(e,triangle.position);}"
            v-on:keyup.39="(e)=>{ triangle.position =  checkUpLimit(e,triangle.position);}"
            v-on:keyup.40="(e)=>{ triangle.position =  checkDownLimit(e,triangle.position);}"
          />
        </label>
      </div>
      <div class="rectangle-input">
        <p>rectangle</p>
        <label for>
          Weight :
          <input type="number" v-model="rectangle.weight" />
        </label>
        <label for>
          position(arrow keys) :
          <input
            type="text"
            v-model="rectangle.position"
            v-on:keyup.37="(e)=>{ rectangle.position =  checkDownLimit(e,rectangle.position);}"
            v-on:keyup.38="(e)=>{ rectangle.position =  checkUpLimit(e,rectangle.position);}"
            v-on:keyup.39="(e)=>{ rectangle.position =  checkUpLimit(e,rectangle.position);}"
            v-on:keyup.40="(e)=>{ rectangle.position =  checkDownLimit(e,rectangle.position);}"
          />
        </label>
      </div>
    </div>
    <div class="shape-container">
      <app-triangle></app-triangle>
      <app-circle></app-circle>
      <app-rectangle></app-rectangle>
    </div>
    <div class="line" :style="{transform: 'rotate('+ this.calcLineAngle() * (180/100) + 'deg)'}"></div>

    <div
      class="shape triangle center"
      style="height: 100px;
            borderLeft: 50px solid transparent;
            borderRight: 50px solid transparent;
            borderBottom: 100px solid black;
            position:relative;
            width:100px;"
    ></div>
    <div class="weights">
      <span>Weight * Position : {{ this.getLeftSide() }}</span>
      <span
        :style="{color : lineAnglePercentage() == 'Not Possible' ? 'red':'green'}"
        style="font-weight:bold;font-size:20px"
      >{{ lineAnglePercentage() }}</span>
      <span>Weight * Position : {{ this.getRightSide() }}</span>
    </div>
    <br />
  </div>
</template>

<script>
import Triangle from './components/triangle'
import Circle from './components/circle'
import Rectangle from './components/rectangle'
import { mapState, mapGetters } from 'vuex'

export default {
  data: function () {
    return {
      // leftSide: 0,
      // rightSide: 0
    }
  },
  watch: {
    // leftSide (newVal) {
    //   if ( newVal > 20 || (this.calcLineAngle() > 3 || this.calcLineAngle() < -3)) {
    //     return false
    //   }
    // },
    // rightSide () {
    //   if ( this.leftSide > 20 || (this.calcLineAngle() > 3 || this.calcLineAngle() < -3)) {
    //     return false
    //   }
    // }
  },
  computed: {
    ...mapState(['circle', 'triangle', 'rectangle'])
  },
  methods: {
    ...mapGetters(['getLeftSide', 'getRightSide']),
    calcLineAngle () {
      return this.getRightSide() - this.getLeftSide()
    },
    lineAnglePercentage () {
      return (
        this.swing = this.calcLineAngle() > 3 || this.calcLineAngle() < -3
          ? 'Not Possible'
          : this.calcLineAngle() * 10 + '%'
      )
    },
    checkDownLimit (e, val) {
      e.stopPropagation()
      if (val <= 0) return val
      return (val -= 1)
    },
    checkUpLimit (e, val) {
      e.stopPropagation()
      if (val >= 5) return val
      return (val += 1)
    }
  },
  components: {
    appTriangle: Triangle,
    appRectangle: Rectangle,
    appCircle: Circle
  }
}
</script>

<style>
.container {
  width: 80%;
  margin: 0 auto;
}
.shape-container {
  height: 100px;
  position: relative;
}
.inputs {
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 100px;
}
.inputs div {
  border: 1px solid gray;
  padding: 10px;
}
.line {
  width: 100%;
  height: 2px;
  background: black;
  position: relative;
  margin-top: 20px;
  transition: 0.3s;
}
.shape {
  position: absolute;
  transition: 0.6s;
}

.triangle.center {
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
}
.weights {
  display: flex;
  justify-content: space-between;
}
</style>
