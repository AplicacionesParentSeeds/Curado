# Calculadora de consumo de químicos — PWA

Esta carpeta contiene una aplicación web instalable para celular o tablet.

## Archivos
- `index.html`: calculadora.
- `manifest.json`: nombre, colores e íconos de instalación.
- `sw.js`: funcionamiento sin conexión después de la primera carga.
- `portal-icon-192.png`, `portal-icon-512.png`: íconos de la aplicación.
- `portal-icon-maskable-512.png`: ícono adaptable para Android.
- `apple-touch-icon.png`: ícono para iPhone/iPad.

## Publicación
Subí **todos los archivos juntos**, sin cambiar sus nombres, a GitHub Pages u otro alojamiento HTTPS.
En GitHub Pages, el repositorio debe servir `index.html` desde la raíz.

## Instalación en Android
1. Abrí la URL publicada con Chrome.
2. Menú de Chrome → **Instalar aplicación** o **Agregar a pantalla principal**.
3. Confirmá la instalación.

## Instalación en iPhone/iPad
1. Abrí la URL publicada con Safari.
2. Compartir → **Agregar a inicio**.
3. Confirmá el nombre y tocá **Agregar**.

## Nota
La instalación PWA y el Service Worker requieren HTTPS (GitHub Pages ya lo proporciona). Abrir `index.html` directamente desde Descargas permite usar la calculadora, pero normalmente no habilita la instalación completa ni el modo offline administrado.
