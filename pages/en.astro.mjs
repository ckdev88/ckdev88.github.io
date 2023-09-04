export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('../chunks/pages/index.astro.8b5e04ca.mjs').then(n => n.a);

export { page };
