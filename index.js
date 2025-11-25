const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

/**
 * Función que convierte números arábigos a romanos.
 */
function arabicToRoman(num) {
    const tabla = [
        { val: 1000, rom: 'M' },
        { val: 900, rom: 'CM' },
        { val: 500, rom: 'D' },
        { val: 400, rom: 'CD' },
        { val: 100, rom: 'C' },
        { val: 90, rom: 'XC' },
        { val: 50, rom: 'L' },
        { val: 40, rom: 'XL' },
        { val: 10, rom: 'X' },
        { val: 9, rom: 'IX' },
        { val: 5, rom: 'V' },
        { val: 4, rom: 'IV' },
        { val: 1, rom: 'I' },
    ];

    let n = num;
    let res = '';
    for (const { val, rom } of tabla) {
        while (n >= val) {
            res += rom;
            n -= val;
        }
    }
    return res;
}

/**
 * Función que convierte números romanos a arábigos.
 */
function romanToArabic(romano) {
    const valores = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 };
    let total = 0;
    const s = romano.toUpperCase();
    for (let i = 0; i < s.length; i++) {
        const actual = valores[s[i]];
        const siguiente = i + 1 < s.length ? valores[s[i+1]] : 0;
        if (actual < siguiente) {
            total += (siguiente - actual);
            i++;
        } else {
            total += actual;
        }
    }
    return total;
}

/**
 * 🔗 RUTA RAÍZ - Info de la API
 */
app.get('/', (req, res) => {
    res.json({
        message: "API de Conversión de Números Romanos y Arábigos",
        version: "1.0.0",
        endpoints: {
            "Romano a Arábigo": "/r2a?roman=IV",
            "Arábigo a Romano": "/a2r?arabic=4"
        },
        ejemplos: [
            "GET /r2a?roman=MMXXIV → Convierte romano a arábigo",
            "GET /a2r?arabic=2024 → Convierte arábigo a romano"
        ]
    });
});

/**
 * 🔗 ENDPOINT 1: Romano a Arábigo (R2A)
 * Ejemplo: /r2a?roman=IV -> { "roman": "IV", "arabic": 4 }
 */
app.get('/r2a', (req, res, next) => {
    try {
        const roman = req.query.roman;
        if (!roman || typeof roman !== 'string') {
            throw new TypeError("El parámetro 'roman' es inválido o ausente.");
        }

        const arabic = romanToArabic(roman);

        res.json({
            roman: roman.toUpperCase(),
            arabic: arabic
        });
    } catch (error) {
        next(error); 
    }
});

/**
 * 🔗 ENDPOINT 2: Arábigo a Romano (A2R)
 * Ejemplo: /a2r?arabic=4 -> { "arabic": 4, "roman": "IV" }
 */
app.get('/a2r', (req, res, next) => {
    try {
        const arabic = parseInt(req.query.arabic, 10); 
        
        if (isNaN(arabic)) {
            throw new TypeError("El parámetro de entrada debe ser un número entero.");
        }

        const roman = arabicToRoman(arabic);

        res.json({
            arabic: arabic,
            roman: roman
        });
    } catch (error) {
        next(error);
    }
});

/**
 * Middleware global para manejo de errores.
 */
app.use((err, req, res, next) => {
    res.status(400).json({
        error: err.name || "Error",
        message: err.message || "Ocurrió un error inesperado."
    });
});

/**
 * Solo para desarrollo local
 */
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Servidor activo en puerto ${PORT}`);
    });
}

/**
 * Exportar app para Vercel
 */
module.exports = app;