import React from "react";

const Tile = ({ tile, id }) => {
	let tileArray = ["tile"];
	tileArray.push("tile" + tile.value);
	if (!tile.mergedInto) {
		tileArray.push(`position_${tile.row}_${tile.column}`);
	}
	if (tile.mergedInto) {
		tileArray.push("merged");
	}
	if (tile.isNew()) {
		tileArray.push("new");
	}
	if (tile.hasMoved()) {
		tileArray.push(`row_from_${tile.fromRow()}_to_${tile.toRow()}`);
		tileArray.push(`column_from_${tile.fromColumn()}_to_${tile.toColumn()}`);
		tileArray.push("isMoving");
	}

	let classes = tileArray.join(" ");
	return <span className={classes}></span>;
};

export default Tile;
