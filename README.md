 <h1 style="color:darkred;">🔥 API REST para Transformación de Números Romanos y Decimales 🔥</h1>

<h2 style="color:navy;">📖 Descripción del Proyecto</h2>
Este trabajo consiste en una API RESTful desarrollada con <b>Node.js</b> y <b>Express</b> que permite la conversión en ambos sentidos entre el sistema de numeración romano y el sistema decimal (arábigo).  

Cumple con los requerimientos solicitados por el Profesor, incluyendo un traductor sólido, pruebas unitarias con <b>Jest</b> y la publicación en la plataforma <b>Vercel</b>.

---

<h2 style="color:darkgreen;">✅ Requisitos de la Actividad Alcanzados</h2>

| Requisito | Estado |
|-----------|--------|
| Crear un traductor de Romano a Decimal | ✅ Implementado (romanToArabic) |
| Crear un traductor de Decimal a Romano | ✅ Implementado (arabicToRoman) |
| API compatible con el formato del profesor | ✅ Implementado (Rutas /r2a/:romanNum y /a2r/:arabicNum) |
| Incluir Pruebas Unitarias | ✅ Implementado (Jest) |
| Publicación en Vercel | 🚀 Preparado para desplegarse |

---

<h2 style="color:purple;">💻 Tecnologías Empleadas</h2>

- **Servidor:** Node.js  
- **Framework Web:** Express  
- **Pruebas:** Jest  
- **Hosting:** Vercel  

---

<h2 style="color:orange;">🔗 Rutas de la API</h2>

1. <b>Transformación de Romano a Decimal (R2A)</b>  
   - Método: GET  
   - Ruta: `/r2a?roman=VALOR_ROMANO`  
   - Ejemplo:  
     - Solicitud: `/r2a?roman=MCMXCIV`  
     - Respuesta: `{"roman": "MCMXCIV", "arabic": 1994}`  

2. <b>Transformación de Decimal a Romano (A2R)</b>  
   - Método: GET  
   - Ruta: `/a2r?arabic=VALOR_DECIMAL`  
   - Ejemplo:  
     - Solicitud: `/a2r?arabic=4`  
     - Respuesta: `{"arabic": 4, "roman": "IV"}`  

---

<h2 style="color:crimson;">⚠️ Gestión de Errores</h2>

La API incluye un middleware global que maneja errores de validación:  

- `/r2a/IIA` → `{"error": "Error", "message": "Caracteres inválidos encontrados..."}`  
- `/a2r/4000` → `{"error": "RangeError", "message": "El número decimal debe estar entre 1 y 3999."}`  

---

<h2 style="color:teal;">🚀 Implementación y Uso Local</h2>

Instalación de dependencias:
```bash
npm install
