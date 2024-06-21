<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Instalación y configuración entorno Android Studio
    
    .fondo-personalizado-2.borde-11.py-3.px-4.mb-5
      .row.align-items-center
        .col-md-auto(data-aos="fade")
          .d-flex.mb-4.mb-md-0
            .burbuja-1.fondo-color-acento-contenido.mx-auto.position-relative(style="height: 86px;width: 86px;")
              figure.position-absolute(style="top: 0;left: -3px;min-width: 96px;")
                img.mx-auto(src="@/assets/curso/temas/57.svg",style="width: 96px;")
        .col(data-aos="fade-left")
          p.mb-0.text-white Para la instalación, lo primero que se debe tener en cuenta son los requisitos mínimos que debe cumplir el equipo. Para un mejor rendimiento y para asegurar que el emulador funcione correctamente, se necesita un equipo de trabajo adecuado que cuente con las propiedades recomendadas para cada sistema operativo.
    
    .row.pt-3(data-aos="flip-up")
      .col-auto.d-none.d-md-block
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/8.svg",style="max-width: 85px;")
      .col
        p.mb-0 Requerimientos de sistema para instalación de Android Studio:
    
    .fondo-personalizado-9.mb-5
      .fondo-personalizado-9__contenido.pt-5
        .row
          .col-lg-4.mb-4(data-aos="fade-up")
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
                  span.text-white 8 GB de RAM o más
                li
                  i.fas.fa-cube.c-color-acento-contenido.mt-1(style="font-size: 12px;")
                  span.text-white 8 GB de espacio mínimo disponible en disco (IDE + SDK de Android + Emulador de Android)
                li
                  i.fas.fa-cube.c-color-acento-contenido.mt-1(style="font-size: 12px;")
                  span.text-white Resolución de pantalla mínima de 1280 x 800
          .col-lg-4.mb-4(data-aos="fade-down")
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
                  span.text-white MacOS® 10.14 (Mojave) o superior
                li
                  i.fas.fa-cube.c-color-acento-contenido.mt-1(style="font-size: 12px;")
                  span.text-white 8 GB de RAM o más
                li
                  i.fas.fa-cube.c-color-acento-contenido.mt-1(style="font-size: 12px;")
                  span.text-white 8 GB de espacio mínimo disponible en disco (IDE + SDK de Android + Emulador de Android)
                li
                  i.fas.fa-cube.c-color-acento-contenido.mt-1(style="font-size: 12px;")
                  span.text-white Resolución de pantalla mínima de 1280 x 800
          .col-lg-4.mb-4(data-aos="fade-up")
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
                  span.text-white Cualquier distribución de Linux de 64 bits que admita Gnome, KDE o Unity DE; Biblioteca GNU C (glibc) 2.31 o posterior.
                li
                  i.fas.fa-cube.c-color-acento-contenido.mt-1(style="font-size: 12px;")
                  span.text-white 8 GB de RAM o más
                li
                  i.fas.fa-cube.c-color-acento-contenido.mt-1(style="font-size: 12px;")
                  span.text-white 8 GB de espacio mínimo disponible en disco (IDE + SDK de Android + Emulador de Android)
                li
                  i.fas.fa-cube.c-color-acento-contenido.mt-1(style="font-size: 12px;")
                  span.text-white Resolución de pantalla mínima de 1280 x 800

    .row.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
        p.mb-0 Además de estos requisitos del sistema, para una instalación exitosa y un funcionamiento correcto del #[em software], se deben considerar otros elementos. Dependiendo del sistema operativo que se utilice, ya sea Ubuntu, Linux, Windows 10 o Mac OS, es necesario seguir unas instrucciones específicas para cada uno de ellos. Se puede encontrar información al respecto en el enlace proporcionado.
      .col-lg-5(data-aos="fade-left")
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

            figure(data-aos="zoom-in-out")
              img.mx-auto(src="@/assets/curso/temas/65.jpg",style="max-width: 1030px;",alt='La imagen presenta la página de descarga para el "software" Android Studio')
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

            figure(data-aos="zoom-in-out")
              img.mx-auto(src="@/assets/curso/temas/67.svg",style="max-width: 1030px;",alt='Se presentan los términos y condiciones de la instalación de "Android Studio" para "Windows"')
    .d-flex.mb-5
      .me-3
        h4.fondo-color-acento-contenido.d-inline-block.px-1 C
      p.mb-0 Para instalar la aplicación, se debe descargar y ejecutar el instalador. Al iniciar, se sigue el asistente de instalación.

    .row.justify-content-center
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-0
          p.mb-0 #[b Figura 10.] Asistente de Instalación Android Studio
    .fondo-personalizado-11.mb-4
      .fondo-personalizado-11__contenido.py-5
        .row.justify-content-center
          .col-lg-6

            figure(data-aos="zoom-in-out")
              img.mx-auto(src="@/assets/curso/temas/68.svg",style="max-width: 610px;",alt='En la imagen se presenta la ventana de inicio para instalar una  versión de "Android Studio"')
    .d-flex.mb-5
      .me-3
        h4.fondo-color-acento-contenido.d-inline-block.px-1 D
      p.mb-0 En este paso se muestra la ruta donde quedará instalado Android Studio, hacer clic en #[em Next].

    .row.justify-content-center
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-0
          p.mb-0 #[b Figura 11.] Asistente Instalación Selección componentes
    .fondo-personalizado-11.mb-4
      .fondo-personalizado-11__contenido.py-5
        .row.justify-content-center
          .col-lg-6

            figure(data-aos="zoom-in-out")
              img.mx-auto(src="@/assets/curso/temas/69.svg",style="max-width: 610px;",alt='En la imagen se muestran las opciones de componentes para la instalación de "Android Studio setup"')
    .d-flex.mb-5
      .me-3
        h4.fondo-color-acento-contenido.d-inline-block.px-1 E
      p.mb-0 En este paso del asistente, se deben seleccionar los componentes a instalar. Se recomienda dejar marcados, en este caso, dos: el propio IDE Android Studio y un #[em Virtual Device].

    .row.justify-content-center
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-0
          p.mb-0 #[b Figura 12.] Asistente de Instalación
    .fondo-personalizado-11.mb-4
      .fondo-personalizado-11__contenido.py-5
        .row.justify-content-center
          .col-lg-6

            figure(data-aos="zoom-in-out")
              img.mx-auto(src="@/assets/curso/temas/70.jpg",style="max-width: 610px;",alt='La imagen presenta las opciones que se pueden escoger al iniciar el menú archivo.')
    .row.mb-5
      .col-auto.d-none.d-md-block
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/16.svg",style="max-width: 85px;")
      .col
        p.mb-0 Para el resto de pasos de este asistente inicial, se deben aceptar sin modificar ninguna opción por defecto, hasta llegar al último paso donde se selecciona la opción "#[em Start Android Studio]" y se pulsa el botón "#[em Finish]". De esta manera, la aplicación se iniciará automáticamente.

    .row.justify-content-center
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-0
          p.mb-0 #[b Figura 13.] Asistente de Instalación Iniciar Android Studio
    .fondo-personalizado-11.mb-4
      .fondo-personalizado-11__contenido.py-5
        .row.justify-content-center
          .col-lg-6

            figure(data-aos="zoom-in-out")
              img.mx-auto(src="@/assets/curso/temas/71.svg",style="max-width: 610px;",alt='La imagen indica que el proceso de instalación de "Android studio" ha sido completado.')

    .d-flex.mb-5
      .me-3
        h4.fondo-color-acento-contenido.d-inline-block.px-1 F
      p.mb-0 Seleccionar: no importar configuraciones

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-0
          p.mb-0 #[b Figura 14.] Asistente de Instalación Importar
    .fondo-personalizado-11.mb-4
      .fondo-personalizado-11__contenido.py-5
        .row.justify-content-center
          .col-lg-8

            figure(data-aos="zoom-in-out")
              img.mx-auto(src="@/assets/curso/temas/72.svg",style="max-width: 820px;",alt='La imagen indica  las opciones que presenta el asistente  para importar la instalación.')

    .d-flex.mb-5
      .me-3
        h4.fondo-color-acento-contenido.d-inline-block.px-1 G
      p.mb-0 Instalación de Wizard Android Studio

    .row.justify-content-center
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-0
          p.mb-0 #[b Figura 15.] Asistente de Instalación "Wizard Android Studio"
    .fondo-personalizado-11.mb-4
      .fondo-personalizado-11__contenido.py-5
        .row.justify-content-center
          .col-lg-6

            figure(data-aos="zoom-in-out")
              img.mx-auto(src="@/assets/curso/temas/73.svg",style="max-width: 610px;",alt='La imagen presenta  el mensaje de bienvenida que presenta el asistente de instalación del  "software"  "Wizard Android Studio".')

    .d-flex.mb-5
      .me-3
        h4.fondo-color-acento-contenido.d-inline-block.px-1 H
      p.mb-0 Clic en #[em Next]

    .row.justify-content-center
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-0
          p.mb-0 #[b Figura 16.] Selección tipo configuración
    .fondo-personalizado-11.mb-4
      .fondo-personalizado-11__contenido.py-5
        .row.justify-content-center
          .col-lg-6

            figure(data-aos="flip-up")
              img.mx-auto(src="@/assets/curso/temas/75.svg",style="max-width: 610px;",alt='La imagen presenta  los tipos de instalación  que se pueden seleccionar.')
    
    .d-flex.mb-5
      .me-3
        h4.fondo-color-acento-contenido.d-inline-block.px-1 I
      p.mb-0 Para el tipo de configuración marcar la opción #[em Custom] (Personalizado) y clic en #[em Next]

    .row.justify-content-center
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-0
          p.mb-0 #[b Figura 17.] Selección tema visual
    .fondo-personalizado-11.mb-4
      .fondo-personalizado-11__contenido.py-5
        .row.justify-content-center
          .col-lg-6

            figure(data-aos="flip-up")
              img.mx-auto(src="@/assets/curso/temas/76.jpg",style="max-width: 610px;",alt='La imagen presenta  las opciones para elegir el tema visual.')

    .d-flex.mb-5(data-aos="zoom-in-out")
      .me-3
        h4.fondo-color-acento-contenido.d-inline-block.px-1 I
      p.mb-0 En la siguiente pantalla del asistente marcar los componentes adicionales a instalar. En el campo Android SDK Location se indica la ruta donde se desea instalar el SDK de Android.

    .row.justify-content-center(data-aos="flip-up")
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-0
          p.mb-0 #[b Figura 18.] Configuración de componentes
    .fondo-personalizado-11.mb-4
      .fondo-personalizado-11__contenido.py-5
        .row.justify-content-center
          .col-lg-6

            figure
              img.mx-auto(src="@/assets/curso/temas/77.svg",style="max-width: 610px;",alt='La imagen presenta la configuración de  los diferentes componentes.')

    .d-flex.mb-5(data-aos="fade")
      .me-3
        h4.fondo-color-acento-contenido.d-inline-block.px-1 J
      p.mb-0 Indicar la cantidad de memoria que se utilizará para el emulador y clic en "Next".

    .row.justify-content-center
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-0
          p.mb-0 #[b Figura 19.] Configuración del Emulador
    .fondo-personalizado-11.mb-4
      .fondo-personalizado-11__contenido.py-5
        .row.justify-content-center
          .col-lg-6

            figure
              img.mx-auto(src="@/assets/curso/temas/78.svg",style="max-width: 610px;",alt='La imagen presenta el paso  para la configuración del emulador.')

    .d-flex.mb-5
      .me-3
        h4.fondo-color-acento-contenido.d-inline-block.px-1 K
      p.mb-0 Tras finalizar el asistente de inicio aparecerá la pantalla de bienvenida de Android Studio para este ejemplo en su versión 4.2.1

    .row.justify-content-center
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-0
          p.mb-0 #[b Figura 20.] Bienvenida Android Studio
    .fondo-personalizado-11.mb-4
      .fondo-personalizado-11__contenido.py-5
        .row.justify-content-center
          .col-lg-6

            figure
              img.mx-auto(src="@/assets/curso/temas/79.svg",style="max-width: 610px;",alt='La imagen presenta la interfaz de bienvenida al "Android studio".')
    
    .cont-titulo-decorativo.p-2.mt-5.mb-5
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/img-titulo-dec.svg")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 #[em SDK Manager]
    
    .row.mb-5
      .col-lg-7
        p.mb-0 El #[em SDK Manager] permite gestionar las versiones de Android que están instaladas, así como otras herramientas necesarias para el desarrollo de aplicaciones móviles. El siguiente paso será revisar los componentes que se han instalado del SDK de Android Studio e instalar o actualizar componentes adicionales si fuera necesario para el desarrollo de las aplicaciones. En la pantalla de inicio de Android Studio, seleccione la opción "Configure" y haga clic en #[em SDK Manager].
      .col-lg-5.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/80.png",style="max-width: 502px;")
    

    .fondo-personalizado-12.mb-4
      .fondo-personalizado-12__contenido
        .row.justify-content-center
          .col-lg-6
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 21.] #[em SDK Manager]
            figure(data-aos="flip-up")
              img.mx-auto(src="@/assets/curso/temas/81.svg",style="max-width: 635px;",alt='La imagen presenta  la opción de selección del administrador de "SDK".')

        .cont-titulo-decorativo.p-2.mt-5.mb-4
          .row
            .col-auto.pe-0
              figure(data-aos="flip-up")
                img(src="@/assets/curso/temas/img-titulo-dec.svg")
            .col.align-self-end
              h3.mt-3.mb-0.me-2 #[em SDK Platforms]
        
        .row.align-items-center
          .col-lg-7
            .fondo-color-sistema-o.p-4.borde-14
              p.mb-4 #[em SDK Platforms] permite seleccionar los componentes y librerías necesarios para desarrollar sobre cada una de las versiones de Android. Por ejemplo, si se desea probar la aplicación en dispositivos con Android 8 y Android 10, se deben descargar las plataformas correspondientes a las versiones 26 y 29, respectivamente. Para ver los subcomponentes de cada plataforma, seleccione la opción "Show Package Details" situada en la parte inferior de la ventana. Para cada versión de Android instalada, se deben tener al menos los siguientes dos elementos:

              ul.lista-ul.lista-p-1.mb-4(data-aos="fade-down")
                li
                  i.fas.fa-cube.c-color-primario.mt-1(style="font-size: 12px;")
                  span Android SDK Platform
                li
                  i.fas.fa-cube.c-color-primario.mt-1(style="font-size: 12px;")
                  span Google APIs
                li
                  i.fas.fa-cube.c-color-primario.mt-1(style="font-size: 12px;")
                  span Intel x86 Atom System Image

          .col-lg-5.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/82.svg",style="max-width: 449px;")
    
    .fondo-personalizado-13
      .fondo-personalizado-13__contenido.pb-5
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido.mb-5
              p.mb-0 #[b Figura 22.] #[em SDK Platforms]
            figure(data-aos="fade-left")
              img.mx-auto(src="@/assets/curso/temas/84.svg",style="max-width: 1028px;",alt='La imagen presenta las opciones de plataformas "Android". En el Manager se encuentran componentes disponibles agrupados en dos pestañas principales: "SDK Platforms" y "SDK Tools".')
    
    .cont-titulo-decorativo.p-2.mt-0.mb-5
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/img-titulo-dec.svg")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 #[em SDK Tools]

    .row.align-items-center.mb-5
      .col-lg-7
        .fondo-color-sistema-o.p-4.borde-14
          p.mb-4(data-aos="fade-left") #[em SDK Tools] son componentes para el SDK que incluyen herramientas para el desarrollo y la depuración. Los indispensables por el momento, que ya deberían aparecer instalados por defecto, son los siguientes:

          ul.lista-ul.lista-p-1.mb-4(data-aos="zoom-in-out")
            li
              i.fas.fa-cube.c-color-primario.mt-1(style="font-size: 12px;")
              span Android SDK Build-Tools
            li
              i.fas.fa-cube.c-color-primario.mt-1(style="font-size: 12px;")
              span Android SDK Platform-Tools
            li
              i.fas.fa-cube.c-color-primario.mt-1(style="font-size: 12px;")
              span Android Emulator

          p.mb-2 Con estos pasos, ya se tendría configurado Android Studio para dar inicio al desarrollo de las aplicaciones.

      .col-lg-5.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/85.png",style="max-width: 502px;")

    
    .fondo-personalizado-13
      .fondo-personalizado-13__contenido.pb-5
        .row.justify-content-center.pb-5
          .col-lg-10
            .titulo-sexto.color-acento-contenido.mb-5
              p.mb-0 #[b Figura 23.] #[em SDK Tools]
            figure(data-aos="flip-up")
              img.mx-auto(src="@/assets/curso/temas/86.svg",style="max-width: 1028px;",alt='La imagen presenta  las opciones de versión para las  herramientas de SDK.')
    
    


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
