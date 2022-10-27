export default {
  global: {
    componenteFormativo:
      'Marco normativo y conceptual de la gestión del riesgo de desastres',
    descripcionCurso:
      'En este componente formativo podrá reconocer el marco normativo y conceptual aplicable a la gestión del riesgo de desastres y podrá comprenderlo como un proceso social que puede ser desarrollado de manera organizada y coherente a través de métodos participativos concertados con las comunidades.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
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
        titulo: 'Marco normativo de la gestión del riesgo de desastres',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Normativa del sector ambiental',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Normativa en ordenamiento territorial',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Normativa en gestión del riesgo de desastres',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Marco conceptual en la gestión del riesgo de desastres',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Elementos marco del riesgo de desastres',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Instrumentos de seguimiento de los procesos clave de la gestión del riesgo de desastres',
            hash: 't_2_2',
          },
        ],
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
      tema: 'Marco normativo de la gestión del riesgo de desastres.',
      referencia:
        'Cruz Roja Colombiana Seccional Antioquia. (15 de diciembre de 2015). Educando en Gestión del Riesgo de Desastres.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=8j2tdIhaZPA&ab_channel=CruzRojaColombianaSeccionalAntioquia',
    },
    {
      tema: 'Marco normativo de la gestión del riesgo de desastres.',
      referencia:
        'Unidad Nacional de Gestión del Riesgo de Desastres (UNGRD). (8 de julio de 2019). Comunidades Unidas en Gestión del Riesgo de Desastres.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=1xdhPbXw404&ab_channel=UNGRDGesti%C3%B3ndelRiesgodeDesastres',
    },
    {
      tema: 'Normativa del sector ambiental.',
      referencia:
        'Programa de las Naciones Unidas para el Desarrollo. (18 de octubre de 2016). Introducción Curso en Gestión del riesgo de desastres para autoridades ambientales.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=tjQl665fCrM&ab_channel=PNUDEquipodegesti%C3%B3ndeconocimiento',
    },
    {
      tema: 'Normativa del sector ambiental.',
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible (MADS). (s.f.). Enfoque de Reducción de Riesgo de Desastres basado en Ecosistemas (ECO RRD). ',
      tipo: 'Documento',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/12/DOC-Conceptual_metodologicoEco-RRD_2021_comp.pdf',
    },
    {
      tema: 'Normativa en gestión del riesgo de desastres.',
      referencia:
        'Departamento Nacional de Planeación (DNP). (2022).<i> Marco Normativo para la Gestión Territorial.</i>',
      tipo: 'Documento',
      link:
        'https://www.dnp.gov.co/programas/desarrollo-territorial/Fortalecimiento-Gestion-y-Finanzas-Publicas-Territoriales/marco-normativo-para-la-gestion-territorial',
    },
    {
      tema: 'Normativa en gestión del riesgo de desastres.',
      referencia:
        'Unidad Nacional para la Gestión del Riesgo de Desastres - Sistema Nacional de Gestión del Riego de Desastres. (2022).<i>Actualización Plan Nacional de Gestión del Riesgo de Desastres "Una estrategia de desarrollo"</i> 2015 - 2030. Colombia.',
      tipo: 'Documento',
      descarga: '/downloads/anexo3.pdf',
    },
    {
      tema: 'Elementos marco del riesgo de desastres.',
      referencia:
        'Organización de las Naciones Unidas. (22 de octubre de 2015). Marco de Sendái para la Reducción del Riesgo de Desastres 2015-2030. Nueva York',
      tipo: 'Documento',
      link: 'https://www.preventionweb.net/files/resolutions/N1516720.pdf',
    },
    {
      tema: 'Elementos marco del riesgo de desastres.',
      referencia:
        'Organización de las Naciones Unidas. (2022). Objetivos y Metas de Desarrollo Sotenible.',
      tipo: 'Pagina Web',
      link:
        'https://www.un.org/sustainabledevelopment/es/objetivos-de-desarrollo-sostenible/',
    },
    {
      tema: 'Elementos marco del riesgo de desastres.',
      referencia:
        'Organización de las Naciones Unidas para la Cultura, las Ciencias y la Educación (UNESCO). (26 de enero de 2017). Los objetivos de Desarrollo Sostenible qué son y cómo alcanzarlos',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=MCKH5xk8X-g&ab_channel=UNESCOenespa%C3%B1ol',
    },
    {
      tema:
        'Instrumentos de seguimiento de los procesos clave de la gestión del riesgo de desastres.',
      referencia:
        'Organización de las Naciones Unidas. (22 de octubre de 2015). Marco de Sendái para la Reducción del Riesgo de Desastres 2015-2030. Nueva York',
      tipo: 'Documento',
      link: 'https://www.preventionweb.net/files/resolutions/N1516720.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Amenaza',
      significado:
        'fenómeno, sustancia, actividad humana o condición peligrosa que pueden ocasionar la muerte, lesiones u otros impactos a la salud, al igual que daños a la propiedad, la pérdida de medios de sustento y de servicios, trastornos sociales y económicos, o daños ambientales. Las amenazas naturales se pueden clasificar por origen en: geológicas (terremotos, tsunamis, actividad volcánica), hidrometeorológicas (inundaciones, tormentas tropicales, sequías) o biológicas (epidemias). Las amenazas pueden ser inducidas por procesos humanos (cambio climático, incendios, minería o recursos naturales no renovables, degradación medio ambiental, y amenazas tecnológicas). Las amenazas pueden ser únicas, secuenciales, o combinadas en su origen y efectos.',
    },
    {
      termino: 'Desastre',
      significado:
        'seria interrupción en el funcionamiento de una comunidad o sociedad que causa una gran cantidad pérdidas humanas, materiales, económicas o ambientales; que exceden la capacidad de la comunidad o sociedad afectada para afrontar la situación utilizando sus propios recursos. Un desastre es una función del proceso de riesgo. Resulta de la combinación de amenazas, condiciones de vulnerabilidad y capacidades o medidas insuficientes para reducir las consecuencias negativas potenciales del riesgo.',
    },
    {
      termino: 'Gestión ambiental',
      significado:
        'Eje temático establecido por el Ministerio de Ambiente y Desarrollo Sostenible (MADS) con el objetivo de tener una adecuada planificación del territorio y orientación para la definición y actualización de determinantes ambientales que protegen territorios.',
    },
    {
      termino: 'Gestión del riesgo de desastres',
      significado:
        'Proceso que busca mejorar la calidad de vida de las comunidades y que estas estén preparadas para prevenir, manejar y controlar los riesgos causados por fenómenos naturales o por acciones antrópicas.',
    },
    {
      termino: 'Plan Nacional de Gestión del Riesgo de Desastres',
      significado:
        'Principal lineamiento que precisa las metas, planes y acciones, a través de las cuales se desarrollan procesos de conocimiento del riesgo, reducción del riesgo y de manejo de desastres, en el marco de la planificación del desarrollo nacional.',
    },
    {
      termino: 'Predesastre',
      significado:
        'Elemento clave para el marco del riesgo de desastres que tienen como actividades enfocadas en la revisión de los aspectos vigentes de la gestión del riesgo planteadas en los planes de desarrollo, la evaluación del riesgo, acciones de prevención, mitigación, preparación y alerta temprana para evitar o reducir el riesgo de desastres',
    },
    {
      termino: 'Resiliencia',
      significado:
        'Capacidad de un sistema, comunidad o sociedad expuestos a una amenaza para resistir, absorber, adaptarse y recuperarse de sus efectos de manera oportuna y eficaz, lo que incluye la preservación y la restauración de sus estructuras y funciones básicas.',
    },
    {
      termino: 'Riesgo',
      significado:
        'Combinación de la probabilidad de que se produzca un evento y sus consecuencias negativas. Tales como muertes, lesiones, propiedad, medios de vida, interrupción de actividad económica o deterioro ambiental, como resultado de interacciones entre las amenazas naturales o antropogénicas y las condiciones de vulnerabilidad.',
    },
    {
      termino: 'Sendái',
      significado:
        'Marco que plantea 7 objetivos acompañados de principios con el fin de disminuir los impactos derivados de los desastres naturales o antropogénicos, salvaguardar la vida y los beneficios de las generaciones actuales y futuras y contempla aquellos factores como la amenaza y la vulnerabilidad.',
    },
    {
      termino: 'Vulnerabilidad',
      significado:
        'características y las circunstancias de una comunidad, sistema o bien que los hacen susceptibles a los efectos dañinos de una amenaza.',
    },
  ],
  referencias: [
    {
      referencia:
        'Baas, S., Ramasamy, S., Dey de Pryck, J., & Battista, F. (2009). Análisis de Sistemas de Gestión del Riesgo de Desastres. Una Guía. Roma, Italia: Organización de las Naciones Unidas para la Agricultura y la Alimentación (FAO).',
    },
    {
      referencia:
        'Congreso de la República. (24 de abril de 2012). Ley 1523 de 2012. Colombia. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_1523_2012.html',
    },
    {
      referencia:
        'Cruz Roja Colombiana Seccional Antioquia. (15 de diciembre de 2015). Educando en Gestión del Riesgo de Desastres',
      link:
        'https://www.youtube.com/watch?v=8j2tdIhaZPA&ab_channel=CruzRojaColombianaSeccionalAntioquia',
    },
    {
      referencia:
        'Departamento Administrativo Nacional de Estadística (DANE). (s.f.). Censo Nacional de Población y Vivienda 2018',
      link:
        'https://www.dane.gov.co/index.php/estadisticas-por-tema/demografia-y-poblacion/censo-nacional-de-poblacion-y-vivenda-2018',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible (MADS). (s.f.). Cambio Climático y Gestión del Riesgo',
      link:
        'https://www.minambiente.gov.co/cambio-climatico-y-gestion-del-riesgo/',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible (MADS). (s.f.). La Relación entre la Gestión del Riesgo de Desastres y el Cambio Climático',
      link:
        'https://www.minambiente.gov.co/cambio-climatico-y-gestion-del-riesgo/la-relacion-entre-la-gestion-del-riesgo-de-desastres-y-el-cambio-climatico/',
    },
    {
      referencia:
        'Unidad Nacional para la Gestión del Riesgo de Desastres (UNGRD). (2019). Atlas de Riesgo de Colombia: revelando los desastres latentes. Bogotá, Colombia',
      link:
        'https://repositorio.gestiondelriesgo.gov.co/handle/20.500.11762/27179',
    },
    {
      referencia:
        'Unidad Nacional para la Gestión del Riesgo de Desastres. (2022). Normatividad Sistema Nacional de Gestión del Riego de Desastres',
      link: 'https://portal.gestiondelriesgo.gov.co/Paginas/Normatividad.aspx',
    },
    {
      referencia:
        'Unidad Nacional para la Gestión del Riesgo de Desastres. (2022). Sistema Nacional de Gestión del Riesgo de Desastres.',
      link: 'https://portal.gestiondelriesgo.gov.co/Paginas/Estructura.aspx ',
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
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
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
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
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
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
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
