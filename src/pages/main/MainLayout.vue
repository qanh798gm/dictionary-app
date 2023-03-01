<template>
  <q-layout style="background: linear-gradient(#f7eee1, #f2e1f0)">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> {{ appName }} </q-toolbar-title>
        <my-button
          color="white"
          label=""
          icon="logout"
          text-color="primary"
          :action="handleLogout"
        >
          <q-tooltip>Logout</q-tooltip>
        </my-button>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import MyButton from 'src/components/MyButton.vue';
import { useAuthStore } from 'src/stores/auth';
import { useRouter } from 'vue-router';

const appName = import.meta.env.VITE_APP_NAME;

const router = useRouter();

const authStore = useAuthStore();
const { logout } = authStore;

const handleLogout = () => {
  logout(() => {
    router.push('/login');
  });
};
</script>
