export const phpPuzzles = {
  puzzle1: {
    BASICO: [
      {
        id: 1,
        question: "¿Cuál es la forma correcta de declarar una variable en PHP?",
        correctAnswer: "$variable",
        options: ["$variable", "var variable", "let variable", "const variable"]
      },
      {
        id: 2,
        question: "¿Qué función se usa para imprimir en PHP?",
        correctAnswer: "echo",
        options: ["echo", "print", "console.log", "printf"]
      },
      {
        id: 3,
        question: "¿Cuál es el operador de concatenación en PHP?",
        correctAnswer: ".",
        options: [".", "+", "&", "|"]
      },
      {
        id: 4,
        question: "¿Qué función se usa para obtener la longitud de un string?",
        correctAnswer: "strlen()",
        options: ["strlen()", "length()", "count()", "size()"]
      },
      {
        id: 5,
        question: "¿Cuál es la forma correcta de crear un array en PHP?",
        correctAnswer: "array()",
        options: ["array()", "[]", "{}", "()"]
      },
      {
        id: 6,
        question: "¿Qué función se usa para incluir un archivo en PHP?",
        correctAnswer: "include",
        options: ["include", "import", "require", "load"]
      },
      {
        id: 7,
        question: "¿Cuál es la forma correcta de crear una función en PHP?",
        correctAnswer: "function nombre() {}",
        options: ["function nombre() {}", "def nombre() {}", "func nombre() {}", "create nombre() {}"]
      },
      {
        id: 8,
        question: "¿Qué función se usa para obtener la fecha actual en PHP?",
        correctAnswer: "date()",
        options: ["date()", "time()", "now()", "current()"]
      },
      {
        id: 9,
        question: "¿Cuál es la forma correcta de crear una constante en PHP?",
        correctAnswer: "define()",
        options: ["define()", "const", "let", "var"]
      },
      {
        id: 10,
        question: "¿Qué función se usa para convertir un string a array en PHP?",
        correctAnswer: "explode()",
        options: ["explode()", "split()", "toArray()", "convert()"]
      }
    ],
    NORMAL: [
      {
        id: 1,
        question: "¿Qué función se usa para eliminar espacios al inicio y final de un string?",
        correctAnswer: "trim()",
        options: ["trim()", "strip()", "cut()", "clean()"]
      },
      {
        id: 2,
        question: "¿Cuál es la función para buscar un valor en un array?",
        correctAnswer: "in_array()",
        options: ["in_array()", "array_search()", "find()", "search()"]
      },
      {
        id: 3,
        question: "¿Qué función se usa para contar elementos de un array?",
        correctAnswer: "count()",
        options: ["count()", "size()", "length()", "total()"]
      },
      {
        id: 4,
        question: "¿Cuál es la función para unir elementos de un array en un string?",
        correctAnswer: "implode()",
        options: ["implode()", "join()", "merge()", "concat()"]
      },
      {
        id: 5,
        question: "¿Qué función se usa para dividir un string en un array?",
        correctAnswer: "explode()",
        options: ["explode()", "split()", "toArray()", "divide()"]
      },
      {
        id: 6,
        question: "¿Cuál es la función para obtener la posición de un valor en un array?",
        correctAnswer: "array_search()",
        options: ["array_search()", "in_array()", "find()", "search()"]
      },
      {
        id: 7,
        question: "¿Qué función se usa para convertir un array en string?",
        correctAnswer: "implode()",
        options: ["implode()", "join()", "merge()", "concat()"]
      },
      {
        id: 8,
        question: "¿Cuál es la función para obtener la clave de un valor en un array asociativo?",
        correctAnswer: "array_search()",
        options: ["array_search()", "key()", "find_key()", "search_key()"]
      },
      {
        id: 9,
        question: "¿Qué función se usa para convertir un array a JSON?",
        correctAnswer: "json_encode()",
        options: ["json_encode()", "toJSON()", "array_to_json()", "encodeJSON()"]
      },
      {
        id: 10,
        question: "¿Cuál es la función para convertir JSON a array?",
        correctAnswer: "json_decode()",
        options: ["json_decode()", "fromJSON()", "json_to_array()", "decodeJSON()"]
      }
    ],
    DIFICIL: [
      {
        id: 1,
        question: "¿Qué función se usa para recorrer un array y aplicar una función a cada elemento?",
        correctAnswer: "array_map()",
        options: ["array_map()", "array_walk()", "foreach()", "map()"]
      },
      {
        id: 2,
        question: "¿Cuál es la función para filtrar elementos de un array?",
        correctAnswer: "array_filter()",
        options: ["array_filter()", "filter()", "array_map()", "filter_array()"]
      },
      {
        id: 3,
        question: "¿Qué función se usa para reducir un array a un solo valor?",
        correctAnswer: "array_reduce()",
        options: ["array_reduce()", "reduce()", "array_sum()", "sum()"]
      },
      {
        id: 4,
        question: "¿Cuál es la función para obtener las claves de un array?",
        correctAnswer: "array_keys()",
        options: ["array_keys()", "keys()", "get_keys()", "array_get_keys()"]
      },
      {
        id: 5,
        question: "¿Qué función se usa para obtener los valores de un array?",
        correctAnswer: "array_values()",
        options: ["array_values()", "values()", "get_values()", "array_get_values()"]
      },
      {
        id: 6,
        question: "¿Cuál es la función para comprobar si una variable está definida?",
        correctAnswer: "isset()",
        options: ["isset()", "defined()", "exists()", "is_set()"]
      },
      {
        id: 7,
        question: "¿Qué función se usa para eliminar un elemento de un array?",
        correctAnswer: "unset()",
        options: ["unset()", "remove()", "delete()", "unset_array()"]
      },
      {
        id: 8,
        question: "¿Cuál es la función para comprobar si una variable es un array?",
        correctAnswer: "is_array()",
        options: ["is_array()", "array()", "check_array()", "isArray()"]
      },
      {
        id: 9,
        question: "¿Qué función se usa para obtener el tipo de una variable?",
        correctAnswer: "gettype()",
        options: ["gettype()", "typeof()", "type()", "get_type()"]
      },
      {
        id: 10,
        question: "¿Cuál es la función para comprobar si una variable es numérica?",
        correctAnswer: "is_numeric()",
        options: ["is_numeric()", "isNumber()", "numeric()", "is_num()"]
      }
    ]
  },
  puzzle2: {
    BASICO: [
      {
        id: 1,
        correctOrder: [
          "<?php",
          "function saludar($nombre) { return 'Hola, ' . $nombre; }",
          "?>"
        ]
      },
      {
        id: 2,
        correctOrder: [
          "<?php",
          "$numeros = [1, 2, 3, 4, 5]; $suma = array_sum($numeros); echo $suma;",
          "?>"
        ]
      },
      {
        id: 3,
        correctOrder: [
          "<?php",
          "class Usuario { private $nombre; public function __construct($nombre) { $this->nombre = $nombre; } public function getNombre() { return $this->nombre; } }",
          "?>"
        ]
      },
      {
        id: 4,
        correctOrder: [
          "<?php",
          "try { $conexion = new PDO('mysql:host=localhost;dbname=test', 'usuario', 'contraseña'); $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); } catch(PDOException $e) { echo 'Error: ' . $e->getMessage(); }",
          "?>"
        ]
      },
      {
        id: 5,
        correctOrder: [
          "<?php",
          "session_start(); $_SESSION['usuario'] = 'Juan'; echo $_SESSION['usuario'];",
          "?>"
        ]
      },
      {
        id: 6,
        correctOrder: [
          "<?php",
          "function factorial($n) { if ($n <= 1) return 1; return $n * factorial($n - 1); }",
          "?>"
        ]
      },
      {
        id: 7,
        correctOrder: [
          "<?php",
          "$archivo = 'datos.txt'; if (file_exists($archivo)) { $contenido = file_get_contents($archivo); echo $contenido; }",
          "?>"
        ]
      },
      {
        id: 8,
        correctOrder: [
          "<?php",
          "function esPalindromo($str) { $limpio = strtolower(preg_replace('/[^a-z0-9]/', '', $str)); return $limpio === strrev($limpio); }",
          "?>"
        ]
      },
      {
        id: 9,
        correctOrder: [
          "<?php",
          "$json = '{\"nombre\": \"Juan\", \"edad\": 25}'; $datos = json_decode($json, true); echo $datos['nombre'];",
          "?>"
        ]
      },
      {
        id: 10,
        correctOrder: [
          "<?php",
          "function filtrarPares($array) { return array_filter($array, function($num) { return $num % 2 === 0; }); }",
          "?>"
        ]
      }
    ],
    NORMAL: [
      // TODO: Añadir 10 challenges nivel Normal
    ],
    DIFICIL: [
      // TODO: Añadir 10 challenges nivel Difícil
    ]
  },
  puzzle3: {
    BASICO: [
      {
        id: 1,
        question: "¿Palabra clave para declarar una variable?",
        answer: "$"
      },
      {
        id: 2,
        question: "¿Función para imprimir en pantalla?",
        answer: "echo"
      },
      {
        id: 3,
        question: "¿Función para obtener la longitud de un string?",
        answer: "strlen"
      },
      {
        id: 4,
        question: "¿Función para convertir un string a array?",
        answer: "explode"
      },
      {
        id: 5,
        question: "¿Función para unir elementos de un array en un string?",
        answer: "implode"
      },
      {
        id: 6,
        question: "¿Palabra clave para definir una función?",
        answer: "function"
      },
      {
        id: 7,
        question: "¿Palabra clave para definir una constante?",
        answer: "define"
      },
      {
        id: 8,
        question: "¿Función para obtener la fecha actual?",
        answer: "date"
      },
      {
        id: 9,
        question: "¿Palabra clave para incluir un archivo?",
        answer: "include"
      },
      {
        id: 10,
        question: "¿Palabra clave para crear una clase?",
        answer: "class"
      }
    ],
    NORMAL: [
      // TODO: Añadir 10 preguntas nivel Normal
    ],
    DIFICIL: [
      // TODO: Añadir 10 preguntas nivel Difícil
    ]
  },
  puzzle4: {
    BASICO: [
      {
        id: 1,
        question: "¿Cuál es la función para obtener la fecha actual en PHP?",
        correctAnswer: "date()",
        options: ["date()", "time()", "now()", "current()"]
      },
      {
        id: 2,
        question: "¿Qué función se usa para formatear una fecha en PHP?",
        correctAnswer: "date_format()",
        options: ["date_format()", "format_date()", "strftime()", "format()"]
      },
      {
        id: 3,
        question: "¿Cuál es la función para obtener la marca de tiempo actual?",
        correctAnswer: "time()",
        options: ["time()", "timestamp()", "now()", "current()"]
      },
      {
        id: 4,
        question: "¿Qué función se usa para convertir una fecha a timestamp?",
        correctAnswer: "strtotime()",
        options: ["strtotime()", "to_timestamp()", "convert_date()", "date_to_time()"]
      },
      {
        id: 5,
        question: "¿Cuál es la función para obtener la diferencia entre fechas?",
        correctAnswer: "date_diff()",
        options: ["date_diff()", "diff_date()", "date_compare()", "compare_dates()"]
      },
      {
        id: 6,
        question: "¿Qué función se usa para añadir días a una fecha?",
        correctAnswer: "date_add()",
        options: ["date_add()", "add_days()", "date_modify()", "modify_date()"]
      },
      {
        id: 7,
        question: "¿Cuál es la función para obtener el día de la semana?",
        correctAnswer: "date('w')",
        options: ["date('w')", "weekday()", "get_day()", "day_of_week()"]
      },
      {
        id: 8,
        question: "¿Qué función se usa para validar una fecha?",
        correctAnswer: "checkdate()",
        options: ["checkdate()", "validate_date()", "is_date()", "date_valid()"]
      },
      {
        id: 9,
        question: "¿Cuál es la función para obtener el último día del mes?",
        correctAnswer: "date('t')",
        options: ["date('t')", "last_day()", "end_of_month()", "month_end()"]
      },
      {
        id: 10,
        question: "¿Qué función se usa para formatear una fecha en español?",
        correctAnswer: "strftime()",
        options: ["strftime()", "format_date()", "date_format()", "format()"]
      }
    ],
    NORMAL: [
      // TODO: Añadir 10 preguntas nivel Normal
    ],
    DIFICIL: [
      // TODO: Añadir 10 preguntas nivel Difícil
    ]
  }
}; 