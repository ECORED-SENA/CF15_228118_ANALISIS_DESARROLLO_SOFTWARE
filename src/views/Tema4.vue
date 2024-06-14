<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Instalación y configuración entorno Android Studio
    
    .fondo-personalizado-2.borde-11.py-3.px-4.mb-5
      .row.align-items-center
        .col-md-auto 
          .d-flex.mb-4.mb-md-0
            .burbuja-1.fondo-color-acento-contenido.mx-auto.position-relative(style="height: 86px;width: 86px;")
              figure.position-absolute(style="top: 0;left: -3px;min-width: 96px;")
                img.mx-auto(src="@/assets/curso/temas/57.svg",style="width: 96px;")
        .col
          p.mb-0.text-white Para la instalación, lo primero que se debe tener en cuenta son los requisitos mínimos que debe cumplir el equipo. Para un mejor rendimiento y para asegurar que el emulador funcione correctamente, se necesita un equipo de trabajo adecuado que cuente con las propiedades recomendadas para cada sistema operativo.
    
    .row.pt-3
      .col-auto.d-none.d-md-block
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/8.svg",style="max-width: 85px;")
      .col
        p.mb-0 Requerimientos de sistema para instalación de Android Studio:
    
    .fondo-personalizado-9.mb-5
      .fondo-personalizado-9__contenido.pt-5
        .row
          .col-lg-4.mb-4
            .borde-16.p-4.fondo-color-primario.h-100
              .mb-4.position-relative.d-flex.align-items-center.justify-content-center
                figure
                  img.mx-auto(src="@/assets/curso/temas/58.svg",style="max-width: 123px;")
                figure.position-absolute
                  img.mx-auto(src="@/assets/curso/temas/60.png",style="max-width: 88px;")
              h4.mb-4.c-color-acento-contenido.text-center Windows
              ul.lista-ul.lista-p-1.mb-4
                li
                  i.fas.fa-cube.c-color-acento-contenido.mt-1(style="font-size: 12px;")
                  span.text-white 64-bit Microsoft® Windows® 8/10
                li
                  i.fas.fa-cube.c-color-acento-contenido.mt-1(style="font-size: 12px;")
                  span.text-white 8 GB RAM or more
                li
                  i.fas.fa-cube.c-color-acento-contenido.mt-1(style="font-size: 12px;")
                  span.text-white 8 GB of available disk space minimum (IDE + Android SDK + Android Emulator)
                li
                  i.fas.fa-cube.c-color-acento-contenido.mt-1(style="font-size: 12px;")
                  span.text-white 1280 x 800 minimum screen resolution
          .col-lg-4.mb-4
            .borde-16.p-4.fondo-color-primario.h-100
              .mb-4.position-relative.d-flex.align-items-center.justify-content-center
                figure
                  img.mx-auto(src="@/assets/curso/temas/58.svg",style="max-width: 123px;")
                figure.position-absolute
                  img.mx-auto(src="@/assets/curso/temas/61.png",style="max-width: 80px;")
              h4.mb-4.c-color-acento-contenido.text-center macOS
              ul.lista-ul.lista-p-1.mb-4
                li
                  i.fas.fa-cube.c-color-acento-contenido.mt-1(style="font-size: 12px;")
                  span.text-white MacOS® 10.14 (Mojave) or higher
                li
                  i.fas.fa-cube.c-color-acento-contenido.mt-1(style="font-size: 12px;")
                  span.text-white 8 GB RAM or more
                li
                  i.fas.fa-cube.c-color-acento-contenido.mt-1(style="font-size: 12px;")
                  span.text-white 8 GB of available disk space minimum (IDE + Android SDK + Android Emulator)
                li
                  i.fas.fa-cube.c-color-acento-contenido.mt-1(style="font-size: 12px;")
                  span.text-white 1280 x 800 minimum screen resolution
          .col-lg-4.mb-4
            .borde-16.p-4.fondo-color-primario.h-100
              .mb-4.position-relative.d-flex.align-items-center.justify-content-center
                figure
                  img.mx-auto(src="@/assets/curso/temas/58.svg",style="max-width: 123px;")
                figure.position-absolute
                  img.mx-auto(src="@/assets/curso/temas/59.png",style="max-width: 76px;")
              h4.mb-4.c-color-acento-contenido.text-center Linux
              ul.lista-ul.lista-p-1.mb-4
                li
                  i.fas.fa-cube.c-color-acento-contenido.mt-1(style="font-size: 12px;")
                  span.text-white Any 64-bit Linux distribution that supports Gnome, KDE, or Unity DE; GNU C Library (glibc) 2.31 or later.
                li
                  i.fas.fa-cube.c-color-acento-contenido.mt-1(style="font-size: 12px;")
                  span.text-white 8 GB RAM or more
                li
                  i.fas.fa-cube.c-color-acento-contenido.mt-1(style="font-size: 12px;")
                  span.text-white 8 GB of available disk space minimum (IDE + Android SDK + Android Emulator)
                li
                  i.fas.fa-cube.c-color-acento-contenido.mt-1(style="font-size: 12px;")
                  span.text-white 1280 x 800 minimum screen resolution

    .row.mb-5
      .col-lg-7.mb-4.mb-lg-0
        p.mb-0 Además de estos requisitos del sistema, para una instalación exitosa y un funcionamiento correcto del #[em software], se deben considerar otros elementos. Dependiendo del sistema operativo que se utilice, ya sea Ubuntu, Linux, Windows 10 o Mac OS, es necesario seguir unas instrucciones específicas para cada uno de ellos. Se puede encontrar información al respecto en el enlace proporcionado.
      .col-lg-5
        figure
          img.mx-auto(src="@/assets/curso/temas/63.png",style="max-width: 502px;")
    
    .row.justify-content-center 
      .col-lg-10
        .p-4.fondo-color-primario.borde-11.mb-5(data-aos="flip-up")
          .row
            .col-auto(style="margin: auto;")
              .burbuja-1.fondo-color-acento-contenido.mx-auto
                figure
                  img.mx-auto(src="@/assets/curso/temas/64.svg",style="max-width: 50px;")
            .col-lg.mb-4.mb-md-0.col-md-6
              h4.c-color-acento-contenido Instalación
              p.mb-0.text-white La instalación de Android en este componente se realizará para Windows, para más información de cómo instalar en Mac, Linux, o Chrome ingresa al enlace: 
            .col-md-auto.text-center(style="place-self:center;")
              a.boton.color-acento-botones(href="https://developer.android.com/studio/install?hl=es-419" target="_blank")
                span(style="color:initial;") Enlace web
                i.fas.fa-file-code(style="color:initial;")
    .d-flex.mb-5
      .me-3
        h4.fondo-color-acento-contenido.d-inline-block.px-1 A
      p.mb-0 #[b Descargar e instalar Android Studio.] Ingresa a la página oficial #[em Android developers] y selecciona la opción Android Studio o ingresa al siguiente enlace: #[a.fw-bold.color-sistema-n(href="https://developer.android.com/studio?hl=es-419" target="_blank") https://developer.android.com/studio?hl=es-419]

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-0
          p.mb-0 #[b Figura 8.] Descarga de Android Studio
    .fondo-personalizado-10.mb-4
      .fondo-personalizado-10__contenido.py-5
        .row.justify-content-center
          .col-lg-10

            figure
              img.mx-auto(src="@/assets/curso/temas/65.png",style="max-width: 1030px;",alt='La imagen presenta la página de descarga para el "software" Android Studio')
    .d-flex.mb-5
      .me-3
        h4.fondo-color-acento-contenido.d-inline-block.px-1 B
      p.mb-0 La página detecta el sistema operativo y descarga el instalador correspondiente, seleccionar la opción de: Leí y acepto los términos y condiciones anteriores;  y hacer clic en descargar Android Studio.

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-0
          p.mb-0 #[b Figura 9.] Términos y condiciones de la instalación
    .fondo-personalizado-10.mb-4
      .fondo-personalizado-10__contenido.py-5
        .row.justify-content-center
          .col-lg-10

            figure
              img.mx-auto(src="@/assets/curso/temas/67.png",style="max-width: 1030px;",alt='Se presentan los términos y condiciones de la instalación de "Android Studio" para "Windows"')
    .d-flex.mb-5
      .me-3
        h4.fondo-color-acento-contenido.d-inline-block.px-1 C
      p.mb-0 Para instalar la aplicación, se debe descargar y ejecutar el instalador. Al iniciar, se sigue el asistente de instalación.

    .row.justify-content-center
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-0
          p.mb-0 #[b Figura 10.] Asistente de Instalación Android Studio
    .fondo-personalizado-10.mb-4
      .fondo-personalizado-10__contenido.py-5
        .row.justify-content-center
          .col-lg-6

            figure
              img.mx-auto(src="@/assets/curso/temas/68.png",style="max-width: 610px;",alt='En la imagen se presenta la ventana de inicio para instalar una  versión de "Android Studio"')

    



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
