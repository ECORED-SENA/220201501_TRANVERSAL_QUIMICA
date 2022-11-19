<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Transformaciones químicas
    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-6.medidas_bloque-textb_t4.medidas_fa-quote-textb_t4  
        .tarjeta-color.pe-4.ps-3.py-4.mb-2.mb-md-4(data-aos="fade-right")
          .bloque-texto-b.color-acento-botones.px-4(data-aos="fade-right")
            .bloque-texto-b__texto.m-4
              i.fas.fa-quote-left
              p.m-5 Cuesta reconocer que absolutamente todo alrededor es resultado de la química y sus reacciones, que lo asombroso de esta ciencia no se limita a recipientes burbujeantes en un laboratorio; fue gracias a esta que el universo, el cosmos y la misma vida en la tierra tuvieron un principio. Las transformaciones químicas toman lugar a cada instante y en todo momento, en lugares insospechados. Se dice que cada segundo se dan 100.000 reacciones químicas solo en el cerebro humano.
              br
              br
              p.margin-texto_2.flex-end <b>(El País, 2017).</b>  
              i.fas.fa-quote-right
      .col-12.col-lg-6.mb-4.mb-md-0
        figure.d-flex.justify-content-center
          img.w-auto(src='@/assets/curso/tema4/img1.png' data-aos="zoom-in-down")

    .bg5.p-5.mb-5 
      .row.align-items-center
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
          figure.d-flex.justify-content-center
            img.w-auto(src='@/assets/curso/tema4/img3.svg', alt='') 
        .col-lg-8.mb-5(data-aos="fade-right") 
          p Es entonces que una reacción química es aquel proceso en el cual una o más sustancias de partida, denominadas reactivos, se transforman en otras químicamente diferentes, llamadas productos, mediante la separación, intercambios y/o reordenamiento de sus átomos constituyentes. Una ecuación química, por otro lado, es una representación alfanumérica lógica de este fenómeno. A continuación, se muestra genéricamente una ecuación química, donde se asume que A y B son los reactivos y, C y D, sus respectivos productos:
          .row.justify-content-center.align-items-center 
            .col-lg-12 
              figure.mb-3
               img.img-t.m-auto(src='@/assets/curso/tema4/img2.svg', alt='') 
              p.text-center Las letras a, b, c y d corresponden a los coeficientes estequiométricos de ajuste.
    p.mb-5.text-center El vasto número de reacciones químicas puede clasificarse según el siguiente esquema de categorías:
    .row.justify-content-center(data-aos="fade-right")
      .col-md-6.col-xl-3.mb-3
        .tarjeta.tarjeta.bg6.p-md-3.p-5.h-100
          p.py-3.text-center.text-white Reacción de síntesis o combinación: dos o más sustancias se combinan para formar un único producto.
          img.img-t(src='@/assets/curso/tema4/img4.svg', alt='Texto que describa la imagen').mx-auto
      .col-md-6.col-xl-3.mb-3
        .tarjeta.tarjeta.bg6.p-md-3.p-5.h-100
          p.py-3.text-center.text-white Reacción de descomposición: un reactivo da lugar a dos o más productos. Generalmente, requiere el suministro de calor para que la reacción tome lugar, es decir son reacciones de tipo endotérmico.
          img.img-t(src='@/assets/curso/tema4/img7.svg', alt='Texto que describa la imagen' ).mx-auto
      .col-md-6.col-xl-3.mb-3
        .tarjeta.tarjeta.bg6.p-md-3.p-5.h-100
          p.py-3.text-center.text-white Reacción de sustitución o desplazamiento simple: se da cuando un elemento toma el lugar de otro en la formación de un compuesto.
          img.img-t(src='@/assets/curso/tema4/img8.svg', alt='Texto que describa la imagen' ).mx-auto
      .col-md-6.col-xl-3.mb-3
        .tarjeta.tarjeta.bg6.p-md-3.p-5.h-100
          p.py-3.text-center.text-white Reacción de metátesis o doble sustitución: ocurre cuando dos compuestos intercambian sus componentes iónicos para generar productos completamente diferentes. 
          img.img-t(src='@/assets/curso/tema4/img9.svg', alt='Texto que describa la imagen' ).mx-auto
    .row.mb-5.align-items-center
      .col-12.p-4
        .row.justify-content-center(data-aos="fade-right")
          .col-lg-1
            figure.py-3
              img.img-t(src='@/assets/curso/tema4/img6.png').mx-auto(data-aos="fade-right").mx-auto
          .col-lg-11
            p.mb-0 Se debe garantizar que una ecuación química sea consistente con la ley de la conservación de la materia. Para ello, se hace uso de la técnica de balanceo por tanteo o inspección que consiste en asignar números enteros, denominados coeficientes estequiométricos, a cada uno de los compuestos involucrados en la reacción asegurando que el número de elementos de cada lado es el mismo. Esta técnica de ajuste resulta útil para un gran número de ecuaciones. Se aconseja balancear en este orden:
    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-md-6.col-lg-2.mb-4
        .tarjeta.tarjeta.bg1.p-4.h-100
          img.img-t.mb-4(src='@/assets/curso/tema4/img10.svg', alt='Texto que describa la imagen').mx-auto
          p.txt-color2.text-center Metales
      .col-md-6.col-lg-2.mb-4
        .tarjeta.tarjeta.bg1.p-4.h-100
          img.img-t.mb-4(src='@/assets/curso/tema4/img11.svg', alt='Texto que describa la imagen').mx-auto
          p.txt-color2.text-center No Metales  
      .col-md-6.col-lg-2.mb-4
        .tarjeta.tarjeta.bg1.p-4.h-100
          img.img-t.mb-4(src='@/assets/curso/tema4/img12.svg', alt='Texto que describa la imagen').mx-auto
          p.txt-color2.text-center Hidrógeno
      .col-md-6.col-lg-2.mb-4
        .tarjeta.tarjeta.bg1.p-4.h-100
          img.img-t.mb-4(src='@/assets/curso/tema4/img13.svg', alt='Texto que describa la imagen').mx-auto
          p.txt-color2.text-center Oxígeno
    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta.color-acento-contenido1.h-100
          .p-5
            p.text-center <b>Ejemplo:</b> balancear la siguiente ecuación:
            img.img-t.mb-4(src='@/assets/curso/tema4/img14.svg', alt='Texto que describa la imagen').mx-auto
            p Se hace una inspección previa y se comprueba que se requiere ajustar la ecuación.
            .row 
              .col-lg-12
                .tabla-a.color-acento-botones.mb-4
                  table
                    tbody
                      tr(style="background-color: #FBCFCF")
                        td.taborde.text-center #[b Elemento]
                        td.taborde.text-center #[b Reactivos]
                        td.taborde.text-center #[b Producto]

                      tr(style="background-color: #FEE8DE")
                        td.taborde.text-center Fe
                        td.taborde.text-center.text-center 2
                        td.taborde.text-center.text-center 1
                        
                      tr(style="background-color: #FFFFFF")
                        td.taborde.text-center C
                        td.taborde.text-center 1
                        td.taborde.text-center 1
                      
                      tr(style="background-color: #FEE8DE")
                        td.taborde.text-center O
                        td.taborde.text-center 3
                        td.taborde.text-center 1
                        
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta.color-acento-contenido2.h-100
          .p-5
            p.mb-4.text-center Ajustando el hierro queda
            img.mb-4.img-t.mb-4(src='@/assets/curso/tema4/img15.svg', alt='Texto que describa la imagen').mx-auto
            p.mb-4.text-center Luego el oxígeno 
            img.mb-4.img-t.mb-4(src='@/assets/curso/tema4/img16.svg', alt='Texto que describa la imagen').mx-auto
            p.mb-4.text-center Dado que el coeficiente estequiométrico 3 desajusta el carbono, es necesario compensarlo
            img.mb-4.img-t.mb-4(src='@/assets/curso/tema4/img17.svg', alt='Texto que describa la imagen').mx-auto

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
