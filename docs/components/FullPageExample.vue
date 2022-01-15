<template>
  <full-page id="fullpage" ref="fullpage" :options="options">
    <div class="section">
      <h3>Section 1</h3>
    </div>
    <div class="section">
      <div class="slide">
        <h3>Slide 2.1</h3>
      </div>
      <div class="slide">
        <h3>Slide 2.2</h3>
      </div>
      <div class="slide">
        <h3>Slide 2.3</h3>
      </div>
    </div>
    <div class="section">
      <h3>Section 3</h3>
    </div>
  </full-page>
</template>

<script>
import { FullPage } from './../../src/index'
export default {
  components: {
    'full-page': FullPage,
  },
}
</script>
