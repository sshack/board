# Anno – Virtual Tabletop RPG

## Overview

Anno is a browser-based virtual tabletop that lets you run grid-based role-playing sessions directly in the browser. The core scene is rendered with PixiJS 8 (via the `@pixi/react` adapter) inside a Next.js 15 application.

## Tech Stack

- Next.js 15 + React 19 (App Router)
- TypeScript 5
- PixiJS 8 with `@pixi/react` for WebGL rendering
- Tailwind CSS 3 for styling
- Jotai for lightweight global state
- LocalStorage for offline persistence

## Development Commands

| Script                        | Description                           |
| ----------------------------- | ------------------------------------- |
| `pnpm dev` / `run-dev.sh`     | Start development server on port 3000 |
| `pnpm build` / `run-build.sh` | Build production bundle               |

## High-Level Directory Map

| Path              | Purpose                           |
| ----------------- | --------------------------------- |
| `/public/assets`  | Static images (maps, sprites)     |
| `/src/app`        | Next.js routes & root layout      |
| `/src/components` | React/Pixi components of the game |
| `/src/hooks`      | Reusable React hooks              |
| `/src/contexts`   | Global React contexts             |
| `/src/utils`      | Browser storage & misc utilities  |
| `/src/types`      | Shared TypeScript models          |

## Key Files (one-line reference)

| File                                                        | Role                                                               |
| ----------------------------------------------------------- | ------------------------------------------------------------------ |
| `next.config.ts`                                            | Next.js configuration (MDX, remote images)                         |
| `tailwind.config.js`                                        | Tailwind design tokens & plugin setup                              |
| `tsconfig.json`                                             | TypeScript compiler options                                        |
| `run-dev.sh`, `run-build.sh`                                | Convenience scripts for dev & build                                |
| `src/app/layout.tsx`                                        | Root HTML, font & viewport meta                                    |
| `src/app/page.tsx`                                          | Simple home page displaying "home" text                            |
| `src/app/game/page.tsx`                                     | Game page that mounts the Pixi scene and all game functionality    |
| `src/app/manager/page.tsx`                                  | Map/character management + 7-seat player assignment UI             |
| `src/components/Experience/Experience.tsx`                  | Pixi `Application` that composes the entire game scene             |
| `src/components/Camera/Camera.tsx`                          | Panning/zooming camera container                                   |
| `src/components/Background/Background.tsx`                  | Draws the background image                                         |
| `src/components/Level/Level.tsx`                            | Renders the current map texture                                    |
| `src/components/Grid/Grid.tsx`                              | Dynamic grid overlay (default/blue/transparent)                    |
| `src/components/CharacterLayer/CharacterLayer.tsx`          | Displays all characters on the map                                 |
| `src/components/CharacterSheet/CharacterSheet.tsx`          | UI for editing/inspecting a character                              |
| `src/components/CustomCursor/CustomCursor.tsx`              | RPG-style cursor replacement                                       |
| `src/components/DrawOverlay/DrawOverlay.tsx`                | Free-hand drawing layer on top of the grid                         |
| `src/components/OutterWorld/OutterWorld.tsx`                | Invisible bounds of the world                                      |
| `src/components/Experience/MainContainer/MainContainer.tsx` | Swaps between scene and manager views                              |
| `src/constants/game-world.ts`                               | Grid/world sizing constants                                        |
| `src/types/game.ts`                                         | Canonical data models (now `MapData`, `CharacterData`, `SeatData`) |
| `src/contexts/DragContext.tsx`                              | Drag state shared by camera & characters                           |
| `src/hooks/useTexture.ts`                                   | Async texture loader with caching                                  |
| `src/hooks/useGameData.ts`                                  | Reactive wrapper around localStorage data                          |
| `src/hooks/useScreenSize.ts`                                | Debounced window size listener                                     |
| `src/utils/gameStorage.ts`                                  | CRUD helpers for maps, characters **and seats** in localStorage    |
| `public/assets/tilemap.png`                                 | Default map texture                                                |
| `public/assets/lady.png`                                    | Default character sprite                                           |
| `src/app/global-error.tsx`                                  | Global error boundary                                              |

### Conventions

- Pixi display objects are declared via `@pixi/react` JSX shortcuts (e.g. `<pixiSprite>`).
- All positions are in pixels; grid size is defined per map (`MapData.gridSize`).
- Keep exceptions unhandled inside inner modules; handle them at Next.js boundaries as per repository error-handling guidelines.

## Detailed File Guide

### `src/components/Experience/Experience.tsx`

- **Purpose**: Orchestrates the entire Pixi scene. Mounts the Pixi `Application` and composes all visual layers (Background → Camera → Level → Grid → Characters → DrawOverlay → OutterWorld).
- **Key Props**
  - `gridState`: Controls grid color/visibility (`default`, `blue`, `transparent`).
  - `drawActive`: Toggles the free-hand drawing overlay.
- **Why it matters**: This is the single entry point for anything rendered with Pixi. If you need to add a new visual layer, wire it up here.

### `src/components/Grid/Grid.tsx`

- **Purpose**: Generates a dynamic grid canvas that matches the current map size and grid spacing, then converts it to a Pixi texture.
- **Features**:
  - Three visual modes (`default`, `blue`, `transparent`).
  - Regenerates on map change or when the user toggles grid state.
  - Emits pointer events to translate clicks into grid coordinates.
- **Why it matters**: Central to gameplay alignment, snapping, and coordinate translation.

### `src/components/DrawOverlay/DrawOverlay.tsx`

- **Purpose**: Lets the user sketch free-hand annotations on top of the map.
- **Implementation**:
  - Captures pointer events, records strokes as arrays of points, and redraws them each frame via `pixiGraphics`.
  - Uses new PixiJS v8 `Graphics.stroke` API for crisp lines.
  - Overlay is only mounted when `active` prop is `true`, preventing unnecessary event listeners.
- **Why it matters**: Enables quick tactical drawings (AoE, paths, etc.) without affecting underlying sprites.

### `src/contexts/DragContext.tsx`

- **Purpose**: Globally tracks if a character sprite is currently being dragged.
- **Shape**: Provides `isCharacterDragging`, `startCharacterDrag()`, and `stopCharacterDrag()`.
- **Consumers**: `Camera` (to disable map panning while dragging) and `CharacterLayer` (to set drag state).
- **Why it matters**: Prevents interaction conflicts between character movement and camera panning.

### `src/components/CharacterSheet/CharacterSheet.tsx`

- **Purpose**: Side-panel UI for the active character, map switching, grid toggle, and drawing toggle.
- **Behavior**:
  - Collapsible panel (`isOpen` state) slides in/out of the right edge.
  - Utilises `useGameData` to cycle through maps and reflect current selections.
  - **NEW**: Subtle Up/Down arrows to the left of the portrait let you browse characters; shows the controlling **Player name** (via Seat assignment) or the character name (filename removed) when unassigned.
  - **NEW**: "Manager" button links to the Game Manager page.
  - Buttons inside call back to parent to mutate `gridState` and `drawActive`.
- **Why it matters**: Main control hub for the GM/player; ties React UI with Pixi scene state.

### `src/components/Camera/Camera.tsx`

- **Purpose**: Provides pan & zoom around the map while enforcing map boundaries.
- **Highlights**:
  - Calculates a minimum scale so the entire map fits in view on load.
  - Uses scroll wheel for zoom, pointer drag for pan.
  - Respects `disablePan` when drawing or dragging characters.
- **Why it matters**: Core UX for navigating large maps.

### `src/components/CharacterLayer/CharacterLayer.tsx`

- **Purpose**: Renders character sprites and manages drag-to-move with grid snapping.
- **Mechanics**:
  - Snap to `gridSize` and ensure characters stay within map bounds.
  - Updates character positions via `useGameData.updateCharacter` (persisted in localStorage).
  - Hides the dragged sprite until placed to avoid double-rendering.
- **Why it matters**: Handles core gameplay interaction—moving tokens on the board.

### `src/app/manager/page.tsx`

- **Purpose**: Central administration page for all game assets **and player seating**.
- **Features**:
  - Drag-and-drop images to create new maps (auto-downscaled, persisted).
  - Inline grid-size editing for each map.
  - **Seven Player Seats** rendered as drop targets:
    - Drop a character onto a seat to assign it.
    - Drop an image file onto a seat to create a character and assign it in one step.
    - Input field for the player's name (saved in `SeatData`).
    - Seat data is saved to `localStorage` via `saveSeats`.
  - No separate character list—everything is managed through seats.
  - Navigation link ("← Back to Game") returns to the main Pixi scene.
- **Why it matters**: Provides the GM with tooling to prepare content ahead of a session and allocate seats to players.

### `src/types/game.ts`

- Added `SeatData` interface (`seatIndex`, `playerName`, `characterId`).
- `CharacterData` now includes optional `playerName` to mirror seat ownership.

### `src/utils/gameStorage.ts`

- Added `loadSeats` / `saveSeats` + default 7-seat initialization inside `ensureDefaults()`.
- Guarantees that seat data structure is always consistent (array length = 7).

### Styling Conventions

#### Metallic Gradient Borders (NEW)

Card-like components can now use an ultra-thin metallic border by wrapping the card in a `relative p-[0.5px]` container and applying the shared `metallicGradient` background (defined in `HeroSection.tsx` for now).

```
// example
<div className="relative p-[0.5px] rounded-2xl" style={{ background: metallicGradient }}>
  <div className="rounded-2xl bg-gray-800">…content…</div>
</div>
```

The gradient uses semi-transparent blues and oranges with a subtle dark finish to emulate anodised aluminium. This keeps the visual weight minimal while providing a premium tech-inspired accent.
