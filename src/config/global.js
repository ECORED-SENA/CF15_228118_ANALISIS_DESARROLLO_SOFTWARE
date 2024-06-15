export default {
  global: {
    componenteFormativo: 'Arquitectura aplicaciones móviles nativas',
    descripcionCurso:
      'En este componente formativo se abordan los conceptos básicos de las aplicaciones móviles nativas, los cuales servirán para identificar los tipos de metodologías usadas en el desarrollo móvil, en plataformas nativas, en entornos de desarrollo y su configuración.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Enfoque metodológico para el desarrollo de aplicaciones móviles nativas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Plataformas de desarrollo móvil nativas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Entornos de desarrollo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Plataforma Android',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Android Studio',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Arquitectura de una aplicación en Android',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Instalación y configuración entorno Android Studio',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Componentes de una aplicación Android',
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
      tema: 'Metodología XP',
      referencia:
        'Perú, M. H. (2019, 15 de diciembre). ¿Qué es la programación extrema? Metodología Ágil XP (Ciclo de Vida XP, Prácticas Básicas de XP) [Video]. YouTube.',
      tipo: 'Video YouTube',
      link: 'https://www.youtube.com/watch?v=tCl33R9jHBk',
    },
    {
      tema: 'Metodología Scrum',
      referencia:
        'Henao, C. (2018, 27 de junio). #3. SCRUM en 6 minutos Metodologías Ágiles [Video]. YouTube.',
      tipo: 'Video YouTube',
      link: 'https://www.youtube.com/watch?v=HhC75IonpOU',
    },
    {
      tema: 'Mobile-D',
      referencia:
        'Montoya, J. L. (2021, 15 de abril). Exposición metodologías de desarrollo de software.',
      tipo: 'Mobile-D',
      link: 'https://www.youtube.com/watch?v=I3yMHHgQCEk',
    },
    {
      tema: 'Entornos de Desarrollo',
      referencia:
        'Peñalba, I. (2021). Hacer aplicaciones para Android: ¿Qué es un entorno de desarrollo y cuál es el mejor? El Español.',
      tipo: 'Página',
      link:
        'https://www.elespanol.com/elandroidelibre/20200518/hacer-aplicaciones-android-entorno-desarrollo-mejor/490952339_0.html',
    },
    {
      tema: 'Visual Studio',
      referencia:
        'Microsoft Build. (2023). Información general sobre Visual Studio.',
      tipo: 'Página',
      link:
        'https://docs.microsoft.com/es-es/visualstudio/get-started/visual-studio-ide?view=vs-2019',
    },
    {
      tema: 'Android',
      referencia:
        'Developers. (2020, 7 de mayo). Arquitectura de la plataforma.',
      tipo: 'Página Oficial',
      link: 'https://developer.android.com/guide/platform?hl=es-419',
    },
    {
      tema: 'Versiones Android',
      referencia: 'ADSLZone. (2021, 3 de marzo). Qué es Android.',
      tipo: 'Página',
      link: 'https://www.adslzone.net/reportajes/software/que-es-android',
    },
    {
      tema: 'Versiones Android Studio',
      referencia:
        'Developer. (2021, 14 de junio). Archivos de descarga de Android Studio.',
      tipo: 'Página',
      link: 'https://developer.android.com/studio/archive?hl=es-419',
    },
    {
      tema: 'Instalación Android',
      referencia:
        'Developer. (2020, 21 de diciembre). Cómo instalar Android Studio.',
      tipo: 'Página Oficial',
      link: 'https://developer.android.com/studio/install?hl=es-419',
    },
  ],
  glosario: [
    {
      termino: 'Dalvik',
      significado: 'máquina virtual de Android.',
    },
    {
      termino: 'Manifiesto ágil',
      significado:
        'es un documento redactado con principios para mejorar la forma de desarrollar.',
    },
    {
      termino: 'Wereable',
      significado:
        'dispositivo conectado que se puede llevar puesto y que se conecta al teléfono móvil.',
    },
  ],
  referencias: [
    {
      referencia:
        'Abrahamsson, P., Hanhineva, A., Hulkko, H., Ihme, T., Jäälinoja, J., Korkala, M., & Salo, O. (2004). Mobile-D: An agile approach for mobile application development. En Companion to the 19th Annual ACM SIGPLAN Conference on Object-Oriented Programming Systems, Languages, and Applications, 174-175. ACM.',
      link: '',
    },
    {
      referencia:
        'Astel, D. (2003). Test-driven development: A practical guide. Prentice Hall PTR.',
      link: '',
    },
    {
      referencia:
        'Avison, D. E., & Fitzgerald, G. (2006). Information system development. McGraw-Hill Education.',
      link: '',
    },
    {
      referencia:
        'Balafuera, Y. D. A. (2015). Metodologías ágiles en el desarrollo de aplicaciones para dispositivos móviles: Estado actual. Revista de tecnología, 12(2).',
      link: 'https://doi.org/10.18270/rt.v12i2.1291',
    },
    {
      referencia:
        'Letelier, P., Canós, J. H., & Penadés, M. C. (2003). Metodologías ágiles en el desarrollo de software. Presentado en VIII Jornadas de Ingeniería del Software y Bases de Datos (JISBD), Alicante, España, 1-8. Addison Wesley.',
      link: '',
    },
    {
      referencia:
        'Olmos, F. (2020, 19 de octubre). El origen de Android: Características y costos. Fredy Olmos.',
      link:
        'https://fredyolmos.com/ciencia-y-tecnologia/el-origen-de-android-costos-caracteristicas/',
    },
    {
      referencia:
        'Takeuchi, H., & Nonaka, I. (1986). The new new product development game. Harvard Business Review.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Zulema Yidney León Escobar',
          cargo: 'Experta Temática',
          centro:
            'Centro de Teleinformática y Producción Industrial - Regional Cauca',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldán',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edwin Sneider Velandia Suárez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortés García',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
