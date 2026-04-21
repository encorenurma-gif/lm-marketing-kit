// Вставьте этот код в Google Apps Script (script.google.com)
// и задеплойте как Web App (Execute as: Me, Who has access: Anyone)

function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var name      = e.parameter.name   || "";
    var phone     = e.parameter.phone  || "";
    var source    = e.parameter.source || "";
    var page      = e.parameter.page   || "";
    var timestamp = Utilities.formatDate(new Date(), "Asia/Almaty", "dd.MM.yyyy HH:mm:ss");

    sheet.appendRow([timestamp, name, phone, source, page]);

    return ContentService
      .createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// При необходимости GET (для теста)
function doGet(e) {
  return ContentService.createTextOutput("OK");
}
