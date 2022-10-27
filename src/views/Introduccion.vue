<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-4 En este componente formativo podrá reconocer el marco normativo y conceptual aplicable a la gestión del riesgo de desastres y podrá comprenderlo como un proceso social que puede ser desarrollado de manera organizada y coherente a través de métodos participativos concertados con las comunidades, con el fin de entender y reducir el riesgo, preparar y atender oportunamente un desastre por parte de la comunidad para la construcción de territorios más seguros, sostenibles y resilientes.
    p Le damos la bienvenida al componente formativo “Marco normativo y conceptual de la gestión del riesgo de desastres” en el cual, se describirán los contenidos a trabajar en el desarrollo del resultado de aprendizaje llamado establecer cumplimiento de la normativa asociada con la Gestión del Riesgo de Desastres (GRD), en el marco de la competencia diagnosticar el riesgo de desastres de acuerdo con metodologías y normativa. En cuanto a la normativa se abordarán elementos relacionados con el sector ambiental, el ordenamiento territorial y lo específico a la gestión del riesgo de desastres. En lo que refiere a lo conceptual se tendrán en cuenta los elementos del marco del riesgo de desastres y los instrumentos de seguimiento de los procesos clave de dicha gestión. Lo invitamos a iniciar este recorrido observando el video de introducción del componente formativo.

    figure.mb-5.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
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
