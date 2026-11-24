/**
 * GOOGLE APPS SCRIPT PARA "MESA DE AMIGOS"
 * 
 * 🚀 INSTALACIÓN EN 1 MINUTO:
 * 1. Abre Google Sheets en blanco: https://sheets.new
 * 2. Ve a: Extensiones > Apps Script
 * 3. Borra todo el código que veas y pega TODO este archivo.
 * 4. Guarda (ícono de disquete o Ctrl + S).
 * 5. En el menú desplegable arriba selecciona la función "crearTablasIniciales" y dale a "Ejecutar" (Run).
 *    (Te pedirá aceptar permisos de tu cuenta de Google. Dale a Configuración avanzada > Ir a proyecto > Permitir).
 *    -> ¡ESTO CREARÁ AUTOMÁTICAMENTE LAS 3 PESTAÑAS (Juegos, Sesiones, Amigos) CON FORMATO Y COLORES!
 * 
 * 6. Haz clic en el botón azul "Implementar" (Deploy) arriba a la derecha > "Nueva implementación".
 * 7. Tipo: Selecciona el engranaje ⚙️ > "Aplicación web".
 * 8. Configuración:
 *    - Descripción: "API Mesa de Amigos"
 *    - Ejecutar como: "Yo" (tu cuenta)
 *    - Quién tiene acceso: "Cualquier usuario" (Anyone)
 * 9. Haz clic en "Implementar" y copia la URL que termina en "/exec".
 * 10. Pégala en tu app web en el botón "Nube / DB" y ¡listo!
 */

// Menú en la hoja de cálculo de Google
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('🎲 Mesa de Amigos')
    .addItem('🚀 Inicializar Tablas Automáticamente', 'crearTablasIniciales')
    .addToUi();
}

// Crea las 3 tablas con encabezados y diseño automáticamente
function crearTablasIniciales() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  
  // 1. Pestaña JUEGOS
  let sheetJuegos = ss.getSheetByName('Juegos');
  if (!sheetJuegos) sheetJuegos = ss.insertSheet('Juegos');
  sheetJuegos.clear();
  
  const headersJuegos = ['id', 'title', 'minPlayers', 'maxPlayers', 'durationMin', 'ownerId', 'image', 'description'];
  sheetJuegos.getRange(1, 1, 1, headersJuegos.length).setValues([headersJuegos])
    .setBackground('#7c3aed').setFontColor('#ffffff').setFontWeight('bold');
  
  // Datos iniciales de ejemplo
  const rowsJuegos = [
    ['g1', 'Catan', 3, 4, 75, 'u1', 'https://upload.wikimedia.org/wikipedia/en/a/a3/Catan-2015-boxart.jpg', 'Comercia, construye y coloniza la isla de Catán en este clásico mundial.'],
    ['g2', 'Carcassonne', 2, 5, 45, 'u2', 'https://upload.wikimedia.org/wikipedia/en/7/76/Carcassonne-game.jpg', 'Coloca losetas para construir caminos, ciudades amuralladas y monasterios.'],
    ['g3', 'Dixit', 3, 8, 35, 'u4', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Dixit_game_0001.jpg/500px-Dixit_game_0001.jpg', 'Juego poético de creatividad con cartas ilustradas y pistas enigmáticas.'],
    ['g4', 'Terraforming Mars', 1, 5, 120, 'u3', 'https://upload.wikimedia.org/wikipedia/en/f/f0/Terraforming_Mars_board_game_box_cover.jpg', 'Estrategia pesada donde transformas Marte en un planeta habitable con océanos y oxígeno.']
  ];
  sheetJuegos.getRange(2, 1, rowsJuegos.length, headersJuegos.length).setValues(rowsJuegos);
  sheetJuegos.setFrozenRows(1);
  sheetJuegos.autoResizeColumns(1, headersJuegos.length);

  // 2. Pestaña SESIONES
  let sheetSesiones = ss.getSheetByName('Sesiones');
  if (!sheetSesiones) sheetSesiones = ss.insertSheet('Sesiones');
  sheetSesiones.clear();
  
  const headersSesiones = ['id', 'gameId', 'date', 'time', 'location', 'notes', 'attendees'];
  sheetSesiones.getRange(1, 1, 1, headersSesiones.length).setValues([headersSesiones])
    .setBackground('#4f46e5').setFontColor('#ffffff').setFontWeight('bold');
  
  const rowsSesiones = [
    ['s1', 'g0', '2026-11-28', '19:30', 'Casa de Carlos', 'Noche de Brass. Traer piqueos y bebidas.', '[{"friendId":"u1","status":"yes"},{"friendId":"u2","status":"yes"},{"friendId":"u3","status":"maybe"}]']
  ];
  sheetSesiones.getRange(2, 1, rowsSesiones.length, headersSesiones.length).setValues(rowsSesiones);
  sheetSesiones.setFrozenRows(1);
  sheetSesiones.autoResizeColumns(1, headersSesiones.length);

  // 3. Pestaña AMIGOS
  let sheetAmigos = ss.getSheetByName('Amigos');
  if (!sheetAmigos) sheetAmigos = ss.insertSheet('Amigos');
  sheetAmigos.clear();
  
  const headersAmigos = ['id', 'name', 'color', 'initials'];
  sheetAmigos.getRange(1, 1, 1, headersAmigos.length).setValues([headersAmigos])
    .setBackground('#059669').setFontColor('#ffffff').setFontWeight('bold');
  
  const rowsAmigos = [
    ['u1', 'Carlos (Tú)', 'bg-violet-600', 'CA'],
    ['u2', 'Sofía', 'bg-rose-500', 'SO'],
    ['u3', 'Mateo', 'bg-blue-500', 'MA'],
    ['u4', 'Valeria', 'bg-emerald-500', 'VA'],
    ['u5', 'Diego', 'bg-amber-500', 'DI']
  ];
  sheetAmigos.getRange(2, 1, rowsAmigos.length, headersAmigos.length).setValues(rowsAmigos);
  sheetAmigos.setFrozenRows(1);
  sheetAmigos.autoResizeColumns(1, headersAmigos.length);

  // Eliminar la "Hoja 1" por defecto si existe
  const defaultSheet = ss.getSheetByName('Hoja 1') || ss.getSheetByName('Sheet1');
  if (defaultSheet && ss.getSheets().length > 3) {
    try { ss.deleteSheet(defaultSheet); } catch (e) {}
  }
}

// API GET: Lectura de datos
function doGet(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const action = (e && e.parameter && e.parameter.action) || 'all';

  if (action === 'all') {
    return jsonResponse({
      games: getSheetData(ss, 'Juegos'),
      sessions: getSheetData(ss, 'Sesiones'),
      friends: getSheetData(ss, 'Amigos')
    });
  }

  const sheetName = e.parameter.sheet;
  return jsonResponse(getSheetData(ss, sheetName));
}

// API POST: Escritura y guardado de datos
function doPost(e) {
  try {
    const contents = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const action = contents.action;

    if (action === 'save_all') {
      if (contents.games) setSheetData(ss, 'Juegos', contents.games);
      if (contents.sessions) setSheetData(ss, 'Sesiones', contents.sessions);
      if (contents.friends) setSheetData(ss, 'Amigos', contents.friends);
      return jsonResponse({ success: true, message: 'Guardado correctamente en Google Sheets' });
    }

    return jsonResponse({ error: 'Acción no válida' });
  } catch (err) {
    return jsonResponse({ error: err.toString() });
  }
}

function getSheetData(ss, sheetName) {
  const sheet = ss.getSheetByName(sheetName);
  if (!sheet) return [];
  const data = sheet.getDataRange().getValues();
  if (data.length <= 1) return [];

  const headers = data[0];
  const rows = data.slice(1);

  return rows.map(row => {
    const obj = {};
    headers.forEach((h, idx) => {
      let val = row[idx];
      if (h === 'attendees' && typeof val === 'string' && val.startsWith('[')) {
        try { val = JSON.parse(val); } catch (e) {}
      }
      obj[h] = val;
    });
    return obj;
  });
}

function setSheetData(ss, sheetName, items) {
  const sheet = ss.getSheetByName(sheetName);
  if (!sheet || !items || !items.length) return;

  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  if (!headers.length) return;

  if (sheet.getLastRow() > 1) {
    sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()).clearContent();
  }

  const rows = items.map(item => {
    return headers.map(h => {
      let val = item[h] !== undefined ? item[h] : '';
      if (typeof val === 'object') {
        val = JSON.stringify(val);
      }
      return val;
    });
  });

  sheet.getRange(2, 1, rows.length, headers.length).setValues(rows);
}

function jsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
