// Вставьте этот код в Google Apps Script (script.google.com)
// и задеплойте как Web App (Execute as: Me, Who has access: Anyone)

function doPost(e) {
  return saveData(e.parameter);
}

function doGet(e) {
  return saveData(e.parameter);
}

function saveData(params) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var name      = params.name   || "";
    var phone     = params.phone  || "";
    var source    = params.source || "";
    var page      = params.page   || "";
    var timestamp = Utilities.formatDate(new Date(), "Asia/Almaty", "dd.MM.yyyy HH:mm:ss");

    if (!name && !phone) {
      return ContentService
        .createTextOutput(JSON.stringify({ result: "skip" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

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
