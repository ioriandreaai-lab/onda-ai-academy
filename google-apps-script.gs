// Incolla questo codice in Estensioni > Apps Script del tuo Google Sheet.
// Istruzioni complete nel README.md, sezione "Collega Google Sheet + email".

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = e.parameter;

  sheet.appendRow([
    new Date(),
    data.nome || '',
    data.telefono || '',
    data.source || '',
    data.page || ''
  ]);

  var destinatari = ['forghieri.giulia@gmail.com', 'iori.andrea.ai@gmail.com'];
  var oggetto = 'Nuova iscrizione — ChatGPT per tutti (Onda AI Academy)';
  var corpo = 'Nuova richiesta di iscrizione al corso "ChatGPT per tutti":\n\n' +
    'Nome: ' + (data.nome || '-') + '\n' +
    'Telefono: ' + (data.telefono || '-') + '\n' +
    'Data: ' + new Date().toLocaleString('it-IT') + '\n\n' +
    'Richiama entro 24h per confermare il posto.';

  MailApp.sendEmail(destinatari.join(','), oggetto, corpo);

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
