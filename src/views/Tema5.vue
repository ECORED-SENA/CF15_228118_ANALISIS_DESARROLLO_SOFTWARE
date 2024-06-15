<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Componentes de una aplicación Android
    
    .fondo-personalizado-2.borde-11.py-4.px-4.px-md-5.mb-5
      .row.align-items-center
        .col-md-auto(data-aos="fade-right")
          .d-flex.mb-4.mb-md-0
            .burbuja-1.fondo-color-acento-contenido.mx-auto
              figure.p-1
                img.mx-auto(src="@/assets/curso/temas/90.svg",style="max-width: 69px;")
        .col(data-aos="fade-left")
          p.mb-0.text-white Los componentes de la aplicación son mecanismos de creación básicos de una aplicación para Android. Cada componente es un punto de entrada por el que el sistema o un usuario ingresan a una aplicación. Algunos componentes dependen de otros.
    
    .fondo-personalizado-14.mb-5(data-aos="flip-up")
      img.imgf-1(src="@/assets/curso/temas/113.png")
      img.imgf-2(src="@/assets/curso/temas/114.png")
      img.imgf-3(src="@/assets/curso/temas/115.png")
      img.imgf-4(src="@/assets/curso/temas/116.png")
      img.imgf-5(src="@/assets/curso/temas/117.png")
      .fondo-personalizado-14__contenido.pe-3.ps-3.ps-lg-0.pt-5
        .row.align-items-center(data-aos="zoom-in-out")
          .col-lg-4
            figure.mb-4.mb-lg-0.ps-4
              img.mx-auto(src="@/assets/curso/temas/91.svg",style="max-width: 362px;")
          .col-lg-8
            SlyderF.slider-personalizado-2.mb-3(columnas="col-lg-6").pb-4
              .d-flex.mx-auto.h-100
                .row.justify-content-center
                  .col-lg-12.col-md-8
                    .position-relative.borde-22.overflow-hidden.h-100
                      figure.position-absolute(style="z-index: -1;")
                        img.mx-auto(src="@/assets/curso/temas/92.png")
                      .fondo-color-primario.p-4.h-100(style="margin-top: 8.5rem;")
                        p.mb-4.c-color-acento-contenido.text-center.fw-bold Actividades
                        p.mb-0.text-white.text-center Representan el componente principal de la interfaz gráfica de una aplicación Android, correspondiendo cada una a una pantalla individual con una interfaz de usuario. Ejemplo: Una aplicación de fotos puede tener una actividad para mostrar opciones de edición y otra para realizar la edición.
              .d-flex.mx-auto.h-100
                .row.justify-content-center
                  .col-lg-12.col-md-8
                    .position-relative.borde-22.overflow-hidden.h-100
                      figure.position-absolute(style="z-index: -1;")
                        img.mx-auto(src="@/assets/curso/temas/93.png")
                      .fondo-color-primario.p-4.h-100(style="margin-top: 8.5rem;")
                        p.mb-4.c-color-acento-contenido.text-center.fw-bold Servicios
                        p.mb-0.text-white.text-center Componentes sin interfaz gráfica que se ejecutan en segundo plano. Son similares a los servicios de otros sistemas operativos y pueden realizar diversas acciones, como actualizar datos o lanzar notificaciones. En ciertos casos, pueden mostrar elementos visuales para interactuar con el usuario.
              .d-flex.mx-auto.h-100
                .row.justify-content-center
                  .col-lg-12.col-md-8
                    .position-relative.borde-22.overflow-hidden.h-100
                      figure.position-absolute(style="z-index: -1;")
                        img.mx-auto(src="@/assets/curso/temas/94.png")
                      .fondo-color-primario.p-4.h-100(style="margin-top: 8.5rem;")
                        p.mb-4.c-color-acento-contenido.text-center.fw-bold Proveedores de contenido
                        p.mb-0.text-white.text-center Mecanismos en Android para compartir datos entre aplicaciones. Permiten compartir datos sin revelar detalles sobre su almacenamiento interno o estructura. También facilitan el acceso a los datos de una aplicación a través de los proveedores de contenido definidos por otras aplicaciones.
              .d-flex.mx-auto.h-100
                .row.justify-content-center
                  .col-lg-12.col-md-8
                    .position-relative.borde-22.overflow-hidden.h-100
                      figure.position-absolute(style="z-index: -1;")
                        img.mx-auto(src="@/assets/curso/temas/95.png")
                      .fondo-color-primario.p-4.h-100(style="margin-top: 8.5rem;")
                        p.mb-4.c-color-acento-contenido.text-center.fw-bold Receptores de emisiones
                        p.mb-0.text-white.text-center Componentes que detectan y reaccionan a mensajes o eventos globales generados por el sistema o por otras aplicaciones. Ejemplos incluyen la detección de batería baja, recepción de SMS, o inserción de una tarjeta SD. Estos mensajes son #[em broadcast], es decir, no dirigidos a una aplicación específica.
            

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
