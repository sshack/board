import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

function loadCredentialsFromFile() {
  const keyPath = process.env.GOOGLE_PRIVATE_KEY_PATH;
  if (!keyPath) return null;

  try {
    const absolutePath = path.isAbsolute(keyPath)
      ? keyPath
      : path.join(process.cwd(), keyPath);
    const raw = fs.readFileSync(absolutePath, 'utf8');
    const json = JSON.parse(raw);
    return {
      client_email: json.client_email,
      private_key: json.private_key,
    } as {
      client_email: string;
      private_key: string;
    };
  } catch (err) {
    console.error('Failed to read Google service account key file:', err);
    return null;
  }
}

function getAuth() {
  let clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  let privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!clientEmail || !privateKey) {
    const fileCreds = loadCredentialsFromFile();
    if (fileCreds) {
      clientEmail = fileCreds.client_email;
      privateKey = fileCreds.private_key;
    }
  }

  if (!clientEmail || !privateKey) {
    throw new Error('Missing Google Sheets credentials.');
  }

  return new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: SCOPES,
  });
}

function getSheets() {
  return google.sheets({ version: 'v4', auth: getAuth() });
}

export async function getNextId(
  spreadsheetId = process.env.GOOGLE_SHEET_ID
): Promise<number> {
  if (!spreadsheetId) {
    throw new Error('GOOGLE_SHEET_ID env var not set.');
  }

  const sheets = getSheets();
  const { data } = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: 'A:A',
  });

  const rows = data.values ?? [];

  return rows.length === 0 ? 1 : rows.length;
}

export async function appendSignupRow(
  id: number,
  name: string,
  email: string,
  spreadsheetId = process.env.GOOGLE_SHEET_ID
): Promise<void> {
  if (!spreadsheetId) {
    throw new Error('GOOGLE_SHEET_ID env var not set.');
  }

  const sheets = getSheets();

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: 'A:C',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[id, name, email]],
    },
  });
}
