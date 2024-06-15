<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 A continuación, se presenta una síntesis de la temática estudiada en el componente formativo.

    .row.justify-content-center
      .col-lg-10.mb-5
        .fondo-color-sistema-h.p-3.borde-20
          figure
            img(src="@/assets/curso/temas/sintesis.svg", alt="La figura proporciona un resumen sobre el desarrollo de aplicaciones móviles nativas, detallando los lenguajes de programación específicos para Android, iOS y Windows, como Java, Kotlin, Objective-C, Swift, C++ y C#. Explica las metodologías de desarrollo ágil, incluyendo Agile, Extreme Programming, Scrum, Test Driven Development y Mobile-D, destacando sus características y beneficios. Además, menciona las ventajas de las aplicaciones nativas, como mejor rendimiento y mayor aprovechamiento del hardware. Finalmente, aborda el uso de Android Studio para el desarrollo en Android, describiendo los pasos desde la configuración del entorno hasta la publicación de la aplicación.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
