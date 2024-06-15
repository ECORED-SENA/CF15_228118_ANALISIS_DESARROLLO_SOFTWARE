<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.align-items-center.mb-4
      .col-md-2(data-aos="fade-right")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/1.svg",style="max-width: 123px;")
      .col-md-10(data-aos="fade-left")
        p.mb-0 Sin duda, los dispositivos móviles son parte de nuestro día a día y cada vez son más avanzados. La creciente demanda de #[em software] específico para estos dispositivos ha generado nuevos desafíos para los desarrolladores, ya que este tipo de aplicaciones posee características propias, restricciones y necesidades únicas.
    
    .fondo-personalizado-1.pos-1.mb-4
      .fondo-personalizado-1__contenido.pb-5
        .row.mb-4.align-items-center
          .col-lg-8
            .fondo-color-sistema-i.p-4.borde-10.mb-4(data-aos="fade-down")
              p.mb-0 Es importante definir cuáles serán las tecnologías más adecuadas para la programación de móviles, y una de las arquitecturas más implantadas es la proporcionada por el sistema Android. En los dispositivos móviles actuales pueden utilizarse tres tipos de aplicaciones diferentes: nativas, #[b híbridas y web]. En este componente se tratarán las aplicaciones móviles nativas.
            .fondo-color-primario.p-4.borde-10(data-aos="fade-up")
              p.mb-0.text-white Las aplicaciones nativas son aquellas que enfocan su desarrollo en una plataforma específica como #[b Android, iOS y Windows], haciendo uso de su correspondiente lenguaje de programación, el cual permite tener compatibilidad con sus características. En el caso de Android, se utilizan lenguajes como Java y Kotlin; para la plataforma iOS, Objective-C o Swift; y para la plataforma Windows, los lenguajes C++ o C#.
          .col-lg-4.order-first.order-lg-last
            figure.mb-4.mb-lg-0(data-aos="fade-left")
              img.mx-auto(src="@/assets/curso/temas/2.svg",style="max-width: 400px;")
        
        .fondo-color-sistema-g.p-4.borde-10
          .row.align-items-center 
            .col-lg-2(data-aos="fade")
              figure.mb-4.mb-lg-0
                img.mx-auto(src="@/assets/curso/temas/3.png",style="max-width: 327px;")
            .col-lg-10
              p.mb-0(data-aos="fade-right") Las aplicaciones nativas son las más eficientes y pueden salir a producción en las tiendas más populares como #[b App Store, Google Play y AppGallery], entre otras. Una de sus características principales es que permiten enviar notificaciones para realizar promociones comerciales de negocios, productos, etc. En cuanto al tiempo de desarrollo, este es mucho más largo y, por tanto, son más costosas debido a la especialización que deben tener los programadores en cada lenguaje. Su uso se encuentra en aplicaciones complejas como editores de video, aplicaciones de medicina, aplicaciones de ingeniería,  entre otros.
    
    .row(data-aos="zoom-in-out")
      .col-auto.d-none.d-md-block 
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/5.svg",style="max-width: 85px;")
      .col 
        p.mb-0 Desde el punto de vista de los programadores, uno de los mayores inconvenientes es que para que una misma aplicación pueda utilizarse en dos o más plataformas distintas, hay que desarrollar la misma aplicación en los diferentes lenguajes, iniciando desde cero y necesitando más tiempo de desarrollo y mayor costo.

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
