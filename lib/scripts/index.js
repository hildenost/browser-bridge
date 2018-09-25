let app = new PIXI.Application({
	width: 256,
	height: 350
});

document.body.appendChild(app.view);

// bridge tables are usually green
app.renderer.backgroundColor = 0x009900;