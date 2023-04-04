<template>
  <div class="d-flex justify-content-evenly">
    <span class="item">{{ name }}</span>
    <span class="item">{{ distance }}</span>
    <span class="item">{{ time }}</span>
    <span class="item">{{ date }}</span>
    <span class="item">{{ location }}</span>
  </div>
</template>

<script>
export default {
  name: "RunningComponent",
  props: ['name', 'distance', 'time', 'date', 'location']
}
</script>

<style scoped>
div:hover {
  background-color: darkgray;
}
span {
  margin-bottom: 3px;
}
.item {
  flex: 1 1 0px;
  border-bottom: 1px solid black;
}
</style>