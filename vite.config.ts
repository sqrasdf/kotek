// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// import { defineConfig } from "vite";

// export default defineConfig({
//   server: {
//     host: "0.0.0.0", // Udostępnienie w sieci lokalnej
//     port: 5173, // Możesz zmienić port, jeśli chcesz
//     strictPort: true, // Zapewnia, że używany jest dokładnie ten port
//   },
// });

import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 5173,
    proxy: {
      "/api": {
        target: "http://192.168.1.100:5000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
