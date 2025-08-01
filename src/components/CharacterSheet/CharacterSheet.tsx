import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useGameData } from '../../hooks/useGameData';
import { loadSeats } from '../../utils/gameStorage';

type GridState = 'default' | 'blue' | 'transparent';

interface CharacterSheetProps {
  onToggleGrid: () => void;
  gridState: GridState;
  onToggleDraw: () => void;
  drawActive: boolean;
}

export default function CharacterSheet({
  onToggleGrid,
  gridState,
  onToggleDraw,
  drawActive,
}: CharacterSheetProps) {
  const [isOpen, setIsOpen] = useState(false);

  const {
    maps,
    currentMap,
    setCurrentMap,
    characters,
    currentCharacter,
    setCurrentCharacter,
  } = useGameData();

  const currentMapName = currentMap ? currentMap.name : 'No Map';

  // -------------------------------------------------------------------
  // Player seat lookup
  // -------------------------------------------------------------------
  const [playerName, setPlayerName] = useState('');

  useEffect(() => {
    const seats = loadSeats();
    const seat = seats.find((s) => s.characterId === currentCharacter?.id);
    setPlayerName(seat?.playerName || '');
  }, [currentCharacter]);

  // -------------------------------------------------------------------
  // Character navigation handlers
  // -------------------------------------------------------------------
  const cycleCharacter = (direction: 1 | -1) => {
    if (!characters || characters.length === 0) return;
    const index = characters.findIndex((c) => c.id === currentCharacter?.id);
    if (index === -1) return;
    const nextIndex =
      (index + direction + characters.length) % characters.length;
    setCurrentCharacter(characters[nextIndex].id);
  };

  const cycleMap = () => {
    if (maps.length === 0 || !currentMap) return;
    const index = maps.findIndex((m) => m.id === currentMap.id);
    const nextMap = maps[(index + 1) % maps.length];
    setCurrentMap(nextMap.id);
  };

  const getGridButtonText = () => {
    switch (gridState) {
      case 'default':
        return 'Grid';
      case 'blue':
        return 'Grid (Blue)';
      case 'transparent':
        return 'Grid (Off)';
      default:
        return 'Grid';
    }
  };

  const getDrawButtonText = () => (drawActive ? 'Stop Draw' : 'Draw');

  return (
    <div
      data-character-sheet
      className={`
        fixed top-0 right-0 h-full bg-slate-800 text-white overflow-y-auto z-50 cursor-none
        transition-all duration-300 ease-in-out
        ${isOpen ? 'w-[400px]' : 'w-[40px]'}
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:bg-slate-800
        [&::-webkit-scrollbar-thumb]:bg-slate-600
        [&::-webkit-scrollbar-thumb]:rounded-full
        [&::-webkit-scrollbar-thumb:hover]:bg-slate-500
        scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-slate-600
      `}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-4 left-2 z-10 w-6 h-6 bg-slate-600 hover:bg-slate-500 rounded text-xs transition-colors border border-slate-500 flex items-center justify-center"
      >
        {isOpen ? '→' : '←'}
      </button>

      {/* Collapsed View - Summary */}
      {!isOpen && (
        <div className="p-2 pt-12 h-full flex flex-col items-center">
          {/* Character portrait */}
          <div className="w-8 h-8 bg-slate-600 rounded border border-slate-500 overflow-hidden mb-2">
            <img
              src="/assets/lady.png"
              alt="Character portrait"
              className="w-full h-full object-cover object-top rounded"
            />
          </div>

          {/* Vertical text */}
          <div className="transform rotate-90 text-xs text-slate-300 whitespace-nowrap mt-8">
            Sevardin
          </div>

          {/* Quick stats */}
          <div className="mt-auto mb-4 space-y-2 text-xs text-center">
            <div className="text-red-400 font-bold">0</div>
            <div className="text-emerald-400 font-bold">0</div>
          </div>
        </div>
      )}

      {/* Expanded View - Full Sheet */}
      {isOpen && (
        <div className="pt-4">
          {/* Header with Character Info */}
          <div className="p-4 border-b border-slate-600">
            <div className="flex items-center gap-3 mb-3">
              {/* Navigation Arrows + Portrait */}
              <div className="flex items-center gap-1">
                <div className="w-12 h-12 bg-slate-600 rounded border-2 border-slate-500 overflow-hidden">
                  <img
                    src={currentCharacter?.image || '/assets/lady.png'}
                    alt="Character portrait"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <button
                    aria-label="Previous Character"
                    onClick={() => cycleCharacter(-1)}
                    className="text-[16px] hover:bg-slate-600 rounded w-5 h-4 flex items-center justify-center"
                  >
                    ↑
                  </button>
                  <button
                    aria-label="Next Character"
                    onClick={() => cycleCharacter(1)}
                    className="text-[16px] hover:bg-slate-600 rounded w-5 h-4 flex items-center justify-center"
                  >
                    ↓
                  </button>
                </div>
              </div>

              {/* Name, Player and Actions */}
              <div className="flex-1">
                <div className="flex flex-col gap-1 items-end">
                  <h2 className="text-lg font-semibold text-white">
                    {playerName ||
                      (currentCharacter?.name || '').replace(/\.[^/.]+$/, '')}
                  </h2>
                  <div className="flex gap-2 flex-wrap justify-end">
                    {/* Grid Toggle Button */}
                    <button
                      onClick={onToggleGrid}
                      className="bg-slate-600 hover:bg-slate-500 px-2 py-1 rounded text-xs transition-colors border border-slate-500"
                    >
                      {getGridButtonText()}
                    </button>
                    {/* Draw Toggle Button */}
                    <button
                      onClick={onToggleDraw}
                      className="bg-slate-600 hover:bg-slate-500 px-2 py-1 rounded text-xs transition-colors border border-slate-500"
                    >
                      {getDrawButtonText()}
                    </button>
                    {/* Map Cycle Button */}
                    <button
                      onClick={cycleMap}
                      className="bg-slate-600 hover:bg-slate-500 px-2 py-1 rounded text-xs transition-colors border border-slate-500"
                    >
                      Map: {currentMapName}
                    </button>
                    {/* Manager Page Button */}
                    <Link
                      href="/manager"
                      className="bg-slate-600 hover:bg-slate-500 px-2 py-1 rounded text-xs transition-colors border border-slate-500"
                    >
                      Manager
                    </Link>
                  </div>
                </div>
                {/* Stats */}
                <div className="text-xs text-slate-300 mt-2 text-right">
                  <div>STR: 1 | DEF: 1 | MEN: 0</div>
                  <div>SPD: [Action(1)]</div>
                </div>
              </div>
            </div>

            {/* Status Info */}
            <div className="text-xs space-y-1 text-slate-300">
              <div className="flex gap-4">
                <span>MANIPULATES (Null)</span>
                <span>VULNERABILITIES (Null) (3)</span>
              </div>
              <div className="flex gap-4">
                <span>💀 RESILIENCE</span>
                <span>💀 WOUNDS</span>
              </div>
            </div>
          </div>

          {/* Attributes Section */}
          <div className="p-4 border-b border-slate-600">
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="text-center">
                <div className="text-xs mb-1 text-slate-300">
                  Core Attributes
                </div>
                <div className="grid grid-cols-2 gap-1">
                  {['🎲', '🎲', '🎲', '🎲'].map((dice, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 bg-slate-700 rounded flex items-center justify-center text-xs border border-slate-600"
                    >
                      {dice}
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs mb-1 text-slate-300">
                  Derived Attributes
                </div>
                <div className="grid grid-cols-2 gap-1">
                  {['⚡', '🛡️', '🧠', '⚡'].map((icon, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 bg-slate-700 rounded flex items-center justify-center text-xs border border-slate-600"
                    >
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="text-xs mb-1 text-slate-300">
                  Saved Attributes
                </div>
                <div className="grid grid-cols-2 gap-1">
                  {['💫', '🎯', '🎲', '⭐'].map((icon, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 bg-slate-700 rounded flex items-center justify-center text-xs border border-slate-600"
                    >
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-5 gap-1 text-xs">
              <button className="bg-teal-600 px-2 py-1 rounded hover:bg-teal-500 transition-colors">
                Draw
              </button>
              <button className="bg-teal-600 px-2 py-1 rounded hover:bg-teal-500 transition-colors">
                Focus
              </button>
              <button className="bg-teal-600 px-2 py-1 rounded hover:bg-teal-500 transition-colors">
                Discard
              </button>
              <button className="bg-teal-600 px-2 py-1 rounded hover:bg-teal-500 transition-colors">
                Extra
              </button>
              <button className="bg-teal-600 px-2 py-1 rounded hover:bg-teal-500 transition-colors">
                Move
              </button>
            </div>
          </div>

          {/* Conditions Section */}
          <div className="p-4 border-b border-slate-600">
            <div className="text-xs font-bold mb-2 text-white">CONDITIONS</div>
            <div className="grid grid-cols-4 gap-1 mb-2">
              {['ACTIONS', 'AIM', 'SKILLS', 'RECORDS', 'FAMILIARS'].map(
                (condition, i) => (
                  <button
                    key={i}
                    className="bg-slate-700 px-2 py-1 rounded text-xs hover:bg-slate-600 transition-colors border border-slate-600"
                  >
                    {condition}
                  </button>
                )
              )}
            </div>
            <div className="text-xs text-slate-300">
              <div>Temporary Variable</div>
              <div className="grid grid-cols-6 gap-1 mt-1">
                {[
                  'Strike',
                  'TXAO',
                  'PAAO',
                  'MOMO',
                  'Ci BMG',
                  'Ci Range',
                  'DV',
                  'FoR',
                  'MoR',
                  'FOR',
                ].map((item, i) => (
                  <span
                    key={i}
                    className="bg-slate-600 px-1 rounded text-xs border border-slate-500"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Resources Section */}
          <div className="p-4 border-b border-slate-600">
            <div className="flex justify-center gap-8 mb-4">
              <div className="text-center">
                <div className="text-sm font-bold text-red-400">BANES</div>
                <div className="text-2xl font-bold">0</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-bold text-emerald-400">BOONS</div>
                <div className="text-2xl font-bold">0</div>
              </div>
            </div>

            <div className="text-xs">
              <div className="font-bold mb-2 text-white">
                Miscellaneous Resources
              </div>
              <div className="bg-slate-700 p-2 rounded border border-slate-600">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-300">Favor</span>
                  <div className="flex gap-1">
                    <span className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center">
                      ⭐
                    </span>
                    <span className="text-slate-400">X</span>
                    <span className="w-6 h-6 bg-slate-600 rounded border border-slate-500 text-center">
                      0
                    </span>
                    <span className="text-slate-400">X</span>
                    <span className="w-6 h-6 bg-slate-600 rounded border border-slate-500 text-center">
                      0
                    </span>
                    <span className="w-6 h-6 bg-slate-600 rounded border border-slate-500 text-center">
                      0
                    </span>
                  </div>
                </div>
                <div className="text-xs text-slate-400">
                  A single point of favor can be used for a +1d6 on a single
                  roll, or rerolling once.
                </div>
                <div className="mt-2 flex justify-between text-slate-300">
                  <span>Current: 2</span>
                  <span>Max: N/A</span>
                </div>
              </div>
            </div>
          </div>

          {/* Rules Section */}
          <div className="p-4 border-b border-slate-600">
            <div className="text-xs">
              <div className="font-bold mb-2 text-white">
                Resource Gain Rules
              </div>
              <div className="bg-slate-700 p-2 rounded border border-slate-600">
                <div className="text-slate-300">
                  1) Granted at 1st discretion.
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="p-4">
            <div className="space-y-2">
              <button className="w-full bg-blue-600 hover:bg-blue-500 py-2 rounded font-bold transition-colors">
                Undo Action
              </button>
              <button className="w-full bg-amber-600 hover:bg-amber-500 py-2 rounded font-bold text-black transition-colors">
                Reset Turn
              </button>
              <button className="w-full bg-purple-600 hover:bg-purple-500 py-2 rounded font-bold transition-colors">
                Edit Mode
              </button>
              <button className="w-full bg-red-600 hover:bg-red-500 py-2 rounded font-bold transition-colors">
                Leave Session
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
