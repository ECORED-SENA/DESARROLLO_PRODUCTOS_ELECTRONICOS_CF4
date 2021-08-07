export default {
  global: {
    componenteFormativo: 'Identificación de componentes electrónicos',
    descripcionCurso:
      'El presente componente formativo contempla temas acerca de los circuitos electrónicos, de cómo están conformados y su vital importancia en la fabricación y operación de los productos electrónicos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
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
        titulo: 'Componentes electrónicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Clasificación',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Simbología',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Encapsulados',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Materiales',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Placa base',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Características y hojas de datos',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Diseño eléctrico y electrónico',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Órdenes de trabajo',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      /*  {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      }, */
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
  referencias: [
    {
      referencia:
        'Arboledas Brihuega, D. (2011). Electrónica básica: guía básica. Ediciones de la U.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=7120',
    },
    {
      referencia:
        'Carmona Rubio, G.,  y Díaz Corcobado, T.(2010). Electrónica aplicada. McGraw-Hill.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=4852',
    },
    {
      referencia:
        'Ruiz Vázquez, T.,  y Arbelaitz Gallego, O. (2004). Análisis Básico de circuitos eléctricos y electrónicos. Pearson Educación.',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=4552',
    },
    {
      referencia:
        'Texas Instruments. (2015). Quad-Operational Amplifiers. [Hoja de datos] TI.',
      link: 'https://www.ti.com/lit/ds/snosc16d/snosc16d.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Aislantes',
      significado: 'Materiales que impiden el paso de cargas eléctricas.',
    },
    {
      termino: 'Conductores',
      significado:
        'Materiales que permiten el movimiento de cargas eléctricas.',
    },
    {
      termino: 'Corriente',
      significado:
        'Flujo de electrones a través de un material impulsado por la diferencia de potencial entre dos puntos o materiales.',
    },
    {
      termino: 'Energía eléctrica',
      significado:
        'Es una fuente de energía renovable que se obtiene mediante el movimiento de cargas eléctricas (electrones) que se produce en el interior de materiales conductores (por ejemplo, cables metálicos como el cobre).',
    },
    {
      termino: 'Nodo',
      significado:
        'Punto de conexión común para dos o más componentes electrónicos que hacen parte de un circuito eléctrico.',
    },
    {
      termino: 'Semiconductores',
      significado:
        'Materiales que pueden permitir e impedir el paso de la energía eléctrica.',
    },
    {
      termino: 'Voltaje',
      significado:
        'Diferencia de potencial eléctrico entre dos puntos de un circuito o dos materiales con carga eléctrica diferente.',
    },
  ],
  complementario: [
    {
      texto:
        'Arboledas Brihuega, D. (2011). Electrónica básica: guía básica. Ediciones de la U.',
      tipo: 'Libro',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=7120',
    },
    {
      texto:
        'Ruiz Vázquez, T., y  Arbelaitz Gallego, O. (2004). Análisis Básico de circuitos eléctricos y electrónicos. Pearson Educación.',
      tipo: 'Libro',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=4552',
    },
    {
      texto:
        'Carmona Rubio, G. y  Díaz Corcobado, T. (2010). Electrónica aplicada. McGraw-Hill.',
      tipo: 'Libro',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=4852',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila García Santamaría',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jaime Arley Delgado Rincón',
        cargo: 'Instructor',
        centro:
          'Centro de Electricidad, Electrónica y Telecomunicaciones - Regional Distrito Capital',
      },
      {
        nombre: 'Miroslava González Hernández',
        cargo: 'Diseñador y Evaluador Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora Metodológica y Pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez ',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Luis Fernando Sarmiento Betancourth',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Lizeth Karina Manchego Suárez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
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
}
