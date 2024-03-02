let materiasISI = JSON.parse(localStorage.getItem('materias')) || [
  // Primer año
  // - Anual
  { id: '8', nombre: 'Sistemas y Procesos de Negocio',         horas: '3',  ano: '1', cuatrimestre: '0', esAnual: true,  estado: 'desaprobada', analista: false, integradora: true,  electiva: false, paraCursar: { necesitaRegular: [], necesitaAprobada: [] } },
  // - Primer cuatrimestre
  { id: '1', nombre: 'Álgebra y Geometría Analítica',     horas: '10', ano: '1', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: [], necesitaAprobada: [] } },
  { id: '2', nombre: 'Inglés I',               horas: '4',  ano: '1', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: [], necesitaAprobada: [] } },
  { id: '3', nombre: 'Ingeniería y Sociedad',                           horas: '4',  ano: '1', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: [], necesitaAprobada: [] } },
  { id: '4', nombre: 'Logica y Estructuras Discretas',        horas: '6',  ano: '1', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: [], necesitaAprobada: [] } },
  // - Segundo cuatrimestre
  { id: '5', nombre: 'Análisis Matemático I',             horas: '10', ano: '1', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: [], necesitaAprobada: [] } },
  { id: '6', nombre: 'Algoritmos y Estructuras de Datos', horas: '10', ano: '1', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: [], necesitaAprobada: [] } },
  { id: '7', nombre: 'Arquitectura de Computadoras',      horas: '8',  ano: '1', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: [], necesitaAprobada: [] } },

  // Segundo año
  // - Anual
  { id: '14',  nombre: 'Análisis Matemático II',                horas: '5', ano: '2', cuatrimestre: '0', esAnual: true,  estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: ['1', '5'],      necesitaAprobada: []} },
  { id: '15', nombre: 'Análisis de Sistemas',                  horas: '6', ano: '2', cuatrimestre: '0', esAnual: true,  estado: 'desaprobada', analista: false, integradora: true,  electiva: false, paraCursar: { necesitaRegular: ['6', '8'],      necesitaAprobada: []} },
  // - Primer cuatrimestre
  { id: '9', nombre: 'Física I',                              horas: '10', ano: '2', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: [],              necesitaAprobada: []} },
  { id: '10', nombre: 'Sintaxis y Semántica de los Lenguajes', horas: '8', ano: '2', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: ['4', '6'],      necesitaAprobada: []} },
  // - Segundo cuatrimestre
  { id: '11', nombre: 'Inglés II',            horas: '4', ano: '2', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: ['2'],      necesitaAprobada: []} },
  { id: '12', nombre: 'Paradigmas de Programación',            horas: '8', ano: '2', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: ['4', '6'],      necesitaAprobada: []} },
  { id: '13', nombre: 'Sistemas Operativos',                   horas: '8', ano: '2', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: ['7'], necesitaAprobada: []} },

  // Tercer año
  // - Anual
  { id: '25', nombre: 'Diseño de Sistemas',              horas: '6', ano: '3', cuatrimestre: '0', esAnual: true,  estado: 'desaprobada', analista: false, integradora: true,  electiva: false, paraCursar: { necesitaRegular: ['12', '15'],       necesitaAprobada: ['2', '6', '8']} },
  // - Primer cuatrimestre
  { id: '16', nombre: 'Análisis Numérico',                       horas: '6', ano: '3', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: ['14'],        necesitaAprobada: ['1', '5']} },
  { id: '17', nombre: 'Física II',                       horas: '10', ano: '3', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: ['5', '9'],        necesitaAprobada: []} },
  { id: '18', nombre: 'Economía',                        horas: '6', ano: '3', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: [],             necesitaAprobada: ['1', '5']} },
  { id: '19', nombre: 'Bases de Datos',                horas: '8', ano: '3', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: ['10', '15'], necesitaAprobada: ['4', '6']} },
  // - Segundo cuatrimestre
  { id: '20', nombre: 'Desarrollo de Software',                  horas: '8', ano: '3', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: ['12', '15'],   necesitaAprobada: ['4', '6']} },
  { id: '21', nombre: 'Comunicación de Datos',                  horas: '8', ano: '3', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: [],   necesitaAprobada: ['7', '9']} },
  { id: '22', nombre: 'Probabilidad y Estadística',   horas: '6', ano: '3', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: ['1', '5'],         necesitaAprobada: []} },
  { id: '23', nombre: 'Metodología de la Investigación', horas: '4', ano: '3', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: true,  paraCursar: { necesitaRegular: [],                 necesitaAprobada: ['8']} },
  { id: '24', nombre: 'Emprendedorismo', horas: '4', ano: '3', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: true,  paraCursar: { necesitaRegular: ['18'],                 necesitaAprobada: []} },

  // Cuarto año
  // - Anual
  { id: '33', nombre: 'Investigación Operativa',    horas: '4', ano: '4', cuatrimestre: '0', esAnual: true,  estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: ['16', '22'],       necesitaAprobada: []} },
  { id: '34', nombre: 'Administración de Recursos', horas: '6', ano: '4', cuatrimestre: '0', esAnual: true,  estado: 'desaprobada', analista: false, integradora: true,  electiva: false, paraCursar: { necesitaRegular: ['18', '25'], necesitaAprobada: ['15']} },
  // - Primer cuatrimestre
  { id: '26', nombre: 'Legislación',                horas: '4', ano: '4', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: ['3'],       necesitaAprobada: []} },
  { id: '27', nombre: 'Redes de Información',       horas: '8', ano: '4', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: ['13', '21'],       necesitaAprobada: []} },
  { id: '28', nombre: 'Simulación',                 horas: '6', ano: '4', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: ['22'],       necesitaAprobada: ['14']} },
  { id: '29', nombre: 'Relaciones Humanas',                                                  horas: '6', ano: '4', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: true,  paraCursar: { necesitaRegular: ['25'], necesitaAprobada: ['15']} },
  // - Segundo cuatrimestre
  { id: '30', nombre: 'Ingeniería y Calidad de Software',     horas: '6', ano: '4', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: ['19', '20', '25'], necesitaAprobada: ['10', '12']} },
  { id: '31', nombre: 'Tecnologías para la Automatización',          horas: '6', ano: '4', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: ['16', '17'],        necesitaAprobada: ['14']} },
  { id: '32', nombre: 'Sistemas Distribuidos',      horas: '8', ano: '4', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: true,  paraCursar: { necesitaRegular: ['27'],             necesitaAprobada: []} },

  // Quinto año
  // - Anual
  { id: '44', nombre: 'Proyecto Final',                                                      horas: '6', ano: '5', cuatrimestre: '0', esAnual: true, estado: 'desaprobada', analista: false, integradora: true, electiva: false,   paraCursar: { necesitaRegular: ['27', '30', '34'], necesitaAprobada: ['10', '20', '25']} },
  // - Primer cuatrimestre
  { id: '35', nombre: 'Inteligencia Artificial',                                                  horas: '6', ano: '5', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: ['28'], necesitaAprobada: ['16', '22']} },
  { id: '36', nombre: 'Sistema de Gestión',                                                  horas: '8', ano: '5', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: ['18', '33'], necesitaAprobada: ['25']} },
  { id: '37', nombre: 'Auditoría de Sistemas',                            horas: '6', ano: '5', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: true,  paraCursar: { necesitaRegular: ['30', '34'], necesitaAprobada: []} },
  { id: '38', nombre: 'Seguridad en Sistemas de Información',                                horas: '6', ano: '5', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false,  paraCursar: { necesitaRegular: ['27', '34'], necesitaAprobada: ['20', '21']} },
  { id: '39', nombre: 'Consolidación de Tecnologías de la Información y las Comunicaciones', horas: '6', ano: '5', cuatrimestre: '1', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: true,  paraCursar: { necesitaRegular: ['27'], necesitaAprobada: ['13']} },
  // - Segundo cuatrimestre
  { id: '40', nombre: 'Ciencia de Datos',                   horas: '6', ano: '5', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: ['28'], necesitaAprobada: ['19', '22']} },
  { id: '41', nombre: 'Gestión Gerencial',                   horas: '6', ano: '5', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: false, paraCursar: { necesitaRegular: ['26', '34'], necesitaAprobada: ['18']} },
  { id: '42', nombre: 'Gestión Avanzada de Datos',                   horas: '6', ano: '5', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: true, paraCursar: { necesitaRegular: ['27'], necesitaAprobada: ['19']} },
  { id: '43', nombre: 'Desarrollo de Aplicaciones Cliente-Servidor', horas: '6', ano: '5', cuatrimestre: '2', esAnual: false, estado: 'desaprobada', analista: false, integradora: false, electiva: true,  paraCursar: { necesitaRegular: ['27'], necesitaAprobada: ['19']} },
];

const store = new Vuex.Store({
  state: {
    materias: materiasISI
  },
  getters: {
    getMaterias: state => {
      return state.materias;
    },
    getMateriaById: (state, getters) => (id) => {
      return state.materias.find(materia => materia.id === id)
    },
    getMateriasAprobadas: state => {
      return state.materias.filter(materia => materia.estado === 'aprobada');
    },
    getMateriasRegulares: state => {
      return state.materias.filter(materia => materia.estado === 'regular');
    },
    getMateriasCursando: state => {
      return state.materias.filter(materia => materia.estado === 'cursando');
    },
    getMateriasAno: (state, getters) => (ano) => {
      return state.materias.filter(materia => materia.ano === ano)
    },
    getMateriasAnoAnuales: (state, getters) => (ano) => {
      return getters.getMateriasAno(ano).filter(materia => materia.esAnual)
    },
    getMateriasAnoCuatrimestre: (state, getters) => (ano, cuatrimestre) => {
      return getters.getMateriasAno(ano).filter(materia => materia.cuatrimestre === cuatrimestre)
    },
    getCantidadMaterias: state => {
      return state.materias.length;
    },
    getCantidadMateriasAprobadas: (state, getters) => {
      return getters.getMateriasAprobadas.length;
    },
    getMateriaCorrelativas: (state, getters) => (id) => {
      const materia = getters.getMateriaById(id);
      const regulares = materia.paraCursar.necesitaRegular.map(idMateria => getters.getMateriaById(idMateria));
      const aprobadas = materia.paraCursar.necesitaAprobada.map(idMateria => getters.getMateriaById(idMateria));
      return { regulares, aprobadas };
    },
    getMateriasElectivas: state => {
      return state.materias.filter(materia => materia.electiva);
    },
    getMateriasElectivasAprobadas: (state, getters) => {
      return getters.getMateriasElectivas.filter(materia => materia.estado === 'aprobada');
    },
    getMateriasObligatorias: state => {
      return state.materias.filter(materia => !materia.electiva);
    },
    getMateriasObligatoriasAprobadas: (state, getters) => {
      return getters.getMateriasObligatorias.filter(materia => materia.estado === 'aprobada');
    }
  },
  mutations: {
    cambiarEstadoMateria (state, payload) {
      state.materias.find(materia => materia.id === payload.id).estado = payload.estado;
      localStorage.setItem('materias', JSON.stringify(materiasISI));
    },
    aprobarAno (state, payload) {
      for (var i = 0, len = payload.materias.length; i < len; i++) {
        payload.materias[i].estado = 'aprobada';
      }
    },
    desaprobarAno (state, payload) {
      for (var i = 0, len = payload.materias.length; i < len; i++) {
        payload.materias[i].estado = 'desaprobada';
      }
    }
  }
});

const Materia = {
  props: ['id', 'nombre', 'horas', 'integradora', 'electiva', 'analista'],
  template: '\
    <div :class="`materia materia--` + estado + (this.cursable ? ` materia--cursable` : ``)" @click="mostrarDependencias">\
      <div class="materia__detalles">\
        <span class="materia__descripcion">\
          {{ nombre }}\
          <em class="materia__tipo" v-if="integradora">Integradora</em>\
          <em class="materia__tipo" v-if="electiva">Electiva</em>\
        </span>\
        <span class="materia__horas">{{ horas }} hs.</span>\
      </div>\
      <div class="materia__condicion">\
        <input\
          class="materia__radio"\
          type="radio"\
          value="desaprobada"\
          v-model="estado"\
          :name="[`m-${ id }`]"\
          :id="[`m-${ id }-desaprobada`]"\
          :disabled="!cursable">\
        <label\
          class="materia__boton materia__boton--desaprobada"\
          :for="[`m-${ id }-desaprobada`]">D</label>\
        <input\
          class="materia__radio"\
          type="radio"\
          value="regular"\
          v-model="estado"\
          :name="[`m-${ id }`]"\
          :id="[`m-${ id }-regular`]"\
          :disabled="!cursable">\
        <label\
          class="materia__boton materia__boton--regular"\
          :for="[`m-${ id }-regular`]">R</label>\
        <input\
          class="materia__radio"\
          type="radio"\
          value="aprobada"\
          v-model="estado"\
          :name="[`m-${ id }`]"\
          :id="[`m-${ id }-aprobada`]"\
          :disabled="!cursable">\
        <label\
          class="materia__boton materia__boton--aprobada"\
          :for="[`m-${ id }-aprobada`]">A</label>\
        <input\
          class="materia__radio"\
          type="radio"\
          value="cursando"\
          v-model="estado"\
          :name="[`m-${ id }`]"\
          :id="[`m-${ id }-cursando`]"\
          :disabled="!cursable">\
        <label\
          class="materia__boton materia__boton--cursando"\
          :for="[`m-${ id }-cursando`]">C</label>\
      </div>\
    </div>',
  computed: {
    estado: {
      get: function () {
        return this.$store.getters.getMateriaById(this.id).estado;
      },
      set: function (valor) {
        store.commit('cambiarEstadoMateria', {
          id: this.id,
          estado: valor
        });
      }
    },
    cursable: {
      get: function () {            
        const materia = this.$store.getters.getMateriaById(this.id);
        const necesitaRegulares = materia.paraCursar.necesitaRegular;
        const necesitaAprobadas = materia.paraCursar.necesitaAprobada;
        const estanRegulares = this.$store.getters.getMateriasRegulares.map(m => m.id);
        const estanAprobadas = this.$store.getters.getMateriasAprobadas.map(m => m.id);
        const regularesYAprobadas = estanRegulares.concat(estanAprobadas);

        const sePuedeCursar = arrayContainsArray(regularesYAprobadas, necesitaRegulares)
            && arrayContainsArray(estanAprobadas, necesitaAprobadas);

        if (!sePuedeCursar) {
          store.commit('cambiarEstadoMateria', {
            id: materia.id,
            estado: 'desaprobada'
          });
        }

        return sePuedeCursar;
      }
    }
  },
  methods: {
    mostrarDependencias: function () {
      if (this.cursable) return;
      
      const correlativas = this.$store.getters.getMateriaCorrelativas(this.id);
      const elementoDependencias = document.querySelectorAll('.dependencias')[0];

      let textoRegulares = '';
      let textoAprobadas = '';

      if (correlativas.regulares.length > 0)
        correlativas.regulares.forEach(m => textoRegulares += `<li class="dependencias__item dependencias__item--${ m.estado }">${ m.nombre }</li>`)
      else
        textoRegulares = '<li class="dependencias__item--off">Ninguna.</li>';

      if (correlativas.aprobadas.length > 0)
        correlativas.aprobadas.forEach(m => textoAprobadas += `<li class="dependencias__item dependencias__item--${ m.estado }">${ m.nombre }</li>`)
      else
        textoAprobadas = '<li class="dependencias__item--off">Ninguna.</li>';

      elementoDependencias.innerHTML = `
        <h4 class="dependencias__titulo">Para cursar <span>${ this.nombre }</span> necesitás:</h5>
        <h5 class="dependencias__subtitulo dependencias__subtitulo--regular">Regular:</h5>
        <ul class="dependencias__lista">${ textoRegulares }</ul>
        <h5 class="dependencias__subtitulo dependencias__subtitulo--aprobadas">Aprobadas:</h5>
        <ul class="dependencias__lista">${ textoAprobadas }</ul>
        <p class="dependencias__pista">CLICK O TAP PARA CERRAR</p>`;

      elementoDependencias.classList.add('dependencias--visible');
    }
  }
};

const app = new Vue({
  el: '#app',
  store,
  components: { Materia },
  computed: {
    horasElectivasAprobadas: function () {
      const horasElectivas = this.$store.getters.getMateriasElectivasAprobadas.map(m => m.horas);
      return horasElectivas.reduce((a, b) => parseInt(a) + parseInt(b), 0);
    },
    horasSemanalesCursando: function () {
      const horasSemanales = this.$store.getters.getMateriasCursando.map(m => m.horas);
      return horasSemanales.reduce((a, b) => parseInt(a) + parseInt(b), 0);
    },
    cantidadMaterias: function () {
      return this.$store.getters.getCantidadMaterias;
    },
    cantidadMateriasAprobadas: function () {
      return this.$store.getters.getCantidadMateriasAprobadas;
    },
    progreso: function () {
      const horasObligatorias = this.$store.getters.getMateriasObligatorias.map(m => m.horas).reduce((a, b) => parseInt(a) + parseInt(b), 0);
      const horasObligatoriasAprobadas = this.$store.getters.getMateriasObligatoriasAprobadas.map(m => m.horas).reduce((a, b) => parseInt(a) + parseInt(b), 0);
      const horasElectivas = 44;
      const horasElectivasAprobadas = (this.horasElectivasAprobadas > horasElectivas ? 44 : this.horasElectivasAprobadas);
      const horasTotalesMinimas = horasObligatorias + horasElectivas;
      return ((horasObligatoriasAprobadas + horasElectivasAprobadas) / horasTotalesMinimas * 100).toFixed(2);
    },
    primerAnoAprobado: function () {
      return this.$store.getters.getMateriasAno('1').every(m => m.estado === 'aprobada');
    },
    segundoAnoAprobado: function () {
      return this.$store.getters.getMateriasAno('2').every(m => m.estado === 'aprobada');
    },
    tercerAnoAprobado: function () {
      return this.$store.getters.getMateriasAno('3').every(m => m.estado === 'aprobada');
    },
    cuartoAnoAprobado: function () {
      return this.$store.getters.getMateriasAno('4').every(m => m.estado === 'aprobada');
    },
    quintoAnoAprobado: function () {
      return this.$store.getters.getMateriasAno('5').every(m => m.estado === 'aprobada');
    }
  },
  methods: {
    aprobarAno: (ano) => {
      const materiasAno = store.getters.getMateriasAno(ano);
      const anoEstaAprobado = materiasAno.every(m => m.estado === 'aprobada');

      if (anoEstaAprobado)
        store.commit('desaprobarAno', { materias: materiasAno });        
      else
        store.commit('aprobarAno', { materias: materiasAno });
    },
    ocultarDependencias: () => {
      document.querySelectorAll('.dependencias')[0].classList.remove('dependencias--visible');
    }
  }
});


function arrayContainsArray (superset, subset) {
  return subset.every(function (value) {
    return (superset.indexOf(value) >= 0);
  });
}

const elementoInformacion = document.querySelectorAll('.informacion')[0];
const elementoInformacionCuerpo = elementoInformacion.querySelectorAll('.informacion__cuerpo')[0]
const elementoInformacionTitulo = elementoInformacion.querySelectorAll('.informacion__titulo span')[0]

elementoInformacion.addEventListener('click', () => {
  elementoInformacionCuerpo.classList.toggle('informacion__cuerpo--activo');

  elementoInformacionTitulo.textContent = elementoInformacionTitulo.textContent == '(+)' ? '(-)' : '(+)';
});


document.addEventListener("DOMContentLoaded", function(){
  document.body.lastChild.previousSibling.remove()
});
