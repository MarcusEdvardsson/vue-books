<template>
  <div class="wrapper">
    <main class="books">
        <book v-for="(book, index) in books" :key="index" v-bind:book="book" v-on:more-info="showMoreInfo" />
    </main>
  </div>
</template>

<script>
import book from '../components/book'

export default {
  name: 'books',
  components: {
    book
  },
  props: {
    books: Array
  },
  data: () => {
    return {
      moreInfo: {}
    }
  },
  methods: {
    showMoreInfo (book) {
      this.moreInfo = book
    }
  }
}
</script>

<style>
    .wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .books {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(4, 1fr);
    }
</style>
