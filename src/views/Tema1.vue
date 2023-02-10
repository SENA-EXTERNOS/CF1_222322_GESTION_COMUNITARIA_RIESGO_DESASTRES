<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Marco normativo de la gestión del riesgo de desastres

    .bloque-texto-g.color-secundario.background-tema1.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-up")
      .row
        .col-lg-4
            img(src="@/assets/curso/temas/tema1/tema1-img-01-1.svg")
        .col-lg-8  
          .tema-1.txt1
            p.mb-0 La Tierra es un sistema que cambia y evoluciona.  El agua y las placas tectónicas se mueven y el aire se encuentra en circulación; mientras el planeta circula alrededor del sol y la luna rodea la tierra; cada una de las interacciones de diversos fenómenos se manifiestan a través de la formación de la lluvia, mareas, vientos, sequías, sistemas montañosos, valles. La transformación de la humanidad ha producido que el hombre tenga mayores interacciones con estos fenómenos naturales y ante el crecimiento poblacional, las consecuencias de estas interacciones son más severas y promueven el cambio del territorio en el corto, mediano y largo plazo.

    p.mb-5 Colombia no está exenta de las consecuencias derivadas de un fenómeno de origen natural o antropogénico que se visualizan notoriamente en la seguridad y calidad de vida de la población; veamos los siguientes datos importantes:

    figure
      img(src="@/assets/curso/temas/tema1/tema1-img-decorativa-06.svg").tema1-decorativa-06

    .row.justify-content-around.mt-5
      .col-lg-10.mb-lg-0.mt-lg-1
        .row.mb-4
          .col-lg-4.justify-content-up.align-items-center
            p Así como en el mundo, Colombia no está exenta a las consecuencias derivadas de un fenómeno de origen natural o antropogénico que se visualizan notoriamente en la seguridad y calidad de vida de la población.
          .col-lg-8.justify-content-right
            ImagenInfografica.color-primario
              template(v-slot:imagen)
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/tema1/tema1-img-02.svg', alt='Texto que describa la imagen')

              .tarjeta.color-acento-botones.p-3(x="20%" y="20%" numero="1")
                p Colombia al estar situada en noroccidente de América del Sur, con costa en los océanos Pacífico y Atlántico, con un sistema montañoso que la cruza de sur a norte, con variados ecosistemas que de acuerdo a sus particularidades permite el desarrollo de biodiversidad y relieves únicos y que existan diferentes pisos térmicos.

              .tarjeta.color-acento-botones.p-3(x="80%" y="20%" numero="2")
                p El país según el censo del 2018, realizado por el Departamento Administrativo Nacional de Estadística (DANE), cuenta aproximadamente con 48´000.000 habitantes, distribuidos en 5 regiones y 32 departamentos (Departamento Administrativo Nacional de Estadística (DANE), s.f.).

              .tarjeta.color-acento-botones.p-3(x="20%" y="80%" numero="3")
                p Dentro de las 5 regiones que está distribuida Colombia, la región Andina es aquella superficie con mayor cantidad de personas, con mayor desarrollo económico y por ende donde más se manifiestan impactos socioeconómicos y ambientales, convirtiéndola en la región más vulnerable frente a fenómenos naturales y antrópicos como deslizamientos, incendios, lluvias, entre otros.

              .tarjeta.color-acento-botones.p-3(x="80%" y="80%" numero="4")
                p Dadas estas condiciones, en esta región se han presentado variadas y constantes emergencias y desastres de gran magnitud (Unidad Nacional para la Gestión del Riesgo de Desastres (UNGRD), 2019). 

        .cajon.color-acento-botones2.p-4
          p Asimismo, las comunidades en su proceso de asentamiento y desarrollo transforman el entorno físico e impactan las dinámicas naturales del territorio, el cual influye en las condiciones sociales, económicas, culturales y políticas. Siendo estas interacciones socioeconómicas y ambientales las que aumentan la vulnerabilidad de las comunidades frente al riesgo de desastres, el cual se configura de manera individual y colectiva. Por esta razón, la sociedad se constituye como el núcleo fundamental para comprender dichos riesgos, reducir sus efectos sobre la población, y responder de manera efectiva cuando estos se materialicen.

        p.mt-5 Es importante tener en cuenta las siguientes consideraciones, con relación a la Gestión del Riesgo de Desastres:     

        ImagenInfografica.color-primario
          template(v-slot:imagen)
            figure(data-aos="fade-left")
              img(src='@/assets/curso/temas/tema1/tema1-img-03.svg', alt='Texto que describa la imagen')

          .tarjeta.color-secundario.p-3(x="24.8%" y="40.5%" numero="1")
            p.mb-0 #[b Para adelantar acciones que promuevan la GRD en el territorio es necesario el compromiso, el conocimiento de la normativa aplicable, el liderazgo y la motivación de la comunidad ya que este no es un proceso individual, sino que conlleva la participación concertada de la comunidad, con aras de generar la movilización social para reducir el riesgo, y con ello los desastres.]             

          .tarjeta.color-secundario.p-3(x="69.5%" y="28.5%" numero="2")
            p.mb-0 #[b Los procesos participativos por ende promueven el conocimiento del riesgo de desastres que se ve traducido en la implementación de acciones de prevención y mitigación del riesgo para disminuir su vulnerabilidad frente a estos y permitan que la comunidad pueda satisfacer sus necesidades, mejorar su calidad de vida, el bienestar y la sustentabilidad del territorio.]             

        .row.justify-content-around.mt-5
          .col-lg-11.mb-lg-0.mt-lg-1
            .bloque-texto-g.color-acento-contenido.p-3.p-sm-1.p-md-5(data-aos="fade-up")       
              .bloque-texto-g__img2(
                :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-img-04.svg')})`}"
              )       
              .bloque-texto-g__texto2.p-4
                p.mb-0 Por ello, la Unidad Nacional para la Gestión del Riesgo de Desastres (UNGRD) diseñó la estrategia #[b “Comunidades Unidas para la Gestión de Riesgo de Desastres” o “Resiliencia Comunitaria en Gestión del Riesgo de Desastres” (COMUNGERD)], estrategia que se fundamenta en la gestión del riesgo a través de una Red Nacional. Esta red tiene la función de construir territorios sustentables, resilientes y seguros por medio de espacios de participación, intercambio de conocimientos y concertación comunitaria (Unidad Nacional para la Gestión del Riesgo de Desastres (UNGRD), s.f.).
        
        p.mt-5.mb-5 COMUNGERD, es una estrategia fundamentada en establecer espacios de participación y concertación comunitaria en el país, en aras de promover el conocimiento del riesgo para diseñar estrategias de prevención y mitigación del riesgo de desastres, según las particularidades del territorio y la comunidad; esta estrategia tiene los siguientes objetivos:

    .tarjeta.color-secundario.p-8.p-md-5.mb-5
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/tema1-img-05.svg' alt='AvatarTop')
          .tarjeta.color--secundario.p-4
            p.text-center.mt-5 #[b Conformar una Red Nacional de líderes comunitarios que promuevan la resiliencia en la gestión del riesgo de desastres.]
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/tema1-img-06.svg' alt='AvatarTop')
          .tarjeta.color--secundario.p-4               
            p.text-center.mt-5 #[b Impulsar la mejora de habilidades y capacidades para la gestión del riesgo de desastres por parte de las comunidades.]    
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/tema1-img-07.svg' alt='AvatarTop')
          .tarjeta.color--secundario.p-4               
            p.text-center.mt-5 #[b Promover el desarrollo de capacidades que permitan a las comunidades gestionar el riesgo de desastres.]    
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/tema1-img-08.svg' alt='AvatarTop')
          .tarjeta.color--secundario.p-4               
            p.text-center.mt-5 #[b Guiar a las comunidades en el planteamiento de planes de gestión del riesgo de desastres comunitarios.]    
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/tema1-img-09.svg' alt='AvatarTop')
          .tarjeta.color--secundario.p-4               
            p.text-center.mt-5 #[b Impulsar la articulación de otros instrumentos de planificación territorial y de gestión del riesgo de desastres.]            
    
    #t_1_1.titulo-segundo.color-acento-contenido
      h2.mt-5 1.1 Normativa del sector ambiental        
    
    figure
      img(src="@/assets/curso/temas/tema1/tema1-img-decorativa-02.svg").tema1-decorativa-02  
    
    figure
      img(src="@/assets/curso/temas/tema1/tema1-img-decorativa-07.svg").tema1-decorativa-10

    .row.justify-content-around
      .col-lg-10.mb-lg-0.mt-lg-3
        p.mb-4 En Colombia se adoptó la Política Nacional de Gestión del Riesgo de Desastres a través de la Ley 1523 de 2012, la cual se considera como factor indispensable para el aseguramiento de la sustentabilidad y seguridad territorial, que busca además velar por los derechos e interés colectivos y la calidad de vida de la población colombiana. Esta ley busca que la planeación del territorio está basada en criterios de sostenibilidad y de participación comunitaria involucrando a todos los niveles gubernamentales. Asimismo, establece la creación del Sistema Nacional de Gestión del Riesgo de Desastres y muestra la que la gestión ambiental y del riesgo son procesos complementarios y que por lo tanto los actores involucrados en la planificación del territorio deben considerar esta visión integradora, velando por el desarrollo sostenible del territorio (Congreso de la República, 2012).
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-3
            .row.justify-content-center.align-items-center.mb-4
              .col-lg-12
                figure(data-aos="fade-right")
                  img(src="@/assets/curso/temas/tema1/tema1-img-10.svg")
          .col-lg-9
            .cajon.color-acento-contenido.p-4
              p Por lo cual, desde el Sistema Nacional Ambiental (SINA), se ha establecido una estrecha congruencia con el Sistema Nacional para la Gestión del Riesgo de Desastres (SNGRD), con el propósito desarrollar e implementar políticas y normas que promuevan la toma de decisiones informadas frente a la gestión ambiental y del riesgo, por medio de la cooperación coordinada y planificada entre estas entidades en sus diferentes niveles territoriales.
        
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-9
            p En el país se ha logrado avanzar y entender la GRD como el proceso social o comunitario, que requiere la proyección y puesta en marcha de acciones que propendan por conocer, disminuir y manejar el riesgo de desastres, por medio del trabajo conjunto entre los actores que pueden intervenir en este proceso para lograr la consolidación de territorios seguros, sostenibles y sustentables en el tiempo.
          .col-lg-3
            .row.justify-content-center.align-items-center.mb-4
              .col-lg-12
                figure(data-aos="fade-left")
                  img(src="@/assets/curso/temas/tema1/tema1-img-11.svg")      
    
    p.mt-5.mb-5 A nivel nacional el proceso de orientación, acompañamiento y apalancamiento de acciones frente a la GRD, es liderado desde el sector medio ambiente por la Dirección de Cambio Climático y Gestión del Riesgo del Ministerio de Ambiente y Desarrollo Sostenible (MADS). Entidad que a través del establecimiento de normas, actividades, acciones, planes y programas permite garantizar los principios ambientales consagrados en la Constitución Política Colombiana de 1991 y la Ley 99 de 1993, articulados con la Política Nacional de Gestión del Riesgo de Desastres, Ley 1523 de 2012.  



    .row.justify-content-around.aling-items-center.mb-5
      .col-lg-12.mb-lg-0
        .bloque-texto-g.p-2.p-sm-2.p-md-5
          .bloque-texto-g__img5(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-img-12.svg')})`}"
          )
          .bloque-texto-g__texto5
          .row
            .col-lg-4
              img(src="@/assets/curso/temas/tema1/tema1-img-decorativa-03.svg")
            .col-lg-8
              p.mb-0 La Dirección de Cambio Climático y Gestión del Riesgo se encarga del desarrollo de bases técnicas y operativas necesarias para mejorar gestión del cambio climático en los diferentes sectores y territorios del país, en asocio con los diferentes sectores y territorios del país, en asocio con los diferentes actores nacionales e internacionales de carácter público y privado, donde #[b dentro de sus funciones está la relacionada con el establecimiento de lineamientos para prevenir el riesgo ecológico en asocio con el Sistema Nacional de Prevención y Atención de Desastres, así como orientar la evaluación de impactos de vulnerabilidad de la biodiversidad y sus servicios ecosistémicos por efectos del cambio climático], entre otros (Ministerio de Ambiente y Desarrollo Sostenible [MADS],s.f.)

    
    
    figure
      img(src="@/assets/curso/temas/tema1/tema1-img-decorativa-04.svg").tema1-decorativa-04      
    .row.justify-content-around
      .col-lg-10.mb-lg-0.mt-lg-3
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-9
            p A nivel territorial las Autoridades Ambientales Urbanas (AAU), las Corporaciones Autónomas Regionales y de Desarrollo Sostenible (CARS) y las Autoridades Ambientales (AA), que tienen como tarea principal, conforme a su jurisdicción, la administración de los recursos naturales renovables y el medio ambiente en general. Asimismo, deben actuar como dinamizadoras de la GRD según el contexto biogeográfico y las capacidades: técnicas, administrativas, financieras y dinámicas socio culturales, que se puedan presentar en el territorio.
          .col-lg-3
            .row.justify-content-center.align-items-center.mb-4
              .col-lg-12
                figure(data-aos="fade-left")
                  img(src="@/assets/curso/temas/tema1/tema1-img-13.svg")     
        .cajon.color--primario.p-4
          p.mt-3.mb-3 Para ampliar la información sobre los instrumentos orientadores de la Gestión del Riesgo de Desastres por el MADS. Ver Anexo 1.

          a.anexo.mb-4(:href="obtenerLink('/downloads/anexo1.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p #[b Anexo]. Instrumentos orientadores del Ministerio de Ambiente y Desarrollo Sostenible para la Gestión del Riesgo de Desastres en el terriitorio
    separador
       
    #t_1_2.titulo-segundo.color-acento-contenido.mt-5
      h2 1.2 Normativa en ordenamiento territorial    

    p.mb-5.mt-3 La ordenación territorial en Colombia, se encuentra regulada por la Ley 152 de 1994 y la Ley 388 de 1997; estas leyes establecen el proceso que guía el crecimiento territorial y regula el uso, modificación y apropiación de cualquier espacio. Para lograr este objetivo, se crearon planes como la herramienta de orientación y administración del desarrollo y el uso de los espacios y el suelo; estos planes de ordenamiento territorial, son llamados POT y se nombran según la cantidad de habitantes en cada municipio, así: 
    
    .row
      .col-sm-6.col-xl-3-1.mb-4.mb-xl-5
        .tarjeta.tarjeta-slide.arriba.color-ligthYellow(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              p #[b Para los municipios con menos de 30000 habitantes se denomina esquemas de ordenamiento territorial (EOT).]
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-img-14.svg')})`}")
      .col-sm-6.col-xl-3-1.mb-4.mb-xl-5
        .tarjeta.tarjeta-slide.arriba.color-ligthYellow(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              p.mb-5 #[b En los municipios con población entre 30000 y 100000 habitantes se denomina plan básico de ordenamiento territorial (PBOT). ]
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-img-15.svg')})`}")
      .col-sm-6.col-xl-3-1.mb-4.mb-xl-5     
        .tarjeta.tarjeta-slide.arriba.color-ligthYellow(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              p #[b En los municipios con más de 100000 habitantes se denomina plan de ordenamiento territorial (POT).]
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-img-16.svg')})`}")

    .row.mt-5
      p.mb-3.mt-5 Para la realización del POT la Ley 388 de 1997, define cuatro tipos de determinantes:

    img(src="@/assets/curso/temas/tema1/tema1-img-decorativa-06.svg").tema1-decorativa-07

    .row.justify-content-around
      .col-lg-10.mb-lg-0.mt-lg-3
        PasosA.color-secundario.mb-5(tipo="n")
          .row.justify-content-center.align-items-center
            .col-md-7.mb-md-0
              h3.mt-5 Tipo 1
              p Relacionada con las medidas ambientales tendientes a la conservación y protección de los impactos hacia los recursos naturales y la preparación y atención de amenazas y riesgos naturales.
            .col-md-2
              figure
                img(src='@/assets/curso/temas/tema1/tema1-img-17.svg', alt='Texto que describa la imagen')
          .row
            .col-md-2
              figure
                img(src='@/assets/curso/temas/tema1/tema1-img-18.svg', alt='Texto que describa la imagen')
            .col-md-10
              h3.mt-5 Tipo 2
              p.mb-4 Vinculada con las áreas de inmuebles considerados como patrimonio cultural incluyendo el histórico, el artístico y arquitectónico; es decir, lo que construye nuestra cultura e histórica.          
          .row
            .col-md-7.mb-md-0
              h3.mt-5 Tipo 3
              p Lo que tiene que ver con las infraestructuras como puertos, aeropuertos, sistemas de suministro y saneamiento del recurso hídrico y provisión de energía, lo que permite vivir con mayores comodidades
            .col-md-2
              figure
                img(src='@/assets/curso/temas/tema1/tema1-img-19.svg', alt='Texto que describa la imagen')
          .row
            .col-md-2
              figure
                img(src='@/assets/curso/temas/tema1/tema1-img-20.svg', alt='Texto que describa la imagen')
            .col-md-10.mb-md-0
              h3.mt-5 Tipo 4
              p Relacionada con las áreas metropolitanas y las normas creadas para lograr metas de desarrollo.

    p.mt-3.mb-3 Sin embargo, la planeación del territorio que se practica desde los últimos 50 años en el país, se ha desarrollado por medio de los siguientes instrumentos del marco normativo:

    h4.mt-3.mb-3 Instrumentos del marco normativo para la gestión territorial

    TabsC.color-primario
      .py-3.py-md-4(titulo="Organización y funcionamiento")
        .tabla-b.color-primario
          table
            thead
              tr
                th.text-center Instrumento Normativo
                th.text-center Descripción         
            tr
              th Ley 136 de 1994
              td Establece las reglas y criterios para organizar los municipios y determina las funciones del concejo y la personería.
            tr
              th Ley 1551 de 2012
              td Esta ley tiene por objeto modernizar la normativa relacionada con el régimen municipal, dentro de la autonomía que reconoce, a los municipios, a la constitución y a la ley, como instrumentos de gestión para cumplir sus competencias y funciones. Modifica los criterios de categorización y los requisitos para la creación de los municipios.
            tr
              th Ley 1617 de 2013
              td Contiene las disposiciones que conforman el Estatuto Político, Administrativo y Fiscal de los distritos.
            tr
              th Ley 1625 de 2013
              td Dicta normas de dotación a las Áreas Metropolitanas de un régimen político, administrativo y fiscal, que, conforme a su autonomía sirva de instrumento de gestión para cumplir con sus funciones.
      .py-3.py-md-4(titulo="Distribución de competencias y recursos")
        .tabla-b.color-primario
          table
            thead
              tr
                th.text-center Instrumento Normativo
                th.text-center Descripción         
            tr
              th Ley 715 de 2001
              td Por medio de la cual se dictan normas orgánicas en materia de recursos y competencias de conformidad con los artículos 151, 288, 356, 357 (Acto Legislativo 01 de 2001) de la Constitución Política y se dictan otras disposiciones.
            tr
              th Ley 1176 de 2007
              td Define la nueva estructura del Sistema General de Participaciones, define las competencias de las entidades territoriales en materia de agua potable y saneamiento, y los criterios para la distribución y destinación de estos recursos.
      .py-3.py-md-4(titulo="Planeación y ordenamiento territorial")
        .tabla-b.color-primario
          table
            thead
              tr
                th.text-center Instrumento Normativo
                th.text-center Descripción         
            tr
              th Ley 152 de 1994
              td Establecimiento de procesos y lineamientos para el diseño, implementación y seguimiento del plan de desarrollo.
            tr
              th Ley 388 de 1997
              td Establece los lineamientos sobre el ordenamiento territorial y la prevención de desastres.
            tr
              th Ley 614 de 2000
              td Establece mecanismos de integración, coordinación y armonización de las diferentes entidades relacionadas con el ordenamiento territorial.
            tr
              th Ley 1451 de 2011
              td Dicta las directrices y principios para la organización administrativa y política del ordenamiento territorial.
    
    .row.justify-content-around.mt-4
      .col-lg-10.mb-lg-0.mt-lg-3
        .cajon.color--primario.p-4
          p.mt-3.mb-3 Para ampliar la información sobre las principales problemáticas en el ordenamiento del territorio que aumentan los riesgos de desastres. Ver Anexo 2.
          a.anexo.mb-4(:href="obtenerLink('/downloads/anexo2.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-pdf.svg")
            .anexo__texto
              p #[b Anexo]. Principales problemáticas en el ordenamiento del territorio que aumentan los riesgos de desastres
    
    separador
       
    #t_1_3.titulo-segundo.color-acento-contenido.mt-1.mb-0
      h2 1.3  Normativa en gestión del riesgo de desastres    

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7
        p.mb-3 Las bases legales del Sistema Nacional de Prevención y Atención de Desastres (SNPAD) fueron modificadas conforme a la adopción de la Ley 1523 de 2012, ley que creó el Sistema Nacional de Gestión del Riesgo de Desastres (SNGRD) y se adoptó la política pública en GRD.
        p.mb-5 El SNGRD está conformado por organizaciones de índole nacional de carácter comunitario, público y privado que articuladas con las normas y directrices ejecutan acciones frente a la gestión del riesgo de desastres con el fin de proteger la integridad, seguridad, bienestar y calidad de vida de la población colombiana.
      .col-lg-5
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-12
            figure
              img(src="@/assets/curso/temas/tema1/tema1-img-21.svg") 

    p.mb-5 La Ley 1523 del 2012 se encuentra estructurada en ocho capítulos, divididos de la siguiente manera:

    LineaTiempoIcon.mb-5(:datos="datosLineaTiempoIcon")
    
    .row.mt-5.mb-5
      .col-lg-12.mb-lg-0.mt-lg-3        
        p.mt-3 Por otro lado, el SNGRD se compone de seis (6) organizaciones encargadas de orientar, coordinar y ejecutar, diversas acciones orientadas hacia la gestión del riesgo de desastres; estas son (Unidad Nacional para la Gestión del Riesgo de Desastres, 2022):

    .tarjeta.color-secundario.p-8.p-md-5.mb-5  
      SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
        .tarjeta--avatar
          img(src='@/assets/curso/temas/tema1/tema1-img-30.svg' alt='AvatarTop')
          .tarjeta.color_secundario.p-4
            h3.text-center.mb-5 Consejo Nacional para la Gestión del Riesgo
            p.text-center Organización encargada de dar las orientaciones a todo el Sistema Nacional.
        .tarjeta--avatar
          img(src='@/assets/curso/temas/tema1/tema1-img-31.svg' alt='AvatarTop')
          .tarjeta.color_secundario.p-4               
            h3.text-center Unidad Nacional para la Gestión del Riesgo de Desastres
            p.text-center Encargada de la coordinación del Sistema Nacional y dirección de la implementación de la Gestión del Riesgo. 
        .tarjeta--avatar
          img(src='@/assets/curso/temas/tema1/tema1-img-32.svg' alt='AvatarTop')
          .tarjeta.color_secundario.p-4               
            h3.text-center.mb-4 Comité Nacional para el Conocimiento del Riesgo
            p.text-center Encargado del asesoramiento y planificación permanente del proceso de conocimiento del riesgo de desastres.
        .tarjeta--avatar
          img(src='@/assets/curso/temas/tema1/tema1-img-33.svg' alt='AvatarTop')
          .tarjeta.color_secundario.p-4               
            h3.text-center Comité Nacional para la Reducción del Riesgo
            p.text-center.mt-2 Se encarga de la asesoría y planificación de la puesta en marcha del proceso de disminución del riesgo de desastres.
        .tarjeta--avatar
          img(src='@/assets/curso/temas/tema1/tema1-img-34.svg' alt='AvatarTop')
          .tarjeta.color_secundario.p-4               
            h3.text-center Comité Nacional para el Manejo de Desastres
            p.text-center.mt-2 Organización encargada de asesorar y planificar la implementación del proceso de manejo de desastres. 
        .tarjeta--avatar
          img(src='@/assets/curso/temas/tema1/tema1-img-35.svg' alt='AvatarTop')
          .tarjeta.color_secundario.p-4               
            h3.text-center Consejos Departamentales, distritales y municipales para la Gestión del Riesgo
            p.text-center Encargados de la coordinación, asesoría, planificación y seguimiento a la articulación y efectividad de las acciones de la gestión del riesgo de desastres en las distintas entidades territoriales.
    
    .row.justify-content-around.mt-5
      .col-lg-11.mb-lg-0.mt-lg-3
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-1.p-md-5(data-aos="fade-up")       
          .bloque-texto-g__img4(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-img-36.svg')})`}"
          )       
          .bloque-texto-g__texto4.p-4
            p.mb-3 Del mismo modo, en esta ley en su artículo 32, establece que en los diferentes niveles territoriales deben formular e implementar instrumentos para proyectar, ejecutar y hacer seguimiento a las acciones para la gestión del riesgo que permitan la prevención, control y manejo del riesgo en el marco del conocimiento del riesgo y el ordenamiento territorial
            p Asimismo, el artículo 33 establece que el lineamiento fundamental bajo el cual se centra el #[b conocimiento, la reducción y manejo del riesgo en el marco del ordenamiento territorial] es el Plan Nacional de Gestión del Riesgo de Desastres (PNGRD).

        p.mt-5.mb-5 Y en el artículo 34, se enuncia que la entidad encargada del diseño del PNGRD es la Unidad Nacional para la Gestión del Riesgo de desastres (UNGRD), conforme a los recursos e información suministrada por los comités del riesgo y los consejos territoriales. 
    
    img(src="@/assets/curso/temas/tema1/tema1-img-decorativa-02.svg").tema1-decorativa-09

    p.mt-5.mb-5 La actualización del PNGRD se debe realizar siguiendo las fases establecidas en el Decreto 1081 del 2015, las cuales son:

    img(src="@/assets/curso/temas/tema1/tema1-img-decorativa-06.svg").tema1-decorativa-08

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-10.mb-lg-0.mt-lg-3
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/tema1-img-37.svg", alt="alt").img100
            .col-8
              p #[b Actualización:] es el proceso inicial para el diseño del PNGRD enmarcado en la participación, conciliación, análisis y validación. 
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/tema1-img-38.svg", alt="alt").img100
            .col-9
              p #[b Aprobación:] la entidad encargada de la aprobación del PNGRD es el Consejo Nacional de Gestión del Riesgo.
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/tema1-img-39.svg", alt="alt").img100
            .col-9
              p #[b Adopción:] la adopción del PNGRD deberá hacerse a través de Decreto expedido por el presidente de la República.

    p.mt-5.mb-4 Adicional a la Ley 1523 del 2012, el SNGRD se encuentra soportado por los siguientes instrumentos normativos:
    
    .row.justify-content-around
      .col-lg-8.mb-lg-0.mt-lg-3
        h4 Instrumentos normativos Sistema Nacional de Gestión del Riesgo de Desastres

    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta clr--gris")
      .row(titulo="Decreto 2157 de 2017")
        .col-12
          p.mb-0 Adoptan directrices para el diseño del plan de gestión del riesgo de desastres en organizaciones de carácter público y privado.
      .row(titulo="Decreto 1081 de 2015")
        .col-12
          p Se adopta el Decreto Reglamentario Único del Sector Presidencia de la República.          
      .row(titulo="Decreto 1807 de 2014")
        .col-12          
          p.mb-0 Se adiciona la gestión del riesgo en los planes de ordenamiento territorial.
      .row(titulo="Decreto 2672 de 2013")
        .col-12
          p.mb-0 Modificación de la estructura de la Unidad Nacional para la Gestión del Riesgo de Desastres.
      .row(titulo="Decreto 1974 de 2013")
        .col-12          
          p.mb-0 Procedimiento para la adopción y actualización de Plan Nacional de Gestión del Riesgo.
      .row(titulo="Decreto 4147 de 2011")
        .col-12          
          p.mb-0 Creación de la Unidad Nacional para la Gestión del Riesgo de Desastres.
                                               
   
</template>

<script>
import LineaTiempoIcon from '../components/LineaTiempoIcon'
export default {
  name: 'Tema1',
  components: {
    LineaTiempoIcon,
  },
  data: () => ({
    datosLineaTiempoIcon: [
      {
        img: require('@/assets/curso/temas/tema1/tema1-img-22.svg'),
        texto:
          '<h4>CAPITULO 1 </h4></br>Definiciones, principios, contextualización del Sistema Nacional de Gestión del Riesgo de Desastres.',
      },
      {
        img: require('@/assets/curso/temas/tema1/tema1-img-23.svg'),
        texto:
          '<h4>CAPITULO 2 </h4></br>Estructura: organización, direccionamiento y acoplamiento del Sistema Nacional de Gestión del Riesgo de Desastres.',
      },
      {
        img: require('@/assets/curso/temas/tema1/tema1-img-24.svg'),
        texto: '<h4>CAPITULO 3 </h4></br>Instrumentos de planificación.',
      },
      {
        img: require('@/assets/curso/temas/tema1/tema1-img-25.svg'),
        texto: '<h4>CAPITULO 4 </h4></br>Sistemas de información.',
      },
      {
        img: require('@/assets/curso/temas/tema1/tema1-img-26.svg'),
        texto:
          '<h4>CAPITULO 5 </h4></br>Mecanismos de financiamiento de la Gestión del Riesgo de Desastres.',
      },
      {
        img: require('@/assets/curso/temas/tema1/tema1-img-27.svg'),
        texto:
          '<h4>CAPITULO 6 </h4></br>Declaratoria de desastre, calamidad pública y normalidad.',
      },
      {
        img: require('@/assets/curso/temas/tema1/tema1-img-28.svg'),
        texto:
          '<h4>CAPITULO 7 </h4></br>Estatutos para atender las situaciones de desastre y calamidad pública.',
      },
      {
        img: require('@/assets/curso/temas/tema1/tema1-img-29.svg'),
        texto: '<h4>CAPITULO 8 </h4></br>Disposiciones finales.',
      },
    ],
  }),
}
</script>

<style lang="sass"></style>
