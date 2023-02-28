<template>
  <q-layout>
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> {{ appName }} </q-toolbar-title>

        <div>Version {{ appVersion }}</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
const appName = import.meta.env.VITE_APP_NAME;
const appVersion = import.meta.env.VITE_VERSION;
</script>
