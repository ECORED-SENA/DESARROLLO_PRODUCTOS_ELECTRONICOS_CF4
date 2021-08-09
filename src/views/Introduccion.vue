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
        ImagenInfografica.color-primario.mt-5.intro
          template(v-slot:imagen)
            figure
              img(src='@/assets/template/tema-0-2.png', alt='Texto que describa la imagen')
          .cajon.color-primario(x="30%" y="9.3%")            
            .row.px-3.pt-3.pb-2.mx-0           
              figure
                img(src="@/assets/template/tema-0-3.svg", alt="Texto que describa la imagen")
            .row.borde-primario-top-2.text-center.px-4.pt-3.pb-4.mx-0
              .h4.mb-0 Sustrato o placa base    
          .cajon.color-primario(x="35.6%" y="95.2%")            
            .row.px-3.pt-3.pb-2.mx-0           
              figure
                img(src="@/assets/template/tema-0-4.svg", alt="Texto que describa la imagen")
            .row.borde-primario-top-2.text-center.px-4.pt-3.pb-4.mx-0
              .h4.mb-0 Componentes electrónicos
          .cajon.color-primario(x="80.9%" y="10.3%")            
            .row.px-3.pt-3.pb-2.mx-0           
              figure
                img(src="@/assets/template/tema-0-5.svg", alt="Texto que describa la imagen")
            .row.borde-primario-top-2.text-center.px-4.pt-3.pb-4.mx-0
              .h4.mb-0 Conexiones eléctricas
    .row.mt-5
      .col-9
        p La esquematización de un circuito eléctrico es un paso importante en la fase del diseño electrónico; ya que en este punto se tienen en cuenta las ordenes de trabajo con las especificaciones del circuito, los componentes electrónicos a utilizar, los requerimientos eléctricos para el buen funcionamiento del circuito y hasta la herramienta de software para realizar la captura del plano esquemático.
        p.mt-3 Un buen diseño de placa de circuito impreso dependerá de un correcto diseño del plano esquemático, ya que si existen errores en el esquemático, estos migrarán automáticamente a la placa. Por tal razón, resulta importante realizar un adecuado alistamiento de todos los insumos necesarios (componentes electrónicos, encapsulados, hojas de datos, entre otros) para la elaboración del plano esquemático y su posterior captura en el software CAD empleado para tal propósito.
      .col-3
        figure
          img(src="@/assets/template/tema-0-6.png", alt="Texto que describa la imagen").w-75.margin-0-auto
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
