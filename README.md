# Vue Minesweeper

A classic Windows Minesweeper game built with Vue 3 and TypeScript.

## Features

- **Three Difficulty Levels** - Easy (8×8, 10 mines), Medium (16×16, 40 mines), Hard (30×16, 99 mines)
- **Classic Gameplay** - Left-click to reveal cells, right-click to mark with flags or question marks
- **Win/Lose Detection** - Game over when hitting a mine or winning by revealing all safe cells
- **Retro UI** - Recreation of classic Minesweeper design

## Technologies & Approach

### Core Stack

- **Vue 3** - Composition API
- **TypeScript** - Type safety throughout the application

### Architecture & Patterns

- **Immutability First** - Game state updates create new objects instead of mutating existing ones
- **Pure Functions** - Game logic implemented as side-effect-free functions

### Code Quality

- **Vitest** - Unit testing for all utility functions
- **Test-Driven Development** - Tests written to validate game logic
- **JSDoc Comments** - Documentation for all functions

### Styling

- **Scoped Styles** - Component-scoped styling to prevent conflicts
- **Pixel-Perfect Design** - Careful attention to borders, spacing, alignment and icons
