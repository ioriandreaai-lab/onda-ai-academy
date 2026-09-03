# Onda AI Academy

Landing page del corso "ChatGPT per tutti" — Onda AI Academy (Giulia Forghieri).

Sito statico, nessuna build: deploy diretto su Vercel dal push su `main`. Il marchio della topbar è `logo.png`, un file a parte; le altre immagini restano incorporate in `index.html` come base64.

## Form di iscrizione

Il form (`#iscrizioneForm`) prova prima a mandare i dati al tuo Google Apps Script (Sheet + email). Se non è ancora configurato, va in fallback su [FormSubmit](https://formsubmit.co) verso `forghieri.giulia@gmail.com` — quindi il form funziona da subito anche prima di collegare il Sheet.

### Collega Google Sheet + email

1. Crea un nuovo Google Sheet (es. "Iscrizioni ChatGPT per tutti").
2. Nella prima riga metti le intestazioni: `Data | Nome | Telefono | Email | Azienda | Variante | Source | Pagina`.
3. Vai su **Estensioni > Apps Script**, cancella il contenuto di default e incolla il contenuto di `google-apps-script.gs` (in questa cartella).
4. In alto a destra, **Distribuisci > Nuova distribuzione**. Tipo: **App web**. Esegui come: **me**. Chi ha accesso: **Chiunque**.
5. Autorizza i permessi richiesti (accesso al foglio e invio email dal tuo account Gmail).
6. Copia l'URL della web app che ti viene dato (finisce con `/exec`).
7. In `index.html`, cerca `GOOGLE_SCRIPT_URL` (vicino a fine file) e sostituisci `'PASTE_YOUR_APPS_SCRIPT_URL_HERE'` con l'URL appena copiato.
8. Fai commit e push: Vercel farà il redeploy automatico.

Ogni iscrizione da quel momento: finisce come riga nel Sheet **e** manda una email di notifica a `forghieri.giulia@gmail.com` (modifica la variabile `destinatario` in `google-apps-script.gs` se vuoi cambiare o aggiungere destinatari).

Se in futuro modifichi lo script, ripeti il passaggio "Nuova distribuzione" (o gestisci le versioni da **Distribuisci > Gestisci distribuzioni**) — l'URL resta lo stesso solo se aggiorni la distribuzione esistente invece di crearne una nuova.

## Landing verticali

Sei percorsi, un file solo. `vercel.json` riscrive ogni percorso su `index.html`, e lo script in fondo alla pagina sostituisce titolo, sottotitolo, esempio della chat, testo del bottone e ordine dei profili in "Per chi è pensato" in base a `location.pathname`.

| Percorso | Angolo |
|---|---|
| `/` | default, traffico organico e messaggi diretti |
| `/titolari` | titolari e artigiani, gancio sul preventivo |
| `/donne` | imprenditrici e professioniste |
| `/ci-ho-provato` | chi ha provato ChatGPT e ha mollato |
| `/dati-aziendali` | chi già lo usa al lavoro, gancio sui dati |
| `/tempo` | trasversale, variante di controllo del test |

I testi stanno nell'oggetto `VARIANTI` in fondo a `index.html`. Per aggiungere una landing: una voce nell'oggetto e un rewrite in `vercel.json`. La variante viene passata al Google Sheet nel campo `variante`, così ogni contatto porta con sé l'angolo da cui è arrivato.

Nota per chi installa il banner cookie: il blocco preventivo va applicato una volta sola qui, e vale per tutti e sei i percorsi.
