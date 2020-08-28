<template>
<header class="site-header">
      <div class="loader"></div>
        <div class="site-header-container">
          <h1 class="site-title">Your Favorite Deezer Tracks</h1>
          <app-user-display />
          <app-user-search />
      </div>
    </header>
</template>

<script>
import AppUserDisplay from "@/components/AppUserDisplay"
import AppUserSearch from "@/components/AppUserSearch"
export default {
  components: 
  AppUserDisplay,
  AppUserSearch
}
</script>

<style>

</style>