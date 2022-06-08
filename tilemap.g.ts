// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1400140001020202020202020202020202020202020202070c000008080000000000000000000000000000040c00000008000808000000000000000000000004060800000008080800000808080000080000000406080800000000080000080008000000000000040600000000000008000000000808000808000004060000000808080800000000000808080800000406000008080800000008080000080808080000040600000808000000000808080a08080908000004060000000800000008080808080800000800000406000000080800000000000008000000080000040600000000080000000000000808000008000004060008080808000000080808080000000800000406000800000000000000000800000008080000040600080000000008080808000000000800000004060000000008000000000000000008000000080406000000000000000000000008080808080800040600000808080808080000000800000000000004060000000000000000000000080000000000000b0503030303030303030303030303030303030b0b`, img`
22222222222222222222
...22..............2
....2.22...........2
22...222..222..2...2
222....2..2.2......2
2......2....22.22..2
2...2222.....2222..2
2..222...22..2222..2
2..22....222.22.2..2
2...2...222222..2..2
2...22......2...2..2
2....2......22..2..2
2.2222...2222...2..2
2.2........2...22..2
2.2....2222....2...2
2....2........2...22
2...........2.2222.2
2..222222...2......2
2...........2.......
222222222222222222..
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundCenter,sprites.dungeon.chestOpen,sprites.dungeon.chestClosed,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
