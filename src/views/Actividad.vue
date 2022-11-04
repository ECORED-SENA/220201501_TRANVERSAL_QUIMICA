<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/BVnyvEyhdzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
         
</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
