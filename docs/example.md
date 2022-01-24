<script setup>
  import 'fullpage.js/dist/fullpage.min.css'
  import FullPage from './../src/FullPage.vue'
</script>

# Example

```vue
TODO
```

<full-page :options="{}">
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
