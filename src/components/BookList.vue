<template>
  <div class="book-list">
    <BookItem
      :key="index"
      v-for="(book, index) in books"
      :book="book"
      :number="index + 1"
    ></BookItem>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Book from "../models/Book";
import BookItem from "@/components/BookItem.vue";
@Component({
  components: {
    BookItem
  },
  props: {
    books: {
      type: Array as () => Book[],
      default: []
    },
    errorMessage: {
      type: String,
      default: ""
    }
  }
})
export default class BookList extends Vue {}
</script>
