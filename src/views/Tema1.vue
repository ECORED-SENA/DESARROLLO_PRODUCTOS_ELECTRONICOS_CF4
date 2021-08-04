<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 	Componentes electrónicos
    .row.mt-4
      .col-10.col-lg-8.offset-1.offset-lg-2
        .bloque-texto-a.color-primario-invertido.p-4.p-md-3.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-0 Son dispositivos que hacen uso de la energía eléctrica y la manipulan en función de sus características físicas y propiedades eléctricas. Están formados por un cuerpo también denominado encapsulado y unos terminales o pines de material conductor, que les permiten interconectarse con otros componentes y fijarse a una placa de circuito impreso , asó como se puede observar en la #[strong figura 2.]    
            .col-lg-4.mb-4.mb-lg-0
              figure
                img(src="@/assets/template/tema-1-1.png", alt="Texto que describa la imagen")
    .row.mt-5
      .col-10.offset-1
        .h4 Figura 2
        p Componentes electrónicos
        figure.mt-4
          img(src="@/assets/template/tema-1-2.png", alt="Texto que describa la imagen")
          figcaption.mt-3 Referencia Nota. Adaptado de Componentes electrónicos (s.f.)
    p.mt-5 La función que desempeña el componente dentro de un circuito eléctrico depende de las propiedades eléctricas dotadas durante el proceso de fabricación y de la finalidad prevista del circuito diseñado.

    .titulo-segundo.mt-5
      #t_1_1.h4 1.1  Clasificación
    .row.mt-5
      .col-12.col-lg-7
        p Los componentes electrónicos se pueden clasificar de diferentes maneras, pueden clasificarse por la función que desempeñan, es decir si son componentes activos, pasivos o de protección, pueden clasificarse por la lógica que manejen análogos o digitales, pueden clasificarse por las magnitudes de la energía eléctrica que manejan en componentes de alta potencia y baja potencia e incluso se pueden clasificar por la forma física de su cuerpo o encapsulado en componentes de inserción (#[strong THT por sus siglas en inglés]) y componentes de superficie (#[strong SMD por sus siglas en inglés]).
        p.mt-3 Esta última es una de las más usadas en procesos de fabricación y ensamble electrónico ya que abarca en su totalidad a todos los componentes electrónicos y en la mayoría de los casos no obedecen a particularidades del componente (#[strong función que desempeña, naturaleza de la energía, parámetros eléctricos entre otros]). 
        p.mt-3 A continuación se presenta una breve descripción de los componentes electrónicos de acuerdo a su forma física o encapsulado. 
      .col-6.col-lg-5
        figure
          img(src="@/assets/template/tema-1-3.png", alt="Texto que describa la imagen")
    .row.mt-5
      .col-10.offset-1
        .h4 Figura 3
        p Componentes electrónicos
    .tabla-a.color-acento-contenido.mt-5 
      table
        thead
          tr.text-center
            th.py-3 Los componentes de inserción o THT 
            th Los componentes de superficie o SMD 
        tbody
          tr
            td.p-0 
              figure
                img(src="@/assets/template/tema-1-4.png", alt="Texto que describa la imagen")
            td.p-0 
              figure
                img(src="@/assets/template/tema-1-5.png", alt="Texto que describa la imagen")
          tr.text-small
            td.p-4 Son todos aquellos componentes cuyos terminales o pines atraviesan físicamente la placa de circuito impreso (Sustrato o Aislante) para ser sujetados mecánicamente a través de la soldadura blanda. 
            td.p-4 Son todos aquellos componentes cuyos terminales o pines no atraviesan la placa de circuito impreso, es decir que su sujeción mecánica a través de la soldadura blanda directamente en la superficie de la placa. 
    .titulo-segundo.mt-5
      #t_1_2.h4 1.2  Simbología
    figure.mt-4
      img(src="@/assets/template/tema-1-6.png", alt="Texto que describa la imagen")
    p.mt-5 Todos los componentes electrónicos tienen asociado un símbolo o dibujo, lo que permite representar gráficamente a los circuitos; la simbología electrónica cobra vital relevancia cuando de analizar circuitos se trata, esto se debe a que en términos generales, la geometría del dibujo obedece en mayor o gran medida a la función básica del componente. En la siguiente figura se puede observar la simbología de los componentes electrónicos más utilizados en circuitos.
    .row.mt-5
      .col-10.offset-1
        .h4 Figura 4
        p Simbología electrónica
    .row.mt-4
      table.tabla-borde-azul
        thead
          tr.text-center
            th.py-3 Conector (J)
            th Fusible (F)
            th Bombilla (LMP)
            th Condensador variable (C)
            th Bobina fija (L)
            th Bobina variable (L)
        tbody
          tr
            th.py-3 
              figure
                img(src="@/assets/template/tema-1-18.png", alt="Texto que describa la imagen").w-75.margin-0-auto
            th.py-3 
              figure
                img(src="@/assets/template/tema-1-19.png", alt="Texto que describa la imagen").w-75.margin-0-auto
            th.py-3 
              figure
                img(src="@/assets/template/tema-1-20.png", alt="Texto que describa la imagen").w-75.margin-0-auto
            th.py-3 
              figure
                img(src="@/assets/template/tema-1-21.png", alt="Texto que describa la imagen").w-75.margin-0-auto
            th.py-3 
              figure
                img(src="@/assets/template/tema-1-22.png", alt="Texto que describa la imagen").w-75.margin-0-auto
            th.py-3 
              figure
                img(src="@/assets/template/tema-1-23.png", alt="Texto que describa la imagen").w-75.margin-0-auto
      table.tabla-borde-azul.mt-3
        thead
          tr.text-center
            th.py-3 Pila (B)
            th Pila (B)
            th Pila (B)
            th Transformador nucleo De hierro (T)
            th Diodo rectificador (D)
            th Puente rectificador (BR)
        tbody
          tr
            th.py-3 
              figure
                img(src="@/assets/template/tema-1-24.png", alt="Texto que describa la imagen").w-75.margin-0-auto
            th.py-3 
              figure
                img(src="@/assets/template/tema-1-25.png", alt="Texto que describa la imagen").w-75.margin-0-auto
            th.py-3 
              figure
                img(src="@/assets/template/tema-1-26.png", alt="Texto que describa la imagen").w-75.margin-0-auto
            th.py-3 
              figure
                img(src="@/assets/template/tema-1-27.png", alt="Texto que describa la imagen").w-75.margin-0-auto
            th.py-3 
              figure
                img(src="@/assets/template/tema-1-28.png", alt="Texto que describa la imagen").w-75.margin-0-auto
            th.py-3 
              figure
                img(src="@/assets/template/tema-1-29.png", alt="Texto que describa la imagen").w-75.margin-0-auto
      table.tabla-borde-azul.mt-3
        thead
          tr.text-center
            th.py-3 Potenciómetro (P)
            th Fotorecistencia (LDR)
            th Varistor (VDR)
            th Diodo LED (LED)
            th Diodo zener (D)
            th Transistor NPN (Q)
        tbody
          tr
            th.py-3 
              figure
                img(src="@/assets/template/tema-1-30.png", alt="Texto que describa la imagen").w-75.margin-0-auto
            th.py-3 
              figure
                img(src="@/assets/template/tema-1-31.png", alt="Texto que describa la imagen").w-75.margin-0-auto
            th.py-3 
              figure
                img(src="@/assets/template/tema-1-32.png", alt="Texto que describa la imagen").w-75.margin-0-auto
            th.py-3 
              figure
                img(src="@/assets/template/tema-1-33.png", alt="Texto que describa la imagen").w-75.margin-0-auto
            th.py-3 
              figure
                img(src="@/assets/template/tema-1-34.png", alt="Texto que describa la imagen").w-75.margin-0-auto
            th.py-3 
              figure
                img(src="@/assets/template/tema-1-35.png", alt="Texto que describa la imagen").w-75.margin-0-auto
      table.tabla-borde-azul.mt-3
        thead
          tr.text-center
            th.py-3 Termistor
            th Condensador fijo no polarizado (C)
            th Condensador fijo polarizado (C)
            th Transistor PNP (Q)
            th Transistor darlington (Q)
            th Transistor (SCR)
        tbody
          tr
            th.py-3 
              figure
                img(src="@/assets/template/tema-1-36.png", alt="Texto que describa la imagen").w-75.margin-0-auto
            th.py-3 
              figure
                img(src="@/assets/template/tema-1-37.png", alt="Texto que describa la imagen").w-75.margin-0-auto
            th.py-3 
              figure
                img(src="@/assets/template/tema-1-38.png", alt="Texto que describa la imagen").w-75.margin-0-auto
            th.py-3 
              figure
                img(src="@/assets/template/tema-1-39.png", alt="Texto que describa la imagen").w-75.margin-0-auto
            th.py-3 
              figure
                img(src="@/assets/template/tema-1-40.png", alt="Texto que describa la imagen").w-75.margin-0-auto
            th.py-3 
              figure
                img(src="@/assets/template/tema-1-41.png", alt="Texto que describa la imagen").w-75.margin-0-auto
      table.tabla-borde-azul.mt-3
        thead
          tr.text-center
            th.py-3 Triac (TR)
            th Circuito integrado (IC)
            th Amplificador operacional (A)
            th Altavoz  (SPK)
            th Motor (MOT)
            th Zumbador (BZ)
        tbody
          tr
            th.py-3 
              figure
                img(src="@/assets/template/tema-1-42.png", alt="Texto que describa la imagen").w-75.margin-0-auto
            th.py-3 
              figure
                img(src="@/assets/template/tema-1-43.png", alt="Texto que describa la imagen").w-75.margin-0-auto
            th.py-3 
              figure
                img(src="@/assets/template/tema-1-44.png", alt="Texto que describa la imagen").w-75.margin-0-auto
            th.py-3 
              figure
                img(src="@/assets/template/tema-1-45.png", alt="Texto que describa la imagen").w-75.margin-0-auto
            th.py-3 
              figure
                img(src="@/assets/template/tema-1-46.png", alt="Texto que describa la imagen").w-75.margin-0-auto
            th.py-3 
              figure
                img(src="@/assets/template/tema-1-47.png", alt="Texto que describa la imagen").w-75.margin-0-auto
    .titulo-segundo.mt-5
      #t_1_3.h4 1.3  Encapsulados
    .row.mt-4
      .col-12.col-lg-7
        p Representan el cuerpo físico de los componentes electrónicos, son responsables de otorgar la forma, el tamaño, la disposición y cantidad de los pines conductores al componente. En la fase de diseño, el tamaño de la placa de circuito impreso depende en gran medida de la elección de los componentes a partir de sus encapsulados. La variedad de encapsulados está dada principalmente por las magnitudes de energía eléctrica que vayan a emplearse en la operación del componente dentro del circuito eléctrico. Es decir, entre más alta sea la energía más grande será el encapsulado del componente.
        p.mt-3 A continuación, se observan los encapsulados más utilizados en circuitos integrados. 
      .col-6.col-lg-5
        figure
          img(src="@/assets/template/tema-1-7.png", alt="Texto que describa la imagen")
    .row.mt-4
      .col-10.offset-1
        .h4 Figura 5
        p Encapsulados más empleados
    .tabla-a.color-acento-contenido.mt-5 
      table
        thead
          tr.text-center
            th.py-3 Los componentes de inserción o THT 
            th Los componentes de superficie o SMD 
        tbody
          tr
            td.p-0 
              figure
                img(src="@/assets/template/tema-1-8.png", alt="Texto que describa la imagen")
            td.p-0
              figure
                img(src="@/assets/template/tema-1-9.png", alt="Texto que describa la imagen")
          tr.text-small
            td.p-4 En circuitos integrados se suelen utilizar encapsulados con formas rectangulares y disposición de pines simétricos como los DIP o los TSOP.
            td.p-4 Algunos de los encapsulados más empleados en la fabricación de transistores, tiristores y reguladores son el TO-92, TO-220, TO-3, entre otros.
    .titulo-segundo.mt-5
      #t_1_4.h4 1.4  Materiales
    figure.mt-3
      img(src="@/assets/template/tema-1-10.png", alt="Texto que describa la imagen")
    p.mt-5 En los procesos de fabricación de componentes y circuitos electrónicos se emplean diferentes materiales, los cuales aportan las características eléctricas y el comportamiento funcional. 
    .row.mt-5
      .col-10.offset-1
        .h4 Figura 6
        p Materiales
    figure.mt-4
      img(src="@/assets/template/tema-1-11.png", alt="Texto que describa la imagen")
    .titulo-segundo.mt-5
      #t_1_5.h4 1.5  Placa base
    .row.mt-4
      .col-8.offset-2
        .row.borde-gris-noizq.rounded-20
          .col-4.p-0
            figure
              img(src="@/assets/template/tema-1-12.png", alt="Texto que describa la imagen")
          .col-8.py-4.px-4
            p La placa base, denominada sustrato, es el material que servirá de soporte para los componentes y las conexiones eléctricas de un circuito. Se caracteriza por estar construida por materiales aislantes como baquelita, fibra de vidrio o resinas epóxicas reforzadas con fibra de vidrio llamadas FR4.
    .titulo-segundo.mt-5
      #t_1_6.h4 1.6  Características y hojas de datos
    figure.mt-3
      img(src="@/assets/template/tema-1-13.png", alt="Texto que describa la imagen")
    .row.mt-5
      .col-12.col-lg-8
        p Cada componente electrónico cumple una función determinada dentro de un circuito electrónico, es así que una resistencia disipa energía en forma de calor y se opone al paso de la corriente eléctrica o como un amplificador operacional aumenta la amplitud de una señal de voltaje y sirve como acondicionador de señal; pero para que el componente electrónico, sea el que sea, cumpla con su función, debe obedecer a unos parámetros establecidos por el fabricante durante su proceso de construcción y son estos parámetros y características las que establecen dichas funciones. 
        p.mt-3 Es por esta razón que en el mercado se encuentra una innumerable cantidad de componentes electrónicos, cada uno con sus características y parámetros eléctricos específicos que se ajustan a las necesidades particulares de cada diseño electrónico. Pero entonces, cómo saber: ¿cuáles son las características que requiere mi componente electrónico para que funcione de manera adecuada en una aplicación electrónica determinada? La respuesta se encuentra en las hojas de datos o datasheets, que son manuales elaborados por el fabricante con la información técnica y funcional del componente electrónico, ver figura 6.
      .col-6.col-lg-4
        figure
          img(src="@/assets/template/tema-1-14.png", alt="Texto que describa la imagen")
    .row.mt-5
      .col-10.offset-1
        .h4 Figura 7
        p Hoja de datos del amplificador
        figure.mt-4
          img(src="@/assets/template/tema-1-15.png", alt="Texto que describa la imagen")
          figcaption.mt3 Referencia Nota. Texas Instruments. (2015). 
    p.mt-5 Ejemplo de una hoja de datos perteneciente a un amplificador operacional, donde se resaltan algunos de los parámetros eléctricos que destacan al componente. Para consultar las hojas de datos de un componente electrónico solo se requiere conocer el nombre o referencia del componente para así consultarlo directamente en internet.
    .row.mt-4
      .col-8.col-lg-6.offset-2.offset-lg-3
        .cajon.color-primario.p-4.mb-4
          .row
            .col-3.col-lg-2
              figure
                img(src="@/assets/template/tema-1-16.svg", alt="Texto que describa la imagen").w-75.margin-0-auto
            .col-9.col-lg-10.align-self-center
              p.p-0.m-0.text-small Las hojas de datos proporcionan la información detallada de un componente electrónico y es una herramienta valiosa para conocer las capacidades funcionales del mismo, por tal razón es un recurso de consulta muy utilizado cuando de diseño electrónico se trata.  

</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
