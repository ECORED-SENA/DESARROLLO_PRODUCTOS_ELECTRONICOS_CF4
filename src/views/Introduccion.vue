<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    figure.mt-4
      img(src="@/assets/template/tema-0-1.png", alt="Texto que describa la imagen")
    p.mt-4 Los circuitos eléctricos y electrónicos representan el subsistema predominante de la tecnología implementada en los equipos y aparatos empleados hoy en día. Los circuitos eléctricos están conformados por componentes electrónicos y conexiones eléctricas, los cuales se disponen sobre un material aislante que sirve como base o soporte denominado sustrato, ver figura 1. Los componentes electrónicos permiten las interacciones eléctricas y funcionales de un circuito y por ende son fundamentales para la concepción esquemática y física del mismo.
    .row.mt-4
      .col-10.offset-1
        .h4.mt-3 Figura 1
        p Tarjeta de circuito impreso
        figure.mt-4
          img(src="@/assets/template/tema-0-2.png" , alt="Texto que describa la imagen")
    .row.mt-5
      .col-9
        p La esquematización de un circuito eléctrico es un paso importante en la fase del diseño electrónico; ya que en este punto se tienen en cuenta las órdenes de trabajo con las especificaciones del circuito, los componentes electrónicos a utilizar, los requerimientos eléctricos para el buen funcionamiento del circuito y hasta la herramienta de software para realizar la captura del plano esquemático.
        p.mt-3 Un buen diseño de placa de circuito impreso dependerá de un correcto diseño del plano esquemático, ya que si existen errores en el esquemático, estos migrarán automáticamente a la placa. Por tal razón, resulta importante realizar un adecuado alistamiento de todos los insumos necesarios (componentes electrónicos, encapsulados, hojas de datos, entre otros) para la elaboración del plano esquemático y su posterior captura en el software CAD empleado para tal propósito.
      .col-3
        figure
          img(src="@/assets/template/tema-0-3.png", alt="Texto que describa la imagen").w-75.margin-0-auto
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
