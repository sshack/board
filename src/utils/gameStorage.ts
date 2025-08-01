import { MapData, CharacterData } from '../types/game';
import { SeatData } from '../types/game';

const MAPS_KEY = 'maps';
const CHARACTERS_KEY = 'characters';
const CURRENT_MAP_ID_KEY = 'currentMapId';
const CURRENT_CHARACTER_ID_KEY = 'currentCharacterId';
const SEATS_KEY = 'seats';

// Default seed data -------------------------------------------------------
const DEFAULT_MAP_ID = 'default-map';
const DEFAULT_CHARACTER_ID = 'default-character';

const defaultMaps: MapData[] = [
  {
    id: DEFAULT_MAP_ID,
    name: 'Tilemap',
    image: '/assets/tilemap.png',
    gridSize: 64,
  },
];

const defaultCharacters: CharacterData[] = [
  {
    id: DEFAULT_CHARACTER_ID,
    name: 'Lady',
    image: '/assets/lady.png',
    mapId: DEFAULT_MAP_ID,
    x: 128,
    y: 128,
  },
];

// Default: 7 empty seats --------------------------------------------------
const defaultSeats: SeatData[] = Array.from({ length: 7 }, (_, i) => ({
  seatIndex: i,
  playerName: i === 0 ? 'Lady' : '',
  characterId: i === 0 ? DEFAULT_CHARACTER_ID : null,
}));

// Utility helpers ---------------------------------------------------------
export function loadMaps(): MapData[] {
  if (typeof window === 'undefined') return defaultMaps;
  const raw = localStorage.getItem(MAPS_KEY);
  if (!raw) return defaultMaps;
  try {
    return JSON.parse(raw) as MapData[];
  } catch (e) {
    console.warn('Failed to parse maps from localStorage', e);
    return defaultMaps;
  }
}

export function saveMaps(maps: MapData[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(MAPS_KEY, JSON.stringify(maps));
  } catch (e) {
    console.error('Failed to save maps', e);
    alert(
      'Unable to save map – local storage quota exceeded. Try removing large maps.'
    );
  }
}

export function loadCharacters(): CharacterData[] {
  if (typeof window === 'undefined') return defaultCharacters;
  const raw = localStorage.getItem(CHARACTERS_KEY);
  if (!raw) return defaultCharacters;
  try {
    return JSON.parse(raw) as CharacterData[];
  } catch (e) {
    console.warn('Failed to parse characters from localStorage', e);
    return defaultCharacters;
  }
}

export function saveCharacters(characters: CharacterData[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(CHARACTERS_KEY, JSON.stringify(characters));
  } catch (e) {
    console.error('Failed to save characters', e);
    alert('Unable to save character – local storage quota exceeded.');
  }
}

export function loadCurrentMapId(): string {
  if (typeof window === 'undefined') return DEFAULT_MAP_ID;
  return localStorage.getItem(CURRENT_MAP_ID_KEY) || DEFAULT_MAP_ID;
}

export function saveCurrentMapId(id: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(CURRENT_MAP_ID_KEY, id);
}

export function loadCurrentCharacterId(): string {
  if (typeof window === 'undefined') return DEFAULT_CHARACTER_ID;
  return localStorage.getItem(CURRENT_CHARACTER_ID_KEY) || DEFAULT_CHARACTER_ID;
}

export function saveCurrentCharacterId(id: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(CURRENT_CHARACTER_ID_KEY, id);
}

export function loadSeats(): SeatData[] {
  if (typeof window === 'undefined') return defaultSeats;
  const raw = localStorage.getItem(SEATS_KEY);
  if (!raw) return defaultSeats;
  try {
    const parsed = JSON.parse(raw) as SeatData[];
    // Guard against corrupted / wrong length data
    if (!Array.isArray(parsed) || parsed.length !== 7) throw new Error();
    return parsed;
  } catch (e) {
    console.warn('Failed to parse seats from localStorage', e);
    return defaultSeats;
  }
}

export function saveSeats(seats: SeatData[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(SEATS_KEY, JSON.stringify(seats));
  } catch (e) {
    console.error('Failed to save seats', e);
  }
}

// Initialise localStorage with defaults if empty -------------------------
export function ensureDefaults(): void {
  if (typeof window === 'undefined') return;

  if (!localStorage.getItem(MAPS_KEY)) {
    saveMaps(defaultMaps);
  }

  if (!localStorage.getItem(CHARACTERS_KEY)) {
    saveCharacters(defaultCharacters);
  }

  if (!localStorage.getItem(CURRENT_MAP_ID_KEY)) {
    saveCurrentMapId(DEFAULT_MAP_ID);
  }

  if (!localStorage.getItem(CURRENT_CHARACTER_ID_KEY)) {
    saveCurrentCharacterId(DEFAULT_CHARACTER_ID);
  }

  if (!localStorage.getItem(SEATS_KEY)) {
    saveSeats(defaultSeats);
  }
}
