import { createDirectus, rest } from '@directus/sdk';

const url = import.meta.env.PUBLIC_DIRECTUS_URL;

if (!url) {
  console.error("⚠️ ERROR: La variable PUBLIC_DIRECTUS_URL no está definida en el .env");
}

const directus = createDirectus(url || 'http://localhost:8055').with(rest());

export default directus;