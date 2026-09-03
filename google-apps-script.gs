// Incolla questo codice in Estensioni > Apps Script del tuo Google Sheet.
// Istruzioni complete nel README.md, sezione "Collega Google Sheet + email".

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = e.parameter;

  sheet.appendRow([
    new Date(),
    data.nome || '',
    data.telefono || '',
    data.email || '',
    data.azienda || '',
    data.variante || '',
    data.source || '',
    data.page || '',
    data.consensoPrivacy || '',
    data.consensoMarketing || ''
  ]);

  var destinatario = 'forghieri.giulia@gmail.com';
  var oggetto = 'Nuova iscrizione — ChatGPT per tutti (Onda AI Academy)';
  var corpo = 'Nuova richiesta di iscrizione al corso "ChatGPT per tutti":\n\n' +
    'Nome: ' + (data.nome || '-') + '\n' +
    'Telefono: ' + (data.telefono || '-') + '\n' +
    'Email: ' + (data.email || '-') + '\n' +
    'Azienda: ' + (data.azienda || '-') + '\n' +
    'Arrivato da: ' + (data.variante || '-') + '\n' +
    'Consenso marketing: ' + (data.consensoMarketing || '-') + '\n' +
    'Data: ' + new Date().toLocaleString('it-IT') + '\n\n' +
    'Richiama entro 24h per confermare il posto.';

  MailApp.sendEmail(destinatario, oggetto, corpo);

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
