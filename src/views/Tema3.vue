<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 El átomo: unidad fundamental
    separador
    #t_3_2
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Nomenclatura de compuestos
    p.mb-5 Los compuestos químicos se representan mediante arreglos alfanuméricos denominados fórmulas. Haciendo uso de los símbolos químicos de cada especie elemental y determinados subíndices, resultado de las leyes ponderales, se puede expresar de manera precisa y coherente la composición de cualquier sustancia.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10        
        .row.align-items-center.bg7.p-5 
          .col-lg-9
            p <b>Símbolos:</b> identifican los elementos constituyentes.
            p <b>Subíndices:</b> indican la atomicidad, es decir, el número de elementos que conforman el compuesto.
            p <b>	Paréntesis:</b> agrupa elementos, generalmente acompañado de un subíndice para indicar el número de veces que se repite dicha unidad.
            p Elementos básicos de una fórmula química.
          .col-lg-3
            figure
              img.img-t(src='@/assets/curso/tema4/img18.svg').mx-auto
    p.mb-5 Las moléculas, al formar compuestos buscan estar eléctricamente neutras, siendo este principio la base fundamental para toda reacción química.
    h4 Enlace Químico
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3
        figure
          img.img-t(src='@/assets/curso/tema4/img19.png').mx-auto
      .col-lg-8        
        .row.align-items-center.bg8.p-5 
          .col-lg-8
            h4 Enlace Químico
            p El enlace iónico es la interacción de un metal con un no metal; en este se da una pérdida de electrones por parte del metal y una ganancia de estos por parte del no metal. Este tipo de enlaces se presenta entre las sales, por ejemplo: el cloruro de sodio de fórmula química NaCl, mejor conocido como sal de mesa común.
          .col-lg-4
            figure
              img.img-t(src='@/assets/curso/tema4/img20.svg').mx-auto
    h4 Enlace covalente
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6        
        p Se da cuando hay una unión entre no metales, como estos tienen una electronegatividad muy alta no se da pérdida ni ganancia de electrones, por lo cual estos son compartidos.
        p Existen diferentes tipos de enlaces covalentes como se verá a continuación.
        .row
          .col-lg-12
            a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p <b> Enlace web</b>. Consulte la biblioteca digitaL González, M. R. M., & Montagut, B. P. (2014). Química.   
      .col-lg-6.mb-3
        figure
          img.img-t(src='@/assets/curso/tema4/img21.svg').mx-auto
    .bg5.p-5.mb-5 
      .row.align-items-center
        .col-lg-8.mb-5(data-aos="fade-right") 
          h4 Representación en estructuras de Lewis
          p Las llamadas estructuras de Lewis representan la distribución de los electrones de su último nivel de los elementos. Así mismo, la formación de los enlaces para conseguir la estabilidad de la molécula o compuesto, dando cumplimiento a la ley del octeto en la cual cada elemento tiende a cumplir 8 electrones como ya se había mencionado anteriormente.
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
          figure
            img.img-t.m-auto(src='@/assets/curso/tema4/img22.svg', alt='').mx-auto 
</template>

<script>
export default {
  name: 'Tema3',
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
