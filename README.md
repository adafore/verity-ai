# Verity AI — GitHub Pages vstupní stránka

Samostatný veřejný obsah bez modelů, hesel, účtů a lokálních dat. Není dosud publikovaný.

1. Nejprve dokončit chráněnou HTTPS aplikaci podle `../local-ai/REMOTE_ACCESS.md`.
2. Do `dist/config.js` doplnit jen její veřejnou adresu.
3. Do nového GitHub repozitáře vložit **jen obsah této složky**, ne celý pracovní adresář ani local-ai.
4. V Settings → Pages zvolit GitHub Actions. Workflow publikuje výhradně `dist`.
5. Ověřit GitHub odkaz z telefonu, přihlášení, chat a odmítnutí cizího účtu.

GitHub Pages neumí provozovat Python/Ollamu; stránka pouze otevře aplikaci na PC přes chráněný tunel. Zveřejnění stránky samo nezprovozní vzdálenou AI. PC a služby musí běžet.

Zdroj: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
