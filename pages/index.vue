<template>
  <div id="site-home">
    <app-header />
    <section class="site-content">
      <h1>Results</h1>
      <app-songs />
    </section>
    <section>
      <h1>No Results</h1>
    </section>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppSongs from '@/components/AppSongs'
export default {
  name: "home",
  components: {
    AppSongs,
    AppHeader
  }
}
</script>

</style>