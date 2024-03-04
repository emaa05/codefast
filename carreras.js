function agregarAlCarrito(carrera) {
    carrito.push(carrera);
    alert(`La carrera ${carrera.nombre} se ha agregado al carrito.`);
  }
  
  function mostrarCarrito() {
    let carritoHTML = "Carreras en tu carrito:\n";
    carrito.forEach((carrera, index) => {
      carritoHTML += `${index + 1}. ${carrera.nombre}\n`;
    });
    alert(carritoHTML);
  }
  
  function calcularTotal() {
    let total = 0;
    carrito.forEach(carrera => {
      total += carrera.precio;
    });
    return total;
  }
  
  function buscarCarrera(nombre) {
    return carrerasDisponibles.find(carrera => carrera.nombre.toLowerCase() === nombre.toLowerCase());
  }
  
  let carrito = [];
  
  const carrerasDisponibles = [
    {
      nombre: "Programador FullStack",
      descripcion: "Incluye 3 cursos: Desarrollo Web Html y Css, Javascript y Node.js, Python",
      duracion: "32 semanas / 2 clases semanales de 2 h",
      precio: 1228667,
      descuento: 200330,
      cuota: 33388
    },
    {
      nombre: "Desarrollo UX/UI",
      descripcion: "Incluye 3 cursos: Photoshop e Illustrator, Diseño UX/UI, Diseño UX/UI Avanzado",
      duracion: "40 semanas / 2 clases semanales de 2 h",
      precio: 1600000,
      descuento: 260910,
      cuota: 43485
    },
    {
      nombre: "Product Web",
      descripcion: "Incluye 3 cursos: Product Manager, Diseño UX/UI, Desarrollo Web",
      duracion: "31 semanas / 2 clases semanales de 2 h",
      precio: 1171333,
      descuento: 191035,
      cuota: 31839
    }
  ];
  
  alert("Bienvenido al simulador de carrito de compras de carreras.\nSeleccione una opción:");
  
  while (true) {
    let opcion = prompt("1. Agregar carrera al carrito\n2. Mostrar carrito\n3. Calcular total\n4. Buscar carrera por nombre\n5. Salir");
  
    switch (opcion) {
      case "1":
        let nombreCarrera = prompt("Ingrese el nombre de la carrera que desea agregar al carrito:");
        let carreraSeleccionada = buscarCarrera(nombreCarrera.toLowerCase()); 
        if (carreraSeleccionada) {
          agregarAlCarrito(carreraSeleccionada);
        } else {
          alert("La carrera no se encontró.");
        }
        break;
      case "2":
        mostrarCarrito();
        break;
      case "3":
        alert(`El total de la compra es: ${calcularTotal()} pesos`);
        break;
      case "4":
        let nombreBuscar = prompt("Ingrese el nombre de la carrera que desea buscar:");
        let carreraEncontrada = buscarCarrera(nombreBuscar.toLowerCase()); 
        if (carreraEncontrada) {
          alert(`Carrera encontrada:\n${carreraEncontrada.nombre}`);
        } else {
          alert("La carrera no se encontró.");
        }
        break;
      case "5":
        alert("Gracias por utilizar carrito de compras.");
        break;
      default:
        alert("Error, opción invalida.");
    }
  
    if (opcion === "5") {
      break;
    }
  }
  