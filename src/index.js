import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/Index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals'; // Uncomment if you create this file

// ============================================
// PERFORMANCE: Create root with concurrent features
// ============================================
const root = ReactDOM.createRoot(
  document.getElementById('root'),
  {
    // Enable concurrent features for better performance
    // identifierPrefix: 'bonai-portfolio-',
  }
);

// ============================================
// PERFORMANCE: Hydrate instead of render for SSR (if applicable)
// ============================================
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ============================================
// WEB VITALS: Measure and report performance
// ============================================
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// Uncomment to enable Web Vitals reporting:
// reportWebVitals((metric) => {
//   // Send to analytics
//   console.log(metric);
//   
//   // Example: Send to Google Analytics
//   // window.gtag('event', metric.name, {
//   //   value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
//   //   event_category: 'Web Vitals',
//   //   event_label: metric.id,
//   //   non_interaction: true,
//   // });
// });

// ============================================
// SERVICE WORKER: Enable for PWA capabilities
// ============================================
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker
//       .register('/service-worker.js')
//       .then((registration) => {
//         console.log('SW registered: ', registration);
//       })
//       .catch((registrationError) => {
//         console.log('SW registration failed: ', registrationError);
//       });
//   });
// }