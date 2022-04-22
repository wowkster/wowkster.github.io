<template>
  <div class="about block">
    <AbstrBottom class="abstr" />
    <h1 class="block__title">About Me</h1>
    <p class="block__text">
      I'm a self-taught software developer 💻 currently developing
      full-stack in Vue, React, Next.js, and Node. I'm extremely dedicated and passionate about
      programming and cybersecurity, always eager to learn new things, and never
      backing down from a challenge.
      <br />
      <br />
      Collaborating with friends and colleagues I have gathered experience
      working on as well as managing team projects. I have a strong work ethic
      and great leadership skills. No matter where I am assigned, I strive to
      produce high quality and efficient solutions to any software problem.
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TypeScriptIcon from "@/assets/icons/typescript.svg?inline";
import VueJSIcon from "@/assets/icons/vuejs.svg?inline";
import KotlinIcon from "@/assets/icons/kotlin.svg?inline";
import AbstrBottom from "@/assets/img/abstr-bottom.svg?inline";

export default Vue.extend({
  components: { TypeScriptIcon, VueJSIcon, KotlinIcon, AbstrBottom }
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.abstr {
  transform: translateY(-8px);
}
</style>
