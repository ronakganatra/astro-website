import { FASTLY_KEY, FASTLY_SERVICE_ID } from 'astro:env/server';

export async function invalidateFastlySurrogateKeys(keys: string[]) {
  const response = await fetch(`https://api.fastly.com/service/${FASTLY_SERVICE_ID}/purge`, {
    method: 'POST',
    headers: {
      'fastly-key': FASTLY_KEY,
      'content-type': 'application/json',
    },
    body: JSON.stringify({ surrogate_keys: keys }),
  });

  return await response.json();
}
