<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Diseño eléctrico y electrónico
    figure
      img(src="@/assets/template/tema-2-1.png", alt="Texto que describa la imagen")
    .row.mt-4
      .col-12.col-lg-8.align-self-center
        p Los circuitos son el resultado de la organización lógica y funcional de los componentes electrónicos que los conforman. Esta organización no es aleatoria debido a que depende de la determinación de especificaciones y del uso de herramientas de hardware y software para su elaboración. En el diseño electrónico se parte de la solución de una necesidad con la cual se genera la idea para iniciar el diseño.  
        p.mt-3 A continuación, se exponen cada uno de los aspectos de un diseño eléctrico y electrónico.
      .col-6.col-lg-4.offset-3.offset-lg-0
        figure
          img(src="@/assets/template/tema-2-2.svg", alt="Texto que describa la imagen")
    TabsA.color-acento-botones.mt-5
      
      .tarjeta.color-acento-botones--borde.p-4(titulo="Planos esquemáticos")
        h4 Planos esquemáticos
        p Los planos esquemáticos son representaciones gráficas de los circuitos electrónicos, esta representación se realiza a partir de los símbolos de los componentes electrónicos que formarán parte del circuito. En otras palabras, un plano esquemático es un dibujo elaborado a partir de la simbología de los componentes electrónicos que permiten su análisis e interpretación funcional.
        p.mt-3 Las uniones eléctricas se representan con trazos de línea vertical y horizontal y se emplean etiquetas para nombrar los componentes electrónicos y sus consecutivos. En la figura 6 se puede observar un plano esquemático de un circuito para el control de velocidad de un motor.
        .h4.mt-3 Figura 8
        p Plano esquemático de un circuito para el control de velocidad de un motor
        figure.mt-3
          img(src="@/assets/template/tema-2-3.png", alt="Texto que describa la imagen")
          figcaption.mt-3 Referencia Nota. Arboledas Brihuega, D. (2011). 
      .tarjeta.color-acento-botones--borde.p-4(titulo="Tipos")
        h4 Tipos
        p La incorporación de la electrónica en prácticamente todas las áreas y ciencias ha permitido la innovación y evolución de los procesos, hoy en día los equipos y dispositivos empleados en la medicina, las telecomunicaciones e incluso la educación cuentan con al menos un subsistema diseñado a partir de circuitos electrónicos. Basta simplemente con ver el celular o la televisión para darse cuenta de este hecho.
        p.mt-3 Los planos esquemáticos que representan cada uno de los circuitos empleados para la fabricación de un producto electrónico se clasifican según el área o ciencia en el que se utilice. Es decir que un equipo biomédico tendrá un plano o planos esquemáticos que sirvan para analizar su electrónica; de igual manera para los equipos de audio y video o para los equipos de telecomunicaciones. Esta clasificación de los planos esquemáticos por áreas o ciencias, facilitan su estudio y permiten que la comprensión técnica y la capacitación del personal que los repara se especialice por la rama o ciencia que le apliquen.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Características")
        h4 Características
        p Los planos esquemáticos se caracterizan por ser la antesala a la elaboración del circuito impreso en las fases de diseño electrónico; la información presentada de manera gráfica permite conocer al detalle el funcionamiento del circuito físico de cualquier producto electrónico. En procesos de diagnóstico y reparación de circuitos son muy útiles porque permiten establecer puntos de verificación y validación de funcionamiento así mismo establecen puntos para la medición de variables y parámetros eléctricos.
        .h4.mt-3 Figura 9
        p Plano esquemático de un circuito para el control de motores
        figure
          img(src="@/assets/template/tema-2-9.png", alt="Texto que describa la imagen") 
          figcaption.mt-3 Referencia Nota. Roux, J. (2011)
      .tarjeta.color-acento-botones--borde.p-4(titulo="Especificaciones")
        h4 Especificaciones
        p Las especificaciones para la elaboración de un plano esquemático dependen estrictamente de la tarea que vaya a desempeñar dentro del producto electrónico el circuito a diseñar, ya que de ahí depende la elección de los componentes electrónicos a utilizar, las configuraciones en las que se van a interconectar todos los componentes y los requerimientos de energía eléctrica que requerirán y soportarán para un correcto funcionamiento. 
        p.mt-3 Es decir que la finalidad prevista del producto electrónico determina las especificaciones del circuito y por ende la elaboración del plano esquemático.
      .tarjeta.color-acento-botones--borde.p-4(titulo="Lectura de planos electrónicos")
        h4 Lectura de planos electrónicos
        p Las claves para realizar lectura de planos esquemáticos radica en identificar la simbología y la nomenclatura empleada en su elaboración, al ser un gráfico representativo de los circuitos electrónicos los recursos empleados para su identificación son muy visuales, por ejemplo, en el plano esquemático de la figura 8 se pueden observar los consecutivos de cada componente, los cuales establecen la cantidad de elementos que conforman al circuito; cabe aclarar que los consecutivos están formados por una letra y un número, no se repiten y están dadas por agrupaciones de elementos, es así que podemos tener rotuladas 9 resistencias de R1 a R9 y tener dos transistores; Q1 y Q2.
        .h4.mt-3 Figura 10
        p Plano esquemático de un circuito amplificador de señal
        figure
          img(src="@/assets/template/tema-2-4.png", alt="Texto que describa la imagen") 
    p.mt-4 Otros elementos que se tienen en cuenta para la lectura de planos esquemáticos son los siguientes:
    .row.mt-4
      .col-
        //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Reconocer")
            .col-1
              figure
                img(src="@/assets/template/tema-2-5.svg", alt="Texto que describa la imagen")
            .col-11
              p Los símbolos electrónicos asociados a cada componente; es el primer paso para tener una visión general de la posible operación o función que desempeñan dentro del circuito.
          .row(numero="2" titulo="Hacer uso")
            .col-1
              figure
                img(src="@/assets/template/tema-2-6.svg", alt="Texto que describa la imagen")
            .col-11
              p De las hojas de datos o datasheet suministradas por los fabricantes de los componentes electrónicos utilizados en la construcción del esquemático; esto permite la identificación de aquellos elementos electrónicos que no sean reconocidos a partir de su símbolo.
          .row(numero="3" titulo="Identificar")
            .col-1
              figure
                img(src="@/assets/template/tema-2-7.svg", alt="Texto que describa la imagen")
            .col-11
              p Nodos y uniones formados de la interconexión de los componentes a través de los cables, esto permite al lector del esquema ubicar puntos de referencia para poder ubicarse dentro del circuito.
          .row(numero="4" titulo="Reconocer")
            .col-1
              figure
                img(src="@/assets/template/tema-2-8.svg", alt="Texto que describa la imagen")
            .col-11
              p La nomenclatura utilizada dentro del plano para distinguir cada componente electrónico; esto permite identificar cantidad de elementos mediante sus consecutivos.

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

<style lang="sass" scoped></style>
