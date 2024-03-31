<script setup>
const route = useRoute();
const message = computed(() =>
    `I'm on team ${route.params.teamSlug}
    and my user id is ${route.params.userId}`
)
</script>

<template>
<p>
<!--  {{ $route.params.teamSlug }}<br>-->
<!--  {{ $route.params.userId }}<br>-->
  {{ message }}<br>
</p>
</template>

