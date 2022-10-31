<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 La materia y sus cambios
    .row.align-items-center.mb-5
      .col-lg-5
        p El origen del universo y de todo lo observado ha sido objeto de inquietud y debate por siglos, dado que para el ser humano siempre ha existido la necesidad de explicar todo cuanto ocurre a su alrededor, lo anterior cobra sentido considerando que, en su mayoría, las antiguas civilizaciones humanas disponían de elaboradas y fabulosas teorías cosmogónicas aspirando a explicar el origen de, absolutamente, todas las cosas. Sin embargo, antes de querer explicar el génesis de ese “todo” resulta conveniente observar, interpretar, estudiar y comprender el vasto universo que se revela.
      .col-lg-3  
        figure
          img(src='@/assets/curso/tema1/img21.svg')
      .col-lg-4
        p El universo se encuentra formado, de acuerdo con Ahmed (2020), por cuatro tipos de entidades: materia, energía y sus contrapartes, estas últimas hasta la fecha incomprensibles e imposibles de detectar y medir: materia y energía oscura; debido al alcance de este curso solo se abordará y se profundizará en el primero de estos elementos.
    .row.align-items-center.mb-5.bg4.p-5
      .col-lg-5  
        figure
          img(src='@/assets/curso/tema1/img22.svg')
      .col-lg-7
        p Todo cuanto se observa, que se pueda medir y ocupe un lugar en el espacio, se denomina materia; de allí que la disciplina encargada de estudiar esta y los cambios que las sustancias experimentan, comúnmente, se conoce como Química, una ciencia experimental que, sin duda, resulta nuclear en muchas otras disciplinas del conocimiento como la astronomía, bioquímica, geología, fisicoquímica y de ciencias aplicadas como la medicina y la ingeniería, en muchas de sus ramas.
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 2.1. La materia
    .row.align-items-center.mb-5
      .col-lg-7
        p Resulta necesario identificar atributos y cualidades de la materia en aras de lograr un mejor entendimiento de esta. Entre sus propiedades se encuentran: 
        h4 Propiedades físicas: 
        p Hacen referencia a aquellas características que pueden ser medidas y observadas sin alterar la muestra en su composición y naturaleza, estas, a su vez, pueden clasificarse en:
        P #[span.txt-color1 Propiedades extensivas:] son aquellas que dependen de la cantidad de materia en la muestra, tales como la masa, el volumen, la longitud, el peso, calor específico, entre otras.
      .col-lg-5  
        figure
          img(src='@/assets/curso/tema1/img23.png')
      
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
