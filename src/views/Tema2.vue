<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-0.pb-md-0
    .titulo-principal.color-acento-contenido(data-aos="fade")
      .titulo-principal__numero
        span 2
      h1 Plataformas de desarrollo móvil nativas
    
    p.mb-4(data-aos="fade") Las plataformas de desarrollo móvil nativas, son aquellas que tienen un desarrollo específico para cada uno de sus sistemas operativos; IOS, Android, o Windows Phone, lo que quiere decir que para cada uno de estos Sistemas Operativos se adapta un lenguaje de desarrollo así:

    .fondo-personalizado-4.pos-1.mb-5
      .fondo-personalizado-4__contenido.pt-4
        .row.justify-content-center
          .col-lg-4.mb-5(data-aos="fade-right")
            .tarjeta-img-1
              figure.tarjeta-img-1__img
                img.mx-auto(src="@/assets/curso/temas/32.png")
              .tarjeta-img-1__texto.p-3.fondo-color-primario
                p Sistema Operativo Móvil: iOS, Lenguajes: Objetive-C, Swift
          .col-lg-4.mb-5(data-aos="fade-up")
            .tarjeta-img-1
              figure.tarjeta-img-1__img
                img.mx-auto(src="@/assets/curso/temas/33.png")
              .tarjeta-img-1__texto.p-3.fondo-color-primario
                p Sistema Operativo Móvil: Android, Lenguajes: Java, Kotlin

          .col-lg-4.mb-5(data-aos="fade-left")
            .tarjeta-img-1
              figure.tarjeta-img-1__img
                img.mx-auto(src="@/assets/curso/temas/34.png")
              .tarjeta-img-1__texto.p-3.fondo-color-primario
                p.mb-0  Sistema Operativo Móvil: Windows Phone
                p Lenguajes: C++, C#

    .row
      .col-lg-8.mb-4.mb-lg-0(data-aos="fade-up")
        p.mb-0 Una de las principales ventajas de las aplicaciones nativas es que pueden aprovechar todas las funcionalidades avanzadas de los dispositivos de cada plataforma, incluidos los procesadores gráficos. Los mayores beneficios de este tipo de aplicaciones siempre serán la flexibilidad y la usabilidad, que son superiores a las de las aplicaciones híbridas. Uno de los principales inconvenientes del desarrollo de las aplicaciones nativas es que tanto el desarrollo como las actualizaciones de estas apps tienen un alto costo.
      .col-lg-4(data-aos="fade-down")
        figure
          img.mx-auto(src="@/assets/curso/temas/35.svg",style="max-width: 400px;")
    
    .cont-titulo-decorativo.p-2.mb-5.mt-lg-2.mt-5(data-aos="fade")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/img-titulo-dec.svg")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 Rendimiento
    
    p.mb-4(data-aos="zoom-in-out") El rendimiento de las aplicaciones nativas es otra de sus características principales, ya que ofrecen mayor velocidad, animaciones avanzadas, transiciones complejas, aprovechamiento total del #[em hardware] (GPS, cámara, sensores, etc.) y un menor consumo de memoria.
    p Ventajas de las aplicaciones nativas:

    .fondo-personalizado-6.pos-1.mb-5
      .fondo-personalizado-6__contenido.pt-5
        .row.justify-content-center(data-aos="flip-up")
          .col-lg-8
            .py-4.py-md-1.px-4.borde-29.mb-2(style="background-color: #4F4415;")
              .row.align-items-center
                .col-md-auto 
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/36.svg",style="max-width: 50px;")
                .col 
                  p.mb-0.text-white.fw-bold Permiten el desarrollo para diferentes tipos de dispositivos como #[em wearables], TV o carros.
            .py-4.py-md-1.px-4.borde-29.mb-2(style="background-color: #892758;")
              .row.align-items-center
                .col-md-auto 
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/36.svg",style="max-width: 50px;")
                .col 
                  p.mb-0.text-white.fw-bold Ofrecen un nivel de seguridad superior al de las aplicaciones híbridas.
            .py-4.py-md-1.px-4.borde-29.mb-2(style="background-color: #5F2789;")
              .row.align-items-center
                .col-md-auto 
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/36.svg",style="max-width: 50px;")
                .col 
                  p.mb-0.text-white.fw-bold Tienen un mayor grado de optimización.
            .py-4.py-md-1.px-4.borde-29.mb-2(style="background-color: #760ED3;")
              .row.align-items-center
                .col-md-auto 
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/36.svg",style="max-width: 50px;")
                .col 
                  p.mb-0.text-white.fw-bold Acceso a funcionalidades de accesibilidad nativas.
            .py-4.py-md-1.px-4.borde-29.mb-2(style="background-color: #15464F;")
              .row.align-items-center
                .col-md-auto 
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/36.svg",style="max-width: 50px;")
                .col 
                  p.mb-0.text-white.fw-bold Proporcionan un entorno que permite el uso de herramientas de arrastrar y soltar para el diseño de interfaces de usuario.
            .py-4.py-md-1.px-4.borde-29(style="background-color: #78401F;")
              .row.align-items-center
                .col-md-auto 
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/36.svg",style="max-width: 50px;")
                .col 
                  p.mb-0.text-white.fw-bold Disponen de SDKs para la optimización de librerías.
    
        .cont-titulo-decorativo.p-2.mt-5(data-aos="fade")
          .row
            .col-auto.pe-0
              figure
                img(src="@/assets/curso/temas/img-titulo-dec.svg")
            .col.align-self-end
              h3.mt-3.mb-0.me-2 Arquitectura de las aplicaciones móviles
    
    p.mb-5(data-aos="fade") Básicamente, el desarrollo de las #[em apps] móviles se compone de dos partes, las cuales se diferencian por su código: el #[em front-end] y la parte de web #[em services].

    .row.justify-content-center.mb-5
      .col-lg-5.mb-4(data-aos="fade-right")
        .tarjeta-personalizada-1.p-5.h-100.pb-4
          .burbuja-1.fondo-color-acento-contenido.me-auto.mb-5
            figure.p-1
              img.mx-auto(src="@/assets/curso/temas/37.svg",style="max-width: 57px;")
          p.mb-5.text-white El #[em front-end] también llamado parte cliente, es el segmento de lógica de visualización e interacción con el usuario, que se ejecuta en los dispositivos a través de su sistema operativo, como Android o iOS.
      .col-lg-5.mb-4(data-aos="fade-left")
        .tarjeta-personalizada-1.p-5.h-100.pb-4
          .burbuja-1.fondo-color-acento-contenido.me-auto.mb-5
            figure.p-1
              img.mx-auto(src="@/assets/curso/temas/38.svg",style="max-width: 58px;")
          p.mb-5.text-white La parte de #[em web services], o parte servidora, es donde se encuentra la lógica del negocio de las aplicaciones, la persistencia de datos y la interacción con otras plataformas.
    
    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-2
          p.mb-0 #[b Figura 5.] Arquitectura de una #[em app]
    .fondo-personalizado-3.pos-1
      .fondo-personalizado-3__contenido.pb-5.pt-4
        .row.justify-content-center.pb-5
          .col-lg-8.pb-3
            figure(data-aos="zoom-in-out")
              img.mx-auto(src="@/assets/curso/temas/40.svg",style="max-width: 820px;",alt="La figura  presenta un esquema de arquitectura de red donde diferentes tipos de clientes, como Android, iOS, Windows Mobile, Blackberry y Windows Desktop, se conectan a través de HTTP/S a un servidor denominado Magic Server. Este servidor gestiona metadatos de la aplicación y datos de la aplicación, facilitando la comunicación y el intercambio de información entre los clientes y el servidor.")



</template>

<script>
export default {
  name: 'Tema2',
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
