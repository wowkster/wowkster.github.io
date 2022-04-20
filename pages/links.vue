<template>
  <div>
    <div class="heading">
      <img
        class="heading__logo"
        src="/img/wowkster.png"
        alt="Wowkster's Avatar"
        title="Wowkster"
        width="379px"
        height="379px"
      />
      <h1 class="heading__title">Wowkster</h1>
      <p class="heading__text">
        This page contains links to all my social media and other platforms
      </p>
    </div>
    <div class="links">
      <a
        class="links__item"
        target="_blank"
        rel="nooppener"
        href="https://github.com/wowkster"
      >
        <GithubIcon />
        <div class="links__item__content">
          <h1 class="links__item__content__title">GitHub</h1>
          <p class="links__item__content__text">wowkster</p>
        </div>
      </a>
      <a
        class="links__item"
        target="_blank"
        rel="nooppener"
        href="https://twitter.com/WowksterMC"
      >
        <TwitterIcon />
        <div class="links__item__content">
          <h1 class="links__item__content__title">Twitter</h1>
          <p class="links__item__content__text">@WowksterMC</p>
        </div>
      </a>
      <div class="links__item">
        <DiscordIcon />
        <div class="links__item__content">
          <h1 class="links__item__content__title">Discord</h1>
          <p class="links__item__content__text">Wowkster#001</p>
        </div>
      </div>
      <a class="links__item" rel="nooppener" href="mailto:wowkster@wowkster.com">
        <MailIcon />
        <div class="links__item__content">
          <h1 class="links__item__content__title">Email</h1>
          <p class="links__item__content__text">wowkster@wowkster.com</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import GithubIcon from "@/assets/icons/github.svg?inline";
import InstagramIcon from "@/assets/icons/instagram.svg?inline";
import MailIcon from "@/assets/icons/mail.svg?inline";
import TwitterIcon from "@/assets/icons/twitter.svg?inline";
import DiscordIcon from "@/assets/icons/discord.svg?inline";

export default Vue.extend({
  components: {
    GithubIcon,
    InstagramIcon,
    MailIcon,
    TwitterIcon,
    DiscordIcon,
  },
});
</script>

<style lang="scss" scoped>
@use "sass:color";
@import "@/assets/scss/variables.scss";

.heading {
  position: relative;
  text-align: center;

  &__logo {
    margin-top: 2em;

    width: 100%;
    height: auto;

    max-width: 300px;
    max-height: 300px;

    border: 2px solid $primary;
    border-radius: 379px;

    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  }

  &__title {
    font-size: 2.5em;
    margin-top: 0.5em;
    color: $primary;
    letter-spacing: 0.1em;
    font-weight: 700;
  }

  &__text {
    color: $text-color;
    max-width: 300px;
    margin: 1em auto;
  }
}

@keyframes title {
  0% {
    opacity: 0;
    transform: scale(0.75);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.links {
  display: grid;
  grid-template-rows: repeat(1fr 5);
  max-width: 500px;
  width: 100%;
  margin: 1em auto;
  padding: 1em;

  &__item {
    display: flex;
    background: $background-dark;
    border: 2px solid darken($background, 5);
    transition: border 0.2s ease;
    margin: 0.5em auto;
    width: 100%;
    padding: 1em;

    align-items: center;

    color: $text-color;
    text-decoration: none;
    border-radius: 0.5em;
    transition: 0.2s ease;

    svg {
      width: 32px;
      height: 32px;
      margin-right: 1em;
    }

    &__content {
      flex: 1 1 auto;

      &__title {
        font-weight: 700;
      }
      &__text {
      }
    }

    &:hover {
      color: $primary;
      border-color: $primary;
    }
  }
}
</style>