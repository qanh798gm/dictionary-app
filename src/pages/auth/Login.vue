<template>
  <q-layout view="lHh Lpr fff">
    <q-page-container>
      <q-page
        class="window-height window-width row justify-center items-center"
        style="background: linear-gradient(#f7eee1, #f2e1f0)"
      >
        <div class="column q-pa-lg">
          <div class="row">
            <q-card
              square
              class="shadow-24"
              style="width: 400px; height: 420px"
            >
              <q-card-section class="card-color">
                <h4 class="text-h5 text-white q-my-md">{{ title }}</h4>
              </q-card-section>
              <q-card-section>
                <q-form class="q-px-sm q-pt-xl">
                  <q-input
                    :ref="username"
                    square
                    clearable
                    v-model="username"
                    lazy-rules
                    label="Username"
                    :rules="[(val) => !!val || 'Username is required']"
                  >
                    <template v-slot:prepend>
                      <q-icon name="person" />
                    </template>
                  </q-input>
                  <q-input
                    :ref="password"
                    square
                    clearable
                    v-model="password"
                    :type="passwordFieldType"
                    lazy-rules
                    label="Password"
                    :rules="[(val) => !!val || 'Password is required']"
                  >
                    <template v-slot:prepend>
                      <q-icon name="lock" />
                    </template>
                    <template v-slot:append>
                      <q-icon
                        name="visibility"
                        class="cursor-pointer"
                        @click="toggleVisibility"
                      />
                    </template>
                  </q-input>
                </q-form>
              </q-card-section>

              <q-card-actions class="q-px-lg">
                <my-button
                  color="primary"
                  text-color="white"
                  label="login"
                  @click="onSubmit"
                ></my-button>
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import MyButton from 'src/components/MyButton.vue';
import { ref } from 'vue';
import { useAuthStore } from '../../stores/auth';
import { useRouter } from 'vue-router';

const router = useRouter();

const authStore = useAuthStore();
const { login } = authStore;

const title = ref('Login');
const username = ref('');
const password = ref('');
const passwordFieldType = ref<'text' | 'password'>('password');

const toggleVisibility = () => {
  passwordFieldType.value =
    passwordFieldType.value === 'password' ? 'text' : 'password';
};
const onSubmit = () => {
  if (username.value && password.value) {
    login(() => {
      router.push('/vocabulary-list');
    });
  }
};
</script>

<style lang="scss">
.my-login-card {
  min-width: 400px;
}

.card-color {
  background-color: $primary;
}
</style>
