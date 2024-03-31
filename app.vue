<template>
  <div>
    <nav style="display: flex; gap: 10px">
      <a href="/">SSR Home</a>
      <NuxtLink to="/">CSR Home</NuxtLink>
      <a href="/movies">SSR Moveies</a>
      <NuxtLink to ="/movies">CSR Moveies</NuxtLink>
      <NuxtLink to ="/movies/123">CSR Moveies/123</NuxtLink>
      <NuxtLink to ="/teams/Sejong/users/2007440">Sejong 2007</NuxtLink>
    </nav>
    <NuxtPage/>
  </div>
</template>
