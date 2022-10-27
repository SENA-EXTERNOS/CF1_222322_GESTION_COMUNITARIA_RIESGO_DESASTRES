<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Marco conceptual en la gestión del riesgo de desastres

    .row.justify-content-around.aling-items-center.mb-1
      .col-lg-12.mb-lg-0
        .bloque-texto-g.p-3.p-sm-4.p-md-5(data-aos="fade-up")
          .bloque-texto-g__img1-2(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-img-01.svg')})`}"
          )
          .bloque-texto-g__texto1-2.p-4
           p.mb-0 Al trabajar la Gestión del Riesgo de Desastres (GRD) en el marco de la gestión de procesos permite que se pueda controlar y dar seguimiento transversal de los riesgos y permite la inclusión de capacidades y acciones que articulan de forma integral a aquellas entidades pertenecientes al SNGRD. Además, promueve una transformación en la forma de afrontar los problemas relacionados con los desastres.
    
    
    .row.mt-2
      p.mt-5.mb-5 La Gestión del Riesgo de Desastres (GRD) está fundamentada en el conocimiento del riesgo, para con ello diseñar las acciones prospectivas y de corrección del riesgo basadas en información real y verificable. Además, fortalece el tratamiento y manejo de desastres, el cual no sólo se limita a la atención y a la respuesta, sino a una recuperación que no solo llegue a replicar las condiciones preexistentes al desastre, sino que promuevan la transformación del escenario de riesgo y permita que el territorio sea seguro y ambientalmente sostenible.

    .row.justify-content-center.align-items-center
      .col-lg-6.mb-lg-0.mt-lg-3
        h4.mb-5 Marco de la Gestión del Riesgo de Desastres (MGRD)

    .row.justify-content-center.align-items-center.mb-5
      .col-10
        figure(data-aos="fade-up")
          img(src="@/assets/curso/temas/tema2/tema2-img-02.png") 
    
    img(src="@/assets/curso/temas/tema2/tema2-img-decorativa-02.svg").tema2-decorativa-02

    .tarjeta.color-azul-claro.p-8.p-md-5.mb-5  
      p.texto-movil.mt-3.mb-5 En términos generales, las transformaciones que se impulsan por medio de la normativa son: Fuente: (Baas, Ramasamy, Dey de Pryck, & Battista, 2009).
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
        .tarjeta_avatar
          img(src='@/assets/curso/temas/tema2/tema2-img-03.svg' alt='AvatarTop')
          .tarjeta.color_azul.p-4
            p.text-center El proceso de GRD se consolida como una política que promueve la seguridad y sostenibilidad del territorio, la mejora de la calidad de vida y los derechos colectivos de la población en general y está íntimamente ligada con la planeación del territorio, la participación y concertación comunitaria y la gestión ambiental.
        .tarjeta_avatar
          img(src='@/assets/curso/temas/tema2/tema2-img-04.svg' alt='AvatarTop')
          .tarjeta.color_azul.p-4               
            p.text-center Los procesos sociales en la GRD promueven la protección, la mejora de la calidad de vida, el bienestar, la seguridad y el desarrollo sustentable del territorio y sus comunidades.
        .tarjeta_avatar
          img(src='@/assets/curso/temas/tema2/tema2-img-05.svg' alt='AvatarTop')
          .tarjeta.color_azul.p-4               
            p.text-center Reconoce que todos los actores desde su condición y dinámica social, cultural, económica y política particular en el proceso de Gestión del Riesgo son corresponsables y es indispensable su participación.
        .tarjeta_avatar
          img(src='@/assets/curso/temas/tema2/tema2-img-06.svg' alt='AvatarTop')
          .tarjeta.color_azul.p-4               
            p.text-center.mt-2 El conocimiento del riesgo es indispensable para la promoción de la conciencia frente al riesgo y como forma de prevención, reducción y manejo de este.
        .tarjeta_avatar
          img(src='@/assets/curso/temas/tema2/tema2-img-07.svg' alt='AvatarTop')
          .tarjeta.color_azul.p-4               
            p.text-center.mt-2 Las acciones de reducción del riesgo son acciones tendientes para disminuir las condiciones de riesgo existentes y evitar la materialización de nuevos riesgos.
        
    #t_2_1.titulo-segundo.color-acento-contenido.mt-5
      h2 2.1 Elementos marco del riesgo de desastres

    p.mb-5 En el Marco de Acción de Hyogo 2005 - 2015 llamado construyendo la Resiliencia de las Naciones y Comunidades frente a Desastres (MAH) muestra los elementos fundamentales para la GRD priorizados en cinco acciones para el logro de las metas estratégicas de la Conferencia Mundial sobre Reducción de Desastres. 

    TabsB.color-primario
      .py-4.py-md-5(titulo="Pre-Desastre" :icono="require('@/assets/curso/temas/tema2/tema2-img-08.svg')")
        .row
          .col-md-12-1.mb-4.mb-md-0
            p.mb-0 #[b Actividades de desarrollo en curso] - Aspectos vigentes de la GRD en los programas de desarrollo.
            p.mb-0 #[b Evaluación de riesgo] - Proceso de diagnóstico para identificar los riesgos que enfrenta una comunidad.
            p.mb-0 #[b Prevención] - Actividades para evitar el impacto adverso de las amenazas. 
            p.mb-0 #[b Mitigación] - Medidas estructurales/no-estructurales adoptadas para limitar el impacto adverso.
            p.mb-0 #[b Preparación] - Actividades y medidas adoptadas con anticipación para asegurar una respuesta efectiva.
            p.mb-0 #[b Alerta temprana] - Provisión efectiva y oportuna de información para evitar o reducir el riesgo.
          
      .py-4.py-md-5(titulo="Respuesta frente al Desastre  " :icono="require('@/assets/curso/temas/tema2/tema2-img-09.svg')")
        .row
          .col-md-12-1.mb-4.mb-md-0
            p.mb-0 #[b Evacuación] - Partida masiva temporal de personas y propiedad desde l os lugares amenazados.
            p.mb-0 #[b Salvar personas y medios de vida] -  Protección de personas y medios de vida durante la emergencia
            p.mb-0 #[b Socorro inmediato] - Provisión de ayuda durante o inmediatamente después del desastre.
            p.mb-0 #[b Evaluación del daño y las pérdidas] -  Información sobre el impacto en los bienes y pérdida de la producción.
      
      .py-4.py-md-5(titulo="Post-Desastre" :icono="require('@/assets/curso/temas/tema2/tema2-img-10.svg')")
        .row
          .col-md-12-1.mb-4.mb-md-0
            p.mb-0 #[b Ayuda en curso] - Ayuda continua hasta un cierto nivel de recuperación.
            p.mb-0 #[b Recuperación] - Acciones tomadas después de un desastre con el objetivo de restablecer la infraestructura y los servicios.
            p.mb-0 #[b Reconstrucción] -  Acciones tomadas después de un desastre para asegurar la reubicación/reasentamiento.
            p.mb-0 #[b Recuperación económica y socia] - Medidas tomadas para normalizar la economía y la vida social.
            p.mb-0 #[b Actividades de desarrollo en curso] - Acciones continuas de programas de desarrollo.
            p.mb-0 #[b Evaluación del riesgo] - Proceso de diagnóstico para identificar nuevos riesgos que pueda enfrentar nuevamente las comunidades.

    .tarjeta.color-verde-claro.p-8.p-md-5.mb-5.mt-4
      p Dentro de las prioridades de acción del MAH se pueden encontrar.
      .row.justify-content-around.aling-items-center.mb-5.mt-5
        .col-lg-11.mb-lg-0
          .row
            .col-sm.mb-5.mb-sm-0
              ol.lista-ol--cuadro.lista-ol--separador
                li 
                  img(src="@/assets/curso/temas/tema2/tema2-img-14.svg").tema2-width
                  p.mt-4 Aseguramiento de la reducción del riesgo de desastres como prioridad ante las diferentes instancias territoriales. 
                li 
                  img(src="@/assets/curso/temas/tema2/tema2-img-15.svg").tema2-width
                  p.mt-4 Identificación, evaluación y monitoreo del riesgo de desastres para el fomento de la alerta temprana.
                li 
                  img(src="@/assets/curso/temas/tema2/tema2-img-16.svg").tema2-width 
                  p.mt-4 Uso del conocimiento del riesgo como apalancador de la cultura y resiliencia del territorio.
                
            .col
              ol.lista-ol--cuadro.lista-ol--separador
                li 
                  img(src="@/assets/curso/temas/tema2/tema2-img-17.svg").tema2-width1 
                  p.mt-5 Reducción de los factores de riesgo profundos. 
                li 
                  img(src="@/assets/curso/temas/tema2/tema2-img-18.svg").tema2-width
                  p.mt-4 Fortalecimiento de la preparación ante desastres permiten la efectiva respuesta a estos.
                li
                  p
    .row.justify-content-around.aling-items-center.mb-5.mt-5
      .col-lg-12.mb-lg-0
        .bloque-texto-g.p-3.p-sm-4.p-md-5(data-aos="fade-up")
          .bloque-texto-g__img6(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-img-11.svg')})`}"
          )
          .bloque-texto-g__texto6.p-4
           p.mb-0 Sin embargo, el Marco de Sendái, establece 7 objetivos fundamentados en la prevención y reducción de los impactos o consecuencias por los desastres de origen natural o antropogénico, asimismo, es la herramienta centrada en el cumplimiento de los objetivos de desarrollo sostenible (ODS). Promoviendo la transformación del paradigma del conocimiento del riesgo de desastres y su enfoque en la gestión de estos en el entorno ambiental, social y económico.

    
    .row.align-items-center.mt-5
      .col-lg-8
        p.mb-4 Los 7 objetivos, están acompañados de diversos principios rectores con el fin de disminuir los impactos derivados de los desastres naturales o antropogénicos, salvaguardar la vida y los beneficios de las generaciones actuales y futuras y contempla aquellos factores como la amenaza y la vulnerabilidad. 
        p El fin último del Marco Sendái es la disminución del riesgo de desastres y los impactos generados por estos, las consecuencias económicas, sociales, culturales, ambientales, de bienes e infraestructura y de los medios de subsistencia que se ven traducidos en daños y afectación a la calidad de vida de las comunidades que repercuten en el desarrollo y resiliencia del territorio. 
      .col-lg-2
        .row.justify-content-left.align-items-left.mb-5.mt-5
          .col-lg-12
            figure(data-aos="fade-left")
              img(src="@/assets/curso/temas/tema2/tema2-img-12.svg")

    .row.justify-content-around.aling-items-center.mb-5
      .col-lg-11
        .col-lg-12
          p Asimismo, busca la prevención de la materialización de nuevos riesgos de desastres y la reducción de los existentes a través de la implementación de acciones de índole económico, estructural, jurídico, social, sanitario, cultural, educativo, ambiental, tecnológico, político e institucional que prevengan y reduzcan el nivel de exposición a las amenazas y la vulnerabilidad a los desastres y aumenten la preparación para la respuesta y la recuperación del territorio.           

    img(src="@/assets/curso/temas/tema2/tema2-img-decorativa-04.svg").tema2-decorativa-04

    figure.mb-5.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido.mt-5
      h2 2.2 Instrumentos de seguimiento de los procesos clave de la gestión del riesgo de desastres
    
    p.mt-5 El análisis exhaustivo de la GRD contribuye con la evaluación y la consolidación de las capacidades de las organizaciones y comunidades con el fin de lograr cumplir las metas mundiales del Marco Sendái acciones que son afines a los lineamientos del desarrollo sostenible. 
    p.mt-5 La GRD y el desarrollo sostenible son conceptos complementarios para la planeación del territorio y dicha complementariedad se visualiza en los ejemplos a continuación.

    .row.align-items-up.mt-5
      .col-lg-5
        figure
          img(src="@/assets/curso/temas/tema2/tema2-img-13.svg")
      .col-lg-7
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta clr_gris")
          .row(titulo="Concepto 1")
            .col-12
              p.mb-0 La destrucción de la infraestructura y el deterioro de los medios de vida a causa de desastres naturales generan retrasos en el desarrollo de la comunidad y presión sobre los presupuestos de los entes territoriales destinados para la reducción de la pobreza y fortalecimiento de los sistemas de abastecimiento de servicios (agua, energía, entre otros).
          .row(titulo="Concepto 2")
            .col-12
              p El ordenamiento territorial inadecuado y la degradación del medio ambiente debido a la nula o deficiente planificación son factores de aumento de las amenazas y los riesgos asociados a fenómenos naturales o antropogénicos.
          .row(titulo="Concepto 3")
            .col-12          
              p.mb-0 La aplicación de acciones y medidas de GRD incluidas en los planes de desarrollo aportan considerablemente a la reducción de las consecuencias de los fenómenos naturales o antropogénicos.                          
    
    .row.justify-content-around.aling-items-center.mt-4
      .col-lg-9
        .cajon.color--primario.p-4
          p Hemos llegado al final de este componente formativo.  Recuerde explorar los demás recursos que se encuentran disponibles, para ello diríjase al menú principal en donde encontrará la síntesis, una actividad didáctica, material complementario, entre otros. 

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
