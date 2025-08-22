import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

function getAuth() {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!clientEmail || !privateKey) {
    throw new Error(
      'Missing Google Sheets credentials. Please set GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_PRIVATE_KEY environment variables.'
    );
  }

  // Convert the private key format - handle both escaped and unescaped newlines
  const formattedPrivateKey = privateKey.replace(/\\n/g, '\n');

  return new google.auth.JWT({
    email: clientEmail,
    key: formattedPrivateKey,
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
