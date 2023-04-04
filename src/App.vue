<script setup lang="ts">
import {RouterLink, RouterView} from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-nav" href="#">
        <img src="src/assets/images/LogoSkovbakkenFremad.png" class="w-25 h-25"/>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarCollapseContent" aria-controls="navbarCollapseContent"
              aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapseContent">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/klub-rekorder">Klub rekorder</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/elite-aktive">Elite Aktive</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/hold">Hold</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/bestyrelse">Bestyrelse</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <div class="container">
    <RouterView/>
  </div>
</template>

<style scoped>
</style>
