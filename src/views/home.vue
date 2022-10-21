<template>
  <main>
    <TheWelcome/>
  </main>
</template>

<script lang="ts">
import {Component, Vue} from "vue-facing-decorator"
import TheWelcome from "@/components/TheWelcome.vue"

@Component({
  components: {TheWelcome}
})
export default class HomeView extends Vue {

}
</script>
