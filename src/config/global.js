export default {
  global: {
    componenteFormativo: 'Entorno químico: principios, fenómenos y leyes',
    descripcionCurso:
      'La siguiente propuesta formativa estimula y propicia en el aprendiz la adquisición y desarrollo de conocimientos, destrezas y habilidades propias de las ciencias de la naturaleza, en su componente de química, con la intención de comprender e interpretar los fenómenos naturales que acontecen en determinado contexto productivo y social inmediato. A través de este recurso, el aprendiz es dotado de elementos, herramientas e insumos, promoviendo el desarrollo de un pensamiento científico.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Ciencia: fundamentos, conceptualización básica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'La materia y sus cambios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'La materia',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Unidades y mediciones',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'El átomo: unidad fundamental',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Teoría atómica',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Nomenclatura de compuestos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'La química orgánica',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Ciencia: fundamentos, conceptualización básica',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Ciencia: Fundamentos, conceptualización básica',
      referencia:
        'Curiosa Mente 15. (17 de enero de 2006). ¿Qué tiene de especial la ciencia?',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=vOX-Tj6iIaA',
    },
    {
      tema: 'Ciencia: Fundamentos, conceptualización básica',
      referencia: 'BrainPOP Español. (1 de junio de 2012). Método científico.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=zzHu-yqdlz0',
    },
    {
      tema: 'Ciencia: Fundamentos, conceptualización básica',
      referencia:
        'Colegio Oficial Doctores y Licenciados. (20 mayo de 2016). Conferencia: «Materia oscura y energía oscura». ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=VN42W5_cL7o',
    },
    {
      tema: 'Ciencia: Fundamentos, conceptualización básica',
      referencia:
        'Descobrint LHC. (2 abril de 2012). Breve historia del <em>big bang</em>.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=VN42W5_cL7o',
    },
    {
      tema: 'Ciencia: Fundamentos, conceptualización básica',
      referencia:
        'University of Colorado Boulder. (8 septiembre de 2020). Estados de la materia.',
      tipo: 'Video',
      link: 'https://phet.colorado.edu/es/simula tion/states-of-matter',
    },
    {
      tema: 'Ciencia: Fundamentos, conceptualización básica',
      referencia:
        'Tierno, S., Del Río, E., Donoso, J.M. (2015). ¿El cuarto estado de la materia? Introducción al plasma para estudios preuniversitarios. Revista Eureka sobre Enseñanza y Divulgación de las Ciencias, 12(3), 601-607.',
      tipo: 'Video',
      link: 'https://www.redalyc.org/articulo.oa?id=92041414015',
    },
    {
      tema: 'Ciencia: Fundamentos, conceptualización básica',
      referencia:
        'Ciencia Educativa. (3 marzo de 2019). Coloides | Cienciatlán',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=YKzq5mpiIy8',
    },
  ],
  glosario: [
    {
      termino: 'Átomo',
      significado:
        'unidad fundamental de la materia que puede intervenir en una combinación química mediante enlaces.',
    },
    {
      termino: 'Compuesto',
      significado:
        'sustancia formada por átomos de dos o más elementos, unidos químicamente en una proporción definida.',
    },
    {
      termino: 'Elemento',
      significado:
        'sustancia pura que no puede separarse en otras más simples mediante métodos químicos.',
    },
    {
      termino: 'Estequiometría',
      significado:
        'estudio cuantitativo de los reactivos y productos en una reacción química.',
    },
    {
      termino: 'Hipótesis',
      significado:
        'explicación factual y tentativa para un conjunto de observaciones.',
    },
    {
      termino: 'Ley',
      significado:
        'enunciado conciso, verbal o matemático de una relación entre fenómenos que es siempre igual en las mismas condiciones.',
    },
    {
      termino: 'Materia',
      significado: 'todo aquello que ocupa espacio y tiene masa.',
    },
    {
      termino: 'Método científico',
      significado:
        'metodología secuencial y rigurosa a partir de la cual se obtiene conocimiento científico.',
    },
    {
      termino: 'Mol',
      significado:
        'cantidad de sustancia que contiene tantas entidades elementales (átomos, moléculas, iones) como átomos en exactamente 12,0 g del isótopo de carbono 12.',
    },
    {
      termino: 'Nomenclatura',
      significado:
        'sistema para formular y asignar nombre a compuestos químicos de acuerdo a sus propiedades fisicoquímicas.',
    },
    {
      termino: 'Reacción química',
      significado:
        'proceso en el cual una o varias sustancias cambian para formar otras de identidad química diferente.',
    },
    {
      termino: 'Solución',
      significado:
        'mezcla homogénea de dos o más sustancias puras, la de menor proporción recibe el nombre de soluto, a diferencia del solvente que es el componente mayoritario.',
    },
    {
      termino: 'Sustancia pura',
      significado:
        'sustancia que se encuentra constituida por átomos o moléculas de la misma naturaleza, siendo ejemplo los elementos y compuestos.',
    },
    {
      termino: 'Teoría',
      significado:
        'principio unificador que explica un conjunto de hechos y las leyes en las que se basa.',
    },
  ],
  referencias: [
    {
      referencia:
        'Holton, G., y Crawford, F. H. (1953). Introduction to Concepts and Theories in Physical Science. Physics Today, 6(8), 15-16. ',
      link: 'https://doi.org/10.1063/1.3061332',
    },
    {
      referencia:
        'Dodds, W. (2009). Laws, Theories, and Patterns in Ecology. Amsterdam University Press.',
      link: 'https://doi.org/10.1525/california/9780520260405.001.0001',
    },
    {
      referencia:
        'Ahmed, I. (2020). What’s the matter with the Universe? Scientists have the answer.',
      link: 'https://phys.org/news/2020-09-universe-scientists.html',
    },
    {
      referencia:
        'Brown, T. L. (2021). Química la ciencia central (11.a ed.). Prentice Hall/Pearson',
    },
    {
      referencia:
        'Arroyo, S., J. E. (2014). Cambios de estado de la materia. [Esquema]. Blog de ciencias de la naturaleza.',
      link:
        'https://www3.gobiernodecanarias.org/medusa/ecoblog/jarrsua/files/2012/12/Cambios- de-estado.jpg',
    },
    {
      referencia:
        'TOMi.Digital. (2020). Mapa conceptual de clasificación de la materia. [Esquema].',
      link:
        'https://tomi-digital-resources.storage.googleapis.com/images/classes/resources/rsc- 55949-5e7e8e7667ca3.jpeg',
    },
    {
      referencia:
        'Picado, A. B., y Álvarez, M. (2010). Química I: introducción al estudio de la materia (2 Edición). Editorial Universidad Estatal a Distancia.',
    },
    {
      referencia:
        'Libretexts. (2021). 2.2: The Discovery of Atomic Structure. Chemistry LibreTexts.',
      link:
        'https://chem.libretexts.org/Bookshelves/General_Chemistry/Map%3A_Chemistry_-_The_Central_Science_(Brown_et_al.)/02._Atoms_Molecules_and_Ions/2.2%3A_The_Discovery_of_At omic_Structure',
    },
    {
      referencia:
        'UNED y San Frutos, F., J. (2008). Las leyes ponderales. La química y la teoría atómica.',
      link:
        'http://encina.pntic.mec.es/jsaf0002/p31.htm#:%7E:text=La%20masa%20de%20un%20sistema,los%20p roductos%20de%20la%20reacci%C3%B3n.',
    },
    {
      referencia:
        'Quimikamptwo.blogspot.com. (2017). Evolución del modelo atómico. [Esquema].',
      link:
        'https://4.bp.blogspot.com/- 9IcfUOCa0gc/WdAxHRAStmI/AAAAAAAAAUY/PasZ_pyuw6QCh7SFzXYNT_hjl6yU19CQgCLcBGAs/s1 600/LINEA%2BDEL%2BTIEMPO-MODELOS%2BATOMO.jpg',
    },
    {
      referencia:
        'Chang, R. (2016). Química (12.a ed.). Editorial McGraw-Hill.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable equipo desarrollo curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Juan	Sebastian Fajardo Dulcey',
        cargo: 'Experto temático',
        centro: 'Centro	de Diseño Tecnológico Industrial CDTI - Regional	Valle',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo ',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Sandra Milena Triana Pinto',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
