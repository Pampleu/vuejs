<template>
  <div>
    <h2>NASA SHEARCH</h2>
    <nav>
      <router-link class="spacing" v-for="routes in links" 
      v-bind:key="routes.id"
      :to="`${routes.page}`">{{routes.text}}</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      links: [
        {
          id: 1,
          text: 'Home',
          page:'/Home'
        },
        {
          id: 2,
          text: 'Shearch',
          page:'/pagerecherche'
        },
        
      ]
    }
  }
}
</script>

<style> 
  .spacing { 
    Margin-right: 10px; 
  } 
</style>