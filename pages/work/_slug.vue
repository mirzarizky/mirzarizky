<template>
  <div>
    {{ work.title }}
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const work = await $content('work', params.slug).fetch()

    return { work }
  }
}
</script>
