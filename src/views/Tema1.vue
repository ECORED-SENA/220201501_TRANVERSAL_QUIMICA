<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Ciencia: fundamentos, conceptualización básica
    .row.align-items-center.mb-5
      .col-lg-4
        p A través de esta competencia y sus contenidos se busca promover y fomentar la gesta de un pensamiento científico, al dotarle de elementos, herramientas e insumos que permitan desarrollar y forjar en este una visión y argumentación crítica, fundamentada, con elementos propositivos, haciéndole consciente de los desafíos y realidades actuales y futuras que, como especie, se debe enfrentar, y que solo, a través de la ciencia, podrán ser abordadas. A continuación, se observarán algunos personajes históricos, que han generado grandes ideas y contribuciones a las ciencias.  
        figure
          img.d-none.d-lg-block(src='@/assets/curso/tema1/img1.svg' style="width: 450px")
      .col-lg-8
        .bg1.p-5
          LineaTiempoC.color-acento-contenido(text-small)
            .row(titulo="René Descartes")
              .col-md-3.mb-4.mb-md-0.mb-4.mb-md-0.d-flex.justify-content-center.align-items-center
                  figure
                    img(src='@/assets/curso/tema1/img2.png', alt='Texto que describa la imagen')                  
              .col-md-9.mb-4.mb-md-0.d-flex.justify-content-center.align-items-center
                div
                  h4.txt-color2 René Descartes
                  p.text-white Físico, matemático y filósofo francés nacido en 1596. Conocido por su locución filosófica “Pienso, luego existo” la cual supone una exclamación de independencia. La razón como único camino para hallar la verdad. Promulgaba dudar de absolutamente todo hasta que no fuese comprobado a través de la experiencia. Se le considera el padre de la geometría analítica y de la filosofía moderna.
            .row(titulo="Isaac Newton")
              .col-md-3.mb-4.mb-md-0.d-flex.justify-content-center.align-items-center
                  figure
                    img(src='@/assets/curso/tema1/img3.png', alt='Texto que describa la imagen')                  
              .col-md-9.mb-4.mb-md-0.d-flex.justify-content-center.align-items-center 
                div
                  h4.txt-color2 Isaac Newton
                  p.text-white Este físico, teólogo, matemático e inventor inglés nació en 1642. Se hizo célebre por postular su ley de la gravitación universal en 1687. Entre sus aportes a la ciencia se destacan el desarrollo del calculo infinitesimal, el descubrimiento del espectro de color, sus observaciones sobre la naturaleza de la luz, su incursión en mecánica de fluidos, así como su ley de la viscosidad, entre otros. Es considerado uno de los genios más grandes de la historia. Ocupó el cargo de presidente de la Real Sociedad de Londres hasta su muerte, ocurrida en 1727.
            .row(titulo="Leonardo Da Vinci")
              .col-md-3.mb-4.mb-md-0.d-flex.justify-content-center.align-items-center
                  figure
                    img(src='@/assets/curso/tema1/img4.png', alt='Texto que describa la imagen')
              .col-md-9.mb-4.mb-md-0.d-flex.justify-content-center.align-items-center
                div
                  h4.txt-color2 Leonardo Da Vinci
                  p.text-white Polímata, pintor, inventor, anatomista, arquitecto, filósofo, científico e ingeniero florentino nacido en 1452. Es considerado como una de las mentes más brillantes de la historia. Un hombre curioso y con una sed de conocimiento infinita. Siempre se interesó por comprender cómo funcionaba el complejo mundo natural y sus bosquejos, hoy considerados artísticos, son muestra de ello.
            .row(titulo="John Dalton")
              .mb-4.mb-md-0.d-flex.justify-content-center.align-items-center
              .col-md-3.mb-4.mb-md-0.d-flex.justify-content-center.align-items-center
                  figure
                    img(src='@/assets/curso/tema1/img5.png', alt='Texto que describa la imagen')
              .col-md-9.mb-4.mb-md-0.d-flex.justify-content-center.align-items-center
                div
                  h4.txt-color2 John Dalton
                  p.text-white Fisicoquímico inglés nacido en 1766. Es conocido por recapitular e introducir la teoría atómica en 1808 con su obra A <em>New System of Chemical Philosophy</em>. Aunque fue acusado de plagio a lo largo de su vida, en su obra propone un método para calcular los pesos atómicos relativos para sustancias elementales, algo que resulta de su entera autoría, así como su esfuerzo por conceptualizar el átomo y su naturaleza. Es célebre por sus contribuciones al estudio de los gases, ley de Dalton; así como sus investigaciones en torno a la ceguera de color, patología que él mismo padecía y que se conoce como Daltonismo en su honor. Se considera el padre de la química moderna.
            .row(titulo="Dmitri Ivánovich Mendeléyev")
              .col-md-3.mb-4.mb-md-0.d-flex.justify-content-center.align-items-center
                  figure
                    img(src='@/assets/curso/tema1/img6.png', alt='Texto que describa la imagen')
              .col-md-9.mb-4.mb-md-0.d-flex.justify-content-center.align-items-center
                div
                  h4.txt-color2  Dmitri Ivánovich Mendeléyev
                  p.text-white Químico ruso nacido en 1834. Entre sus logros se destacan la postulación de la ley periódica de los elementos, a partir de la cual fue posible la construcción de la tabla periódica moderna, una herramienta predictiva que permitió	una	mayor comprensión de los elementos químicos y su naturaleza fisicoquímica, pavimentando la consecución de grandes logros y avances notables en la química del siglo XX.
            .row(titulo="Marie Curie")
              .col-md-3.mb-4.mb-md-0.d-flex.justify-content-center.align-items-center
                  figure
                    img(src='@/assets/curso/tema1/img7.png', alt='Texto que describa la imagen')
              .col-md-9.mb-4.mb-md-0.d-flex.justify-content-center.align-items-center
                div
                  h4.txt-color2 Marie Curie
                  p.text-white Nacida en 1867 en Polonia. Fue una física y matemática por formación;	estudió profundamente el fenómeno de la radiactividad siendo pionera en dicha área y, por el cual, recibió junto a Pierre Curie, su esposo, y el físico Henry Becquerel el premio Nobel en física, siendo la primera mujer en recibir dicha distinción. De manera conjunta logró el descubrimiento de dos elementos químicos, el polonio y el radio, hazaña que le valió el logro de su segundo galardón Nobel, esta vez en química. Murió en 1934 a causa de una anemia aplásica, contraída por la ingente y prolongada exposición a material radiactivo. Se le considera la madre de la física moderna.
            .row(titulo="Antoine Lavoisier")
              .col-md-3.mb-4.mb-md-0.d-flex.justify-content-center.align-items-center
                  figure
                    img(src='@/assets/curso/tema1/img8.png', alt='Texto que describa la imagen')
              .col-md-9.mb-4.mb-md-0.d-flex.justify-content-center.align-items-center
                div
                  h4.txt-color2 Antoine Lavoisier
                  p.text-white La ley de la conservación de la materia se le atribuye a Antoine    Lavoisier,	un	científico naturalista francés   del   siglo XVIII, quien la enunció de la siguiente manera: “La masa de un sistema permanece invariable, cualquiera que sea la transformación que ocurra dentro de él”, lo que en el contexto de las reacciones químicas implicaría que la masa de los reactivos es igual a la masa de los productos. Se debe garantizar, por tanto, que el número de átomos de cada especie en los reactivos sea igual en los productos; los átomos no se crean ni se destruyen, solo se reorganizan.
            .row(titulo="Nikola Tesla")
              .col-md-3.mb-4.mb-md-0.d-flex.justify-content-center.align-items-center
                  figure
                    img.img-t(src='@/assets/curso/tema1/img8.png', alt='Texto que describa la imagen').mx-auto
              .col-md-9.mb-4.mb-md-0.d-flex.justify-content-center.align-items-center
                div
                  h4.txt-color2 Nikola Tesla
                  p.text-white Inventor	e	ingeniero serbocroata, nacionalizado estadounidense. Dedicó su vida al entendimiento de la electricidad y sus misterios. Esconocido	por	sus	brillantes aportes	y	contribuciones	al electromagnetismo,	al desarrollo del sistema de corriente       alterna       y       la transferencia       de       energía eléctrica e información de forma inalámbrica. Más allá de sus particularidades, el mundo, tal y como se le conoce, se debe en gran parte a él y su brillante mente científica.
            .row(titulo="Alexander Fleming")
              .col-md-3.mb-4.mb-md-0.d-flex.justify-content-center.align-items-center
                  figure
                    img(src='@/assets/curso/tema1/img8.png', alt='Texto que describa la imagen')
              .col-md-9.mb-4.mb-md-0.d-flex.justify-content-center.align-items-center
                div
                  h4.txt-color2 Alexander Fleming
                  p.text-white Médico y científico escocés célebre por su descubrimiento de la penicilina, un antibiótico de origen micótico, por casualidad luego de que algunas de sus cajas Petri con colonias bacterianas se contaminaran accidentalmente con esporas de <em>Penicillium notatum</em>, algo que mató e inhibió el crecimiento de éstas. Fue galardonado en 1945 con el premio Nobel en fisiología junto a los químicos <em>Ernst Boris Chain y Howard Walter Florey</em> por este hecho.
    .row.align-items-center.mb-5
      .col-lg-4
        p La ciencia constituye un elemento fundamental en el desarrollo de cualquier sociedad; es a través de la generación e implementación de nuevo conocimiento cómo se construye bienestar social, calidad de vida y dignidad como individuo; además, desde los alimentos procesados que se consumen diariamente hasta la invención de una nueva vacuna o biológico para erradicar alguna enfermedad, son el resultado de años de trabajo, investigación y esfuerzo científico.
      .col-lg-8        
        .row.align-items-center.bg2.p-5 
          .col-lg-3
            figure
              img(src='@/assets/curso/tema1/img11.png' style="width: 215px")
          .col-lg-9
            p Esta se clasifica, generalmente, en tres categorías: las ciencias formales, cuyo objeto de estudio es la lógica y las formas puras o abstracciones que se basan en la inferencia, la deducción, comprobación y construcción de teoremas, siendo las matemáticas un ejemplo de estas. Las ciencias sociales, interesadas en abordar hechos y aspectos relacionados a la dinámica de la sociedad y el comportamiento de la especie humana, entre las cuales la antropología y la sociología se catalogan como tal.
    .bg3.p-5 
      .row.align-items-center.mb-5
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-left")
          figure
            img.img-t.m-auto(src='@/assets/curso/tema1/img13.png', alt='') 
        .col-lg-8(data-aos="fade-right") 
          p Por otro lado, se enfocan en estudiar, comprender, explicar y predecir los fenómenos de la naturaleza; según Oxford (2021), un fenómeno se define como cualquier “manifestación de una actividad que se produce en la naturaleza y se percibe a través de los sentidos”. La Física, la Química y la Biología son los ejemplos clásicos en esta categoría. Las ciencias naturales se sustentan y cimentan en principios, teorías y leyes cuya relación, semejanzas y diferencias se describen en la siguiente figura.  
      p.mb-5.text-center Las ciencias han generado diferentes métodos, para comprar, generar nuevo conocimiento entre otras variables,  como el #[span.txt-color1 método científico.]   
      .row.justify-content-center(data-aos="fade-left").mb-5
        .col-lg-12.mb-4
          .tarjeta-avatar-b.mb-0.h-100
            .tarjeta-avatar-b__img
              img(src='@/assets/curso/tema1/img14.svg' alt='AvatarTop')
            .tarjeta.tarjeta--azul.bg1
              .p-5
                h4 #[span.txt-color2 Etapas del Método Científico]  
                p.mt-4.text-white El conocimiento se valida y se reafirma en la medida que la ciencia se hace cada vez más rigurosa en sus técnicas experimentales, metodologías y procedimientos; ya lo decía René Descartes en su Discurso del Método: “Sólo se puede decir que existe aquello que puede ser probado”, un sentir que habían compartido intelectuales, académicos y filósofos naturales a lo largo de las épocas. El confluir de ideas racionalistas e inductivas junto a la necesidad de purgar el quehacer científico de subjetivismos y sesgos cognitivos, devino en lo que se conoce como el método científico.
                p.text-white El método científico consiste en una metodología o serie de tácticas implementadas para develar y construir conocimiento de manera válida (Holton et al, 1988), y aunque éste suele asociarse de manera exclusiva a las ciencias naturales, en realidad, todas las demás disciplinas emplean este método hipotético-deductivo en su ejercicio científico, por supuesto ajustado a sus necesidades, contexto y fin último. Esta estrategia, a grandes rasgos, consta de las siguientes etapas:    
      .row.justify-content-center
        .col-lg-10
          PasosA.color-acento-contenido.mb-5.mdf(tipo="n")(data-aos="fade-right")
            div
              .row.align-items-center.justify-content-end
                .col-lg.mb-4
                  h4 Observación
                  p Consiste en percibir y comprender a través de los sentidos un fenómeno. El resultado de un ejercicio de observación minucioso es formular una pregunta y, de esta manera, plantear un problema.
                .col-5.col-lg-auto
                  figure
                    img(src='@/assets/curso/tema1/img15.svg')
            div
              .row.align-items-center
                .col-5.col-lg-auto.mb-4
                  figure
                    img(src='@/assets/curso/tema1/img16.svg')
                .col-lg
                  h4 Documentación
                  p O revisión del “estado del arte”, hace referencia a la indagación documental que se realiza de manera previa con el objeto de profundizar en materia, lo que permite verificar si determinado problema ha sido abordado y resuelto. Cabe aclarar que dicha revisión de la literatura debe provenir de fuentes confiables y fidedignas.
            div
              .row.align-items-center.justify-content-end
                .col-lg.mb-4
                  h4 Formulación de hipótesis 
                  p Una vez culminada la etapa de revisión bibliográfica, la hipótesis surge como elemento deductivo y lógico como posible respuesta al problema planteado. Las etapas posteriores consistirán en comprobar, ya sea reafirmando o refutando, la hipótesis planteada en esta fase.
                .col-5.col-lg-auto
                  figure
                    img(src='@/assets/curso/tema1/img17.svg')
            div
              .row.align-items-center
                .col-5.col-lg-auto.mb-4
                  figure
                    img(src='@/assets/curso/tema1/img18.svg')
                .col-lg
                  h4 Experimentación 
                  p A continuación, prosigue la verificación experimental de dicha hipótesis, la cual consiste en establecer un diseño de experimentos que permita manipular, bajo condiciones controladas, una serie de factores y variables, logrando recopilar datos que permitirán estudiar el efecto de cada uno de estos en el fenómeno objeto de estudio. Resulta vital garantizar que los datos y observaciones obtenidas son reproducibles y no algo producto del error y el azar. Cabe recordar que los datos que se obtengan deben provenir de una muestra representativa.
            div
              .row.align-items-center.justify-content-end
                .col-lg.mb-4
                  h4 Análisis de resultados  
                  p Comprende el procesamiento, interpretación y análisis objetivo y racional de los datos e información recolectada; de manera que permita confrontar, deducir e inferir si la evidencia obtenida en la práctica sustenta, confirma o contrasta con la hipótesis planteada inicialmente.  
                .col-5.col-lg-auto
                  figure
                    img(src='@/assets/curso/tema1/img19.svg')
            div
              .row.align-items-center
                .col-5.col-lg-auto.mb-4
                  figure
                    img(src='@/assets/curso/tema1/img20.svg')
                .col-lg
                  h4 Conclusión 
                  p Una vez se cuenta con todos los elementos, se procede a determinar si la hipótesis planteada inicialmente fue válida o no.
           
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
