<template>
  <div>
    <nav style="display: flex; gap: 10px">
      <a href="/">SSR Home</a>
      <NuxtLink to="/">CSR Home</NuxtLink>
      <a href="/movies">SSR Moveies</a>
      <NuxtLink to ="/movies">CSR Moveies</NuxtLink>
    </nav>
    <NuxtPage/>
  </div>
</template>
