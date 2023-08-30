<template>
  <div id="app">
    <router-view>
      <SuiteTraceReports/>
    </router-view>
  </div>
</template>

<script>
import SuiteTraceReports from './components/SuiteTrace Reports/SuiteTraceReports.vue'

export default {
  name: "App",
  components: {SuiteTraceReports},
};
</script>

<style lang="scss">
@import './assets/scss/styles.scss';
@import './assets/scss/Datatable.scss';
</style>
