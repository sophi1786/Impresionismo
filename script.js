

// CARATULA ***************************************************
    document.querySelector('.boton-flecha').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#s2').scrollIntoView({ behavior: 'smooth' });
    });

// SECCION DE LAS CITAS ***************************************************
    document.addEventListener("DOMContentLoaded", () => {
    const frances = document.querySelector(".cita-frances");
    const espanol = document.querySelector(".cita-espanol");
    const banner = document.querySelector(".cita-banner");

    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        // al entrar a la sección: primero francés, luego español
        frances.classList.add("activa");
        espanol.classList.remove("activa");

        setTimeout(() => {
        frances.classList.remove("activa");
        espanol.classList.add("activa");
        }, 3500); // 👈 4 segundos para leer francés
    } else {
        // al salir de la sección: reseteamos
        frances.classList.remove("activa");
        espanol.classList.remove("activa");
    }
    });
}, { threshold: 0.5 });

    observer.observe(banner);
    });


// SECCION DE LAS OBRAS ***************************************************
    const obras = [
    {
    nombre: "Nymphéas",
    descripcion: "Claude Monet plasma la delicadeza de los nenúfares en un juego de luz y reflejos."
    },
    {
    nombre: "Le Bal du Moulin de la Galette",
    descripcion: "Renoir retrata la vida parisina con movimiento, alegría y un ambiente festivo."
    },
    {
    nombre: "Los Gansos",
    descripcion: "Berthe Morisot capta lo cotidiano con una mirada sensible y femenina."
    },
    {
    nombre: "Ensayo de Ballet",
    descripcion: "Edgar Degas refleja la disciplina y la gracia de las bailarinas en la Ópera de París."
    },
    {
    nombre: "La Grenouillère",
    descripcion: "Renoir explora los reflejos del agua y la vida social en la ribera del Sena."
    },
    {
    nombre: "Nieve en Louveciennes",
    descripcion: "Alfred Sisley transmite la serenidad del invierno con su característico uso de la luz."
    }
];

    const slideTrack = document.querySelector('.slide-track');
    const obraNombre = document.getElementById('obra-nombre');
    const obraDescripcion = document.getElementById('obra-descripcion');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');

    let currentIndex = 0;
    const itemWidth = 320; // 300px + 20px gap

    function updateCarousel() {
    const offset = currentIndex * itemWidth;
    slideTrack.style.transform = `translateX(-${offset}px)`;
    // actualizar texto
    obraNombre.textContent = obras[currentIndex].nombre;
    obraDescripcion.textContent = obras[currentIndex].descripcion;

    // quitar clase activa de todas
    document.querySelectorAll('.slide').forEach((slide, index) => {
    slide.classList.toggle('activa', index === currentIndex);
});
}

    nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= obras.length) {
    currentIndex = 0; // vuelve al inicio
    }
    updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
    currentIndex = obras.length - 1; // va al final
    }
    updateCarousel();
    });


// DONDE VER ***************************************************

    document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carrusel-slide');
    const puntos = document.querySelectorAll('.punto');

    puntos.forEach(punto => {
    punto.addEventListener('click', () => {
        const index = parseInt(punto.getAttribute('data-index'));

        // Elimina la clase 'activo' de todos los slides y puntos
        slides.forEach(slide => slide.classList.remove('activo'));
        puntos.forEach(p => p.classList.remove('activo'));

        // Agrega la clase 'activo' al slide y al punto seleccionados
        slides[index].classList.add('activo');
        puntos[index].classList.add('activo');
    });
    });
});



