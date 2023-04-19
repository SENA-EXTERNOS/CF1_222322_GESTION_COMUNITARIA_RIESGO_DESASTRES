<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p Apreciado aprendiz, bienvenido a este componente formativo, donde se abordarán temas relacionados con el sector ambiental, el ordenamiento territorial y lo específico con la gestión del riesgo de desastres. En lo que se refiere a lo conceptual, se tendrán en cuenta los elementos del marco del riesgo de desastres y los instrumentos de seguimiento de los procesos claves de dicha gestión.

    p.mb-5 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo:


    figure.mb-5.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/tfoCfQiwUlQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
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
