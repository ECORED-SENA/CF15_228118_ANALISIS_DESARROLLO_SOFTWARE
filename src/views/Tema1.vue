<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Enfoque metodológico para el desarrollo de aplicaciones móviles nativas
    
    .fondo-personalizado-3.mb-5
      .fondo-personalizado-3__contenido.pb-5
        .row.align-items-end.mb-5
          .col-lg-8
            p.mb-0.mb-4(data-aos="fade") Actualmente, las metodologías ágiles tienen una gran notoriedad, ya que ofrecen una buena solución para desarrollar proyectos en tiempos más cortos, especialmente aquellos proyectos que constantemente experimentan cambios en sus requisitos. Las aplicaciones para dispositivos móviles son un buen ejemplo de esto, ya que requieren una variedad de características como #[b portabilidad, movilidad y adaptación], entre otras. Aunque hay muchas aplicaciones para dispositivos móviles que funcionan en diferentes plataformas, no siempre cumplen totalmente las expectativas de los usuarios debido a su baja calidad en el desarrollo. Esto se debe a que el uso de metodologías no es una prioridad en este tipo de aplicaciones, ignorando los métodos de ingeniería que son los que garantizan el mantenimiento y calidad de las aplicaciones.

            .fondo-personalizado-2.p-4.borde-5(data-aos="fade")
              .row.align-items-center
                .col-md-auto 
                  .d-flex.mb-4.mb-md-0
                    .burbuja-1.fondo-color-acento-contenido.mx-auto
                      figure.p-1
                        img.mx-auto(src="@/assets/curso/temas/6.svg",style="max-width: 72px;")
                .col 
                  p.c-color-acento-contenido.mb-4.fw-bold Según, Letelier y Canos (2003)
                  p.mb-0.text-white Las metodologías ágiles son procesos para desarrollar #[em software] de manera rápida y con gran facilidad de adopción por los equipos de trabajo. Se han seleccionado las metodologías ágiles más referenciadas para emplearlas en el desarrollo de aplicaciones móviles, lo cual resulta muy conveniente teniendo en cuenta el crecimiento de los proyectos para estas tecnologías.
          .col-lg-4.order-first.order-lg-last(data-aos="fade-left")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/7.svg",style="max-width: 400px;")
        
        .row.mb-5(data-aos="fade-down")
          .col-auto.d-none.d-md-block
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/8.svg",style="max-width: 85px;")
          .col
            p.mb-0 A continuación, se describen los conceptos principales para la introducción al uso de metodologías de desarrollo:

        .row.justify-content-center.mb-3(data-aos="fade")
          .col-lg-5.mb-4(data-aos="fade-right")
            .tarjeta-personalizada-1.p-5.h-100.pb-4
              .burbuja-1.fondo-color-acento-contenido.me-auto.mb-2
                figure.p-1
                  img.mx-auto(src="@/assets/curso/temas/9.svg",style="max-width: 66px;")
              br
              h3.mb-4.fondo-color-acento-contenido.d-inline-block.px-2.pt-1 La metodología según Avison y Fitzgerald (2006):
              p.mb-0.text-white Contribuye en la implementación de nuevos sistemas de información utilizando un conjunto de métodos, herramientas y documentos auxiliares. Una metodología se divide en fases y subfases para planificar, gestionar y controlar el proyecto. También permite seleccionar las técnicas más indicadas en cada proceso de un proyecto.
          .col-lg-5.mb-4(data-aos="fade-left")
            .tarjeta-personalizada-1.p-5.h-100.pb-4
              .burbuja-1.fondo-color-acento-contenido.me-auto.mb-2
                figure.p-1
                  img.mx-auto(src="@/assets/curso/temas/10.svg",style="max-width: 69px;")
              br
              h3.mb-4.fondo-color-acento-contenido.d-inline-block.px-2.pt-1 La metodología ágil según Amaya Balaguera (2015):
              p.mb-0.text-white Estas metodologías surgen como una alternativa a las metodologías tradicionales. Su enfoque se basa en los principios del manifiesto ágil, que propone un desarrollo iterativo. Su objetivo principal se centra en realizar una mejor captura de los requisitos cambiantes, la gestión de riesgos y la reducción del tiempo de desarrollo.
        
        .row(data-aos="fade-up")
          .col-auto.d-none.d-md-block
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/8.svg",style="max-width: 85px;")
          .col
            p.mb-0 Entre las principales metodologías ágiles aplicadas en el desarrollo de aplicaciones móviles, se destacan las siguientes:

        .cont-titulo-decorativo.p-2.mt-3.mb-5(data-aos="flip-up")
          .row
            .col-auto.pe-0
              figure
                img(src="@/assets/curso/temas/img-titulo-dec.svg")
            .col.align-self-end
              h3.mt-3.mb-0.me-2 Extreme Programming (XP)
        
        .row(data-aos="zoom-in-out")
          .col-lg-7
            p.mb-0 Es una metodología liviana, aplicable en grupos de desarrollo pequeños y medianos, que se centra en requerimientos no exactos y en continuo cambio. Se caracteriza por tener un ciclo de vida dinámico, a través de ciclos de desarrollo cortos denominados iteraciones. Sus fases son análisis, diseño, desarrollo y pruebas, en las cuales se aplican 12 prácticas.
          .col-lg-5.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/11.png",style="max-width: 505px;")

    .fondo-personalizado-4.mb-5
      .fondo-personalizado-4__contenido.pb-5
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 1.] Prácticas de XP
            figure(data-aos="fade")
              img.mx-auto.d-none.d-lg-block(src="@/assets/curso/temas/13.svg",style="max-width: 1030px;",alt="Se presentan las fases planificación, diseño, codificación, pruebas y lanzamiento de prácticas XP.")
              img.mx-auto.d-lg-none(src="@/assets/curso/temas/14.svg",style="max-width: 458px;",alt="Se presentan las fases planificación, diseño, codificación, pruebas y lanzamiento de prácticas XP.")

    .row
      .col-auto.d-none.d-md-block
        figure.mb-4.mb-lg-0(data-aos="fade")
          img.mx-auto(src="@/assets/curso/temas/16.svg",style="max-width: 85px;")
      .col
        p.mb-0(data-aos="fade-right") Así pues, XP no es solo un conjunto de técnicas, sino un conjunto de principios probados y fiables con características de las metodologías convencionales, pero llevadas a un nivel extremo.
    
    .cont-titulo-decorativo.p-2.mt-4.mb-5(data-aos="flip-up")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/img-titulo-dec.svg")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 #[em SCRUM]
    
    p.mb-4(data-aos="fade-up") #[em Scrum], según Takeuchi & Nonaka (1986), presenta un proceso adaptativo, rápido y autoorganizado para el desarrollo de productos, centrado en la gestión de proyectos en situaciones que son difíciles de planificar a futuro. El término "Scrum" proviene del famoso juego de rugby y hace referencia a la forma en que se reintroduce un balón que ha salido del campo al terreno de juego de manera colectiva.
    p.mb-4(data-aos="fade-down") Este modelo se basa en el desarrollo incremental, es decir, conforme avanzan las fases y la iteración, mayor es el tamaño del proyecto que se está desarrollando. Los procesos que utiliza son:

    .row.align-items-end.mb-3
      .col-lg-6
        .row 
          .col-lg-4.col-md-6.mb-4(data-aos="fade")
            .fondo-color-primario.borde-20.p-4.pb-5.text-center.h-100
              i.fas.fa-cube.c-color-acento-contenido.mb-3(style="font-size: 28px;")
              h4.mb-0.text-white #[em Product Backlog]
          .col-lg-4.col-md-6.mb-4(data-aos="fade")
            .fondo-color-sistema-k.borde-20.p-4.pb-5.text-center.h-100
              i.fas.fa-cube.c-color-acento-contenido.mb-3(style="font-size: 28px;")
              h4.mb-0.text-white #[em Sprint Backlog]
          .col-lg-4.col-md-6.mb-4(data-aos="fade")
            .fondo-color-sistema-k.borde-20.p-4.pb-5.text-center.h-100
              i.fas.fa-cube.c-color-acento-contenido.mb-3(style="font-size: 28px;")
              h4.mb-0.text-white #[em Sprint Planning Meeting]
          .col-lg-4.col-md-6.mb-4(data-aos="fade")
            .fondo-color-sistema-k.borde-20.p-4.pb-5.text-center.h-100
              i.fas.fa-cube.c-color-acento-contenido.mb-3(style="font-size: 28px;")
              h4.mb-0.text-white #[em Daily Scrum]
          .col-lg-4.col-md-6.mb-4(data-aos="fade")
            .fondo-color-primario.borde-20.p-4.pb-5.text-center.h-100
              i.fas.fa-cube.c-color-acento-contenido.mb-3(style="font-size: 28px;")
              h4.mb-0.text-white #[em Sprint Review]
          .col-lg-4.col-md-6.mb-4(data-aos="fade")
            .fondo-color-sistema-k.borde-20.p-4.pb-5.text-center.h-100
              i.fas.fa-cube.c-color-acento-contenido.mb-3(style="font-size: 28px;")
              h4.mb-0.text-white #[em Sprint Retrospective]

      .col-lg-6.order-first.order-lg-last.mb-4
        .fondo-personalizado-5
          figure.pb-4(data-aos="flip-up")
            img.mx-auto(src="@/assets/curso/temas/17.svg",style="max-width: 359px;")
    
    .row.pt-5.mb-5(data-aos="zoom-in-out")
      .col-auto.d-none.d-md-block
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/18.svg",style="max-width: 85px;")
      .col
        p.mb-0 Consiste en realizar un análisis de los requerimientos del sistema (#[em Product Backlog]), señalar cuáles serán los objetivos a corto o mediano plazo dentro de un #[em sprint], es decir, en la fase de desarrollo. Posteriormente, los desarrolladores realizan su trabajo, se efectúan algunas pruebas y se retroalimenta de acuerdo con lo conseguido al terminar la última fase.
    
    .titulo-sexto.color-acento-contenido(data-aos="flip-up")
      p.mb-0 #[b Figura 2.] Modelo ágil #[em Scrum]
    .fondo-personalizado-4.pos-1.mb-5
      .fondo-personalizado-4__contenido.pb-4.pt-5
        figure
          img.mx-auto(src="@/assets/curso/temas/19.svg",style="max-width: 1027px;",alt="La figura  presenta un resumen del marco de trabajo Agile Scrum, destacando roles clave como el Product Owner y el Scrum Master, y procesos como reuniones diarias de Scrum, planificación de sprints y retrospectivas. Se ilustra cómo las tareas se mueven desde el backlog del producto hasta su finalización a lo largo de un sprint que dura de 2 a 4 semanas.")

    .row.mb-5
      .col-auto.d-none.d-md-block(data-aos="fade-right")
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/16.svg",style="max-width: 85px;")
      .col(data-aos="fade-left")
        p.mb-0 A continuación, se explora el enfoque iterativo e incremental que Scrum ofrece para la gestión de proyectos de #[em software]:
    
    figure.mb-5(data-aos="zoom-in-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/DSO1YzSAx4s?si=qHkm-SHyMtqXgQco" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption Video. Scrum y la especificación de requisitos
    
    .cont-titulo-decorativo.p-2.mt-5.mb-5(data-aos="fade-left")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/img-titulo-dec.svg")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 #[em Test Driven Development (TDD)]
    
    .row.mb-4(data-aos="fade-right")
      .col-lg-7
        p.mb-0 Según Astel (2003), el #[em Test Driven Development] es un enfoque de desarrollo que mantiene un exhaustivo conjunto de pruebas realizadas por el programador. Su objetivo principal es que ninguna parte del código avance a producción sin antes realizar las pruebas asociadas y obtener la aprobación correspondiente. Se trata de un desarrollo orientado a las pruebas, que cambia la mentalidad del equipo de desarrollo, agilizando los resultados y aumentando la calidad del producto. La tendencia actual es integrar TDD en cualquier metodología, ya sea ágil (Scrum Alliance - TDD and Scrum, 2011) o tradicional (Letelier et al., s. f.), para aprovechar los beneficios de practicar una metodología que permite corregir errores constantemente, asegurar la calidad del producto y protegerse de errores, tanto malintencionados como humanos.
      .col-lg-5.order-first.order-lg-last
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/20.png",style="max-width: 505px;")
    
    .fondo-personalizado-4.pos-2
      .fondo-personalizado-4__contenido.pb-5
        .row.justify-content-center 
          .col-lg-5
            .titulo-sexto.color-acento-contenido.d-inline-block
              p.mb-0 #[b Figura 3.] #[em Test Driven (TDD)]
        figure
          img.mx-auto(src="@/assets/curso/temas/21.svg",style="max-width: 820px;",alt="La figura presenta  un flujo de trabajo cíclico para el desarrollo de software, empezando por Inicio y terminando en Fin. El proceso incluye las etapas de Diseñar o mejorar pruebas, Ejecutar pruebas y Codificar/Desarrollar Software. Después de codificar, se realiza una Refactorización que puede llevar de nuevo al inicio del ciclo para una nueva iteración.")
    
    .cont-titulo-decorativo.p-2.mt-3.mb-5(data-aos="zoom-in-out")
      .row
        .col-auto.pe-0
          figure
            img(src="@/assets/curso/temas/img-titulo-dec.svg")
        .col.align-self-end
          h3.mt-3.mb-0.me-2 #[em Mobile]-D
    .fondo-personalizado-6.mb-5
      .fondo-personalizado-6__contenido
        .row.mb-5
          .col-lg-7(data-aos="fade")
            p.mb-0 Según Abrahamsson (2004) es una metodología de desarrollo diseñada específicamente para el desarrollo de aplicaciones móviles, que integra prácticas ágiles como #[em Extreme Programming y Crystal]. Presenta características tales como la orientación a pruebas, la programación en parejas, la integración continua y la refactorización, además de las tareas de mejora del proceso de #[em software]. La metodología incluye las fases de exploración, inicialización, producción, estabilización y pruebas. Cada fase cuenta con un día de planificación y un día de entrega.
          .col-lg-5.order-first.order-lg-last
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/22.png",style="max-width: 505px;")


        .row.justify-content-center 
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 4.] Ciclo de desarrollo #[em Mobile-D]
            figure(data-aos="flip-up")
              img.mx-auto(src="@/assets/curso/temas/23.svg",style="max-width: 1029px;",alt="La figura despliega un diagrama de flujo para el desarrollo de software, organizado en etapas y fases desde la Exploración hasta las Pruebas del Sistema. Detalla actividades como configuración, planeación y liberación, repitiendo algunas actividades en varias fases para subrayar un proceso iterativo y progresivo.")

    .row.mb-5(data-aos="fade-right")
      .col-auto.d-none.d-md-block
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/16.svg",style="max-width: 85px;")
      .col
        p.mb-0 A continuación, se explica cada fase:
    
    TabsB.color-acento-botones.mb-5(data-aos="flip-up")
      .p-3.fondo-personalizado-7(titulo="<h4>Exploración</h4>" :icono="require('@/assets/curso/temas/25.svg')")
        .row.justify-content-center.mb-5.mt-4
          .col-lg-11
            .row.align-items-center
              .col-lg-7.mb-4.mb-lg-0
                p.mb-4.fw-bold Exploración
                p.mb-0 En esta fase se recolecta la información necesaria para la adecuada orientación del proyecto, sus requisitos, su alcance y las partes interesadas en el producto (#[em Stakeholders]).
              .col-lg-5.order-last.order-lg-first
                figure
                  img.mx-auto(src="@/assets/curso/temas/26.png",style="max-width: 400px;")
      .p-3.fondo-personalizado-7(titulo="<h4>Inicialización</h4>" :icono="require('@/assets/curso/temas/25.svg')")
        .row.justify-content-center.mb-5.mt-4
          .col-lg-11
            .row.align-items-center
              .col-lg-7.mb-4.mb-lg-0
                p.mb-4.fw-bold Inicialización
                p.mb-0 Esta fase involucra la preparación de recursos físicos y tecnológicos, como la formación del equipo de trabajo y la disposición de los equipos tecnológicos de uso.
              .col-lg-5.order-last.order-lg-first
                figure
                  img.mx-auto(src="@/assets/curso/temas/27.png",style="max-width: 400px;")
      .p-3.fondo-personalizado-7(titulo="<h4>Producción</h4>" :icono="require('@/assets/curso/temas/25.svg')")
        .row.justify-content-center.mb-5.mt-4
          .col-lg-11
            .row.align-items-center
              .col-lg-7.mb-4.mb-lg-0
                p.mb-4.fw-bold Producción
                p.mb-4 Implementación de las funcionalidades que requiere el producto mediante un desarrollo iterativo, dividido en tres etapas:
                ul.lista-ul 
                  li.mb-3
                    span.fondo-color-acento-contenido.fw-bold.d-inline-flex.px-1.align-items-center.justify-content-center a)
                    span Día de planificación, con ejecución de #[em tests] de aceptación.
                  li.mb-3
                    span.fondo-color-acento-contenido.fw-bold.d-inline-flex.px-1.align-items-center.justify-content-center b)
                    span Día de trabajo, para el desarrollo de funcionalidades.
                  li.mb-3
                    span.fondo-color-acento-contenido.fw-bold.d-inline-flex.px-1.align-items-center.justify-content-center c)
                    span Día de entrega de funcionalidad.
              .col-lg-5.order-last.order-lg-first
                figure
                  img.mx-auto(src="@/assets/curso/temas/28.png",style="max-width: 400px;")
      .p-3.fondo-personalizado-7(titulo="<h4>Estabilización</h4>" :icono="require('@/assets/curso/temas/25.svg')")
        .row.justify-content-center.mb-5.mt-4
          .col-lg-11
            .row
              .col-lg-7.mb-4.mb-lg-0
                p.mb-4.fw-bold Estabilización
                p.mb-4 Fase de integración y verificación del correcto funcionamiento del sistema y la calidad del desarrollo. Incluye también la documentación del proyecto.
              .col-lg-5.order-last.order-lg-first
                figure
                  img.mx-auto(src="@/assets/curso/temas/29.png",style="max-width: 400px;")
      .p-3.fondo-personalizado-7(titulo="<h4>Pruebas del sistema</h4>" :icono="require('@/assets/curso/temas/25.svg')")
        .row.justify-content-center.mb-5.mt-4
          .col-lg-11
            .row
              .col-lg-7.mb-4.mb-lg-0
                p.mb-4.fw-bold Pruebas del sistema
                p.mb-4 Verificación del funcionamiento de todos los requerimientos establecidos por el cliente y solución de errores encontrados.
              .col-lg-5.order-last.order-lg-first
                figure
                  img.mx-auto(src="@/assets/curso/temas/30.png",style="max-width: 400px;")
    

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
