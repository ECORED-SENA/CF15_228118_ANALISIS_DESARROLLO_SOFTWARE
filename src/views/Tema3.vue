<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
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

    p(style="color: red;") faltantes!!!!!!!!!!!!!!!!
    
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
