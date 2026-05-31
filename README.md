# JavaScript Calculator

<p align="center">
  <img src="https://github.com/sorgazb/JavaScript_Calculator/assets/150727714/d94ae320-08f1-4100-8e74-e0444569dc82" alt="JavaScript Calculator Screenshot" />
</p>

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-f7df1e?style=for-the-badge&logo=javascript)&nbsp;![HTML5](https://img.shields.io/badge/HTML5-Semántico-e34f26?style=for-the-badge&logo=html5)&nbsp;![CSS3](https://img.shields.io/badge/CSS3-Estilos-1572b6?style=for-the-badge&logo=css3)&nbsp;![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Live-181717?style=for-the-badge&logo=github)&nbsp;![Proyecto Propio](https://img.shields.io/badge/Proyecto-Propio-43a047?style=for-the-badge)

> **JavaScript Calculator** es una calculadora web funcional desarrollada desde cero con HTML, CSS y JavaScript vanilla. Soporta operaciones aritméticas básicas, potenciación y números decimales, con una interfaz limpia e intuitiva.

🔗 **[Prueba la Calculadora aquí!](https://sorgazb.github.io/JavaScript_Calculator/)**

---

## 📋 Descripción

Calculadora web construida sin frameworks ni librerías externas, poniendo en práctica el DOM, la gestión de eventos y la lógica de estado en JavaScript puro. Sus funcionalidades incluyen:

- **Operaciones aritméticas**: suma (`+`), resta (`-`), multiplicación (`x`) y división (`/`).
- **Potenciación** (`^`) usando `Math.pow()`.
- **Soporte de decimales** con botón de coma, con validación para evitar doble punto.
- **Pantalla en tiempo real** que muestra la expresión completa mientras se introduce.
- **Reset completo** del estado interno con el botón de limpiar.
- **Lógica de estado** con `operando1`, `operando2` y `operador` gestionados en memoria.

---

## 🏗️ Estructura del Proyecto

```txt
JavaScript_Calculator/
├── index.html        # Estructura de la calculadora y botones
├── css/
│   └── style.css     # Estilos y diseño visual de la calculadora
├── js/
│   └── main.js       # Lógica completa: estado, operaciones y manipulación del DOM
├── .gitignore        # Archivos y carpetas ignorados
└── README.md         # Documentación del proyecto
```

---

## ⚙️ Uso

Clona el repositorio:
```txt
git clone https://github.com/sorgazb/JavaScript_Calculator.git
cd JavaScript_Calculator
```

Abre directamente en el navegador:
```txt
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

O usa la extensión **Live Server** de VS Code para recarga automática.

---

## 🚀 Funciones principales

| Función | Descripción |
|---|---|
| `introducirNumero(n)` | Añade un dígito al operando activo |
| `introducirComa()` | Añade el punto decimal con validación de duplicados |
| `realizarOperacion(op)` | Guarda el operador seleccionado (`+`, `-`, `x`, `/`, `^`) |
| `resolverOperacion()` | Calcula el resultado con `switch` sobre el operador activo |
| `resetearPantalla()` | Reinicia todos los valores al estado inicial |
| `actualizarPantalla()` | Sincroniza el display con el estado interno |

---

## 🤝 Contribución

Haz fork del repositorio.

Crea una rama de trabajo:

```txt
git checkout -b feature/nueva-funcionalidad
```

Realiza tus cambios y haz commit.

Abre un Pull Request describiendo tus mejoras.

---

<p align="center">Proyecto Personal &mdash; Sergio Orgaz Bravo</p>
