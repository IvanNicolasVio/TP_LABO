document.addEventListener("DOMContentLoaded", onInit);
function onInit(){
    cargarBlogs();
    rotarComentarios();
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

const comentarios = [
    { texto: "El personal se comportó de una excelente forma, muy buena atención y la casa que me ofrecieron cumple con todas mis expectativas.", autor: "Juan Perez" },
    { texto: "Un servicio increíble, encontré la casa de mis sueños y el proceso fue muy rápido y seguro.", autor: "Maria Gomez" },
    { texto: "Altamente recomendados, profesionales y atentos a cada detalle.", autor: "Carlos Ruiz" }
];

let index = 0;

function rotarComentarios() {
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