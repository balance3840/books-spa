<template>
  <div class="container not-found-page">
    <h3 class="error-message">Oops! We could not find the requested page.</h3>
    <router-link v-bind:to="'/'" class="book-link">
      <p class="error-action">Go back to home page.</p>
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class NotFound extends Vue {}
</script>
