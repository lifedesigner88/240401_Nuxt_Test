<!--<script setup lang="ts">-->
<script setup>  // ts 뺴면 자바스크립트
const query = ref("");
const movies = ref([]);
// function search(){
//   $fetch(`http://www.omdbapi.com/?apikey=46e5342c&s=${query.value}`)
// }
async function search(){
  const {Search} = await $fetch(`https://www.omdbapi.com/?apikey=46e5342c&s=${query.value}`)
  movies.value = Search;
  console.log(Search)
}
</script>

<template>
  <form @submit.prevent = "search">
    <input type="text" v-model="query">
    <button type="submit">Search</button>
  </form>
  <ul style="display: flex; flex-wrap: wrap; gap: 10px; list-style: none">
    <li v-for="movie in movies" :key="movie.imdbID">
      <NuxtLink :to="{ name: 'movies-id', params: { id:movie.imdbID } }">
        <img :src="movie.Poster" :alt="movie.title"/>
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped>

</style>