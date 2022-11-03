<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-4 El presente componente formativo, con énfasis en química, tiene por objetivo instruir en saberes y conocimientos básicos y esenciales que logren contribuir a la mejora continua del ser como agente de cambio.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/XDSYFbE2vCo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
