<template>
  <div class="container book-detail-page">
    <div class="row book-container">
      <div class="col-md-12">
        <div v-if="book.title">
          <div class="book-header-container">
            <h2 class="title">{{ book.title }}</h2>
            <div class="book-upvote">
              <span class="upvote-number"
                >Upvoted {{ book.upvotes }} times</span
              >
              <button
                :class="{
                  'btn btn-primary': !book.upvoted,
                  'btn btn-outline-primary': book.upvoted,
                }"
              >
                {{ book.upvoted ? "Upvoted" : "Upvote" }}
              </button>
            </div>
          </div>
          <div class="book-author">
            <span>{{ book.author }}</span>
          </div>
          <div class="book-cover">
            <img :src="book.cover" />
          </div>
          <h5 class="section-title">Synopsis</h5>
          <div class="synopsis">
            <p
              v-for="(paragraph, index) in book.getFullSypnosis()"
              :key="index"
            >
              {{ paragraph }}
            </p>
          </div>
          <div class="rating">
            <span>Rating: {{ book.rating }}/10</span>
          </div>
        </div>
        <div v-if="errorMessage">
          <div class="alert alert-danger" role="alert">
            {{ errorMessage }}
          </div>
          <router-link v-bind:to="'/'" class="book-link">
            Go back to book list.
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Book from "@/models/Book";
import { BookEndpoints } from "@/api/endpoints/Book";
import { emptyBookMock } from "@/models/mocks/Book/Empty";

@Component
export default class BookView extends Vue {
  public book: Book = emptyBookMock;
  public errorMessage = "";

  async mounted(): Promise<void> {
    const slug = this.$route.params.slug;
    try {
      this.book = await BookEndpoints.getBook(slug);
    } catch (error) {
      this.errorMessage = "There was an error getting the book.";
    }
  }
}
</script>
