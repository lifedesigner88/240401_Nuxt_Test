// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        ['@pinia/nuxt',{
            autoImports: ["defineStore", "acceptHMRUpdate"]
        }],
    ],
    alias:{
        pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
    }
})
