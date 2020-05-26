<template>
  <div class="container books-list">
    <h3 class="header-title">Top books of all time</h3>
    <div v-if="errorMessage" class="alert alert-danger" role="alert">
      {{ errorMessage }}
    </div>
    <BookList
      v-bind:books="books"
      v-bind:errorMessage="errorMessage"
    ></BookList>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Book from "@/models/Book";
import { BookEndpoints } from "@/api/endpoints/Book";
import BookList from "@/components/BookList.vue";

@Component({
  components: {
    BookList
  }
})
export default class Home extends Vue {
  private books: Book[] = [];
  private errorMessage = "";
  async mounted(): Promise<void> {
    try {
      this.books = await BookEndpoints.getAllBooks();
    } catch (error) {
      this.errorMessage =
        "There was an error getting the books. Please try again later.";
    }
  }
}
</script>
