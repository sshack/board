import { useState, useEffect } from 'react';
import {
  ensureDefaults,
  loadCharacters,
  loadCurrentCharacterId,
  loadCurrentMapId,
  loadMaps,
  saveCharacters,
  saveCurrentCharacterId,
  saveCurrentMapId,
  saveMaps,
} from '../utils/gameStorage';
import { CharacterData, MapData } from '../types/game';

export interface GameData {
  maps: MapData[];
  characters: CharacterData[];
  currentMap: MapData;
  currentCharacter: CharacterData;
  setCurrentMap: (id: string) => void;
  setCurrentCharacter: (id: string) => void;
  updateCharacter: (character: CharacterData) => void;
  addMap: (map: MapData) => void;
  addCharacter: (character: CharacterData) => void;
  updateMap: (map: MapData) => void;
}

export function useGameData(): GameData {
  const [maps, setMaps] = useState<MapData[]>([]);
  const [characters, setCharacters] = useState<CharacterData[]>([]);
  const [currentMapId, setCurrentMapId] = useState<string>('');
  const [currentCharacterId, setCurrentCharacterId] = useState<string>('');

  // Initialise on mount ---------------------------------------------------
  useEffect(() => {
    ensureDefaults();
    setMaps(loadMaps());
    setCharacters(loadCharacters());
    setCurrentMapId(loadCurrentMapId());
    setCurrentCharacterId(loadCurrentCharacterId());
  }, []);

  // Derived current entities ----------------------------------------------
  const currentMap = maps.find((m) => m.id === currentMapId) || maps[0];
  const currentCharacter =
    characters.find((c) => c.id === currentCharacterId) || characters[0];

  // Mutators ---------------------------------------------------------------
  const setCurrentMap = (id: string) => {
    setCurrentMapId(id);
    saveCurrentMapId(id);
  };

  const setCurrentCharacter = (id: string) => {
    setCurrentCharacterId(id);
    saveCurrentCharacterId(id);
  };

  const updateCharacter = (character: CharacterData) => {
    setCharacters((prev) => {
      const next = prev.map((c) => (c.id === character.id ? character : c));
      saveCharacters(next);
      return next;
    });
  };

  const addMap = (map: MapData) => {
    setMaps((prev) => {
      const next = [...prev, map];
      saveMaps(next);
      return next;
    });
  };

  const addCharacter = (character: CharacterData) => {
    setCharacters((prev) => {
      const next = [...prev, character];
      saveCharacters(next);
      return next;
    });
  };

  const updateMap = (map: MapData) => {
    setMaps((prev) => {
      const next = prev.map((m) => (m.id === map.id ? map : m));
      saveMaps(next);
      return next;
    });
  };

  return {
    maps,
    characters,
    currentMap,
    currentCharacter,
    setCurrentMap,
    setCurrentCharacter,
    updateCharacter,
    addMap,
    addCharacter,
    updateMap,
  };
}
