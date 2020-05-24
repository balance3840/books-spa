<template>
  <div>
    <p :key="index" v-for="(book, index) in books">{{ book.author }}</p>
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Book from "@/models/Book";
import { BookEndpoints } from "@/api/endpoints/Book";
@Component({})
export default class Home extends Vue {
  private books: Book[] = [];
  private errorMessage = "";
  async mounted(): Promise<void> {
    try {
      this.books = await BookEndpoints.getAllBooks();
    } catch (error) {
      this.errorMessage = "There was an error getting the books.";
    }
  }
}
</script>
