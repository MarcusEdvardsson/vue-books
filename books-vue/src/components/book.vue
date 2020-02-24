<template>
    <article class="book" v-bind:style="{ backgroundColor: color }" v-on:click="showInfo">
        <section class="bg"></section>
        <section class="content">
            <aside></aside>
            <section class="about">
                <h2>{{ title }}</h2>
                <h3>{{ author }}</h3>
            </section>
        </section>
    </article>
</template>

<script>
export default {
  name: 'book',
  props: {
    book: Object
  },
  computed: {
    title () {
      return this.book.title
    },
    author () {
      return this.book.author
    },
    color () {
      return this.book.color
    }
  },
  methods: {
    showInfo () {
      this.$router.push('/info/' + this.book.id)
    }
  }
}
</script>

<style>
    .book {
        width: 14rem;
        height: 18rem;
        background: blueviolet;
        border-radius: 2px;
        position: relative;
        transition: all .2s ease;
    }

    .book:hover {
        cursor: pointer;
        filter: brightness(1.05);
    }

    .book section {
        position: absolute;
        width: inherit;
        height: inherit;
        border-radius: 2px;
    }

    .book .bg {
        background: linear-gradient(36deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 100%);
        border-radius: inherit;
    }

    .book .content {
        display: flex;
        border-radius: inherit;
    }

    .content aside {
        width: .4rem;
        background: linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 20%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0) 100%);
        margin: 0 0 0 .8rem;
        position: relative;
    }

    .content .about {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .content .about > h2 {
        margin: 0 0 0 1.7rem;
        color: #ffffff;
        font-size: 1.2rem;
        font-weight: 900;
    }

    .content .about > h3 {
        margin: 0.25rem 0 0.5rem 1.7rem;
        color: #ffffff;
        font-size: 0.8rem;
        font-weight: 400;
    }
</style>
