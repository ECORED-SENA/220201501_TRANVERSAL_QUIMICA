<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 El átomo: unidad fundamental
    
    .row.mb-5
      .col-xl-5.mb-3.mb-xl-0
        figure.d-flex.justify-content-center
          img.w-auto(src='@/assets/curso/tema3/img1.png')
      .col-xl-7
        p Los primeros en cuestionarse acerca de la composición de la materia fueron los griegos Leucipo y su discípulo Demócrito en el siglo V a. de C. Estos dos filósofos propusieron por primera vez la palabra átomo, que significa indivisible, para denominar a aquella unidad que formaba toda la materia. No obstante, algunos otros pensadores de la época argumentaban con propiedad sobre la continuidad de la materia, es decir, que esta se podía dividir indefinidamente. Algo que caracterizó esta época fue la inexistencia de la experimentación y comprobación empírica de las ideas por lo que, las conclusiones se basaban en solo un ejercicio de razonamiento.
    
    .row
      .col-xl-8
        p.mb-5 Estas inquietudes volvieron a retomarse en Europa solo hasta el siglo XVll, cuando se intentó explicar las propiedades de los gases, entre estos, el aire. La experimentación comenzó a hacer parte del ejercicio de los científicos, lo que les permitió medir las cantidades de las sustancias que reaccionaban para producir otras diferentes. La teoría atómica se gestó entre los años 1803 y 1807 cuando el maestro de escuela inglés John Dalton (1766-1844) analizó numerosas observaciones y recopilaciones de trabajos previos en relación con la ley de la conservación de la masa, la ley de las proporciones definidas o ley de Proust y la ley de las proporciones múltiples, proponiendo los siguientes postulados:
        ul.lista-ul--color.ms-4
          li 
            i.fas.fa-atom.colr
            | Toda la materia consta de partículas indivisibles llamadas átomos.
          li 
            i.fas.fa-atom.colr
            | Los átomos del mismo elemento son similares en forma y masa, pero difieren de los átomos de otros elementos.
          li 
            i.fas.fa-atom.colr
            | Los átomos no se pueden crear ni destruir durante una reacción química (ley de la conservación de la materia).
          li 
            i.fas.fa-atom.colr
            | Los átomos de diferentes elementos pueden combinarse entre sí en proporciones de números enteros simples y fijos para formar átomos compuestos (ley de Proust).
          li 
            i.fas.fa-atom.colr
            | Los átomos del mismo elemento pueden combinarse en más de una proporción para formar dos o más compuestos (Ley de las proporciones múltiples).
          li 
            i.fas.fa-atom.colr
            | El átomo es la unidad de materia más pequeña que puede participar en una reacción química (Libretexts, 2021).
      .col-xl-4
        figure.d-none.d-xl-flex.justify-content-center
          img.w-auto(src='@/assets/curso/tema3/img2.png')
    
    Separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
      h2 3.1 Teoría atómica
    
    figure.mb-5.d-flex.justify-content-center
      img.w-auto(src='@/assets/curso/tema3/img3.svg')
    
    p.mb-5 Si bien varios de los postulados en los que se basa la teoría atómica de Dalton explican las leyes de combinación anteriormente mencionadas, el desarrollo de la química hasta la actualidad ha permitido identificar algunas falencias en los postulados dicho autor; algunos ajustes a su teoría son:

    .row.mb-5
      .col-xl-7
        ul.lista-ul--color.ms-4.mb-5
          li 
            i.fas.fa-atom.colr
            | Efectivamente la materia está constituida por átomos, los cuales son las partículas más pequeñas que participan en las reacciones, no obstante, los avances tecnológicos posteriores permitieron identificar que el átomo se compone de protones, neutrones y electrones.
          li 
            i.fas.fa-atom.colr
            | De acuerdo con la teoría de Dalton, los átomos de un mismo átomo son idénticos. Sin embargo, se ha encontrado que átomos de un mismo elemento varían en su masa y densidad. Los átomos de un mismo elemento que presentan estas características se denominan isótopos.
          li 
            i.fas.fa-atom.colr
            | No siempre se cumple que la combinación de átomos de diferentes elementos de en una proporción de números enteros simples para formar compuestos, como es el caso de la sacarosa o azúcar común, un compuesto orgánico de mayor complejidad (C12H22O11).
        p Previo a introducir conceptualmente el modelo actual del átomo, es necesario revisar, brevemente, los descubrimientos que permitieron su desarrollo.
      .col-xl-5
        figure.d-flex.justify-content-center
          img.w-auto(src='@/assets/curso/tema3/img4.png')
    
    p Llegar a dilucidar el concepto científico de átomo requirió del aporte intelectual de una gran cantidad de científicos naturales y pensadores, así como años de observación y experimentación. Hoy es posible saber que algunas de las propiedades físicas, como el punto de fusión o el punto de ebullición, y cualitativas, como el color o la dureza, están determinadas en gran medida por los electrones. Así, de acuerdo con la cantidad de estas partículas subatómicas: protones, neutrones y electrones, un átomo presenta propiedades que lo caracterizan. 
    p.mb-5 A continuación, se presentan algunos conceptos esenciales asociados al modelo atómico vigente.

    .row.mb-5
      .col-lg-6.mb-3.mb-lg-0
        figure.d-flex.justify-content-center
          img.w-auto(src='@/assets/curso/tema3/img5.svg')
      .col-lg-6
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Número atómico (Z)") Indica el número de protones contenidos en el núcleo. Cuando el átomo es neutro, Z indica el número de electrones. El número de protones es único para cada especie atómica, es de manera análoga, la huella digital de los átomos, quienes les confiere identidad.
          p.text-small(numero="2" titulo="Número másico (A)") Número de protones más neutrones, dado que la masa de los electrones es despreciable en relación con la masa nuclear.
          p.text-small(numero="3" titulo="Isótopos") Se denominan así a aquellos átomos que contienen igual cantidad de protones, pero difieren en la cantidad de neutrones.
          p.text-small(numero="4" titulo="Ion") ELEMENTO o molécula cargada eléctricamente. Denominándose catión si su carga neta es positiva y anión si, por el contrario, su carga es negativa.

    .row.mb-5.justify-content-center
      .col-xl-10
        .tarjeta.bgr_4.p-4
          .row
            .col-xl-auto
              figure.d-flex.justify-content-center
                img.w-auto(src='@/assets/curso/tema3/img6.svg')
            .col-xl-8.d-flex.align-items-center
              div
                p <b>Protón:</b> partícula subatómica con carga positiva (1,6 x 10<sup>-19</sup> C) que se encuentra en el núcleo del átomo.
                p <b>Neutrón:</b> partícula eléctricamente neutra presente en el núcleo de los átomos; tiene aproximadamente la misma masa que el protón (1,67 x 10<sup>-27</sup>  kg)
                p.mb-0 <b>Electrón:</b> partícula subatómica con carga negativa (-1,6 x 10<sup>-19</sup>  C) que se localiza con probabilidad en la periferia de átomo; el electrón tiene una masa de 9,1 x 10<sup>-31</sup> kg.
    
    p.mb-5 La configuración electrónica hace referencia a la manera como están distribuidos los electrones en la zona periférica de un átomo, compuesta por orbitales; gran parte de las propiedades fisicoquímicas del átomo se explican a partir de esta.

    .row
      .col-xl-5
        figure.d-flex.justify-content-center
          img.w-auto(src='@/assets/curso/tema3/img7.png')
      .col-xl-7.d-flex.align-items-center
        ul.lista-ul--color
          li 
            i.fas.fa-atom.colr
            | Los orbitales atómicos poseen un determinado nivel de energía, del 1 al 7, y estos se encuentran, a su vez, subdivididos en subniveles energéticos (s, p, d, f); cada electrón tendrá un momento magnético y un spin asociado; lo que en conjunto se denomina números cuánticos, tópico en el cual no se pretende profundizar en el presente documento. Cada electrón tiene cuatro números cuánticos únicos que lo diferencian de los demás en la nube electrónica.
          li 
            i.fas.fa-atom.colr
            | El orden de llenado se da de acuerdo con el principio de Aufbau, es decir, los orbitales se ocupan empezando por el de menor energía y siguiendo en un orden energético creciente. Para conocer esta distribución electrónica, se hace uso de la herramienta denominada triángulo de Moeller.
    
    p En dicho diagrama el número representa el nivel, en este caso (1). La letra que lo acompaña, s, el subnivel, y el exponente, 2, los electrones alojados en ese subnivel. 

    .row.mb-5.justify-content-center
      .col-xl-10
        .bg_grad_09
          .row.mb-3
            .col-lg-9.mb-3.mb-lg-0.d-flex.align-items-center.ps-lg-5
              p.mb-0 Cada subnivel tiene un número máximo de electrones que puede contener, los cuales se especifican a continuación:
            .col-lg-3
              .bg2.p-4.text-center
                  table
                    thead.bgr_8
                      tr
                        th(style='width:47%') Subnivel
                        th(style='width:53%') Número máximo <br>de electrones
                    tbody.text-center
                      tr.bgr_9
                        td s
                        td 2
                      tr.bgr_10
                        td p
                        td 6
                      tr.bgr_9
                        td d
                        td 10
                      tr.bgr_10
                        td f
                        td 14
    
    .bg_grad_03
      .bgr.px-5.pt-3.pb-4.mb-3(data-aos="fade-down-right")
        h3.mb-0  Niveles de energía

    p.mb-5 Un elemento puede tener hasta 7 niveles de energía, los cuales se denotan con letras mayúsculas que van desde la (K) hasta la (Q). Cada nivel tiene una capacidad limitada de electrones que se van completando de acuerdo al número atómico del elemento y al orden de la tabla spin, que se encuentra a continuación:
    
    figure.mb-5.d-flex.justify-content-center
      img.w-auto(src='@/assets/curso/tema3/img8.svg')
    
    h4 Subniveles de energía

    p.mb-5 En cada uno de los niveles hay subniveles también identificados con letras como la (s), (p), (d) y (f). En la siguiente gráfica el color morado representa los niveles, el rojo el subnivel (s), el naranja el subnivel (p), el verde el subnivel (d) y el azul el subnivel (f).

    figure.mb-5.d-flex.justify-content-center
      img.w-auto(src='@/assets/curso/tema3/img9.svg')
    
    p No todos los niveles tienen los 4 subniveles, ellos también tienen un límite.

    p.mb-5 A continuación un ejemplo de la configuración del cloro para explicarte el paso a paso:

    .tarjeta.bgr_9.p-3.p-md-5.mb-5
      p.text-bold La lectura de esto se interpreta así:
      p Los coeficientes son los niveles, las letras significan los subniveles que se van llenando hasta su máxima capacidad la cual está representada por los exponentes.
      p.mb-5 Existe un orden que se sigue mediante la tabla spin de la configuración electrónica como se ve en la siguiente gráfica:
      figure.d-flex.justify-content-center
        img.w-auto(src='@/assets/curso/tema3/img10.svg')

    p <b>Con esta tabla spin se debe tener en cuenta:</b>
    ul.lista-ul--color.mb-5
      li 
        i.fas.fa-atom.colr
        | Los elementos pueden tener hasta 7 niveles.
      li 
        i.fas.fa-atom.colr
        | Los niveles poseen subniveles en donde cada uno puede aceptar el número de electrones de acuerdo con la siguiente figura:
    
    p.mb-5.text-center.text-bold Capacidad de los niveles de energía

    figure.mb-5.d-flex.justify-content-center
      img.w-auto(src='@/assets/curso/tema3/img11.svg')

    p.mb-5.text-center Es importantísimo seguir el orden de las flechas (de arriba hacia abajo y derecha a izquierda), si lo escribiéramos en forma horizontal quedaría:

    .bg_grad_10
      .row.mb-3.d-flex.justify-content-center
        .col-lg-5.d-flex.justify-content-center
          .bgr_14.px-5.py-2
            h4.mb-0.text-center Orden horizontal configuración electrónica
    
      .row.mb-5
        .col-lg-4.mb-3.mb-lg-0
          figure.d-flex.justify-content-center
            img.w-auto(src='@/assets/curso/tema3/img12.svg')
        .col-lg-8.d-flex.align-items-center
          div
            .row.justify-content-center.mb-3
              .col-auto
                p.bgr_13.px-3.py-2.text-center.text-bold 1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p 6s 4f 5d 6p 7s 5f 6d 7p
            p En el ejemplo del Cloro que tiene número atómico de 17 es decir:
            p Z= 35, lo cual significa que tiene 35 electrones para representar electrónicamente, ósea que a la cadena anterior se va llenando con los exponentes hasta completar 17 así:
            p <b>Configuración electrónica del Cloro.</b>
            .row.justify-content-center.mb-3
              .col-auto
                p.bgr_13.px-3.py-2.text-center.text-bold 1s<sup>2</sup> 2s<sup>2</sup> 2p<sup>6</sup> 3s<sup>2</sup> 3p<sup>5</sup>
            p De acuerdo a lo visto anteriormente el subnivel 3p puede albergar hasta 6 electrones, pero con 5 en el caso del Cloro se completan los 17, así:
            p <b> Suma electrones del Cloro.</b>
            .row.justify-content-center.mb-3
              .col-auto
                p.bgr_13.px-3.py-2.text-center.text-bold 2 + 2 + 6 + 2 + 5 = 17 electrones
            p.mb-0 Una vez terminada la configuración, de esta se puede deducir el grupo y el periodo que tiene el elemento en la tabla periódica.
    
    p.text-center En cuanto al periodo solo debe observar cual fue el coeficiente más alto, en este caso es el 3, osea el cloro tiene periodo 3.

    p.mb-5.text-center.text-bold Procedimiento configuración del cloro en cuanto al periodo.

    .row.mb-5.justify-content-center
      .col-md-8.col-lg-4.col-xl-2.mb-3.mb-lg-0
        .bgr_15.p-4
          figure.mb-3.d-flex.justify-content-center
            img.w-auto(src='@/assets/curso/tema3/img13.svg')
          p.text-center Z=35,5
          p.text-center.mb-0 Su número atómico es igual al número de protones p+ 
          p.text-center.mb-0 e-=17
      .col-md-8.col-lg-6.col-xl-4
        figure.d-flex.justify-content-center
          img.w-auto(src='@/assets/curso/tema3/img14.svg')
    
    p.mb-5.text-center En el ejemplo del Cloro:

    .bg_grad_11
      .row.mb-5.justify-content-center
        .col-auto
          figure.mb-3.d-flex.justify-content-center
            img.w-auto(src='@/assets/curso/tema3/img15.svg')
        .col-md-6.col-xl-4.p-4.p-md-0
          p.text-bold Datos completos del Cloro
          p.mb-0 Los niveles en los cuales hay electrones son: 
          p <b>1,2,2,3,3</b>
          p.mb-o El último nivel energético que contiene por lo menos un electrón es: <b>3</b>
          p.mb-0.text-bold Por tanto, el Cloro se ubica en el tercer periodo. 
    
    .bg_grad_12
      .row.mb-5.bg1.p-5
        .col-xl-6.d-flex.align-items-center
          div.text-white
            p Para el grupo se debe tener en cuenta el valor o valores de los exponentes que tiene el nivel más alto.
            p.mb-0 La tabla posee regiones, si la configuración termina en (s) o (p) están en los elementos representativos denotados con (A) si por el contrario terminan en (d) o (f) estos se ubican en los elementos de transición denotados con (B).
        .col-xl-6
          figure.mb-3.d-flex.justify-content-center
            img.w-auto(src='@/assets/curso/tema3/img16.svg')
      
      p.text-center.mb-5 Sigamos tomando el caso del Cloro como ejemplo:

      .row.mb-md-5
        .col-lg-6
          .bg_grad_17
            .row.mb-5.justify-content-center
              .col-auto
                figure.mb-3.d-flex.justify-content-center
                  img.w-auto(src='@/assets/curso/tema3/img15.svg')
              .col-md-7.p-4.p-md-0
                p.text-bold Región donde se encuentra el Cloro.
                p.text-bold 1s<sup>2</sup>  2s<sup>2</sup>   2p<sup>6</sup>    3s<sup>2</sup>   3p <sup>5</sup>
                p La configuración electrónica del Cloro termina en el subnivel “p” por tanto el Cloro pertenece a un grupo de la letra “A”
        .col-lg-6
          .bg_grad_13
            .row.mb-5.justify-content-center
              .col-auto
                figure.mb-3.d-flex.justify-content-center
                  img.w-auto(src='@/assets/curso/tema3/img15.svg')
              .col-md-7.p-4.p-md-0
                p.text-bold Grupo del Cloro
                p.text-bold 1s<sup>2</sup>  2s<sup>2</sup>   2p<sup>6</sup>    3s<sup>2</sup>   3p <sup>5</sup>
                p.mb-0 El Cloro pertenece a un grupo de la letra “A”.
                p.mb-0 El ultimo nivel es 3. 
                p.mb-0 El ultimo nivel tiene “s y p”, por lo que se suma los electrones: 2 + 5 = 7
                p.mb-0.text-bold Por tanto, el cloro pertenece al Grupo 7A

      p.mb-5.text-center A través de la configuración electrónica de los elementos, se puede hallar el número de valencia de cada uno.

      .row.mb-5
        .col-lg-6.d-flex.align-items-center
          div
            p La valencia permite establecer enlaces para formar compuestos, son números positivos o negativos que indican lo que le falta o le sobra para cumplir con la Ley del Octeto en la cual el elemento químico tiende a completar ocho electrones en su último nivel; para este fin puede establecer enlaces covalentes.
            p.text-bold En el ejemplo del Cloro.
        .col-lg-6.mt-4
          .bg_grad_13
            .row.mb-5.justify-content-center
              .col-auto
                figure.mb-3.d-flex.justify-content-center
                  img.w-auto(src='@/assets/curso/tema3/img15.svg')
              .col-md-7.p-4.p-md-0
                p.text-bold Valencia del Cloro
                p.text-bold 1s  2s   2p    3s   3p 
                p.mb-0 El Cloro pertenece a un grupo de la letra “A”.
                p.mb-0 El ultimo nivel es 3. 
                p.mb-0 El ultimo nivel tiene “s y p”, por lo que se suma los electrones: 2 + 5 = 7
                p.mb-0 Por tanto, el cloro pertenece al Grupo 7A
                P.mb-0.text-bold El Cloro tiene una valencia de 7
    .bg_grad_03
      .bgr.px-5.pt-3.pb-4.mb-3(data-aos="fade-down-right")
        h3.mb-0  La tabla periódica
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/nV_bwV7PJpE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
     
    .row.mb-5
      .col-xl-7
        p.mb-5 Al igual que los modelos atómicos, la tabla periódica fue progresando con el desarrollo de la química y la física con el paso del tiempo así:
        ul.lista-ul--color.ms-4.mb-5
          li 
            i.fas.fa-atom.colr
            | Nuevos descubrimientos de elementos.
          li 
            i.fas.fa-atom.colr
            | La clasificación de los elementos por similitud en propiedades.
          li 
            i.fas.fa-atom.colr
            | Establecimiento de la relación entre la masa y el número.
          li 
            i.fas.fa-atom.colr
            | De acuerdo al número atómico se organiza de izquierda a derecha y de arriba hacia abajo formando grupos y periodos, también se encuentran familias.
          li 
            i.fas.fa-atom.colr
            | Existen propiedades que se evidencian en la tabla como la energía de ionización, afinidad electrónica y electronegatividad.
      .col-xl-5
        figure.mb-3.d-flex.justify-content-center
          img.w-auto(src='@/assets/curso/tema3/img17.png')
    
    p.mb-5.text-bold.text-center Tabla periódica / propiedades

    figure.mb-5.d-flex.justify-content-center
      img.w-auto(src='@/assets/curso/tema3/img18.svg')
    
    .tarjeta.bg1.p-4
      SlyderA(tipo="b")
        .row
          .col-xl-5.mb-4.mb-xl-0.d-flex.align-items-center
            div
              p.text-white.text-bold Grupos
              p.text-white También se les conoce como familias, existen 18 grupos en general, dependiendo su distribución electrónica se fraccionan en zonas o regiones de metales, metales alcalinotérreos, no metales y gases nobles.
              a.boton.color-acento-contenido.indicador__container(@click="modal1 = true")
                span Ampliar
                i.fas.fa-search-plus
                .indicador--click(v-if="mostrarIndicador")
          .col-xl-7
            figure.d-flex.justify-content-center
              img.w-auto(src='@/assets/curso/tema3/img19.svg')
        .row
          .col-xl-5.mb-4.mb-xl-0.d-flex.align-items-center
            div
              p.text-white.text-bold Periodos
              p.text-white Existen 7 periodos, estos coinciden con los niveles energéticos de la configuración electrónica de los elementos representativos.
              a.boton.color-acento-contenido.indicador__container(@click="modal2 = true")
                span Ampliar
                i.fas.fa-search-plus
                .indicador--click(v-if="mostrarIndicador")
          .col-xl-7
            figure.d-flex.justify-content-center
              img.w-auto(src='@/assets/curso/tema3/img20.svg')
        .row
          .col-xl-5.mb-4.mb-xl-0.d-flex.align-items-center
            div
              p.text-white.text-bold Regiones
              p.text-white De acuerdo con lo anterior, la tabla posee regiones dependiendo del último subnivel representadas así:
              ul.lista-ul--color.ms-4.mb-5.text-white
                li 
                  i.fas.fa-atom.colr
                  | La región (s) está conformado por los metales alcalinos y alcalinotérreos (grupo 1A y 2A).
                li 
                  i.fas.fa-atom.colr
                  | La región (p) contiene los grupos 3A hasta el 8A.
                li 
                  i.fas.fa-atom.colr
                  | La región (d) posee los grupos 3B a 2B es decir todos los elementos de transición.
                li 
                  i.fas.fa-atom.colr
                  | La región (f) tiene los lantánidos o tierras raras.
              a.boton.color-acento-contenido.indicador__container(@click="modal3 = true")
                span Ampliar
                i.fas.fa-search-plus
                .indicador--click(v-if="mostrarIndicador")
          .col-xl-7
            figure.d-flex.justify-content-center
              img.w-auto(src='@/assets/curso/tema3/img21.svg')
        .row
          .col-xl-5.mb-4.mb-xl-0.d-flex.align-items-center
            div
              p.text-white.text-bold Símbolos químicos
              p.text-white Son letras que codifican los nombres de los elementos. Una de sus características es que es único e irrepetible, fueron estipulados en principio por los griegos. Por ejemplo: Carbono: C, oxígeno: O, nitrógeno: N, hidrógeno: H, cloro: Cl, azufre: S, magnesio: Mg, aluminio: Al, cobre: Cu, argón: Ar, oro: Au, hierro: Fe, plata: Ag, platino: Pt, entre otros.
              p.text-white Si la fuerza llega a ser lo suficientemente grande para mantener los átomos unidos, se forma un enlace químico. Estos se generan gracias a los electrones de los átomos que se encuentran en su capa de valencia.
              a.boton.color-acento-contenido.indicador__container(@click="modal4 = true")
                span Ampliar
                i.fas.fa-search-plus
                .indicador--click(v-if="mostrarIndicador")
          .col-xl-7
            figure.d-flex.justify-content-center
              img.w-auto(src='@/assets/curso/tema3/img22.svg')
    
    ModalA(:abrir-modal.sync="modal1")
      figure.d-flex.justify-content-center
        img.w-auto(src='@/assets/curso/tema3/img19.svg')
    ModalA(:abrir-modal.sync="modal2")
      figure.d-flex.justify-content-center
        img.w-auto(src='@/assets/curso/tema3/img20.svg')
    ModalA(:abrir-modal.sync="modal3")
      figure.d-flex.justify-content-center
        img.w-auto(src='@/assets/curso/tema3/img21.svg')
    ModalA(:abrir-modal.sync="modal4")
      figure.d-flex.justify-content-center
        img.w-auto(src='@/assets/curso/tema3/img22.svg')
    
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
              img.img-t(src='@/assets/curso/tema3/img.18.svg').mx-auto
    p.mb-5 Las moléculas, al formar compuestos buscan estar eléctricamente neutras, siendo este principio la base fundamental para toda reacción química.
    .bg_grad_03
      .bgr.px-5.pt-3.pb-4.mb-3(data-aos="fade-down-right")
        h3.mb-0 Enlace iónico

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3
        figure
          img.img-t(src='@/assets/curso/tema3/img.19.png').mx-auto
      .col-lg-8        
        .row.align-items-center.bg8.p-5 
          .col-lg-8
            h4 Enlace iónico
            p El enlace iónico es la interacción de un metal con un no metal; en este se da una pérdida de electrones por parte del metal y una ganancia de estos por parte del no metal. Este tipo de enlaces se presenta entre las sales, por ejemplo: el cloruro de sodio de fórmula química NaCl, mejor conocido como sal de mesa común.
          .col-lg-4
            figure
              img.img-t(src='@/assets/curso/tema3/img.20.svg').mx-auto
    .bg_grad_03
      .bgr.px-5.pt-3.pb-4.mb-3(data-aos="fade-down-right")
        h3.mb-0 Enlace covalente
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6        
        p Se da cuando hay una unión entre no metales, como estos tienen una electronegatividad muy alta no se da pérdida ni ganancia de electrones, por lo cual estos son compartidos.
         
      .col-lg-6.mb-3
        figure
          img.img-t(src='@/assets/curso/tema3/img.21.svg').mx-auto
    .bg5.p-5.mb-5 
      .row.align-items-center
        .col-lg-8.mb-5(data-aos="fade-right") 
          h4 Representación en estructuras de Lewis
          p Las llamadas estructuras de Lewis representan la distribución de los electrones de su último nivel de los elementos. Así mismo, la formación de los enlaces para conseguir la estabilidad de la molécula o compuesto, dando cumplimiento a la ley del octeto en la cual cada elemento tiende a cumplir 8 electrones como ya se había mencionado anteriormente.
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
          figure
            img.img-t.m-auto(src='@/assets/curso/tema3/img.22.svg', alt='').mx-auto 
    .bg_grad_14
      .row.justify-content-center.align-items-center.mb-5
        p.text-center Pasos para realizar una estructura de Lewis:
        .col-lg-10
          .tarjeta.tarjeta--azul.p-4.mb-5
            SlyderA.flesly(tipo="b")(data-aos="fade-right")
              .row.justify-content-center.p-3
                .col-lg-6.mb-3.mb-lg-0.p-2
                  figure
                    img.img-t.m-auto.mb-3(src='@/assets/curso/tema3/img.23.svg', alt='').mx-auto 
                .col-lg-12.mb-4.mb-lg-0.p-2
                  ol.lista-ol--cuadro.ms-5
                    li
                      .lista-ol--cuadro__vineta
                        span 1
                      p.text-white.mb-0 Escribir fórmula del compuesto: H<sub>2</sub>SO<sub>4</sub>
                    li
                      .lista-ol--cuadro__vineta
                        span 2
                      p.text-white.mb-0 Determinar cantidad de átomos en el compuesto.

              .row.justify-content-center.p-3
                .col-lg-4.mb-3.mb-lg-0.p-2
                  figure
                    img.img-t.m-auto.mb-3(src='@/assets/curso/tema3/img.24.svg', alt='').mx-auto 
                .col-lg-12.mb-4.mb-lg-0.p-2
                  ol.lista-ol--cuadro.ms-5
                    li
                      .lista-ol--cuadro__vineta
                        span 3
                      p.text-white.mb-0 Ubicar el elemento central de la fórmula con sus electrones del último nivel, estos corresponden al número del grupo en el que se encuentra ubicado en la tabla periódica.
          
              .row.justify-content-center.p-3
                .col-lg-4.mb-3.mb-lg-0.p-2
                  figure
                    img.img-t.m-auto.mb-3(src='@/assets/curso/tema3/img.26.svg', alt='').mx-auto 
                .col-lg-12.mb-4.mb-lg-0.p-2
                  ol.lista-ol--cuadro.ms-5
                    li
                      .lista-ol--cuadro__vineta
                        span 4
                      p.text-white.mb-0 Ubicar alrededor del azufre los 4 oxígenos con sus electrones del último nivel.
              .row.justify-content-center.p-3
                .col-lg-4.mb-3.mb-lg-0.p-2
                  figure
                    img.img-t.m-auto.mb-3(src='@/assets/curso/tema3/img.25.svg', alt='').mx-auto 
                .col-lg-12.mb-4.mb-lg-0.p-2
                  ol.lista-ol--cuadro.ms-5
                    li
                      .lista-ol--cuadro__vineta
                        span 5
                      p.text-white.mb-0 Ubicar los Hidrógenos para completar los 8 electrones del Oxígeno.
              .row.justify-content-center.p-3
                .col-lg-6.mb-3.mb-lg-0.p-2
                  figure
                    img.img-t.m-auto.mb-3(src='@/assets/curso/tema3/img.27.svg', alt='').mx-auto 
                .col-lg-12.mb-4.mb-lg-0.p-2
                  ol.lista-ol--cuadro.ms-5
                    li
                      .lista-ol--cuadro__vineta
                        span 6
                      p.text-white.mb-0 Verificar que todos los elementos del compuesto cumplen con la ley del octeto.
    
      .bg_grad_03
        .bgr.px-5.pt-3.pb-4.mb-3(data-aos="fade-down-right")
          h3.mb-0  Estados de oxidación

      .row.mb-5.justify-content-center
        .col-xl-8.mb-3.mb-lg-0
          p En estado natural y cuando se combinan los átomos tienen carga neutra. Los estados de oxidación dependen de la ubicación en la tabla periódica, específicamente del grupo al cual pertenece permitiendo a los elementos formar compuestos.
          p El estado de oxidación, está determinado por los electrones que se encuentran en la capa de valencia del átomo, que buscan cumplir con la regla del octeto.
          p Por ejemplo: cuando se une un átomo de sodio (Na) con un átomo de cloro (CI) para formar un enlace iónico (la unión entre un elemento metálico y otro no metálico): 
          .row.justify-content-center
            .col-auto
              p.bgr_13.px-3.py-2.text-center.text-bold Na + Cl
          .row.justify-content-center.mb-3
            .col-auto
              p.bgr_13.px-3.py-2.text-center.text-bold Sodio + Cloro
          p El sodio que se encuentra ubicado en el grupo lA de la tabla periódica, le sobra un electrón en su capa de valencia para cumplir con la regla del octeto (regla que dice que todos los elementos deben tener 8 electrones en su último nivel de energía) entonces para el sodio sería:
          .row.justify-content-center.mb-3
            .col-auto
              p.bgr_13.px-3.py-2.text-center.text-bold Na<sup>+1</sup>
          p Mientras que el cloro es un elemento al que le hace falta un electrón en su capa de valencia para cumplir con su regla del octeto, entonces el Cloro es:
          .row.justify-content-center.mb-3
            .col-auto
              p.bgr_13.px-3.py-2.text-center.text-bold CL<sup>-1</sup>
        .col-6.col-md-4
          figure.d-flex.justify-content-center
            img.w-auto(src='@/assets/curso/tema3/img23.svg')
      
      P.mb-5 De acuerdo a lo anterior en la tabla a continuación observará los números de oxidación de acuerdo al grupo en la tabla periódica:
      
      .row.mb-5.justify-content-center
        .col-6.col-md-4.col-xl-5.mb-3.mb-lg-0
          figure.d-flex.justify-content-center
            img.w-auto(src='@/assets/curso/tema3/img24.svg')
        .col-xl-4
          table
            thead
              tr
                th.bgr_16 grupo en la tabla periódica
                th.bgr_17 Número de oxidación
            tbody.text-center
              tr
                td.bgr_3 1
                td.bgr_13.py-3 +1
              tr
                td.bgr_3 2
                td.bgr_13.py-3  +2
              tr
                td.bgr_3 3
                td.bgr_13.py-3  +1 <br>+3
              tr
                td.bgr_3 4
                td.bgr_13.py-3  +2 <br>+4
              tr
                td.bgr_3 5
                td.bgr_13.py-3  +1 <br>+3 <br>+5
              tr
                td.bgr_3 6
                td.bgr_13.py-3 +2 <br>+4 <br>+5 <br>+6 <br>-2
              tr
                td.bgr_3 7
                td.bgr_13.py-3  +1 <br>+3 <br>+5 <br>+7 <br>-1
    
    p.mb-5 Los elementos químicos normalmente poseen las mismas cargas positivas como negativas (protones y electrones); al unirse estos dos elementos, el electrón que le sobra al sodio lo cede al cloro:

    .row.mb-5.justify-content-center
      .col-xl-5
        figure.d-flex.justify-content-center
          img.w-auto(src='@/assets/curso/tema3/img25.svg')

    .bg_grad_03
      .bgr.px-5.pt-3.pb-4.mb-3(data-aos="fade-down-right")
        h3.mb-0 Grupos funcionales
    
    p Los grupos funcionales son grupos de átomos, que juntos dan características específicas a las moléculas. Es entonces que, la química inorgánica se encarga del estudio integrado de la formación, composición, estructura y reacciones químicas de los elementos y compuestos inorgánicos.
    p.mb-5 Los principales grupos funcionales de la química inorgánica son óxidos, hidróxidos, ácidos y sales.

    p.text-center.text-bold.mb-5 Grupos funcionales inorgánicos

    .bg_grad_15
      figure.mb-5.d-flex.justify-content-center
        img.w-auto(src='@/assets/curso/tema3/img26.svg')
      
      .row.mb-5
        .col-md-6.col-xl-3.mb-3.mb-xl-0
          .bgr_18.p-5.h-100.d-flex.align-items-center
            .text-center
              h4.txt-color2 Óxidos
              p.text-white.mb-0 Resultan de la unión del oxígeno con otro elemento de la tabla periódica Se pueden dividir en dos, los óxidos básicos y los óxidos ácidos.
        .col-md-6.col-xl-3.mb-3.mb-xl-0
          .bgr_18.p-5.h-100.d-flex.align-items-center
            .text-center
              h4.txt-color2 Hidróxidos
              p.text-white.mb-0 Resultan cuando un óxido básico, es decir, a la unión de un oxígeno con un metal, se le agrega agua; su característica específica consiste en que en su estructura aparece el grupo funcional OH.
        .col-md-6.col-xl-3.mb-3.mb-xl-0
          .bgr_18.p-5.h-100.d-flex.align-items-center
            .text-center
              h4.txt-color2 Ácidos
              p.text-white.mb-0 Los ácidos se forman cuando se une el hidrógeno a un metal o a un no metal, pueden clasificar en dos: ácidos oxácidos y ácidos hidrácidos.
        .col-md-6.col-xl-3.mb-3.mb-xl-0
          .bgr_18.p-5.h-100.d-flex.align-items-center
            .text-center
              h4.txt-color2 Los ácidos oxácidos
              p.text-white.mb-0 Se forman cuando hay presencia de oxígeno en la molécula.
      h4.mb-3 Sales
      p.mb-5 Estas se obtienen cuando se hace reaccionar un ácido con una base; el resultado de esta reacción es una sal más agua. La sal está compuesta de un metal y un no metal.

      .row.mb-5
        .col-md-6.col-xl-3.mb-3.mb-xl-0
          .bgr_19.p-5.h-100.d-flex.align-items-center
            .text-center
              h4 Haloidea
              p.mb-0 Cuando solo existen dos átomos en la molécula, el metal y el no metal.
        .col-md-6.col-xl-3.mb-3.mb-xl-0
          .bgr_19.p-5.h-100.d-flex.align-items-center
            .text-center
              h4 Oxácida
              p.mb-0 Cuando aparte del metal y el no metal, también hay un oxígeno.
        .col-md-6.col-xl-3.mb-3.mb-xl-0
          .bgr_19.p-5.h-100.d-flex.align-items-center
            .text-center
              h4 Ácida
              p.mb-0 Cuando no se sustituyen todos los hidrógenos y queda axluno en la molécula.
        .col-md-6.col-xl-3.mb-3.mb-xl-0
          .bgr_19.p-5.h-100.d-flex.align-items-center
            .text-center
              h4 Básica
              p.mb-0 Cuando hay un grupo OH en la estructura de la sal.

      .bg_grad_03
        .bgr.px-5.pt-3.pb-4.mb-3(data-aos="fade-down-right")
          h3.mb-0 Nomenclatura de los Compuestos inorgánicos

      TabsC.color-acento-contenido.bgr_6.mb-5
        .py-3.py-md-4(titulo="Nomenclatura tradicional")
          .row.justify-content-center.p-5
            p.text-bold Nomenclatura tradicional
            .col-xl-5.mb-4.mb-xl-0
              p Encontramos que los miembros poseen un código químico, que es su fórmula, pero a la vez tienen un nombre que se puede escribir de varias formas. Es entonces, que se utiliza una serie de prefijos y sufijos que corresponden al número de valencia, estos son: hipo- oso, oso, ico y per-ico. Utilizando el primero para el menor número de valencia y el último para el mayor.
              p Se nombra el grupo funcional, seguido del átomo que lo acompaña con sus prefijos y sufijos específicos como el ejemplo a continuación:
            .col-xl-7
              figure.d-flex.justify-content-center
                img.w-auto(src='@/assets/curso/tema3/img27.svg')
        .py-3.py-md-4(titulo="Nomenclatura <em>stock</em>")
          .row.justify-content-center.p-5
            p.text-bold Nomenclatura <em>stock</em>
            .col-xl-5.mb-4.mb-xl-0
              p Se utiliza nombrando el grupo funcional, seguido del átomo que lo acompaña y entre paréntesis en números romanos, se coloca el estado de oxidación de este. Por ejemplo: Fe2O3 = Óxido de Hierro (III) representado así:
            .col-xl-7
              figure.d-flex.justify-content-center
                img.w-auto(src='@/assets/curso/tema3/img28.svg')
        .py-3.py-md-4(titulo="Nomenclatura sistemática").p-5
          p.text-bold Nomenclatura sistemática
          p Se utiliza colocando el grupo funcional acompañado de un prefijo griego que indica el número de este, seguido del átomo que lo acompaña. Estos prefijos son mono para uno, di para dos, tri para tres y así sucesivamente. Por ejemplos:
          p <b>CO<sub>2</sub></b> = Dióxido de carbono
          p <b>N<sub>2</sub>O<sub>3</sub></b> = Trióxido de Dinitrógeno
          
      separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="zoom-out-right")
        h2 3.3	La química orgánica
      
      p.mb-5 La química orgánica se enfoca en el estudio de compuestos donde la base es el átomo de carbono, cuya cifra se aproxima a 24 millones de compuestos, entre los que se encuentran: Polímeros, fármacos, derivados del petróleo, cosméticos, fibras, pigmentos y biomoléculas tales como: carbohidratos, lípidos, proteínas, vitaminas, ácidos nucleicos, entre otras. 

      .row.mb-5.justify-content-center
        .col-xl-4.mb-3.mb-xl-0
          .tarjeta.bgr_3.h-100.p-3.p-xl-5.text-center
            h3 QUÍMICA ORGÁNICA
            p Único elemento capaz de formar compuestos en cadena con hidrógeno, oxígeno y otros 
            figure.mb-3.d-flex.justify-content-center
              img.w-auto(src='@/assets/curso/tema3/img29.svg')
            p Componente principal de los carbohidratos, lípidos, proteínas y ácidos  nucleicos
            figure.d-flex.justify-content-center
              img.w-auto(src='@/assets/curso/tema3/img30.svg')
        .col-xl-4
          .tarjeta.bgr_9.h-100.p-3.p-xl-5.text-center
            h3 QUÍMICA DEL CARBONO
            p.mb-5 Elemento químico presente en los seres vivos 
            figure.mb-5.d-flex.justify-content-center
              img.w-auto(src='@/assets/curso/tema3/img31.svg')
            ul.lista-ul--color
              li 
                i.fas.fa-atom.colr
                | Tan importante que la tabla química tiene una división exclusiva para este elemento
    
    .row.mb-5
      .col-xl-6
        figure.mb-5.d-flex.justify-content-center
          img.w-auto(src='@/assets/curso/tema3/img32.png')
      .col-xl-6
        p La diversidad de compuestos orgánicos se explica desde lo singular que resulta el átomo mismo de carbono. En primera instancia, el átomo de carbono es tetravalente, es decir, tiende a establecer cuatro enlaces de tipo covalente. Estas uniones pueden establecerse consigo mismo, construyendo largas cadenas carbonadas que gozan de gran estabilidad química, lo que le permite dar origen a un número casi que infinito de compuestos. La fuerza de enlace, así como su estabilidad se deben, principalmente, a la capacidad que tiene este átomo de padecer un proceso de hibridación, o unión, de sus orbitales s y p.
        p Resulta importante recordar que el átomo de carbono realiza cuatro (4) enlaces; el hidrógeno, por otro lado, solo uno (1). El átomo de oxígeno establece dos (2) enlaces y el átomo de nitrógeno tres (3). En el caso de los compuestos orgánicos las funciones químicas más representativas, y base de la nomenclatura orgánica, son las siguientes:
    
    .bg_grad_03
      .bgr.px-5.pt-3.pb-4.mb-3(data-aos="fade-down-right")
        h3.mb-0 Hidrocarburos
    
    .row.mb-5.justify-content-center
      .col-xl-9
        p Como su nombre lo indica son compuestos formados esencialmente, por carbono e hidrógeno. Pueden formar largas cadenas abiertas o cerradas, lineales o ramificadas. Para nombrar estos compuestos, se hace uso de prefijos de cantidad que denotan el número de carbonos de la cadena principal. Entre los tipos de hidrocarburos se encuentran:
        TabsA.color-acento-contenido.mb-5
          div.tarjeta.color-acento-botones--borde.p-4(titulo="Alcanos")
            h4 Alcanos
            p Formados por cadenas sencillas de carbonos unidos por enlaces simples C-C. Para nombrarlos se indica el número de carbonos de la cadena mediante los prefijos señalados anteriormente y la terminación propia de esta familia que es -ano. Algunos pueden presentar cadena cerrada, es decir, formando ciclos. 
            figure.d-flex.justify-content-center
              img.w-auto(src='@/assets/curso/tema3/img34.svg')
          div.tarjeta.color-acento-botones--borde.p-4(titulo="Alquenos")
            h4 Alquenos
            p También conocidos como olefinas. Formados por cadenas de carbono donde existe al menos un enlace doble entre carbonos C=C. Se nombran de manera similar a los alcanos considerando que su terminación es -eno. Tener en cuenta que se debe incluir un número al inicio de la palabra que indique el lugar de ubicación del doble enlace en la cadena.  
            figure.d-flex.justify-content-center
              img.w-auto(src='@/assets/curso/tema3/img35.svg')
          div.tarjeta.color-acento-botones--borde.p-4(titulo="Alquinos")
            h4 Alquinos
            p Formados por cadenas de carbono donde existe al menos un enlace triple entre carbonos C≡C. Se nombran de manera similar a los alcanos considerando que su terminación es -ino. Tener en cuenta que se debe incluir un número al inicio de la palabra que indique el lugar de ubicación del doble enlace en la cadena.   
            figure.d-flex.justify-content-center
              img.w-auto(src='@/assets/curso/tema3/img36.svg')
          div.tarjeta.color-acento-botones--borde.p-4(titulo="Aromáticos ")
            h4 Aromáticos 
            p Hacen referencia a los derivados de la molécula de benceno, C6H6.   
            figure.d-flex.justify-content-center
              img.w-auto(src='@/assets/curso/tema3/img37.svg')
      .col-6.col-md-4.col-xl-3
        figure.mb-5.d-flex.justify-content-center
          img.w-auto(src='@/assets/curso/tema3/img33.svg')
    
    
    .bg_grad_03
      .bgr.px-5.pt-3.pb-4.mb-3(data-aos="fade-down-right")
        h3.mb-0 Oxigenados
    p Hace referencia a cadenas carbonadas que incluyen, al menos, un átomo de oxígeno en su estructura. Entre las funciones orgánicas oxigenadas se encuentran:
    TabsC.color-acento-contenido.bgr_6.mb-5
      .py-3.py-md-4(titulo="Alcoholes")
        .row.justify-content-center.p-5
          p.text-bold Alcoholes
          .col-xl-7.mb-4.mb-xl-0
            p Formados por cadenas de carbono a la cual se une un radical hidroxilo (OH)-. Se nombran de manera similar a los alcanos considerando que su terminación es -ol. Tener en cuenta que se debe incluir un número al inicio de la palabra que indique el lugar de ubicación del radical hidroxilo en la cadena. 
          .col-xl-5
            figure.d-flex.justify-content-center
              img.w-auto(src='@/assets/curso/tema3/img38.svg')
      .py-3.py-md-4(titulo="Aldehídos")
        .row.justify-content-center.p-5
          p.text-bold Aldehídos
          .col-xl-7.mb-4.mb-xl-0
            p Formados por cadenas de carbono a la cual se une un radical carbonilo terminal (-CHO). Se nombran de manera similar a los alcanos considerando que su terminación es -al. El radical carbonilo siempre está ubicado al final de la cadena, por tanto, no se debe incluir algún número indicador. 
          .col-xl-5
            figure.d-flex.justify-content-center
              img.w-auto(src='@/assets/curso/tema3/img39.svg')
      .py-3.py-md-4(titulo="Cetonas")
        .row.justify-content-center.p-5
          p.text-bold Cetonas
          .col-xl-7.mb-4.mb-xl-0
            p Formados por cadenas de carbono a la cual se une un radical carbonilo intermedio (C=O). Se nombran de manera similar a los alcanos considerando que su terminación es -ona. Tener en cuenta que se debe incluir un número al inicio de la palabra que indique el lugar de ubicación del radical carbonilo en la cadena.  
          .col-xl-5
            figure.d-flex.justify-content-center
              img.w-auto(src='@/assets/curso/tema3/img40.svg')
      .py-3.py-md-4(titulo="Ácidos orgánicos")
        .row.justify-content-center.p-5
          p.text-bold Ácidos orgánicos
          .col-xl-7.mb-4.mb-xl-0
            p Formados por cadenas de carbono a la cual se une un radical carboxilo (-COOH). Se nombran de manera similar a los alcanos considerando que su terminación es -oico y se antepone la palabra ácido. El radical carboxilo siempre está ubicado al final de la cadena, por tanto, no se debe incluir algún número indicador. 
          .col-xl-5
            figure.d-flex.justify-content-center
              img.w-auto(src='@/assets/curso/tema3/img41.svg')
    
    .bg_grad_03
      .bgr.px-5.pt-3.pb-4.mb-3(data-aos="fade-down-right")
        h3.mb-0 Funciones nitrogenadas
    
    p.mb-5 Hace referencia a cadenas carbonadas que incluyen al menos un átomo de oxígeno en su estructura. Entre las funciones orgánicas se encuentran:

    .row
      .col-xl-6.bgr_20.p-5
        h4.text-center.txt-color2 Aminas 
        p.mb-5.text-white.text-center Formados por cadenas de carbono donde existe unido al menos un radical amino (-NH2). Se nombran de manera similar a los alcanos considerando que su terminación es -amina. Tener en cuenta que se debe incluir un número al inicio de la palabra que indique el lugar de ubicación del radical en la cadena. 
        figure.d-flex.justify-content-center
          img.w-auto(src='@/assets/curso/tema3/img42.svg')
      .col-xl-6.bgr_9.p-5
        h4.text-center Aminas 
        p.text-center La anilina, una amina aromática, y sus derivados son sustancias de uso amplio y diverso. Entre éstos se encuentra la fabricación de pigmentos, pinturas y barnices. 
        p.mb-5 Las moléculas orgánicas pueden representarse de múltiples maneras. La imagen corresponde al ácido butanoico en su fórmula: (a) Desarrollada, (b) Simplificada (cada vértice es un átomo de carbono). (c) Condensada. 
        figure.d-flex.justify-content-center
          img.w-auto(src='@/assets/curso/tema3/img43.svg')
    


                            


       
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
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
