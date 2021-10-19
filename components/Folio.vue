<template>
  <div class="folio block">
    <h1 class="block__title">My Projects</h1>
    <p class="block__text">
      I have work on many projects how-ever the following are some of my
      notable/showcase worthy projects
    </p>
    <div class="folio__items">
      <div
        class="folio__items__value"
        v-for="(item, index) in folio"
        :key="index"
      >
        <img class="folio__items__value__img" :src="item.img" alt="" />
        <h2 class="folio__items__value__title">{{ item.title }}</h2>
        <p class="folio__items__value__desc">{{ item.description }}</p>
        <a
          class="folio__items__value__link"
          v-if="item.links.github"
          :href="item.links.github"
          rel="nooppener"
          target="_blank"
        >
          <GithubIcon class="icon--inline" />
          GitHub
        </a>
        <a
          class="folio__items__value__link"
          v-if="item.links.website"
          :href="item.links.website"
          rel="nooppener"
          target="_blank"
          >View Website</a
        >
        <div class="folio__items__value__stack" v-if="item.stack">
          <h2 class="folio__items__value__stack__title">Stack</h2>
          <div class="folio__items__value__stack__tech">
            <p
              class="folio__items__value__stack__tech__item"
              v-for="(stack_tech, stack_index) in item.stack"
              :key="stack_index"
            >
              {{ stack_tech }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import GithubIcon from "@/assets/icons/github.svg?inline";

import Vue from "vue";
export default Vue.extend({
  components: { GithubIcon },
  props: ["folio"]
});
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.folio {
  &__items {
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1400px;
    margin: 1em auto;

    &__value {
      flex: auto;
      margin: 1em;
      position: relative;
      padding: 2em 1em;
      text-align: center;
      border-radius: 0.5em;

      background: $background-dark;
      border: 2px solid darken($background, 5);
      transition: border 0.2s ease;
      max-width: 500px;

      &__img {
        height: 38px;
        position: absolute;
        left: 1em;
        top: 1em;
        opacity: 0.55;
        transition: opacity 0.25s ease;
      }

      &:hover {
        border: 2px solid darken($primary, 5);

        img {
          opacity: 1;
        }

        .folio__items__value__stack__tech__item {
            border: 2px solid lighten($background, 8%);
            color: lighten($text-color, 8%);
        }
      }

      &__title {
        color: $title-color;
        font-weight: 700;
        font-size: 1.25em;
        margin: 0 0 0.5em;
      }

      &__desc {
        color: $text-color;
        padding: 0 1em;
        line-height: 1.7;
      }

      &__link {
        display: inline-block;
        margin: 1em 0.5em 0;
        padding: 1em;
        background: $background;
        border-radius: 0.25em;
        text-decoration: none;
        color: $text-color;
        font-weight: 700;
        transition: all 0.25s ease;

        &:hover {
          background: darken($primary, 5);
          color: white;
        }
      }

      &__stack {
        &__title {
          color: $title-color;
          font-weight: 700;
          font-size: 1em;
          margin: 0.75em 0 0.75em 0;
        }

        &__tech {
          display: flex;
          color: darken($text-color, 10%);
          padding: 0 1em;
          line-height: 1.7;
          gap: 0.3em;
          padding: 0 1em;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;

          &__item {
            border: 2px solid $background;
            border-radius: 4px;
            padding: 0.25em;
            font-size: 0.8em;
            transition: all 0.2s ease;
          }
        }
      }
    }
  }
}
</style>
