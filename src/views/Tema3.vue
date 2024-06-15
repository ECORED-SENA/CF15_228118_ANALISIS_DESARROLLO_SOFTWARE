<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-0.pb-md-0
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Entornos de desarrollo
    
    .row.mb-5
      .col-lg-7
        p.mb-4 Un entorno de desarrollo es un #[em software] que facilita un conjunto de herramientas que permiten crear una aplicación. Estos entornos contienen soporte para uno o varios lenguajes de programación y son los encargados de depurar, compilar, realizar pruebas y convertir nuestro código en una aplicación ejecutable.
        p.mb-0 Los entornos más utilizados para el desarrollo de aplicaciones nativas son: Xcode para la plataforma iOS y Android Studio para la plataforma Android.
      .col-lg-5.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/41.png",style="max-width: 502px;")

    .fondo-personalizado-4.pos-1.mb-5
      .fondo-personalizado-4__contenido.pt-4
        .row.justify-content-center
          .col-lg-4.col-md-9.mb-5(data-aos="fade-right")
            .tarjeta-img-1.bmed-custom
              figure.tarjeta-img-1__img
                img.mx-auto(src="@/assets/curso/temas/87.png")
              .tarjeta-img-1__texto.p-3.fondo-color-primario
                p.mb-3.c-color-acento-contenido.text-start Xcode
                p.text-white.text-start(style="font-weight: normal;") Entorno de desarrollo integrado (IDE) para iOS, macOS, watchOS y tvOS, creado por Apple. Incluye herramientas para construir, probar y empaquetar aplicaciones para su envío al App Store. Lenguajes soportados: C, C++, Objective-C, Objective-C++, Java, AppleScript, Python, Ruby, ResEdit, Swift. 
          .col-lg-4.col-md-9.mb-5(data-aos="fade-up")
            .tarjeta-img-1.bmed-custom
              figure.tarjeta-img-1__img
                img.mx-auto(src="@/assets/curso/temas/88.png")
              .tarjeta-img-1__texto.p-3.fondo-color-primario
                p.mb-3.c-color-acento-contenido.text-start Android Studio
                p.text-white.text-start.mb-lg-4(style="font-weight: normal;") IDE oficial para el desarrollo de aplicaciones Android, ofrece compilación flexible y un entorno unificado para todos los dispositivos Android. Incluye integración con GitHub y herramientas de diagnóstico. Lenguajes soportados: Java, Kotlin.

          .col-lg-4.col-md-9.mb-5(data-aos="fade-left")
            .tarjeta-img-1.bmed-custom
              figure.tarjeta-img-1__img
                img.mx-auto(src="@/assets/curso/temas/89.png")
              .tarjeta-img-1__texto.p-3.fondo-color-primario
                p.mb-3.c-color-acento-contenido.text-start Visual Studio
                p.text-white.text-start(style="font-weight: normal;") Creado por Microsoft en 1997, es un IDE compatible con Windows, Linux y macOS. Soporta múltiples lenguajes de programación y entornos de desarrollo web, con versiones gratuitas y de pago. Lenguajes soportados: C++, C#, Visual Basic .NET, F#, Java, Python, Ruby, PHP, ASP.NET. 
    
    .row.mb-4 
      .col-auto.d-none.d-md-block 
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/5.svg",style="max-width: 85px;")
      .col 
        p.mb-0 El desarrollo de aplicaciones móviles se ha convertido en una necesidad debido a la gran utilización y evolución de estas plataformas. Por esta razón, es importante definir cuáles serán las tecnologías más adecuadas para la programación móvil. Una de las arquitecturas más implantadas es la proporcionada por el sistema Android. 
      
    Separador

    #t_3_1.titulo-segundo.color-acento-contenido.mb-lg-2
      h2 3.1 Plataforma Android
    
    .fondo-personalizado-8.mb-5
      .fondo-personalizado-8__contenido.pb-4
        .row.align-items-center.mb-5
          .col-lg-7
            p.mb-4 Es un sistema operativo móvil desarrollado por Google, de código abierto y basado en Linux. Ofrece una optimización de la máquina virtual denominada Dalvik VM y soporta la mayoría de las API de Java SE para el desarrollo de aplicaciones. Está enfocado en ser utilizado en dispositivos móviles como teléfonos inteligentes, tabletas, Google TV y otros dispositivos.
            p.mb-0 Sus características son: 
          .col-lg-5.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/45.svg",style="max-width: 505px;")
        
        .grid-container
          .borde-20.p-3.text-center.h-100.fondo-color-primario
            i.fas.fa-mobile-alt(style="font-size: 35px;").mb-4.c-color-acento-contenido
            h4.text-white Contiene un #[em framework] de aplicaciones para la reutilización de componentes.
          .borde-20.p-3.text-center.h-100.fondo-color-primario
            i.fas.fa-window-maximize(style="font-size: 37px;").mb-4.c-color-acento-contenido
            h4.text-white Navegador integrado
          .borde-20.p-3.text-center.h-100.fondo-color-primario
            i.fas.fa-address-card(style="font-size: 40px;").mb-4.c-color-acento-contenido
            h4.text-white Cuenta con una base de datos que se integra directamente en las aplicaciones, SQLite.
          .borde-20.p-3.text-center.h-100.fondo-color-primario
            i.fas.fa-envelope(style="font-size: 40px;").mb-4.c-color-acento-contenido
            h4.text-white Ofrece diferentes formas de mensajería.
          .borde-20.p-3.text-center.h-100.fondo-color-primario
            img.mx-auto(src="@/assets/curso/temas/46.svg",style="max-width: 43px;").mb-4
            h4.text-white Adaptable a muchas pantallas y resoluciones.
    
    h4.fondo-color-primario.mb-5.text-white.px-4.py-2.d-inline-block.borde-20 Versiones

    p.mb-5 Android ha lanzado muchas versiones desde su inicio, con numerosas actualizaciones. Cada nueva versión corrige fallos detectados en las anteriores e incluye nuevas funcionalidades con soporte para las nuevas tecnologías. Curiosamente, las versiones de Android reciben el nombre de postres o dulces, cuyos nombres van en orden alfabético, una tradición que se mantuvo hasta la versión 9.

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 1.] Nombres versiones y lanzamiento de sistema operativo Android
        .tabla-a.color-acento-contenido.fondo-color-sistema-h
          table
            thead
              tr
                th Nombre 
                th Versión
                th Lanzamiento
            tbody
              tr
                td Android Apple Pie
                td.text-center Versión 1.0
                td 23 de septiembre de 2008
              tr
                td Android Banana Bread
                td.text-center Versión 1.1
                td 9 de febrero de 2009
              tr
                td Android Cupcake
                td.text-center Versión 1.5
                td 25 de abril de 2009
              tr
                td Android Donut
                td.text-center Versión 1.6
                td 5 de septiembre de 2009
              tr
                td Android Éclair
                td.text-center Versión 2.0
                td 26 de octubre de 2009
              tr
                td Android Froyo
                td.text-center Versión 2.2
                td 20 de mayo de 2010
              tr
                td Android Gingerbread
                td.text-center Versión 2.3
                td 6 de diciembre de 2010
              tr
                td Android Honeycomb
                td.text-center Versión 3.0
                td 22 de febrero de 2011
              tr
                td Android Ice Cream Sandwich
                td.text-center Versión 4.0
                td 18 de octubre de 2011
              tr
                td Android Jelly Bean
                td.text-center Versión 4.1
                td 9 de julio de 2012
              tr
                td Android KitKat
                td.text-center Versión 4.4
                td 31 de octubre de 2012
              tr
                td Android Lollipop
                td.text-center Versión 5.0
                td 12 de noviembre de 2014
              tr
                td Android Marshmallow
                td.text-center Versión 6.0
                td 5 de octubre de 2015
              tr
                td Android Nougat
                td.text-center Versión 7.0
                td 15 de junio de 2016
              tr
                td Android Oreo
                td.text-center Versión 8.0
                td 21 de agosto de 2017
              tr
                td Android Pie
                td.text-center Versión 9.0
                td 6 de agosto de 2018
              tr
                td Android 10
                td.text-center Versión 10
                td 3 de septiembre de 2019
              tr
                td Android 11
                td.text-center Versión 11
                td 8 de septiembre de 2020
              tr
                td Android 12
                td.text-center Versión 12
                td 4 de octubre de 2021
              tr
                td Android 12 Beta 2
                td.text-center Versión 12
                td 9 de junio de 2021
              tr
                td Android 13
                td.text-center Versión 13
                td 15 de agosto de 2022

    .row.mb-5
      .col-auto.d-none.d-md-block
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/8.svg",style="max-width: 85px;")
      .col
        p.mb-0 A continuación, se presenta un esquema que resume lo anterior:
    
    .row 
      .col-lg-1.d-none.d-lg-block 
      .col-lg-9
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 6.] Versiones de Android
        figure
          img.mx-auto(src="@/assets/curso/temas/48.svg",style="max-width: 925px;",alt='En esta figura se presentan las diversas versiones de "Android"')
          figcaption.mt-1(style="background-color: #F6F6F6 !important;font-size: 14px;font-weight: normal;") #[em Nota]. Tomado de El origen de Android (Características y Costos, por F. Olmos, 2020)
    
    .cont-titulo-decorativo.p-2.mt-5.mb-5
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/img-titulo-dec.svg")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 Arquitectura
    
    .row
      .col-auto.d-none.d-md-block
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/16.svg",style="max-width: 85px;")
      .col
        p.mb-0 Los componentes principales de la plataforma Android están diseñados para una variedad de dispositivos. Android es de código abierto y está basado en Linux.
    
    p(style="color: red;") faltantes !!!!

    .row.mb-4
      .col-auto.d-none.d-md-block
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/16.svg",style="max-width: 85px;")
      .col
        p.mb-0 A continuación, se presenta una descripción completa del IDE Android Studio, que como se mencionó anteriormente, es el entorno oficial para el desarrollo de aplicaciones móviles nativas en Android.
    
    Separador

    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Android Studio
    .fondo-personalizado-6.pos-2
      .fondo-personalizado-6__contenido
        .row.mb-5
          .col-lg-7
            p.mb-4 Android Studio está basado en IntelliJ IDEA de la compañía JetBrains, que proporciona varias mejoras con respecto al plugin ADT (Android Developer Tools) para Eclipse. Android Studio utiliza una licencia de #[em software] libre Apache 2.0, está programado en Java y es multiplataforma. Fue presentado por Google el 16 de mayo de 2013 en el congreso de desarrolladores Google I/O, con el objetivo de crear un entorno dedicado exclusivamente a la programación de aplicaciones para dispositivos Android, proporcionando a Google un mayor control sobre el proceso de producción. Actualmente, es el IDE recomendado por Google.
            p.mb-0 Las características son:
          .col-lg-5.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/49.png",style="max-width: 502px;")

        .row.justify-content-center.pt-3
          .col-lg-8
            .py-4.py-md-1.px-4.borde-29.mb-2(style="background-color: #4F4415;")
              .row.align-items-center
                .col-md-auto 
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/36.svg",style="max-width: 50px;")
                .col 
                  p.mb-0.text-white.fw-bold Realiza renderizados de layouts en tiempo real, ejecutando las compilaciones de forma rápida.
        .row 
          .col-lg-2.me-3
          .col-lg-8
            .py-4.py-md-1.px-4.borde-29.mb-2(style="background-color: #892758;")
              .row.align-items-center
                .col-md-auto 
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/36.svg",style="max-width: 50px;")
                .col 
                  p.mb-0.text-white.fw-bold Permite ejecutar la aplicación en tiempo real en el dispositivo móvil.

        .row 
          .col-lg-2.me-5
          .col-lg-8
            .py-4.py-md-1.px-4.borde-29.mb-2(style="background-color: #5F2789;")
              .row.align-items-center
                .col-md-auto 
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/36.svg",style="max-width: 50px;")
                .col 
                  p.mb-0.text-white.fw-bold Incluye un potente emulador.

        .row 
          .col-lg-2.me-5
          .col-lg-8.ms-lg-4
            .py-4.py-md-1.px-4.borde-29.mb-2(style="background-color: #760ED3;")
              .row.align-items-center
                .col-md-auto 
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/36.svg",style="max-width: 50px;")
                .col 
                  p.mb-0.text-white.fw-bold Permite simular diferentes dispositivos y tabletas.

        .row.mb-5
          .col-lg-3
          .col-lg-8
            .py-4.py-md-1.px-4.borde-29.mb-2(style="background-color: #15464F;")
              .row.align-items-center
                .col-md-auto 
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/36.svg",style="max-width: 50px;")
                .col 
                  p.mb-0.text-white.fw-bold Trabaja con un editor de elementos gráficos para la creación de la interfaz sin necesidad de código, solo arrastrando y soltando.

        .row
          .col-auto.d-none.d-md-block
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/16.svg",style="max-width: 85px;")
          .col
            p.mb-0 La realización de aplicaciones en Android Studio se enfoca en 4 fases de desarrollo:

    .row.mt-5.pt-2.mb-3
      .col-lg-3.mb-4
        .tarjeta-personalizada-2.pb-4.h-100
          .d-flex.mb-5
            .burbuja-1.fondo-color-acento-contenido.mx-auto
              figure.p-3
                img.mx-auto(src="@/assets/curso/temas/50.svg",style="max-width: 70px;")
          p.mb-0.c-color-acento-contenido.fw-bold Fase 1.
          p.mb-4.c-color-acento-contenido.fw-bold Configuración de entorno.
          p.mb-0.text-white En esta fase se realiza la instalación y configuración del entorno de desarrollo, se conectan dispositivos y se crean emuladores virtuales.
      .col-lg-3.mb-4
        .tarjeta-personalizada-2.pb-4.h-100
          .d-flex.mb-5
            .burbuja-1.fondo-color-acento-contenido.mx-auto
              figure.p-3
                img.mx-auto(src="@/assets/curso/temas/51.svg",style="max-width: 69px;")
          p.mb-0.c-color-acento-contenido.fw-bold Fase 2.
          p.mb-4.c-color-acento-contenido.fw-bold Configuración del Proyecto y Desarrollo.
          p.mb-0.text-white Esta fase involucra configurar los módulos necesarios que contienen recursos de la aplicación y los archivos de código fuente.
      .col-lg-3.mb-4
        .tarjeta-personalizada-2.pb-4.h-100
          .d-flex.mb-5
            .burbuja-1.fondo-color-acento-contenido.mx-auto
              figure.p-3
                img.mx-auto(src="@/assets/curso/temas/52.svg",style="max-width: 70px;")
          p.mb-0.c-color-acento-contenido.fw-bold Fase 3.
          p.mb-4.c-color-acento-contenido.fw-bold Pruebas, depuración y Construcción de la aplicación.
          p.mb-0.text-white Se crea el ejecutable o APK que puede ejecutarse e instalarse en el emulador o dispositivo Android.
      .col-lg-3.mb-4
        .tarjeta-personalizada-2.pb-4.h-100
          .d-flex.mb-5
            .burbuja-1.fondo-color-acento-contenido.mx-auto
              figure.p-3
                img.mx-auto(src="@/assets/curso/temas/53.svg",style="max-width: 70px;")
          p.mb-0.c-color-acento-contenido.fw-bold Fase 4.
          p.mb-4.c-color-acento-contenido.fw-bold Publicación de la aplicación.
          p.mb-0.text-white En esta fase se realiza la solicitud en la tienda PlayStore para la distribución libre de la aplicación, permitiendo que los usuarios puedan descargarla e instalarla en sus dispositivos Android.
    
    Separador

    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3 Arquitectura de una aplicación en Android
    
    .row.mb-5
      .col-lg-7
        p.mb-4 Cada componente depende solo del componente que está un nivel más abajo. Por ejemplo, las actividades y los fragmentos solo dependen de un modelo de vista. El repositorio es la única clase que depende de otras clases. En este ejemplo, el repositorio depende de un modelo de datos persistente y de una fuente de datos de #[em back-end] remota.
        .fondo-color-sistema-m.p-4.borde-10
          .row.align-items-center 
            .col-md-auto 
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/temas/54.svg",style="max-width: 100px;")
            .col 
              p.mb-0 Este diseño crea una experiencia de usuario consistente y agradable. Independientemente de que el usuario vuelva a la app varios minutos después de cerrarla por última vez o varios días más tarde, verá instantáneamente la información del usuario que la app persiste a nivel local. Si estos datos están inactivos, el módulo de repositorio comienza a actualizar los datos en segundo plano.
      .col-lg-5.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/55.png",style="max-width: 502px;")

    .fondo-personalizado-burbuja
      .fig-burbuja.left(style="bottom: 0;")
      .fig-burbuja.right
      .fondo-personalizado-burbuja__contenido
        .row.justify-content-center.mb-5
          .col-lg-6
            .titulo-sexto.color-acento-contenido.mb-5
              p.mb-0 #[b Figura 7.] Arquitectura de una aplicación en Android
            
            figure
              img.mx-auto(src="@/assets/curso/temas/56.svg",style="max-width: 610px;",alt="La figura muestra un diagrama de arquitectura de aplicación, donde una Actividad o Fragmento se conecta a un ViewModel que utiliza LiveData. Un Repository central gestiona la comunicación entre ViewModel y las fuentes de datos, divididas en Model con Room para la base de datos local y un Remote Data Source usando Retrofit para la conexión a servicios externos.")
    
    h4.fondo-color-primario.mb-5.text-white.px-4.py-2.d-inline-block.borde-20 Versiones

    .row.mb-5
      .col-auto.d-none.d-md-block
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/16.svg",style="max-width: 85px;")
      .col
        p.mb-0 Así como el sistema operativo Android tiene una gran variedad de actualizaciones, el ritmo de actualizaciones de Android Studio es bastante alto. A continuación, se listan las últimas versiones desde la más actual hasta la más antigua.

    .fondo-personalizado-4
      .fondo-personalizado-4__contenido.pb-5
        .row.justify-content-center.pb-5
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Tabla 2.] Nombres versiones y lanzamiento de sistema operativo Android

            .tabla-a.color-acento-contenido.fondo-color-sistema-h
              table
                thead
                  tr
                    th Versiones Android Studio 
                    th Fecha de lanzamiento
                tbody
                  tr
                    td Android Studio Bumblebee (2021.1.1)
                    td 27 de junio de 2021
                  tr
                    td Android Studio Arctic Fox (2020.3.1) Beta 3
                    td 27 de mayo de 2021
                  tr
                    td Android Studio 4.2.1
                    td 13 de mayo de 2021
                  tr
                    td Android Studio 4.2.0
                    td 4 de mayo de 2021
                  tr
                    td Android Studio 4.1.3
                    td 18 de marzo de 2021
                  tr
                    td Android Studio 4.1
                    td 12 de octubre de 2020
                  tr
                    td Android Studio 4.0
                    td 28 de mayo de 2020
                  tr
                    td Android Studio 3.6.3
                    td 17 de abril de 2020
                  tr
                    td Android Studio 3.0
                    td 25 de octubre de 2017
                  tr
                    td Android Studio 2.3.2
                    td 11 de mayo de 2017
                  tr
                    td Android Studio Chipmunk (2021.2.1)
                    td 9 de mayo de 2022
                  tr
                    td Android Studio Dolphin (2021.3.1)
                    td 8 de agosto de 2022
                  tr
                    td Android Studio Electric Eel (2022.1.1)
                    td 27 de marzo de 2023
                 


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
