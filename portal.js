const button = document.getElementById('open');
const status = document.getElementById('status');
try {
  const u = new URL(window.VERITY_CONFIG?.backendUrl || '');
  if (u.protocol !== 'https:' || u.username || u.password || u.port || u.search || u.hash ||
      !u.hostname.includes('.') || u.hostname.endsWith('.example') ||
      u.hostname.endsWith('.local') || u.hostname.endsWith('.localhost') ||
      /^[0-9.]+$/.test(u.hostname)) throw new Error('Not configured');
  button.href = u.href;
  button.removeAttribute('aria-disabled');
  status.textContent = 'Po otevření se přihlásíš. Pokud je PC vypnutý, aplikace nebude dostupná.';
} catch {
  button.removeAttribute('href');
  button.addEventListener('click', e => e.preventDefault());
}
