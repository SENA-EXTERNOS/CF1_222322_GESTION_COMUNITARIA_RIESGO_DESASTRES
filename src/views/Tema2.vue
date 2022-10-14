<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Marco conceptual en la gestión del riesgo de desastres

    .row.justify-content-around.aling-items-center.mb-5
      .col-lg-12.mb-lg-0
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="fade-up")
          .bloque-texto-g__img1(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-img-01.svg')})`}"
          )
          .bloque-texto-g__texto1.p-4
           p.mb-0 Al trabajar la Gestión del Riesgo de Desastres (GRD) en el marco de la gestión de procesos permite que se pueda controlar y dar seguimiento transversal de los riesgos y permite la inclusión de capacidades y acciones que articulan de forma integral a aquellas entidades pertenecientes al SNGRD. Además, promueve una transformación en la forma de afrontar los problemas relacionados con los desastres.

    figure
      img(src="@/assets/curso/temas/tema2/tema2-img-decorativa-01.svg").tema2-decorativa-01

    p.mt-5.mb-5 La Gestión del Riesgo de Desastres (GRD) está fundamentada en el conocimiento del riesgo, para con ello diseñar las acciones prospectivas y de corrección del riesgo basadas en información real y verificable. Además, fortalece el tratamiento y manejo de desastres, el cual no sólo se limita a la atención y a la respuesta, sino a una recuperación que no solo llegue a replicar las condiciones preexistentes al desastre, sino que promuevan la transformación del escenario de riesgo y permita que el territorio sea seguro y ambientalmente sostenible.

    .row.justify-content-center.align-items-center
      .col-lg-5.mb-lg-0.mt-lg-3
        h4.mb-5 Marco de la Gestión del Riesgo de Desastres (MGRD)

    .row.justify-content-center.align-items-center.mb-5
      .col-10
        figure(data-aos="fade-up")
          img(src="@/assets/curso/temas/tema2/tema2-img-02.svg") 
    
    img(src="@/assets/curso/temas/tema2/tema2-img-decorativa-02.svg").tema2-decorativa-02

    .tarjeta.color-azul-claro.p-8.p-md-5.mb-5  
      p.mt-3.mb-5 En términos generales, las transformaciones que se impulsan por medio de la normativa son: Fuente: (Baas, Ramasamy, Dey de Pryck, & Battista, 2009).
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
        .tarjeta--avatar
          img(src='@/assets/curso/temas/tema2/tema2-img-03.svg' alt='AvatarTop')
          .tarjeta.color_azul.p-4
            p.text-center El proceso de GRD se consolida como una política que promueve la seguridad y sostenibilidad del territorio, la mejora de la calidad de vida y los derechos colectivos de la población en general y está íntimamente ligada con la planeación del territorio, la participación y concertación comunitaria y la gestión ambiental.
        .tarjeta--avatar
          img(src='@/assets/curso/temas/tema2/tema2-img-04.svg' alt='AvatarTop')
          .tarjeta.color_azul.p-4               
            p.text-center Los procesos sociales en la GRD promueven la protección, la mejora de la calidad de vida, el bienestar, la seguridad y el desarrollo sustentable del territorio y sus comunidades.
        .tarjeta--avatar
          img(src='@/assets/curso/temas/tema2/tema2-img-05.svg' alt='AvatarTop')
          .tarjeta.color_azul.p-4               
            p.text-center Reconoce que todos los actores desde su condición y dinámica social, cultural, económica y política particular en el proceso de Gestión del Riesgo son corresponsables y es indispensable su participación.
        .tarjeta--avatar
          img(src='@/assets/curso/temas/tema2/tema2-img-06.svg' alt='AvatarTop')
          .tarjeta.color_azul.p-4               
            p.text-center.mt-2 El conocimiento del riesgo es indispensable para la promoción de la conciencia frente al riesgo y como forma de prevención, reducción y manejo de este.
        .tarjeta--avatar
          img(src='@/assets/curso/temas/tema2/tema2-img-07.svg' alt='AvatarTop')
          .tarjeta.color_azul.p-4               
            p.text-center.mt-2 Las acciones de reducción del riesgo son acciones tendientes para disminuir las condiciones de riesgo existentes y evitar la materialización de nuevos riesgos.
        
    #t_1_1.titulo-segundo.color-acento-contenido.mt-5
      h2 2.1 Elementos marco del riesgo de desastres

    p En el Marco de Acción de Hyogo 2005 - 2015 llamado construyendo la Resiliencia de las Naciones y Comunidades frente a Desastres (MAH) muestra los elementos fundamentales para la GRD priorizados en cinco acciones para el logro de las metas estratégicas de la Conferencia Mundial sobre Reducción de Desastres. 






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
