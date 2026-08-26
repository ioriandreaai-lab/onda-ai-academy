# Onda AI Academy

Landing page del corso "ChatGPT per tutti" — Onda AI Academy (Giulia Forghieri).

Sito statico, un solo file `index.html` autocontenuto (immagini incluse come base64). Nessuna build necessaria: deploy diretto su Vercel come sito statico.

## Form di iscrizione

Il form (`#iscrizioneForm`) prova prima a mandare i dati al tuo Google Apps Script (Sheet + email). Se non è ancora configurato, va in fallback su [FormSubmit](https://formsubmit.co) verso `forghieri.giulia@gmail.com` — quindi il form funziona da subito anche prima di collegare il Sheet.

### Collega Google Sheet + email

1. Crea un nuovo Google Sheet (es. "Iscrizioni ChatGPT per tutti").
2. Nella prima riga metti le intestazioni: `Data | Nome | Telefono | Source | Pagina`.
3. Vai su **Estensioni > Apps Script**, cancella il contenuto di default e incolla il contenuto di `google-apps-script.gs` (in questa cartella).
4. In alto a destra, **Distribuisci > Nuova distribuzione**. Tipo: **App web**. Esegui come: **me**. Chi ha accesso: **Chiunque**.
5. Autorizza i permessi richiesti (accesso al foglio e invio email dal tuo account Gmail).
6. Copia l'URL della web app che ti viene dato (finisce con `/exec`).
7. In `index.html`, cerca `GOOGLE_SCRIPT_URL` (vicino a fine file) e sostituisci `'PASTE_YOUR_APPS_SCRIPT_URL_HERE'` con l'URL appena copiato.
8. Fai commit e push: Vercel farà il redeploy automatico.

Ogni iscrizione da quel momento: finisce come riga nel Sheet **e** manda una email di notifica a `forghieri.giulia@gmail.com` (modifica la variabile `destinatario` in `google-apps-script.gs` se vuoi cambiare o aggiungere destinatari).

Se in futuro modifichi lo script, ripeti il passaggio "Nuova distribuzione" (o gestisci le versioni da **Distribuisci > Gestisci distribuzioni**) — l'URL resta lo stesso solo se aggiorni la distribuzione esistente invece di crearne una nuova.
