async function cargarCarreras() {
  try {
    const response = await fetch('carreras.json');
    if (!response.ok) {
      throw new Error('No se pudieron cargar los datos de las carreras');
    }
    const data = await response.json();
    carrerasDisponibles = data;
    console.log('Carreras cargadas:', carrerasDisponibles);
    console.log('Carreras cargadas correctamente.');
  } catch (error) {
    console.error('Error al cargar las carreras:', error);
    console.error('No se pudieron cargar los datos de las carreras. Por favor, inténtalo de nuevo más tarde.');
  }
}

cargarCarreras();
