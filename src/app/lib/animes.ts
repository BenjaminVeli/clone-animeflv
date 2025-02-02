export async function getAnimes() {
    const res = await fetch('http://localhost:3000/api/animes', { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch animes');
    return res.json();
  }