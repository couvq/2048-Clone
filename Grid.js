const GRID_SIZE = 4;
const CELL_SIZE = 20; // in css its vmin
const CELL_GAP = 2; // in css its vmin

export default class Grid {
    constructor(gridElement) {
        gridElement.style.setProperty("--grid-size", GRID_SIZE);
        gridElement.style.setProperty("--cell-size", `${CELL_SIZE}vmin`);
        gridElement.style.setProperty("--cell-gap", `${CELL_GAP}vmin`);
    }
}