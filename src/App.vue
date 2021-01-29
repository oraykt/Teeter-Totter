<template>
  <div class="container">
    <div class="inputs">
      <app-input
        v-bind:inputName="'circle'"
        v-bind:shape= this.circle
        v-bind:checkUpLimit= this.checkUpLimit
        v-bind:checkDownLimit= this.checkDownLimit
      > </app-input>

      <app-input
        v-bind:inputName="'triangle'"
        v-bind:shape= this.triangle
        v-bind:checkUpLimit= this.checkUpLimit
        v-bind:checkDownLimit= this.checkDownLimit
      > </app-input>

      <app-input
        v-bind:inputName="'rectangle'"
        v-bind:shape= this.rectangle
        v-bind:checkUpLimit= this.checkUpLimit
        v-bind:checkDownLimit= this.checkDownLimit
      > </app-input>

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
import Input from './components/Input'
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
      if (val <= 1) return val
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
    appCircle: Circle,
    appInput: Input
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
  justify-content: center;
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
