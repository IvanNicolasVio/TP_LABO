document.addEventListener("DOMContentLoaded", onInit);
function onInit(){
    cargarNosotros();
    cargarCards(); 
    cargarBlogs();
    rotarComentarios();
}

function cargarNosotros(){
    const details = [
        { icono: "./assets/images/icono1.svg", titulo: "SEGURIDAD", contenido: "En Bienes Raíces, la seguridad de nuestros clientes es nuestra prioridad. Implementamos las mejores prácticas y tecnologías de seguridad para asegurar que cada transacción sea segura y confiable. Desde la verificación de propiedades hasta la protección de datos personales, garantizamos que cada paso del proceso sea transparente y protegido. Confía en nosotros para brindarte un entorno seguro en la búsqueda de tu hogar ideal." },
        { icono: "./assets/images/icono2.svg", titulo: "MEJOR PRECIO", contenido: "Nos comprometemos a ofrecerte las mejores ofertas del mercado. Trabajamos incansablemente para negociar precios justos y competitivos, asegurando que encuentres la propiedad de tus sueños sin comprometer tu presupuesto. Nuestra red de contactos y experiencia en el sector inmobiliario nos permite presentarte opciones que se ajustan a tus necesidades económicas, sin sacrificar calidad ni ubicación." },
        { icono: "./assets/images/icono3.svg", titulo: "A TIEMPO", contenido: "En Bienes Raíces, entendemos que el tiempo es valioso. Por eso, nos enfocamos en ofrecerte un servicio eficiente y puntual. Desde la primera consulta hasta la firma del contrato, nuestro equipo de profesionales se asegura de que cada etapa del proceso se complete en el tiempo acordado. Valoramos tu tiempo y nos comprometemos a cumplir con nuestros plazos, brindándote una experiencia sin demoras innecesarias." }
    ];
    const template = document.getElementById('detail-template');
    const container = document.getElementById('container-details');
    details.forEach(detail => {
        const clone = document.importNode(template.content, true);
        clone.querySelector('.icon').src = detail.icono;
        clone.querySelector('.icon').alt = detail.titulo;
        clone.querySelector('.title').textContent = detail.titulo;
        clone.querySelector('.content').textContent = detail.contenido;
        container.appendChild(clone);
    });
}

function cargarCards(){
    const properties = [
        { imagen: "./assets/images/anuncio1.jpg", titulo: "Casa de Lujo en el Lago", descripcion: "Casa en el lago con excelente vistas, acabados de lujo a un excelente precio", precio: "US$350.000" },
        { imagen: "./assets/images/anuncio2.jpg", titulo: "Casa terminados de lujo", descripcion: "Casa con diseño moderno, así como tecnología inteligente y amueblada", precio: "US$275.000" },
        { imagen: "./assets/images/anuncio3.jpg", titulo: "Casa con Pileta", descripcion: "Casa con pileta y acabados de lujo en la ciudad, excelente oportunidad", precio: "US$250.000" }
    ];
    const cardTemplate = document.getElementById('card-template');
    const propertyCards = document.getElementById('property-cards');
    properties.forEach(property => {
        const clone = document.importNode(cardTemplate.content, true);
        clone.querySelector('.card-img-top').src = property.imagen;
        clone.querySelector('.card-img-top').alt = property.titulo;
        clone.querySelector('.card-title').textContent = property.titulo;
        clone.querySelector('.card-text').textContent = property.descripcion;
        clone.querySelector('.price').textContent = property.precio;
        propertyCards.appendChild(clone);
    });
}

async function cargarBlogs() {
    const response = await fetch('./assets/blogs.json');
    const blogs = await response.json();
    const blogContainer = document.getElementById('blog-container');
    blogs.forEach(blog => {
        const blogPost = document.createElement('div');
        blogPost.classList.add('blog-post', 'mb-4');
        blogPost.innerHTML = `
            <div class="blog-post-img">
                <img src="${blog.imagen}" alt="${blog.titulo}" class="img-fluid">
            </div>
            <div class="blog-post-content">
                <h3>${blog.titulo}</h3>
                <p class="meta">Escrito el: ${blog.fecha} por: ${blog.autor}</p>
                <p>${blog.contenido}</p>
            </div>
        `;
        blogContainer.appendChild(blogPost);
    });
}

function rotarComentarios() {
    const comentarios = [
        { texto: "El personal se comportó de una excelente forma, muy buena atención y la casa que me ofrecieron cumple con todas mis expectativas.", autor: "Juan Perez" },
        { texto: "Un servicio increíble, encontré la casa de mis sueños y el proceso fue muy rápido y seguro.", autor: "Maria Gomez" },
        { texto: "Altamente recomendados, profesionales y atentos a cada detalle.", autor: "Carlos Ruiz" }
    ];
    let index = 0;

    const commentText = document.getElementById('comment-text');
    const commentAuthor = document.getElementById('comment-author');
    commentText.textContent = comentarios[index].texto;
    commentAuthor.textContent = comentarios[index].autor;

    setInterval(() => {
        index = (index + 1) % comentarios.length;
        commentText.classList.add('fade-leave-active');
        commentAuthor.classList.add('fade-leave-active');

        setTimeout(() => {
            commentText.textContent = comentarios[index].texto;
            commentAuthor.textContent = comentarios[index].autor;
            commentText.classList.remove('fade-leave-active');
            commentAuthor.classList.remove('fade-leave-active');
        }, 1000); 
    }, 10000);
}

