export interface MapData {
  id: string; // Unique identifier
  name: string;
  image: string; // Path or Data URL to the image asset
  gridSize: number; // Grid cell size in pixels
}

export interface CharacterData {
  id: string; // Unique identifier
  name: string;
  image: string; // Path or Data URL to the image asset
  mapId: string; // Identifier of the map the character is currently on
  x: number; // Position in pixels (top-left corner of grid cell)
  y: number;
  /**
   * Name of the player controlling this character. Optional; managed via the
   * Player Seats feature on the Manager page.
   */
  playerName?: string;
}

/**
 * Represents one of the seven player seats that can be configured on the
 * Manager page.
 */
export interface SeatData {
  seatIndex: number; // 0-based index (0-6)
  playerName: string;
  /** Character currently assigned to this seat (null = empty) */
  characterId: string | null;
}
