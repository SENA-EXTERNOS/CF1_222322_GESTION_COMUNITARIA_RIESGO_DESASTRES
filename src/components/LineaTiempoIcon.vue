<template lang="pug">
.linea-tiempo-icon
  .linea-tiempo-icon__row(
    v-for="(item,index) of datos"
    :ref="'linea-tiempo-item-'+index"
  )
    .linea-tiempo-icon__content
      .linea-tiempo-icon__text
        h3.mb-2 {{item.titulo}}
        span(v-html="item.texto")

    .linea-tiempo-icon__content
      .linea-tiempo-icon__icon
        .linea-tiempo-icon__icon__container
          img(:src='item.img')
</template>

<script>
export default {
  name: 'LineaTiempoIcon',
  props: {
    datos: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="sass"></style>
