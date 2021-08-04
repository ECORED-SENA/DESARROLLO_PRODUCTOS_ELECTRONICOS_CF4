<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Órdenes de trabajo
    .row.mt-4
      .col-12.col-lg-8
        p Las órdenes de trabajo representan el paso preliminar a la elaboración y ejecución de una tarea. Son documentos que contienen los lineamientos, especificaciones y orientaciones a tener en cuenta para la realización de una actividad. Cuando se habla de una orden de trabajo en procesos de diseño electrónico estas deben contener descritas las tareas y especificaciones del proceso a realizar.
        .bloque-texto-a.color-primario-invertido.p-4.p-md-3.mt-4 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-0 Son dispositivos que hacen uso de la energía eléctrica y la manipulan en función de sus características físicas y propiedades eléctricas. Están formados por un cuerpo también denominado encapsulado y unos terminales o pines de material conductor, que les permiten interconectarse con otros componentes y fijarse a una placa de circuito impreso , asó como se puede observar en la #[strong figura 2.]    
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src="@/assets/template/tema-3-1.svg", alt="Texto que describa la imagen").w-50.margin-0-auto
    
      .col-6.col-lg-4.offset-3.offset-lg-0
        figure
          img(src="@/assets/template/tema-3-2.png", alt="Texto que describa la imagen")




</template>

<script>
export default {
  name: 'Tema3',
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

<style lang="sass" scoped></style>
