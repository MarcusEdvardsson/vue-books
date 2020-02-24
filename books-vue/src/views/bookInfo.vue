<template>
  <main class="background-dark">
        <div class="book-info">
            <header>
                <a href="#" class="back" v-on:click="close">&leftarrow;</a>
            </header>
            <section class="display">
                <article class="book" :style="{ backgroundColor: book.color }">
                    <section class="bg"></section>
                    <section class="content">
                        <aside></aside>
                        <section class="about">
                            <h2>{{ book.title }}</h2>
                            <h3>{{ book.author }}</h3>
                        </section>
                    </section>
                </article>
            </section>
            <section class="info">
                <h1>{{ book.title }}</h1>
                <h3>{{ book.author }}</h3>
                <p>{{ book.plot}}</p>
                <footer>
                    <p><b>Audience:</b> {{ book.audience }}</p>
                    <p><b>First Published:</b> {{ book.year }}</p>
                    <p><b>Pages:</b> {{ book.pages || '-' }}</p>
                    <p><b>Publisher:</b> {{ book.publisher }}</p>
                </footer>
            </section>
        </div>
  </main>
</template>

<script>
export default {
  name: 'book-info',
  props: {
    book: Object
  },
  methods: {
    close () {
      this.$emit('close-more-info')
    }
  }
}
</script>

<style class="about">
    .background-dark {
        position: absolute;
        background: rgba(0, 0, 0, 0.8);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .book-info {
        max-width: 1000px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
        grid-template-areas: "header header"
                             "display info"
    }

    .book-info header {
        grid-area: header;
        height: 3rem;
        padding: 1rem;
    }

    .display {
        grid-area: display;
    }

    .display .book {
        width: 24rem;
        height: 28rem;
    }

    .display .about > h2 {
        font-size: 2.2rem;
        margin: 0 0 0 3rem;
    }

    .display .about > h3 {
        font-size: 1.2rem;
        margin: 0.25rem 0 1.5rem 3rem
    }

    .info {
        grid-area: info;
        color: #ffffff;
        display: flex;
        flex-direction: column;
    }

    .info h1 {
        font-size: 2.6rem;
        margin: 0;
    }

    .info h3 {
        font-size: 1.4rem;
        font-weight: 400;
        color: rgba(255,255,255,.8);
        margin: .4rem 0 0 0;
    }

    .info p {
        color: rgba(255,255,255,.8);
        padding: .4rem 0;
        line-height: 1.5;
    }

    .info footer {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 1rem;
        background: rgba(255,255,255,.05);
        border-radius: 2px;
        margin: auto 0 0 0;
    }

    .info footer p {
        margin: 0;
    }

    .back {
        display: flex;
        font-size: 2rem;
        justify-content: center;
        align-items: center;
        width: 3rem;
        height: 3rem;
        background: rgba(255,255,255,.2);
        color: rgba(0,0,0,0.8);
        text-decoration: none;
        border-radius: 999rem;
    }
</style>
