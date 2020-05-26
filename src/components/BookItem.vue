<template>
  <div class="row book-row">
    <div class="col-md-12 book-item">
      <div class="book-container">
        <div class="book-detail">
          <router-link v-bind:to="book.getLink()" class="book-link">
            <h4 class="book-title">{{ number }}. {{ book.title }}</h4>
          </router-link>
          <span class="book-rating">({{ book.rating }}/10)</span>
          <span class="book-author">{{ book.author }}</span>
          <div class="book-sypnosis">
            <p>{{ book.getShortSypnosis() }}</p>
          </div>
          <div class="book-upvote">
            <button
              :class="{
                'btn btn-primary': !book.upvoted,
                'btn btn-outline-primary': book.upvoted
              }"
            >
              {{ book.upvoted ? "Upvoted" : "Upvote" }}
            </button>
            <span class="upvote-count">Upvoted {{ book.upvotes }} times</span>
          </div>
        </div>
        <div class="book-cover">
          <router-link v-bind:to="book.getLink()" class="book-link">
            <img :src="book.cover" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Book from "../models/Book";
@Component({
  props: {
    book: {
      type: Object as () => Book,
      default: null
    },
    number: {
      type: Number,
      default: 0
    }
  }
})
export default class BookItem extends Vue {}
</script>
