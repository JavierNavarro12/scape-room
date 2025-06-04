export const htmlPuzzles = {
  puzzle1: {
    BASICO: [
      {
        id: 1,
        question: "¿Cuál es la etiqueta correcta para crear un enlace en HTML?",
        correctAnswer: "<a>",
        options: ["<a>", "<link>", "<href>", "<url>"]
      },
      {
        id: 2,
        question: "¿Qué etiqueta se usa para crear una lista ordenada?",
        correctAnswer: "<ol>",
        options: ["<ol>", "<ul>", "<li>", "<list>"]
      },
      {
        id: 3,
        question: "¿Cuál es la etiqueta para insertar una imagen?",
        correctAnswer: "<img>",
        options: ["<img>", "<image>", "<picture>", "<photo>"]
      },
      {
        id: 4,
        question: "¿Qué etiqueta se usa para crear un formulario?",
        correctAnswer: "<form>",
        options: ["<form>", "<input>", "<submit>", "<button>"]
      },
      {
        id: 5,
        question: "¿Cuál es la etiqueta para crear una tabla?",
        correctAnswer: "<table>",
        options: ["<table>", "<tr>", "<td>", "<grid>"]
      },
      {
        id: 6,
        question: "¿Qué etiqueta se usa para crear un párrafo?",
        correctAnswer: "<p>",
        options: ["<p>", "<paragraph>", "<text>", "<content>"]
      },
      {
        id: 7,
        question: "¿Cuál es la etiqueta para crear un encabezado de nivel 1?",
        correctAnswer: "<h1>",
        options: ["<h1>", "<header>", "<title>", "<heading>"]
      },
      {
        id: 8,
        question: "¿Qué etiqueta se usa para crear una lista desordenada?",
        correctAnswer: "<ul>",
        options: ["<ul>", "<ol>", "<li>", "<list>"]
      },
      {
        id: 9,
        question: "¿Cuál es la etiqueta para crear un botón?",
        correctAnswer: "<button>",
        options: ["<button>", "<input>", "<click>", "<action>"]
      },
      {
        id: 10,
        question: "¿Qué etiqueta se usa para crear un campo de texto?",
        correctAnswer: "<input>",
        options: ["<input>", "<text>", "<field>", "<textarea>"]
      }
    ],
    NORMAL: [
      {
        id: 1,
        question: "¿Cuál es la etiqueta correcta para crear un formulario con método POST?",
        correctAnswer: "<form method='post'>",
        options: ["<form method='post'>", "<form post>", "<post-form>", "<form type='post'>"]
      },
      {
        id: 2,
        question: "¿Qué atributo se usa para hacer que un input sea obligatorio?",
        correctAnswer: "required",
        options: ["required", "mandatory", "must", "needed"]
      },
      {
        id: 3,
        question: "¿Cuál es la etiqueta para crear un campo de selección múltiple?",
        correctAnswer: "<select multiple>",
        options: ["<select multiple>", "<multiselect>", "<select-multiple>", "<multiple-select>"]
      },
      {
        id: 4,
        question: "¿Qué etiqueta se usa para crear un campo de fecha?",
        correctAnswer: "<input type='date'>",
        options: ["<input type='date'>", "<date>", "<calendar>", "<input date>"]
      },
      {
        id: 5,
        question: "¿Cuál es la etiqueta para crear un campo de color?",
        correctAnswer: "<input type='color'>",
        options: ["<input type='color'>", "<color>", "<colorpicker>", "<input color>"]
      },
      {
        id: 6,
        question: "¿Qué etiqueta se usa para crear un campo de rango?",
        correctAnswer: "<input type='range'>",
        options: ["<input type='range'>", "<range>", "<slider>", "<input range>"]
      },
      {
        id: 7,
        question: "¿Cuál es la etiqueta para crear un campo de búsqueda?",
        correctAnswer: "<input type='search'>",
        options: ["<input type='search'>", "<search>", "<find>", "<input search>"]
      },
      {
        id: 8,
        question: "¿Qué etiqueta se usa para crear un campo de teléfono?",
        correctAnswer: "<input type='tel'>",
        options: ["<input type='tel'>", "<phone>", "<telephone>", "<input phone>"]
      },
      {
        id: 9,
        question: "¿Cuál es la etiqueta para crear un campo de correo electrónico?",
        correctAnswer: "<input type='email'>",
        options: ["<input type='email'>", "<email>", "<mail>", "<input email>"]
      },
      {
        id: 10,
        question: "¿Qué etiqueta se usa para crear un campo de contraseña?",
        correctAnswer: "<input type='password'>",
        options: ["<input type='password'>", "<password>", "<secret>", "<input password>"]
      }
    ],
    DIFICIL: [
      {
        id: 1,
        question: "¿Cuál es el atributo correcto para especificar un patrón de validación personalizado en un input?",
        correctAnswer: "pattern='[A-Za-z]{3}'",
        options: ["pattern='[A-Za-z]{3}'", "validate='[A-Za-z]{3}'", "regex='[A-Za-z]{3}'", "format='[A-Za-z]{3}'"]
      },
      {
        id: 2,
        question: "¿Qué atributo se usa para especificar el comportamiento de autocompletado en un formulario?",
        correctAnswer: "autocomplete='off'",
        options: ["autocomplete='off'", "complete='off'", "auto='off'", "suggest='off'"]
      },
      {
        id: 3,
        question: "¿Cuál es el atributo para especificar el tipo MIME en un input de archivo?",
        correctAnswer: "accept='image/*'",
        options: ["accept='image/*'", "type='image/*'", "mime='image/*'", "filetype='image/*'"]
      },
      {
        id: 4,
        question: "¿Qué atributo se usa para especificar el comportamiento de arrastrar y soltar?",
        correctAnswer: "draggable='true'",
        options: ["draggable='true'", "drag='true'", "drop='true'", "move='true'"]
      },
      {
        id: 5,
        question: "¿Cuál es el atributo para especificar el comportamiento de un elemento en un formulario?",
        correctAnswer: "formaction='submit.php'",
        options: ["formaction='submit.php'", "action='submit.php'", "submit='submit.php'", "form='submit.php'"]
      },
      {
        id: 6,
        question: "¿Qué atributo se usa para especificar el comportamiento de un elemento en un formulario?",
        correctAnswer: "formmethod='post'",
        options: ["formmethod='post'", "method='post'", "submit='post'", "form='post'"]
      },
      {
        id: 7,
        question: "¿Cuál es el atributo para especificar el comportamiento de un elemento en un formulario?",
        correctAnswer: "formenctype='multipart/form-data'",
        options: ["formenctype='multipart/form-data'", "enctype='multipart/form-data'", "type='multipart/form-data'", "form='multipart/form-data'"]
      },
      {
        id: 8,
        question: "¿Qué atributo se usa para especificar el comportamiento de un elemento en un formulario?",
        correctAnswer: "formtarget='_blank'",
        options: ["formtarget='_blank'", "target='_blank'", "window='_blank'", "form='_blank'"]
      },
      {
        id: 9,
        question: "¿Cuál es el atributo para especificar el comportamiento de un elemento en un formulario?",
        correctAnswer: "formnovalidate",
        options: ["formnovalidate", "novalidate", "validate='false'", "form='novalidate'"]
      },
      {
        id: 10,
        question: "¿Qué atributo se usa para especificar el comportamiento de un elemento en un formulario?",
        correctAnswer: "form='form-id'",
        options: ["form='form-id'", "formid='form-id'", "formname='form-id'", "formref='form-id'"]
      }
    ]
  },
  puzzle2: {
    BASICO: [
      {
        id: 1,
        correctOrder: [
          "<h1>",
          "Hola Mundo",
          "</h1>"
        ]
      },
      {
        id: 2,
        correctOrder: [
          "<a href='https://google.com'>",
          "Google",
          "</a>"
        ]
      },
      {
        id: 3,
        correctOrder: [
          "<ul>",
          "<li>Item</li>",
          "</ul>"
        ]
      },
      {
        id: 4,
        correctOrder: [
          "<img src='foto.jpg' alt='Foto' />"
        ]
      },
      {
        id: 5,
        correctOrder: [
          "<table>",
          "<tr><td>1</td></tr>",
          "</table>"
        ]
      },
      {
        id: 6,
        correctOrder: [
          "<form>",
          "<input type='text' />",
          "</form>"
        ]
      },
      {
        id: 7,
        correctOrder: [
          "<div>",
          "Contenido",
          "</div>"
        ]
      },
      {
        id: 8,
        correctOrder: [
          "<span>",
          "Texto",
          "</span>"
        ]
      },
      {
        id: 9,
        correctOrder: [
          "<ol>",
          "<li>Uno</li>",
          "</ol>"
        ]
      },
      {
        id: 10,
        correctOrder: [
          "<button>",
          "Enviar",
          "</button>"
        ]
      }
    ],
    NORMAL: [
      {
        id: 1,
        correctOrder: [
          "<form method='post'>",
          "<label for='nombre'>Nombre:</label>",
          "<input type='text' id='nombre' required>",
          "</form>"
        ]
      },
      {
        id: 2,
        correctOrder: [
          "<div class='card'>",
          "<img src='imagen.jpg' alt='Descripción'>",
          "<h2>Título</h2>",
          "<p>Contenido</p>",
          "</div>"
        ]
      },
      {
        id: 3,
        correctOrder: [
          "<nav>",
          "<ul>",
          "<li><a href='#inicio'>Inicio</a></li>",
          "<li><a href='#contacto'>Contacto</a></li>",
          "</ul>",
          "</nav>"
        ]
      },
      {
        id: 4,
        correctOrder: [
          "<article>",
          "<header>",
          "<h1>Título Principal</h1>",
          "<time datetime='2024-03-20'>20 de Marzo</time>",
          "</header>",
          "<p>Contenido del artículo</p>",
          "</article>"
        ]
      },
      {
        id: 5,
        correctOrder: [
          "<section>",
          "<h2>Sección</h2>",
          "<div class='grid'>",
          "<div>Item 1</div>",
          "<div>Item 2</div>",
          "</div>",
          "</section>"
        ]
      },
      {
        id: 6,
        correctOrder: [
          "<form>",
          "<fieldset>",
          "<legend>Datos Personales</legend>",
          "<input type='text' placeholder='Nombre'>",
          "<input type='email' placeholder='Email'>",
          "</fieldset>",
          "</form>"
        ]
      },
      {
        id: 7,
        correctOrder: [
          "<main>",
          "<aside>",
          "<h3>Sidebar</h3>",
          "<ul>",
          "<li>Enlace 1</li>",
          "<li>Enlace 2</li>",
          "</ul>",
          "</aside>",
          "</main>"
        ]
      },
      {
        id: 8,
        correctOrder: [
          "<footer>",
          "<div class='social'>",
          "<a href='#'>Facebook</a>",
          "<a href='#'>Twitter</a>",
          "</div>",
          "<p>&copy; 2024</p>",
          "</footer>"
        ]
      },
      {
        id: 9,
        correctOrder: [
          "<table>",
          "<thead>",
          "<tr><th>Nombre</th><th>Edad</th></tr>",
          "</thead>",
          "<tbody>",
          "<tr><td>Juan</td><td>25</td></tr>",
          "</tbody>",
          "</table>"
        ]
      },
      {
        id: 10,
        correctOrder: [
          "<details>",
          "<summary>Ver más</summary>",
          "<p>Contenido expandible</p>",
          "<ul>",
          "<li>Item 1</li>",
          "<li>Item 2</li>",
          "</ul>",
          "</details>"
        ]
      }
    ],
    DIFICIL: [
      {
        id: 1,
        correctOrder: [
          "<form method='post' enctype='multipart/form-data'>",
          "<fieldset>",
          "<legend>Subir Archivo</legend>",
          "<input type='file' accept='image/*' required>",
          "<button type='submit'>Enviar</button>",
          "</fieldset>",
          "</form>"
        ]
      },
      {
        id: 2,
        correctOrder: [
          "<article class='blog-post'>",
          "<header>",
          "<h1>Título del Post</h1>",
          "<time datetime='2024-03-20'>20 de Marzo</time>",
          "<address>Por <a href='#'>Autor</a></address>",
          "</header>",
          "<figure>",
          "<img src='imagen.jpg' alt='Descripción'>",
          "<figcaption>Pie de imagen</figcaption>",
          "</figure>",
          "<p>Contenido del post...</p>",
          "</article>"
        ]
      },
      {
        id: 3,
        correctOrder: [
          "<nav aria-label='Navegación principal'>",
          "<ul>",
          "<li><a href='#' aria-current='page'>Inicio</a></li>",
          "<li><a href='#'>Servicios</a></li>",
          "<li><a href='#'>Contacto</a></li>",
          "</ul>",
          "</nav>"
        ]
      },
      {
        id: 4,
        correctOrder: [
          "<main>",
          "<article>",
          "<header>",
          "<h1>Título Principal</h1>",
          "<nav aria-label='Breadcrumb'>",
          "<ol>",
          "<li><a href='#'>Inicio</a></li>",
          "<li><a href='#'>Categoría</a></li>",
          "<li>Página Actual</li>",
          "</ol>",
          "</nav>",
          "</header>",
          "</article>",
          "</main>"
        ]
      },
      {
        id: 5,
        correctOrder: [
          "<form id='search-form'>",
          "<div role='search'>",
          "<label for='search'>Buscar:</label>",
          "<input type='search' id='search' name='q' required>",
          "<button type='submit' aria-label='Buscar'>🔍</button>",
          "</div>",
          "</form>"
        ]
      },
      {
        id: 6,
        correctOrder: [
          "<section aria-labelledby='section-title'>",
          "<h2 id='section-title'>Sección</h2>",
          "<div class='grid' role='list'>",
          "<article role='listitem'>Item 1</article>",
          "<article role='listitem'>Item 2</article>",
          "</div>",
          "</section>"
        ]
      },
      {
        id: 7,
        correctOrder: [
          "<dialog id='modal'>",
          "<form method='dialog'>",
          "<h2>Confirmar</h2>",
          "<p>¿Estás seguro?</p>",
          "<button value='cancel'>Cancelar</button>",
          "<button value='confirm'>Confirmar</button>",
          "</form>",
          "</dialog>"
        ]
      },
      {
        id: 8,
        correctOrder: [
          "<details>",
          "<summary>Ver más información</summary>",
          "<div class='content'>",
          "<p>Información detallada...</p>",
          "<figure>",
          "<img src='diagrama.jpg' alt='Diagrama'>",
          "<figcaption>Explicación del diagrama</figcaption>",
          "</figure>",
          "</div>",
          "</details>"
        ]
      },
      {
        id: 9,
        correctOrder: [
          "<table>",
          "<caption>Lista de Usuarios</caption>",
          "<thead>",
          "<tr>",
          "<th scope='col'>Nombre</th>",
          "<th scope='col'>Email</th>",
          "<th scope='col'>Rol</th>",
          "</tr>",
          "</thead>",
          "<tbody>",
          "<tr>",
          "<td>Juan</td>",
          "<td>juan@email.com</td>",
          "<td>Admin</td>",
          "</tr>",
          "</tbody>",
          "</table>"
        ]
      },
      {
        id: 10,
        correctOrder: [
          "<form id='user-form'>",
          "<fieldset>",
          "<legend>Datos del Usuario</legend>",
          "<div class='form-group'>",
          "<label for='username'>Usuario:</label>",
          "<input type='text' id='username' name='username' required pattern='[A-Za-z]{3,}' title='Mínimo 3 letras'>",
          "</div>",
          "<div class='form-group'>",
          "<label for='email'>Email:</label>",
          "<input type='email' id='email' name='email' required>",
          "</div>",
          "<button type='submit'>Guardar</button>",
          "</fieldset>",
          "</form>"
        ]
      }
    ]
  },
  puzzle3: {
    BASICO: [
      {
        id: 1,
        question: "¿Etiqueta para insertar una imagen?",
        answer: "img"
      },
      {
        id: 2,
        question: "¿Etiqueta para un enlace?",
        answer: "a"
      },
      {
        id: 3,
        question: "¿Etiqueta para un párrafo?",
        answer: "p"
      },
      {
        id: 4,
        question: "¿Etiqueta para una lista desordenada?",
        answer: "ul"
      },
      {
        id: 5,
        question: "¿Etiqueta para una lista ordenada?",
        answer: "ol"
      },
      {
        id: 6,
        question: "¿Etiqueta para un encabezado de nivel 1?",
        answer: "h1"
      },
      {
        id: 7,
        question: "¿Etiqueta para un botón?",
        answer: "button"
      },
      {
        id: 8,
        question: "¿Etiqueta para un campo de texto?",
        answer: "input"
      },
      {
        id: 9,
        question: "¿Etiqueta para una tabla?",
        answer: "table"
      },
      {
        id: 10,
        question: "¿Etiqueta para un formulario?",
        answer: "form"
      }
    ],
    NORMAL: [
      {
        id: 1,
        question: "¿Atributo para hacer un input obligatorio?",
        answer: "required"
      },
      {
        id: 2,
        question: "¿Atributo para vincular un label con un input?",
        answer: "for"
      },
      {
        id: 3,
        question: "¿Atributo para especificar el tipo de método en un formulario?",
        answer: "method"
      },
      {
        id: 4,
        question: "¿Atributo para especificar el destino de un formulario?",
        answer: "action"
      },
      {
        id: 5,
        question: "¿Atributo para hacer un campo de solo lectura?",
        answer: "readonly"
      },
      {
        id: 6,
        question: "¿Atributo para deshabilitar un elemento?",
        answer: "disabled"
      },
      {
        id: 7,
        question: "¿Atributo para especificar el valor máximo en un input numérico?",
        answer: "max"
      },
      {
        id: 8,
        question: "¿Atributo para especificar el valor mínimo en un input numérico?",
        answer: "min"
      },
      {
        id: 9,
        question: "¿Atributo para especificar el paso en un input numérico?",
        answer: "step"
      },
      {
        id: 10,
        question: "¿Atributo para especificar el patrón de validación en un input?",
        answer: "pattern"
      }
    ],
    DIFICIL: [
      {
        id: 1,
        question: "¿Atributo para especificar el comportamiento de un elemento en un formulario?",
        answer: "formaction"
      },
      {
        id: 2,
        question: "¿Atributo para especificar el tipo de codificación en un formulario?",
        answer: "formenctype"
      },
      {
        id: 3,
        question: "¿Atributo para especificar el destino de un formulario?",
        answer: "formtarget"
      },
      {
        id: 4,
        question: "¿Atributo para especificar el comportamiento de autocompletado?",
        answer: "autocomplete"
      },
      {
        id: 5,
        question: "¿Atributo para especificar el comportamiento de arrastrar y soltar?",
        answer: "draggable"
      },
      {
        id: 6,
        question: "¿Atributo para especificar el comportamiento de un elemento en un formulario?",
        answer: "formmethod"
      },
      {
        id: 7,
        question: "¿Atributo para especificar el comportamiento de un elemento en un formulario?",
        answer: "formnovalidate"
      },
      {
        id: 8,
        question: "¿Atributo para especificar el comportamiento de un elemento en un formulario?",
        answer: "form"
      },
      {
        id: 9,
        question: "¿Atributo para especificar el comportamiento de un elemento en un formulario?",
        answer: "formenctype"
      },
      {
        id: 10,
        question: "¿Atributo para especificar el comportamiento de un elemento en un formulario?",
        answer: "formtarget"
      }
    ],
    PRO: [
      {
        id: 1,
        question: "¿Qué atributo ARIA se usa para especificar que un elemento es un contenedor de lista de pestañas?",
        correctAnswer: "role='tablist'"
      },
      {
        id: 2,
        question: "¿Qué atributo ARIA se usa para indicar que un elemento es un panel de pestaña?",
        correctAnswer: "role='tabpanel'"
      },
      {
        id: 3,
        question: "¿Qué atributo ARIA se usa para especificar que un elemento es un menú desplegable?",
        correctAnswer: "role='menu'"
      },
      {
        id: 4,
        question: "¿Qué atributo ARIA se usa para indicar que un elemento es un elemento de menú?",
        correctAnswer: "role='menuitem'"
      },
      {
        id: 5,
        question: "¿Qué atributo ARIA se usa para especificar que un elemento es una barra de herramientas?",
        correctAnswer: "role='toolbar'"
      },
      {
        id: 6,
        question: "¿Qué atributo ARIA se usa para indicar que un elemento es un árbol de navegación?",
        correctAnswer: "role='tree'"
      },
      {
        id: 7,
        question: "¿Qué atributo ARIA se usa para especificar que un elemento es un elemento de árbol?",
        correctAnswer: "role='treeitem'"
      },
      {
        id: 8,
        question: "¿Qué atributo ARIA se usa para indicar que un elemento es una cuadrícula de datos?",
        correctAnswer: "role='grid'"
      },
      {
        id: 9,
        question: "¿Qué atributo ARIA se usa para especificar que un elemento es una celda de cuadrícula?",
        correctAnswer: "role='cell'"
      },
      {
        id: 10,
        question: "¿Qué atributo ARIA se usa para indicar que un elemento es un encabezado de columna en una cuadrícula?",
        correctAnswer: "role='columnheader'"
      }
    ]
  },
  puzzle4: {
    BASICO: [
      {
        id: 1,
        question: "¿Cuál es la etiqueta correcta para crear un comentario en HTML?",
        correctAnswer: "<!-- -->",
        options: ["<!-- -->", "//", "/* */", "##"]
      },
      {
        id: 2,
        question: "¿Qué etiqueta se usa para crear un salto de línea?",
        correctAnswer: "<br>",
        options: ["<br>", "<break>", "<newline>", "<line>"]
      },
      {
        id: 3,
        question: "¿Cuál es la etiqueta para crear una línea horizontal?",
        correctAnswer: "<hr>",
        options: ["<hr>", "<line>", "<divider>", "<separator>"]
      },
      {
        id: 4,
        question: "¿Qué etiqueta se usa para crear un campo de texto multilínea?",
        correctAnswer: "<textarea>",
        options: ["<textarea>", "<text>", "<input type='text'>", "<multiline>"]
      },
      {
        id: 5,
        question: "¿Cuál es la etiqueta para crear un campo de selección múltiple?",
        correctAnswer: "<select multiple>",
        options: ["<select multiple>", "<multiselect>", "<checklist>", "<options>"]
      },
      {
        id: 6,
        question: "¿Qué etiqueta se usa para crear un campo de fecha?",
        correctAnswer: "<input type='date'>",
        options: ["<input type='date'>", "<date>", "<calendar>", "<time>"]
      },
      {
        id: 7,
        question: "¿Cuál es la etiqueta para crear un campo de color?",
        correctAnswer: "<input type='color'>",
        options: ["<input type='color'>", "<color>", "<colorpicker>", "<palette>"]
      },
      {
        id: 8,
        question: "¿Qué etiqueta se usa para crear un campo de rango?",
        correctAnswer: "<input type='range'>",
        options: ["<input type='range'>", "<range>", "<slider>", "<scale>"]
      },
      {
        id: 9,
        question: "¿Cuál es la etiqueta para crear un campo de búsqueda?",
        correctAnswer: "<input type='search'>",
        options: ["<input type='search'>", "<search>", "<find>", "<lookup>"]
      },
      {
        id: 10,
        question: "¿Qué etiqueta se usa para crear un campo de teléfono?",
        correctAnswer: "<input type='tel'>",
        options: ["<input type='tel'>", "<phone>", "<telephone>", "<contact>"]
      }
    ],
    NORMAL: [
      {
        id: 1,
        question: "¿Qué etiqueta se usa para un párrafo?",
        answer: "p",
        options: ["p", "paragraph", "text", "para"]
      },
      {
        id: 2,
        question: "¿Qué etiqueta se usa para un enlace?",
        answer: "a",
        options: ["a", "link", "href", "url"]
      },
      {
        id: 3,
        question: "¿Qué etiqueta se usa para una imagen?",
        answer: "img",
        options: ["img", "image", "picture", "photo"]
      },
      {
        id: 4,
        question: "¿Qué etiqueta se usa para un título?",
        answer: "h1",
        options: ["h1", "title", "heading", "header"]
      },
      {
        id: 5,
        question: "¿Qué etiqueta se usa para una lista?",
        answer: "ul",
        options: ["ul", "list", "ol", "li"]
      },
      {
        id: 6,
        question: "¿Qué etiqueta se usa para un elemento de lista?",
        answer: "li",
        options: ["li", "item", "list-item", "element"]
      },
      {
        id: 7,
        question: "¿Qué etiqueta se usa para un botón?",
        answer: "button",
        options: ["button", "btn", "input", "submit"]
      },
      {
        id: 8,
        question: "¿Qué etiqueta se usa para un formulario?",
        answer: "form",
        options: ["form", "formulario", "input-group", "container"]
      },
      {
        id: 9,
        question: "¿Qué etiqueta se usa para un input?",
        answer: "input",
        options: ["input", "text", "field", "box"]
      },
      {
        id: 10,
        question: "¿Qué etiqueta se usa para un div?",
        answer: "div",
        options: ["div", "container", "box", "section"]
      }
    ],
    DIFICIL: [
      {
        id: 1,
        question: "¿Qué etiqueta se usa para un párrafo?",
        answer: "p",
        options: ["p", "paragraph", "text", "para"]
      },
      {
        id: 2,
        question: "¿Qué etiqueta se usa para un enlace?",
        answer: "a",
        options: ["a", "link", "href", "url"]
      },
      {
        id: 3,
        question: "¿Qué etiqueta se usa para una imagen?",
        answer: "img",
        options: ["img", "image", "picture", "photo"]
      },
      {
        id: 4,
        question: "¿Qué etiqueta se usa para un título?",
        answer: "h1",
        options: ["h1", "title", "heading", "header"]
      },
      {
        id: 5,
        question: "¿Qué etiqueta se usa para una lista?",
        answer: "ul",
        options: ["ul", "list", "ol", "li"]
      },
      {
        id: 6,
        question: "¿Qué etiqueta se usa para un elemento de lista?",
        answer: "li",
        options: ["li", "item", "list-item", "element"]
      },
      {
        id: 7,
        question: "¿Qué etiqueta se usa para un botón?",
        answer: "button",
        options: ["button", "btn", "input", "submit"]
      },
      {
        id: 8,
        question: "¿Qué etiqueta se usa para un formulario?",
        answer: "form",
        options: ["form", "formulario", "input-group", "container"]
      },
      {
        id: 9,
        question: "¿Qué etiqueta se usa para un input?",
        answer: "input",
        options: ["input", "text", "field", "box"]
      },
      {
        id: 10,
        question: "¿Qué etiqueta se usa para un div?",
        answer: "div",
        options: ["div", "container", "box", "section"]
      }
    ],
    PRO: [
      {
        id: 1,
        question: "¿Cuál es la mejor práctica para implementar un sistema de pestañas accesible?",
        correctAnswer: "Usar role='tablist', role='tab' y role='tabpanel' con aria-selected y aria-controls",
        options: [
          "Usar role='tablist', role='tab' y role='tabpanel' con aria-selected y aria-controls",
          "Usar solo divs con clases CSS para las pestañas",
          "Implementar las pestañas solo con JavaScript",
          "Usar elementos button sin roles ARIA"
        ]
      },
      {
        id: 2,
        question: "¿Cuál es la forma correcta de implementar un menú desplegable accesible?",
        correctAnswer: "Usar role='menubar', role='menu' y role='menuitem' con aria-haspopup y aria-expanded",
        options: [
          "Usar role='menubar', role='menu' y role='menuitem' con aria-haspopup y aria-expanded",
          "Usar solo elementos select y option",
          "Implementar el menú solo con CSS y JavaScript",
          "Usar elementos div con clases para el menú"
        ]
      },
      {
        id: 3,
        question: "¿Cuál es la mejor práctica para implementar una galería de imágenes accesible?",
        correctAnswer: "Usar role='region', role='img' y role='status' con aria-live para actualizaciones",
        options: [
          "Usar role='region', role='img' y role='status' con aria-live para actualizaciones",
          "Usar solo elementos img sin roles ARIA",
          "Implementar la galería solo con JavaScript",
          "Usar elementos div con clases para la galería"
        ]
      },
      {
        id: 4,
        question: "¿Cuál es la forma correcta de implementar un editor de texto accesible?",
        correctAnswer: "Usar role='application', role='toolbar' y role='textbox' con aria-multiline",
        options: [
          "Usar role='application', role='toolbar' y role='textbox' con aria-multiline",
          "Usar solo elementos textarea sin roles ARIA",
          "Implementar el editor solo con JavaScript",
          "Usar elementos div con contenteditable sin roles"
        ]
      },
      {
        id: 5,
        question: "¿Cuál es la mejor práctica para implementar un árbol de navegación accesible?",
        correctAnswer: "Usar role='tree', role='treeitem' y aria-level para la jerarquía",
        options: [
          "Usar role='tree', role='treeitem' y aria-level para la jerarquía",
          "Usar solo elementos ul y li sin roles ARIA",
          "Implementar el árbol solo con JavaScript",
          "Usar elementos div con clases para el árbol"
        ]
      },
      {
        id: 6,
        question: "¿Cuál es la forma correcta de implementar una cuadrícula de datos accesible?",
        correctAnswer: "Usar role='grid', role='row', role='cell' y role='columnheader' con aria-sort",
        options: [
          "Usar role='grid', role='row', role='cell' y role='columnheader' con aria-sort",
          "Usar solo elementos table sin roles ARIA",
          "Implementar la cuadrícula solo con JavaScript",
          "Usar elementos div con clases para la cuadrícula"
        ]
      },
      {
        id: 7,
        question: "¿Cuál es la mejor práctica para implementar un diálogo modal accesible?",
        correctAnswer: "Usar role='dialog' con aria-labelledby, aria-describedby y manejo del foco",
        options: [
          "Usar role='dialog' con aria-labelledby, aria-describedby y manejo del foco",
          "Usar solo elementos div sin roles ARIA",
          "Implementar el diálogo solo con JavaScript",
          "Usar elementos iframe para el contenido modal"
        ]
      },
      {
        id: 8,
        question: "¿Cuál es la forma correcta de implementar un formulario de búsqueda accesible?",
        correctAnswer: "Usar role='search' con aria-label y role='group' para los filtros",
        options: [
          "Usar role='search' con aria-label y role='group' para los filtros",
          "Usar solo elementos form sin roles ARIA",
          "Implementar la búsqueda solo con JavaScript",
          "Usar elementos input sin roles ni etiquetas"
        ]
      },
      {
        id: 9,
        question: "¿Cuál es la mejor práctica para implementar una alerta dinámica accesible?",
        correctAnswer: "Usar role='alert' con aria-live='assertive' para mensajes importantes",
        options: [
          "Usar role='alert' con aria-live='assertive' para mensajes importantes",
          "Usar solo elementos div sin roles ARIA",
          "Implementar la alerta solo con JavaScript",
          "Usar elementos p con clases para las alertas"
        ]
      },
      {
        id: 10,
        question: "¿Cuál es la forma correcta de implementar una región complementaria accesible?",
        correctAnswer: "Usar role='complementary' con aria-label para contenido relacionado",
        options: [
          "Usar role='complementary' con aria-label para contenido relacionado",
          "Usar solo elementos aside sin roles ARIA",
          "Implementar la región solo con JavaScript",
          "Usar elementos div con clases para el contenido"
        ]
      }
    ]
  }
}; 