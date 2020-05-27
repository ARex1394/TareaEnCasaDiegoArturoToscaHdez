import {mensajeAlerta, saludo} from './modulos/mensajeAlerta';

import Persona from './modulos/persona'

//mensajeAlerta('Hola Diego');
//saludo();

const carlos = new Persona('Diego Arturo',23);
carlos.mostrarInfo();