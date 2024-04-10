<script setup>
const user = useUser();
// const isLoggedIn = useIsLoggedIn();
</script>


<template>
  <nav style="display: flex; gap: 10px">
    <NuxtLink to="/">CSR Home</NuxtLink>
    <NuxtLink to ="/movies">CSR Moveies</NuxtLink>
    <NuxtLink to ="/login">login</NuxtLink>
    <NuxtLink to ="/teams/Sejong/users/2007440">Sejong 2007</NuxtLink>
    <NuxtLink v-if="!user.isLoggedIn" to ="/login">Login</NuxtLink>
    <a href="#" v-else @click.prevent="user.isLoggedIn = false">LogOut</a>
  </nav>
  <slot></slot>
</template>
