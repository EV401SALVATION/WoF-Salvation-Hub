//-------------------------OBJECTS-------------------------
//undefined:2:64726

//Setup Object
class Setup {
  constructor() {
    this.setupMode = "none";
    this.x = 0;
    this.y = 0;
    this.area = "none";
  }


  //Resize Images
  resizeImgs() {
    titleScreenBG.resize(pos(10), pos(12));
    hercTitleSprite.resize(pos(3), pos(5));
    magTitleSprite.resize(pos(3), pos(5));


    silkFloorBG.resize(pos(10), pos(10));
    savannahBG.resize(pos(10), pos(10));
    cobblestoneBG.resize(pos(10), pos(10));
    grassBG.resize(pos(10), pos(10));
    stoneBG.resize(pos(10), pos(10));

    innerWebsBattleBG.resize(pos(10), pos(10));
    outerWebsBattleBG.resize(pos(10), pos(10));


    defendIcon.resize(pos(1),pos(1));


    this.resizeSpritesheet(tileArray, pos(1), pos(1));
    this.resizeSpritesheet(intArray, pos(1), pos(1));
    this.resizeSpritesheet(battleArray, pos(4), pos(4));
    this.resizeSpritesheet(herculesFIArray, pos(2), pos(2));
    this.resizeSpritesheet(mantidFIArray, pos(2), pos(2));
    this.resizeSpritesheet(rhinoFIArray, pos(2), pos(2));
    this.resizeSpritesheet(magentaFIArray, pos(2), pos(2));
  }


  resizeSpritesheet(spritesheetArray, newWidth, newHeight) {
    for (let i = 0; i < spritesheetArray.length; i++) {
      spritesheetArray[i].resize(newWidth, newHeight);
    }
  }


  // --->[ADD MISSING INTERACT ARRAYS LATER]<---
  //Sets up the area data objects for each area in the game. Add new lines of code for each new area you add here.
  setupAreaData() {
    //Part 1
    areasArray.push(new Area("Hercules' House", "Hercules' House", 0, 0, herculesHouseInteracts, silkFloorBG, iWebsTheme1, 1, 0, false));
    areasArray.push(new Area("Inner Webs South", "Inner Webs", 0, -1, innerWebsSouthInteracts, silkFloorBG, iWebsTheme1, 1, 0, false));
    areasArray.push(new Area("Inner Webs West", "Inner Webs", -1, -1, innerWebsWestInteracts, silkFloorBG, iWebsTheme1, 1, 0, false));
    areasArray.push(new Area("Mantid's House", "Mantid's House", -1, 0, mantidHouseInteracts, silkFloorBG, iWebsTheme1, 1, 0, false));
    areasArray.push(new Area("Inner Webs Checkpoint", "Inner Webs", 1, -1, innerWebsCheckpointInteracts, silkFloorBG, iWebsTheme1, 1, 0, false));
    areasArray.push(new Area("The Median", "The Median", 1, -2, theMedianInteracts, silkFloorBG, "none", 1, 0, false));
    areasArray.push(new Area("Inner Webs East", "Inner Webs", 1, -3, innerWebsEastInteracts, silkFloorBG, iWebsTheme2, 1, 0, true));
    areasArray.push(new Area("Inner Webs Center", "Inner Webs", 0, -3, innerWebsCenterInteracts, silkFloorBG, iWebsTheme2, 1, 0, true));
    areasArray.push(new Area("Abandoned House", "Abandoned House", -1, -3, abandonedHouseInteracts, silkFloorBG, iWebsTheme2, 1, 0, false));
    areasArray.push(new Area("Inner Webs North", "Inner Webs", 0, -4, innerWebsNorthInteracts, silkFloorBG, iWebsTheme2, 1, 0, true));
    areasArray.push(new Area("Outer Webs West", "Outer Webs", 0, -5, 0, savannahBG, oWebsTheme, 1, "cycle", true));
    areasArray.push(new Area("Outer Webs Center", "Outer Webs", 1, -5, outerWebsCenterInteracts, savannahBG, oWebsTheme, 1, "cycle", true));
    areasArray.push(new Area("Outer Webs East", "Outer Webs", 2, -5, outerWebsEastInteracts, savannahBG, "none", 1, "cycle", false));
    areasArray.push(new Area("Outer Webs South", "Outer Webs", 2, -4, 0, savannahBG, "none", 1, "cycle", false));
    areasArray.push(new Area("Stairwell Top", "Stairwell", 1, -4, stairwellTopInteracts, silkFloorBG, "none", 1, 0, false));
    //Part 2
    areasArray.push(new Area("Stairwell Bottom", "Stairwell", 5, -3, stairwellBottomInteracts, cobblestoneBG, "none", 1, 0, false));
    areasArray.push(new Area("Market Entrance", "The Market", 4, -3, marketEntranceInteracts, cobblestoneBG, marketTheme, 1, 0, true));
    areasArray.push(new Area("Market North", "The Market", 4, -2, marketNorthInteracts, cobblestoneBG, marketTheme, 1, 0, true));
    areasArray.push(new Area("Bed Shop", "Bed Shop", 3, -2, bedStoreInteracts, cobblestoneBG, marketTheme, 1, 0, false));
    areasArray.push(new Area("Bakery", "Bakery", 5, -2, bakeryInteracts, cobblestoneBG, marketTheme, 1, 0, false));
    areasArray.push(new Area("Market East", "The Market", 5, -1, marketEastInteracts, cobblestoneBG, marketTheme, 1, 0, true));
    areasArray.push(new Area("Market Edge North", "Market Edge", 6, -1, marketEdgeNorthInteracts, cobblestoneBG, marketTheme, 0.5, 50, false));
    areasArray.push(new Area("Market Edge East", "Market Edge", 6, 0, marketEdgeEastInteracts, cobblestoneBG, marketTheme, 0, 150, false));
    areasArray.push(new Area("Market Edge Center", "Market Edge", 5, 0, 0, cobblestoneBG, marketTheme, 0, 150, false));
    areasArray.push(new Area("Market Edge West", "Market Edge", 4, 0, marketEdgeWestInteracts, cobblestoneBG, marketTheme, 0.5, 50, false));
    areasArray.push(new Area("Market Center", "The Market", 4, -1, marketCenterInteracts, cobblestoneBG, marketTheme, 1, 0, true));
    areasArray.push(new Area("Market West", "The Market", 3, -1, marketWestInteracts, cobblestoneBG, marketTheme, 1, 0, true));
    areasArray.push(new Area("Main Entrance", "Main Entrance", 3, 0, mainEntranceInteracts, cobblestoneBG, "none", 1, 0, false));
    //Part 3
    areasArray.push(new Area("Highlands Entrance", "Highlands", 4, -7, highlandsEntranceInteracts, stoneBG, highlandsTheme, 0.75, "cycle", false));
    areasArray.push(new Area("Highlands North", "Highlands", 4, -6, 0, grassBG, highlandsTheme, 0.75, "cycle", false));
    areasArray.push(new Area("Highlands West", "Highlands", 4, -5, highlandsWestInteracts, grassBG, highlandsTheme, 0.25, "cycle", true));
    areasArray.push(new Area("Highlands Center", "Highlands", 5, -5, 0, grassBG, highlandsTheme, 0.75, "cycle", true));
    areasArray.push(new Area("Highlands East", "Highlands", 6, -5, 0, grassBG, highlandsTheme, 0.75, "cycle", true));
    areasArray.push(new Area("Rocky Hill West", "Rocky Hill", 6, -6, 0, stoneBG, highlandsTheme, 0.75, "cycle", true));
    areasArray.push(new Area("Rocky Hill North", "Rocky Hill", 7, -6, rockyHillNorthInteracts, stoneBG, highlandsTheme, 1, "cycle", false));
    areasArray.push(new Area("Rocky Hill East", "Rocky Hill", 8, -6, 0, stoneBG, highlandsTheme, 0.75, "cycle", true));
    areasArray.push(new Area("Rocky Hill Center", "Rocky Hill", 8, -5, 0, stoneBG, highlandsTheme, 0.5, "cycle", true));
    areasArray.push(new Area("Rocky Hill South", "Rocky Hill", 8, -4, rockyHillSouthInteracts, grassBG, highlandsTheme, 0.25, "cycle", false));
    areasArray.push(new Area("Rocky Hill Cliff", "Rocky Hill", 8, -3, rockyHillCliffInteracts, grassBG, highlandsTheme, 0, "cycle", false));
    areasArray.push(new Area("Hideout Entrance", "Rocky Hill", 7, -3, hideoutEntranceInteracts, stoneBG, "none", 0, "cycle", false));
    //Epilogue
    areasArray.push(new Area("Main Room", "Chrysalis Hideout", 8, 0, mainRoomInteracts, stoneBG, iWebsTheme1, 1, 0, false));
    areasArray.push(new Area("Sleeping Room", "Chrysalis Hideout", 9, 0, sleepingRoomInteracts, stoneBG, iWebsTheme1, 1, 0, false));
    areasArray.push(new Area("Storage Room", "Chrysalis Hideout", 8, -1, storageRoomInteracts, stoneBG, iWebsTheme1, 1, 0, false));
    areasArray.push(new Area("Meeting Room", "Chrysalis Hideout", 8, -2, meetingRoomInteracts, stoneBG, iWebsTheme1, 1, 0, false));
    areasArray.push(new Area("Main Room Destroyed", "Chrysalis Hideout", 10, 0, mainRoomDestroyedInteracts, stoneBG, endingTheme, 1, 100, false));
    areasArray.push(new Area("Sleeping Room Destroyed", "Chrysalis Hideout", 11, 0, sleepingRoomDestroyedInteracts, stoneBG, endingTheme, 1, 0, false));
    areasArray.push(new Area("Storage Room Destroyed", "Chrysalis Hideout", 10, -1, storageRoomDestroyedInteracts, stoneBG, endingTheme, 1, 100, false));
    areasArray.push(new Area("Meeting Room Destroyed", "Chrysalis Hideout", 10, -2, meetingRoomDestroyedInteracts, stoneBG, endingTheme, 0.5, 100, false));
    //Extra Areas
    areasArray.push(new Area("Test Area 1", "Test Area", -1, -6, testArea1Interacts, "none", titleTheme, 1, "cycle", false));
    areasArray.push(new Area("Test Area 2", "Test Area", -1, -7, 0, "none", titleTheme, 1, "cycle", false));
  }


  /*
  This function sets up the floor layer for each area, consisting of tiles that the player will be able to walk over the top of without collision. 
  Each branch corresponds with a different area, and areas without any floor tiles require no branch. This function has no effect on the area background,
  which is on a separate layer below the floor layer. Areas without a floor layer don't requie a branch.
  */
  setupFloor(areaID, area) {
    this.setupMode = "tiles";
    area.splice(0);
    if (areaID == "Hercules' House") { 
      //Treestuff Piles
      area.push(new Tile(pos(4), pos(5), 27));
      area.push(new Tile(pos(3), pos(6), 27));
    }
    else if (areaID == "Inner Webs South") { 
      area.push(new Tile(pos(6), pos(7), 78)); //Sign Bottom
    }
    else if (areaID == "Inner Webs West") { 
      area.push(new Tile(pos(2), pos(8), 78)); //Sign Bottom
    }
    else if (areaID == "Inner Webs Checkpoint") { 
      area.push(new Tile(pos(2), pos(3), 78)); //Sign Bottom
    }
    else if (areaID == "Inner Webs East") { 
      area.push(new Tile(pos(8), pos(6), 78)); //Sign Bottom
    }
    else if (areaID == "Inner Webs Center") { 
      area.push(new Tile(pos(1), pos(3), 78)); //Sign Bottom
      area.push(new Tile(pos(6), pos(2), 79)); //Propoganda Sign Bottom
    }
    else if (areaID == "Inner Webs North") { 
      //Treestuff Piles
      area.push(new Tile(pos(2), pos(2), 27));
      area.push(new Tile(pos(1), pos(3), 27));
      area.push(new Tile(pos(5), pos(3), 27));
      area.push(new Tile(pos(3), pos(4), 27));
      area.push(new Tile(pos(8), pos(4), 27));
      area.push(new Tile(pos(8), pos(5), 27));
      area.push(new Tile(pos(4), pos(7), 27));
      area.push(new Tile(pos(6), pos(8), 27));
    }
    else if (areaID == "Outer Webs West") { 
      //Pillars
      this.setTilesRect(pos(0), pos(7), 1, 2, 3, area);
      area.push(new Tile(pos(3), pos(8), 3));
      area.push(new Tile(pos(6), pos(7), 3));
      this.setTilesRect(pos(9), pos(7), 1, 2, 3, area);
      //Silk Floor
      area.push(new Tile(pos(4), pos(4), 10));
      area.push(new Tile(pos(3), pos(5), 10));
      this.setTilesRect(pos(5), pos(5), 1, 3, 10, area);
      this.setTilesRect(pos(3), pos(7), 2, 1, 10, area);
      this.setTilesRect(pos(1), pos(8), 2, 1, 10, area);
      area.push(new Tile(pos(2), pos(9), 10));
      area.push(new Tile(pos(8), pos(8), 10));
      //Silk Webs
      area.push(new Tile(pos(3), pos(4), 11));
      area.push(new Tile(pos(2), pos(5), 11));
      this.setTilesRect(pos(4), pos(5), 1, 2, 11, area);
      area.push(new Tile(pos(2), pos(7), 11));
      area.push(new Tile(pos(3), pos(8), 11));
      area.push(new Tile(pos(6), pos(5), 11));
      area.push(new Tile(pos(7), pos(6), 11));
      this.setTilesRect(pos(6), pos(7), 3, 1, 11, area);
      area.push(new Tile(pos(7), pos(8), 11));
      area.push(new Tile(pos(9), pos(8), 11));
      //Treestuff Piles
      area.push(new Tile(pos(5), pos(6), 27));
      area.push(new Tile(pos(8), pos(8), 27));
    }
    else if (areaID == "Outer Webs Center") { 
      //Pillars
      this.setTilesRect(pos(5), pos(7), 1, 2, 3, area);
      //Silk Floor
      this.setTilesRect(pos(5), pos(3), 2, 1, 10, area);
      this.setTilesRect(pos(7), pos(5), 2, 1, 10, area);
      this.setTilesRect(pos(0), pos(8), 2, 1, 10, area);
      this.setTilesRect(pos(7), pos(7), 2, 1, 10, area);
      area.push(new Tile(pos(7), pos(4), 10));
      area.push(new Tile(pos(3), pos(6), 10));
      area.push(new Tile(pos(2), pos(7), 10));
      area.push(new Tile(pos(6), pos(8), 10));
      //Silk Webs
      this.setTilesRect(pos(5), pos(2), 2, 1, 11, area);
      this.setTilesRect(pos(3), pos(3), 2, 1, 11, area);
      this.setTilesRect(pos(4), pos(4), 3, 1, 11, area);
      this.setTilesRect(pos(3), pos(5), 2, 1, 11, area);
      area.push(new Tile(pos(7), pos(3), 11));
      area.push(new Tile(pos(8), pos(4), 11));
      area.push(new Tile(pos(4), pos(6), 11));
      area.push(new Tile(pos(7), pos(6), 11));
      area.push(new Tile(pos(1), pos(7), 11));
      area.push(new Tile(pos(3), pos(7), 11));
      area.push(new Tile(pos(6), pos(7), 11));
      area.push(new Tile(pos(9), pos(7), 11));
    }
    else if (areaID == "Outer Webs East") { 
      //Pillars
      area.push(new Tile(pos(4), pos(7), 3));
      area.push(new Tile(pos(4), pos(9), 3));
      //Silk Floor
      this.setTilesRect(pos(2), pos(6), 2, 1, 10, area);
      this.setTilesRect(pos(5), pos(6), 2, 1, 10, area);
      this.setTilesRect(pos(0), pos(7), 4, 1, 10, area);
      this.setTilesRect(pos(3), pos(8), 2, 1, 10, area);
      this.setTilesRect(pos(2), pos(9), 2, 1, 10, area);
      area.push(new Tile(pos(6), pos(5), 10));
      area.push(new Tile(pos(5), pos(7), 10));
      area.push(new Tile(pos(1), pos(8), 10));
      //Silk Webs
      this.setTilesRect(pos(1), pos(5), 2, 1, 11, area);
      this.setTilesRect(pos(4), pos(5), 2, 1, 11, area);
      this.setTilesRect(pos(7), pos(5), 1, 2, 11, area);
      area.push(new Tile(pos(6), pos(4), 11));
      area.push(new Tile(pos(0), pos(6), 11));
      area.push(new Tile(pos(4), pos(7), 11));
      area.push(new Tile(pos(6), pos(7), 11));
      area.push(new Tile(pos(2), pos(8), 11));
      area.push(new Tile(pos(5), pos(8), 11));
      //Treestuff Piles
      area.push(new Tile(pos(2), pos(6), 27));
      area.push(new Tile(pos(1), pos(8), 27));
    }
    else if (areaID == "Outer Webs South") { 
      //Pillars
      area.push(new Tile(pos(4), pos(0), 3));
      area.push(new Tile(pos(4), pos(3), 3));
      area.push(new Tile(pos(4), pos(6), 3));
      area.push(new Tile(pos(4), pos(9), 3));
      //Silk Floor
      this.setTilesRect(pos(3), pos(1), 1, 2, 10, area);
      this.setTilesRect(pos(2), pos(2), 1, 3, 10, area);
      this.setTilesRect(pos(1), pos(4), 1, 3, 10, area);
      this.setTilesRect(pos(2), pos(6), 1, 2, 10, area);
      this.setTilesRect(pos(3), pos(5), 1, 2, 10, area);
      this.setTilesRect(pos(5), pos(4), 1, 2, 10, area);
      area.push(new Tile(pos(2), pos(0), 10));
      area.push(new Tile(pos(0), pos(5), 10));
      area.push(new Tile(pos(4), pos(4), 10));
      //Silk Webs (Silk Floor With Holes)
      this.setTilesRect(pos(3), pos(3), 2, 1, 11, area);
      this.setTilesRect(pos(4), pos(6), 2, 1, 11, area);
      this.setTilesRect(pos(3), pos(7), 2, 1, 11, area);
      area.push(new Tile(pos(3), pos(0), 11));
      area.push(new Tile(pos(2), pos(1), 11));
      area.push(new Tile(pos(4), pos(1), 11));
      area.push(new Tile(pos(5), pos(2), 11));
      area.push(new Tile(pos(3), pos(4), 11));
      area.push(new Tile(pos(2), pos(5), 11));
      area.push(new Tile(pos(2), pos(8), 11));
      //Treestuff Piles
      area.push(new Tile(pos(5), pos(5), 27));
      area.push(new Tile(pos(2), pos(7), 27));
    }
    else if (areaID == "Stairwell Top") {
      //Stairs
      this.setTilesRect(pos(4), pos(6), 2, 4, 12, area);
      //Decor
      area.push(new Tile(pos(2), pos(4), 78)); //Sign Bottom
    }
    else if (areaID == "Stairwell Bottom") {
      //Stairs
      this.setTilesRect(pos(4), pos(0), 2, 4, 12, area);
      //Decor
      area.push(new Tile(pos(7), pos(5), 78)); //Sign Bottom
    }
    else if (areaID == "Market North") {
      //Decor
      area.push(new Tile(pos(1), pos(4), 78)); //Sign Bottom
      area.push(new Tile(pos(8), pos(4), 78)); //Sign Bottom
      area.push(new Tile(pos(7), pos(3), 76)); //Bread Counter Bottom
    }
    else if (areaID == "Bakery") {
      //Decor
      area.push(new Tile(pos(2), pos(4), 76)); //Bread Counter Bottom
      area.push(new Tile(pos(3), pos(3), 76)); //Bread Counter Bottom
      area.push(new Tile(pos(7), pos(3), 76)); //Bread Counter Bottom
      area.push(new Tile(pos(1), pos(4), 70)); //Counter Bottom
    }
    else if (areaID == "Market East") {
      //Decor
      area.push(new Tile(pos(1), pos(6), 71)); //Glass Counter Bottom
      area.push(new Tile(pos(3), pos(6), 71)); //Glass Counter Bottom
      area.push(new Tile(pos(6), pos(4), 74)); //Treestuff Counter Bottom
      area.push(new Tile(pos(7), pos(4), 75)); //Silk Counter Bottom
    }
    else if (areaID == "Market Edge North") {
      //Treestuff Piles
      area.push(new Tile(pos(1), pos(8), 27));
      area.push(new Tile(pos(2), pos(5), 27));
      area.push(new Tile(pos(7), pos(6), 27));
      //Decor
      area.push(new Tile(pos(2), pos(2), 73)); //Pots Counter Bottom
      area.push(new Tile(pos(3), pos(2), 73)); //Pots Counter Bottom
      area.push(new Tile(pos(5), pos(2), 73)); //Pots Counter Bottom
      area.push(new Tile(pos(6), pos(3), 73)); //Pots Counter Bottom
      area.push(new Tile(pos(3), pos(6), 73)); //Pots Counter Bottom
    }
    else if (areaID == "Market Edge East") {
      //Treestuff Piles
      area.push(new Tile(pos(5), pos(0), 27));
      area.push(new Tile(pos(0), pos(3), 27));
      area.push(new Tile(pos(4), pos(8), 27));
      area.push(new Tile(pos(8), pos(7), 27));
    }
    else if (areaID == "Market Edge Center") {
      //Treestuff Piles
      area.push(new Tile(pos(2), pos(3), 27));
      area.push(new Tile(pos(0), pos(4), 27));
      area.push(new Tile(pos(1), pos(5), 27));
      area.push(new Tile(pos(3), pos(5), 27));
      area.push(new Tile(pos(4), pos(4), 27));
      area.push(new Tile(pos(6), pos(6), 27));
      area.push(new Tile(pos(7), pos(4), 27));
      area.push(new Tile(pos(8), pos(3), 27));
    }
    else if (areaID == "Market Edge West") {
      //Treestuff Piles
      area.push(new Tile(pos(3), pos(2), 27));
      area.push(new Tile(pos(5), pos(3), 27));
      area.push(new Tile(pos(6), pos(6), 27));
    }
    else if (areaID == "Market Center") {
      //Treestuff Piles
      area.push(new Tile(pos(1), pos(7), 27));
      area.push(new Tile(pos(3), pos(8), 27));
    }
    else if (areaID == "Market West") {
      //Decor
      area.push(new Tile(pos(1), pos(2), 72)); //Book Counter Bottom
      area.push(new Tile(pos(2), pos(2), 72)); //Book Counter Bottom
      area.push(new Tile(pos(5), pos(3), 77)); //Flower Counter Bottom
      area.push(new Tile(pos(7), pos(2), 77)); //Flower Counter Bottom
      area.push(new Tile(pos(8), pos(2), 77)); //Flower Counter Bottom
    }
    else if (areaID == "Highlands Entrance") {
      //Decor
      area.push(new Tile(pos(1), pos(4), 19)); //Rubble
      area.push(new Tile(pos(4), pos(3), 19)); //Rubble
      area.push(new Tile(pos(7), pos(4), 19)); //Rubble
      area.push(new Tile(pos(1), pos(8), 19)); //Rubble
      area.push(new Tile(pos(5), pos(6), 19)); //Rubble
      area.push(new Tile(pos(6), pos(9), 19)); //Rubble
      
    }
    else if (areaID == "Highlands North") {
      //Floor
      this.setTilesRect(pos(2), pos(0), 5, 3, 15, area);
      this.setTilesRect(pos(3), pos(3), 5, 1, 15, area);
      area.push(new Tile(pos(1), pos(2), 15));
      area.push(new Tile(pos(6), pos(4), 15));
      //Stairs
      this.setTilesRect(pos(6), pos(5), 1, 2, 16, area);
      //Decor
      area.push(new Tile(pos(2), pos(1), 19)); //Rubble
      area.push(new Tile(pos(1), pos(2), 19)); //Rubble
      area.push(new Tile(pos(7), pos(3), 19)); //Rubble
      area.push(new Tile(pos(3), pos(9), 19)); //Rubble
      area.push(new Tile(pos(5), pos(9), 19)); //Rubble
    }
    else if (areaID == "Highlands West") {
      //Decor
      area.push(new Tile(pos(5), pos(0), 19)); //Rubble
      area.push(new Tile(pos(5), pos(3), 19)); //Rubble
      area.push(new Tile(pos(6), pos(4), 19)); //Rubble
      area.push(new Tile(pos(3), pos(6), 19)); //Rubble
    }
    else if (areaID == "Highlands Center") {
      //Floor
      this.setTilesRect(pos(3), pos(1), 3, 1, 15, area);
      this.setTilesRect(pos(1), pos(2), 6, 1, 15, area);
      this.setTilesRect(pos(1), pos(3), 4, 1, 15, area);
      this.setTilesRect(pos(6), pos(3), 3, 1, 15, area);
      //Stairs
      area.push(new Tile(pos(2), pos(4), 16));
      area.push(new Tile(pos(7), pos(4), 16));
      //Decor
      area.push(new Tile(pos(1), pos(2), 19)); //Rubble
      area.push(new Tile(pos(6), pos(2), 19)); //Rubble
      area.push(new Tile(pos(4), pos(3), 19)); //Rubble
      area.push(new Tile(pos(8), pos(3), 19)); //Rubble
      
    }
    else if (areaID == "Highlands East") {
      //Floor
      this.setTilesRect(pos(4), pos(0), 1, 5, 15, area);
      this.setTilesRect(pos(5), pos(0), 1, 2, 15, area);
      area.push(new Tile(pos(3), pos(2), 15));
      //Stairs
      area.push(new Tile(pos(4), pos(5), 16));
      //Decor
      area.push(new Tile(pos(4), pos(3), 19)); //Rubble
      area.push(new Tile(pos(3), pos(7), 19)); //Rubble
      area.push(new Tile(pos(2), pos(8), 19)); //Rubble
    }
    else if (areaID == "Rocky Hill West") {
      //Stairs
      area.push(new Tile(pos(2), pos(5), 16));
      //Decor
      area.push(new Tile(pos(1), pos(3), 19)); //Rubble
      area.push(new Tile(pos(3), pos(7), 19)); //Rubble
      area.push(new Tile(pos(9), pos(5), 19)); //Rubble
    }
    else if (areaID == "Rocky Hill North") {
      //Decor
      area.push(new Tile(pos(1), pos(3), 19)); //Rubble
      area.push(new Tile(pos(0), pos(5), 19)); //Rubble
      area.push(new Tile(pos(2), pos(6), 19)); //Rubble
      area.push(new Tile(pos(6), pos(7), 19)); //Rubble
    }
    else if (areaID == "Rocky Hill Center") {
      //Floor
      this.setTilesRect(pos(6), pos(4), 3, 2, 14, area);
      this.setTilesRect(pos(3), pos(6), 5, 2, 14, area);
      this.setTilesRect(pos(4), pos(8), 3, 1, 14, area);
      //Stairs
      area.push(new Tile(pos(3), pos(5), 16));
      area.push(new Tile(pos(6), pos(3), 16));
      //Decor
      area.push(new Tile(pos(7), pos(7), 19)); //Rubble
    }
    else if (areaID == "Rocky Hill South") {
      //Floor
      this.setTilesRect(pos(1), pos(0), 1, 4, 15, area);
      this.setTilesRect(pos(2), pos(2), 1, 6, 15, area);
      this.setTilesRect(pos(3), pos(4), 1, 6, 15, area);
      this.setTilesRect(pos(4), pos(7), 1, 3, 15, area);
      this.setTilesRect(pos(5), pos(8), 1, 2, 15, area);
      //Decor
      area.push(new Tile(pos(2), pos(2), 19)); //Rubble
      area.push(new Tile(pos(3), pos(4), 19)); //Rubble
      area.push(new Tile(pos(8), pos(4), 19)); //Rubble
      area.push(new Tile(pos(6), pos(5), 19)); //Rubble
      area.push(new Tile(pos(4), pos(6), 19)); //Rubble
      area.push(new Tile(pos(2), pos(7), 19)); //Rubble
    }
    else if (areaID == "Rocky Hill Cliff") {
      //Floor
      this.setTilesRect(pos(3), pos(0), 3, 3, 15, area);
      this.setTilesRect(pos(2), pos(3), 3, 2, 15, area);
      this.setTilesRect(pos(0), pos(4), 2, 3, 15, area);
      this.setTilesRect(pos(2), pos(5), 2, 1, 15, area);
      //Decor
      area.push(new Tile(pos(3), pos(2), 19)); //Rubble
      area.push(new Tile(pos(2), pos(3), 19)); //Rubble
      area.push(new Tile(pos(3), pos(5), 19)); //Rubble
      area.push(new Tile(pos(5), pos(6), 19)); //Rubble
      area.push(new Tile(pos(8), pos(5), 19)); //Rubble
      area.push(new Tile(pos(6), pos(7), 19)); //Rubble
      area.push(new Tile(pos(4), pos(8), 19)); //Rubble
      area.push(new Tile(pos(9), pos(8), 19)); //Rubble
    }
    else if (areaID == "Hideout Entrance") {
      //Floor
      this.setTilesRect(pos(0), pos(7), 2, 3, 14, area);
      this.setTilesRect(pos(2), pos(8), 2, 2, 14, area);
      this.setTilesRect(pos(4), pos(7), 3, 3, 14, area);
      this.setTilesRect(pos(7), pos(9), 3, 1, 14, area);
      area.push(new Tile(pos(0), pos(6), 14));
      area.push(new Tile(pos(7), pos(8), 14));
      //Wall Middles
      area.push(new Tile(pos(0), pos(4), 8));
      //Decor
      area.push(new Tile(pos(5), pos(3), 19)); //Rubble
      area.push(new Tile(pos(1), pos(4), 19)); //Rubble
      area.push(new Tile(pos(6), pos(4), 19)); //Rubble
      area.push(new Tile(pos(2), pos(5), 19)); //Rubble
      area.push(new Tile(pos(0), pos(6), 19)); //Rubble
      area.push(new Tile(pos(8), pos(6), 19)); //Rubble
      area.push(new Tile(pos(5), pos(7), 19)); //Rubble
      area.push(new Tile(pos(7), pos(8), 19)); //Rubble
      area.push(new Tile(pos(2), pos(4), 18)); //Rock
    }
    else if (areaID == "Main Room") {
      //Decor
      area.push(new Tile(pos(4), pos(2), 19)); //Rubble
      area.push(new Tile(pos(3), pos(7), 19)); //Rubble
      area.push(new Tile(pos(7), pos(6), 19)); //Rubble
    }
    else if (areaID == "Sleeping Room") {
      //Decor
      area.push(new Tile(pos(2), pos(5), 19)); //Rubble
      area.push(new Tile(pos(5), pos(5), 19)); //Rubble
      area.push(new Tile(pos(6), pos(3), 19)); //Rubble
      area.push(new Tile(pos(7), pos(6), 19)); //Rubble
    }
    else if (areaID == "Storage Room") {
      //Decor
      area.push(new Tile(pos(5), pos(1), 19)); //Rubble
      area.push(new Tile(pos(5), pos(4), 19)); //Rubble
      area.push(new Tile(pos(4), pos(6), 19)); //Rubble
      area.push(new Tile(pos(6), pos(7), 19)); //Rubble
    }
    else if (areaID == "Meeting Room") {
      //Decor
      area.push(new Tile(pos(4), pos(2), 19)); //Rubble
      area.push(new Tile(pos(6), pos(4), 19)); //Rubble
      area.push(new Tile(pos(3), pos(6), 19)); //Rubble
      area.push(new Tile(pos(6), pos(7), 19)); //Rubble
      area.push(new Tile(pos(5), pos(8), 19)); //Rubble
    }
    else if (areaID == "Main Room Destroyed") {
      //Decor
      area.push(new Tile(pos(4), pos(2), 19)); //Rubble
      area.push(new Tile(pos(3), pos(7), 19)); //Rubble
      area.push(new Tile(pos(7), pos(6), 19)); //Rubble
    }
    else if (areaID == "Sleeping Room Destroyed") {
      //Decor
      area.push(new Tile(pos(2), pos(5), 19)); //Rubble
      area.push(new Tile(pos(5), pos(5), 19)); //Rubble
      area.push(new Tile(pos(6), pos(3), 19)); //Rubble
      area.push(new Tile(pos(7), pos(6), 19)); //Rubble
    }
    else if (areaID == "Storage Room Destroyed") {
      //Decor
      area.push(new Tile(pos(5), pos(1), 19)); //Rubble
      area.push(new Tile(pos(5), pos(4), 19)); //Rubble
      area.push(new Tile(pos(4), pos(6), 19)); //Rubble
      area.push(new Tile(pos(6), pos(7), 19)); //Rubble
      area.push(new Tile(pos(3), pos(5), 27)); //Treestuff Pile
    }
    else if (areaID == "Meeting Room Destroyed") {
      //Decor
      area.push(new Tile(pos(4), pos(2), 19)); //Rubble
      area.push(new Tile(pos(6), pos(4), 19)); //Rubble
      area.push(new Tile(pos(3), pos(6), 19)); //Rubble
      area.push(new Tile(pos(6), pos(7), 19)); //Rubble
      area.push(new Tile(pos(5), pos(8), 19)); //Rubble
    }
  }

  /*
  This function sets up the walls layer for each area, which consists of the tiles that the player will collide with.
  Each branch of the if/else corresponds with a different area. Areas without a wall layer don't requie a branch.
  */
  setupWalls(areaID, area) {
    this.setupMode = "tiles";
    area.splice(0);
    if (areaID == "Test Area 1") { 
      //Top Side
      this.setTilesRect(pos(0), pos(0), 4, 1, 90, area);
      this.setTilesRect(pos(6), pos(0), 4, 1, 90, area);
      //Bottom Side
      this.setTilesRect(pos(0), pos(9), 10, 1, 90, area);
      //Left Side
      this.setTilesRect(pos(0), pos(1), 1, 8, 90, area);
      //Right Side
      this.setTilesRect(pos(9), pos(1), 1, 8, 90, area); 
      //Trees
      area.push(new Tile(pos(2), pos(2), 91));
      area.push(new Tile(pos(4), pos(2), 91));
    }
    else if (areaID == "Test Area 2") { 
      //Top Side
      this.setTilesRect(pos(0), pos(0), 10, 1, 91, area);
      //Bottom Side
      this.setTilesRect(pos(0), pos(9), 4, 1, 90, area);
      this.setTilesRect(pos(6), pos(9), 4, 1, 90, area);
      //Left Side
      this.setTilesRect(pos(0), pos(1), 1, 8, 91, area);
      //Right Side
      this.setTilesRect(pos(9), pos(1), 1, 8, 91, area);
    }
    else if (areaID == "Hercules' House") { 
      //Walls
      this.setTilesRect(pos(0), pos(0), 6, 2, 0, area);
      this.setTilesRect(pos(0), pos(2), 5, 1, 0, area);
      this.setTilesRect(pos(0), pos(3), 4, 1, 0, area);
      this.setTilesRect(pos(0), pos(4), 3, 6, 0, area);
      this.setTilesRect(pos(7), pos(0), 3, 3, 0, area);
      this.setTilesRect(pos(8), pos(3), 2, 5, 0, area);
      this.setTilesRect(pos(8), pos(3), 2, 5, 0, area);
      this.setTilesRect(pos(3), pos(8), 7, 2, 0, area);
      area.push(new Tile(pos(3), pos(7), 0));
      area.push(new Tile(pos(7), pos(7), 0));
      //Wall Sides
      area.push(new Tile(pos(3), pos(4), 1));
      area.push(new Tile(pos(4), pos(3), 1));
      area.push(new Tile(pos(5), pos(2), 1));
      area.push(new Tile(pos(7), pos(3), 1));
      //Decor
      area.push(new Tile(pos(4), pos(4), 28)); //Chest
      area.push(new Tile(pos(3), pos(5), 26)); //Storage Pot Treestuff
      area.push(new Tile(pos(7), pos(5), 31)); //Table
    }
    else if (areaID == "Inner Webs South") { 
      //Walls
      this.setTilesRect(pos(0), pos(0), 10, 1, 0, area);
      area.push(new Tile(pos(0), pos(1), 0));
      this.setTilesRect(pos(6), pos(1), 4, 1, 0, area);
      area.push(new Tile(pos(9), pos(2), 0));
      this.setTilesRect(pos(0), pos(6), 2, 4, 0, area);
      this.setTilesRect(pos(2), pos(7), 3, 3, 0, area);
      this.setTilesRect(pos(5), pos(8), 1, 2, 0, area);
      this.setTilesRect(pos(7), pos(5), 3, 5, 0, area);
      area.push(new Tile(pos(6), pos(5), 0));
      //Wall Sides
      area.push(new Tile(pos(0), pos(2), 1));
      this.setTilesRect(pos(1), pos(1), 5, 1, 1, area);
      this.setTilesRect(pos(6), pos(2), 3, 1, 1, area);
      area.push(new Tile(pos(9), pos(3), 1));
      area.push(new Tile(pos(6), pos(6), 1));
      //Pillar Bases
      area.push(new Tile(pos(1), pos(2), 2));
      area.push(new Tile(pos(5), pos(2), 2));
      //Decor
      area.push(new Tile(pos(1), pos(3), 30)); //Lamp
      area.push(new Tile(pos(5), pos(3), 30)); //Lamp
      area.push(new Tile(pos(3), pos(2), 32)); //Table With Plant
      area.push(new Tile(pos(2), pos(1), 45)); //Banner Hive Red
      area.push(new Tile(pos(4), pos(1), 46)); //Banner Hive Yellow
    }
    else if (areaID == "Inner Webs West") { 
      //Walls
      this.setTilesRect(pos(0), pos(0), 6, 2, 0, area);
      this.setTilesRect(pos(6), pos(0), 4, 1, 0, area);
      area.push(new Tile(pos(9), pos(1), 0));
      this.setTilesRect(pos(0), pos(2), 2, 8, 0, area);
      this.setTilesRect(pos(4), pos(2), 1, 4, 0, area);
      this.setTilesRect(pos(2), pos(5), 1, 2, 0, area);
      area.push(new Tile(pos(2), pos(9), 0));
      area.push(new Tile(pos(5), pos(5), 0));
      area.push(new Tile(pos(9), pos(6), 0));
      this.setTilesRect(pos(8), pos(7), 2, 2, 0, area);
      this.setTilesRect(pos(4), pos(9), 6, 1, 0, area);
      //Wall Sides
      this.setTilesRect(pos(2), pos(2), 2, 1, 1, area);
      this.setTilesRect(pos(6), pos(1), 3, 1, 1, area);
      this.setTilesRect(pos(4), pos(6), 2, 1, 1, area);
      area.push(new Tile(pos(9), pos(2), 1));
      area.push(new Tile(pos(2), pos(7), 1));
      area.push(new Tile(pos(5), pos(2), 1));
      //Decor
      area.push(new Tile(pos(5), pos(3), 30)); //Lamp
      area.push(new Tile(pos(7), pos(8), 30)); //Lamp
      area.push(new Tile(pos(2), pos(3), 20)); //Pot
      area.push(new Tile(pos(2), pos(4), 29)); //Sacks
      area.push(new Tile(pos(3), pos(3), 24)); //Storage Pot Fibers
      area.push(new Tile(pos(7), pos(2), 34)); //Painted Canvas
      area.push(new Tile(pos(8), pos(3), 23)); //Storage Pot Fabric
    }
    else if (areaID == "Inner Webs Checkpoint") { 
      //Walls
      this.setTilesRect(pos(0), pos(0), 5, 1, 0, area);
      this.setTilesRect(pos(6), pos(0), 4, 1, 0, area);
      this.setTilesRect(pos(0), pos(1), 3, 1, 0, area);
      this.setTilesRect(pos(7), pos(1), 3, 1, 0, area);
      this.setTilesRect(pos(0), pos(2), 2, 1, 0, area);
      this.setTilesRect(pos(8), pos(2), 2, 2, 0, area);
      this.setTilesRect(pos(7), pos(4), 3, 1, 0, area);
      this.setTilesRect(pos(0), pos(5), 5, 1, 0, area);
      area.push(new Tile(pos(6), pos(5), 0));
      this.setTilesRect(pos(9), pos(5), 1, 3, 0, area);
      this.setTilesRect(pos(0), pos(6), 3, 4, 0, area);
      area.push(new Tile(pos(3), pos(6), 0));
      this.setTilesRect(pos(3), pos(9), 5, 1, 0, area);
      this.setTilesRect(pos(8), pos(8), 2, 2, 0, area);
      //Wall Sides
      this.setTilesRect(pos(0), pos(3), 2, 1, 1, area);
      this.setTilesRect(pos(3), pos(1), 2, 1, 1, area);
      this.setTilesRect(pos(7), pos(5), 2, 1, 1, area);
      area.push(new Tile(pos(2), pos(2), 1));
      area.push(new Tile(pos(6), pos(1), 1));
      area.push(new Tile(pos(7), pos(2), 1));
      area.push(new Tile(pos(4), pos(6), 1));
      area.push(new Tile(pos(3), pos(7), 1));
      area.push(new Tile(pos(6), pos(6), 1));
      //Pillar Bases
      area.push(new Tile(pos(3), pos(2), 2));
      area.push(new Tile(pos(6), pos(2), 2));
      //Decor
      area.push(new Tile(pos(7), pos(3), 30)); //Lamp
      area.push(new Tile(pos(3), pos(8), 20)); //Pot
      area.push(new Tile(pos(4), pos(8), 29)); //Sacks
      area.push(new Tile(pos(7), pos(8), 29)); //Sacks
      area.push(new Tile(pos(8), pos(7), 29)); //Sacks
      area.push(new Tile(pos(4), pos(7), 28)); //Chest
      area.push(new Tile(pos(8), pos(6), 28)); //Chest
      area.push(new Tile(pos(6), pos(8), 23)); //Storage Pot Fabric
      area.push(new Tile(pos(7), pos(6), 23)); //Storage Pot Fabric
    }
    else if (areaID == "Mantid's House") { 
      //Walls
      this.setTilesRect(pos(0), pos(0), 3, 4, 0, area);
      this.setTilesRect(pos(4), pos(0), 6, 4, 0, area);
      this.setTilesRect(pos(6), pos(4), 4, 1, 0, area);
      this.setTilesRect(pos(0), pos(4), 2, 1, 0, area);
      this.setTilesRect(pos(8), pos(5), 2, 1, 0, area);
      this.setTilesRect(pos(0), pos(5), 1, 5, 0, area);
      this.setTilesRect(pos(1), pos(8), 5, 2, 0, area);
      area.push(new Tile(pos(4), pos(7), 0));
      this.setTilesRect(pos(6), pos(9), 4, 1, 0, area);
      this.setTilesRect(pos(8), pos(8), 2, 1, 0, area);
      this.setTilesRect(pos(9), pos(6), 1, 2, 0, area);
      //Wall Sides
      this.setTilesRect(pos(4), pos(4), 2, 1, 1, area);
      this.setTilesRect(pos(6), pos(5), 2, 1, 1, area);
      area.push(new Tile(pos(2), pos(4), 1));
      area.push(new Tile(pos(1), pos(5), 1));
      area.push(new Tile(pos(8), pos(6), 1));
      //Decor
      area.push(new Tile(pos(5), pos(5), 30)); //Lamp
      area.push(new Tile(pos(1), pos(7), 20)); //Pot
      area.push(new Tile(pos(6), pos(8), 20)); //Pot
      area.push(new Tile(pos(2), pos(6), 32)); //Table With Plant
      area.push(new Tile(pos(7), pos(8), 28)); //Chest
      area.push(new Tile(pos(6), pos(5), 44)); //Tapestry Night
    }
    else if (areaID == "The Median") { 
      //Walls
      this.setTilesRect(pos(0), pos(0), 4, 2, 0, area);
      this.setTilesRect(pos(0), pos(2), 3, 3, 0, area);
      this.setTilesRect(pos(0), pos(5), 4, 5, 0, area);
      this.setTilesRect(pos(6), pos(0), 4, 10, 0, area);
      this.setTilesRect(pos(5), pos(4), 1, 2, 0, area);
      area.push(new Tile(pos(5), pos(0), 0));
      area.push(new Tile(pos(4), pos(9), 0));
      //Wall Sides
      area.push(new Tile(pos(3), pos(2), 1));
      area.push(new Tile(pos(5), pos(1), 1));
      area.push(new Tile(pos(5), pos(6), 1));
      //Decor
      area.push(new Tile(pos(5), pos(2), 30)); //Lamp
      area.push(new Tile(pos(4), pos(8), 30)); //Lamp
    }
    else if (areaID == "Inner Webs East") {
      //Walls
      this.setTilesRect(pos(0), pos(0), 3, 1, 0, area);
      this.setTilesRect(pos(7), pos(0), 3, 1, 0, area);
      this.setTilesRect(pos(8), pos(1), 2, 3, 0, area);
      this.setTilesRect(pos(9), pos(4), 1, 3, 0, area);
      this.setTilesRect(pos(8), pos(7), 2, 3, 0, area);
      this.setTilesRect(pos(6), pos(8), 2, 2, 0, area);
      area.push(new Tile(pos(5), pos(9), 0));
      area.push(new Tile(pos(0), pos(3), 0));
      this.setTilesRect(pos(0), pos(4), 2, 6, 0, area);
      this.setTilesRect(pos(2), pos(8), 1, 2, 0, area);
      area.push(new Tile(pos(3), pos(9), 0));
      this.setTilesRect(pos(4), pos(3), 2, 1, 0, area);
      area.push(new Tile(pos(5), pos(4), 0));
      //Wall Sides
      this.setTilesRect(pos(0), pos(1), 3, 1, 1, area);
      this.setTilesRect(pos(3), pos(0), 4, 1, 1, area);
      area.push(new Tile(pos(7), pos(1), 1));
      area.push(new Tile(pos(4), pos(4), 1));
      area.push(new Tile(pos(5), pos(5), 1));
      area.push(new Tile(pos(8), pos(4), 1));
      //Pillar Bases
      area.push(new Tile(pos(3), pos(1), 2));
      area.push(new Tile(pos(6), pos(1), 2));
      area.push(new Tile(pos(4), pos(5), 2));
      area.push(new Tile(pos(8), pos(5), 2));
      //Decor
      area.push(new Tile(pos(1), pos(3), 30)); //Lamp
      area.push(new Tile(pos(7), pos(2), 30)); //Lamp
      area.push(new Tile(pos(3), pos(8), 30)); //Lamp
      area.push(new Tile(pos(3), pos(6), 31)); //Table
      area.push(new Tile(pos(4), pos(1), 21)); //Fancy Pot
      area.push(new Tile(pos(5), pos(1), 21)); //Fancy Pot
      area.push(new Tile(pos(5), pos(5), 47)); //Banner Hive
    }
    else if (areaID == "Inner Webs Center") {
      //Walls
      this.setTilesRect(pos(0), pos(0), 3, 1, 0, area);
      this.setTilesRect(pos(0), pos(1), 1, 2, 0, area);
      this.setTilesRect(pos(4), pos(0), 6, 1, 0, area);
      area.push(new Tile(pos(9), pos(3), 0));
      this.setTilesRect(pos(7), pos(4), 3, 1, 0, area);
      this.setTilesRect(pos(6), pos(5), 4, 5, 0, area);
      this.setTilesRect(pos(0), pos(5), 1, 5, 0, area);
      this.setTilesRect(pos(1), pos(7), 1, 3, 0, area);
      this.setTilesRect(pos(2), pos(8), 2, 2, 0, area);
      this.setTilesRect(pos(4), pos(7), 2, 3, 0, area);
      //Wall Sides
      this.setTilesRect(pos(1), pos(1), 2, 1, 1, area);
      this.setTilesRect(pos(4), pos(1), 6, 1, 1, area);
      area.push(new Tile(pos(0), pos(3), 1));
      //Pillar Bases
      area.push(new Tile(pos(1), pos(2), 2));
      area.push(new Tile(pos(5), pos(2), 2));
      //Decor
      area.push(new Tile(pos(2), pos(2), 30)); //Lamp
      area.push(new Tile(pos(4), pos(2), 30)); //Lamp
      area.push(new Tile(pos(8), pos(3), 20)); //Pot
      area.push(new Tile(pos(4), pos(6), 22)); //Storage Pot Empty
      area.push(new Tile(pos(3), pos(7), 26)); //Storage Pot Treestuff
    }
    else if (areaID == "Inner Webs North") {
      //Walls
      this.setTilesRect(pos(0), pos(0), 1, 10, 0, area);
      this.setTilesRect(pos(1), pos(4), 1, 6, 0, area);
      this.setTilesRect(pos(3), pos(0), 7, 1, 0, area);
      area.push(new Tile(pos(4), pos(1), 0));
      area.push(new Tile(pos(8), pos(1), 0));
      this.setTilesRect(pos(9), pos(1), 1, 9, 0, area);
      this.setTilesRect(pos(8), pos(7), 1, 3, 0, area);
      area.push(new Tile(pos(7), pos(8), 0));
      this.setTilesRect(pos(4), pos(9), 5, 1, 0, area);
      area.push(new Tile(pos(2), pos(9), 0));
      area.push(new Tile(pos(2), pos(6), 0));
      this.setTilesRect(pos(2), pos(5), 4, 1, 0, area);
      this.setTilesRect(pos(5), pos(4), 3, 1, 0, area);
      //Wall Sides
      this.setTilesRect(pos(3), pos(6), 3, 1, 1, area);
      this.setTilesRect(pos(6), pos(5), 2, 1, 1, area);
      this.setTilesRect(pos(5), pos(1), 3, 1, 1, area);
      area.push(new Tile(pos(1), pos(0), 1));
      area.push(new Tile(pos(3), pos(1), 1));
      area.push(new Tile(pos(4), pos(2), 1));
      area.push(new Tile(pos(8), pos(2), 1));
      area.push(new Tile(pos(2), pos(7), 1));
      //Pillar Bases
      area.push(new Tile(pos(5), pos(2), 2));
      area.push(new Tile(pos(7), pos(2), 2));
      //Decor
      area.push(new Tile(pos(2), pos(8), 30)); //Lamp
      area.push(new Tile(pos(3), pos(2), 30)); //Lamp
      area.push(new Tile(pos(6), pos(6), 30)); //Lamp
      area.push(new Tile(pos(2), pos(4), 22)); //Storage Pot Empty
      area.push(new Tile(pos(1), pos(1), 26)); //Storage Pot Treestuff
      area.push(new Tile(pos(3), pos(7), 26)); //Storage Pot Treestuff
      area.push(new Tile(pos(6), pos(1), 47)); //Banner Hive
    }
    else if (areaID == "Abandoned House") {
      //Walls
      this.setTilesRect(pos(0), pos(0), 10, 1, 0, area);
      this.setTilesRect(pos(0), pos(1), 3, 9, 0, area);
      this.setTilesRect(pos(3), pos(7), 7, 3, 0, area);
      this.setTilesRect(pos(6), pos(1), 4, 1, 0, area);
      this.setTilesRect(pos(8), pos(2), 2, 1, 0, area);
      this.setTilesRect(pos(3), pos(4), 1, 3, 0, area);
      this.setTilesRect(pos(8), pos(5), 2, 2, 0, area);
      area.push(new Tile(pos(4), pos(6), 0));
      area.push(new Tile(pos(7), pos(6), 0));
      //Wall Sides
      this.setTilesRect(pos(3), pos(1), 3, 1, 1, area);
      this.setTilesRect(pos(6), pos(2), 2, 1, 1, area);
      this.setTilesRect(pos(8), pos(3), 2, 1, 1, area);
      //Decor
      area.push(new Tile(pos(3), pos(2), 30)); //Lamp
      area.push(new Tile(pos(7), pos(3), 30)); //Lamp
      area.push(new Tile(pos(7), pos(5), 22)); //Storage Pot Empty
      area.push(new Tile(pos(5), pos(6), 22)); //Storage Pot Empty
      area.push(new Tile(pos(4), pos(2), 20)); //Pot
      area.push(new Tile(pos(3), pos(3), 29)); //Sacks
      area.push(new Tile(pos(4), pos(4), 29)); //Sacks
      area.push(new Tile(pos(5), pos(5), 31)); //Table
      area.push(new Tile(pos(5), pos(2), 28)); //Chest
      area.push(new Tile(pos(6), pos(6), 28)); //Chest
    }
    else if (areaID == "Outer Webs West") {
      //Walls
      this.setTilesRect(pos(0), pos(9), 2, 1, 0, area);
      this.setTilesRect(pos(3), pos(9), 7, 1, 0, area);
      this.setTilesRect(pos(4), pos(8), 3, 1, 0, area);
      //Pillars
      area.push(new Tile(pos(0), pos(6), 3));
      area.push(new Tile(pos(3), pos(6), 3));
      area.push(new Tile(pos(6), pos(6), 3));
      area.push(new Tile(pos(9), pos(6), 3));
      //Invisible Walls
      area.push(new Tile(pos(0), pos(8), 99));
      area.push(new Tile(pos(1), pos(7), 99));
      area.push(new Tile(pos(2), pos(6), 99));
      area.push(new Tile(pos(1), pos(5), 99));
      area.push(new Tile(pos(2), pos(4), 99));
      this.setTilesRect(pos(3), pos(3), 2, 1, 99, area);
      this.setTilesRect(pos(5), pos(4), 2, 1, 99, area);
      area.push(new Tile(pos(7), pos(5), 99));
      area.push(new Tile(pos(8), pos(6), 99));
      area.push(new Tile(pos(9), pos(7), 99));
      //Decor
      area.push(new Tile(pos(1), pos(8), 26)); //Storage Pot Treestuff
    }
    else if (areaID == "Outer Webs Center") {
      //Walls
      this.setTilesRect(pos(0), pos(9), 10, 1, 0, area);
      this.setTilesRect(pos(2), pos(8), 3, 1, 0, area);
      this.setTilesRect(pos(7), pos(8), 3, 1, 0, area);
      //Pillars
      area.push(new Tile(pos(2), pos(6), 3));
      area.push(new Tile(pos(5), pos(6), 3));
      area.push(new Tile(pos(8), pos(6), 3));
      //Invisible Walls
      area.push(new Tile(pos(0), pos(7), 99));
      area.push(new Tile(pos(1), pos(6), 99));
      area.push(new Tile(pos(2), pos(5), 99));
      area.push(new Tile(pos(3), pos(4), 99));
      area.push(new Tile(pos(2), pos(3), 99));
      this.setTilesRect(pos(3), pos(2), 2, 1, 99, area);
      this.setTilesRect(pos(5), pos(1), 2, 1, 99, area);
      area.push(new Tile(pos(7), pos(2), 99));
      area.push(new Tile(pos(8), pos(3), 99));
      this.setTilesRect(pos(9), pos(4), 1, 3, 99, area);
      this.setTilesRect(pos(5), pos(5), 2, 1, 99, area);
      area.push(new Tile(pos(6), pos(6), 99));
      this.setTilesRect(pos(4), pos(7), 2, 1, 99, area);
      area.push(new Tile(pos(5), pos(8), 99));
    }
    else if (areaID == "Outer Webs East") {
      //Walls
      this.setTilesRect(pos(0), pos(8), 1, 2, 0, area);
      area.push(new Tile(pos(1), pos(9), 0));
      //Pillars
      area.push(new Tile(pos(1), pos(6), 3));
      area.push(new Tile(pos(4), pos(6), 3));
      area.push(new Tile(pos(4), pos(9), 3));
      //Invisible Walls
      area.push(new Tile(pos(0), pos(5), 99));
      this.setTilesRect(pos(1), pos(4), 2, 1, 99, area);
      area.push(new Tile(pos(3), pos(5), 99));
      this.setTilesRect(pos(4), pos(4), 2, 1, 99, area);
      area.push(new Tile(pos(6), pos(3), 99));
      area.push(new Tile(pos(7), pos(4), 99));
      this.setTilesRect(pos(8), pos(5), 1, 2, 99, area);
      area.push(new Tile(pos(7), pos(7), 99));
      area.push(new Tile(pos(6), pos(8), 99));
      area.push(new Tile(pos(5), pos(9), 99));
    }
    else if (areaID == "Outer Webs South") {
      //Walls
      this.setTilesRect(pos(0), pos(0), 2, 3, 0, area);
      area.push(new Tile(pos(0), pos(3), 0));
      area.push(new Tile(pos(0), pos(6), 0));
      this.setTilesRect(pos(0), pos(7), 2, 3, 0, area);
      //Wall Sides
      area.push(new Tile(pos(0), pos(4), 1));
      area.push(new Tile(pos(1), pos(3), 1));
      //Pillars
      area.push(new Tile(pos(4), pos(2), 3));
      area.push(new Tile(pos(4), pos(5), 3));
      area.push(new Tile(pos(4), pos(8), 3));
      //Invisible Walls
      area.push(new Tile(pos(4), pos(0), 99));
      area.push(new Tile(pos(5), pos(1), 99));
      area.push(new Tile(pos(6), pos(2), 99));
      area.push(new Tile(pos(5), pos(3), 99));
      this.setTilesRect(pos(6), pos(4), 1, 3, 99, area);
      area.push(new Tile(pos(5), pos(7), 99));
      area.push(new Tile(pos(3), pos(8), 99));
      area.push(new Tile(pos(2), pos(9), 99));
      //Decor
      area.push(new Tile(pos(1), pos(4), 30)); //Lamp
      area.push(new Tile(pos(1), pos(6), 30)); //Lamp
      area.push(new Tile(pos(2), pos(2), 26)); //Storage Pot Treestuff
    }
    else if (areaID == "Stairwell Top") { 
      //Walls
      this.setTilesRect(pos(0), pos(0), 10, 1, 0, area);
      this.setTilesRect(pos(0), pos(1), 2, 9, 0, area);
      this.setTilesRect(pos(2), pos(1), 1, 2, 0, area);
      area.push(new Tile(pos(3), pos(1), 0));
      area.push(new Tile(pos(7), pos(1), 0));
      this.setTilesRect(pos(8), pos(1), 2, 3, 0, area);
      this.setTilesRect(pos(2), pos(5), 1, 5, 0, area);
      this.setTilesRect(pos(3), pos(6), 1, 4, 0, area);
      this.setTilesRect(pos(6), pos(7), 4, 3, 0, area);
      area.push(new Tile(pos(6), pos(6), 0));
      area.push(new Tile(pos(9), pos(6), 0));
      //Wall Sides
      this.setTilesRect(pos(4), pos(1), 3, 1, 1, area);
      this.setTilesRect(pos(8), pos(4), 2, 1, 1, area);
      area.push(new Tile(pos(2), pos(3), 1));
      area.push(new Tile(pos(3), pos(2), 1));
      area.push(new Tile(pos(7), pos(2), 1));
      //Decor
      area.push(new Tile(pos(3), pos(3), 30)); //Lamp
      area.push(new Tile(pos(7), pos(3), 30)); //Lamp
      area.push(new Tile(pos(7), pos(6), 20)); //Pot
      area.push(new Tile(pos(8), pos(6), 29)); //Sacks
      area.push(new Tile(pos(4), pos(1), 45)); //Banner Hive Red
      area.push(new Tile(pos(6), pos(1), 46)); //Banner Hive Yellow
      area.push(new Tile(pos(5), pos(1), 43)); //Tapestry Map
    }
    else if (areaID == "Stairwell Bottom") { 
      //Walls
      this.setTilesRect(pos(0), pos(0), 4, 3, 0, area);
      this.setTilesRect(pos(6), pos(0), 4, 3, 0, area);
      this.setTilesRect(pos(0), pos(3), 3, 1, 0, area);
      this.setTilesRect(pos(7), pos(3), 3, 1, 0, area);
      this.setTilesRect(pos(8), pos(4), 2, 3, 0, area);
      this.setTilesRect(pos(0), pos(7), 3, 1, 0, area);
      this.setTilesRect(pos(7), pos(7), 3, 1, 0, area);
      this.setTilesRect(pos(0), pos(8), 10, 2, 0, area);
      //Wall Sides
      this.setTilesRect(pos(0), pos(4), 3, 1, 1, area);
      area.push(new Tile(pos(3), pos(3), 1));
      area.push(new Tile(pos(6), pos(3), 1));
      area.push(new Tile(pos(7), pos(4), 1));
      //Decor
      area.push(new Tile(pos(3), pos(4), 30)); //Lamp
      area.push(new Tile(pos(6), pos(4), 30)); //Lamp
      area.push(new Tile(pos(3), pos(7), 21)); //Fancy Pot
      area.push(new Tile(pos(4), pos(7), 23)); //Storage Pot Fabric
      area.push(new Tile(pos(6), pos(7), 23)); //Storage Pot Fabric
    }
    else if (areaID == "Market Entrance") { 
      //Walls
      this.setTilesRect(pos(0), pos(0), 10, 1, 0, area);
      this.setTilesRect(pos(0), pos(1), 3, 1, 0, area);
      this.setTilesRect(pos(4), pos(1), 2, 1, 0, area);
      this.setTilesRect(pos(7), pos(1), 3, 2, 0, area);
      this.setTilesRect(pos(0), pos(2), 2, 1, 0, area);
      this.setTilesRect(pos(8), pos(3), 2, 1, 0, area);
      this.setTilesRect(pos(0), pos(3), 1, 4, 0, area);
      this.setTilesRect(pos(0), pos(7), 2, 1, 0, area);
      this.setTilesRect(pos(7), pos(7), 3, 1, 0, area);
      this.setTilesRect(pos(0), pos(8), 4, 2, 0, area);
      this.setTilesRect(pos(6), pos(8), 4, 2, 0, area);
      //Wall Sides
      this.setTilesRect(pos(4), pos(2), 2, 1, 1, area);
      this.setTilesRect(pos(8), pos(4), 2, 1, 1, area);
      area.push(new Tile(pos(1), pos(3), 1));
      area.push(new Tile(pos(2), pos(2), 1));
      area.push(new Tile(pos(3), pos(1), 1));
      area.push(new Tile(pos(6), pos(1), 1));
      area.push(new Tile(pos(7), pos(3), 1));
      //Pillar Bases
      area.push(new Tile(pos(3), pos(2), 2));
      area.push(new Tile(pos(6), pos(2), 2));
      //Decor
      area.push(new Tile(pos(3), pos(7), 30)); //Lamp
      area.push(new Tile(pos(6), pos(7), 30)); //Lamp
      area.push(new Tile(pos(2), pos(3), 21)); //Fancy Pot
      area.push(new Tile(pos(7), pos(4), 21)); //Fancy Pot
      area.push(new Tile(pos(1), pos(6), 22)); //Storage Pot Empty
      area.push(new Tile(pos(2), pos(7), 22)); //Storage Pot Empty
      area.push(new Tile(pos(2), pos(5), 31)); //Table
      area.push(new Tile(pos(1), pos(3), 48)); //Banner Rain
      area.push(new Tile(pos(8), pos(4), 47)); //Banner Hive
    }
    else if (areaID == "Market North") {
      //Walls
      this.setTilesRect(pos(0), pos(0), 4, 1, 0, area);
      this.setTilesRect(pos(0), pos(1), 3, 1, 0, area);
      this.setTilesRect(pos(0), pos(2), 2, 1, 0, area);
      area.push(new Tile(pos(0), pos(3), 0));
      this.setTilesRect(pos(6), pos(0), 4, 1, 0, area);
      this.setTilesRect(pos(7), pos(1), 3, 1, 0, area);
      this.setTilesRect(pos(8), pos(2), 2, 1, 0, area);
      area.push(new Tile(pos(9), pos(3), 0));
      this.setTilesRect(pos(0), pos(6), 2, 4, 0, area);
      this.setTilesRect(pos(2), pos(8), 1, 2, 0, area);
      area.push(new Tile(pos(3), pos(9), 0));
      this.setTilesRect(pos(8), pos(6), 2, 4, 0, area);
      this.setTilesRect(pos(7), pos(8), 1, 2, 0, area);
      area.push(new Tile(pos(6), pos(9), 0));
      //Wall Sides
      area.push(new Tile(pos(0), pos(4), 1));
      area.push(new Tile(pos(1), pos(3), 1));
      area.push(new Tile(pos(2), pos(2), 1));
      area.push(new Tile(pos(3), pos(1), 1));
      area.push(new Tile(pos(9), pos(4), 1));
      area.push(new Tile(pos(8), pos(3), 1));
      area.push(new Tile(pos(7), pos(2), 1));
      area.push(new Tile(pos(6), pos(1), 1));
      //Pillar Bases
      area.push(new Tile(pos(3), pos(3), 2));
      area.push(new Tile(pos(6), pos(3), 2));
      area.push(new Tile(pos(3), pos(7), 2));
      area.push(new Tile(pos(6), pos(7), 2));
      //Decor
      area.push(new Tile(pos(4), pos(9), 22)); //Storage Pot Empty
      area.push(new Tile(pos(2), pos(7), 20)); //Pot
      area.push(new Tile(pos(6), pos(8), 20)); //Pot
      area.push(new Tile(pos(2), pos(3), 24)); //Storage Pot Fibers
      area.push(new Tile(pos(3), pos(8), 29)); //Sacks
      area.push(new Tile(pos(5), pos(9), 29)); //Sacks
      area.push(new Tile(pos(4), pos(8), 28)); //Chest
      area.push(new Tile(pos(3), pos(4), 50)); //Stall Empty
      area.push(new Tile(pos(6), pos(4), 56)); //Stall Bread
      area.push(new Tile(pos(7), pos(2), 66)); //Counter Bread
    }
    else if (areaID == "Bed Shop") {
      //Walls
      this.setTilesRect(pos(0), pos(0), 10, 2, 0, area);
      this.setTilesRect(pos(0), pos(2), 5, 1, 0, area);
      this.setTilesRect(pos(8), pos(2), 2, 2, 0, area);
      this.setTilesRect(pos(0), pos(3), 2, 3, 0, area);
      this.setTilesRect(pos(0), pos(6), 4, 1, 0, area);
      this.setTilesRect(pos(7), pos(6), 3, 1, 0, area);
      this.setTilesRect(pos(0), pos(7), 10, 3, 0, area);
      //Wall Sides
      this.setTilesRect(pos(2), pos(3), 3, 1, 1, area);
      this.setTilesRect(pos(5), pos(2), 3, 1, 1, area);
      this.setTilesRect(pos(8), pos(4), 2, 1, 1, area);
      //Decor
      area.push(new Tile(pos(7), pos(3), 30)); //Lamp
      area.push(new Tile(pos(5), pos(3), 23)); //Storage Pot Fabric
    }
    else if (areaID == "Bakery") {
      //Walls
      this.setTilesRect(pos(0), pos(0), 10, 1, 0, area);
      this.setTilesRect(pos(0), pos(1), 4, 1, 0, area);
      this.setTilesRect(pos(0), pos(2), 3, 1, 0, area);
      area.push(new Tile(pos(0), pos(3), 0));
      this.setTilesRect(pos(7), pos(1), 3, 1, 0, area);
      this.setTilesRect(pos(8), pos(2), 2, 8, 0, area);
      this.setTilesRect(pos(2), pos(5), 5, 1, 0, area);
      this.setTilesRect(pos(0), pos(6), 4, 1, 0, area);
      this.setTilesRect(pos(0), pos(7), 3, 3, 0, area);
      this.setTilesRect(pos(4), pos(9), 4, 1, 0, area);
      //Wall Sides
      this.setTilesRect(pos(1), pos(3), 2, 1, 1, area);
      this.setTilesRect(pos(4), pos(1), 3, 1, 1, area);
      this.setTilesRect(pos(4), pos(6), 3, 1, 1, area);
      area.push(new Tile(pos(0), pos(4), 1));
      area.push(new Tile(pos(3), pos(2), 1));
      area.push(new Tile(pos(3), pos(7), 1));
      area.push(new Tile(pos(7), pos(2), 1));
      //Decor
      area.push(new Tile(pos(1), pos(3), 60)); //Counter Empty
      area.push(new Tile(pos(2), pos(3), 66)); //Counter Bread
      area.push(new Tile(pos(3), pos(2), 66)); //Counter Bread
      area.push(new Tile(pos(7), pos(2), 66)); //Counter Bread
      area.push(new Tile(pos(4), pos(7), 24)); //Storage Pot Fibers
      area.push(new Tile(pos(5), pos(7), 29)); //Sacks
      area.push(new Tile(pos(5), pos(2), 58)); //Oven
      area.push(new Tile(pos(4), pos(2), 59)); //Oven Lit
      area.push(new Tile(pos(6), pos(2), 59)); //Oven Lit
    }
    else if (areaID == "Market East") {
      //Walls
      this.setTilesRect(pos(0), pos(0), 3, 1, 0, area);
      this.setTilesRect(pos(5), pos(0), 5, 2, 0, area);
      this.setTilesRect(pos(6), pos(2), 2, 1, 0, area);
      this.setTilesRect(pos(0), pos(1), 1, 4, 0, area);
      this.setTilesRect(pos(0), pos(4), 4, 1, 0, area);
      this.setTilesRect(pos(7), pos(8), 3, 1, 0, area);
      this.setTilesRect(pos(0), pos(9), 10, 1, 0, area);
      area.push(new Tile(pos(1), pos(3), 0));
      area.push(new Tile(pos(4), pos(0), 0));
      area.push(new Tile(pos(0), pos(8), 0));
      area.push(new Tile(pos(9), pos(7), 0));
      //Wall Sides
      this.setTilesRect(pos(1), pos(1), 2, 1, 1, area);
      this.setTilesRect(pos(0), pos(5), 4, 1, 1, area);
      this.setTilesRect(pos(6), pos(3), 2, 1, 1, area);
      this.setTilesRect(pos(8), pos(2), 2, 1, 1, area);
      area.push(new Tile(pos(4), pos(1), 1));
      area.push(new Tile(pos(5), pos(2), 1));
      //Pillar Bases
      area.push(new Tile(pos(5), pos(6), 2));
      area.push(new Tile(pos(7), pos(6), 2));
      //Decor
      area.push(new Tile(pos(1), pos(2), 30)); //Lamp
      area.push(new Tile(pos(6), pos(8), 30)); //Lamp
      area.push(new Tile(pos(8), pos(3), 30)); //Lamp
      area.push(new Tile(pos(1), pos(8), 21)); //Fancy Pot
      area.push(new Tile(pos(2), pos(8), 21)); //Fancy Pot
      area.push(new Tile(pos(2), pos(1), 48)); //Banner Rain
      area.push(new Tile(pos(4), pos(1), 48)); //Banner Rain
      area.push(new Tile(pos(8), pos(2), 49)); //Banner Diagonals
      area.push(new Tile(pos(5), pos(6), 41)); //Tapestry Roses
      area.push(new Tile(pos(7), pos(6), 41)); //Tapestry Roses
      area.push(new Tile(pos(5), pos(3), 55)); //Stall Sacks
      area.push(new Tile(pos(2), pos(6), 51)); //Stall Glass
      area.push(new Tile(pos(6), pos(3), 64)); //Counter Treestuff
      area.push(new Tile(pos(7), pos(3), 65)); //Counter Silk
      area.push(new Tile(pos(1), pos(5), 61)); //Counter Glass
      area.push(new Tile(pos(3), pos(5), 61)); //Counter Glass
    }
    else if (areaID == "Market Edge North") {
      //Walls
      this.setTilesRect(pos(0), pos(0), 10, 1, 0, area);
      this.setTilesRect(pos(0), pos(1), 2, 1, 0, area);
      this.setTilesRect(pos(6), pos(1), 4, 1, 0, area);
      this.setTilesRect(pos(7), pos(2), 3, 2, 0, area);
      this.setTilesRect(pos(8), pos(4), 2, 3, 0, area);
      this.setTilesRect(pos(9), pos(7), 1, 3, 0, area);
      this.setTilesRect(pos(0), pos(7), 1, 3, 0, area);
      area.push(new Tile(pos(1), pos(9), 0));
      //Wall Sides
      this.setTilesRect(pos(0), pos(2), 2, 1, 1, area);
      this.setTilesRect(pos(2), pos(1), 4, 1, 1, area);
      area.push(new Tile(pos(6), pos(2), 1));
      area.push(new Tile(pos(7), pos(4), 1));
      area.push(new Tile(pos(8), pos(7), 1));
      //Pillar Bases
      area.push(new Tile(pos(3), pos(5), 2));
      area.push(new Tile(pos(5), pos(7), 2));
      //Decor
      area.push(new Tile(pos(1), pos(3), 30)); //Lamp
      area.push(new Tile(pos(7), pos(5), 30)); //Lamp
      area.push(new Tile(pos(4), pos(9), 29)); //Sacks
      area.push(new Tile(pos(2), pos(2), 20)); //Pot
      area.push(new Tile(pos(6), pos(4), 20)); //Pot
      area.push(new Tile(pos(6), pos(3), 21)); //Fancy Pot
      area.push(new Tile(pos(4), pos(4), 22)); //Storage Pot Empty
      area.push(new Tile(pos(5), pos(2), 22)); //Storage Pot Empty
      area.push(new Tile(pos(8), pos(7), 46)); //Banner HiveWing Yellow
      area.push(new Tile(pos(2), pos(1), 63)); //Counter Pots
      area.push(new Tile(pos(3), pos(1), 63)); //Counter Pots
      area.push(new Tile(pos(5), pos(1), 63)); //Counter Pots
      area.push(new Tile(pos(6), pos(2), 63)); //Counter Pots
      area.push(new Tile(pos(3), pos(5), 63)); //Counter Pots
      area.push(new Tile(pos(4), pos(2), 53)); //Stall Pots
    }
    else if (areaID == "Market Edge East") {
      //Walls
      this.setTilesRect(pos(0), pos(0), 2, 1, 0, area);
      this.setTilesRect(pos(9), pos(0), 1, 10, 0, area);
      this.setTilesRect(pos(8), pos(2), 1, 3, 0, area);
      this.setTilesRect(pos(4), pos(3), 3, 1, 0, area);
      this.setTilesRect(pos(5), pos(4), 2, 1, 0, area);
      this.setTilesRect(pos(0), pos(5), 2, 1, 0, area);
      this.setTilesRect(pos(0), pos(6), 3, 1, 0, area);
      this.setTilesRect(pos(0), pos(7), 4, 3, 0, area);
      this.setTilesRect(pos(4), pos(9), 3, 1, 0, area);
      this.setTilesRect(pos(7), pos(8), 2, 2, 0, area);
      area.push(new Tile(pos(0), pos(1), 0));
      area.push(new Tile(pos(4), pos(2), 0));
      area.push(new Tile(pos(5), pos(5), 0));
      //Wall Sides
      area.push(new Tile(pos(0), pos(2), 1));
      area.push(new Tile(pos(1), pos(1), 1));
      area.push(new Tile(pos(4), pos(4), 1));
      area.push(new Tile(pos(5), pos(6), 1));
      area.push(new Tile(pos(6), pos(5), 1));
      area.push(new Tile(pos(8), pos(5), 1));
      //Pillar Bases
      area.push(new Tile(pos(1), pos(2), 2));
      area.push(new Tile(pos(3), pos(4), 2));
      area.push(new Tile(pos(6), pos(6), 2));
      area.push(new Tile(pos(8), pos(6), 2));
      //Decor
      area.push(new Tile(pos(2), pos(3), 26)); //Storage Pot Treestuff
      area.push(new Tile(pos(6), pos(2), 26)); //Storage Pot Treestuff
      area.push(new Tile(pos(5), pos(2), 29)); //Sacks
      area.push(new Tile(pos(6), pos(8), 29)); //Sacks
      area.push(new Tile(pos(4), pos(0), 35)); //Pot Shards
      area.push(new Tile(pos(4), pos(5), 35)); //Pot Shards
    }
    else if (areaID == "Market Edge Center") {
      //Walls
      this.setTilesRect(pos(0), pos(0), 10, 1, 0, area);
      this.setTilesRect(pos(3), pos(1), 7, 1, 0, area);
      this.setTilesRect(pos(5), pos(2), 3, 1, 0, area);
      this.setTilesRect(pos(0), pos(6), 3, 1, 0, area);
      this.setTilesRect(pos(4), pos(6), 2, 1, 0, area);
      this.setTilesRect(pos(9), pos(5), 1, 2, 0, area);
      this.setTilesRect(pos(0), pos(7), 7, 1, 0, area);
      this.setTilesRect(pos(8), pos(7), 2, 1, 0, area);
      this.setTilesRect(pos(0), pos(8), 10, 2, 0, area);
      area.push(new Tile(pos(3), pos(2), 0));
      area.push(new Tile(pos(0), pos(1), 0));
      area.push(new Tile(pos(6), pos(3), 0));
      area.push(new Tile(pos(2), pos(5), 0));
      //Wall Sides
      this.setTilesRect(pos(1), pos(1), 2, 1, 1, area);
      this.setTilesRect(pos(8), pos(2), 2, 1, 1, area);
      area.push(new Tile(pos(0), pos(2), 1));
      area.push(new Tile(pos(3), pos(3), 1));
      area.push(new Tile(pos(4), pos(2), 1));
      area.push(new Tile(pos(5), pos(3), 1));
      area.push(new Tile(pos(6), pos(4), 1));
      area.push(new Tile(pos(7), pos(3), 1));
      //Decor
      area.push(new Tile(pos(4), pos(3), 26)); //Storage Pot Treestuff
      area.push(new Tile(pos(8), pos(6), 26)); //Storage Pot Treestuff
      area.push(new Tile(pos(7), pos(7), 22)); //Storage Pot Empty
      area.push(new Tile(pos(2), pos(2), 29)); //Sacks
      area.push(new Tile(pos(5), pos(4), 29)); //Sacks
      area.push(new Tile(pos(3), pos(6), 29)); //Sacks
    }
    else if (areaID == "Market Edge West") {
      //Walls
      this.setTilesRect(pos(0), pos(0), 2, 1, 0, area);
      this.setTilesRect(pos(3), pos(0), 7, 1, 0, area);
      this.setTilesRect(pos(0), pos(1), 1, 4, 0, area);
      this.setTilesRect(pos(5), pos(1), 5, 1, 0, area);
      this.setTilesRect(pos(6), pos(2), 2, 1, 0, area);
      this.setTilesRect(pos(2), pos(4), 2, 1, 0, area);
      this.setTilesRect(pos(0), pos(5), 5, 5, 0, area);
      this.setTilesRect(pos(5), pos(7), 5, 3, 0, area);
      area.push(new Tile(pos(5), pos(6), 0));
      area.push(new Tile(pos(9), pos(6), 0));
      //Wall Sides
      this.setTilesRect(pos(3), pos(1), 2, 1, 1, area);
      this.setTilesRect(pos(6), pos(3), 2, 1, 1, area);
      this.setTilesRect(pos(8), pos(2), 2, 1, 1, area);
      area.push(new Tile(pos(1), pos(1), 1));
      area.push(new Tile(pos(5), pos(2), 1));
      //Decor
      area.push(new Tile(pos(1), pos(2), 30)); //Lamp
      area.push(new Tile(pos(4), pos(2), 37)); //Destroyed Lamp
      area.push(new Tile(pos(5), pos(5), 20)); //Pot
      area.push(new Tile(pos(7), pos(4), 20)); //Pot
      area.push(new Tile(pos(8), pos(6), 29)); //Sacks
    }
    else if (areaID == "Market Center") {
      //Walls
      this.setTilesRect(pos(0), pos(0), 4, 1, 0, area);
      this.setTilesRect(pos(0), pos(1), 2, 1, 0, area);
      this.setTilesRect(pos(6), pos(0), 4, 1, 0, area);
      this.setTilesRect(pos(8), pos(1), 2, 1, 0, area);
      this.setTilesRect(pos(9), pos(2), 1, 3, 0, area);
      this.setTilesRect(pos(0), pos(5), 1, 5, 0, area);
      this.setTilesRect(pos(1), pos(8), 1, 2, 0, area);
      this.setTilesRect(pos(8), pos(8), 2, 1, 0, area);
      this.setTilesRect(pos(3), pos(9), 7, 1, 0, area);
      //Wall Sides
      this.setTilesRect(pos(0), pos(2), 2, 1, 1, area);
      this.setTilesRect(pos(2), pos(1), 2, 1, 1, area);
      this.setTilesRect(pos(6), pos(1), 2, 1, 1, area);
      area.push(new Tile(pos(8), pos(2), 1));
      area.push(new Tile(pos(9), pos(5), 1));
      //Pillar Bases
      area.push(new Tile(pos(3), pos(3), 2));
      area.push(new Tile(pos(6), pos(3), 2));
      area.push(new Tile(pos(3), pos(7), 2));
      area.push(new Tile(pos(6), pos(7), 2));
      //Decor
      area.push(new Tile(pos(2), pos(2), 30)); //Lamp
      area.push(new Tile(pos(7), pos(8), 30)); //Lamp
      area.push(new Tile(pos(4), pos(0), 29)); //Sacks
      area.push(new Tile(pos(7), pos(2), 29)); //Sacks
      area.push(new Tile(pos(4), pos(4), 31)); //Table
      area.push(new Tile(pos(5), pos(6), 31)); //Table
      area.push(new Tile(pos(5), pos(1), 28)); //Chest
      area.push(new Tile(pos(5), pos(0), 22)); //Storage Pot Empty
      area.push(new Tile(pos(8), pos(3), 24)); //Storage Pot Fibers
      area.push(new Tile(pos(7), pos(3), 54)); //Stall Plants
      area.push(new Tile(pos(1), pos(2), 42)); //Tapestry Sky
      area.push(new Tile(pos(7), pos(1), 42)); //Tapestry Sky
      area.push(new Tile(pos(2), pos(1), 40)); //Tapestry Clouds
      area.push(new Tile(pos(8), pos(2), 40)); //Tapestry Clouds
    }
    else if (areaID == "Market West") {
      //Walls
      this.setTilesRect(pos(0), pos(0), 10, 1, 0, area);
      this.setTilesRect(pos(0), pos(1), 1, 9, 0, area);
      this.setTilesRect(pos(1), pos(5), 2, 1, 0, area);
      this.setTilesRect(pos(1), pos(9), 3, 1, 0, area);
      this.setTilesRect(pos(3), pos(1), 3, 1, 0, area);
      this.setTilesRect(pos(4), pos(2), 1, 4, 0, area);
      this.setTilesRect(pos(9), pos(5), 1, 5, 0, area);
      this.setTilesRect(pos(7), pos(8), 2, 2, 0, area);
      area.push(new Tile(pos(1), pos(6), 0));
      area.push(new Tile(pos(9), pos(1), 0));
      area.push(new Tile(pos(6), pos(9), 0));
      //Wall Sides
      this.setTilesRect(pos(6), pos(1), 3, 1, 1, area);
      this.setTilesRect(pos(1), pos(1), 2, 1, 1, area);
      area.push(new Tile(pos(3), pos(2), 1));
      area.push(new Tile(pos(5), pos(2), 1));
      area.push(new Tile(pos(9), pos(2), 1));
      area.push(new Tile(pos(1), pos(7), 1));
      area.push(new Tile(pos(2), pos(6), 1));
      area.push(new Tile(pos(4), pos(6), 1));
      //Pillar Bases
      area.push(new Tile(pos(5), pos(6), 2));
      area.push(new Tile(pos(8), pos(6), 2));
      //Decor
      area.push(new Tile(pos(2), pos(7), 30)); //Lamp
      area.push(new Tile(pos(6), pos(8), 24)); //Storage Pot Fibers
      area.push(new Tile(pos(8), pos(7), 24)); //Storage Pot Fibers
      area.push(new Tile(pos(1), pos(8), 23)); //Storage Pot Fabric
      area.push(new Tile(pos(1), pos(4), 32)); //Table With Plant
      area.push(new Tile(pos(3), pos(3), 52)); //Stall Books
      area.push(new Tile(pos(6), pos(2), 57)); //Stall Flowers
      area.push(new Tile(pos(1), pos(1), 62)); //Counter Books
      area.push(new Tile(pos(2), pos(1), 62)); //Counter Books
      area.push(new Tile(pos(5), pos(2), 67)); //Counter Flowers
      area.push(new Tile(pos(7), pos(1), 67)); //Counter Flowers
      area.push(new Tile(pos(8), pos(1), 67)); //Counter Flowers
    }
    else if (areaID == "Main Entrance") {
      //Walls
      this.setTilesRect(pos(0), pos(0), 4, 3, 0, area);
      this.setTilesRect(pos(0), pos(3), 3, 2, 0, area);
      this.setTilesRect(pos(0), pos(5), 2, 3, 0, area);
      this.setTilesRect(pos(0), pos(8), 3, 1, 0, area);
      this.setTilesRect(pos(0), pos(9), 4, 1, 0, area);
      this.setTilesRect(pos(6), pos(0), 4, 3, 0, area);
      this.setTilesRect(pos(7), pos(3), 3, 2, 0, area);
      this.setTilesRect(pos(8), pos(5), 2, 3, 0, area);
      this.setTilesRect(pos(7), pos(8), 3, 1, 0, area);
      this.setTilesRect(pos(6), pos(9), 4, 1, 0, area);
      //Wall Sides
      area.push(new Tile(pos(3), pos(3), 1));
      area.push(new Tile(pos(2), pos(5), 1));
      area.push(new Tile(pos(6), pos(3), 1));
      area.push(new Tile(pos(7), pos(5), 1));
      //Pillar Bases
      area.push(new Tile(pos(3), pos(4), 2));
      area.push(new Tile(pos(2), pos(6), 2));
      area.push(new Tile(pos(6), pos(4), 2));
      area.push(new Tile(pos(7), pos(6), 2));
      //Decor
      area.push(new Tile(pos(3), pos(5), 30)); //Lamp
      area.push(new Tile(pos(6), pos(5), 30)); //Lamp
      area.push(new Tile(pos(3), pos(8), 30)); //Lamp
      area.push(new Tile(pos(6), pos(8), 30)); //Lamp
    }
    else if (areaID == "Highlands Entrance") {
      //Walls
      this.setTilesRect(pos(0), pos(0), 10, 1, 5, area);
      this.setTilesRect(pos(0), pos(1), 1, 9, 5, area);
      this.setTilesRect(pos(9), pos(1), 1, 9, 5, area);
      this.setTilesRect(pos(1), pos(1), 2, 1, 5, area);
      this.setTilesRect(pos(7), pos(1), 2, 1, 5, area);
      this.setTilesRect(pos(8), pos(5), 1, 5, 5, area);
      this.setTilesRect(pos(1), pos(6), 2, 1, 5, area);
      area.push(new Tile(pos(1), pos(2), 5));
      area.push(new Tile(pos(1), pos(5), 5));
      area.push(new Tile(pos(7), pos(5), 5));
      area.push(new Tile(pos(7), pos(9), 5));
      area.push(new Tile(pos(1), pos(9), 5));
      //Wall Sides
      this.setTilesRect(pos(3), pos(1), 4, 1, 6, area);
      this.setTilesRect(pos(7), pos(2), 2, 1, 6, area);
      this.setTilesRect(pos(1), pos(7), 2, 1, 6, area);
      area.push(new Tile(pos(2), pos(2), 6));
      area.push(new Tile(pos(1), pos(3), 6));
      area.push(new Tile(pos(7), pos(6), 6));
      //Decor
      area.push(new Tile(pos(8), pos(3), 18)); //Rock
      area.push(new Tile(pos(3), pos(5), 18)); //Rock
      area.push(new Tile(pos(2), pos(8), 18)); //Rock
      area.push(new Tile(pos(6), pos(2), 29)); //Sacks
      area.push(new Tile(pos(2), pos(3), 29)); //Sacks
      area.push(new Tile(pos(3), pos(7), 20)); //Pot
      area.push(new Tile(pos(5), pos(2), 24)); //Storage Pot Fibers
      area.push(new Tile(pos(6), pos(6), 24)); //Storage Pot Fibers
      area.push(new Tile(pos(7), pos(7), 24)); //Storage Pot Fibers
    }
    else if (areaID == "Highlands North") {
      //Walls
      this.setTilesRect(pos(0), pos(0), 1, 10, 5, area);
      this.setTilesRect(pos(1), pos(3), 2, 7, 5, area);
      this.setTilesRect(pos(3), pos(4), 3, 1, 5, area);
      this.setTilesRect(pos(7), pos(0), 3, 2, 5, area);
      this.setTilesRect(pos(8), pos(2), 2, 4, 5, area);
      this.setTilesRect(pos(9), pos(6), 1, 4, 5, area);
      area.push(new Tile(pos(1), pos(0), 5));
      area.push(new Tile(pos(3), pos(5), 5));
      area.push(new Tile(pos(7), pos(4), 5));
      //Invisible Walls
      area.push(new Tile(pos(5), pos(5), 99));
      area.push(new Tile(pos(7), pos(5), 99));
      //Wall Sides
      area.push(new Tile(pos(1), pos(1), 6));
      area.push(new Tile(pos(7), pos(2), 6));
      //Wall Bottoms
      this.setTilesRect(pos(4), pos(7), 2, 1, 7, area);
      area.push(new Tile(pos(3), pos(8), 7));
      area.push(new Tile(pos(7), pos(7), 7));
      area.push(new Tile(pos(8), pos(8), 7));
      //Wall Middles
      this.setTilesRect(pos(4), pos(6), 2, 1, 8, area);
      area.push(new Tile(pos(3), pos(7), 8));
      area.push(new Tile(pos(7), pos(6), 8));
      area.push(new Tile(pos(8), pos(7), 8));
      //Wall Tops
      this.setTilesRect(pos(4), pos(5), 2, 1, 9, area);
      area.push(new Tile(pos(3), pos(6), 9));
      area.push(new Tile(pos(7), pos(5), 9));
      area.push(new Tile(pos(8), pos(6), 9));
      //Decor
      area.push(new Tile(pos(2), pos(0), 18)); //Rock
      area.push(new Tile(pos(6), pos(2), 18)); //Rock
      area.push(new Tile(pos(4), pos(8), 18)); //Rock
      area.push(new Tile(pos(7), pos(9), 18)); //Rock
      area.push(new Tile(pos(6), pos(9), 18)); //Rock
    }
    else if (areaID == "Highlands West") {
      //Walls
      this.setTilesRect(pos(0), pos(0), 4, 3, 5, area);
      this.setTilesRect(pos(0), pos(2), 3, 2, 5, area);
      this.setTilesRect(pos(0), pos(4), 2, 4, 5, area);
      this.setTilesRect(pos(0), pos(8), 5, 2, 5, area);
      this.setTilesRect(pos(8), pos(0), 2, 4, 5, area);
      this.setTilesRect(pos(7), pos(1), 1, 2, 5, area);
      this.setTilesRect(pos(5), pos(9), 3, 1, 5, area);
      this.setTilesRect(pos(8), pos(8), 2, 2, 5, area);
      area.push(new Tile(pos(4), pos(2), 5));
      //Invisible Walls
      area.push(new Tile(pos(4), pos(3), 99));
      area.push(new Tile(pos(7), pos(3), 99));
      //Wall Bottoms
      this.setTilesRect(pos(3), pos(5), 2, 1, 7, area);
      this.setTilesRect(pos(8), pos(6), 2, 1, 7, area);
      area.push(new Tile(pos(2), pos(6), 7));
      area.push(new Tile(pos(7), pos(5), 7));
      //Wall Middles
      this.setTilesRect(pos(3), pos(4), 2, 1, 8, area);
      this.setTilesRect(pos(8), pos(5), 2, 1, 8, area);
      area.push(new Tile(pos(2), pos(5), 8));
      area.push(new Tile(pos(7), pos(4), 8));
      //Wall Tops
      this.setTilesRect(pos(3), pos(3), 2, 1, 9, area);
      this.setTilesRect(pos(8), pos(4), 2, 1, 9, area);
      area.push(new Tile(pos(2), pos(4), 9));
      area.push(new Tile(pos(7), pos(3), 9));
      //Decor
      area.push(new Tile(pos(6), pos(2), 18)); //Rock
      area.push(new Tile(pos(6), pos(0), 18)); //Rock
      area.push(new Tile(pos(4), pos(0), 18)); //Rock
    }
    else if (areaID == "Highlands Center") {
      //Walls
      this.setTilesRect(pos(0), pos(0), 1, 4, 5, area);
      this.setTilesRect(pos(7), pos(0), 3, 1, 5, area);
      this.setTilesRect(pos(9), pos(1), 1, 4, 5, area);
      this.setTilesRect(pos(4), pos(4), 2, 6, 5, area);
      this.setTilesRect(pos(0), pos(9), 4, 1, 5, area);
      this.setTilesRect(pos(6), pos(7), 1, 3, 5, area);
      this.setTilesRect(pos(7), pos(9), 3, 1, 5, area);
      area.push(new Tile(pos(5), pos(3), 5));
      area.push(new Tile(pos(0), pos(8), 5));
      area.push(new Tile(pos(3), pos(8), 5));
      //Invisible Walls
      area.push(new Tile(pos(9), pos(5), 99));
      //Wall Sides
      area.push(new Tile(pos(1), pos(4), 6));
      area.push(new Tile(pos(3), pos(4), 6));
      area.push(new Tile(pos(6), pos(4), 6));
      area.push(new Tile(pos(8), pos(4), 6));
      //Wall Bottoms
      this.setTilesRect(pos(1), pos(1), 2, 1, 7, area);
      this.setTilesRect(pos(3), pos(0), 3, 1, 7, area);
      this.setTilesRect(pos(7), pos(2), 2, 1, 7, area);
      area.push(new Tile(pos(6), pos(1), 7));
      area.push(new Tile(pos(0), pos(6), 7));
      area.push(new Tile(pos(9), pos(7), 7));
      //Wall Middles
      area.push(new Tile(pos(0), pos(5), 8));
      area.push(new Tile(pos(9), pos(6), 8));
      //Wall Tops
      this.setTilesRect(pos(1), pos(0), 2, 1, 9, area);
      this.setTilesRect(pos(7), pos(1), 2, 1, 9, area);
      area.push(new Tile(pos(6), pos(0), 9));
      area.push(new Tile(pos(0), pos(4), 9));
      area.push(new Tile(pos(9), pos(5), 9));
      //Decor
      area.push(new Tile(pos(3), pos(1), 20)); //Pot
      area.push(new Tile(pos(4), pos(1), 35)); //Pot Shards
    }
    else if (areaID == "Highlands East") {
      //Walls
      this.setTilesRect(pos(0), pos(0), 3, 5, 5, area);
      this.setTilesRect(pos(6), pos(0), 4, 2, 5, area);
      this.setTilesRect(pos(8), pos(2), 2, 2, 5, area);
      this.setTilesRect(pos(9), pos(4), 1, 5, 5, area);
      this.setTilesRect(pos(0), pos(9), 4, 1, 5, area);
      this.setTilesRect(pos(4), pos(8), 3, 2, 5, area);
      this.setTilesRect(pos(7), pos(9), 3, 1, 5, area);
      area.push(new Tile(pos(5), pos(2), 5));
      area.push(new Tile(pos(3), pos(3), 5));
      //Invisible Walls
      area.push(new Tile(pos(3), pos(4), 99));
      area.push(new Tile(pos(5), pos(3), 99));
      //Wall Bottoms
      this.setTilesRect(pos(0), pos(7), 3, 1, 7, area);
      this.setTilesRect(pos(6), pos(4), 2, 1, 7, area);
      area.push(new Tile(pos(3), pos(6), 7));
      area.push(new Tile(pos(5), pos(5), 7));
      area.push(new Tile(pos(8), pos(6), 7));
      area.push(new Tile(pos(3), pos(1), 7));
      //Wall Middles
      this.setTilesRect(pos(0), pos(6), 3, 1, 8, area);
      this.setTilesRect(pos(6), pos(3), 2, 1, 8, area);
      area.push(new Tile(pos(3), pos(5), 8));
      area.push(new Tile(pos(5), pos(4), 8));
      area.push(new Tile(pos(8), pos(5), 8));
      //Wall Tops
      this.setTilesRect(pos(0), pos(5), 3, 1, 9, area);
      this.setTilesRect(pos(6), pos(2), 2, 1, 9, area);
      area.push(new Tile(pos(3), pos(4), 9));
      area.push(new Tile(pos(5), pos(3), 9));
      area.push(new Tile(pos(8), pos(4), 9));
      area.push(new Tile(pos(3), pos(0), 9));
    }
    else if (areaID == "Rocky Hill West") {
      //Walls
      this.setTilesRect(pos(0), pos(0), 10, 1, 5, area);
      this.setTilesRect(pos(0), pos(1), 1, 3, 5, area);
      this.setTilesRect(pos(0), pos(4), 2, 6, 5, area);
      this.setTilesRect(pos(2), pos(8), 1, 2, 5, area);
      this.setTilesRect(pos(7), pos(1), 3, 1, 5, area);
      this.setTilesRect(pos(3), pos(3), 2, 2, 5, area);
      this.setTilesRect(pos(5), pos(5), 3, 1, 5, area);
      this.setTilesRect(pos(6), pos(6), 4, 4, 5, area);
      area.push(new Tile(pos(1), pos(1), 5));
      area.push(new Tile(pos(3), pos(9), 5));
      area.push(new Tile(pos(5), pos(4), 5));
      //Invisible Walls
      area.push(new Tile(pos(3), pos(5), 99));
      //Wall Sides
      this.setTilesRect(pos(2), pos(1), 5, 1, 6, area);
      this.setTilesRect(pos(7), pos(2), 3, 1, 6, area);
      area.push(new Tile(pos(1), pos(2), 6));
      //Wall Bottoms
      this.setTilesRect(pos(3), pos(6), 2, 1, 7, area);
      area.push(new Tile(pos(5), pos(7), 7));
      //Wall Tops
      this.setTilesRect(pos(3), pos(5), 2, 1, 9, area);
      area.push(new Tile(pos(5), pos(6), 9));
      //Decor
      area.push(new Tile(pos(4), pos(7), 18)); //Rock
      area.push(new Tile(pos(8), pos(3), 18)); //Rock
    }
    else if (areaID == "Rocky Hill North") {
      //Walls
      this.setTilesRect(pos(0), pos(0), 10, 1, 5, area);
      this.setTilesRect(pos(0), pos(1), 4, 1, 5, area);
      this.setTilesRect(pos(8), pos(1), 2, 1, 5, area);
      this.setTilesRect(pos(0), pos(6), 2, 1, 5, area);
      this.setTilesRect(pos(8), pos(6), 2, 1, 5, area);
      this.setTilesRect(pos(0), pos(7), 4, 1, 5, area);
      this.setTilesRect(pos(7), pos(7), 3, 1, 5, area);
      this.setTilesRect(pos(0), pos(8), 10, 2, 5, area);
      //Wall Sides
      this.setTilesRect(pos(0), pos(2), 4, 1, 6, area);
      this.setTilesRect(pos(4), pos(1), 4, 1, 6, area);
      this.setTilesRect(pos(8), pos(2), 2, 1, 6, area);
      //Decor
      area.push(new Tile(pos(0), pos(3), 18)); //Rock
      area.push(new Tile(pos(7), pos(2), 18)); //Rock
      area.push(new Tile(pos(2), pos(3), 29)); //Sacks
      area.push(new Tile(pos(3), pos(6), 29)); //Sacks
      area.push(new Tile(pos(4), pos(7), 20)); //Pot
      area.push(new Tile(pos(7), pos(6), 20)); //Pot
      area.push(new Tile(pos(4), pos(2), 24)); //Storage Pot Fibers
      area.push(new Tile(pos(3), pos(3), 22)); //Storage Pot Empty
    }
    else if (areaID == "Rocky Hill East") {
      //Walls
      this.setTilesRect(pos(0), pos(0), 10, 1, 5, area);
      this.setTilesRect(pos(0), pos(1), 2, 1, 5, area);
      this.setTilesRect(pos(8), pos(1), 2, 3, 5, area);
      this.setTilesRect(pos(9), pos(4), 1, 6, 5, area);
      this.setTilesRect(pos(8), pos(8), 1, 2, 5, area);
      this.setTilesRect(pos(3), pos(3), 2, 1, 5, area);
      this.setTilesRect(pos(3), pos(4), 4, 1, 5, area);
      this.setTilesRect(pos(0), pos(7), 2, 3, 5, area);
      area.push(new Tile(pos(0), pos(6), 5));
      area.push(new Tile(pos(7), pos(1), 5));
      area.push(new Tile(pos(4), pos(5), 5));
      area.push(new Tile(pos(2), pos(9), 5));
      //Wall Sides
      this.setTilesRect(pos(0), pos(2), 2, 1, 6, area);
      this.setTilesRect(pos(2), pos(1), 5, 1, 6, area);
      this.setTilesRect(pos(5), pos(5), 2, 1, 6, area);
      area.push(new Tile(pos(7), pos(2), 6));
      area.push(new Tile(pos(8), pos(4), 6));
      area.push(new Tile(pos(3), pos(5), 6));
      area.push(new Tile(pos(4), pos(6), 6));
      //Decor
      area.push(new Tile(pos(6), pos(2), 18)); //Rock
      area.push(new Tile(pos(2), pos(4), 18)); //Rock
      area.push(new Tile(pos(4), pos(7), 18)); //Rock
    }
    else if (areaID == "Rocky Hill Center") {
      //Walls
      this.setTilesRect(pos(0), pos(0), 3, 2, 5, area);
      this.setTilesRect(pos(0), pos(2), 1, 8, 5, area);
      this.setTilesRect(pos(9), pos(0), 1, 10, 5, area);
      this.setTilesRect(pos(4), pos(2), 2, 1, 5, area);
      this.setTilesRect(pos(2), pos(4), 1, 6, 5, area);
      this.setTilesRect(pos(8), pos(6), 1, 4, 5, area);
      this.setTilesRect(pos(3), pos(9), 5, 1, 5, area);
      area.push(new Tile(pos(5), pos(3), 5));
      area.push(new Tile(pos(3), pos(8), 5));
      area.push(new Tile(pos(7), pos(8), 5));
      area.push(new Tile(pos(8), pos(0), 5));
      //Invisible Walls
      area.push(new Tile(pos(5), pos(4), 99));
      //Wall Sides
      this.setTilesRect(pos(1), pos(2), 2, 1, 6, area);
      this.setTilesRect(pos(7), pos(3), 2, 1, 6, area);
      area.push(new Tile(pos(4), pos(3), 6));
      area.push(new Tile(pos(4), pos(5), 6));
      area.push(new Tile(pos(8), pos(1), 6));
      //Wall Bottoms
      area.push(new Tile(pos(5), pos(5), 7));
      //Wall Tops
      area.push(new Tile(pos(5), pos(4), 9));
      //Decor
      area.push(new Tile(pos(3), pos(2), 18)); //Rock
    }
    else if (areaID == "Rocky Hill South") {
      //Walls
      this.setTilesRect(pos(0), pos(0), 1, 10, 5, area);
      this.setTilesRect(pos(1), pos(4), 1, 6, 5, area);
      this.setTilesRect(pos(2), pos(8), 1, 2, 5, area);
      this.setTilesRect(pos(2), pos(0), 8, 1, 5, area);
      this.setTilesRect(pos(3), pos(1), 4, 1, 5, area);
      this.setTilesRect(pos(3), pos(2), 2, 1, 5, area);
      //Invisible Walls
      area.push(new Tile(pos(4), pos(6), 99));
      area.push(new Tile(pos(5), pos(7), 99));
      area.push(new Tile(pos(6), pos(8), 99));
      //Wall Sides
      area.push(new Tile(pos(2), pos(1), 6));
      area.push(new Tile(pos(3), pos(3), 6));
      //Wall Bottoms
      this.setTilesRect(pos(5), pos(4), 2, 1, 7, area);
      this.setTilesRect(pos(7), pos(3), 3, 1, 7, area);
      area.push(new Tile(pos(4), pos(5), 7));
      //Wall Middles
      this.setTilesRect(pos(5), pos(3), 2, 1, 8, area);
      this.setTilesRect(pos(7), pos(2), 3, 1, 8, area);
      area.push(new Tile(pos(4), pos(4), 8));
      //Wall Tops
      this.setTilesRect(pos(5), pos(2), 2, 1, 9, area);
      this.setTilesRect(pos(7), pos(1), 3, 1, 9, area);
      area.push(new Tile(pos(4), pos(3), 9));
      //Decor
      area.push(new Tile(pos(5), pos(5), 18)); //Rock
      area.push(new Tile(pos(6), pos(6), 18)); //Rock
      area.push(new Tile(pos(7), pos(4), 18)); //Rock
    }
    else if (areaID == "Rocky Hill Cliff") {
      //Walls
      this.setTilesRect(pos(0), pos(0), 3, 2, 5, area);
      this.setTilesRect(pos(0), pos(2), 2, 1, 5, area);
      this.setTilesRect(pos(6), pos(5), 2, 1, 5, area);
      this.setTilesRect(pos(7), pos(6), 2, 1, 5, area);
      //Invisible Walls
      this.setTilesRect(pos(6), pos(1), 1, 2, 99, area);
      area.push(new Tile(pos(5), pos(3), 6));
      area.push(new Tile(pos(4), pos(5), 6));
      this.setTilesRect(pos(2), pos(6), 2, 1, 99, area);
      this.setTilesRect(pos(0), pos(7), 2, 1, 99, area);
      //Wall Sides
      this.setTilesRect(pos(0), pos(3), 2, 1, 6, area);
      this.setTilesRect(pos(7), pos(7), 2, 1, 6, area);
      area.push(new Tile(pos(2), pos(2), 6));
      area.push(new Tile(pos(6), pos(6), 6));
      //Wall Bottoms
      this.setTilesRect(pos(0), pos(8), 2, 1, 7, area);
      this.setTilesRect(pos(2), pos(7), 2, 1, 7, area);
      area.push(new Tile(pos(4), pos(6), 7));
      area.push(new Tile(pos(5), pos(4), 7));
      //Wall Tops
      this.setTilesRect(pos(0), pos(7), 2, 1, 9, area);
      this.setTilesRect(pos(2), pos(6), 2, 1, 9, area);
      area.push(new Tile(pos(4), pos(5), 9));
      area.push(new Tile(pos(5), pos(3), 9));
      //Decor
      area.push(new Tile(pos(4), pos(7), 18)); //Rock
      area.push(new Tile(pos(5), pos(5), 18)); //Rock
    }
    else if (areaID == "Hideout Entrance") {
      //Walls
      this.setTilesRect(pos(0), pos(0), 4, 1, 5, area);
      this.setTilesRect(pos(5), pos(0), 5, 1, 5, area);
      this.setTilesRect(pos(6), pos(1), 2, 1, 5, area);
      this.setTilesRect(pos(8), pos(2), 2, 1, 5, area);
      this.setTilesRect(pos(0), pos(2), 2, 1, 5, area);
      area.push(new Tile(pos(2), pos(1), 5));
      area.push(new Tile(pos(9), pos(1), 5));
      //Wall Sides
      this.setTilesRect(pos(0), pos(1), 2, 1, 6, area);
      this.setTilesRect(pos(8), pos(3), 2, 1, 6, area);
      area.push(new Tile(pos(1), pos(3), 6));
      area.push(new Tile(pos(8), pos(1), 6));
      //Wall Bottoms
      this.setTilesRect(pos(6), pos(3), 2, 1, 7, area);
      this.setTilesRect(pos(2), pos(7), 2, 1, 7, area);
      this.setTilesRect(pos(4), pos(6), 3, 1, 7, area);
      this.setTilesRect(pos(8), pos(8), 2, 1, 7, area);
      area.push(new Tile(pos(2), pos(3), 7));
      area.push(new Tile(pos(3), pos(2), 7));
      area.push(new Tile(pos(5), pos(2), 7));
      area.push(new Tile(pos(1), pos(6), 7));
      area.push(new Tile(pos(7), pos(7), 7));
      area.push(new Tile(pos(0), pos(5), 7));
      //Wall Tops
      this.setTilesRect(pos(6), pos(2), 2, 1, 9, area);
      this.setTilesRect(pos(2), pos(6), 2, 1, 9, area);
      this.setTilesRect(pos(4), pos(5), 3, 1, 9, area);
      this.setTilesRect(pos(8), pos(7), 2, 1, 9, area);
      area.push(new Tile(pos(2), pos(2), 9));
      area.push(new Tile(pos(3), pos(1), 9));
      area.push(new Tile(pos(4), pos(0), 9));
      area.push(new Tile(pos(5), pos(1), 9));
      area.push(new Tile(pos(1), pos(5), 9));
      area.push(new Tile(pos(7), pos(6), 9));
      area.push(new Tile(pos(0), pos(3), 9));
      //Decor
      area.push(new Tile(pos(3), pos(3), 18)); //Rock
      area.push(new Tile(pos(4), pos(7), 18)); //Rock
      area.push(new Tile(pos(6), pos(7), 18)); //Rock
      area.push(new Tile(pos(4), pos(1), 17)); //Cave Entrance
    }
    else if (areaID == "Main Room") {
      //Walls
      this.setTilesRect(pos(0), pos(0), 4, 2, 5, area);
      this.setTilesRect(pos(0), pos(2), 3, 3, 5, area);
      this.setTilesRect(pos(7), pos(0), 3, 2, 5, area);
      this.setTilesRect(pos(8), pos(2), 2, 2, 5, area);
      this.setTilesRect(pos(0), pos(5), 2, 5, 5, area);
      this.setTilesRect(pos(2), pos(8), 1, 2, 5, area);
      this.setTilesRect(pos(8), pos(6), 2, 1, 5, area);
      this.setTilesRect(pos(7), pos(7), 3, 3, 5, area);
      this.setTilesRect(pos(6), pos(8), 1, 2, 5, area);
      area.push(new Tile(pos(4), pos(0), 5));
      area.push(new Tile(pos(6), pos(0), 5));
      area.push(new Tile(pos(3), pos(9), 5));
      area.push(new Tile(pos(5), pos(9), 5));
      //Wall Sides
      this.setTilesRect(pos(8), pos(4), 2, 1, 6, area);
      area.push(new Tile(pos(4), pos(1), 6));
      area.push(new Tile(pos(6), pos(1), 6));
      area.push(new Tile(pos(7), pos(2), 6));
      area.push(new Tile(pos(3), pos(2), 6));
      area.push(new Tile(pos(2), pos(5), 6));
      //Decor
      area.push(new Tile(pos(7), pos(3), 30)); //Lamp
      area.push(new Tile(pos(2), pos(6), 30)); //Lamp
      area.push(new Tile(pos(3), pos(3), 18)); //Rock
      area.push(new Tile(pos(7), pos(4), 18)); //Rock
      area.push(new Tile(pos(5), pos(5), 31)); //Table
      area.push(new Tile(pos(6), pos(7), 29)); //Sacks
      area.push(new Tile(pos(3), pos(2), 42)); //Tapestry Sky
      area.push(new Tile(pos(6), pos(1), 43)); //Tapestry Map
    }
    else if (areaID == "Sleeping Room") {
      //Walls
      this.setTilesRect(pos(0), pos(0), 10, 2, 5, area);
      this.setTilesRect(pos(0), pos(2), 3, 2, 5, area);
      this.setTilesRect(pos(9), pos(2), 1, 5, 5, area);
      this.setTilesRect(pos(0), pos(6), 5, 1, 5, area);
      this.setTilesRect(pos(0), pos(7), 10, 3, 5, area);
      area.push(new Tile(pos(3), pos(2), 5));
      area.push(new Tile(pos(8), pos(2), 5));
      area.push(new Tile(pos(8), pos(6), 5));
      //Wall Sides
      this.setTilesRect(pos(0), pos(4), 3, 1, 6, area);
      this.setTilesRect(pos(4), pos(2), 4, 1, 6, area);
      area.push(new Tile(pos(3), pos(3), 6));
      area.push(new Tile(pos(8), pos(3), 6));
      //Decor
      area.push(new Tile(pos(3), pos(4), 30)); //Lamp
      area.push(new Tile(pos(7), pos(3), 30)); //Lamp
    }
    else if (areaID == "Storage Room") {
      //Walls
      this.setTilesRect(pos(0), pos(0), 4, 2, 5, area);
      this.setTilesRect(pos(0), pos(2), 2, 8, 5, area);
      this.setTilesRect(pos(2), pos(7), 2, 3, 5, area);
      this.setTilesRect(pos(4), pos(8), 1, 2, 5, area);
      this.setTilesRect(pos(7), pos(0), 3, 4, 5, area);
      this.setTilesRect(pos(8), pos(4), 2, 6, 5, area);
      this.setTilesRect(pos(7), pos(8), 1, 2, 5, area);
      area.push(new Tile(pos(4), pos(0), 5));
      area.push(new Tile(pos(6), pos(0), 5));
      area.push(new Tile(pos(2), pos(6), 5));
      area.push(new Tile(pos(6), pos(9), 5));
      //Wall Sides
      this.setTilesRect(pos(2), pos(2), 2, 1, 6, area);
      area.push(new Tile(pos(4), pos(1), 6));
      area.push(new Tile(pos(6), pos(1), 6));
      area.push(new Tile(pos(7), pos(4), 6));
      //Decor
      area.push(new Tile(pos(4), pos(2), 30)); //Lamp
      area.push(new Tile(pos(6), pos(2), 30)); //Lamp
      area.push(new Tile(pos(4), pos(5), 18)); //Rock
      area.push(new Tile(pos(5), pos(6), 18)); //Rock
      area.push(new Tile(pos(2), pos(3), 23)); //Storage Pot Fabric
      area.push(new Tile(pos(2), pos(5), 26)); //Storage Pot Treestuff
      area.push(new Tile(pos(6), pos(4), 24)); //Storage Pot Fibers
      area.push(new Tile(pos(7), pos(6), 24)); //Storage Pot Fibers
      area.push(new Tile(pos(7), pos(5), 28)); //Chest
      area.push(new Tile(pos(3), pos(3), 29)); //Sacks
      area.push(new Tile(pos(6), pos(8), 29)); //Sacks
    }
    else if (areaID == "Meeting Room") {
      //Walls
      this.setTilesRect(pos(0), pos(0), 10, 1, 5, area);
      this.setTilesRect(pos(0), pos(1), 3, 9, 5, area);
      this.setTilesRect(pos(8), pos(1), 2, 9, 5, area);
      this.setTilesRect(pos(3), pos(7), 1, 3, 5, area);
      this.setTilesRect(pos(4), pos(8), 1, 2, 5, area);
      this.setTilesRect(pos(7), pos(7), 1, 3, 5, area);
      this.setTilesRect(pos(6), pos(8), 1, 2, 5, area);
      area.push(new Tile(pos(3), pos(1), 5));
      area.push(new Tile(pos(7), pos(1), 5));
      //Wall Sides
      this.setTilesRect(pos(4), pos(1), 3, 1, 6, area);
      area.push(new Tile(pos(3), pos(2), 6));
      area.push(new Tile(pos(7), pos(2), 6));
      //Decor
      area.push(new Tile(pos(3), pos(3), 30)); //Lamp
      area.push(new Tile(pos(7), pos(3), 30)); //Lamp
      area.push(new Tile(pos(4), pos(7), 18)); //Rock
      area.push(new Tile(pos(7), pos(6), 18)); //Rock
      area.push(new Tile(pos(5), pos(4), 31)); //Table
      area.push(new Tile(pos(3), pos(2), 42)); //Tapestry Sky
      area.push(new Tile(pos(7), pos(2), 42)); //Tapestry Sky
      area.push(new Tile(pos(5), pos(1), 43)); //Tapestry Map
    }
    else if (areaID == "Main Room Destroyed") {
      //Walls
      this.setTilesRect(pos(0), pos(0), 4, 2, 5, area);
      this.setTilesRect(pos(0), pos(2), 3, 3, 5, area);
      this.setTilesRect(pos(7), pos(0), 3, 2, 5, area);
      this.setTilesRect(pos(8), pos(2), 2, 2, 5, area);
      this.setTilesRect(pos(0), pos(5), 2, 5, 5, area);
      this.setTilesRect(pos(2), pos(8), 1, 2, 5, area);
      this.setTilesRect(pos(8), pos(6), 2, 1, 5, area);
      this.setTilesRect(pos(7), pos(7), 3, 3, 5, area);
      this.setTilesRect(pos(6), pos(8), 1, 2, 5, area);
      area.push(new Tile(pos(4), pos(0), 5));
      area.push(new Tile(pos(6), pos(0), 5));
      area.push(new Tile(pos(3), pos(9), 5));
      area.push(new Tile(pos(5), pos(9), 5));
      //Wall Sides
      this.setTilesRect(pos(8), pos(4), 2, 1, 6, area);
      area.push(new Tile(pos(4), pos(1), 6));
      area.push(new Tile(pos(6), pos(1), 6));
      area.push(new Tile(pos(7), pos(2), 6));
      area.push(new Tile(pos(3), pos(2), 6));
      area.push(new Tile(pos(2), pos(5), 6));
      //Decor
      area.push(new Tile(pos(7), pos(3), 37)); //Lamp Broken
      area.push(new Tile(pos(2), pos(6), 37)); //Lamp Broken
      area.push(new Tile(pos(3), pos(3), 18)); //Rock
      area.push(new Tile(pos(7), pos(4), 18)); //Rock
      area.push(new Tile(pos(5), pos(5), 36)); //Table Broken
      area.push(new Tile(pos(6), pos(7), 29)); //Sacks
      area.push(new Tile(pos(3), pos(2), 38)); //Tapestry Sky Torn
      area.push(new Tile(pos(6), pos(1), 39)); //Tapestry Map Torn
    }
    else if (areaID == "Sleeping Room Destroyed") {
      //Walls
      this.setTilesRect(pos(0), pos(0), 10, 2, 5, area);
      this.setTilesRect(pos(0), pos(2), 3, 2, 5, area);
      this.setTilesRect(pos(9), pos(2), 1, 5, 5, area);
      this.setTilesRect(pos(0), pos(6), 5, 1, 5, area);
      this.setTilesRect(pos(0), pos(7), 10, 3, 5, area);
      area.push(new Tile(pos(3), pos(2), 5));
      area.push(new Tile(pos(8), pos(2), 5));
      area.push(new Tile(pos(8), pos(6), 5));
      //Wall Sides
      this.setTilesRect(pos(0), pos(4), 3, 1, 6, area);
      this.setTilesRect(pos(4), pos(2), 4, 1, 6, area);
      area.push(new Tile(pos(3), pos(3), 6));
      area.push(new Tile(pos(8), pos(3), 6));
      //Decor
      area.push(new Tile(pos(3), pos(4), 30)); //Lamp
      area.push(new Tile(pos(7), pos(3), 30)); //Lamp
    }
    else if (areaID == "Storage Room Destroyed") {
      //Walls
      this.setTilesRect(pos(0), pos(0), 4, 2, 5, area);
      this.setTilesRect(pos(0), pos(2), 2, 8, 5, area);
      this.setTilesRect(pos(2), pos(7), 2, 3, 5, area);
      this.setTilesRect(pos(4), pos(8), 1, 2, 5, area);
      this.setTilesRect(pos(7), pos(0), 3, 4, 5, area);
      this.setTilesRect(pos(8), pos(4), 2, 6, 5, area);
      this.setTilesRect(pos(7), pos(8), 1, 2, 5, area);
      area.push(new Tile(pos(4), pos(0), 5));
      area.push(new Tile(pos(6), pos(0), 5));
      area.push(new Tile(pos(2), pos(6), 5));
      area.push(new Tile(pos(6), pos(9), 5));
      //Wall Sides
      this.setTilesRect(pos(2), pos(2), 2, 1, 6, area);
      area.push(new Tile(pos(4), pos(1), 6));
      area.push(new Tile(pos(6), pos(1), 6));
      area.push(new Tile(pos(7), pos(4), 6));
      //Decor
      area.push(new Tile(pos(4), pos(2), 37)); //Lamp Broken
      area.push(new Tile(pos(6), pos(2), 37)); //Lamp Broken
      area.push(new Tile(pos(4), pos(5), 18)); //Rock
      area.push(new Tile(pos(5), pos(6), 18)); //Rock
      area.push(new Tile(pos(2), pos(3), 23)); //Storage Pot Fabric
      area.push(new Tile(pos(2), pos(5), 35)); //Pot Shards
      area.push(new Tile(pos(6), pos(4), 35)); //Pot Shards
      area.push(new Tile(pos(7), pos(6), 35)); //Pot Shards
      area.push(new Tile(pos(7), pos(5), 28)); //Chest
      area.push(new Tile(pos(3), pos(3), 29)); //Sacks
      area.push(new Tile(pos(6), pos(8), 29)); //Sacks
    }
    else if (areaID == "Meeting Room Destroyed") {
      //Walls
      this.setTilesRect(pos(0), pos(0), 10, 1, 5, area);
      this.setTilesRect(pos(0), pos(1), 3, 9, 5, area);
      this.setTilesRect(pos(8), pos(1), 2, 9, 5, area);
      this.setTilesRect(pos(3), pos(7), 1, 3, 5, area);
      this.setTilesRect(pos(4), pos(8), 1, 2, 5, area);
      this.setTilesRect(pos(7), pos(7), 1, 3, 5, area);
      this.setTilesRect(pos(6), pos(8), 1, 2, 5, area);
      area.push(new Tile(pos(3), pos(1), 5));
      area.push(new Tile(pos(7), pos(1), 5));
      //Wall Sides
      this.setTilesRect(pos(4), pos(1), 3, 1, 6, area);
      area.push(new Tile(pos(3), pos(2), 6));
      area.push(new Tile(pos(7), pos(2), 6));
      //Decor
      area.push(new Tile(pos(3), pos(3), 37)); //Lamp Broken
      area.push(new Tile(pos(7), pos(3), 37)); //Lamp Broken
      area.push(new Tile(pos(4), pos(7), 18)); //Rock
      area.push(new Tile(pos(7), pos(6), 18)); //Rock
      area.push(new Tile(pos(5), pos(4), 36)); //Table Broken
      area.push(new Tile(pos(3), pos(2), 38)); //Tapestry Sky Torn
      area.push(new Tile(pos(7), pos(2), 38)); //Tapestry Sky Torn
      area.push(new Tile(pos(5), pos(1), 39)); //Tapestry Map Torn
    }
  }


  /*
  This function sets up the ceiling layer for each area, which consists of tiles that do not collide with the player and that the player moves underneath.
  Each branch corresponds with a different area. Areas without a ceiling layer don't requie a branch.
  */
  setupCeiling(areaID, area) {
    this.setupMode = "tiles";
    area.splice(0);
    if (areaID == "Inner Webs South") {
      //Pillars
      area.push(new Tile(pos(1), pos(1), 3));
      area.push(new Tile(pos(1), pos(0), 4));
      area.push(new Tile(pos(5), pos(1), 3));
      area.push(new Tile(pos(5), pos(0), 4));
      area.push(new Tile(pos(2), pos(6), 3));
      area.push(new Tile(pos(2), pos(5), 4));
      area.push(new Tile(pos(4), pos(6), 3));
      area.push(new Tile(pos(4), pos(5), 4));
      //Signs
      area.push(new Tile(pos(6), pos(6), 68));
    }
    else if (areaID == "Inner Webs West") {
      //Signs
      area.push(new Tile(pos(2), pos(7), 68));
    }
    else if (areaID == "Inner Webs Checkpoint") {
      //Pillars
      area.push(new Tile(pos(3), pos(1), 4));
      area.push(new Tile(pos(6), pos(1), 4));
      area.push(new Tile(pos(3), pos(4), 4));
      area.push(new Tile(pos(6), pos(4), 4));
      //Signs
      area.push(new Tile(pos(2), pos(2), 68));
    }
    else if (areaID == "Inner Webs East") {
      //Pillars
      area.push(new Tile(pos(3), pos(0), 4));
      area.push(new Tile(pos(6), pos(0), 4));
      area.push(new Tile(pos(4), pos(4), 4));
      area.push(new Tile(pos(8), pos(4), 4));
      //Signs
      area.push(new Tile(pos(8), pos(5), 68));
    }
    else if (areaID == "Inner Webs Center") {
      //Pillars
      area.push(new Tile(pos(1), pos(1), 3));
      area.push(new Tile(pos(1), pos(0), 4));
      area.push(new Tile(pos(5), pos(1), 3));
      area.push(new Tile(pos(5), pos(0), 4));
      area.push(new Tile(pos(1), pos(6), 3));
      area.push(new Tile(pos(1), pos(5), 4));
      area.push(new Tile(pos(5), pos(6), 3));
      area.push(new Tile(pos(5), pos(5), 4));
      //Signs
      area.push(new Tile(pos(1), pos(2), 68));
      area.push(new Tile(pos(6), pos(1), 69));
    }
    else if (areaID == "Inner Webs North") {
      //Pillars
      area.push(new Tile(pos(5), pos(1), 4));
      area.push(new Tile(pos(7), pos(1), 4));
    }
    else if (areaID == "Outer Webs West") {
      //Pillars
      area.push(new Tile(pos(0), pos(5), 3));
      area.push(new Tile(pos(0), pos(4), 4));
      area.push(new Tile(pos(3), pos(5), 3));
      area.push(new Tile(pos(3), pos(4), 4));
      area.push(new Tile(pos(6), pos(5), 3));
      area.push(new Tile(pos(6), pos(4), 4));
      area.push(new Tile(pos(9), pos(5), 3));
      area.push(new Tile(pos(9), pos(4), 4));
    }
    else if (areaID == "Outer Webs Center") {
      //Pillars
      area.push(new Tile(pos(2), pos(5), 3));
      area.push(new Tile(pos(2), pos(4), 4));
      area.push(new Tile(pos(5), pos(5), 3));
      area.push(new Tile(pos(5), pos(4), 4));
      area.push(new Tile(pos(8), pos(5), 3));
      area.push(new Tile(pos(8), pos(4), 4));
    }
    else if (areaID == "Outer Webs East") {
      //Pillars
      area.push(new Tile(pos(1), pos(5), 3));
      area.push(new Tile(pos(1), pos(4), 4));
      area.push(new Tile(pos(4), pos(5), 3));
      area.push(new Tile(pos(4), pos(4), 4));
      area.push(new Tile(pos(4), pos(8), 3));
      area.push(new Tile(pos(4), pos(7), 4));
    }
    else if (areaID == "Outer Webs South") {
      //Pillars
      area.push(new Tile(pos(4), pos(1), 3));
      area.push(new Tile(pos(4), pos(0), 4));
      area.push(new Tile(pos(4), pos(4), 3));
      area.push(new Tile(pos(4), pos(3), 4));
      area.push(new Tile(pos(4), pos(7), 3));
      area.push(new Tile(pos(4), pos(6), 4));
      area.push(new Tile(pos(4), pos(9), 4));
    }
    else if (areaID == "Stairwell Top") {
      //Signs
      area.push(new Tile(pos(2), pos(3), 68));
    }
    else if (areaID == "Stairwell Bottom") {
      //Signs
      area.push(new Tile(pos(7), pos(4), 68));
    }
    else if (areaID == "Market Entrance") {
      //Pillars
      area.push(new Tile(pos(3), pos(1), 3));
      area.push(new Tile(pos(3), pos(0), 4));
      area.push(new Tile(pos(6), pos(1), 3));
      area.push(new Tile(pos(6), pos(0), 4));
      //Decor
      area.push(new Tile(pos(3), pos(1), 41)); //Tapestry Roses
      area.push(new Tile(pos(6), pos(1), 41)); //Tapestry Roses
    }
    else if (areaID == "Market North") {
      //Pillars
      area.push(new Tile(pos(3), pos(2), 4));
      area.push(new Tile(pos(6), pos(2), 4));
      area.push(new Tile(pos(3), pos(6), 4));
      area.push(new Tile(pos(6), pos(6), 4));
      //Decor
      area.push(new Tile(pos(1), pos(3), 68)); //Sign
      area.push(new Tile(pos(8), pos(3), 68)); //Sign
    }
    else if (areaID == "Market East") {
      //Pillars
      area.push(new Tile(pos(5), pos(5), 4));
      area.push(new Tile(pos(7), pos(5), 4));
    }
    else if (areaID == "Market Edge North") {
      //Pillars
      area.push(new Tile(pos(3), pos(4), 3));
      area.push(new Tile(pos(3), pos(3), 4));
      area.push(new Tile(pos(5), pos(6), 3));
      area.push(new Tile(pos(5), pos(5), 4));
      //Decor
      area.push(new Tile(pos(3), pos(4), 44)); //Tapestry Night
    }
    else if (areaID == "Market Edge East") {
      //Pillars
      area.push(new Tile(pos(1), pos(1), 4));
      area.push(new Tile(pos(3), pos(3), 4));
      area.push(new Tile(pos(6), pos(5), 4));
      area.push(new Tile(pos(8), pos(5), 4));
    }
    else if (areaID == "Market Center") {
      //Pillars
      area.push(new Tile(pos(3), pos(2), 3));
      area.push(new Tile(pos(3), pos(1), 4));
      area.push(new Tile(pos(6), pos(2), 3));
      area.push(new Tile(pos(6), pos(1), 4));
      area.push(new Tile(pos(3), pos(6), 3));
      area.push(new Tile(pos(3), pos(5), 4));
      area.push(new Tile(pos(6), pos(6), 3));
      area.push(new Tile(pos(6), pos(5), 4));
      //Decor
      area.push(new Tile(pos(3), pos(2), 47)); //Banner Hive
      area.push(new Tile(pos(6), pos(6), 47)); //Banner Hive
      area.push(new Tile(pos(6), pos(2), 49)); //Banner Diagonal
      area.push(new Tile(pos(3), pos(6), 49)); //Banner Diagonal
    }
    else if (areaID == "Market West") {
      //Pillars
      area.push(new Tile(pos(5), pos(5), 3));
      area.push(new Tile(pos(5), pos(4), 4));
      area.push(new Tile(pos(8), pos(5), 3));
      area.push(new Tile(pos(8), pos(4), 4));
      //Decor
      area.push(new Tile(pos(5), pos(5), 41)); //Tapestry Roses
      area.push(new Tile(pos(8), pos(5), 41)); //Tapestry Roses
    }
    else if (areaID == "Main Entrance") {
      //Pillars
      area.push(new Tile(pos(3), pos(3), 3));
      area.push(new Tile(pos(3), pos(2), 4));
      area.push(new Tile(pos(6), pos(3), 3));
      area.push(new Tile(pos(6), pos(2), 4));
      area.push(new Tile(pos(2), pos(5), 4));
      area.push(new Tile(pos(7), pos(5), 4));
      //Decor
      area.push(new Tile(pos(3), pos(3), 45)); //Banner HiveWing Red
      area.push(new Tile(pos(6), pos(3), 46)); //Banner HiveWing Yellow
    }
    else if (areaID == "Highlands West") {
      //Grass
      if (doTallGrass) {
        this.setTilesRect(pos(5), pos(7), 2, 1, 81, area);
        this.setTilesRect(pos(5), pos(8), 3, 1, 81, area);
      }
    }
    else if (areaID == "Highlands Center") {
      //Grass
      if (doTallGrass) {
        this.setTilesRect(pos(1), pos(5), 3, 1, 81, area);
        this.setTilesRect(pos(2), pos(6), 2, 1, 81, area);
        this.setTilesRect(pos(2), pos(7), 2, 1, 81, area);
        this.setTilesRect(pos(1), pos(8), 2, 1, 81, area);
        this.setTilesRect(pos(6), pos(6), 3, 1, 81, area);
        area.push(new Tile(pos(7), pos(7), 81));
        area.push(new Tile(pos(8), pos(7), 80));
        area.push(new Tile(pos(6), pos(5), 81));
        area.push(new Tile(pos(8), pos(5), 81));
        area.push(new Tile(pos(7), pos(8), 81));
        area.push(new Tile(pos(1), pos(6), 80));
        area.push(new Tile(pos(8), pos(7), 80));
        area.push(new Tile(pos(1), pos(4), 84));
        area.push(new Tile(pos(3), pos(4), 84));
        area.push(new Tile(pos(6), pos(4), 84));
        area.push(new Tile(pos(8), pos(4), 84));
      }
    }
    else if (areaID == "Highlands East") {
      //Grass
      if (doTallGrass) {
        this.setTilesRect(pos(6), pos(5), 2, 1, 81, area);
        this.setTilesRect(pos(6), pos(6), 2, 1, 81, area);
        this.setTilesRect(pos(6), pos(7), 3, 1, 81, area);
        this.setTilesRect(pos(7), pos(8), 2, 1, 81, area);
        this.setTilesRect(pos(6), pos(4), 2, 1, 84, area);
        area.push(new Tile(pos(5), pos(6), 80));
        area.push(new Tile(pos(8), pos(6), 84));
        area.push(new Tile(pos(5), pos(5), 84));
      }
    }
    else if (areaID == "Rocky Hill West") {
      //Grass
      if (doTallGrass) {
        this.setTilesRect(pos(5), pos(2), 2, 1, 81, area);
        this.setTilesRect(pos(5), pos(3), 3, 1, 81, area);
        this.setTilesRect(pos(6), pos(4), 2, 1, 81, area);
        this.setTilesRect(pos(5), pos(1), 2, 1, 84, area);
        area.push(new Tile(pos(7), pos(2), 84));
      }
    }
    else if (areaID == "Rocky Hill East") {
      //Grass
      if (doTallGrass) {
        this.setTilesRect(pos(1), pos(6), 3, 1, 81, area);
        this.setTilesRect(pos(7), pos(5), 2, 1, 81, area);
        this.setTilesRect(pos(5), pos(6), 4, 1, 81, area);
        this.setTilesRect(pos(2), pos(7), 2, 1, 80, area);
        this.setTilesRect(pos(5), pos(7), 4, 1, 80, area);
        this.setTilesRect(pos(5), pos(5), 2, 1, 84, area);
        area.push(new Tile(pos(2), pos(5), 81));
        area.push(new Tile(pos(7), pos(4), 81));
        area.push(new Tile(pos(8), pos(4), 84));
        area.push(new Tile(pos(3), pos(5), 84));
      }
    }
    else if (areaID == "Rocky Hill Center") {
      //Grass
      if (doTallGrass) {
        this.setTilesRect(pos(7), pos(3), 2, 1, 84, area);
        this.setTilesRect(pos(6), pos(4), 3, 1, 81, area);
        this.setTilesRect(pos(4), pos(5), 2, 1, 84, area);
        this.setTilesRect(pos(6), pos(5), 3, 1, 81, area);
        this.setTilesRect(pos(4), pos(6), 3, 1, 81, area);
        area.push(new Tile(pos(7), pos(6), 80));
        this.setTilesRect(pos(3), pos(7), 4, 1, 81, area);
        this.setTilesRect(pos(4), pos(8), 3, 1, 81, area);
      }
    }
    else if (areaID == "Rocky Hill South") {
      //Grass
      if (doTallGrass) {
        this.setTilesRect(pos(8), pos(5), 2, 2, 81, area);
        this.setTilesRect(pos(7), pos(7), 3, 1, 81, area);
        this.setTilesRect(pos(6), pos(8), 4, 2, 81, area);
      }
    }
    else if (areaID == "Rocky Hill Cliff") {
      //Grass
      if (doTallGrass) {
        this.setTilesRect(pos(6), pos(0), 4, 3, 81, area);
        area.push(new Tile(pos(6), pos(3), 80));
        this.setTilesRect(pos(7), pos(3), 3, 1, 81, area);
        this.setTilesRect(pos(7), pos(4), 2, 1, 80, area);
        area.push(new Tile(pos(9), pos(4), 81));
        area.push(new Tile(pos(9), pos(5), 80));
        this.setTilesRect(pos(6), pos(8), 2, 1, 81, area);
        this.setTilesRect(pos(3), pos(9), 7, 1, 81, area);
      }
    }
    else if (areaID == "Hideout Entrance") {
      //Grass
      if (doTallGrass) {
        this.setTilesRect(pos(0), pos(7), 2, 1, 81, area);
        area.push(new Tile(pos(2), pos(7), 84));
        this.setTilesRect(pos(0), pos(8), 5, 1, 81, area);
        this.setTilesRect(pos(0), pos(9), 7, 1, 81, area);
      }
    }
  }


  /*
  This function sets what encounter tiles appear where. Use it when determining encounter tile layouts for areas that have them.
  */
  setupEncounters(areaID, area) {
    this.setupMode = "tiles";
    area.splice(0);
    //Test Area 2
    if (areaID == "Test Area 2") { 
      this.setTilesRect(pos(6), pos(1), 3, 4, 92, area);
    }
    else if (areaID == "Highlands West") {
      //Grass
      this.setTilesRect(pos(5), pos(7), 2, 1, 82, area);
      this.setTilesRect(pos(5), pos(8), 2, 1, 83, area);
      area.push(new Tile(pos(7), pos(8), 82));
    }
    else if (areaID == "Highlands Center") {
      //Grass
      area.push(new Tile(pos(1), pos(5), 83));
      area.push(new Tile(pos(2), pos(5), 82));
      area.push(new Tile(pos(3), pos(5), 83));
      area.push(new Tile(pos(6), pos(5), 83));
      area.push(new Tile(pos(8), pos(5), 83));
      this.setTilesRect(pos(1), pos(6), 3, 1, 83, area);
      area.push(new Tile(pos(6), pos(6), 83));
      area.push(new Tile(pos(7), pos(6), 82));
      area.push(new Tile(pos(8), pos(6), 83));
      this.setTilesRect(pos(2), pos(7), 2, 1, 83, area);
      this.setTilesRect(pos(7), pos(7), 2, 1, 83, area);
      area.push(new Tile(pos(1), pos(8), 82));
      area.push(new Tile(pos(2), pos(8), 83));
      area.push(new Tile(pos(7), pos(8), 83));
    }
    else if (areaID == "Highlands East") {
      //Grass
      this.setTilesRect(pos(6), pos(5), 2, 1, 83, area);
      this.setTilesRect(pos(5), pos(6), 3, 1, 83, area);
      this.setTilesRect(pos(6), pos(7), 3, 1, 83, area);
      this.setTilesRect(pos(7), pos(8), 2, 1, 83, area);
    }
    else if (areaID == "Rocky Hill West") {
      //Grass
      this.setTilesRect(pos(5), pos(2), 2, 1, 83, area);
      this.setTilesRect(pos(5), pos(3), 3, 1, 83, area);
      this.setTilesRect(pos(6), pos(4), 2, 1, 83, area);
    }
    else if (areaID == "Rocky Hill East") {
      //Grass
      area.push(new Tile(pos(7), pos(4), 82));
      area.push(new Tile(pos(2), pos(5), 82));
      this.setTilesRect(pos(7), pos(5), 2, 1, 83, area);
      area.push(new Tile(pos(1), pos(6), 82));
      this.setTilesRect(pos(2), pos(6), 2, 1, 83, area);
      this.setTilesRect(pos(5), pos(6), 4, 1, 83, area);
      this.setTilesRect(pos(2), pos(7), 2, 1, 83, area);
      this.setTilesRect(pos(5), pos(7), 4, 1, 83, area);
    }
    else if (areaID == "Rocky Hill Center") {
      //Grass
      area.push(new Tile(pos(6), pos(4), 82));
      this.setTilesRect(pos(7), pos(4), 2, 1, 83, area);
      this.setTilesRect(pos(6), pos(5), 3, 1, 83, area);
      this.setTilesRect(pos(4), pos(6), 4, 1, 83, area);
      area.push(new Tile(pos(3), pos(7), 82));
      this.setTilesRect(pos(4), pos(7), 3, 1, 83, area);
      this.setTilesRect(pos(4), pos(8), 3, 1, 83, area);
    }
    else if (areaID == "Rocky Hill South") {
      //Grass
      this.setTilesRect(pos(8), pos(5), 2, 1, 82, area);
      this.setTilesRect(pos(8), pos(6), 2, 1, 83, area);
      area.push(new Tile(pos(7), pos(7), 82));
      this.setTilesRect(pos(8), pos(7), 2, 1, 83, area);
      area.push(new Tile(pos(6), pos(8), 82));
      this.setTilesRect(pos(7), pos(8), 3, 1, 83, area);
      this.setTilesRect(pos(6), pos(9), 4, 1, 83, area);
    }
    else if (areaID == "Rocky Hill Cliff") {
      //Grass
      this.setTilesRect(pos(6), pos(0), 4, 4, 83, area);
      this.setTilesRect(pos(7), pos(4), 3, 1, 83, area);
      area.push(new Tile(pos(9), pos(5), 83));
      this.setTilesRect(pos(6), pos(8), 2, 1, 82, area);
      this.setTilesRect(pos(3), pos(9), 3, 1, 82, area);
      this.setTilesRect(pos(6), pos(9), 2, 1, 83, area);
      this.setTilesRect(pos(8), pos(9), 2, 1, 82, area);
    }
    else if (areaID == "Hideout Entrance") {
      //Grass
      this.setTilesRect(pos(0), pos(7), 2, 1, 82, area);
      this.setTilesRect(pos(0), pos(8), 3, 1, 83, area);
      this.setTilesRect(pos(3), pos(8), 2, 1, 82, area);
      this.setTilesRect(pos(0), pos(9), 5, 1, 83, area);
      this.setTilesRect(pos(5), pos(9), 2, 1, 82, area);
    }
  
  }


  /*
  This function calls setupInteractArray() for each different interact array.
  */
  setupInteracts() {
    this.setupInteractArray(testArea1Interacts);
    this.setupInteractArray(herculesHouseInteracts);
    this.setupInteractArray(innerWebsSouthInteracts);
    this.setupInteractArray(innerWebsWestInteracts);
    this.setupInteractArray(mantidHouseInteracts);
    this.setupInteractArray(innerWebsCheckpointInteracts);
    this.setupInteractArray(theMedianInteracts);
    this.setupInteractArray(innerWebsEastInteracts);
    this.setupInteractArray(innerWebsCenterInteracts);
    this.setupInteractArray(abandonedHouseInteracts);
    this.setupInteractArray(innerWebsNorthInteracts);
    this.setupInteractArray(outerWebsCenterInteracts);
    this.setupInteractArray(outerWebsEastInteracts);
    this.setupInteractArray(stairwellTopInteracts);

    this.setupInteractArray(stairwellBottomInteracts);
    this.setupInteractArray(marketEntranceInteracts);
    this.setupInteractArray(marketNorthInteracts);
    this.setupInteractArray(bedStoreInteracts);
    this.setupInteractArray(bakeryInteracts);
    this.setupInteractArray(marketEastInteracts);
    this.setupInteractArray(marketEdgeNorthInteracts);
    this.setupInteractArray(marketEdgeEastInteracts);
    this.setupInteractArray(marketEdgeWestInteracts);
    this.setupInteractArray(marketCenterInteracts);
    this.setupInteractArray(marketWestInteracts);
    this.setupInteractArray(mainEntranceInteracts);

    this.setupInteractArray(highlandsEntranceInteracts);
    this.setupInteractArray(highlandsWestInteracts);
    this.setupInteractArray(rockyHillNorthInteracts);
    this.setupInteractArray(rockyHillSouthInteracts);
    this.setupInteractArray(rockyHillCliffInteracts);
    this.setupInteractArray(hideoutEntranceInteracts);

    this.setupInteractArray(mainRoomInteracts);
    this.setupInteractArray(storageRoomInteracts);
    this.setupInteractArray(meetingRoomInteracts);
    this.setupInteractArray(sleepingRoomInteracts);

    this.setupInteractArray(mainRoomDestroyedInteracts);
    this.setupInteractArray(storageRoomDestroyedInteracts);
    this.setupInteractArray(meetingRoomDestroyedInteracts);
    this.setupInteractArray(sleepingRoomDestroyedInteracts);
  }


  /*
  This function sets up each interact array. Modify this when you want to set what interacts appear where in a given area.
  */
  setupInteractArray(array) {
    array.splice(0);
    //Test Area 1
    if (array == testArea1Interacts) { 
      array.push(new Interact(pos(7), pos(2), "left", 1, 10)); //Textbox Example
      array.push(new Interact(pos(7), pos(4), "left", 2, 10)); //Passive Turning Example
      array.push(new Interact(pos(7), pos(6), "left", 3, 10)); //Movement Example
      array.push(new Interact(pos(7), pos(8), "left", 4, 10)); //Teleporter Example
      array.push(new Interact(pos(3), pos(8), "up", 5, 10)); //Interact Type Switch Example
      array.push(new Interact(pos(5), pos(8), "up", 6, 10)); //Interact Deletion Example
      array.push(new Interact(pos(2), pos(6), "left", 7, 90)); //Bed
    }
    //Hercules' House
    else if (array == herculesHouseInteracts) { 
      array.push(new Interact(pos(4), pos(7), "left", 7, 90)); //Bed
      array.push(new Interact(pos(5), pos(3), "left", 15, 91)); //Hercules Rest Reminder Note
      array.push(new Interact(pos(6), pos(7), "left", 8, 50)); //Intro Hive Soldier
    }
    //Inner Webs South
    else if (array == innerWebsSouthInteracts) { 
      array.push(new Interact(pos(2), pos(2), "right", 10, 20)); //"Glad To Be In The Inner Webs" Snooty SilkWing Y
      array.push(new Interact(pos(6), pos(6), "left", 23, 99)); //Hercules House Sign
    }
    //Inner Webs West
    else if (array == innerWebsWestInteracts) { 
      array.push(new Interact(pos(3), pos(4), "down", 11, 24)); //"This Place Is Getting Crowded" Observant SilkWing B
      array.push(new Interact(pos(7), pos(3), "up", 35, 40)); //"Best in the hive!" Focused SilkWing PI
      array.push(new Interact(pos(2), pos(7), "left", 24, 99)); //Mantid House Sign
    }
    //Inner Webs Checkpoint
    else if (array == innerWebsCheckpointInteracts) { 
      array.push(new Interact(pos(5), pos(2), "down", 13, 60)); //Median Guard
      array.push(new Interact(pos(2), pos(2), "left", 26, 99)); //Median Sign
    }
    //Mantid's House
    else if (array == mantidHouseInteracts) { 
      array.push(new Interact(pos(2), pos(5), "down", 12, 4)); //Mantid (In House)
      array.push(new Interact(pos(8), pos(7), "left", 14, 90)); //Mantid Bed
    }
    //Inner Webs East
    else if (array == innerWebsEastInteracts) { 
      array.push(new Interact(pos(2), pos(6), "right", 16, 30)); //"I always knew you were trouble!" Judgemental SilkWing P
      array.push(new Interact(pos(4), pos(6), "left", 17, 34)); //"D-Don't talk to me!" Scared SilkWing DB
      array.push(new Interact(pos(8), pos(5), "left", 26, 99)); //Median Sign
    }
    //Inner Webs Center
    else if (array == innerWebsCenterInteracts) { 
      array.push(new Interact(pos(2), pos(7), "up", 18, 20)); //"That's totally crazy dude!" Laid Back SilkWing Y
      array.push(new Interact(pos(1), pos(2), "left", 25, 99)); //Abandoned House Sign
      array.push(new Interact(pos(6), pos(1), "left", 27, 99)); //Propoganda Sign "Vigilant"
    }
    //Abandoned House
    else if (array == abandonedHouseInteracts) { 
      array.push(new Interact(0, 0, "left", 19, -1)); //Abandoned House Intro
      array.push(new Interact(pos(4), pos(3), "left", 7, 90)); //Bed
    }
    //Inner Webs North
    else if (array == innerWebsNorthInteracts) { 
      array.push(new Interact(pos(1), pos(2), "left", 20, 30)); //"Don't fall behind!" Dilligent SilkWing P
    }
    //The Median
    else if (array == theMedianInteracts) { 
      array.push(new Interact(pos(5), pos(10), "up", 21, 60)); //Median Guard Battle
    }
    //Outer Webs Center
    else if (array == outerWebsCenterInteracts) { 
      array.push(new Interact(pos(5), pos(2), "right", 28, 24)); //"I swear I saw it!" Bewildered SilkWing B
      array.push(new Interact(pos(6), pos(2), "left", 29, 34)); //"Sure you did." Skeptical SilkWing DB
    }
    //Outer Webs East
    else if (array == outerWebsEastInteracts) { 
      array.push(new Interact(0, 0, "left", 32, -1)); //Rhino Battle 1
    }
    //Stairwell Top
    else if (array == stairwellTopInteracts) { 
      array.push(new Interact(pos(2), pos(3), "left", 30, 99)); //Stairwell Top Sign
    }
    //Stairwell Bottom
    else if (array == stairwellBottomInteracts) { 
      array.push(new Interact(pos(7), pos(4), "left", 31, 99)); //Stairwell Bottom Sign
      array.push(new Interact(pos(4), pos(5), "left", 33, 10)); // Magenta Dummy
      array.push(new Interact(pos(0), pos(0), "left", 65, 99)); // Part 2 Intro
    }
    //Market Entrance
    else if (array == marketEntranceInteracts) { 
      array.push(new Interact(pos(1), pos(4), "down", 36, 54)); //"So unreliable." Demanding HiveWing Y
      array.push(new Interact(pos(1), pos(5), "up", 36, 30)); //"I'll remember!" Forgetful SilkWing P
      array.push(new Interact(pos(5), pos(3), "left", 37, 24)); //"Thank Clearsight." Relieved SilkWing B
    }
    //Market North
    else if (array == marketNorthInteracts) { 
      array.push(new Interact(pos(3), pos(4), "down", 38, 50)); //"Ho ho!" Hasty Salesdragon HiveWing R
      array.push(new Interact(pos(4), pos(7), "right", 39, 44)); //"Have our hides..." Frusterated SilkWing G
      array.push(new Interact(pos(5), pos(7), "left", 39, 40)); //"I'm sorry!" Tired SilkWing PI
      array.push(new Interact(pos(6), pos(4), "down", 40, 34)); //"Get your bread here!" Bread Salesdragon SilkWing DB
      array.push(new Interact(pos(1), pos(3), "down", 45, 99)); //Bed Store Sign
      array.push(new Interact(pos(8), pos(3), "down", 46, 99)); //Bakery Sign
    }
    //Bed Store
    else if (array == bedStoreInteracts) { 
      array.push(new Interact(pos(6), pos(3), "down", 41, 30)); //"Try them!" Bed Salesdragon SilkWing P
      array.push(new Interact(pos(2), pos(4), "left", 7, 90)); //Bed
      array.push(new Interact(pos(4), pos(4), "left", 7, 90)); //Bed
      array.push(new Interact(pos(4), pos(6), "left", 7, 90)); //Bed
      array.push(new Interact(pos(6), pos(6), "left", 7, 90)); //Bed
    }
    //Bakery
    else if (array == bakeryInteracts) { 
      array.push(new Interact(pos(3), pos(3), "up", 42, 24)); //"Not now!" Senior Baker SilkWing B
      array.push(new Interact(pos(6), pos(7), "left", 43, 44)); //"Where is it!" Assistant Baker SilkWing G
      array.push(new Interact(pos(5), pos(4), "left", 44, 64)); //"Good luck!" Head Baker HiveWing O
    }
    //Market East
    else if (array == marketEastInteracts) { 
      array.push(new Interact(pos(5), pos(3), "down", 47, 34)); //"Got a hole in your wall?" Treestuff Salesdragon SilkWing DB
      array.push(new Interact(pos(2), pos(6), "down", 48, 24)); //"Ah ah!" Glassware Salesdragon SilkWing B
      array.push(new Interact(pos(4), pos(7), "right", 49, 50)); //"What's all this fuss?" Elderly HiveWing R
      array.push(new Interact(pos(0), pos(6), "left", 50, 70)); //"World of hurt!" Burly Soldier Armored O
      array.push(new Interact(pos(0), pos(7), "left", 50, 74)); //"Yeah!" Brawny Soldier Armored Y
    }
    //Market Edge North
    else if (array == marketEdgeNorthInteracts) { 
      array.push(new Interact(pos(4), pos(2), "down", 51, 60)); //"Pots for days!" Pot Salesdragon HiveWing B
      array.push(new Interact(pos(3), pos(2), "left", 52, 34)); //"So many pots..." Curious SilkWing DB
      array.push(new Interact(pos(3), pos(6), "up", 53, 20)); //"I can't decide!" Indecisive SilkWing Y
      array.push(new Interact(pos(6), pos(7), "right", 54, 40)); //"Are you alright?" Concerned SilkWing Pi
    }
    //Market Edge East
    else if (array == marketEdgeEastInteracts) { 
      array.push(new Interact(pos(5), pos(8), "down", 55, 74)); //"I know what I saw." Scared Soldier Armored Y
    }
    //Market Edge West
    else if (array == marketEdgeWestInteracts) { 
      array.push(new Interact(pos(1), pos(4), "up", 56, 24)); //"Thanks pal." Sneaky SilkWing B
    }
    //Market Center
    else if (array == marketCenterInteracts) { 
      array.push(new Interact(pos(1), pos(6), "right", 57, 20)); //"It's really you!" Fanboy SilkWing Y
      array.push(new Interact(pos(9), pos(6), "right", 58, 70)); //"From this way!" Burly Soldier Armored O
      array.push(new Interact(pos(9), pos(7), "right", 58, 74)); //"Just you wait!" Brawny Soldier Armored Y
      array.push(new Interact(pos(7), pos(3), "down", 59, 40)); //"Please...?" Plant Salesdragon SilkWing Pi
      array.push(new Interact(pos(5), pos(4), "left", 60, 30)); //"The what for." Disgruntled SilkWing P
    }
    //Market West
    else if (array == marketWestInteracts) { 
      array.push(new Interact(pos(6), pos(2), "down", 61, 24)); //"Most vibrant flowers around!" Flower Salesdragon SilkWing B
      array.push(new Interact(pos(3), pos(3), "down", 62, 64)); //"Another SilkWing?" Book Salesdragon HiveWing O
      array.push(new Interact(pos(2), pos(2), "up", 63, 34)); //"They all look so good!" Scholarly SilkWing DB
      array.push(new Interact(pos(7), pos(7), "left", 64, 44)); //"Hey Herc!" Helpful SilkWing G
    }
    //Main Entrance
    else if (array == mainEntranceInteracts) { 
      array.push(new Interact(pos(0), pos(0), "left", 66, 99)); //Rhino Fight 2
      array.push(new Interact(pos(4), pos(6), "down", 33, 10)); //Magenta Dummy
      array.push(new Interact(pos(5), pos(8), "up", 34, 14)); //Rhino Dummy
      array.push(new Interact(pos(2), pos(7), "right", 67, 70)); //Armored HiveWing Orange Dummy
      array.push(new Interact(pos(7), pos(7), "left", 68, 74)); //Armored HiveWing Yellow Dummy
    }
    //Highlands Entrance
    else if (array == highlandsEntranceInteracts) { 
      array.push(new Interact(pos(3), pos(2), "left", 7, 90)); //Bed
      array.push(new Interact(pos(4), pos(5), "up", 33, 10)); //Magenta Dummy
      array.push(new Interact(pos(0), pos(0), "left", 70, 99)); //Part 3 Intro
    }
    //Highlands West
    else if (array == highlandsWestInteracts) { 
      array.push(new Interact(pos(6), pos(8), "down", 33, 80)); //Gnat Dummy
      array.push(new Interact(pos(0), pos(0), "left", 71, 99)); //Gnat Encounter
    }
    //Rocky Hill North
    else if (array == rockyHillNorthInteracts) { 
      array.push(new Interact(pos(6), pos(2), "left", 7, 90)); //Bed
      array.push(new Interact(pos(6), pos(4), "right", 33, 10)); //Magenta Dummy
      array.push(new Interact(pos(0), pos(0), "left", 72, 99)); //Midway Scene
    }
    //Rocky Hill South
    else if (array == rockyHillSouthInteracts) { 
      array.push(new Interact(pos(8), pos(7), "up", 69, 80)); //Spinning Gnat
    }
    //Rocky Hill Cliff
    else if (array == rockyHillCliffInteracts) { 
      array.push(new Interact(pos(9), pos(2), "down", 69, 80)); //Spinning Gnat
      array.push(new Interact(pos(7), pos(3), "right", 69, 80)); //Spinning Gnat
      array.push(new Interact(pos(5), pos(9), "left", 69, 80)); //Spinning Gnat
    }
    //Hideout Entrance
    else if (array == hideoutEntranceInteracts) { 
      array.push(new Interact(pos(0), pos(0), "up", 73, 99)); //Mantid Fight
    }
    //Main Room
    else if (array == mainRoomInteracts) { 
      array.push(new Interact(pos(5), pos(4), "down", 74, 34)); //"Do us proud" Friendly Rebel DB (Main Room)
      array.push(new Interact(pos(4), pos(5), "right", 75, 10)); //Magenta (Main Room)
      array.push(new Interact(pos(3), pos(4), "down", 76, 40)); //"Oh wow!" Bubbly Rebel Pi (Main Room)
      array.push(new Interact(pos(2), pos(7), "right", 77, 30)); //"You look tough" Skeptical Rebel P (Main Room)
      array.push(new Interact(pos(4), pos(9), "left", 85, 99)); //Hideout Exit
      array.push(new Interact(pos(0), pos(0), "left", 87, 99)); //Hideout Intro
    }
    //Storage Room
    else if (array == storageRoomInteracts) { 
      array.push(new Interact(pos(2), pos(4), "right", 78, 4)); //Mantid
      array.push(new Interact(pos(3), pos(4), "left", 78, 24)); //Guard
    }
    //Meeting Room
    else if (array == meetingRoomInteracts) { 
      array.push(new Interact(pos(5), pos(3), "down", 79, 44)); //Rebel Leader (Meeting Room)
    }
    //Sleeping Room
    else if (array == sleepingRoomInteracts) { 
      array.push(new Interact(pos(4), pos(3), "left", 80, 90)); //Hideout Bed
      array.push(new Interact(pos(5), pos(3), "left", 80, 90)); //Hideout Bed
      array.push(new Interact(pos(5), pos(6), "left", 80, 90)); //Hideout Bed
      array.push(new Interact(pos(6), pos(6), "left", 80, 90)); //Hideout Bed
      array.push(new Interact(pos(8), pos(4), "left", 80, 90)); //Hideout Bed
      array.push(new Interact(pos(8), pos(5), "left", 80, 90)); //Hideout Bed
    }
    //Main Room Destroyed
    else if (array == mainRoomDestroyedInteracts) { 
      array.push(new Interact(pos(5), pos(4), "left", 81, 39)); //"Do us proud" Friendly Rebel DB Dead
      array.push(new Interact(pos(3), pos(4), "left", 81, 48)); //"Oh wow!" Bubbly Rebel Pi Dead
      array.push(new Interact(pos(2), pos(7), "left", 81, 38)); //"You look tough" Skeptical Rebel P Dead
      array.push(new Interact(pos(4), pos(9), "left", 86, 99)); //Hideout Destroyed Exit
    }
    //Storage Room Destroyed
    else if (array == storageRoomDestroyedInteracts) { 
      array.push(new Interact(pos(2), pos(4), "left", 82, 9)); //Scared Mantid
      array.push(new Interact(pos(3), pos(5), "left", 81, 29)); //Dead Guard
    }
    //Meeting Room Destroyed
    else if (array == meetingRoomDestroyedInteracts) { 
      array.push(new Interact(pos(3), pos(4), "left", 81, 49)); //Rebel Leader Dead
      array.push(new Interact(pos(5), pos(3), "left", 33, 18)); //Magenta Dummy
      array.push(new Interact(pos(5), pos(2), "left", 83, 84)); //Panther
      array.push(new Interact(pos(0), pos(0), "left", 89, 99)); //Final Scene
    }
    //Sleeping Room Destroyed
    else if (array == sleepingRoomDestroyedInteracts) { 
      array.push(new Interact(pos(4), pos(3), "left", 84, 90)); //Hideout Destroyed Bed
      array.push(new Interact(pos(5), pos(3), "left", 84, 90)); //Hideout Destroyed Bed
      array.push(new Interact(pos(5), pos(6), "left", 84, 90)); //Hideout Destroyed Bed
      array.push(new Interact(pos(6), pos(6), "left", 84, 90)); //Hideout Destroyed Bed
      array.push(new Interact(pos(8), pos(4), "left", 84, 90)); //Hideout Destroyed Bed
      array.push(new Interact(pos(8), pos(5), "left", 84, 90)); //Hideout Destroyed Bed
      array.push(new Interact(pos(0), pos(0), "left", 88, 99)); //Hideout Destroyed Intro
    }
  }


  /*
  This function sets a rectangle of tiles of the specified type.
  */
  setTilesRect(xPos, yPos, width, height, type, area) {
    this.x = xPos;
    this.y = yPos;
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        if (this.setupMode == "tiles") {
          area.push(new Tile(this.x, this.y, type));
        }
        else if (this.setupMode == "interacts") {
          area.push(new Interact(this.x, this.y, type));
        }

        this.x += pos(1);
      }

      this.y += pos(1);
      this.x = xPos;
    }

  }


  /*
  This function separates a given spritesheet into individual sprites that are placed into the given array.
  */
  decompileSpritesheet(spritesheet, array, rows, columns, imgWidth, imgHeight) {
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < columns; c++) {
        this.createSprite(spritesheet, array, c, r, imgWidth, imgHeight);
      }
    }
  }


  /*
  This function generates an image object of a sprite at a given location in a spritesheet and adds it to the given array.
  */
  createSprite(spritesheet, array, c, r, imgWidth, imgHeight) {
    let x = c * imgWidth;
    let y = r * imgHeight;
    let imgX = 0;
    let imgY = 0;
    let img = createImage(imgWidth, imgHeight);
    for (let i = 0; i < imgHeight; i++) {
      x = c * imgWidth;
      imgX = 0;
      for (let j = 0; j < imgWidth; j++) {
        img.set(imgX, imgY, spritesheet.get(x, y));
        x += 1;
        imgX += 1;
      }
      y += 1;
      imgY += 1;
    }
    img.updatePixels();
    array.push(img);
  }

}


//Check Object
class Check {
  constructor() {

  }


  //Check Inside
  checkInside(object) {
    if ((player.xPos == object.xPos) && (player.yPos == object.yPos)) {
      return true;
    }
    else {
      return false;
    }
  }


  //Check Move Collisions
  checkMoveCollisions(direction) {
    if ((testingKeys == true) && (keyStackContains(16))){

    }
    else {
      for(let i = 0; i < mapObj.currentAreaWalls.length; i++) {
        if (mapObj.currentAreaWalls[i].checkCollide(direction) == true) {
          return(true)
        }
      }
    
      for(let i = 0; i < mapObj.currentAreaInteracts.length; i++) {
        if (mapObj.currentAreaInteracts[i].checkCollide(direction) == true) {
          return(true)
        }
        
      }
    }
    
    return(false);
  }


  //Check Inside Encounter
  checkInsideEncounter() {
    for(let i = 0; i < mapObj.currentAreaEncounters.length; i++) {
      if (checkObj.checkInside(mapObj.currentAreaEncounters[i]) == true) {
        return(true)
      }
    }
  
    return(false);
  }
  

  //Check Facing
  checkFacing(object) {
    if (((object.checkCollide("up") == true) && (player.direction == "up")) || ((object.checkCollide("down") == true) && (player.direction == "down")) || ((object.checkCollide("left") == true) && (player.direction == "left")) || ((object.checkCollide("right") == true) && (player.direction == "right"))) {
      return(true);
    }
  
    return(false);
  }


  //Check Transfer (Special case transfers must be handled on both ends)
  checkTransfer() {
    let possibleArea;
    if (player.yPos == 0) { //Transfer Up
      if (currentAreaData.areaName == "Stairwell Bottom") {
        possibleArea = currentAreaData.findArea("Stairwell Top");
      }
      else {
        possibleArea = currentAreaData.findNeighbor("up");
      }

      if (possibleArea != null) {
        fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
        player.moveDebounce = 0;
        player.moveDirection = "none";
        mapObj.transferDirection = "up";
        nextAreaData = possibleArea;
        mapObj.transferToArea = nextAreaData.areaName;
      }
      else {
        fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
        player.moveDebounce = 0;
        player.moveDirection = "none";
        mapObj.transferDirection = "up";
        nextAreaData = new Area("Unspecified Area", "Unspecified Area", currentAreaData.hPosition, currentAreaData.vPosition - 1, 0, "none", "none", 0, false);
      }
  
    }
    else if (player.yPos == pos(9)) { //Transfer Down
      if (currentAreaData.areaName == "Stairwell Top") {
        possibleArea = currentAreaData.findArea("Stairwell Bottom");
      }
      else if (currentAreaData.areaName == "Main Entrance") {
        possibleArea = currentAreaData.findArea("Highlands Entrance");
      }
      else {
        possibleArea = currentAreaData.findNeighbor("down");
      }
      
      if (possibleArea != null) {
        fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
        player.moveDebounce = 0;
        player.moveDirection = "none";
        mapObj.transferDirection = "down";
        nextAreaData = possibleArea;
        mapObj.transferToArea = nextAreaData.areaName;
      }
      else {
        fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
        player.moveDebounce = 0;
        player.moveDirection = "none";
        mapObj.transferDirection = "down";
        nextAreaData = new Area("Unspecified Area", "Unspecified Area", currentAreaData.hPosition, currentAreaData.vPosition + 1, 0, "none", "none", 0, false);
      }

    }
    else if (player.xPos == 0) { //Transfer Left
      possibleArea = currentAreaData.findNeighbor("left");
      if (possibleArea != null) {
        fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
        player.moveDebounce = 0;
        player.moveDirection = "none";
        mapObj.transferDirection = "left";
        nextAreaData = possibleArea;
        mapObj.transferToArea = nextAreaData.areaName;
      }
      else {
        fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
        player.moveDebounce = 0;
        player.moveDirection = "none";
        mapObj.transferDirection = "left";
        nextAreaData = new Area("Unspecified Area", "Unspecified Area", currentAreaData.hPosition - 1, currentAreaData.vPosition, 0, "none", "none", 0, false);
      }
      
    }
    else if (player.xPos == pos(9)) { //Transfer Right
      possibleArea = currentAreaData.findNeighbor("right");
      if (possibleArea != null) {
        fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
        player.moveDebounce = 0;
        player.moveDirection = "none";
        mapObj.transferDirection = "right";
        nextAreaData = possibleArea;
        mapObj.transferToArea = nextAreaData.areaName;
      }
      else {
        fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
        player.moveDebounce = 0;
        player.moveDirection = "none";
        mapObj.transferDirection = "right";
        nextAreaData = new Area("Unspecified Area", "Unspecified Area", currentAreaData.hPosition + 1, currentAreaData.vPosition, 0, "none", "none", 0, false);
      }

    }
  
  }


  //Check for cutscene switches.
  checkCutscenes() {
    if ((fadeObj.checkFade("interact") == false) && (mapObj.pauseY == -(pos(12))) && (player.moveDebounce == 0) && (interactDebounce == 0) && (skipCutscenes == false)) {
      if ((mapObj.currentArea == "Hercules' House") && (introSceneSwitch == false)) {
        introSceneSwitch = true;
        getInteract(8).interact();
        inCutscene = true;
      }
      else if ((mapObj.currentArea == "Abandoned House") && (abandonedHouseIntroSwitch == false)) {
        abandonedHouseIntroSwitch = true;
        getInteract(19).interact();
        inCutscene = true;  
      }
      else if ((mapObj.currentArea == "The Median") && (medianBossSwitch == false)) {
        medianBossSwitch = true;
        getInteract(21).interact();
        inCutscene = true;
      }
      else if ((mapObj.currentArea == "Outer Webs East") && (outerWebsBossSwitch == false)) {
        outerWebsBossSwitch = true;
        getInteract(32).interact();
        inCutscene = true;
      }
      else if ((mapObj.currentArea == "Stairwell Bottom") && (partTwoIntroSwitch == false)) {
        partTwoIntroSwitch = true;
        getInteract(65).interact();
        inCutscene = true;
      }
      else if ((mapObj.currentArea == "Main Entrance") && (marketBossSwitch == false)) {
        marketBossSwitch = true;
        getInteract(66).interact();
        inCutscene = true;
      }
      else if ((mapObj.currentArea == "Highlands Entrance") && (partThreeIntroSwitch == false)) {
        partThreeIntroSwitch = true;
        getInteract(70).interact();
        inCutscene = true;
      }
      else if ((mapObj.currentArea == "Highlands West") && (gnatEncounterSwitch == false)) {
        gnatEncounterSwitch = true;
        getInteract(71).interact();
        inCutscene = true;
      }
      else if ((mapObj.currentArea == "Rocky Hill North") && (midwaySceneSwitch == false)) {
        midwaySceneSwitch = true;
        getInteract(72).interact();
        inCutscene = true;
      }
      else if ((mapObj.currentArea == "Hideout Entrance") && (mantidBossSwitch == false)) {
        mantidBossSwitch = true;
        getInteract(73).interact();
        inCutscene = true;
      }
      else if ((mapObj.currentArea == "Main Room") && (hideoutIntroSwitch == false)) {
        hideoutIntroSwitch = true;
        getInteract(87).interact();
        inCutscene = true;
      }
      else if ((mapObj.currentArea == "Sleeping Room Destroyed") && (destroyedHideoutIntroSwitch == false)) {
        destroyedHideoutIntroSwitch = true;
        getInteract(88).interact();
        inCutscene = true;
      }
      else if ((mapObj.currentArea == "Meeting Room Destroyed") && (finalSceneSwitch == false)) {
        finalSceneSwitch = true;
        getInteract(89).interact();
        inCutscene = true;
      }

    }
    else if ((skipCutscenes == true) && (mapObj.currentArea == "Hercules' House") && (introSceneSwitch == false)) {
      introSceneSwitch = true;
      passGetSwitch = true;
      abandonedHouseIntroSwitch = true;
      medianBossSwitch = true;
      outerWebsBossSwitch = true;
      fadeObj.fadeIn();
      getInteract(8).id = 9;
    }
  
  }


  //Check if the player is pressing any keys while in map mode.
  checkMapKeyPresses() {
    //print(player.moveDebounce);
    if ((keyIsPressed == true) && (player.moveDebounce == 0) && (interactDebounce == 0)) {
      //Move Up
      if ((keyStack[keyStack.length - 1] == 87) && (interacting == false) && (fadeObj.checkFade("general") == false) && (mapObj.pauseY == -(pos(12)))) {
        player.changeDirection("up");
        if ((checkObj.checkMoveCollisions("up") == true) && (ghostMode == false)) {
          player.moveDirection = "none";
          //sfxBump.play();
        }
        else {
          player.moveDirection = "up";
        }
    
        player.moveDebounce = movementTime;
      }
      //Move Down
      else if ((keyStack[keyStack.length - 1] == 83) && (interacting == false) && (fadeObj.checkFade("general") == false) && (mapObj.pauseY == -(pos(12)))) {
        player.changeDirection("down");
        if ((checkObj.checkMoveCollisions("down") == true) && (ghostMode == false)) {
          player.moveDirection = "none";
          //sfxBump.play();
        }
        else {
          player.moveDirection = "down";
        }
    
        player.moveDebounce = movementTime;
      }
      //Move Left
      else if ((keyStack[keyStack.length - 1] == 65) && (interacting == false) && (fadeObj.checkFade("general") == false) && (mapObj.pauseY == -(pos(12)))) {
        player.changeDirection("left");
        if ((checkObj.checkMoveCollisions("left") == true) && (ghostMode == false)) {
          player.moveDirection = "none";
          //sfxBump.play();
        }
        else {
          player.moveDirection = "left";
        }
    
        player.moveDebounce = movementTime;
      }
      //Move Right
      else if ((keyStack[keyStack.length - 1] == 68) && (interacting == false) && (fadeObj.checkFade("general") == false) && (mapObj.pauseY == -(pos(12)))) {
        player.changeDirection("right");
        if ((checkObj.checkMoveCollisions("right") == true) && (ghostMode == false)) {
          player.moveDirection = "none";
          //sfxBump.play();
        }
        else {
          player.moveDirection = "right";
        }
    
        player.moveDebounce = movementTime;
      }
      //Interact
      else if ((keyStackContains(ENTER)) && (fadeObj.checkFade("interact") == false) && (player.moveDirection == "none") && (mapObj.pauseY == -(pos(12)))) {
        
        for (let i = 0; i < mapObj.currentAreaInteracts.length; i++) {
          if (((checkObj.checkFacing(mapObj.currentAreaInteracts[i])) || ((inCutscene = true) && (mapObj.currentAreaInteracts[i].interactStep != 0))) && (this.checkForMovement() == false)) {
            mapObj.currentAreaInteracts[i].interact();
            sfxCursor.play();
          }
  
        }
    
      }
      //Pause
      else if ((keyStackContains(80)) && (interacting == false) && (fadeObj.checkFade("general") == false) && (mapObj.pauseDebounce == 0)) {
        if (mapObj.pauseState == "unpaused") {
          mapObj.pauseY = -((pos(12) / 30) * 29);
          mapObj.pauseState = "pausing";
        }
        else if (mapObj.pauseState == "paused") {
          mapObj.pauseY = -(pos(12) / 30);
          mapObj.pauseState = "unpausing";
        }
  
      }
      //Teleport to Test Area with T
      else if ((keyStackContains(84)) && (interacting == false) && (fadeObj.checkFade("general") == false) && (mapObj.pauseY == -(pos(12))) && (testingKeys == true)) {
        fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
        player.moveDebounce = 0;
        player.moveDirection = "none";
        mapObj.transferDirection = "point";
        mapObj.xTransfer = pos(3);
        mapObj.yTransfer = pos(3);
        nextAreaData = currentAreaData.findArea("Test Area 1");
        player.changeDirection("up");
      }
      //Teleport to Future Area with Y [See Testing Waypoint section in the user guide for more information.]
      else if ((keyStackContains(89)) && (interacting == false) && (testingWaypoint != "none") && (fadeObj.checkFade("general") == false) && (mapObj.pauseY == -(pos(12))) && (testingKeys == true)) {
        fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
        player.moveDebounce = 0;
        player.moveDirection = "none";
        mapObj.transferDirection = "point";
        mapObj.xTransfer = testingWaypointX;
        mapObj.yTransfer = testingWaypointY;
        nextAreaData = currentAreaData.findArea(testingWaypoint);
        player.changeDirection("up");
      }
  
    }
  
  }


  //Checks if any interacts are moving currently.
  checkForMovement(){
    for (let i = 0; i < mapObj.currentAreaInteracts.length; i++) {
      if ((mapObj.currentAreaInteracts[i] != false) && (mapObj.currentAreaInteracts[i].moveDirection != "none")) {
        return true;
      }

    }

    return false;
  }

}


//Map Object
class GameMap {
  constructor() {
    this.currentArea = "Hercules' House";
    this.encounterArea = false;
    this.outside = false;
    this.areaBiome = "Inner Webs";
    this.currentAreaWalls = [];
    this.currentAreaFloor = [];
    this.currentAreaCeiling = [];
    this.currentAreaEncounters = [];
    this.currentAreaInteracts = [];
    
    this.checkpointArea = "Hercules' House";
    this.checkpointX = pos(5);
    this.checkpointY = pos(7);
    
    this.encounterChance;
    
    this.pauseY = -(pos(12));

    this.pauseDebounce = 0;
    this.pauseState = "unpaused";
    
    this.dayTime = 0;
    this.morning = false;
    
    this.transferToArea;
    this.transferDirection;
    this.xTransfer;
    this.yTransfer;
    this.inRoomTransfer = false;
    this.transferPlayerDirection = "none";
    
    this.mapTheme;
    this.mapThemeVolume;
  }

  draw() {
    clear(); //Clear
    if (this.pauseY != 0) { //Executes when the pause menu is not fully distended.
      //Draw Background
      this.drawMapBG();
  
  
      //Check Switches
      checkObj.checkCutscenes();
  
  
      //Interact Passive Actions
      this.doPassiveActions();
  
  
      //Draw Objects
      this.drawObjects();
  
  
      //Draw Day/Night
      this.drawDayNight();
  
  
      //Change Day/Night
      this.updateDayNight();
  
  
      //Area Name Box and Checkpoint Saved Indicator
      this.drawPopups();
  
      //Other Stuff
      this.doOtherMapStuff();
  
  
      //Increment and Draw Pause Menu
      if (this.pauseY > -(pos(12))) {
        if (this.pauseState == "pausing") {
          stroke(50, 38, 25);
          strokeWeight(pos(0.2));
          fill(200, 150, 100);
          rect(0, this.pauseY, pos(10), pos(12));
          this.pauseY = round(this.pauseY + (pos(12) / 30));
          if (this.pauseY >= 0) {
            this.pauseY = 0;
            this.pauseDebounce = 10;
            this.pauseState = "paused";
          }
  
        }
        else if (this.pauseState == "unpausing") {
          stroke(50, 38, 25);
          strokeWeight(pos(0.2));
          fill(200, 150, 100);
          rect(0, this.pauseY, pos(10), pos(12));
          this.pauseY = round(this.pauseY - (pos(12) / 30));
          if (this.pauseY <= -(pos(12))) {
            this.pauseY = -(pos(12));
            this.pauseDebounce = 10;
            this.pauseState = "unpaused";
          }
        }
  
      }
  
    }
    else {
      this.drawPause();
    }
    
    checkObj.checkMapKeyPresses(); //Check Key Presses
    if (this.pauseDebounce > 0) { //Increment Pause Debounce
      this.pauseDebounce -= 1;
    }
  
  }

  setMapObjects() {
    setupObj.setupFloor(nextAreaData.areaName, this.currentAreaFloor);
    setupObj.setupWalls(nextAreaData.areaName, this.currentAreaWalls);
    setupObj.setupCeiling(nextAreaData.areaName, this.currentAreaCeiling);
    if (doTallGrass || nextAreaData.areaName == "Test Area 2") {
      setupObj.setupEncounters(nextAreaData.areaName, this.currentAreaEncounters);
    }
    this.currentAreaInteracts = nextAreaData.areaInteractsArray;
  }

  drawMapBG() {
    background(0);
    if (mapBG != "none") {
      image(mapBG, 0, 0);
    }
    else {
      noStroke();
      fill(98, 153, 92);
      rect(0, 0, pos(10), pos(10));
    }
  
  }

  doPassiveActions() {
    if (this.currentAreaInteracts != 0) {
      for(let i = 0; i < this.currentAreaInteracts.length; i++) {
        if (this.currentAreaInteracts[i] != false) {
          if (this.currentAreaInteracts[i].interactStep == 0) {
            this.currentAreaInteracts[i].passiveAction();
          }
  
        }
  
      }
  
    }
  
  }

  drawObjects() {
    //Draws the floor tile layer.
    for(let i = 0; i < this.currentAreaFloor.length; i++) {
      this.currentAreaFloor[i].draw();
    }

    //Draws encounter tiles.
    for(let i = 0; i < this.currentAreaEncounters.length; i++) {
      this.currentAreaEncounters[i].draw();
    }

    //Draws the interacts.
    if (this.currentAreaInteracts != 0) {
      for(let i = 0; i < this.currentAreaInteracts.length; i++) {
        if (this.currentAreaInteracts[i].remove == true) {
          this.currentAreaInteracts.splice(i, 1);
        }
        else {
          this.currentAreaInteracts[i].draw();
        }

      }

    }

    //Draws the walls tile layer.
    for(let i = 0; i < this.currentAreaWalls.length; i++) {
      this.currentAreaWalls[i].draw();
    }
  
    //Draw Player
    player.draw();

    //Draws the ceiling tile layer.
    for(let i = 0; i < this.currentAreaCeiling.length; i++) {
      this.currentAreaCeiling[i].draw();
    }
  
  }

  drawDayNight() {
    if (currentAreaData.lightLevel == "cycle") {
      if (doDaylightCycle) {
        noStroke();
        fill(0, 0, 0, this.dayTime);
        rect(0, 0, pos(10), pos(10));
      }
    }
    else {
      noStroke();
      fill(0, 0, 0, currentAreaData.lightLevel);
      rect(0, 0, pos(10), pos(10));
    }
  }

  updateDayNight() {
    if (this.morning == true) {
      this.dayTime -= daylightSpeed;
      if (this.dayTime < daylightSpeed) {
        this.morning = false;
      }
    }
    else {
      this.dayTime += daylightSpeed;
      if (this.dayTime > 100 - daylightSpeed) {
        this.morning = true;
      }
    }
  }

  drawPopups() {
    if (areaNameBox.timing > 0) {
      areaNameBox.draw();
      areaNameBox.timing -= 1;
    }
  
    if (cpSaved.timing > 0) {
      cpSaved.draw();
      cpSaved.timing -= 1;
    }
  
  }
  
  doOtherMapStuff() {
    //Textbox Backing Rect
    fill(0);
    noStroke();
    rect(0, pos(10), pos(10), pos(2));

    if (fadeObj.checkFade("interact") == false) {
      player.move(player.moveDirection); //Move Player

      if (textbox != 0) { //Draw Textbox
        textbox.draw();
      }

      if (interactDebounce != 0) { //Increment Interact Debounce
        interactDebounce -= 1;
      }
      else { //Check For Interact Auto Advance
        for(let i = 0; i < this.currentAreaInteracts.length; i++) {
          if (this.currentAreaInteracts[i] != false) {
            if ((this.currentAreaInteracts[i].interactStep != 0) && (this.currentAreaInteracts[i].autoAdvance == true)) {
              this.currentAreaInteracts[i].interact();
              this.currentAreaInteracts[i].autoAdvance = false;
            }
    
          }
    
        }

      }
  
    }

    
  
    if (fadeObj.checkFade("general") == false) {
      this.mapTheme.setVolume(this.mapThemeVolume);
      outOfBattle = false;
    }
  
  }
  
  drawPause() {
    //BG
    background(0);
    stroke(50, 38, 25);
    strokeWeight(pos(0.2));
    fill(200, 150, 100);
    rect(0, this.pauseY, pos(10), pos(12));
  
    //Title
    fill(50, 38, 25);
    noStroke();
    textSize(pos(1.5));
    textAlign(CENTER, TOP);
    text("Game Paused", pos(5), pos(0.1));
  
    //Headers
    textSize(pos(0.7));
    textAlign(LEFT, TOP);
    text("Hercules:", pos(0.1), pos(2));
    text("Current Mission:", pos(0.1), pos(6));
    text("Game Stats:", pos(0.1), pos(8));
  
    //Stats/Info
    fill(100, 75, 50);
    textSize(pos(0.5));
    text("Level: " + playerLevel, pos(0.1), pos(3));
    text("XP: " + playerXP + "/" + xpToLevelUp, pos(0.1), pos(3.5));
    text("HP: " + playerHealth + "/" + playerMaxHealth, pos(0.1), pos(4));
    text("Attack: " + playerAtkPower, pos(0.1), pos(4.5));
    text(missionText, pos(0.1), pos(7));
    text("Battles Won: " + GS_battleWins, pos(0.1), pos(9));
    text("Battles Lost: " + GS_battleLosses, pos(0.1), pos(9.5));
    text("Battles Fled: " + GS_battleFlees, pos(0.1), pos(10));
    text("Enemies Fled: " + GS_enemyFlees, pos(0.1), pos(10.5));
    text("Attacks Used: " + GS_attacks, pos(0.1), pos(11));
    text("Attack Misses: " + GS_attackMisses, pos(0.1), pos(11.5));
    text("Defends Used: " + GS_defends, pos(5), pos(9));
    text("Heals Used: " + GS_heals, pos(5), pos(9.5));
    text("Str Attacks Used: " + GS_strAttacks, pos(5), pos(10));
    text("Str Attack Misses: " + GS_strAttackMisses, pos(5), pos(10.5));
    text("Times Rested: " + GS_rests, pos(5), pos(11));
  
    //Bars
    noStroke();
    fill(0);
    rect(pos(4), pos(3.6), pos(2), pos(0.3));
    rect(pos(4), pos(4.1), pos(2), pos(0.3));
    fill(170, 255, 0);
    rect(pos(4.04), pos(3.64), (playerXP / xpToLevelUp) * pos(1.92), pos(0.22));
    fill(0, 255, 145);
    rect(pos(4.04), pos(4.14), (playerHealth / playerMaxHealth) * pos(1.92), pos(0.22));
  
    //Images
    if (destroyedHideoutIntroSwitch) {
      image(herculesFIArray[2], pos(7), pos(3));
    }
    else if (playerHealth <= (playerMaxHealth / 4)) {
      image(herculesFIArray[4], pos(7), pos(3));
    }
    else {
      image(herculesFIArray[0], pos(7), pos(3));
    }
  
  }

  setCheckpoint() {
    this.checkpointArea = this.currentArea;
    this.checkpointX = player.xPos;
    this.checkpointY = player.yPos;
    cpSaved.instantiate();
  }

  transferToCheckpoint() {
    nextAreaData = currentAreaData.findArea(this.checkpointArea);
    this.currentArea = nextAreaData.areaName;
    this.transferToArea = this.checkpointArea;
    player.xPos = this.checkpointX;
    player.yPos = this.checkpointY;
    fadeObj.doSpecialTransferActions();
    this.setMapObjects();
    currentAreaData = nextAreaData;
    
  }

}


//Battle Object
class Battle {
  constructor(enemy) {
    this.enemy = enemy;

    this.playerDamageTaken = 0;
    this.playerHealFatigue = 0;
    this.playerDamaged = false;
    this.playerDefend = false;

    this.debounce = false;
    this.battleDebounce = false;

    this.enemyMaxHealth = 10;
    this.enemyHealth = this.enemyMaxHealth;
    this.enemyAtkPower = 0;
    this.xpAwarded = 0;
    this.enemyDamageTaken = 0;
    this.enemyTurn = 0;
    this.enemyChoice = 0;
    this.enemyTransparency = 255;
    this.enemyHealFatigue = 0;
    this.enemyDamaged = false;
    this.enemyDefend = false;
    this.enemyAttack = false;

    this.battleTextID = 0;
    this.levelUp = false;
    this.attackMiss = false;

    this.damageIndicatorX = 0;
    this.damageIndicatorY = 0;
    this.damageIndicatorT = 0;
    this.damageIndicatorSize = pos(0.2);

    this.timer = 0;
  }

  setup() {
    textbox = new TextBox("", "", "", 255, "none", "Battle", "none");
    //Random Enemy Setup
    if (this.enemy == "random") {
      if (currentAreaData.generalAreaTitle == "Test Area") {
        this.enemy = round(random(1,2));
        if (this.enemy == 1) {
          this.enemy = "Slime";
        }
        else if (this.enemy == 2) {
          this.enemy = "Lil' Chomper";
        }
      }
      else if ((currentAreaData.generalAreaTitle == "Inner Webs") || (currentAreaData.generalAreaTitle == "Outer Webs")) {
        this.enemy = round(random(1,3));
        if (this.enemy == 1) {
          this.enemy = "HiveWing Soldier R";
        }
        else if (this.enemy == 2) {
          this.enemy = "HiveWing Soldier Y";
        }
        else if (this.enemy == 3) {
          this.enemy = "HiveWing Soldier B";
        }
      
      }
      else if (currentAreaData.generalAreaTitle == "The Market") {
        this.enemy = round(random(1,2));
        if (this.enemy == 1) {
          this.enemy = "Armored Soldier O";
        }
        else if (this.enemy == 2) {
          this.enemy = "Armored Soldier Y";
        }
      
      }
      else if ((currentAreaData.generalAreaTitle == "Highlands") || (currentAreaData.generalAreaTitle == "Rocky Hill")) {
        this.enemy = "???";
      }

    }

    //Set Background
    if (currentAreaData.generalAreaTitle == "Test Area") {
      battleBG = "Test Area";
    }
    else if ((currentAreaData.generalAreaTitle == "Inner Webs") || (currentAreaData.generalAreaTitle == "Hercules' House") || (currentAreaData.generalAreaTitle == "The Median")) {
      battleBG = innerWebsBattleBG;
    }
    else if (currentAreaData.generalAreaTitle == "Outer Webs") {
      battleBG = outerWebsBattleBG;
    }
    else if ((currentAreaData.generalAreaTitle == "The Market") || (currentAreaData.generalAreaTitle == "Market Edge")  || (currentAreaData.generalAreaTitle == "Main Entrance")) {
      battleBG = marketBattleBG;
    }
    else if ((currentAreaData.generalAreaTitle == "Highlands") || (currentAreaData.generalAreaTitle == "Rocky Hill")) {
      battleBG = highlandsBattleBG;
    }
  
    //Set Enemy Images/Stats
    //enemyImgID is set to the id number of that enemy's normal battle sprite. Remember to have all three of an enemy's sprites lined up in order of
    //normal, attack, damaged!
    if (this.enemy == "Slime") {
      enemyImgID = 0;
      this.enemyMaxHealth = 40;
      this.enemyHealth = this.enemyMaxHealth;
      this.enemyAtkPower = 10;
      this.xpAwarded = 10;
    }
    else if (this.enemy == "Lil' Chomper") {
      enemyImgID = 3;
      this.enemyMaxHealth = 50;
      this.enemyHealth = this.enemyMaxHealth;
      this.enemyAtkPower = 10;
      this.xpAwarded = 15;
    }
    else if (this.enemy == "HiveWing Soldier R") {
      enemyImgID = 6;
      this.enemyMaxHealth = 50;
      this.enemyHealth = this.enemyMaxHealth;
      this.enemyAtkPower = 10;
      this.xpAwarded = 10;
    }
    else if (this.enemy == "HiveWing Soldier Y") {
      enemyImgID = 9;
      this.enemyMaxHealth = 40;
      this.enemyHealth = this.enemyMaxHealth;
      this.enemyAtkPower = 12;
      this.xpAwarded = 10;
    }
    else if (this.enemy == "HiveWing Soldier B") {
      enemyImgID = 12;
      this.enemyMaxHealth = 60;
      this.enemyHealth = this.enemyMaxHealth;
      this.enemyAtkPower = 8;
      this.xpAwarded = 10;
    }
    else if (this.enemy == "General Rhino") {
      enemyImgID = 15;
      this.enemyMaxHealth = 100;
      this.enemyHealth = this.enemyMaxHealth;
      this.enemyAtkPower = 13;
      this.xpAwarded = 50;
    }
    else if (this.enemy == "Armored Soldier O") {
      enemyImgID = 18;
      this.enemyMaxHealth = 80;
      this.enemyHealth = this.enemyMaxHealth;
      this.enemyAtkPower = 14;
      this.xpAwarded = 25;
    }
    else if (this.enemy == "Armored Soldier Y") {
      enemyImgID = 21;
      this.enemyMaxHealth = 70;
      this.enemyHealth = this.enemyMaxHealth;
      this.enemyAtkPower = 15;
      this.xpAwarded = 25;
    }
    else if (this.enemy == "???") {
      enemyImgID = 27;
      this.enemyMaxHealth = 100;
      this.enemyHealth = this.enemyMaxHealth;
      this.enemyAtkPower = 18;
      this.xpAwarded = 40;
    }
    else if (this.enemy == "Mantid") {
      enemyImgID = 24;
      this.enemyMaxHealth = 100;
      this.enemyHealth = this.enemyMaxHealth;
      this.enemyAtkPower = 15;
      this.xpAwarded = 100;
    }

  }


  //State Functions
  inBattle() {
    /*
    Moves:
    - Attack (10 Base Dmg, 20% Miss Rate)
    - Defend (Halve Next Dmg Taken)
    - Heal (Heal 20% Health, Lose a Turn)
    - Strong Attack (20 Base Dmg, 40% Miss Rate)
    */

    this.checkForEnd();

    //Clear and BG
    clear();
    this.drawBackground();
  
  
    //Draw Action Buttons
    this.drawActionButtons();


    //Cursor
    this.setCursor();


    //Draw Stats
    this.drawStats();


    //Draw Enemy
    this.drawEnemy();


    //Click Buttons
    this.checkButtonClicks();


    //Debounce Reset
    if (mouseIsPressed == false) {
      this.battleDebounce = false;
    }


    //Enemy Turn
    this.doEnemyTurn();


    //Draw Fadein Text
    if (fadeObj.mode == "battleStart") {
      this.battleTextID = 13;
      this.displayBattleText();
    }

  }

  onWin() {
    if (((this.timer <= 90) && (this.levelUp == false)) || ((this.timer <= 120) && (this.levelUp == true))) {
      //Clear and BG
      clear();
      tint(255, 255);
      this.drawBackground();
  
  
      //Action Buttons
      this.drawButtonsSimple();
  
  
      //Cursor
      cursor(ARROW);
  
  
      //Draw Stats
      this.drawStats();
  
  
      //Draw Enemy
      tint(255, this.enemyTransparency);
      image(battleArray[enemyImgID + 2], pos(3), pos(2));
  
  
      //Draw Text
      textbox.speaker = "Battle";
      textbox.text2 = "";
      textbox.icon = "none";
      if (this.timer < 30) {
        textbox.text1 = "You won!";
        textbox.draw();
      }
      else if (this.timer < 60) {
        textbox.text1 = "You got " + this.xpAwarded + "XP!";
        textbox.draw();
      }
      else if ((this.levelUp == true) && (this.timer < 90)) {
        textbox.text1 = "You reached level " + playerLevel + "!";
        textbox.draw();
      }
  
      //Update Vars
      if (this.timer < 30) {
        this.enemyTransparency = this.enemyTransparency - (255 / 30);
      }

      //Start Fade
      if (((this.timer == 60) && (this.levelUp == false)) || ((this.timer == 90) && (this.levelUp == true))) {
        fadeObj.fadeOut(30, 0, 255, 255, 255, "battleEnd");
      }
  
      this.timer += 1;
    }
      
  }

  onLose() {
    if (this.timer <= 120) {
      //Clear and BG
      clear();
      this.drawBackground();
  
  
      //Draw Action Buttons
      this.drawButtonsSimple();
  
  
      //Cursor
      cursor(ARROW);
  
  
      //Draw Stats
      this.drawStats();
  
  
      //Draw Enemy
      image(battleArray[enemyImgID], pos(3), pos(2));
  
  
      //Draw Text
      textbox.icon = "none";
      textbox.speaker = "Battle";
      textbox.text2 = "";
      textbox.text1 = "You lost!";
      textbox.draw();
  
  
      //Draw Fade
      if (this.timer == 30) {
        fadeObj.fadeOut(60, 30, 0, 0, 0, "battleEnd");
      }
  
      this.timer = this.timer + 1;
    }
      
  }

  onPlayerFlee() {
    if (this.timer < 60) {
      //Clear and BG
      clear();
      this.drawBackground();
  
  
      //Draw Action Buttons
      this.drawButtonsSimple();
  
  
      //Cursor
      cursor(ARROW);
  
  
      //Draw Stats
      this.drawStats();
  
  
      //Draw Enemy
      image(battleArray[enemyImgID], pos(3), pos(2));
  
  
      //Draw Text
      textbox.icon = "none";
      textbox.speaker = "Battle";
      textbox.text2 = "";
      textbox.text1 = "You flee!";
      textbox.draw();
  
  
      //Start Fade
      if (this.timer == 30) {
        fadeObj.fadeOut(30, 0, 255, 255, 255, "battleEnd");
      }
  
      this.timer += 1;
    }
      
  }

  onEnemyFlee() {
    if (this.timer < 60) {
      //Clear and BG
      clear();
      tint(255, 255);
      this.drawBackground();
  
  
      //Draw Action Buttons
      this.drawButtonsSimple();
  
  
      //Cursor
      cursor(ARROW);
  
  
      //Draw Stats
      this.drawStats();
  
  
      //Draw Enemy
      tint(255, this.enemyTransparency);
      image(battleArray[enemyImgID], pos(3), pos(2));
  
  
      //Draw Text
      textbox.icon = "none";
      textbox.speaker = "Battle";
      textbox.text2 = "";
      textbox.text1 = this.enemy + " flees!";
      textbox.draw();
  
  
      //Start Fade
      if (this.timer == 30) {
        fadeObj.fadeOut(30, 0, 255, 255, 255, "battleEnd");
      }
  
  
      //Update Vars
      if (this.timer < 30) {
        this.enemyTransparency = this.enemyTransparency - (255 / 30);
      }
  
      this.timer += 1;
    }
      
  }


  //Draw Functions
  drawBackground() {
    background(0);
    if (battleBG != "Test Area") {
      image(battleBG, 0, 0);
    }
    else {
      background(100, 255, 150);
    }

    //Textbox Backing Rect
    fill(0);
    noStroke();
    rect(0, pos(10), pos(10), pos(2));
  }

  drawActionButtons() {
    stroke(0);
    strokeWeight(pos(0.1));
    if ((mouseX >= pos(2)) && (mouseX <= pos(4)) && (mouseY >= pos(6.8)) && (mouseY <= pos(7.8)) && (this.enemyTurn == 0) && (fadeObj.checkFade("general") == false)) {
      fill(255, 0, 0);
    }
    else {
      fill(150, 0, 0);
    }

    rect(pos(2), pos(6.8), pos(2), pos(1)); //Atk
    if ((mouseX >= pos(6)) && (mouseX <= pos(8)) && (mouseY >= pos(6.8)) && (mouseY <= pos(7.8)) && (this.enemyTurn == 0) && (fadeObj.checkFade("general") == false)) {
      fill(0, 0, 255);
    }
    else {
      fill(0, 0, 150);
    }

    rect(pos(6), pos(6.8), pos(2), pos(1)); //Def
    if ((mouseX >= pos(2)) && (mouseX <= pos(4)) && (mouseY >= pos(8)) && (mouseY <= pos(9)) && (this.enemyTurn == 0) && (fadeObj.checkFade("general") == false)) {
      fill(100, 255, 200);
    }
    else {
      fill(25, 150, 100);
    }

    rect(pos(2), pos(8), pos(2), pos(1)); //Heal
    if ((mouseX >= pos(6)) && (mouseX <= pos(8)) && (mouseY >= pos(8)) && (mouseY <= pos(9)) && (this.enemyTurn == 0) && (fadeObj.checkFade("general") == false)) {
      fill(255, 150, 100);
    }
    else {
      fill(150, 75, 30);
    }

    rect(pos(6), pos(8), pos(2), pos(1)); //Str Atk
    if (battleScripted == false) {
      if ((mouseX >= pos(8.5)) && (mouseX <= pos(9.5)) && (mouseY >= pos(8.5)) && (mouseY <= pos(9.5)) && (this.enemyTurn == 0) && (fadeObj.checkFade("general") == false)) {
        fill(255, 255, 100);
      }
      else {
        fill(150, 150, 30);
      }
    
      rect(pos(8.5), pos(8.5), pos(1), pos(1)); //Flee
    }

    //Text
    noStroke();
    fill(0);
    textSize(pos(0.5));
    textAlign(LEFT, BOTTOM);
    text("Attack", pos(2.3), pos(7.5));
    text("Defend", pos(6.2), pos(7.5));
    text("Heal", pos(2.44), pos(8.7));
    textSize(pos(0.44));
    text("S. Attack", pos(6.12), pos(8.7));
    if (battleScripted == false) {
      text("Run", pos(8.58), pos(9.2));
    }

  }

  drawButtonsSimple() {
    //Draw Action Buttons
    stroke(0);
    strokeWeight(pos(0.1));
    fill(150, 0, 0);
    rect(pos(2), pos(6.8), pos(2), pos(1));
    fill(0, 0, 150);
    rect(pos(6), pos(6.8), pos(2), pos(1));
    fill(25, 150, 100);
    rect(pos(2), pos(8), pos(2), pos(1));
    fill(150, 75, 30);
    rect(pos(6), pos(8), pos(2), pos(1));
    if (battleScripted == false) {
      fill(150, 150, 30);
      rect(pos(8.5), pos(8.5), pos(1), pos(1)); //Flee
    }

    //Text
    noStroke();
    fill(0);
    textSize(pos(0.5));
    textAlign(LEFT, BOTTOM);
    text("Attack", pos(2.3), pos(7.5));
    text("Defend", pos(6.2), pos(7.5));
    text("Heal", pos(2.44), pos(8.7));
    textSize(pos(0.44));
    text("S. Attack", pos(6.12), pos(8.7));
    if (battleScripted == false) {
      text("Run", pos(8.58), pos(9.2));
    }
  }

  setCursor() {
    if ((mouseX >= pos(2)) && (mouseX <= pos(4)) && (mouseY >= pos(6.8)) && (mouseY <= pos(7.8)) && (this.enemyTurn == 0) && (fadeObj.checkFade("general") == false)) {
      cursor(HAND);
    }
    else if ((mouseX >= pos(6)) && (mouseX <= pos(8)) && (mouseY >= pos(6.8)) && (mouseY <= pos(7.8)) && (this.enemyTurn == 0) && (fadeObj.checkFade("general") == false)) {
      cursor(HAND);
    }
    else if ((mouseX >= pos(2)) && (mouseX <= pos(4)) && (mouseY >= pos(8)) && (mouseY <= pos(9)) && (this.enemyTurn == 0) && (fadeObj.checkFade("general") == false)) {
      cursor(HAND);
    }
    else if ((mouseX >= pos(6)) && (mouseX <= pos(8)) && (mouseY >= pos(8)) && (mouseY <= pos(9)) && (this.enemyTurn == 0) && (fadeObj.checkFade("general") == false)) {
      cursor(HAND);
    }
    else if ((mouseX >= pos(8.5)) && (mouseX <= pos(9.5)) && (mouseY >= pos(8.5)) && (mouseY <= pos(9.5)) && (this.enemyTurn == 0) && (fadeObj.checkFade("general") == false)) {
      if (battleScripted == false) {
        cursor(HAND);
      }

    }
    else {
      cursor(ARROW);
    }

  }

  drawStats() {
    noStroke();
    fill(0);
    textSize(pos(0.3));
    textAlign(CENTER, BOTTOM);
    text("You: " + playerHealth + "HP", pos(5), pos(9.5));
    text(this.enemy + ": " + this.enemyHealth + "HP", pos(5), pos(6.6));
    if (this.playerDefend == true) {
      image(defendIcon, pos(4.44), pos(8));
    }

    if (this.enemyDefend == true) {
      image(defendIcon, pos(2.5), pos(5));
    }

  }

  drawEnemy() {
    if (this.enemyDamaged == true) {
      image(battleArray[enemyImgID + 2], pos(3), pos(2));
    }
    else if (this.enemyAttack == true) {
      image(battleArray[enemyImgID + 1], pos(3), pos(2));
    }
    else {
      image(battleArray[enemyImgID], pos(3), pos(2));
    }

  }

  displayBattleText() {
    /*
    Battle Text IDs:
    1 Player Attack
    2 Player Miss
    3 Player Defend
    4 Enemy Attack
    5 Enemy Miss
    6 Enemy Defend
    7 Player Heal
    8 Enemy Heal
    9 Player Fatigue
    10 Enemy Fatigue
    11 Player Strong Attack
    12 Enemy Strong Attack
    13 Enemy Appears
    14 Player Fails to Flee
    15 Enemy Fails to Flee
    */
    
    textbox.speaker = "Battle";
    textbox.text2 = "";
    textbox.icon = "none";
    textbox.color = 255;
    if (this.battleTextID == 1) {
      textbox.text1 = "You attack!";
      textbox.draw();
    }
    else if (this.battleTextID == 2) {
      textbox.text1 = "You miss!";
      textbox.draw();
    }
    else if (this.battleTextID == 3) {
      textbox.text1 = "You defend!";
      textbox.draw();
    }
    else if (this.battleTextID == 4) {
      textbox.text1 = this.enemy + " attacks!";
      textbox.draw();
    }
    else if (this.battleTextID == 5) {
      textbox.text1 = this.enemy + " misses!";
      textbox.draw();
    }
    else if (this.battleTextID == 6) {
      textbox.text1 = this.enemy + " defends!";
      textbox.draw();
    }
    else if (this.battleTextID == 7) {
      textbox.text1 = "You heal!";
      textbox.draw();
    }
    else if (this.battleTextID == 8) {
      textbox.text1 = this.enemy + " heals!";
      textbox.draw();
    }
    else if (this.battleTextID == 9) {
      textbox.text1 = "You are tired!";
      textbox.draw();
    }
    else if (this.battleTextID == 10) {
      textbox.text1 = this.enemy + " is tired!";
      textbox.draw();
    }
    else if (this.battleTextID == 11) {
      textbox.text1 = "You str. attack!";
      textbox.draw();
    }
    else if (this.battleTextID == 12) {
      textbox.text1 = this.enemy + " str. attacks!";
      textbox.draw();
    }
    else if (this.battleTextID == 13) {
      textbox.text1 = this.enemy + " appeared!";
      textbox.draw();
    }
    else if (this.battleTextID == 14) {
      textbox.text1 = "You couldn't escape!";
      textbox.draw();
    }
    else if (this.battleTextID == 15) {
      textbox.text1 = this.enemy + " couldn't escape!";
      textbox.draw();
    }
  
  }

  displayEnemyDamageIndicator() {
    noStroke();
    textSize(this.damageIndicatorSize);
    textAlign(LEFT, BOTTOM);
    fill(0, 0, 0, this.damageIndicatorT);
    text("-" + this.enemyDamageTaken + "HP", this.damageIndicatorX, this.damageIndicatorY);
    this.damageIndicatorX += pos(0.02);
    this.damageIndicatorY -= pos(0.02);
    this.damageIndicatorT -= (255 / 30);
    this.damageIndicatorSize -= pos(0.02);
  }

  displayPlayerDamageIndicator() {
    noStroke();
    textSize(this.damageIndicatorSize);
    textAlign(LEFT, BOTTOM);
    fill(0, 0, 0, this.damageIndicatorT);
    text("-" + this.playerDamageTaken + "HP", this.damageIndicatorX, this.damageIndicatorY);
    this.damageIndicatorX += pos(0.02);
    this.damageIndicatorY -= pos(0.02);
    this.damageIndicatorT -= (255 / 30);
    this.damageIndicatorSize -= pos(0.02);
  }


  //Logic and Tests
  checkForEnd() {
    if ((playerHealth == 0) && (this.enemyTurn == 0)) {
      //Lose
      this.timer = 0;
      gameMode = "lostBattle";
      battleTheme.stop();
      sfxLoss.play();
    }
    else if ((this.enemyHealth == 0) && (this.enemyTurn == 30)) {
      //Win
      this.awardXP();
      this.timer = 0;
      gameMode = "wonBattle"
      battleTheme.stop();
      sfxBattleWin.play();
    }

  }

  checkButtonClicks() {
    if (this.playerHealFatigue == 0) {
      if ((mouseX >= pos(2)) && (mouseX <= pos(4)) && (mouseY >= pos(6.8)) && (mouseY <= pos(7.8)) && (this.enemyTurn == 0) && (mouseIsPressed == true) && (this.debounce == false) && (fadeObj.checkFade("general") == false)) {
        //Attack
        GS_attacks += 1;
        this.battleDebounce = true;
        this.attackMiss = round(random(1,5));
        if (this.attackMiss != 1) {
          //Attack Hits
          this.battleTextID = 1;
          sfxHit.play();
          if (this.enemyDefend == true) {
            this.enemyDamageTaken = round(playerAtkPower / 2);
            this.enemyHealth = this.enemyHealth - this.enemyDamageTaken;
            this.enemyDefend = false;
          }
          else {
            this.enemyDamageTaken = playerAtkPower;
            this.enemyHealth = this.enemyHealth - this.enemyDamageTaken;
          }
    
          if (this.enemyHealth < 0) {
            this.enemyHealth = 0;
          }
    
          this.enemyDamaged = true;
        }
        else {
          //Attack Misses
          GS_attackMisses += 1;
          sfxEvade.play();
          this.battleTextID = 2;
        }
    
        this.enemyTurn = 60;
      }
      else if ((mouseX >= pos(6)) && (mouseX <= pos(8)) && (mouseY >= pos(6.8)) && (mouseY <= pos(7.8)) && (this.enemyTurn == 0) && (mouseIsPressed == true) && (this.debounce == false) && (fadeObj.checkFade("general") == false)) {
        //Defend
        GS_defends += 1;
        sfxEquip.play();
        this.battleDebounce = true;
        this.playerDefend = true;
        this.battleTextID = 3;
        this.enemyTurn = 60;
      }
      else if ((mouseX >= pos(2)) && (mouseX <= pos(4)) && (mouseY >= pos(8)) && (mouseY <= pos(9)) && (this.enemyTurn == 0) && (mouseIsPressed == true) && (this.debounce == false) && (fadeObj.checkFade("general") == false)) {
        //Heal
        GS_heals += 1;
        sfxRegen.play();
        this.playerHealFatigue = 2;
        this.battleDebounce = true;
        this.battleTextID = 7;
        playerHealth = playerHealth + round(playerMaxHealth / 5);
        if (playerHealth > playerMaxHealth) {
          playerHealth = playerMaxHealth;
        }
    
        this.enemyTurn = 60;
      }
      else if ((mouseX >= pos(6)) && (mouseX <= pos(8)) && (mouseY >= pos(8)) && (mouseY <= pos(9)) && (this.enemyTurn == 0) && (mouseIsPressed == true) && (this.debounce == false) && (fadeObj.checkFade("general") == false)) {
        //Strong Attack
        GS_strAttacks += 1;
        this.battleDebounce = true;
        this.attackMiss = round(random(1,5));
        if (this.attackMiss >= 3) {
          //Attack Hits
          this.battleTextID = 11;
          sfxDowned.play();
          if (this.enemyDefend == true) {
            this.enemyDamageTaken = playerAtkPower;
            this.enemyHealth = this.enemyHealth - this.enemyDamageTaken;
            this.enemyDefend = false;
          }
          else {
            this.enemyDamageTaken = (playerAtkPower * 2);
            this.enemyHealth = this.enemyHealth - this.enemyDamageTaken;
          }
    
          if (this.enemyHealth < 0) {
            this.enemyHealth = 0;
          }
    
          this.enemyDamaged = true;
        }
        else {
          //Attack Misses
          GS_strAttackMisses += 1;
          sfxEvade.play();
          this.battleTextID = 2;
        }
    
        this.enemyTurn = 60;
      }
      else if ((mouseX >= pos(8.5)) && (mouseX <= pos(9.5)) && (mouseY >= pos(8.5)) && (mouseY <= pos(9.5)) && (this.enemyTurn == 0) && (mouseIsPressed == true) && (this.debounce == false) && (fadeObj.checkFade("general") == false)) {
        //Flee
        if (battleScripted == false) {
          let fleeChance = round(random(1,4));
          if (fleeChance != 1) {
            //Flee Succeeds
            GS_battleFlees += 1;
            gameMode = "playerFlee";
            battleTheme.stop();
            sfxEscape.play();
            this.timer = 0;
            return 0;
          }
          else {
            //Flee Fails
            this.battleTextID = 14;
            this.enemyTurn = 60;
          }
          
        }

      }

    }
    else if ((this.playerHealFatigue == 1) && (this.enemyTurn == 0)) {
      //Tired
      this.battleTextID = 9;
      this.enemyTurn = 60;
    }
  }

  doEnemyTurn() {
    noStroke();
    textSize(pos(1));
    textAlign(LEFT, BOTTOM);
    fill(0);
    if (this.enemyTurn > 0) {
        this.enemyTurn = this.enemyTurn - 1;
      if (this.enemyTurn == 59) {
        this.damageIndicatorX = pos(4.2);
        this.damageIndicatorY = pos(2);
        this.damageIndicatorT = 255;
        this.damageIndicatorSize = pos(0.6);
      }
      else if (this.enemyTurn > 30) {
        this.displayBattleText();
        if (this.enemyDamaged == true) {
          this.displayEnemyDamageIndicator();
        }

      }
      else if (this.enemyTurn == 30) {
        this.enemyDamaged = false;
        this.damageIndicatorX = pos(4.2);
        this.damageIndicatorY = pos(9);
        this.damageIndicatorT = 255;
        this.damageIndicatorSize = pos(0.6);


        //Enemy AI
        if (this.enemyHealFatigue == 0) {
          //Action Selection
          this.enemyAI();
        }
        else if (this.enemyHealFatigue == 1) {
          //Tired
          this.battleTextID = 10;
        }

      }
      else if ((this.enemyTurn < 30) && (this.enemyTurn > 1)) {
        this.displayBattleText();
        if (this.playerDamaged == true) {
          this.displayPlayerDamageIndicator();
        }
      }
      else if (this.enemyTurn == 1) {
        this.enemyAttack = false;
        this.playerDamaged = false;
        if (this.enemyHealFatigue != 0) {
          this.enemyHealFatigue = this.enemyHealFatigue - 1;
        }

        if (this.playerHealFatigue != 0) {
          this.playerHealFatigue = this.playerHealFatigue - 1;
        }

      }

    }

  }

  enemyAI() {
    if (this.enemyHealth != 0) {
      if (this.enemy == "Slime") {
        this.enemyChoice = round(random(1, 10));
        if (this.enemyChoice <= 3) {
          //Attack
          this.enemyAtkAction();
        }
        else if ((this.enemyChoice > 3) && (this.enemyChoice <= 6)) {
          //Check Defend
          if (this.enemyDefend == false) {
            //Defend
            this.enemyDefAction();
          }
          else {
            //Attack
            this.enemyAtkAction();
          }
  
        }
        else if (this.enemyChoice <= 8) {
          //Check Health
          if (this.enemyHealth <= round(this.enemyMaxHealth * 0.75)) {
            //Heal
            this.enemyHealAction();
          }
          else {
            //Attack
            this.enemyAtkAction()
          }
    
        }
        else {
          //Strong Attack
          this.enemyStrAtkAction();
        }
    
      }
      else if (this.enemy == "Lil' Chomper") {
        this.enemyChoice = round(random(1, 10));
        if (this.enemyChoice <= 4) {
          //Attack
          this.enemyAtkAction();
        }
        else if ((this.enemyChoice > 4) && (this.enemyChoice <= 6)) {
          //Check Defend
          if (this.enemyDefend == false) {
            //Defend
            this.enemyDefAction();
          }
          else {
            //Attack
            this.enemyAtkAction();
          }
  
        }
        else if (this.enemyChoice == 7) {
          //Check Health
          if (this.enemyHealth <= round(this.enemyMaxHealth * 0.75)) {
            //Heal
            this.enemyHealAction();
          }
          else {
            //Attack
            this.enemyAtkAction()
          }
    
        }
        else {
          //Strong Attack
          this.enemyStrAtkAction();
        }
    
      }
      else if (this.enemy == "HiveWing Soldier R") {
        this.enemyChoice = round(random(1, 10));
        if (this.enemyChoice <= 5) {
          //Attack
          this.enemyAtkAction();
        }
        else if ((this.enemyChoice > 5) && (this.enemyChoice <= 7)) {
          //Check Defend
          if (this.enemyDefend == false) {
            //Defend
            this.enemyDefAction();
          }
          else {
            //Attack
            this.enemyAtkAction();
          }
  
        }
        else if (this.enemyChoice == 8) {
          //Check Health
          if (this.enemyHealth <= round(this.enemyMaxHealth * 0.75)) {
            //Heal
            this.enemyHealAction();
          }
          else {
            //Attack
            this.enemyAtkAction()
          }
    
        }
        else {
          //Strong Attack
          this.enemyStrAtkAction();
        }
    
      }
      else if (this.enemy == "HiveWing Soldier Y") {
        this.enemyChoice = round(random(1, 10));
        if (this.enemyChoice <= 4) {
          //Attack
          this.enemyAtkAction();
        }
        else if ((this.enemyChoice > 4) && (this.enemyChoice <= 5)) {
          //Check Defend
          if (this.enemyDefend == false) {
            //Defend
            this.enemyDefAction();
          }
          else {
            //Attack
            this.enemyAtkAction();
          }
  
        }
        else if (this.enemyChoice == 6) {
          //Check Health
          if (this.enemyHealth <= round(this.enemyMaxHealth * 0.75)) {
            //Heal
            this.enemyHealAction();
          }
          else {
            //Attack
            this.enemyAtkAction()
          }
    
        }
        else {
          //Strong Attack
          this.enemyStrAtkAction();
        }
    
      }
      else if (this.enemy == "HiveWing Soldier B") {
        this.enemyChoice = round(random(1, 10));
        if (this.enemyChoice <= 4) {
          //Attack
          this.enemyAtkAction();
        }
        else if ((this.enemyChoice > 4) && (this.enemyChoice <= 5)) {
          //Check Defend
          if (this.enemyDefend == false) {
            //Defend
            this.enemyDefAction();
          }
          else {
            //Attack
            this.enemyAtkAction();
          }
  
        }
        else if ((this.enemyChoice > 5) && (this.enemyChoice <= 7)) {
          //Check Health
          if (this.enemyHealth <= round(this.enemyMaxHealth * 0.75)) {
            //Heal
            this.enemyHealAction();
          }
          else {
            //Attack
            this.enemyAtkAction()
          }
    
        }
        else {
          //Strong Attack
          this.enemyStrAtkAction();
        }
    
      }
      else if (this.enemy == "General Rhino") {
        this.enemyChoice = round(random(1, 10));
        if (this.enemyChoice <= 4) {
          //Attack
          this.enemyAtkAction();
        }
        else if ((this.enemyChoice > 4) && (this.enemyChoice <= 6)) {
          //Check Defend
          if (this.enemyDefend == false) {
            //Defend
            this.enemyDefAction();
          }
          else {
            //Attack
            this.enemyAtkAction();
          }
  
        }
        else if (this.enemyChoice == 7) {
          //Check Health
          if (this.enemyHealth <= round(this.enemyMaxHealth * 0.75)) {
            //Heal
            this.enemyHealAction();
          }
          else {
            //Attack
            this.enemyAtkAction()
          }
    
        }
        else {
          //Strong Attack
          this.enemyStrAtkAction();
        }
    
      }
      else if (this.enemy == "Armored Soldier O") {
        this.enemyChoice = round(random(1, 10));
        if (this.enemyChoice <= 5) {
          //Attack
          this.enemyAtkAction();
        }
        else if ((this.enemyChoice > 5) && (this.enemyChoice <= 7)) {
          //Check Defend
          if (this.enemyDefend == false) {
            //Defend
            this.enemyDefAction();
          }
          else {
            //Attack
            this.enemyAtkAction();
          }
  
        }
        else if (this.enemyChoice == 8) {
          //Check Health
          if (this.enemyHealth <= round(this.enemyMaxHealth * 0.75)) {
            //Heal
            this.enemyHealAction();
          }
          else {
            //Attack
            this.enemyAtkAction()
          }
    
        }
        else {
          //Strong Attack
          this.enemyStrAtkAction();
        }
    
      }
      else if (this.enemy == "Armored Soldier Y") {
        this.enemyChoice = round(random(1, 10));
        if (this.enemyChoice <= 4) {
          //Attack
          this.enemyAtkAction();
        }
        else if ((this.enemyChoice > 4) && (this.enemyChoice <= 5)) {
          //Check Defend
          if (this.enemyDefend == false) {
            //Defend
            this.enemyDefAction();
          }
          else {
            //Attack
            this.enemyAtkAction();
          }
  
        }
        else if (this.enemyChoice == 6) {
          //Check Health
          if (this.enemyHealth <= round(this.enemyMaxHealth * 0.75)) {
            //Heal
            this.enemyHealAction();
          }
          else {
            //Attack
            this.enemyAtkAction()
          }
    
        }
        else {
          //Strong Attack
          this.enemyStrAtkAction();
        }
    
      }
      else if (this.enemy == "Mantid") {
        this.enemyChoice = round(random(1, 10));
        if (this.enemyChoice <= 4) {
          //Attack
          this.enemyAtkAction();
        }
        else if ((this.enemyChoice > 4) && (this.enemyChoice <= 6)) {
          //Check Defend
          if (this.enemyDefend == false) {
            //Defend
            this.enemyDefAction();
          }
          else {
            //Attack
            this.enemyAtkAction();
          }
  
        }
        else if (this.enemyChoice == 7) {
          //Check Health
          if (this.enemyHealth <= round(this.enemyMaxHealth * 0.75)) {
            //Heal
            this.enemyHealAction();
          }
          else {
            //Attack
            this.enemyAtkAction()
          }
    
        }
        else {
          //Strong Attack
          this.enemyStrAtkAction();
        }
    
      }
      else if (this.enemy == "???") {
        this.enemyChoice = round(random(1, 10));
        if (this.enemyChoice <= 5) {
          //Attack
          this.enemyAtkAction();
        }
        else if ((this.enemyChoice > 5) && (this.enemyChoice <= 6)) {
          //Check Defend
          if (this.enemyDefend == false) {
            //Defend
            this.enemyDefAction();
          }
          else {
            //Attack
            this.enemyAtkAction();
          }
  
        }
        else if (this.enemyChoice == 7) {
          //Check Health
          if (this.enemyHealth <= round(this.enemyMaxHealth * 0.75)) {
            //Heal
            this.enemyHealAction();
          }
          else {
            //Attack
            this.enemyAtkAction()
          }
    
        }
        else {
          //Strong Attack
          this.enemyStrAtkAction();
        }
    
      }
  
    }
  
  }

  enemyAtkAction() {
    this.attackMiss = round(random(1,5));
    if (this.attackMiss != 1) {
      //Attack Hits
      this.playerDamaged = true;
      sfxHit.play();
      if (this.playerDefend == true) {
        this.playerDamageTaken = round(this.enemyAtkPower / 2);
        playerHealth = playerHealth - this.playerDamageTaken;
        this.playerDefend = false;
      }
      else {
        this.playerDamageTaken = this.enemyAtkPower;
        playerHealth = playerHealth - this.playerDamageTaken;
      }
    
      if (playerHealth < 0) {
        playerHealth = 0;
      }
    
      this.battleTextID = 4;
    }
    else {
      //Attack Misses
      sfxEvade.play();
      this.battleTextID = 5;
    }
            
    this.enemyAttack = true;
  }

  enemyDefAction() {
    sfxEquip.play();
    this.enemyDefend = true;
    this.battleTextID = 6;
  }

  enemyHealAction() {
    sfxRegen.play();
    this.battleTextID = 8;
    this.enemyHealth = this.enemyHealth + round(this.enemyMaxHealth / 5);
    if (this.enemyHealth > this.enemyMaxHealth) {
      this.enemyHealth = this.enemyMaxHealth;
    }
  
    this.enemyHealFatigue = 2;
  }

  enemyStrAtkAction() {
    this.attackMiss = round(random(1,5));
    if (this.attackMiss >= 3) {
      //Attack Hits
      this.playerDamaged = true;
      sfxDowned.play();
      if (this.playerDefend == true) {
        this.playerDamageTaken = this.enemyAtkPower;
        playerHealth = playerHealth - this.playerDamageTaken;
        this.playerDefend = false;
      }
      else {
        this.playerDamageTaken = (this.enemyAtkPower * 2);
        playerHealth = playerHealth - this.playerDamageTaken;
      }
    
      if (playerHealth < 0) {
        playerHealth = 0;
      }
    
      this.battleTextID = 12;
    }
    else {
      //Attack Misses
      sfxEvade.play();
      this.battleTextID = 5;
    }
            
    this.enemyAttack = true;
  }

  enemyFleeAction() {
    let fleeChance = round(random(1,4));
    if (fleeChance != 1) {
      //Flee Succeeds
      gameMode = "enemyFlee";
      battleTheme.stop();
      sfxEscape.play();
      this.timer = 0;
      return 0;
    }
    else {
      //Flee Fails
      this.battleTextID = 15;
    }
  }

  awardXP() {
    playerXP = playerXP + this.xpAwarded;
    while (playerXP >= xpToLevelUp) {
      this.levelUp = true;
      playerXP = playerXP - xpToLevelUp;
      xpToLevelUp = round(xpToLevelUp * 1.5);
      playerLevel = playerLevel + 1;
      playerMaxHealth = playerMaxHealth + 5;
      playerAtkPower = playerAtkPower + 2;
    }
  }
  
}


//Area Object
class Area {
  constructor(areaName, generalAreaTitle, hPosition, vPosition, areaInteractsArray, background, music, musicVolume, lightLevel, doEncounters) {
    this.areaName = areaName; //The specific name of the area. For setting proper tile arrays.
    this.generalAreaTitle = generalAreaTitle; //The name of the group of areas that this one falls into. For area name box.
    this.hPosition = hPosition; //Horizontal position of the area relative to the starting area (0, 0). Negative values are left, positive are right.
    this.vPosition = vPosition; //Vertical position of the area relative to the starting area (0, 0). Negative values are up, positive are down.
    this.areaInteractsArray = areaInteractsArray; //The array of interacts corresponding to this area. Set to 0 if there are no interacts in this area.
    this.background = background;
    this.music = music; //Background music that plays in this area. Set to "none" for no music.
    this.musicVolume = musicVolume; //Volume of background music.
    this.lightLevel = lightLevel; //The light level of this area. Set to a value between 0 (full bright) and 255 (full dark) or "cycle" for the day/night cycle.
    this.doEncounters = doEncounters; //Set to true or false. Determines whether random encounters occur throughout the area.
  }

  //Determines whether an area is located next to the current area in the given relative direction.
  //Returns that area's object if it is found, and null if no neighboring area is found.
  findNeighbor(relativePosition) {
    for (let i = 0; i < areasArray.length; i++) {
      if (relativePosition == "up") {
        if ((areasArray[i].vPosition == (currentAreaData.vPosition - 1)) && (areasArray[i].hPosition == currentAreaData.hPosition)) {
          return areasArray[i];
        }

      }
      else if (relativePosition == "down") {
        if ((areasArray[i].vPosition == (currentAreaData.vPosition + 1)) && (areasArray[i].hPosition == currentAreaData.hPosition)) {
          return areasArray[i];
        }

      }
      else if (relativePosition == "left") {
        if ((areasArray[i].hPosition == (currentAreaData.hPosition - 1)) && (areasArray[i].vPosition == currentAreaData.vPosition)) {
          return areasArray[i];
        }

      }
      else if (relativePosition == "right") {
        if ((areasArray[i].hPosition == (currentAreaData.hPosition + 1)) && (areasArray[i].vPosition == currentAreaData.vPosition)) {
          return areasArray[i];
        }

      }

    }

    return null;

  }

  //Finds an area's data based on that area's name, and returns it if found. Returns null if not found.
  findArea(name) {
    for (let i = 0; i < areasArray.length; i++) {
      if (areasArray[i].areaName == name) {
        return areasArray[i];
      }
      
    }
    return null;
  }

}


//Player Object
class Player {
  constructor(x, y) {
    this.xPos = x;
    this.yPos = y;
    this.moveDebounce = 0;
    this.moveDirection = "none";
    this.direction = "down";
  }


  //Draw Function
  draw() {
    image(playerSprite, this.xPos, this.yPos);
  }


  //Move Function
  move(direction) {
    if ((this.moveDebounce != 0) && (direction != "none")) {
      if (direction == "up") {
        this.yPos -= pos(movementStep);
      }
      else if (direction == "down") {
        this.yPos += pos(movementStep);
      }
      else if (direction == "left") {
        this.xPos -= pos(movementStep);
      }
      else if (direction == "right") {
        this.xPos += pos(movementStep);
      }
  
      //Check for transfers, cutscenes, and encounters
      if ((this.moveDebounce == 1) && (fadeObj.checkFade("general") == false) && (interacting == false)) {
        this.xPos = round(this.xPos);
        this.yPos = round(this.yPos);
        checkObj.checkTransfer();
        if ((this.xPos != 0) && (this.xPos != pos(9)) && (this.yPos != 0) && (this.yPos != pos(9)) && (doRandomEncounters == true)) {
          if (mapObj.encounterArea == true) {
            if ((doTallGrass || mapObj.currentArea.areaName == "Test Area 2") && checkObj.checkInsideEncounter() == true) {
              mapObj.encounterChance = round(random(1,7));
              if (mapObj.encounterChance == 7) {
                fadeObj.fadeOut(30, 0, 255, 255, 255, "battleStart");
                sfxBattleStart.play();
                battleObj = new Battle("random");
                battleScripted = false;
              }
              else {
                encounterBufferSteps -= 1;
              }
        
            }
            //Whole Area Encounters
            else {
              mapObj.encounterChance = round(random(1,7));
              if ((mapObj.encounterChance == 7) && (encounterBufferSteps == 0)) {
                fadeObj.fadeOut(30, 0, 255, 255, 255, "battleStart");
                sfxBattleStart.play();
                battleObj = new Battle("random");
                battleScripted = false;
                encounterBufferSteps = 5;
              }
              else {
                if (encounterBufferSteps > 0) {
                  encounterBufferSteps -= 1;
                }
              }
            }
          }
        }
  
      }

      if (this.moveDebounce > 0) {
        this.moveDebounce -= 1;
      }
    }
    else if (this.moveDebounce != 0) {
      if (this.moveDebounce > 0) {
        this.moveDebounce -= 1;
      }
    }
    else if ((this.moveDebounce == 0) && (direction != "none")) {
      if (interacting == false) {
        this.moveDirection = "none";
      }
      else {
        getInteract("continue").interact();
      } 
      
    }

    
    
  }


  //Change Direction Function
  changeDirection(direction) {
    if (direction == "up") {
      playerSprite = intArray[3];
      this.direction = "up";
    }
    else if (direction == "down") {
      playerSprite = intArray[1];
      this.direction = "down";
    }
    else if (direction == "left") {
      playerSprite = intArray[0];
      this.direction = "left";
    }
    else if (direction == "right") {
      playerSprite = intArray[2];
      this.direction = "right";
    }
    else {
      print("Unable to turn due to invalid direction.");
    }
  }
}


//Wall Object
class Tile {
  constructor(x, y, type) {
    this.xPos = x;
    this.yPos = y;
    this.type = type;
  }


  draw() {
    noStroke();
    image(tileArray[this.type], this.xPos, this.yPos);
  }


  //Check Collide Function
  checkCollide(direction) {
    if ((this.type != 9) && (this.type != 10) && (this.type != 11)) {
      if (direction == "up") {
        if ((player.xPos == this.xPos) && (player.yPos == this.yPos + pos(1))) {
          //print("Collision at " + this.xPos + ", " + this.yPos + ".");
          return(true);
        }
        else {
          return(false);
        }
    
      }
      else if (direction == "down") {
        if ((player.xPos == this.xPos) && (player.yPos == this.yPos - pos(1))) {
          //print("Collision at " + this.xPos + ", " + this.yPos + ".");
          return(true);
        }
        else {
          return(false);
        }
        
      }
      else if (direction == "left") {
        if ((player.yPos == this.yPos) && (player.xPos == this.xPos + pos(1))) {
          //print("Collision at " + this.xPos + ", " + this.yPos + ".");
          return(true);
        }
        else {
          return(false);
        }
        
      }
      else if (direction == "right") {
        if ((player.yPos == this.yPos) && (player.xPos == this.xPos - pos(1))) {
          //print("Collision at " + this.xPos + ", " + this.yPos + ".");
          return(true);
        }
        else {
          return(false);
        }
        
      }
    }
    else {
      return(false);
    }

  }

}


//Interact Object
class Interact {
  constructor(x, y, direction, id, textureID) {
    this.xPos = x;
    this.yPos = y;
    this.direction = direction;
    this.id = id
    if (textureID == null) { //TEMPORARY REMOVE WHEN ALL TEXTUREIDS ADDED
      this.textureID = 0;
    }
    else {
      this.textureID = textureID;
    }
    this.pActionDebounce = 10;
    this.pActionStep = 0;
    this.interactStep = 0;
    this.moveDirection = "none";
    this.remove = false;
    this.selfSwitchA = false;
    this.selfSwitchB = false;
    this.autoAdvance = false;
    this.moveDebounce = 0;
  }


  /*
  Interact ID Guide:
  1 - Textbox Example
  2 - Passive Turning Example
  3 - Movement Example
  4 - Teleporter Example
  5 - Interact Type Switch Example
  6 - Interact Deletion Example

  7 - Bed
  33 - Dummy 1
  34 - Dummy 2
  67 - Dummy 3
  68 - Dummy 4

  8 - Intro Hive Soldier
  9 - Intro Hive Soldier Defeated
  10 - "Glad To Be In The Inner Webs" Snooty SilkWing Y (Inner Webs South)
  11 - "This Place Is Getting Crowded" Observant SilkWing B (Inner Webs West)
  12 - Mantid (In House)
  13 - Median Guard
  14 - Mantid Bed
  15 - Hercules Rest Reminder Note
  16 - "I always knew you were trouble!" Judgemental SilkWing P (Inner Webs East)
  17 - "D-Don't talk to me!" Scared SilkWing DB (Inner Webs East)
  18 - "That's totally crazy dude!" Laid Back SilkWing Y (Inner Webs Center)
  19 - Abandoned House Intro
  20 - "Don't fall behind!" Dilligent SilkWing P (Inner Webs North)
  21 - Median Guard Battle
  22 - Median Guard Defeated
  23 - Hercules House Sign
  24 - Mantid House Sign
  25 - Abandoned House Sign
  26 - Median Sign
  27 - Propoganda Sign "Vigilant"
  28 - "I swear I saw it!" Bewildered SilkWing B (Outer Webs Center)
  29 - "Sure you did." Skeptical SilkWing DB (Outer Webs Center)
  30 - Stairwell Top Sign
  32 - Rhino Battle 1

  31 - Stairwell Bottom Sign
  35 - "Best in the hive!" Focused SilkWing PI (Inner Webs South)
  36 - "So unreliable." Demanding HiveWing Y (Market Entrance) / "I'll remember!" Forgetful SilkWing P (Market Entrance)
  37 - "Thank Clearsight." Relieved SilkWing B (Market Entrance)
  38 - "Ho ho!" Hasty Salesdragon HiveWing R (Market North)
  39 - "Have our hides..." Frusterated SilkWing G (Market North) / "I'm sorry!" Tired SilkWing PI (Market North)
  40 - "Get your bread here!" Bread Salesdragon SilkWing DB (Market North)
  41 - "Try them!" Bed Salesdragon SilkWing P (Bed Store)
  42 - "Not now!" Senior Baker SilkWing B (Bakery)
  43 - "Where is it!" Assistant Baker SilkWing G (Bakery)
  44 - "Good luck!" Head Baker HiveWing O (Bakery)
  45 - Bed Store Sign
  46 - Bakery Sign
  47 - "Got a hole in your wall?" Treestuff Salesdragon SilkWing DB (Market East)
  48 - "Ah ah!" Glassware Salesdragon SilkWing B (Market East)
  49 - "What's all this fuss?" Elderly HiveWing R (Market East)
  50 - "World of hurt!" Burly Soldier Armored O (Market East) / "Yeah!" Brawny Soldier Armored Y (Market East)
  51 - "Pots for days!" Pot Salesdragon HiveWing B (Market Edge North)
  52 - "So many pots..." Curious SilkWing DB (Market Edge North)
  53 - "I can't decide!" Indecisive SilkWing Y (Market Edge North)
  54 - "Are you alright?" Concerned SilkWing Pi (Market Edge North)
  55 - "I know what I saw." Scared Soldier Armored Y (Market Edge East)
  56 - "Thanks pal." Sneaky SilkWing B (Market Edge West)
  57 - "It's really you!" Fanboy SilkWing Y (Market Center)
  58 - "From this way!" Burly Soldier Armored O (Market Center) / "Just you wait!" Brawny Soldier Armored Y (Market Center)
  59 - "Please...?" Plant Salesdragon SilkWing Pi (Market Center)
  60 - "The what for." Disgruntled SilkWing P (Market Center)
  61 - "Most vibrant flowers around!" Flower Salesdragon SilkWing B (Market West)
  62 - "Another SilkWing?" Book Salesdragon HiveWing O (Market West)
  63 - "They all look so good!" Scholarly SilkWing DB (Market West)
  64 - "Hey Herc!" Helpful SilkWing G (Market West)
  65 - Part 2 Intro
  66 - Rhino Fight 2

  69 - Spinning Gnat
  70 - Part 3 Intro
  71 - Gnat Encounter
  72 - Midway Scene
  73 - Mantid Fight

  74 - "Do us proud" Friendly Rebel DB (Main Room)
  75 - Magenta (Main Room)
  76 - "Oh wow!" Bubbly Rebel Pi (Main Room)
  77 - "You look tough" Skeptical Rebel P (Main Room)
  78 - Mantid and Guard (Storage Room)
  79 - Rebel Leader (Meeting Room)
  80 - Hideout Bed
  85 - Hideout Exit
  87 - Hideout Intro

  81 - Ded Derg
  82 - Scared Mantid
  83 - Panther
  84 - Hideout Destroyed Bed
  86 - Hideout Destroyed Exit
  88 - Hideout Destroyed Intro
  89 - Final Scene

  */

  /*
  Character Text Colors:
  Example - 255, 255, 225
  Hercules - 255, 252, 219
  Mantid - 133, 255, 204
  Rhino - 228, 172, 164
  Magenta - 247, 216, 255
  SilkWing Blue - 150, 150, 225
  SilkWing Yellow - 225, 255, 100
  SilkWing Purple - 200, 165, 255
  SilkWing Dark Blue - 50, 50, 255
  SilkWing Pink - 255, 174, 206
  SilkWing Green - 140, 213, 129
  HiveWing Red - 255, 0, 0
  HiveWing Yellow - 255, 255, 0
  HiveWing Black - 200, 200, 200
  HiveWing Orange - 255, 82, 0
  Armored Soldier Orange - 255, 82, 0
  Armored Soldier Yellow - 219, 255, 34
  Notes - 255, 242, 210
  Sign - 200, 200, 200
  Wasp - Outline 255, 238, 0 Black Inner
  */


  /*
  Draw Function:
  This function decides which sprite to draw to the screen for each interact based on that interact's textureID.
  Interacts that can face in multiple directions are given special if/else branches for each of the directions. It is recommended that these interacts have their
  four sprites laid out in a row on the spritesheet, with the first in that row being used as the indicator in the fist conditional (where the names of each
  graphic set are commented) and then it and the other three sprites being linked with each of the four directions. An ID of -1 means no sprite is drawn.
  */
  draw() { 
    this.move(this.moveDirection);
    if (this.textureID == -1) { //No Sprite

    }
    else if (this.textureID == 0) { //Hercules
      if (this.direction == "left") {
        image(intArray[0], this.xPos, this.yPos);
      }
      else if (this.direction == "down") {
        image(intArray[1], this.xPos, this.yPos);
      }
      else if (this.direction == "right") {
        image(intArray[2], this.xPos, this.yPos);
      }
      else if (this.direction == "up") {
        image(intArray[3], this.xPos, this.yPos);
      }
    }
    else if (this.textureID == 4) { //Mantid
      if (this.direction == "left") {
        image(intArray[4], this.xPos, this.yPos);
      }
      else if (this.direction == "down") {
        image(intArray[5], this.xPos, this.yPos);
      }
      else if (this.direction == "right") {
        image(intArray[6], this.xPos, this.yPos);
      }
      else if (this.direction == "up") {
        image(intArray[7], this.xPos, this.yPos);
      }
    }
    else if (this.textureID == 10) { //Magenta
      if (this.direction == "left") {
        image(intArray[10], this.xPos, this.yPos);
      }
      else if (this.direction == "down") {
        image(intArray[11], this.xPos, this.yPos);
      }
      else if (this.direction == "right") {
        image(intArray[12], this.xPos, this.yPos);
      }
      else if (this.direction == "up") {
        image(intArray[13], this.xPos, this.yPos);
      }
    }
    else if (this.textureID == 14) { //Rhino
      if (this.direction == "left") {
        image(intArray[14], this.xPos, this.yPos);
      }
      else if (this.direction == "down") {
        image(intArray[15], this.xPos, this.yPos);
      }
      else if (this.direction == "right") {
        image(intArray[16], this.xPos, this.yPos);
      }
      else if (this.direction == "up") {
        image(intArray[17], this.xPos, this.yPos);
      }
    }
    else if (this.textureID == 20) { //Yellow SilkWing
      if (this.direction == "left") {
        image(intArray[20], this.xPos, this.yPos);
      }
      else if (this.direction == "down") {
        image(intArray[21], this.xPos, this.yPos);
      }
      else if (this.direction == "right") {
        image(intArray[22], this.xPos, this.yPos);
      }
      else if (this.direction == "up") {
        image(intArray[23], this.xPos, this.yPos);
      }
    }
    else if (this.textureID == 24) { //Blue SilkWing
      if (this.direction == "left") {
        image(intArray[24], this.xPos, this.yPos);
      }
      else if (this.direction == "down") {
        image(intArray[25], this.xPos, this.yPos);
      }
      else if (this.direction == "right") {
        image(intArray[26], this.xPos, this.yPos);
      }
      else if (this.direction == "up") {
        image(intArray[27], this.xPos, this.yPos);
      }
    }
    else if (this.textureID == 30) { //Purple SilkWing
      if (this.direction == "left") {
        image(intArray[30], this.xPos, this.yPos);
      }
      else if (this.direction == "down") {
        image(intArray[31], this.xPos, this.yPos);
      }
      else if (this.direction == "right") {
        image(intArray[32], this.xPos, this.yPos);
      }
      else if (this.direction == "up") {
        image(intArray[33], this.xPos, this.yPos);
      }
    }
    else if (this.textureID == 34) { //Dark Blue SilkWing
      if (this.direction == "left") {
        image(intArray[34], this.xPos, this.yPos);
      }
      else if (this.direction == "down") {
        image(intArray[35], this.xPos, this.yPos);
      }
      else if (this.direction == "right") {
        image(intArray[36], this.xPos, this.yPos);
      }
      else if (this.direction == "up") {
        image(intArray[37], this.xPos, this.yPos);
      }
    }
    else if (this.textureID == 40) { //Pink SilkWing
      if (this.direction == "left") {
        image(intArray[40], this.xPos, this.yPos);
      }
      else if (this.direction == "down") {
        image(intArray[41], this.xPos, this.yPos);
      }
      else if (this.direction == "right") {
        image(intArray[42], this.xPos, this.yPos);
      }
      else if (this.direction == "up") {
        image(intArray[43], this.xPos, this.yPos);
      }
    }
    else if (this.textureID == 44) { //Green SilkWing
      if (this.direction == "left") {
        image(intArray[44], this.xPos, this.yPos);
      }
      else if (this.direction == "down") {
        image(intArray[45], this.xPos, this.yPos);
      }
      else if (this.direction == "right") {
        image(intArray[46], this.xPos, this.yPos);
      }
      else if (this.direction == "up") {
        image(intArray[47], this.xPos, this.yPos);
      }
    }
    else if (this.textureID == 50) { //Red HiveWing
      if (this.direction == "left") {
        image(intArray[50], this.xPos, this.yPos);
      }
      else if (this.direction == "down") {
        image(intArray[51], this.xPos, this.yPos);
      }
      else if (this.direction == "right") {
        image(intArray[52], this.xPos, this.yPos);
      }
      else if (this.direction == "up") {
        image(intArray[53], this.xPos, this.yPos);
      }
    }
    else if (this.textureID == 54) { //Yellow HiveWing
      if (this.direction == "left") {
        image(intArray[54], this.xPos, this.yPos);
      }
      else if (this.direction == "down") {
        image(intArray[55], this.xPos, this.yPos);
      }
      else if (this.direction == "right") {
        image(intArray[56], this.xPos, this.yPos);
      }
      else if (this.direction == "up") {
        image(intArray[57], this.xPos, this.yPos);
      }
    }
    else if (this.textureID == 60) { //Black HiveWing
      if (this.direction == "left") {
        image(intArray[60], this.xPos, this.yPos);
      }
      else if (this.direction == "down") {
        image(intArray[61], this.xPos, this.yPos);
      }
      else if (this.direction == "right") {
        image(intArray[62], this.xPos, this.yPos);
      }
      else if (this.direction == "up") {
        image(intArray[63], this.xPos, this.yPos);
      }
    }
    else if (this.textureID == 64) { //Orange HiveWing
      if (this.direction == "left") {
        image(intArray[64], this.xPos, this.yPos);
      }
      else if (this.direction == "down") {
        image(intArray[65], this.xPos, this.yPos);
      }
      else if (this.direction == "right") {
        image(intArray[66], this.xPos, this.yPos);
      }
      else if (this.direction == "up") {
        image(intArray[67], this.xPos, this.yPos);
      }
    }
    else if (this.textureID == 70) { //Orange Armored HiveWing
      if (this.direction == "left") {
        image(intArray[70], this.xPos, this.yPos);
      }
      else if (this.direction == "down") {
        image(intArray[71], this.xPos, this.yPos);
      }
      else if (this.direction == "right") {
        image(intArray[72], this.xPos, this.yPos);
      }
      else if (this.direction == "up") {
        image(intArray[73], this.xPos, this.yPos);
      }
    }
    else if (this.textureID == 74) { //Yellow Armored HiveWing
      if (this.direction == "left") {
        image(intArray[74], this.xPos, this.yPos);
      }
      else if (this.direction == "down") {
        image(intArray[75], this.xPos, this.yPos);
      }
      else if (this.direction == "right") {
        image(intArray[76], this.xPos, this.yPos);
      }
      else if (this.direction == "up") {
        image(intArray[77], this.xPos, this.yPos);
      }
    }
    else if (this.textureID == 80) { //Gnat
      if (this.direction == "left") {
        image(intArray[80], this.xPos, this.yPos);
      }
      else if (this.direction == "down") {
        image(intArray[81], this.xPos, this.yPos);
      }
      else if (this.direction == "right") {
        image(intArray[82], this.xPos, this.yPos);
      }
      else if (this.direction == "up") {
        image(intArray[83], this.xPos, this.yPos);
      }
    }
    else if (this.textureID == 84) { //Panther
      if (this.direction == "left") {
        image(intArray[84], this.xPos, this.yPos);
      }
      else if (this.direction == "down") {
        image(intArray[85], this.xPos, this.yPos);
      }
      else if (this.direction == "right") {
        image(intArray[86], this.xPos, this.yPos);
      }
      else if (this.direction == "up") {
        image(intArray[87], this.xPos, this.yPos);
      }
    }
    else { //All other textures are set directly.
      image(intArray[this.textureID], this.xPos, this.yPos);
    }

  }


  //Check Collide Function
  checkCollide(direction) {
    if (direction == "up") {
      if ((player.xPos == this.xPos) && (player.yPos == this.yPos + pos(1))) {
        //print("Interact collision at " + this.xPos + ", " + this.yPos + ".");
        return(true);
      }
      else {
        return(false);
      }
  
    }
    else if (direction == "down") {
      if ((player.xPos == this.xPos) && (player.yPos == this.yPos - pos(1))) {
        //print("Interact collision at " + this.xPos + ", " + this.yPos + ".");
        return(true);
      }
      else {
        return(false);
      }
      
    }
    else if (direction == "left") {
      if ((player.yPos == this.yPos) && (player.xPos == this.xPos + pos(1))) {
        //print("Interact collision at " + this.xPos + ", " + this.yPos + ".");
        return(true);
      }
      else {
        return(false);
      }
      
    }
    else if (direction == "right") {
      if ((player.yPos == this.yPos) && (player.xPos == this.xPos - pos(1))) {
        //print("Interact collision at " + this.xPos + ", " + this.yPos + ".");
        return(true);
      }
      else {
        return(false);
      }
      
    }

  }


  //Interaction Function
  interact() {
    //print("Interact called on interact " + this.id);
    //Text Example
    if (this.id == 1) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.changeDirection("player");
        this.createTextbox(
          "Text Example",
          "This is some text!",
          "Line 2",
          "Line 3",
          "rgb(255, 255, 225)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Text Example",
          "Isn't it great!",
          "AAAAAAAAAAAAAAAAAAAAAA",
          "AAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
          "rgb(255, 255, 225)",
          "none",
          "TBA",
        );
      }
      else if (this.interactStep == 2) {
        this.setDebounce(10);
        this.incrementStep();
        this.changeDirection("up");
        this.createTextbox(
          "Text Example",
          "Look over there!",
          "",
          "Howdy Howdy",
          "rgb(255, 255, 225)",
          "none",
          magentaFIArray[0],
        );
      }
      else if (this.interactStep == 3) {
        this.setDebounce(10);
        this.setStep(0);
        this.clearTextbox();
        this.changeDirection("left");
        this.endInteract();
      }

    }
    //Passive Turning Example
    else if (this.id == 2) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.changeDirection("player");
        this.createTextbox(
          "Spinning Example",
          "I like spinning!",
          "",
          "",
          "rgb(255, 255, 225)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.setDebounce(10);
        this.setStep(0);
        this.clearTextbox();
        this.endInteract();
      }

    }
    //Movement Example
    else if (this.id == 3) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.changeDirection("player");
        this.createTextbox(
          "Moving Example",
          "Ah go away!",
          "",
          "",
          "rgb(255, 255, 225)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.setDebounce(movementTime);
        this.incrementStep();
        this.clearTextbox();
        this.changeDirection("right");
        this.setMove("right");
      }
      else if (this.interactStep == 2) {
        this.setDebounce(movementTime);
        this.incrementStep();
        this.changeDirection("up");
        this.setMove("up");
      }
      else if (this.interactStep == 3) {
        this.setDebounce(movementTime);
        this.incrementStep();
        this.changeDirection("up");
        this.setMove("up");
      }
      else if (this.interactStep == 4) {
        this.setDebounce(movementTime);
        this.incrementStep();
        this.changeDirection("up");
        this.setMove("up");
      }
      else if (this.interactStep == 5) {
        this.setDebounce(movementTime);
        this.incrementStep();
        this.changeDirection("left");
        this.setMove("left");
      }
      else if (this.interactStep == 6) {
        this.setDebounce(movementTime);
        this.incrementStep();
        this.changeDirection("left");
        this.setMove("left");
      }
      else if (this.interactStep == 7) {
        this.setDebounce(movementTime);
        this.incrementStep();
        this.changeDirection("up");
        this.setMove("up");
      }
      else if (this.interactStep == 8) {
        this.setDebounce(movementTime);
        this.incrementStep();
        this.changeDirection("up");
        this.setMove("up");
      }
      else if (this.interactStep == 9) {
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //Teleporter Example
    else if (this.id == 4) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.changeDirection("player");
        this.createTextbox(
          "Transfer Example",
          "Teleport!",
          "",
          "",
          "rgb(255, 255, 225)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.transferPlayer(
          "Test Area 1",
          3, 3,
          "up",
          30, 0,
          255, 255, 255,
        );
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //Interact Type Switch Example
    else if (this.id == 5) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.changeDirection("player");
        this.createTextbox(
          "Interact Switch Example",
          "I am bed now.",
          "",
          "",
          "rgb(255, 255, 225)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.changeInteract(7);
        this.changeTexture(90);
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //Interact Deletion Example
    else if (this.id == 6) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.changeDirection("player");
        this.createTextbox(
          "Interact Delete Example",
          "I am dead now.",
          "",
          "",
          "rgb(255, 255, 225)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.destroyInteract();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    } 
    //Bed
    else if (this.id == 7) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        mapObj.setCheckpoint();
        if (playerHealth != playerMaxHealth) {
          GS_rests += 1; //Updates the Rests game statistic
          this.changePlayerHealth(1, "set", "percent");
          this.playSound(sfxRegen);
          this.createTextbox(
            "Hercules",
            "Alright, now that I'm rested it's time to get going!",
            "",
            "",
            "rgb(255, 252, 219)",
            "none",
            herculesFIArray[0],
          );
        }
        else {
          this.createTextbox(
            "Hercules",
            "Now's not a good time to be sleeping.",
            "",
            "",
            "rgb(255, 252, 219)",
            "none",
            herculesFIArray[0],
          );
        }


      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //Intro Hive Soldier
    else if (this.id == 8) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        if (skipIntro == true) {
          this.setStep(26);
        }
        else {
          this.incrementStep();
        }
        this.createTextbox(
          "Hercules",
          "A single choice can fundamentally alter a dragon’s path. It can lead ",
          "to futures they never thought possible. It can change who they are, ",
          "and how others see them too.",
          "rgb(255, 252, 219)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "I knew there would be consequences for standing up against the ",
          "HiveWings, but I hardly had the chance to think about them until it ",
          "was too late.",
          "rgb(255, 252, 219)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 2) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "I couldn’t have imagined the path my choice would set me on.",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 3) {
        this.setDebounce(55);
        this.incrementStep();
        this.clearTextbox();
        this.autoAdvanceStep();
      }
      else if (this.interactStep == 4) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "HiveWing Soldier",
          "Oi! Get up ya lazy silk-head!",
          "",
          "",
          "rgb(255, 0, 0)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 5) {
        this.setDebounce(10);
        this.incrementStep();
        this.playSound(sfxHit);
        fadeObj.fadeIn(5);
        this.clearTextbox();
        this.autoAdvanceStep();
      }
      else if (this.interactStep == 6) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "Hey! What was that…",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[1],
        );
      }
      else if (this.interactStep == 7) {
        this.setDebounce(10);
        this.incrementStep();
        player.changeDirection("right");
        this.createTextbox(
          "Hercules",
          "I-I mean…hey! How’s it going! Heh…um…is ",
          "something the matter…?",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[2],
        );
      }
      else if (this.interactStep == 8) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "HiveWing Soldier",
          "You’re coming with me. Now get a move on!",
          "",
          "",
          "rgb(255, 0, 0)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 9) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "W-wait! What’s this about!",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[2],
        );
      }
      else if (this.interactStep == 10) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "HiveWing Soldier",
          "Shut it! D-Don’t make me drag you out of here!",
          "",
          "",
          "rgb(255, 0, 0)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 11) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "Look, if this is about what I said about the trees, I ",
          "swear I didn’t mean anything about it!",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[2],
        );
      }
      else if (this.interactStep == 12) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "HiveWing Soldier",
          "I-I said shut it! Stand down Hercules!",
          "",
          "",
          "rgb(255, 0, 0)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 13) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "(This is crazy! They’re arresting me about some ",
          "off-talon comment? I can’t just lie down and let ",
          "them take me away!)",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[1],
        );
      }
      else if (this.interactStep == 14) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "(But…then again. I’d only be getting myself into more ",
          "trouble if I…)",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[3],
        );
      }
      else if (this.interactStep == 15) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "HiveWing Soldier",
          "That’s it! We’re doing this the hard way!",
          "",
          "",
          "rgb(255, 0, 0)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 16) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "Gyah!",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[2],
        );
      }
      else if (this.interactStep == 17) {
        this.setDebounce(10);
        this.incrementStep();
        this.clearTextbox();
        fadeObj.fadeOut(30, 0, 255, 255, 255, "battleStart");
        this.playSound(sfxBattleStart);
        this.startBattle("HiveWing Soldier R")
      }
      else if (this.interactStep == 18) {
        if (scriptedBattleLost == true) {
          scriptedBattleLost = false;
          this.setDebounce(10);
          this.incrementStep();
          this.createTextbox(
            "Hercules",
            "No…I…I can’t give up…!",
            "",
            "",
            "rgb(255, 252, 219)",
            "none",
            herculesFIArray[4],
          );
        }
        else {
          this.setDebounce(10);
          this.setStep(20);
          this.changeTexture(58);
          this.createTextbox(
            "Hercules",
            "Hah…yeah…guess you’re not so strong after…all…",
            "",
            "",
            "rgb(255, 252, 219)",
            "none",
            herculesFIArray[4],
          );
        }
      }
      else if (this.interactStep == 19) {
        this.setDebounce(10);
        this.setStep(17);
        this.createTextbox(
          "Hercules",
          "Come on Hercules! You can do this!",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[4],
        );
      }
      else if (this.interactStep == 20) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "Wait…",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 21) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "Oh no. No no no no no no no…",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[2],
        );
      }
      else if (this.interactStep == 22) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "I need to get out of here!",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[2],
        );
      }
      else if (this.interactStep == 23) {
        this.setDebounce(10);
        this.incrementStep();
        this.clearTextbox();
        fadeObj.fadeOut(60, 0, 0, 0, 0, "interact");
      }
      else if (this.interactStep == 24) {
        this.setDebounce(150);
        this.incrementStep();
        fadeObj.fadeText("~ PART 1 ~", "Fugitive", 60, 30, 255, 255, 255);
      }
      else if (this.interactStep == 25) {
        this.changeInteract(9);
        fadeObj.fadeIn();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }
      else if (this.interactStep == 26) {
        this.setDebounce(10);
        this.incrementStep();
        fadeObj.fadeIn(5);
        this.clearTextbox();
        this.autoAdvanceStep();
      }
      else if (this.interactStep == 27) {
        this.changeInteract(9);
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //Intro Hive Soldier Defeated
    else if (this.id == 9) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "They're out cold. Here's hoping they don't wake up ",
          "soon...",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }
    }
    //"Glad To Be In The Inner Webs" Snooty SilkWing Y (Inner Webs South)
    else if (this.id == 10) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.changeDirection("player");
        this.createTextbox(
          "Snooty SilkWing",
          "Hey Hercules! Why the rush? And was that a HiveWing that just ",
          "went into your house?",
          "",
          "rgb(225, 255, 100)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "N-No! Just a...a relative. I'm just heading out to the ",
          "outer webs.",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[2],
        );
      }
      else if (this.interactStep == 2) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Snooty SilkWing",
          "The outer webs? Why would anyone want to go there?",
          "",
          "",
          "rgb(225, 255, 100)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 3) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Snooty SilkWing",
          "I for one am perfectly happy here in the new inner webs, instead of ",
          "out there with the rif-raf.",
          "",
          "rgb(225, 255, 100)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 4) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //"This Place Is Getting Crowded" Observant SilkWing B (Inner Webs West)
    else if (this.id == 11) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.changeDirection("player");
        this.createTextbox(
          "Observant SilkWing",
          "Ever since they expanded the webs inside the hive, this place has ",
          "felt so quiet...",
          "",
          "rgb(150, 150, 225)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Observant SilkWing",
          "Oh, hi Hercules.",
          "",
          "",
          "rgb(150, 150, 225)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 2) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //Mantid (In House)
    else if (this.id == 12) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.changeDirection("player");
        if (passGetSwitch == false) {
          this.incrementStep();
          this.createTextbox(
            "Mantid",
            "Oh hi Hercules! Enjoying another day in the hive?",
            "",
            "",
            "rgb(133, 255, 204)",
            "none",
            mantidFIArray[0],
          );
        }
        else {
          this.setStep(8);
          this.createTextbox(
            "Mantid",
            "Have a good time out there Hercules! And try not to ",
            "cause any trouble!",
            "",
            "rgb(133, 255, 204)",
            "none",
            mantidFIArray[0],
          );
        }


      }
      else if (this.interactStep == 1) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "Um, yeah...hey Mantid? Do you still have that spare ",
          "Median pass?",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 2) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Mantid",
          "Of course, are you heading out somewhere?",
          "",
          "",
          "rgb(133, 255, 204)",
          "none",
          mantidFIArray[0],
        );
      }
      else if (this.interactStep == 3) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "J-Just going out to get some fresh air...",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[2],
        );
      }
      else if (this.interactStep == 4) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Mantid",
          "You seem upset Herc. Is something the matter?",
          "",
          "",
          "rgb(133, 255, 204)",
          "none",
          mantidFIArray[3],
        );
      }
      else if (this.interactStep == 5) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "What? No! I'm fine, really!",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[2],
        );
      }
      else if (this.interactStep == 6) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Mantid",
          "Now there's no need to fret, the HiveWings are here ",
          "to protect us! They always are.",
          "",
          "rgb(133, 255, 204)",
          "none",
          mantidFIArray[0],
        );
      }
      else if (this.interactStep == 7) {
        this.setDebounce(10);
        this.updateMission("Show the pass to the guard!");
        this.incrementStep();
        passGetSwitch = true;
        this.createTextbox(
          "Hercules",
          "Y-Yeah...right. Thanks Mantid.",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 8) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //Median Guard
    else if (this.id == 13) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        if (passGetSwitch == false) {
          this.incrementStep();
          this.changeDirection("player");
          this.createTextbox(
            "Median Guard",
            "Hmm, Hercules. What do you want?",
            "",
            "",
            "rgb(200, 200, 200)",
            "none",
            "none",
          );
        }
        else if (this.selfSwitchA == true) {
          this.setStep(7);
          this.changeDirection("player");
          this.createTextbox(
            "Median Guard",
            "Go on. It's a crime to loiter you know.",
            "",
            "",
            "rgb(200, 200, 200)",
            "none",
            "none",
          );
        }
        else {
          this.transferPlayer(
            "Inner Webs Checkpoint",
            5, 3,
            "up",
            30, 0,
            255, 255, 255,
          );
          this.setStep(8);
          player.changeDirection("up");
          this.clearTextbox();
          this.autoAdvanceStep();
        }

      }
      else if (this.interactStep == 1) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "I need to get through the Median.",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 2) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Median Guard",
          "Do you have a pass?",
          "",
          "",
          "rgb(200, 200, 200)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 3) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "N-No...",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[2],
        );
      }
      else if (this.interactStep == 4) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Median Guard",
          "Then you're not going through the Median.",
          "",
          "",
          "rgb(200, 200, 200)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 5) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "(I think Mantid said she had a spare pass.)",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 6) {
        this.setDebounce(10);
        this.updateMission("Get the Median pass from Mantid!");
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "(She lives just to the left of my house.)",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 7) {
        this.clearTextbox();
        this.changeDirection("down");
        this.setStep(0);
        this.setDebounce(10);
        this.endInteract();
      }
      else if (this.interactStep == 8) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Median Guard",
          "You got a pass?",
          "",
          "",
          "rgb(200, 200, 200)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 9) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "Yep! Right here...",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 10) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Median Guard",
          "Hmm...",
          "",
          "",
          "rgb(200, 200, 200)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 11) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "(Please work please work please work!)",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[2],
        );
      }
      else if (this.interactStep == 12) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Median Guard",
          "Alright you can pass. But no funny business.",
          "",
          "",
          "rgb(200, 200, 200)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 13) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "Phew...",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 14) {
        this.setDebounce(movementTime);
        this.changeDirection("left");
        this.setMove("left");
        this.setStep(7);
        this.selfSwitchA = true;
        this.updateMission("Escape through the Median!");
      }

    }
    //Mantid Bed
    else if (this.id == 14) {
      if (this.interactStep == 0) {
        this.startBattle();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "(It'd be rude to take a nap in Mantid's bed.)",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //Hercules Rest Reminder Note
    else if (this.id == 15) {
      if (this.interactStep == 0) {
        this.startBattle();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Note",
          "Remember to rest in your bed whenever you're feeling down!",
          "",
          "-Mantid",
          "rgb(255, 242, 210)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //"I always knew you were trouble!" Judgemental SilkWing P (Inner Webs East)
    else if (this.id == 16) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.changeDirection("player");
        this.createTextbox(
          "Judgemental SilkWing",
          "Hmph, I always knew you were trouble Hercules!",
          "",
          "",
          "rgb(200, 165, 255)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Judgemental SilkWing",
          "Just because you're weirdly strong doesn't mean you can disobey ",
          "the HiveWings!",
          "",
          "rgb(200, 165, 255)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 2) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //"D-Don't talk to me!" Scared SilkWing DB (Inner Webs East)
    else if (this.id == 17) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.changeDirection("player");
        this.createTextbox(
          "Scared SilkWing",
          "Hercules?! D-Don't talk to me!",
          "",
          "",
          "rgb(50, 50, 255)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Scared SilkWing",
          "Whatever it is you've gotten yourself into, I don't want to be any ",
          "part of it!",
          "",
          "rgb(50, 50, 255)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 2) {
        this.changeDirection("left");
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //"That's totally crazy dude!" Laid Back SilkWing Y (Inner Webs Center)
    else if (this.id == 18) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.changeDirection("player");
        this.createTextbox(
          "Laid Back SilkWing",
          "Woah Herc, you're like a criminal now! That's totally crazy dude!",
          "",
          "",
          "rgb(255, 255, 100)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //Abandoned House Intro
    else if (this.id == 19) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "(The SilkWing that used to live here went missing a ",
          "little while ago.)",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 1) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "(Looks like they still haven't moved out all of her ",
          "things.)",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 2) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "(I suppose nobody would mind if I rested up in the ",
          "bed here...)",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 3) {
        this.destroyInteract();
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //"Don't fall behind!" Dilligent SilkWing P (Inner Webs North)
    else if (this.id == 20) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Dilligent SilkWing",
          "Fix the wall, nice and perfect. Don't ever fall behind or it's back to ",
          "misbehavor's way with you! Good SilkWings always get the job ",
          "done on time! Always...",
          "rgb(200, 165, 255)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //Median Guard Battle
    else if (this.id == 21) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(movementTime);
        this.incrementStep();
        this.movePlayer("up");
      }
      else if (this.interactStep == 1) {
        this.setDebounce(movementTime);
        this.incrementStep();
        player.changeDirection("left");
        this.movePlayer("left");
      }
      else if (this.interactStep == 2) {
        this.setDebounce(movementTime);
        this.incrementStep();
        player.changeDirection("up");
        this.movePlayer("up");
      }
      else if (this.interactStep == 3) {
        this.setDebounce(movementTime);
        this.incrementStep();
        this.movePlayer("up");
      }
      else if (this.interactStep == 4) {
        this.setDebounce(movementTime);
        this.incrementStep();
        this.movePlayer("up");
      }
      else if (this.interactStep == 5) {  
        this.endPlayerMove();
        this.incrementStep();
        this.setDebounce(10);
        this.createTextbox(
          "Median Guard",
          "Wait! Hold it right there!",
          "",
          "",
          "rgb(200, 200, 200)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 6) {  
        this.clearTextbox();
        player.changeDirection("down");
        this.setDebounce(movementTime);
        this.incrementStep();
        this.setMove("up");
      }
      else if (this.interactStep == 7) {  
        this.setDebounce(movementTime);
        this.incrementStep();
        this.setMove("up");
      }
      else if (this.interactStep == 8) {  
        this.setDebounce(movementTime);
        this.incrementStep();
        this.setMove("up");
      }
      else if (this.interactStep == 9) {  
        this.setDebounce(movementTime);
        this.incrementStep();
        this.changeDirection("left");
        this.setMove("left");
      }
      else if (this.interactStep == 10) {  
        this.setDebounce(movementTime);
        this.incrementStep();
        this.changeDirection("up");
        this.setMove("up");
      }
      else if (this.interactStep == 11) {  
        this.setDebounce(movementTime);
        this.incrementStep();
        this.setMove("up");
      }
      else if (this.interactStep == 12) {  
        this.incrementStep();
        this.setDebounce(10);
        this.createTextbox(
          "Median Guard",
          "There's an arrest warrant out for you! Lucky me that I remembered ",
          "just in time!",
          "",
          "rgb(200, 200, 200)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 13) {  
        this.incrementStep();
        this.setDebounce(10);
        this.createTextbox(
          "Median Guard",
          "The soldier that passed me earlier was heading to your place, ",
          "right?",
          "",
          "rgb(200, 200, 200)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 14) {  
        this.incrementStep();
        this.setDebounce(10);
        this.createTextbox(
          "Median Guard",
          "Hmmm, well I'm not nearly as much of a pushover as him, so I'd ",
          "say that my chances of victory against you are all but certain.",
          "",
          "rgb(200, 200, 200)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 15) {  
        this.incrementStep();
        this.setDebounce(10);
        this.createTextbox(
          "Hercules",
          "(Talk about self confidence...)",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[5],
        );
      }
      else if (this.interactStep == 16) {  
        this.incrementStep();
        this.setDebounce(10);
        this.createTextbox(
          "Median Guard",
          "Hm, yes. This should be fun!",
          "",
          "",
          "rgb(200, 200, 200)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 17) {  
        this.incrementStep();
        this.setDebounce(10);
        this.createTextbox(
          "Hercules",
          "(Uh oh, here they come...!)",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[2],
        );
      }
      else if (this.interactStep == 18) {
        this.incrementStep();
        this.setDebounce(10);
        this.clearTextbox();
        fadeObj.fadeOut(30, 0, 255, 255, 255, "battleStart");
        this.playSound(sfxBattleStart);
        this.startBattle("HiveWing Soldier B");
      }
      else if (this.interactStep == 19) {
        if (scriptedBattleLost == true) {
          scriptedBattleLost = false;
          this.setDebounce(10);
          this.setStep(18);
          this.createTextbox(
            "Hercules",
            "(I can't lose here! Let's try this again!)",
            "",
            "",
            "rgb(255, 252, 219)",
            "none",
            herculesFIArray[4],
          );
        }
        else {
          this.incrementStep();
          this.setDebounce(10);
          this.createTextbox(
            "Median Guard",
            "Huff...hurk...gah! Now that was a FIGHT!",
            "",
            "",
            "rgb(200, 200, 200)",
            "none",
            "none",
          );
        }

      }
      else if (this.interactStep == 20) {  
        this.incrementStep();
        this.setDebounce(10);
        this.createTextbox(
          "Median Guard",
          "You certainly didn't dissappoint, Herc...",
          "",
          "",
          "rgb(200, 200, 200)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 21) {  
        this.incrementStep();
        this.setDebounce(10);
        this.createTextbox(
          "Median Guard",
          "...",
          "",
          "",
          "rgb(200, 200, 200)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 22) {  
        this.incrementStep();
        this.setDebounce(10);
        this.createTextbox(
          "Hercules",
          "Uh...hello?",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 23) {  
        this.incrementStep();
        this.setDebounce(10);
        this.createTextbox(
          "Median Guard...?",
          "So you're the unnaturally strong SilkWing causing trouble in Mantis ",
          "Hive?",
          "",
          "rgb(0, 0, 0)",
          "rgb(255, 238, 0)",
          "none",
        );
      }
      else if (this.interactStep == 24) {  
        this.incrementStep();
        this.setDebounce(10);
        this.createTextbox(
          "Hercules",
          "Wh...wha...? This is...then that means you're...!",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[2],
        );
      }
      else if (this.interactStep == 25) {  
        this.incrementStep();
        this.setDebounce(10);
        this.createTextbox(
          "Queen Wasp",
          "Let's see how well you fare against all the HiveWings in this ",
          "hive...",
          "",
          "rgb(0, 0, 0)",
          "rgb(255, 238, 0)",
          "none",
        );
      }
      else if (this.interactStep == 26) {  
        this.changeTexture(68);
        this.playSound(sfxDowned);
        this.incrementStep();
        this.setDebounce(10);
        this.createTextbox(
          "Hercules",
          "...",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[5],
        );
      }
      else if (this.interactStep == 27) {  
        this.incrementStep();
        this.setDebounce(10);
        this.updateMission("Escape the hive!");
        this.createTextbox(
          "Hercules",
          "Well...crud...",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[5],
        );
      }
      else if (this.interactStep == 28) {
        mapObj.setCheckpoint();
        fixPosition(player);
        this.changeInteract(22);
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }
    }
    //Median Guard Defeated
    else if (this.id == 22) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "I should probably get going...",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //Hercules House Sign
    else if (this.id == 23) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Sign",
          "",
          "Hercules",
          "",
          "rgb(200, 200, 200)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //Mantid House Sign
    else if (this.id == 24) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Sign",
          "",
          "Mantid",
          "",
          "rgb(200, 200, 200)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //Abandoned House Sign
    else if (this.id == 25) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Sign",
          "",
          "Vacant",
          "",
          "rgb(200, 200, 200)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //Median Sign
    else if (this.id == 26) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Sign",
          "The Median",
          "Remember your pass!",
          "",
          "rgb(200, 200, 200)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //Propoganda Sign "Vigilant"
    else if (this.id == 27) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Sign",
          "Be vigilant! Even your friends could be enemies of the hive!",
          "",
          "",
          "rgb(200, 200, 200)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //"I swear I saw it!" Bewildered SilkWing B (Outer Webs Center) 
    //"Sure you did." Skeptical SilkWing DB (Outer Webs Center)
    else if ((this.id == 28) || (this.id == 29)) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Bewildered SilkWing",
          "And then I saw a big metal ball fly out of it! It flew off before I could ",
          "get a better look at it though!",
          "",
          "rgb(150, 150, 225)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Skeptical SilkWing",
          "A big flying...metal ball?",
          "",
          "",
          "rgb(50, 50, 255)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 2) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Bewildered SilkWing",
          "Yeah! It was pretty scary lookin' too!",
          "",
          "",
          "rgb(150, 150, 225)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 3) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Skeptical SilkWing",
          "Maybe you should ease off the beetle juice pal.",
          "",
          "",
          "rgb(50, 50, 255)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 4) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Bewildered SilkWing",
          "I swear I saw it! Honest!",
          "",
          "",
          "rgb(150, 150, 225)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 5) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Skeptical SilkWing",
          "Sure you did.",
          "",
          "",
          "rgb(50, 50, 255)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 6) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //Stairwell Top Sign
    else if (this.id == 30) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Sign",
          "V Market V",
          "> The Webs >",
          "",
          "rgb(200, 200, 200)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //Stairwell Bottom Sign
    else if (this.id == 31) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Sign",
          "^ The Webs ^",
          "< Market <",
          "",
          "rgb(200, 200, 200)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //Rhino Battle 1
    else if (this.id == 32) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.transferPlayer(
          "Outer Webs East",
          6, 6,
          "up",
          30, 0,
          255, 255, 255,
        );
        this.incrementStep();
        player.changeDirection("up");
        this.clearTextbox();
        this.autoAdvanceStep();
      }
      else if (this.interactStep == 1) {
        this.setDebounce(10);
        if (this.selfSwitchA == true) {
          this.setStep(27);
          this.createTextbox(
            "General Rhino",
            "Back again are you? Let's see how well you fare this ",
            "time Hercules!",
            "",
            "rgb(228, 172, 164)",
            "none",
            rhinoFIArray[0],
          );
        }
        else {
          this.selfSwitchA = true;
          this.incrementStep();
          this.createTextbox(
            "Hercules",
            "Alright Hercules, time to go.",
            "",
            "",
            "rgb(255, 252, 219)",
            "none",
            herculesFIArray[0],
          );
        }
      }
      else if (this.interactStep == 2) {
        this.setDebounce(10);
        this.incrementStep();
        player.changeDirection("down");
        this.createTextbox(
          "Hercules",
          "...",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[3],
        );
      }
      else if (this.interactStep == 3) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "Not like you have anywhere TO go...",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[3],
        );
      }
      else if (this.interactStep == 4) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "Gah! Why did you have to go and fight that HiveWing! ",
          "You should have just turned yourself in!",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[1],
        );
      }
      else if (this.interactStep == 5) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "*Sigh*",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[3],
        );
      }
      else if (this.interactStep == 6) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "Even if I make it out of here, I'll still be on the run for ",
          "the rest of my life.",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[3],
        );
      }
      else if (this.interactStep == 7) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "It's too late to go back now though. I'll just have to ",
          "make do as best as I can.",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 8) {
        this.setDebounce(movementTime);
        this.incrementStep();
        this.clearTextbox();
        this.createInteract(6, -1, "down", 33, 14);
        getInteract(33).setMove("down");
      }
      else if (this.interactStep == 9) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(33).setMove("down");
      }
      else if (this.interactStep == 10) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(33).setMove("down");
      }
      else if (this.interactStep == 11) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(33).setMove("down");
      }
      else if (this.interactStep == 12) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(33).setMove("down");
      }
      else if (this.interactStep == 13) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(33).setMove("down");
      }
      else if (this.interactStep == 14) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "???",
          "Hercules! You are hereby under arrest for...",
          "",
          "",
          "rgb(228, 172, 164)",
          "none",
          rhinoFIArray[0],
        );
      }
      else if (this.interactStep == 15) {
        this.setDebounce(movementTime);
        this.incrementStep();
        player.changeDirection("up");
        this.movePlayer("down");
        //this.autoAdvanceStep();
      }
      else if (this.interactStep == 16) {
        this.endPlayerMove();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "Yah! Wh-Where did you come from!",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[2],
        );
      }
      else if (this.interactStep == 17) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "???",
          "I flew down from above. Was that not obvious?",
          "",
          "",
          "rgb(228, 172, 164)",
          "none",
          rhinoFIArray[0],
        );
      }
      else if (this.interactStep == 18) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "(By the book! It's Rhino, one of the most fearsome ",
          "HiveWings in Mantis Hive! This is really bad...)",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[2],
        );
      }
      else if (this.interactStep == 19) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "General Rhino",
          "At any rate, you are hereby placed under arest for ",
          "insurrection and assault. Surrender now, or else I will ",
          "have to take you in by force!",
          "rgb(228, 172, 164)",
          "none",
          rhinoFIArray[0],
        );
      }
      else if (this.interactStep == 20) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "(What do I do? What CAN I do? I can't stand up to ",
          "him in a fight, can I?)",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[2],
        );
      }
      else if (this.interactStep == 21) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "General Rhino",
          "Hmph, scared speechless are you? You rebels are all ",
          "the same, always seeking to disrupt the order of the ",
          "hive, thinking you can flaunt the laws which govern it!",
          "rgb(228, 172, 164)",
          "none",
          rhinoFIArray[5],
        );
      }
      else if (this.interactStep == 22) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "(Then again, if I take him by surprise, I might just ",
          "have a chance...)",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[5],
        );
      }
      else if (this.interactStep == 23) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "General Rhino",
          "Without order we simply cannot enjoy all of the ",
          "pleasures of life in the hives. A lawless dragon like ",
          "you couldn't possibly understand, could y-",
          "rgb(228, 172, 164)",
          "none",
          rhinoFIArray[5],
        );
      }
      else if (this.interactStep == 24) {
        this.setDebounce(movementTime);
        this.incrementStep();
        this.movePlayer("up");
        //this.autoAdvanceStep();
      }
      else if (this.interactStep == 25) {
        this.endPlayerMove();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "Raaaa!",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[1],
        );
      }
      else if (this.interactStep == 26) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "General Rhino",
          "What in blazes!",
          "",
          "",
          "rgb(228, 172, 164)",
          "none",
          rhinoFIArray[0],
        );
      }
      else if (this.interactStep == 27) {
        this.setDebounce(10);
        this.incrementStep();
        this.clearTextbox();
        fadeObj.fadeOut(30, 0, 255, 255, 255, "battleStart");
        this.playSound(sfxBattleStart);
        this.startBattle("General Rhino")
      }
      else if (this.interactStep == 28) {
        if (scriptedBattleLost == true) {
          scriptedBattleLost = false;
          this.setDebounce(10);
          this.setStep(68);
          this.createTextbox(
            "Hercules",
            "Ak...! Gotta retreat for now!",
            "",
            "",
            "rgb(255, 252, 219)",
            "none",
            herculesFIArray[4],
          );
        }
        else {
          this.setDebounce(10);
          this.incrementStep();
          this.createTextbox(
            "General Rhino",
            "Hrng...you...you are certainly a...tenacious one...",
            "",
            "",
            "rgb(228, 172, 164)",
            "none",
            rhinoFIArray[4],
          );
        }
      }
      else if (this.interactStep == 29) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "You're not too shabby yourself...",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[4],
        );
      }
      else if (this.interactStep == 30) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "General Rhino",
          "Mark my words...hrng...Hercules. This is far from ",
          "over...",
          "",
          "rgb(228, 172, 164)",
          "none",
          rhinoFIArray[4],
        );
      }
      else if (this.interactStep == 31) {
        this.setDebounce(movementTime);
        this.incrementStep();
        this.clearTextbox();
        getInteract(33).changeDirection("up");
        getInteract(33).setMove("up");
      }
      else if (this.interactStep == 32) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(33).setMove("up");
      }
      else if (this.interactStep == 33) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(33).setMove("up");
      }
      else if (this.interactStep == 34) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(33).setMove("up");
      }
      else if (this.interactStep == 35) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(33).setMove("up");
      }
      else if (this.interactStep == 36) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(33).setMove("up");
      }
      else if (this.interactStep == 37) {
        this.setDebounce(10);
        this.incrementStep();
        getInteract(33).destroyInteract();
        this.createTextbox(
          "Hercules",
          "That's not reassuring. At least he's gone for now.",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 38) {
        this.setDebounce(movementTime);
        this.incrementStep();
        this.clearTextbox();
        this.createInteract(-1, 7, "right", 34, 10);
        getInteract(34).setMove("right");
      }
      else if (this.interactStep == 39) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(34).setMove("right");
      }
      else if (this.interactStep == 40) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(34).setMove("right");
      }
      else if (this.interactStep == 41) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(34).setMove("right");
      }
      else if (this.interactStep == 42) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(34).setMove("right");
      }
      else if (this.interactStep == 43) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(34).setMove("right");
      }
      else if (this.interactStep == 44) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(34).changeDirection("up");
        getInteract(34).setMove("up");
      }
      else if (this.interactStep == 45) {
        this.setDebounce(10);
        this.incrementStep();
        getInteract(34).changeDirection("right");
        this.createTextbox(
          "???",
          "That. Was. AWESOME! You were incredible!",
          "",
          "",
          "rgb(247, 216, 255)",
          "none",
          magentaFIArray[0],
        );
      }
      else if (this.interactStep == 46) {
        this.setDebounce(movementTime);
        this.incrementStep();
        player.changeDirection("left");
        this.movePlayer("right");
        //this.autoAdvanceStep();
      }
      else if (this.interactStep == 47) {
        this.endPlayerMove();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "Why does everyone keep sneaking up on me!",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[2],
        );
      }
      else if (this.interactStep == 48) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "???",
          "I've never seen anyone stand up to Rhino like that! ",
          "We could really use a dragon like you!",
          "",
          "rgb(247, 216, 255)",
          "none",
          magentaFIArray[0],
        );
      }
      else if (this.interactStep == 49) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "Wait, Magenta, is that you?! And who is this \"we\"?",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 50) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Magenta",
          "The Crysalis, duh! But we can't talk here, come on! ",
          "We'll need to go through the market!",
          "",
          "rgb(247, 216, 255)",
          "none",
          magentaFIArray[0],
        );
      }
      else if (this.interactStep == 51) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "The market? Why, won't we just get caught there?",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 52) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Magenta",
          "We'd be easy targets in the sky, but we might be able ",
          "to lose the HiveWings in the crowded marketplace. ",
          "Wasp's got her WHOLE ARMY looking for you!",
          "rgb(247, 216, 255)",
          "none",
          magentaFIArray[0],
        );
      }
      else if (this.interactStep == 53) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Magenta",
          "Or at least her whole army in Mantis Hive. Not sure ",
          "what's goin' on with all the rest of the HiveWings...",
          "",
          "rgb(247, 216, 255)",
          "none",
          magentaFIArray[2],
        );
      }
      else if (this.interactStep == 54) {
        this.setDebounce(10);
        this.incrementStep();
        getInteract(34).changeDirection("down");
        this.createTextbox(
          "Magenta",
          "Either way we neet to get going. Those hive-heads ",
          "certainly won't wait around for us! Come on!",
          "",
          "rgb(247, 216, 255)",
          "none",
          magentaFIArray[0],
        );
      }
      else if (this.interactStep == 55) {
        this.setDebounce(movementTime);
        this.incrementStep();
        this.clearTextbox();
        getInteract(34).setMove("down");
      }
      else if (this.interactStep == 56) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(34).changeDirection("left");
        getInteract(34).setMove("left");
      }
      else if (this.interactStep == 57) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(34).setMove("left");
      }
      else if (this.interactStep == 58) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(34).changeDirection("down");
        getInteract(34).setMove("down");
      }
      else if (this.interactStep == 59) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(34).setMove("down");
      }
      else if (this.interactStep == 60) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(34).setMove("down");
      }
      else if (this.interactStep == 61) {
        this.setDebounce(10);
        this.incrementStep();
        getInteract(34).destroyInteract();
        this.createTextbox(
          "Hercules",
          "...",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[5],
        );
      }
      else if (this.interactStep == 62) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "(This day just keeps getting weirder and weirder...)",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[5],
        );
      }
      else if (this.interactStep == 63) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "(Can't say it's much of a surprise that she joined up ",
          "with the Chrysalis though. I guess I'm one of them too ",
          "now, aparently.)",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 64) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "(Not like I have much of a choice at this point...)",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[5],
        );
      }
      else if (this.interactStep == 65) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Magenta",
          "Hey Herc, are you coming?!",
          "",
          "",
          "rgb(247, 216, 255)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 66) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "(Better get moving. General Rhino will probably be ",
          "back for more soon.)",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 67) {
        this.destroyInteract();
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }
      else if (this.interactStep == 68) {
        outerWebsBossSwitch = false;
        this.setDebounce(10);
        this.setStep(0);
        this.clearTextbox();
        this.playSound(sfxEscape);
        fadeObj.fadeOut(30, 0, 255, 255, 255, "checkpointTransfer");
        this.endInteract();
      }
    }
    //"Best in the hive!" Focused SilkWing PI (Inner Webs South)
    else if (this.id == 35) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Focused SilkWing",
          "This will be the best painting in Mantis Hive! I just know it!",
          "",
          "",
          "rgb(255, 174, 206)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //"So unreliable." Demanding HiveWing Y (Market Entrance)
    //"I'll remember!" Forgetful SilkWing P (Market Entrance)
    else if (this.id == 36) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Demanding HiveWing",
          "And remember to get the SUGAR FREE tarts this time! Mess this ",
          "up again and I will personally send you to Misbehaver's way.",
          "",
          "rgb(255, 255, 0)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Forgetful SilkWing",
          "Y-Yes my lady! I'll remember!",
          "",
          "",
          "rgb(200, 165, 255)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 2) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Demanding HiveWing",
          "Ugh, SilkWings these days are so unreliable.",
          "",
          "",
          "rgb(255, 255, 0)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 3) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //"Thank Clearsight." Relieved SilkWing B (Market Entrance)
    else if (this.id == 37) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Relieved SilkWing",
          "Thank Clearsight I wasn't assigned to a HiveWing like that...",
          "",
          "",
          "rgb(150, 150, 225)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //"Ho ho!" Hasty Salesdragon HiveWing R (Market North)
    else if (this.id == 38) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.changeDirection("player");
        this.createTextbox(
          "Hasty Salesdragon",
          "Oh! I'm not really selling anything yet. I guess I didn't really think ",
          "that far ahead! Ho ho!",
          "",
          "rgb(255, 0, 0)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //"Have our hides..." Frusterated SilkWing G (Market North)
    //"I'm sorry!" Tired SilkWing PI (Market North)
    else if (this.id == 39) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Frusterated SilkWing",
          "You couldn't have thought of a better place to put all this stuff?!",
          "",
          "",
          "rgb(140, 213, 129)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Tired SilkWing",
          "I'm sorry! My legs were getting tired, and I just couldn't carry all this ",
          "anymore...",
          "",
          "rgb(255, 174, 206)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 2) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Frusterated HiveWing",
          "The mistress will have our hides when the Queen's done ",
          "controlling her...",
          "",
          "rgb(140, 213, 129)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 3) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //"Get your bread here!" Bread Salesdragon SilkWing DB (Market North)
    else if (this.id == 40) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Bread Salesdragon",
          "Get your bread here! Fresh out of the oven!",
          "",
          "",
          "rgb(50, 50, 255)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //"Try them!" Bed Salesdragon SilkWing P (Bed Store)
    else if (this.id == 41) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.changeDirection("player");
        this.createTextbox(
          "Bed Salesdragon",
          "Ah! We have only the finest of silken beds my friend! Try them for ",
          "yourself, you'll see!",
          "",
          "rgb(200, 165, 255)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //"Not now!" Senior Baker SilkWing B (Bakery)
    else if (this.id == 42) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Senior Baker",
          "Not now! Preparing these pastries requires the utmost focus!",
          "",
          "",
          "rgb(150, 150, 225)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //"Where is it!" Assistant Baker SilkWing G (Bakery)
    else if (this.id == 43) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Assistant Baker SilkWing",
          "Oh, where is it! I swear I put that oven mit somewhere around here!",
          "",
          "",
          "rgb(140, 213, 129)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //"Good luck!" Head Baker HiveWing O (Bakery)
    else if (this.id == 44) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.changeDirection("player");
        if (this.selfSwitchA == false) {
          this.incrementStep();
          this.selfSwitchA = true;
          this.createTextbox(
            "Head Baker",
            "Oh my! You're that SilkWing that everyone is looking for!",
            "",
            "",
            "rgb(255, 82, 0)",
            "none",
            "none",
          );
        }
        else {
          this.setStep(5);
          this.createTextbox(
            "Head Baker",
            "Good luck out there!",
            "",
            "",
            "rgb(255, 82, 0)",
            "none",
            "none",
          );
        }
      }
      else if (this.interactStep == 1) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "Erm...I'm just gonna...",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[2],
        );
      }
      else if (this.interactStep == 2) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Head Baker",
          "Oh don't worry, I won't rat you out! Between you and me, the ",
          "Queen's hivemind stunts can be quite bad for business.",
          "",
          "rgb(255, 82, 0)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 3) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "Um...thanks! I've got to get going now...",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 4) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Head Baker",
          "Good luck out there!",
          "",
          "",
          "rgb(255, 82, 0)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 5) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //Bed Store Sign
    else if (this.id == 45) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Sign",
          "",
          "Blissful Beds",
          "",
          "rgb(200, 200, 200)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //Bakery Sign
    else if (this.id == 46) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Sign",
          "",
          "Tarts n' Treats",
          "",
          "rgb(200, 200, 200)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //"Got a hole in your wall?" Treestuff Salesdragon SilkWing DB (Market East)
    else if (this.id == 47) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Treestuff Salesdragon",
          "Got a hole in your wall? Patch it up with some high quality treestuff ",
          "and silk! Best quality in the hive for the lowest prices!",
          "",
          "rgb(50, 50, 255)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //"Ah ah!" Glassware Salesdragon SilkWing B (Market East)
    else if (this.id == 48) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.changeDirection("player");
        this.createTextbox(
          "Glassware Salesdragon",
          "Ah ah! Careful! You break it you buy it!",
          "",
          "",
          "rgb(150, 150, 225)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //"What's all this fuss?" Elderly HiveWing R (Market East)
    else if (this.id == 49) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.changeDirection("player");
        this.createTextbox(
          "Elderly HiveWing",
          "Eh? What's all this fuss about now? Are you that SilkWing they're ",
          "all up in arms about?",
          "",
          "rgb(255, 0, 0)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "I..uh...",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[2],
        );
      }
      else if (this.interactStep == 2) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Elderly HiveWing",
          "Ha! And here I thought I'd seen everything!",
          "",
          "",
          "rgb(255, 0, 0)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 3) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //"World of hurt!" Burly Soldier Armored O (Market East)
    //"Yeah!" Brawny Soldier Armored Y (Market East)
    else if (this.id == 50) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Burly Soldier",
          "If that Hercules tries to go through here, he'll be in for a world of ",
          "hurt!",
          "",
          "rgb(255, 82, 0)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Brawny Soldier",
          "Yeah! There's no way he's gettin' past us!",
          "",
          "",
          "rgb(219, 255, 34)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 2) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "...",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[5],
        );
      }
      else if (this.interactStep == 3) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //"Pots for days!" Pot Salesdragon HiveWing B (Market Edge North)
    else if (this.id == 51) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Pot Salesdragon",
          "We've got small pots, big pots, wide pots, fancy pots! We've got ",
          "pots for days!",
          "",
          "rgb(200, 200, 200)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //"So many pots..." Curious SilkWing DB (Market Edge North)
    else if (this.id == 52) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Curious SilkWing",
          "What could anyone possibly need with so many pots...",
          "",
          "",
          "rgb(50, 50, 255)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //"I can't decide!" Indecisive SilkWing Y (Market Edge North)
    else if (this.id == 53) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Indecisive SilkWing",
          "Ah! I just can't decide! I'll just have to get them all!",
          "",
          "",
          "rgb(255, 255, 100)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //"Are you alright?" Concerned SilkWing Pi (Market Edge North)
    else if (this.id == 54) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.changeDirection("player");
        this.createTextbox(
          "Concerned SilkWing",
          "Oh, Hercules! Are you alright? The HiveWings are going crazy ",
          "trying to capture you!",
          "",
          "rgb(255, 174, 206)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "Yeah...I can't say I expected to become a fugitive ",
          "when I woke up this morning.",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[3],
        );
      }
      else if (this.interactStep == 2) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Concerned SilkWing",
          "On the bright side, you're starting to become a bit of a hero for ",
          "many of us SilkWings. A lot of us never even considered fighting ",
          "back against the HiveWings until today!",
          "rgb(255, 174, 206)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 3) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "Really? Huh, that's pretty cool.",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 4) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Concerned SilkWing",
          "Still, it's gotta be pretty dangerous getting into so many fights. I ",
          "really hope you make it out alright!",
          "",
          "rgb(255, 174, 206)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 5) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "Thanks! Now...I should probably be going...",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 6) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Concerned SilkWing",
          "Good luck Hercules!",
          "",
          "",
          "rgb(255, 174, 206)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 7) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //"I know what I saw." Scared Soldier Armored Y (Market Edge East)
    else if (this.id == 55) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Scared Soldier",
          "They wouldn't believe me, they said I was crazy. But I know what I ",
          "saw. Those things are REAL, and more are coming...",
          "",
          "rgb(219, 255, 34)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "I'm just gonna...",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[5],
        );
      }
      else if (this.interactStep == 2) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Scared Soldier",
          "They'll be sorry. When those things come for us, they'll all realize ",
          "they should have believed me when they had the chance...",
          "",
          "rgb(219, 255, 34)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 3) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //"Thanks pal." Sneaky SilkWing B (Market Edge West)
    else if (this.id == 56) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Sneaky SilkWing",
          "Heh heh, thanks pal. With the HiveWings out to get you, they'll be ",
          "too busy to go after me.",
          "",
          "rgb(150, 150, 225)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "You're welcome...?",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[5],
        );
      }
      else if (this.interactStep == 2) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //"It's really you!" Fanboy SilkWing Y (Market Center)
    else if (this.id == 57) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Fanboy SilkWing",
          "AAAAH! Hercules! It's really you! You're so cool, I wish I could ",
          "stand up to the HiveWings like you!",
          "",
          "rgb(255, 255, 100)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "Trust me, it's more trouble than it's worth...",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[3],
        );
      }
      else if (this.interactStep == 2) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //"From this way!" Burly Soldier Armored O (Market Center)
    //"Just you wait!" Brawny Soldier Armored Y (Market Center)
    else if (this.id == 58) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Burly Soldier",
          "Oh wait! He could come at us from this way!",
          "",
          "",
          "rgb(255, 82, 0)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Brawny Soldier",
          "Ha! You thought you could outsmart us, huh? Well just you wait ",
          "Hercules!",
          "",
          "rgb(219, 255, 34)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 2) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "...",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[5],
        );
      }
      else if (this.interactStep == 3) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //"Please...?" Plant Salesdragon SilkWing Pi (Market Center)
    else if (this.id == 59) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Plant Salesdragon",
          "I-If you're looking for a nice plant for your home, why not buy one ",
          "here? Please...?",
          "",
          "rgb(255, 174, 206)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //"The what for." Disgruntled SilkWing P (Market Center)
    else if (this.id == 60) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.changeDirection("player");
        this.createTextbox(
          "Disgruntled SilkWing",
          "Hmph, finally showing those HiveWings the what for, are you?",
          "",
          "",
          "rgb(200, 165, 255)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Disgruntled SilkWing",
          "They've been pestering me and my business for too long! Go give ",
          "'em a few good wallops for me Herc!",
          "",
          "rgb(200, 165, 255)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 2) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //"Most vibrant flowers around!" Flower Salesdragon SilkWing B (Market West)
    else if (this.id == 61) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Flower Salesdragon",
          "We've got the most vibrant flowers around! Don't settle for a drab ",
          "colorless plant, get your freshly picked wildflowers today!",
          "",
          "rgb(150, 150, 225)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //"Another SilkWing?" Book Salesdragon HiveWing O (Market West)
    else if (this.id == 62) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.changeDirection("player");
        this.createTextbox(
          "Book Salesdragon",
          "Another SilkWing? Just hurry up and buy something.",
          "",
          "",
          "rgb(255, 82, 0)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //"They all look so good!" Scholarly SilkWing DB (Market West)
    else if (this.id == 63) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Scholarly SilkWing",
          "I've only got enough scales for one book, but they all look so good!",
          "",
          "",
          "rgb(50, 50, 255)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //"Hey Herc!" Helpful SilkWing G (Market West)
    else if (this.id == 64) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.changeDirection("player");
        this.createTextbox(
          "Helpful SilkWing",
          "Hey Herc! I saw some HiveWings heading toward the front ",
          "entrance just a moment ago, and they looked pretty ",
          "tough!",
          "rgb(140, 213, 129)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "Thanks for the heads up!",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 2) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Helpful SilkWing",
          "No problem!",
          "",
          "",
          "rgb(140, 213, 129)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 3) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "(Something tells me that a pretty tough fight is coming ",
          "up. I'd better be ready before charging in.)",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 4) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //Part 2 Intro
    else if (this.id == 65) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        getInteract(33).changeDirection("up");
        this.createTextbox(
          "Magenta",
          "Come on Herc! We need to hurry before they ",
          "catch on to us!",
          "",
          "rgb(247, 216, 255)",
          "none",
          magentaFIArray[0],
        );
      }
      else if (this.interactStep == 1) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(33).changeDirection("left");
        getInteract(33).setMove("left");
      }
      else if (this.interactStep == 2) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(33).setMove("left");
      }
      else if (this.interactStep == 3) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(33).setMove("left");
      }
      else if (this.interactStep == 4) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(33).setMove("left");
      }
      else if (this.interactStep == 5) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(33).setMove("left");
      }
      else if (this.interactStep == 6) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "(And there she goes again. I'd better hurry so I don't ",
          "end up losing her.)",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 7) {
        getInteract(33).destroyInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.clearTextbox();
        fadeObj.fadeOut(60, 0, 0, 0, 0, "interact");
      }
      else if (this.interactStep == 8) {
        this.setDebounce(150);
        this.incrementStep();
        fadeObj.fadeText("~ PART 2 ~", "Crysalis", 60, 30, 255, 255, 255);
      }
      else if (this.interactStep == 9) {
        mapObj.setCheckpoint();
        this.updateMission("Escape through the market!");
        this.changeInteract(9);
        fadeObj.fadeIn();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //Rhino Battle 2
    else if (this.id == 66) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.transferPlayer(
          "Main Entrance",
          5, 6,
          "down",
          30, 0,
          255, 255, 255,
        );
        this.incrementStep();
        this.clearTextbox();
        this.autoAdvanceStep();
      }
      else if (this.interactStep == 1) {
        this.setDebounce(10);
        if (this.selfSwitchB == true) {
          this.setStep(27);
          this.createTextbox(
            "General Rhino",
            "I'll gice you this, you are persistent. But you will give ",
            "in eventually!",
            "",
            "rgb(228, 172, 164)",
            "none",
            rhinoFIArray[0],
          );
        }
        else if (this.selfSwitchA == true) {
          this.setStep(18);
          this.createTextbox(
            "Confident Soldier",
            "Ha! I'll get you this time!",
            "",
            "",
            "rgb(219, 255, 34)",
            "none",
            "none",
          );
        }
        else {
          this.selfSwitchA = true;
          this.incrementStep();
          this.createTextbox(
            "Hercules",
            "Wow. Who could have seen this coming?",
            "",
            "",
            "rgb(255, 252, 219)",
            "none",
            herculesFIArray[5],
          );
        }
      }
      else if (this.interactStep == 2) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Magenta",
          "Gah! I should have seen this coming!",
          "",
          "",
          "rgb(247, 216, 255)",
          "none",
          magentaFIArray[1],
        );
      }
      else if (this.interactStep == 3) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "...",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[5],
        );
      }
      else if (this.interactStep == 4) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "General Rhino",
          "Hmph. So you have joined up with those traitorous ",
          "Crysalis worms! Why am I not surprised.",
          "",
          "rgb(228, 172, 164)",
          "none",
          rhinoFIArray[0],
        );
      }
      else if (this.interactStep == 5) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "General Rhino",
          "No matter. You have just made our job easier in ",
          "the end.",
          "",
          "rgb(228, 172, 164)",
          "none",
          rhinoFIArray[0],
        );
      }
      else if (this.interactStep == 6) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "General Rhino",
          "For you see, criminals such as you will never be ",
          "above the law which governs us all. You may think ",
          "you are above the Queen and her wisdom, but...",
          "rgb(228, 172, 164)",
          "none",
          rhinoFIArray[5],
        );
      }
      else if (this.interactStep == 7) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Magenta",
          "Hah! Wisdom? Wasp and her cronies wouldn't know ",
          "wisdom if it stung them in the eye!",
          "",
          "rgb(247, 216, 255)",
          "none",
          magentaFIArray[0],
        );
      }
      else if (this.interactStep == 8) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "General Rhino",
          "That's QUEEN WASP to you! Have you no respect for ",
          "your rightful ruler?!",
          "",
          "rgb(228, 172, 164)",
          "none",
          rhinoFIArray[1],
        );
      }
      else if (this.interactStep == 9) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Magenta",
          "Rightful ruler my tail! She's a lying snake is what she ",
          "is!",
          "",
          "rgb(247, 216, 255)",
          "none",
          magentaFIArray[1],
        );
      }
      else if (this.interactStep == 10) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "I have no idea what is happening anymore...",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[5],
        );
      }
      else if (this.interactStep == 11) {
        this.setDebounce(movementTime);
        this.incrementStep();
        this.clearTextbox();
        getInteract(67).setMove("right");
      }
      else if (this.interactStep == 12) {
        this.setDebounce(movementTime);
        this.incrementStep();
        this.clearTextbox();
        getInteract(67).setMove("right");
      }
      else if (this.interactStep == 13) {
        getInteract(67).changeDirection("up");
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(68).setMove("left");
      }
      else if (this.interactStep == 14) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(68).setMove("left");
      }
      else if (this.interactStep == 15) {
        this.setDebounce(10);
        this.incrementStep();
        getInteract(68).changeDirection("up");
        this.createTextbox(
          "Eager Soldier",
          "Sir! We'll take care of these two for you!",
          "",
          "",
          "rgb(255, 82, 0)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 16) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Confident Soldier",
          "Just watch! We'll show him!",
          "",
          "",
          "rgb(219, 255, 34)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 17) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "General Rhino",
          "Very well then. Make your Queen proud you two!",
          "",
          "",
          "rgb(228, 172, 164)",
          "none",
          rhinoFIArray[0],
        );
      }
      else if (this.interactStep == 18) {
        this.setDebounce(10);
        this.incrementStep();
        this.clearTextbox();
        fadeObj.fadeOut(30, 0, 255, 255, 255, "battleStart");
        this.playSound(sfxBattleStart);
        this.startBattle("Armored Soldier Y")
      }
      else if (this.interactStep == 19) {
        if (scriptedBattleLost == true) {
          scriptedBattleLost = false;
          this.setDebounce(10);
          this.setStep(51);
          this.createTextbox(
            "Hercules",
            "Ak...! Gotta retreat for now!",
            "",
            "",
            "rgb(255, 252, 219)",
            "none",
            herculesFIArray[4],
          );
        }
        else {
          this.setDebounce(10);
          this.incrementStep();
          this.selfSwitchB = true;
          this.createTextbox(
            "Confident Soldier",
            "Hrng...General Rhino...we've failed you...",
            "",
            "",
            "rgb(219, 255, 34)",
            "none",
            "none",
          );
        }
      }
      else if (this.interactStep == 20) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "General Rhino",
          "Do not worry, this SilkWing is far too strong for ",
          "his own good.",
          "",
          "rgb(228, 172, 164)",
          "none",
          rhinoFIArray[0],
        );
      }
      else if (this.interactStep == 21) {
        this.setDebounce(movementTime);
        this.incrementStep();
        this.clearTextbox();
        getInteract(67).changeDirection("left");
        getInteract(67).setMove("left");
      }
      else if (this.interactStep == 22) {
        this.setDebounce(movementTime);
        this.incrementStep();
        this.clearTextbox();
        getInteract(67).setMove("left");
      }
      else if (this.interactStep == 23) {
        getInteract(67).changeDirection("right");
        getInteract(68).changeDirection("right");
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(68).setMove("right");
      }
      else if (this.interactStep == 24) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(68).setMove("right");
      }
      else if (this.interactStep == 25) {
        getInteract(68).changeDirection("left");
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(34).setMove("up");
      }
      else if (this.interactStep == 26) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "General Rhino",
          "I will deal with this problem, once and for all.",
          "",
          "",
          "rgb(228, 172, 164)",
          "none",
          rhinoFIArray[1],
        );
      }
      else if (this.interactStep == 27) {
        this.setDebounce(10);
        this.incrementStep();
        this.clearTextbox();
        fadeObj.fadeOut(30, 0, 255, 255, 255, "battleStart");
        this.playSound(sfxBattleStart);
        this.startBattle("General Rhino")
      }
      else if (this.interactStep == 28) {
        if (scriptedBattleLost == true) {
          scriptedBattleLost = false;
          this.setDebounce(10);
          this.setStep(51);
          this.createTextbox(
            "Hercules",
            "Ak...! Gotta retreat for now!",
            "",
            "",
            "rgb(255, 252, 219)",
            "none",
            herculesFIArray[4],
          );
        }
        else {
          this.setDebounce(10);
          this.incrementStep();
          this.createTextbox(
            "General Rhino",
            "How...? How could a SilkWing have such strength?",
            "",
            "",
            "rgb(228, 172, 164)",
            "none",
            rhinoFIArray[4],
          );
        }
      }
      else if (this.interactStep == 29) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "General Rhino",
          "Surely the book would have told the Queen of such ",
          "an anomaly!",
          "",
          "rgb(228, 172, 164)",
          "none",
          rhinoFIArray[4],
        );
      }
      else if (this.interactStep == 30) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Magenta",
          "Who says a SilkWing can't be strong too! Isn't that ",
          "right Herc?",
          "",
          "rgb(247, 216, 255)",
          "none",
          magentaFIArray[0],
        );
      }
      else if (this.interactStep == 31) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "Huh...huh...yeah...sure...",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[4],
        );
      }
      else if (this.interactStep == 32) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "General Rhino",
          "Mark my words, you traitors will be captured! And ",
          "when you are...",
          "",
          "rgb(228, 172, 164)",
          "none",
          rhinoFIArray[4],
        );
      }
      else if (this.interactStep == 33) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "General Rhino...?",
          "...",
          "",
          "",
          "rgb(228, 172, 164)",
          "none",
          rhinoFIArray[6],
        );
      }
      else if (this.interactStep == 34) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Queen Wasp",
          "NO!",
          "",
          "",
          "rgb(0, 0, 0)",
          "rgb(255, 238, 0)",
          rhinoFIArray[6],
        );
      }
      else if (this.interactStep == 35) {
        this.setDebounce(movementTime);
        this.incrementStep();
        this.clearTextbox();
        getInteract(34).changeDirection("down");
        getInteract(34).setMove("down");
      }
      else if (this.interactStep == 36) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(34).setMove("down");
      }
      else if (this.interactStep == 37) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(34).setMove("down");
      }
      else if (this.interactStep == 38) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(34).destroyInteract();
        getInteract(67).setMove("right");
      }
      else if (this.interactStep == 39) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(67).setMove("right");
      }
      else if (this.interactStep == 40) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(67).changeDirection("down");
        getInteract(67).setMove("down");
      }
      else if (this.interactStep == 41) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(67).setMove("down");
      }
      else if (this.interactStep == 42) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(67).setMove("down");
      }
      else if (this.interactStep == 43) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(67).destroyInteract();
        getInteract(68).setMove("left");
      }
      else if (this.interactStep == 44) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(68).setMove("left");
      }
      else if (this.interactStep == 45) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(68).changeDirection("down");
        getInteract(68).setMove("down");
      }
      else if (this.interactStep == 46) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(68).setMove("down");
      }
      else if (this.interactStep == 47) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(68).setMove("down");
      }
      else if (this.interactStep == 48) {
        this.setDebounce(10);
        this.incrementStep();
        getInteract(68).destroyInteract();
        this.createTextbox(
          "Magenta",
          "Uh...",
          "",
          "",
          "rgb(247, 216, 255)",
          "none",
          magentaFIArray[2],
        );
      }
      else if (this.interactStep == 49) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "What?",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[2],
        );
      }
      else if (this.interactStep == 50) {
        this.clearTextbox();
        this.noTransferSound();
        this.transferPlayer(
          "Highlands Entrance",
          4, 4,
          "Down",
          30, 0,
          0, 0, 0,
        );
        this.destroyInteract();
        this.endInteract();
      }
      else if (this.interactStep == 51) {
        marketBossSwitch = false;
        this.setDebounce(10);
        this.setStep(0);
        this.clearTextbox();
        this.playSound(sfxEscape);
        fadeObj.fadeOut(30, 0, 255, 255, 255, "checkpointTransfer");
        this.endInteract();
      }
    }
    //Part 3 Intro
    else if (this.id == 70) {
      if (this.interactStep == 0) {
        interacting = true;
        inCutscene = true;
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "Well that was...strange...",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 1) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Magenta",
          "Hey, if Wasp wants to call away all of her goons then ",
          "who am I to complain.",
          "",
          "rgb(247, 216, 255)",
          "none",
          magentaFIArray[0],
        );
      }
      else if (this.interactStep == 2) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Magenta",
          "Our secret base is just a bit further ahead! We're ",
          "almost there!",
          "",
          "rgb(247, 216, 255)",
          "none",
          magentaFIArray[0],
        );
      }
      else if (this.interactStep == 3) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(33).changeDirection("down");
        getInteract(33).setMove("down");
      }
      else if (this.interactStep == 4) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(33).setMove("down");
      }
      else if (this.interactStep == 5) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(33).setMove("down");
      }
      else if (this.interactStep == 6) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(33).setMove("down");
      }
      else if (this.interactStep == 7) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(33).setMove("down");
      }
      else if (this.interactStep == 8) {
        getInteract(33).destroyInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "(I wonder why Queen Wasp called all of the ",
          "HiveWings away anyway...)",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 9) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "(It's probably nothing we need to worry about.)",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 10) {
        this.setDebounce(10);
        this.incrementStep();
        this.clearTextbox();
        fadeObj.fadeOut(60, 0, 0, 0, 0, "interact");
      }
      else if (this.interactStep == 11) {
        this.setDebounce(150);
        this.incrementStep();
        fadeObj.fadeText("~ PART 3 ~", "Invasion", 60, 30, 255, 255, 255);
      }
      else if (this.interactStep == 12) {
        mapObj.setCheckpoint();
        this.updateMission("Head to the Crysalis' hideout!");
        fadeObj.fadeIn();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
        this.destroyInteract();
      }

    }
    //Gnat Encounter
    else if (this.id == 71) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(movementTime);
        this.incrementStep();
        this.movePlayer("down");
      }
      else if (this.interactStep == 1) {
        this.setDebounce(movementTime);
        this.incrementStep();
        this.movePlayer("down");
      }
      else if (this.interactStep == 2) {
        this.setDebounce(movementTime);
        this.incrementStep();
        this.movePlayer("down");
      }
      else if (this.interactStep == 3) {
        this.setDebounce(movementTime);
        this.incrementStep();
        this.movePlayer("down");
      }
      else if (this.interactStep == 4) {
        this.setDebounce(movementTime);
        this.incrementStep();
        player.changeDirection("right");
        this.movePlayer("right");
      }
      else if (this.interactStep == 5) {
        this.endPlayerMove();
        this.setDebounce(10);
        player.changeDirection("down");
        if (this.selfSwitchA == true) {
          this.setStep(12);
          this.createTextbox(
            "Hercules",
            "Alright, here we go again!",
            "",
            "",
            "rgb(255, 252, 219)",
            "none",
            herculesFIArray[1],
          );
        }
        else {
          this.selfSwitchA = true;
          this.incrementStep();
          this.createTextbox(
            "Hercules",
            "Wh-What is that thing?!",
            "",
            "",
            "rgb(255, 252, 219)",
            "none",
            herculesFIArray[2],
          );
        }
      }
      else if (this.interactStep == 6) {
        getInteract(33).changeDirection("up");
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "(It's spotted me!)",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[2],
        );
      }
      else if (this.interactStep == 7) {
        this.setDebounce(movementTime);
        this.incrementStep();
        this.clearTextbox();
        getInteract(33).setMove("up");
      }
      else if (this.interactStep == 8) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(33).setMove("up");
      }
      else if (this.interactStep == 9) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "Hey there um...whatever you are. You're not going ",
          "to hurt me...right?",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 10) {
        this.setDebounce(30);
        this.autoAdvanceStep();
        this.incrementStep();
        this.clearTextbox();
        this.playSound(sfxGnatCry);
      }
      else if (this.interactStep == 11) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "Wah!",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[2],
        );
      }
      else if (this.interactStep == 12) {
        this.setDebounce(10);
        this.incrementStep();
        this.clearTextbox();
        fadeObj.fadeOut(30, 0, 255, 255, 255, "battleStart");
        this.playSound(sfxBattleStart);
        this.startBattle("???")
      }
      else if (this.interactStep == 13) {
        if (scriptedBattleLost == true) {
          scriptedBattleLost = false;
          this.setDebounce(10);
          this.setStep(19);
          this.createTextbox(
            "Hercules",
            "Gotta get to safety! This thing is too strong!",
            "",
            "",
            "rgb(255, 252, 219)",
            "none",
            herculesFIArray[4],
          );
        }
        else {
          getInteract(33).destroyInteract();
          this.setDebounce(10);
          this.incrementStep();
          this.createTextbox(
            "Hercules",
            "Ha...take that you...metal...ball...thing...",
            "",
            "",
            "rgb(255, 252, 219)",
            "none",
            herculesFIArray[4],
          );
        }
      }
      else if (this.interactStep == 14) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "What even was that anyway?",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 15) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "Wait...is that another one over on that ridge?",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 16) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "And still more hiding in the grass!",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 17) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "I need to find Magenta! Right now!",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[2],
        );
      }
      else if (this.interactStep == 18) {
        this.setDebounce(10);
        this.clearTextbox();
        this.destroyInteract();
        this.endInteract();
      }
      else if (this.interactStep == 19) {
        gnatEncounterSwitch = false;
        this.setDebounce(10);
        this.setStep(0);
        this.clearTextbox();
        this.playSound(sfxEscape);
        fadeObj.fadeOut(30, 0, 255, 255, 255, "checkpointTransfer");
        this.endInteract();
      }
    }
    //Midway Scene
    else if (this.id == 72) {
      if (this.interactStep == 0) {
        interacting = true;
        inCutscene = true;
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Magenta",
          "With Hercules on our side, Wasp and her goonies ",
          "won't stand a chance!",
          "",
          "rgb(247, 216, 255)",
          "none",
          magentaFIArray[0],
        );
      }
      else if (this.interactStep == 1) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Magenta",
          "We'll make them feel the pain they've caused us for ",
          "so many years!",
          "",
          "rgb(247, 216, 255)",
          "none",
          magentaFIArray[5],
        );
      }
      else if (this.interactStep == 2) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "Magenta! There was this strange floating orb thing, ",
          "and it...",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[2],
        );
      }
      else if (this.interactStep == 3) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(33).setMove("right");
      }
      else if (this.interactStep == 4) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(33).setMove("right");
      }
      else if (this.interactStep == 5) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(33).setMove("right");
      }
      else if (this.interactStep == 6) {
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(33).setMove("right");
      }
      else if (this.interactStep == 7) {
        getInteract(33).destroyInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "Magenta, wait!",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[2],
        );
      }
      else if (this.interactStep == 8) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "(More and more of those things keep showing up!)",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[2],
        );
      }
      else if (this.interactStep == 9) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "(I've got a bad feeling about this...)",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[3],
        );
      }
      else if (this.interactStep == 10) {
        mapObj.setCheckpoint();
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
        this.destroyInteract();
      }

    }
    //Mantid Battle
    else if (this.id == 73) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.transferPlayer(
          "Hideout Entrance",
          4, 2,
          "up",
          30, 0,
          255, 255, 255,
        );
        this.incrementStep();
        player.changeDirection("up");
        this.clearTextbox();
        this.autoAdvanceStep();
      }
      else if (this.interactStep == 1) {  
        this.incrementStep();
        this.setDebounce(10);
        this.createTextbox(
          "Hercules",
          "(Well, this is it. Welcome to the Crysalis Hercules.)",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 2) {  
        this.incrementStep();
        this.setDebounce(10);
        this.createTextbox(
          "Hercules",
          "(I should probably warn everyone about those strange orb ",
          "things. Surely Magenta saw them too!)",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 3) {  
        this.incrementStep();
        this.setDebounce(10);
        this.createTextbox(
          "???",
          "Hercules! Stop!",
          "",
          "",
          "rgb(133, 255, 204)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 4) {  
        this.incrementStep();
        this.setDebounce(10);
        this.createTextbox(
          "Hercules",
          "(Wait, that voice! It can't be!)",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[2],
        );
      }
      else if (this.interactStep == 5) {  
        this.clearTextbox();
        player.changeDirection("down");
        this.createInteract(-1, 4, "right", 33, 4);
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(33).setMove("right");
      }
      else if (this.interactStep == 6) {  
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(33).setMove("right");
      }
      else if (this.interactStep == 7) {  
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(33).setMove("right");
      }
      else if (this.interactStep == 8) {  
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(33).setMove("right");
      }
      else if (this.interactStep == 9) {  
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(33).setMove("right");
      }
      else if (this.interactStep == 10) {  
        getInteract(33).changeDirection("up");
        this.setDebounce(movementTime);
        this.incrementStep();
        getInteract(33).setMove("up");
      }
      else if (this.interactStep == 11) {  
        this.incrementStep();
        this.setDebounce(10);
        this.createTextbox(
          "Mantid",
          "Hercules, what are you doing? Have you really ",
          "betrayed us?",
          "",
          "rgb(133, 255, 204)",
          "none",
          mantidFIArray[3],
        );
      }
      else if (this.interactStep == 12) {  
        this.incrementStep();
        this.setDebounce(10);
        this.createTextbox(
          "Hercules",
          "Mantid! What are you...I mean...I can explain!",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[2],
        );
      }
      else if (this.interactStep == 13) {  
        this.incrementStep();
        this.setDebounce(10);
        this.createTextbox(
          "Mantid",
          "You were always so well behaved, I never once ",
          "thought you could be capable of such treachery.",
          "",
          "rgb(133, 255, 204)",
          "none",
          mantidFIArray[3],
        );
      }
      else if (this.interactStep == 14) {  
        this.incrementStep();
        this.setDebounce(10);
        this.createTextbox(
          "Hercules",
          "Mantid, listen to me! I think something really bad is ",
          "about to happen!",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[2],
        );
      }
      else if (this.interactStep == 15) {  
        this.incrementStep();
        this.setDebounce(10);
        this.createTextbox(
          "Mantid",
          "Enough of this madness Hercules! Come back to the ",
          "hive and turn yourself in! You know it's the right ",
          "thing to do.",
          "rgb(133, 255, 204)",
          "none",
          mantidFIArray[1],
        );
      }
      else if (this.interactStep == 16) {  
        this.incrementStep();
        this.setDebounce(10);
        this.createTextbox(
          "Hercules",
          "...",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[3],
        );
      }
      else if (this.interactStep == 17) {  
        this.incrementStep();
        this.setDebounce(10);
        this.createTextbox(
          "Hercules",
          "No.",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 18) {  
        this.incrementStep();
        this.setDebounce(10);
        this.createTextbox(
          "Mantid",
          "What?",
          "",
          "",
          "rgb(133, 255, 204)",
          "none",
          mantidFIArray[2],
        );
      }
      else if (this.interactStep == 19) {  
        this.incrementStep();
        this.setDebounce(10);
        this.createTextbox(
          "Hercules",
          "I'm sorry Mantid, but, I can't go back. Not now.",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[3],
        );
      }
      else if (this.interactStep == 20) {  
        this.incrementStep();
        this.setDebounce(10);
        this.createTextbox(
          "Mantid",
          "Well then. I guess I'll just have to take you back ",
          "myself.",
          "",
          "rgb(133, 255, 204)",
          "none",
          mantidFIArray[1],
        );
      }
      else if (this.interactStep == 21) {
        this.incrementStep();
        this.setDebounce(10);
        this.clearTextbox();
        fadeObj.fadeOut(30, 0, 255, 255, 255, "battleStart");
        this.playSound(sfxBattleStart);
        this.startBattle("Mantid");
      }
      else if (this.interactStep == 22) {
        if (scriptedBattleLost == true) {
          scriptedBattleLost = false;
          this.setDebounce(10);
          this.setStep(21);
          this.createTextbox(
            "Hercules",
            "(No, I can't give up! I can win this!)",
            "",
            "",
            "rgb(255, 252, 219)",
            "none",
            herculesFIArray[4],
          );
        }
        else {
          this.incrementStep();
          this.setDebounce(10);
          this.createTextbox(
            "Mantid",
            "You...you really are quite strong, aren't you...",
            "",
            "",
            "rgb(133, 255, 204)",
            "none",
            mantidFIArray[4],
          );
        }

      }
      else if (this.interactStep == 23) {  
        getInteract(33).changeTexture(9);
        this.playSound(sfxDowned);
        this.incrementStep();
        this.setDebounce(10);
        this.createTextbox(
          "Hercules",
          "I'm sorry Mantid. I hope we can still be friends when ",
          "all this is over...",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[3],
        );
      }
      else if (this.interactStep == 24) {  
        this.incrementStep();
        this.setDebounce(10);
        this.createTextbox(
          "Magenta",
          "Hey, Herc! What's going on out there? Are you alright?",
          "",
          "",
          "rgb(247, 216, 255)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 25) {  
        this.incrementStep();
        this.setDebounce(10);
        this.createTextbox(
          "Hercules",
          "Yeah! I'll be in in a second!",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 26) {  
        this.incrementStep();
        this.setDebounce(10);
        this.createTextbox(
          "Hercules",
          "(I should probably bring her inside so she doesn't rat ",
          "this place out to the HiveWings.)",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 27) {
        this.clearTextbox();
        this.noTransferSound();
        this.transferPlayer(
          "Main Room",
          5, 6,
          "up",
          30, 0,
          0, 0, 0,
        );
        this.destroyInteract();
        this.endInteract();
      }
    }
    //"Do us proud" Friendly Rebel DB (Main Room)
    else if (this.id == 74) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.changeDirection("player");
        this.createTextbox(
          "Friendly Rebel",
          "Do us proud Hercules!",
          "",
          "",
          "rgb(50, 50, 255)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //Magenta (Main Room)
    else if (this.id == 75) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.changeDirection("player");
        this.createTextbox(
          "Magenta",
          "Well Herc, what do you think?",
          "",
          "",
          "rgb(247, 216, 255)",
          "none",
          magentaFIArray[0],
        );
      }
      else if (this.interactStep == 1) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "It's a pretty nice hideout I suppose. A little dusty ",
          "though...",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 2) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Magenta",
          "You should see this place when the winds pick up! It's ",
          "a total nightmare!",
          "",
          "rgb(247, 216, 255)",
          "none",
          magentaFIArray[0],
        );
      }
      else if (this.interactStep == 3) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "Great...",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[5],
        );
      }
      else if (this.interactStep == 4) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //"Oh wow!" Bubbly Rebel Pi (Main Room)
    else if (this.id == 76) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.changeDirection("player");
        this.createTextbox(
          "Bubbly Rebel",
          "Oh wow! You look like you could take on the whole HiveWing army!",
          "",
          "",
          "rgb(255, 174, 206)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //"You look tough" Skeptical Rebel P (Main Room)
    else if (this.id == 77) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.changeDirection("player");
        this.createTextbox(
          "Skeptical Rebel",
          "A new recruit eh? You look tough, but we'll have to see if you're ",
          "really as strong as Magenta says you are.",
          "",
          "rgb(200, 165, 255)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //Mantid and Guard (Storage Room)
    else if (this.id == 78) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Enthusiastic Rebel",
          "Ha ha! You won't be ratting us out today you cowardly loyalist!",
          "",
          "",
          "rgb(150, 150, 225)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Mantid",
          "...",
          "",
          "",
          "rgb(133, 255, 204)",
          "none",
          mantidFIArray[3],
        );
      }
      else if (this.interactStep == 2) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //Rebel Leader (Meeting Room)
    else if (this.id == 79) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.changeDirection("player");
        this.createTextbox(
          "Rebel Leader",
          "Magenta has told me great things of you Hercules. I expect you to ",
          "pull your weight around here and be a valuable asset to our cause.",
          "",
          "rgb(140, 213, 129)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //Hideout Bed
    else if (this.id == 80) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "It's been a long day. Time to hit the hay.",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 1) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "Here's to a better tomorrow...",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 2) {
        this.setDebounce(10);
        this.incrementStep();
        this.clearTextbox();
        fadeObj.fadeOut(60, 0, 0, 0, 0, "interactFadeMusic");
      }
      else if (this.interactStep == 3) {
        this.blackScreen(true);
        this.clearTextbox();
        this.noTransferSound();
        this.transferPlayer(
          "Sleeping Room Destroyed",
          unPos(player.xPos), unPos(player.yPos),
          player.direction,
          30, 0,
          0, 0, 0,
        );
        this.endInteract();
      }

    }
    //Ded Derg
    else if (this.id == 81) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "none",
          "There's no response.",
          "",
          "",
          "rgb(255, 255, 255)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //Scared Mantid
    else if (this.id == 82) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Mantid",
          "It's the Queen! She's sent these things to punish us! ",
          "I'm sorry! I'M SORRY!",
          "",
          "rgb(133, 255, 204)",
          "none",
          mantidFIArray[7],
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //Hideout Destroyed Bed
    else if (this.id == 84) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "(Something's not right. Now's not the time to be ",
          "sleeping.)",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[2],
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //Hideout Exit
    else if (this.id == 85) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "(There's no use in going outside right now.)",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //Hideout Destroyed Exit
    else if (this.id == 86) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "none",
          "The air outside is thick with smoke and soot.",
          "",
          "",
          "rgb(255, 255, 255)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
      }

    }
    //Hideout Intro
    else if (this.id == 87) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Friendly Rebel",
          "I see. And you saw these metal ball things too Magenta?",
          "",
          "",
          "rgb(50, 50, 255)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 1) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Magenta",
          "I think so. I...wasn't really paying attention...",
          "",
          "",
          "rgb(247, 216, 255)",
          "none",
          magentaFIArray[0],
        );
      }
      else if (this.interactStep == 2) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Friendly Rebel",
          "Well, as worrying as this is, I'm sure it's nothing for us to ",
          "be concerned with.",
          "",
          "rgb(50, 50, 255)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 3) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "Are you sure? These things were pretty tough, and ",
          "more are still arriving!",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[2],
        );
      }
      else if (this.interactStep == 4) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Friendly Rebel",
          "We've got our own fight to fight. And besides, if Wasp is too busy ",
          "dealing with these things that'll only work in our favor!",
          "",
          "rgb(50, 50, 255)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 5) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "I guess...",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[3],
        );
      }
      else if (this.interactStep == 6) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Friendly Rebel",
          "Don't worry Hercules! Now that you're with us, you won't have to ",
          "worry about Wasp and the HiveWings any more!",
          "",
          "rgb(50, 50, 255)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 7) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Magenta",
          "Yeah! And together, we're going to make her wish she ",
          "was never born!",
          "",
          "rgb(247, 216, 255)",
          "none",
          magentaFIArray[5],
        );
      }
      else if (this.interactStep == 8) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Friendly Rebel",
          "But first, you look absolutely spent Hercules! You should get some ",
          "rest in the sleeping area to the right. We can figure out our next ",
          "move tomorrow morning.",
          "rgb(50, 50, 255)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 9) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "Yeah, some sleep does sound nice. Thank you for ",
          "taking me in and all.",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[0],
        );
      }
      else if (this.interactStep == 10) {
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Friendly Rebel",
          "No problem! Welcome to the Crysalis family Hercules!",
          "",
          "",
          "rgb(50, 50, 255)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 11) {
        this.clearTextbox();
        mapObj.setCheckpoint();
        this.updateMission("Get some sleep!");
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
        this.destroyInteract();
      }

    }
    //Hideout Destroyed Intro
    else if (this.id == 88) {
      if (this.interactStep == 0) {
        this.beginInteract();
        this.setDebounce(820);
        this.incrementStep();
        this.autoAdvanceStep();
      }
      else if (this.interactStep == 1) {
        this.blackScreen(false);
        this.clearTextbox();
        mapObj.setCheckpoint();
        this.updateMission("Go to the meeting room.");
        this.setDebounce(10);
        this.setStep(0);
        this.endInteract();
        this.destroyInteract();
      }

    }
    //Final Scene
    else if (this.id == 89) {
      if (this.interactStep == 0) {
        interacting = true;
        inCutscene = true;
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Hercules",
          "M-Magenta...?",
          "",
          "",
          "rgb(255, 252, 219)",
          "none",
          herculesFIArray[2],
        );
      }
      else if (this.interactStep == 1) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "Magenta",
          "Herc...run!",
          "",
          "",
          "rgb(247, 216, 255)",
          "none",
          magentaFIArray[7],
        );
      }
      else if (this.interactStep == 2) {
        this.setDebounce(90);
        this.autoAdvanceStep();
        this.incrementStep();
        this.clearTextbox();
        this.playSound(sfxPantherCry);
      }
      else if (this.interactStep == 3) {
        this.setDebounce(10);
        this.incrementStep();
        this.clearTextbox();
        fadeObj.fadeOut(1, 0, 0, 0, 0, "interact");
      }
      else if (this.interactStep == 4) {
        this.beginInteract();
        this.setDebounce(10);
        this.incrementStep();
        this.createTextbox(
          "???",
          "GET DOWN!",
          "",
          "",
          "rgb(100, 100, 255)",
          "none",
          "none",
        );
      }
      else if (this.interactStep == 5) {
        this.setDebounce(160);
        this.incrementStep();
        this.autoAdvanceStep();
        this.clearTextbox();
        this.playSound(sfxSlipstream);
      }
      else if (this.interactStep == 6) {
        this.setDebounce(150);
        this.incrementStep();
        fadeObj.fadeText("To Be Continued...", "", 60, 30, 150, 0, 0);
      }
      else if (this.interactStep == 7) {
        mapObj.setCheckpoint();
        this.clearTextbox();
        this.setDebounce(10);
        this.setStep(0);
        this.destroyInteract();
      }

    }
  }


  //Passive Actions Function
  passiveAction() {
    //Passive Actions [Not Present in Every Interact]
    if (this.id == 2) {
      if (this.pActionDebounce == 0) {
        if (this.pActionStep == 0) {
          this.changeDirection("up");
          this.pActionStep = 1;
          this.pActionDebounce = 30;
        }
        else if (this.pActionStep == 1) {
          this.changeDirection("right");
          this.pActionStep = 2;
          this.pActionDebounce = 30;
        }
        else if (this.pActionStep == 2) {
          this.changeDirection("down");
          this.pActionStep = 3;
          this.pActionDebounce = 30;
        }
        else if (this.pActionStep == 3) {
          this.changeDirection("left");
          this.pActionStep = 0;
          this.pActionDebounce = 30;
        }
      }

    }
    else if ((this.id == 69) && (playerHealth == 42)) {
      if (this.pActionDebounce == 0) {
        if (this.pActionStep == 0) {
          this.changeDirection("up");
          this.pActionStep = 1;
          this.pActionDebounce = 30;
        }
        else if (this.pActionStep == 1) {
          this.changeDirection("right");
          this.pActionStep = 2;
          this.pActionDebounce = 30;
        }
        else if (this.pActionStep == 2) {
          this.changeDirection("down");
          this.pActionStep = 3;
          this.pActionDebounce = 30;
        }
        else if (this.pActionStep == 3) {
          this.changeDirection("left");
          this.pActionStep = 0;
          this.pActionDebounce = 30;
        }
      }

    }
    if (this.id == 83) {
      if (this.pActionDebounce == 0) {
        if (this.pActionStep == 0) {
          this.changeDirection("up");
          this.pActionStep = 1;
          this.pActionDebounce = 10;
        }
        else if (this.pActionStep == 1) {
          this.changeDirection("right");
          this.pActionStep = 2;
          this.pActionDebounce = 10;
        }
        else if (this.pActionStep == 2) {
          this.changeDirection("down");
          this.pActionStep = 3;
          this.pActionDebounce = 10;
        }
        else if (this.pActionStep == 3) {
          this.changeDirection("left");
          this.pActionStep = 0;
          this.pActionDebounce = 10;
        }
      }

    }


    //Passive Action Debounce Incrementer
    if (this.pActionDebounce > 0) {
      this.pActionDebounce -= 1;
    }

  }


  //Move Function
  move(direction) {
    if (direction != "none") {
      print("Interact " + this.id + " moved " + direction);
    }
    if ((this.moveDebounce != 0) && (direction != "none")) {
      if (direction == "up") {
        this.yPos -= pos(movementStep);
      }
      else if (direction == "down") {
        this.yPos += pos(movementStep);
      }
      else if (direction == "left") {
        this.xPos -= pos(movementStep);
      }
      else if (direction == "right") {
        this.xPos += pos(movementStep);
      }
      this.moveDebounce -= 1;

    }
    else if ((this.moveDebounce == 0) && (direction != "none")) {
      this.moveDirection = "none";
      this.xPos = round(this.xPos);
      this.yPos = round(this.yPos);
      getInteract("continue").interact();
    }

  }

  
  /*
  INTERACT EVENT BUILDER FUNCTIONS
  These functions are commonly used in the interact() function to determine what is done in each step of an interact's functionality.
  They are designed to make creating interactive objects and cutscenes a little more intuitive.
  */

  //Put this in the first step of the interact.
  beginInteract() {
    interacting = true;
  }

  //Put this in any final step of the interact.
  endInteract() {
    interacting = false;
    inCutscene = false;
  }

  //This function increments the interactStep variable by the value passed in the argument. If no value is given, then it increments by 1.
  incrementStep(increment) {
    if (increment != null) {
      this.interactStep += increment;
    }
    else {
      this.interactStep += 1;
    }
  }

  //This function sets the interactStep variable to the value passed in the argument.
  setStep(set) {
    this.interactStep = set;
  }

  //This function sets the debounce, or wait time, before the player or game can move to the next step of the interact. You need to set it in every
  //step, and it is usually set to 10 (10 frames). Use the movementTime variable with this function when having an interact or the player move (this
  //can be pretty finicky, and you might need to add + 1 to some of these to have the movements line up properly and not break collisions; this can
  //take some trial and error).
  setDebounce(set) {
    interactDebounce = set;
  }

  //This function caused this step to automatically advance to the next.
  autoAdvanceStep() {
    this.autoAdvance = true;
  }

  /*
  This function creates an interact of the given type and texture at the given location in the current area. xPos and yPos determine it's position (0-9, 0-9).
  direction determines the facing direction of the interact. type determines what functionality the interact will have and texture determines the interact's
  texture.
  */
  createInteract(xPos, yPos, direction, type, texture) {
    mapObj.currentAreaInteracts.push(new Interact(pos(xPos), pos(yPos), direction, type, texture));
  }

  //This function deletes the interact.
  destroyInteract() {
    this.remove = true;
  }

  //This function changes the interact's type id to the passed argument, which determines what functionality it will have.
  changeInteract(set) {
    this.id = set;
  }

  //This function changes the interact's texture id to the passed argument, which determines what sprite from the interacts spritesheet this interact
  //will be drawn as.
  changeTexture(set) {
    this.textureID = set;
  }

  //This function changes the direction that the interact is facing based on what is passed in the argument. If "player" is passed, the interact will
  //turn to face the player (this will only consistently work if the player was already facing the interact).
  changeDirection(direction) {
    if (direction == "player") {
      if (playerSprite == intArray[0]) {
        this.direction = "right";
      }
      else if (playerSprite == intArray[1]) {
        this.direction = "up";
      }
      else if (playerSprite == intArray[2]) {
        this.direction = "left";
      }
      else if (playerSprite == intArray[3]) {
        this.direction = "down";
      }
    }
    else if (direction == "up") {
      this.direction = "up";
    }
    else if (direction == "down") {
      this.direction = "down";
    }
    else if (direction == "left") {
      this.direction = "left";
    }
    else if (direction == "right") {
      this.direction = "right";
    }
    else {
      print("Unable to turn due to invalid direction.");
    }
  }

  //This function makes the interact spend this step moving in the direction specified. The step will auto advance when done, so no autoAdvance() is
  //required. You'll likely want to pass the movementTime variable into setDebounce.
  setMove(direction) {
    this.moveDirection = direction;
    this.moveDebounce = movementTime;
  }

  //This function moves the player in the desired direction. You might want to put an autoAdvanceStep() along with it.
  movePlayer(direction) {
    player.moveDirection = direction;
    player.moveDebounce = movementTime;
  }

  //Put this in the step after the player has finished moving.
  endPlayerMove(){
    player.moveDirection = "none";
  }

  //This function starts a battle against the chosen enemy.
  startBattle(enemy) {
    battleObj = new Battle(enemy);
    battleScripted = true;
  }

  //This function generates a textbox with the given specifications. It is a good idea to have each argument on its own line.
  createTextbox(speaker, text1, text2, text3, textColor, textOutline, icon) {
    textbox = new TextBox(text1, text2, text3, textColor, textOutline, speaker, icon);
  }

  //This function clears the current textbox so that it does not remain on screen after it is no longer needed. It can be easy to forget this one!
  clearTextbox() {
    textbox = 0;
  }

  //This function plays the sound whose variable is passed in the argument.
  playSound(sound) {
    sound.play();
  }

  /*
  This function transfers the player to another area, or another location in the same area. destinationArea is the area to be transferred to,
  destinationXPos and destinationYPos are the coordinates to be transferred to ([1-8], [1-8]). destinationDirection is the direction the player
  will be facing. fadeR, fadeG, and fadeB determine the color of the fade. fadeSpeed is the speed of the fade and holdTime determines how long
  the fade will remain at max.
  */
  transferPlayer(destinationArea, destinationXPos, destinationYPos, destinationDirection, fadeSpeed, holdTime, fadeR, fadeG, fadeB) {
    mapObj.transferToArea = destinationArea;
    nextAreaData = currentAreaData.findArea(destinationArea);
    player.moveDebounce = 0;
    player.moveDirection = "none";
    mapObj.transferDirection = "point";
    mapObj.xTransfer = pos(destinationXPos);
    mapObj.yTransfer = pos(destinationYPos);
    mapObj.transferPlayerDirection = destinationDirection;
    fadeObj.fadeOut(fadeSpeed, holdTime, fadeR, fadeG, fadeB, "transfer");
  }

  noTransferSound() {
    fadeObj.doTransferSound = false;
  }

  /*
  This function is used to modify the player's health. Set mode to "increment" to add or subtract from the player's health and set mode to "set" to set the
  player's health to a specific value. Set type to "number" to make it change or set a specific number, and set type to "percent" to make it change or set
  by a percentage of the player's maximum health. Percentages are input as decimals (0.25 = 25%).
  */
  changePlayerHealth(ammount, mode, type) {
    if (mode == "increment") {
      if (type == "number") {
        playerHealth += ammount;
      }
      else if (type == "percent") {
        playerHealth += (playerMaxHealth * ammount);
      }
    }
    else if (mode == "set") {
      if (type == "number") {
        playerHealth = ammount;
      }
      else if (type == "percent") {
        playerHealth = (playerMaxHealth * ammount);
      }
    }
  }

  //This function sets the current mission text on the pause screen.
  updateMission(text) {
    missionText = text;
  }

  blackScreen(state) {
    blackScreenActive = state;
  }

}


//Fading System Object
class Fade {
  constructor() {
    this.mode = "none";
    this.state = "none";
    this.fadeTimer = 0;
    this.fadeTime = 0;
    this.holdTime = 0;
    this.trans = 0;
    this.r = 255;
    this.g = 255;
    this.b = 255;

    this.text1 = "";
    this.text2 = "";
    this.textTimer = 0;
    this.textFadeTime = 0;
    this.textHoldTime = 0;
    this.textR = 255;
    this.textG = 255;
    this.textB = 255;
    this.textTrans = 0;
    this.textState = "none";

    this.startGameDelay = 0;

    this.doTransferSound = true;
  }

  fadeOut(fadeTime, holdTime, r, g, b, mode) {
    this.fadeTime = fadeTime;
    this.holdTime = holdTime;
    this.r = r;
    this.g = g;
    this.b = b;
    this.mode = mode;
    this.state = "out";
    this.fadeTimer = 0;
    this.trans = 0;
  }

  fadeIn(fadeTime) {
    this.state = "in";
    this.fadeTimer = 0;
    this.trans = 255;
    if (fadeTime != null) {
      this.fadeTime = fadeTime;
    }

  }

  drawFade() {
    if (this.state == "out") {
      if ((this.fadeTimer == 0) && (this.mode == "transfer") && (mapObj.currentArea != mapObj.transferToArea) && (this.doTransferSound)) {
        sfxTransfer.play();
      }
      this.doTransferSound = true;
      
      if (this.fadeTimer < this.fadeTime) {
        if ((this.mode == "battleStart") || (this.mode == "interactFadeMusic")) {
          mapObj.mapTheme.setVolume(1 - (this.trans / 255));
        }
        else if (this.mode == "startGame") {
          titleTheme.setVolume(1 - (this.trans / 255));
        }

        this.trans += (255 / this.fadeTime);
        this.fadeTimer += 1;
      }
      else {
        this.fadeTimer = 0;
        this.trans = 255;
        this.state = "faded";
      }

    }
    else if (this.state == "faded") {
      if (this.fadeTimer < this.holdTime) {
        this.fadeTimer += 1;
      }
      else {
        this.fadeAction();
      }
    }
    else if (this.state == "in") {
      if (this.fadeTimer < this.fadeTime) {
        if ((this.mode == "battleEnd") || (this.mode == "startGame")) {
          mapObj.mapTheme.setVolume(1 - (this.trans / 255));
        }

        this.trans -= (255 / this.fadeTime);
        this.fadeTimer += 1;
      }
      else {
        this.fadeTimer = 0;
        this.trans = 0;
        this.state = "none";
        this.mode = "none";
      }

    }
  
    noStroke();
    fill(this.r, this.g, this.b, this.trans);
    if (((this.mode == "interact") || (this.mode == "interactFadeMusic") || (this.mode == "startGame")) && (this.state == "interact faded")) {
      if (this.startGameDelay == 0) { //Check to make sure the title screen doesn't flash for a frame after the start fade has finished.
        this.startGameDelay += 1;
        rect(0, 0, pos(10), pos(12));
      }
      else {
        rect(0, 0, pos(10), pos(10));
      }

    }
    else {
      rect(0, 0, pos(10), pos(12));
    }

  }

  //Executes actions based on what type of fade is ocurring.
  fadeAction() {
    if (this.mode == "transfer") {
      mapObj.currentArea = nextAreaData.areaName;
      if (mapObj.transferDirection == "up") {
        player.yPos = pos(8);
      }
      else if (mapObj.transferDirection == "down") {
        player.yPos = pos(1);
      }
      else if (mapObj.transferDirection == "left") {
        player.xPos = pos(8);
      }
      else if (mapObj.transferDirection == "right") {
        player.xPos = pos(1);
      }
      else if (mapObj.transferDirection == "point") {
        player.xPos = mapObj.xTransfer;
        player.yPos = mapObj.yTransfer;
      }
      if (mapObj.transferPlayerDirection != "none") {
        player.changeDirection(mapObj.transferPlayerDirection);
        mapObj.transferPlayerDirection = "none";
      }
      
      if (nextAreaData.areaName != currentAreaData.areaName) {
        this.doSpecialTransferActions();
        mapObj.setMapObjects();
        currentAreaData = nextAreaData;
      }
      
      gameMode = "inMap";
      this.fadeIn();
    }
    else if (this.mode == "checkpointTransfer") {
      mapObj.transferToCheckpoint();
      fixPosition(player);
      this.fadeIn();
    }
    else if (this.mode == "startGame") {
      titleTheme.stop();
      gameMode = "inMap";
      mapObj.mapTheme.setVolume(0);
      mapObj.mapTheme.play();
      this.state = "interact faded";
    }
    else if (this.mode == "battleStart") {
      gameMode = "inBattle";
      mapObj.mapTheme.setVolume(0);
      battleObj.setup();
      if (battleObj.enemy == "General Rhino") {
        battleTheme = rhinoTheme;
      }
      else if (battleObj.enemy == "???") {
        battleTheme = droneAttack;
      }
      else {
        battleTheme = mainBattleTheme;
      }

      battleTheme.play();
      this.fadeIn();
    }
    else if (this.mode == "battleEnd") {
      textbox = 0;
      if (gameMode == "wonBattle") {
        GS_battleWins += 1;
        if (battleScripted == true) {
          getInteract("continue").interact();
        }
  
      battleObj.levelUp = false;
      }
      else if (gameMode == "lostBattle") {
        GS_battleLosses += 1;
        playerHealth = playerMaxHealth;
        if (battleScripted == true) {
          scriptedBattleLost = true;
          getInteract("continue").interact();
        }
        else {
          mapObj.transferToCheckpoint();
    
        }

      }
      else if (gameMode == "enemyFlee") {
        GS_enemyFlees += 1;
        if (battleScripted == true) {
          getInteract("continue").interact();
        }
      }

      tint(255);
      mapObj.encounterChance = 0;
      gameMode = "inMap";
      outOfBattle = true;
      keyStack = [];
      this.fadeIn();
    }
    else if ((this.mode == "interact") || (this.mode == "interactFadeMusic")) {
      this.state = "interact faded";
      getInteract("continue").interact();
    }
    
  }

  /*
    This function performs actions like displaying the area name box, changing the BGM, and changing the background
    when that is necessary. The added (mapObj.transferDirection == "point") condition is for if the player is using one of
    the testing keys or is teleported to the area via some other sort of event that is not moving to the edge of the screen.
    Remember to include one of these for every possible transition that would require changeing one of these features! It can be
    easy to forget things like a cutscene teleporting the player to another area with a differenc background that is between two other areas with the same 
    background.
    The (mapObj.transferDirection == "<direction>") conditional is to prevent redundant appearances of area name boxes and the like.
  */
  doSpecialTransferActions() {
    mapBG = nextAreaData.background;
    mapObj.encounterArea = nextAreaData.doEncounters;
    if (currentAreaData.generalAreaTitle != nextAreaData.generalAreaTitle) {
      areaNameBox.instantiate(nextAreaData.generalAreaTitle);
    }
    if (currentAreaData.music != nextAreaData.music) {
      if (nextAreaData.music == "none") {
        mapObj.mapTheme.stop();
      }
      else {
        mapObj.mapTheme.stop();
        mapObj.mapTheme = nextAreaData.music;
        mapObj.mapTheme.setLoop(true);
        mapObj.mapTheme.play();
      }
    }
    mapObj.mapThemeVolume = nextAreaData.musicVolume;
    mapObj.mapTheme.setVolume(mapObj.mapThemeVolume);

  }

  checkFade(checkFor) {
    if (checkFor == "interact") {
      if ((((this.state == "interact faded") && ((this.mode == "interact") || (this.mode == "startGame"))) || (this.state == "none")) && (this.textState == "none")) {
        return false;
      }
      else {
        return true;
      }

    }
    else {
      if ((this.state == "none") && (this.textState == "none")) {
        return false;
      }
      else {
        return true;
      }

    }

  }

  fadeText(text1, text2, fadeTime, holdTime, r, g, b) {
    this.text1 = text1;
    this.text2 = text2;
    this.textFadeTime = fadeTime;
    this.textHoldTime = holdTime;
    this.textTimer = 0;
    this.textR = r;
    this.textG = g;
    this.textB = b;
    this.textState = "in";
  }

  drawText() {
    if (this.textState == "in") {  
      if (this.textTimer < this.textFadeTime) {
        this.textTrans += (255 / this.textFadeTime);
        this.textTimer += 1;
      }
      else {
        this.textTimer = 0;
        this.textTrans = 255;
        this.textState = "shown";
      }

    }
    if (this.textState == "shown") {  
      if (this.textTimer < this.textHoldTime) {
        this.textTimer += 1;
      }
      else {
        this.textTimer = 0;
        this.textState = "out";
      }

    }
    else if (this.textState == "out") {
      if (this.textTimer < this.textFadeTime) {
        this.textTrans -= (255 / this.textFadeTime);
        this.textTimer += 1;
      }
      else {
        this.textTimer = 0;
        this.textTrans = 0;
        this.textState = "none";
        getInteract("continue").interact();
      }

    }
  
    noStroke();
    textSize(pos(1));
    fill(this.textR, this.textG, this.textB, this.textTrans);
    textAlign(CENTER, CENTER);
    if (this.text2 == "") {
      text(this.text1, pos(5), pos(6));
    }
    else {
      text(this.text1, pos(5), pos(5.5));
      text(this.text2, pos(5), pos(6.5));
    }

  }
  
}


//Text Box Object
class TextBox {
  constructor(text1, text2, text3, textColor, textOutline, speaker, icon) {
    this.text1 = text1;
    this.text2 = text2;
    this.text3 = text3;
    this.textColor = textColor;
    this.textOutline = textOutline;
    this.speaker = speaker;
    this.icon = icon;
  }

  draw() {
    noStroke();
    textAlign(LEFT, BOTTOM);
    fill(this.textColor);
    if (this.textOutline != "none") {
      stroke(this.textOutline);
      strokeWeight(pos(0.04));      
    }
    
    //Determine if there is a face icon or not and draw text box accordingly.
    if (this.icon == "TBA") { //For when a face icon graphic will be used but hasn't been added yet.
      if (this.speaker != "none") {
        textSize(pos(0.5));
        text(this.speaker + ":", pos(0.1), pos(10.5));
      }
      textSize(pos(0.33));
      text(this.text1, pos(0.1), pos(10.84));
      text(this.text2, pos(0.1), pos(11.17));
      text(this.text3, pos(0.1), pos(11.51));
      rect(pos(8), pos(10), pos(2), pos(2));
    }
    else if (this.icon == "none") {
      if (this.speaker != "none") {
        textSize(pos(0.5));
        text(this.speaker + ":", pos(0.1), pos(10.5));
      }
      textSize(pos(0.33));
      text(this.text1, pos(0.1), pos(10.84));
      text(this.text2, pos(0.1), pos(11.17));
      text(this.text3, pos(0.1), pos(11.51));
    }
    else {
      if (this.speaker != "none") {
        textSize(pos(0.5));
        text(this.speaker + ":", pos(0.1), pos(10.5));
      }
      textSize(pos(0.33));
      text(this.text1, pos(0.1), pos(10.84));
      text(this.text2, pos(0.1), pos(11.17));
      text(this.text3, pos(0.1), pos(11.51));
      image(this.icon, pos(8), pos(10));
    }
  }

}


//Area Name Box Object
class AreaNameBox {
  constructor() {
    this.name = "none";
    this.xPos = pos(6);
    this.yPos = pos(9);
    this.trans = 0;
    this.timing = 0;
  }


  draw() {
    if (this.timing < 31) {
      this.xPos += (pos(4) / 30);
      this.trans -= (175 / 30);
    }

    noStroke();
    fill(0, 0, 0, this.trans);
    rect(this.xPos, this.yPos, pos(4), pos(3));
    fill(255, 255, 255, this.trans);
    let textSizeInc = pos(0.5);
    textSize(textSizeInc);
    while (textWidth(this.name) > pos(3.8)) {
      textSizeInc -= 1;
      textSize(textSizeInc);
    }

    textAlign(CENTER, CENTER);
    text(this.name, this.xPos + pos(2), this.yPos + pos(0.5));
    }


  instantiate(name) {
    this.name = name;
    this.trans = 175;
    this.xPos = pos(6);
    this.timing = 90;
  }

}


//Checkpoint Saved Indicator Object
class CPSaved {
  constructor() {
    this.xPos = 0;
    this.yPos = pos(9.7);
    this.trans = 0;
    this.timing = 0;
  }


  draw() {
    if (this.timing < 31) {
      this.trans -= (255 / 30);
    }

    stroke(0, 0, 0, this.trans);
    strokeWeight(pos(0.04));
    fill(255, 255, 255, this.trans);
    textSize(pos(0.3));
    textAlign(LEFT, TOP);
    text("Checkpoint Saved", this.xPos, this.yPos);
    }


  instantiate() {
    this.trans = 255;
    this.timing = 90;
  }

}


//-------------------------VARIABLES-------------------------


//Core Vars
let gameMode;
let CANVAS_TILE_SIZE = 64; //Sets the height/width of each of the square tiles on the canvas. The canvas width is set to 10 * tileSize and height
                           //set to 12 * tileSize by default.
let programStarted = false;
let keyStack = [];

/*
These two variables determine how quickly the player or an interact will move. movementTime determines the number of frames spent on movement 
(often used in setting debounces to have the game wait until movement is done), and movementStep determines the number of tiles moved per frame 
(best set as a decimal). It is recommended that these be changed together, for if they do not multiply to equal a whole number, it will result 
in collisions breaking. That said, they don't really need to be changed anyway.
*/
let movementTime = 10;
let movementStep = 0.1;


//Stat Vars
let playerMaxHealth = 100;
let playerHealth = playerMaxHealth;
let playerAtkPower = 10;
let playerXP = 0;
let playerLevel = 1;
let xpToLevelUp = 20;
let missionText = "Escape through the Median!";
let playerInitialDirection = "down";
let encounterBufferSteps = 0;


//Testing Vars
let testingWaypoint = "Outer Webs Center";
let testingWaypointX = pos(5);
let testingWaypointY = pos(5);
let godMode = false;
let glassCanon = false;
let doRandomEncounters = true;
let cinematicMode = false;
let testingKeys = false; //See note about the Y key [testing waypoint] in the user guide.
let skipCutscenes = false;
let skipIntro = false;
let fastMove = true;
let ghostMode = false;
let doTallGrass = false;


//Daylight Cycle
let doDaylightCycle = false;
let daylightSpeed = 0.005;

let blackScreenActive = false;


//Game Stat Vars
let GS_battleWins = 0;
let GS_battleLosses = 0;
let GS_battleFlees = 0;
let GS_enemyFlees = 0;
let GS_attacks = 0;
let GS_attackMisses = 0;
let GS_defends = 0;
let GS_heals = 0;
let GS_strAttacks = 0;
let GS_strAttackMisses = 0;
let GS_rests = 0;


//Object Vars
let setupObj = new Setup();
let checkObj = new Check();
let mapObj = new GameMap();
let battleObj;
let areasArray = []; //Array containing Area objects with data about every area in the game.
let currentAreaData; //Data about the current area the player is in.
let nextAreaData; //Data about the area the player is going to when transfering.
let player = new Player(pos(5), pos(7));
let fadeObj = new Fade();
let textbox = 0;
let areaNameBox = new AreaNameBox();
let cpSaved = new CPSaved();


//Cutscene Vars/Switches
let inCutscene = false;

let introSceneSwitch = false;
let passGetSwitch = false;
let abandonedHouseIntroSwitch = false;
let medianBossSwitch = false;
let outerWebsBossSwitch = false;
let partTwoIntroSwitch = false;
let marketBossSwitch = false;
let partThreeIntroSwitch = false;
let gnatEncounterSwitch = false;
let midwaySceneSwitch = false;
let mantidBossSwitch = false;
let hideoutIntroSwitch = false;
let destroyedHideoutIntroSwitch = false;
let finalSceneSwitch = false;


//Title Screen Vars
let titleHercY = pos(7);
let titleMagY = pos(7);
let titleCycle = 0;


//Interact Logic Vars
let interacting = false;
let interactDebounce = 0;


/*
Interact Array Vars:
Each of these arrays will store the interact objects for an area. The currentAreaInteracts variable will then reference the one
that corresponds with the current area, via the setMapObjects() function in the Map object. Each of these arrays is first
set up by the setupInteracts() function, which is called once in the setup() funciton.
*/
let testArea1Interacts = [];
let herculesHouseInteracts = [];
let innerWebsSouthInteracts = [];
let innerWebsWestInteracts = [];
let mantidHouseInteracts = [];
let innerWebsCheckpointInteracts = [];
let theMedianInteracts = [];
let innerWebsEastInteracts = [];
let innerWebsCenterInteracts = [];
let abandonedHouseInteracts = [];
let innerWebsNorthInteracts = [];
let outerWebsCenterInteracts = [];
let outerWebsEastInteracts = [];
let stairwellTopInteracts = [];

let stairwellBottomInteracts = [];
let marketEntranceInteracts = [];
let marketNorthInteracts = [];
let bedStoreInteracts = [];
let bakeryInteracts = [];
let marketEastInteracts = [];
let marketEdgeNorthInteracts = [];
let marketEdgeEastInteracts = [];
let marketEdgeWestInteracts = [];
let marketCenterInteracts = [];
let marketWestInteracts = [];
let mainEntranceInteracts = [];

let highlandsEntranceInteracts = [];
let highlandsWestInteracts = [];
let rockyHillNorthInteracts = [];
let rockyHillSouthInteracts = [];
let rockyHillCliffInteracts = [];
let hideoutEntranceInteracts = [];

let mainRoomInteracts = [];
let storageRoomInteracts = [];
let meetingRoomInteracts = [];
let sleepingRoomInteracts = [];

let mainRoomDestroyedInteracts = [];
let storageRoomDestroyedInteracts = [];
let meetingRoomDestroyedInteracts = [];
let sleepingRoomDestroyedInteracts = [];


//Title Sprite Vars
let titleScreenBG;
let hercTitleSprite;
let magTitleSprite;


//Main Map Image Vars
let mapBG;
let playerSprite;


//Map BG Vars
let silkFloorBG;
let savannahBG;
let cobblestoneBG;
let grassBG;
let stoneBG;


//Character Sprite Vars
let intSpritesheet;
let intArray = [];


//Map Tile Vars
let tileSpritesheet;
let tileArray = [];


//Face Icon Sprite Vars
let herculesFISpritesheet;
let herculesFIArray = [];
let mantidFISpritesheet;
let mantidFIArray = [];
let rhinoFISpritesheet;
let rhinoFIArray = [];
let magentaFISpritesheet;
let magentaFIArray = [];


//Scripted Battle Vars
let battleScripted = false;
let scriptedBattleLost = false;


//Main Battle Image Vars
let enemyImgID;
let battleBG;


//Battle Sprite Vars
let battleSpritesheet;
let battleArray = [];

let defendIcon;


//Battle Background Image Vars
let innerWebsBattleBG;
let outerWebsBallleBG;
let marketBattleBG;
let highlandsBallleBG;


//Transition Vars
let outOfBattle = false;


//Music Vars
let titleTheme;
let battleTheme;
let mainBattleTheme;
let rhinoTheme;
let iWebsTheme1;
let iWebsTheme2;
let oWebsTheme;
let marketTheme;
let highlandsTheme;
let endingTheme;


//SFX Vars
let sfxBattleStart;
let sfxBattleWin;
let sfxBuzzer;
let sfxCancel;
let sfxChargeUp;
let sfxCursor;
let sfxDowned;
let sfxEnemyAtk;
let sfxEquip;
let sfxEscape;
let sfxEvade;
let sfxExclamation;
let sfxExplosion;
let sfxHit;
let sfxLockedDoor;
let sfxLoss;
let sfxRegen;
let sfxSelect;
let sfxStart;
let sfxTransfer;
let sfxBump;
let sfxGnatCry;
let sfxPantherCry;
let sfxSlipstream;


//-------------------------MAIN FUNCTIONS-------------------------


//Preload
function preload() {
  try{
    //Load Images
    titleScreenBG = loadImage('SPRITES/BACKGROUNDS/BG_Title_Screen.png');
    hercTitleSprite = loadImage('SPRITES/Sprite_Hercules_Title.png');
    magTitleSprite = loadImage('SPRITES/Sprite_Magenta_Title.png');

    silkFloorBG = loadImage('SPRITES/BACKGROUNDS/BG_Silk_Floor_640x640.png');
    savannahBG = loadImage('SPRITES/BACKGROUNDS/BG_Savannah_640x640.png');
    cobblestoneBG = loadImage('SPRITES/BACKGROUNDS/BG_Cobblestone_640x640.png');
    grassBG = loadImage('SPRITES/BACKGROUNDS/BG_Grass_640x640.png');
    stoneBG = loadImage('SPRITES/BACKGROUNDS/BG_Stone_640x640.png');

    innerWebsBattleBG = loadImage('SPRITES/BACKGROUNDS/BG_Inner_Webs_Battleback_640x640.png');
    outerWebsBattleBG = loadImage('SPRITES/BACKGROUNDS/BG_Outer_Webs_Battleback_640x640.png');
    marketBattleBG = loadImage('SPRITES/BACKGROUNDS/BG_Market_Battleback_640x640.png');
    highlandsBattleBG = loadImage('SPRITES/BACKGROUNDS/BG_Highlands_Battleback_640x640.png');

    defendIcon = loadImage('SPRITES/Sprite_Defend_Icon_64x64.png');


    intSpritesheet = loadImage('SPRITES/INTERACT_SPRITESHEET.png');
    tileSpritesheet = loadImage('SPRITES/TILE_SPRITESHEET.png');
    battleSpritesheet = loadImage('SPRITES/BATTLE_SPRITESHEET.png');
    herculesFISpritesheet = loadImage('SPRITES/HERCULES_FI_SPRITESHEET.png');
    mantidFISpritesheet = loadImage('SPRITES/MANTID_FI_SPRITESHEET.png');
    rhinoFISpritesheet = loadImage('SPRITES/RHINO_FI_SPRITESHEET.png');
    magentaFISpritesheet = loadImage('SPRITES/MAGENTA_FI_SPRITESHEET.png');


    //Load Sounds
    titleTheme = loadSound('SOUNDS/Music_Title_Theme.ogg');
    mainBattleTheme = loadSound('SOUNDS/Music_Ready!_Set!_Battle!.ogg');
    rhinoTheme = loadSound('SOUNDS/Music_General_Rhino.ogg');
    droneAttack = loadSound('SOUNDS/Music_Drone_Attack.ogg');
    iWebsTheme1 = loadSound('SOUNDS/Music_In_The_Webs.ogg');
    iWebsTheme2 = loadSound('SOUNDS/Music_Inner_Webs_Escape.ogg');
    oWebsTheme = loadSound('SOUNDS/Music_The_Outer_Webs.ogg');
    marketTheme = loadSound('SOUNDS/Music_In_The_Market.ogg');
    highlandsTheme = loadSound('SOUNDS/Music_The_Highlands.ogg');
    endingTheme = loadSound('SOUNDS/Music_Scorching.ogg');

    sfxBattleStart = loadSound('SOUNDS/SFX_Battle_Start.wav');
    sfxBattleWin = loadSound('SOUNDS/SFX_Battle_Win.wav');
    sfxBuzzer = loadSound('SOUNDS/SFX_Buzzer.wav');
    sfxCancel = loadSound('SOUNDS/SFX_Cancel.wav');
    sfxChargeUp = loadSound('SOUNDS/SFX_Charge_Up.wav');
    sfxCursor = loadSound('SOUNDS/SFX_Cursor.wav');
    sfxCursor.setVolume(0.5);
    sfxDowned = loadSound('SOUNDS/SFX_Downed.wav');
    sfxEnemyAtk = loadSound('SOUNDS/SFX_Enemy_Attack.wav');
    sfxEquip = loadSound('SOUNDS/SFX_Equip.wav');
    sfxEscape = loadSound('SOUNDS/SFX_Escape.wav');
    sfxEvade = loadSound('SOUNDS/SFX_Evade.wav');
    sfxExclamation = loadSound('SOUNDS/SFX_Exclamation.wav');
    sfxExplosion = loadSound('SOUNDS/SFX_Explosion.wav');
    sfxHit = loadSound('SOUNDS/SFX_Hit.wav');
    sfxLockedDoor = loadSound('SOUNDS/SFX_Locked_Door.wav');
    sfxLoss = loadSound('SOUNDS/SFX_Loss.wav');
    sfxRegen = loadSound('SOUNDS/SFX_Regen.wav');
    sfxSelect = loadSound('SOUNDS/SFX_Select.wav');
    sfxStart = loadSound('SOUNDS/SFX_Start.wav');
    sfxTransfer = loadSound('SOUNDS/SFX_Transfer.wav');
    sfxBump = loadSound('SOUNDS/SFX_Bump.wav');
    sfxBump.setVolume(5);
    sfxGnatCry = loadSound('SOUNDS/SFX_Gnat_Cry.wav');
    sfxPantherCry = loadSound('SOUNDS/SFX_Panther_Cry.wav');
    sfxSlipstream = loadSound('SOUNDS/SFX_Slipstream.wav');
  }
  catch(e) {
    print(e);
  }
}


//Setup
function setup() {
  try {
    //Canvas Setup
    if (cinematicMode == true) {
      createCanvas(1536, 864);
      translate(500, 175);
    }
    else {
      createCanvas(pos(10), pos(12));
    }

    frameRate(30);
    background(0);

    //Setup Spritesheet Arrays
    setupObj.decompileSpritesheet(tileSpritesheet, tileArray, 10, 10, 64, 64);
    setupObj.decompileSpritesheet(intSpritesheet, intArray, 10, 10, 64, 64);
    setupObj.decompileSpritesheet(battleSpritesheet, battleArray, 5, 6, 128, 128);
    setupObj.decompileSpritesheet(herculesFISpritesheet, herculesFIArray, 2, 4, 128, 128);
    setupObj.decompileSpritesheet(mantidFISpritesheet, mantidFIArray, 2, 4, 128, 128);
    setupObj.decompileSpritesheet(rhinoFISpritesheet, rhinoFIArray, 2, 4, 128, 128);
    setupObj.decompileSpritesheet(magentaFISpritesheet, magentaFIArray, 2, 4, 128, 128);

    //Resize Images
    setupObj.resizeImgs();


    //Initial Area Setup
    setupObj.setupAreaData();
    currentAreaData = areasArray[0];
    setupObj.setupFloor(mapObj.currentArea, mapObj.currentAreaFloor);
    setupObj.setupWalls(mapObj.currentArea, mapObj.currentAreaWalls);
    setupObj.setupCeiling(mapObj.currentArea, mapObj.currentAreaCeiling);
    if (doTallGrass || mapObj.currentArea.areaName == "Test Area 2") {
      setupObj.setupEncounters(mapObj.currentArea, mapObj.currentAreaEncounters);
    }
    setupObj.setupInteracts();
    mapObj.currentAreaInteracts = herculesHouseInteracts;
    
    //Initial Var Setup
    gameMode = "title";
    titleCycle = titleCycle + (PI / 72);
    titleHercY = pos(6.4) + (pos(0.3) * sin(titleCycle));
    titleMagY = pos(6.4) + (-(pos(0.3)) * sin(titleCycle + (PI / 6)));
    playerSprite = intArray[1];
    player.changeDirection(playerInitialDirection);
    mapBG = silkFloorBG;
    mapObj.mapTheme = iWebsTheme1;
    mapObj.mapTheme.setLoop(true);
    mainBattleTheme.setLoop(true);
    rhinoTheme.setLoop(true);
    droneAttack.setLoop(true);
    if (godMode == true) {
      playerMaxHealth = 9001;
      playerHealth = playerMaxHealth;
      playerAtkPower = 9001;
    }
    else if (glassCanon == true) {
      playerMaxHealth = 1;
      playerHealth = playerMaxHealth;
      playerAtkPower = 9001;
    }

    if (fastMove == true) {
      movementTime = 5;
      movementStep = 0.2;
    }
  }
  catch(e) {
    print(e);
  }
  

}


//Draw
function draw() {
  try {
    //print("X: " + player.xPos + ", Y: " + player.yPos);
    //print(keyStack);
    if (cinematicMode == true) {
      translate(450, 50);
    }

    background(0);
    if (gameMode == "title") {
      inTitle();
      if (programStarted == false) {
        fill(0, 0, 0, 150);
        rect(0, 0, pos(10), pos(12));
        fill(255);
        textSize(25);
        textAlign(CENTER, CENTER);
        text("Click anywhere to begin program.", pos(5), pos(6));
        if ((mouseX > 0) && (mouseX < pos(10)) && (mouseY > 0) && (mouseY < pos(12)) && (mouseIsPressed == true)) {
          //Initiate Game
          programStarted = true;
          titleTheme.setLoop(true);
          titleTheme.setVolume(1);
          titleTheme.play();
          inTitle();
        }
    
      }

    }
    else if (gameMode == "inMap") {
      mapObj.draw();
    }
    else if (gameMode == "inBattle") {
        battleObj.inBattle();
    }
    else if (gameMode == "wonBattle") {
      battleObj.onWin();
    }
    else if (gameMode == "lostBattle") {
      battleObj.onLose();
    }
    else if (gameMode == "playerFlee") {
      battleObj.onPlayerFlee();
    }
    else if (gameMode == "enemyFlee") {
      battleObj.onEnemyFlee();
    }

    if (fadeObj.mode != "none") {
      fadeObj.drawFade();
    }

    if (fadeObj.textState != "none") {
      fadeObj.drawText();
    }

    if (blackScreenActive) {
      fill(0, 0, 0);
      rect(0, 0, pos(10), pos(10));
    }
  }
  catch(e) {
    print(e);
  }
  

}


//In Title Screen Function
function inTitle() {
  //Update Vars
  if (programStarted == true) {
    titleCycle = titleCycle + (PI / 72);
    titleHercY = pos(6.4) + (pos(0.3) * sin(titleCycle));
    titleMagY = pos(6.4) + (-(pos(0.3)) * sin(titleCycle + (PI / 6)));
  }


  //Clear and BG
  clear();
  background(0);
  image(titleScreenBG, 0, 0);

  //Draw Title
  fill(255, 200, 100);
  stroke(0);
  strokeWeight(pos(0.2));
  textSize(pos(1.5));
  textAlign(CENTER, CENTER);
  text("HERCULES", pos(5), pos(2.1));
  textSize(pos(0.8));
  strokeWeight(pos(0.1));
  text("Hero of the Hive", pos(5), pos(3.6));
  noStroke();
  fill(0);
  textSize(pos(0.3));
  text("A Wings of Fire Fangame", pos(5), pos(10));
  text("by DonHp", pos(5), pos(10.5));

  //Draw Start Button
  if ((mouseX >= pos(4)) && (mouseX <= pos(6)) && (mouseY >= pos(8)) && (mouseY <= pos(9)) && (fadeObj.checkFade("general") == false) && (programStarted == true)) {
    fill(255, 225, 125);
    if (mouseIsPressed) {
      fadeObj.fadeOut(60, 30, 0, 0, 0, "startGame");
      sfxStart.play();
    }

  }
  else {
    fill(255, 200, 100);
  }
  
  stroke(0);
  strokeWeight(pos(0.1));
  rect(pos(4), pos(8), pos(2), pos(1));
  fill(0);
  noStroke();
  textSize(pos(0.6));
  text("START", pos(5), pos(8.54));

  //Draw Characters
  image(hercTitleSprite, pos(7), titleHercY);
  image(magTitleSprite, 0, titleMagY);
}


//Canvas Scaling Position Function
function pos(scale) {
  return CANVAS_TILE_SIZE * scale;
}

//Reverse Canvas Scaling Position Function
function unPos(scale) {
  return scale / CANVAS_TILE_SIZE;
}


//Get Interact Function
function getInteract(id) {
  if (id == "continue") {
    for(let i = 0; i < mapObj.currentAreaInteracts.length; i++) {
      if (mapObj.currentAreaInteracts[i].interactStep != 0) {
        return mapObj.currentAreaInteracts[i];
      }
  
    }
    return("none");

  }
  else {
    for(let i = 0; i < mapObj.currentAreaInteracts.length; i++) {
      if (mapObj.currentAreaInteracts[i].id == id) {
        return mapObj.currentAreaInteracts[i];
      }
  
    }
    return("none");

  }

}


//Fix any positional rounding errors
function fixPosition(object) {
  object.xPos = round(object.xPos);
  object.yPos = round(object.yPos);
}


/*
This function adds keys to the key stack whenever a key is pressed and has not already been added. If you are adding or removing keys that can be used then 
be sure to also add or remove them from the second conditional here.
*/
function keyPressed() {
  for (let i = 0; i < keyStack.length; i++) {
    if (keyCode == keyStack[i]) {
      return true;
    }
  }
  if (
    (keyCode == 83) || 
    (keyCode == 87) || 
    (keyCode == 65) || 
    (keyCode == 68) || 
    (keyCode == ENTER) || 
    (keyCode == 80) || 
    (keyCode == 84) || 
    (keyCode == 89) || 
    (keyCode == 16)
  ) {
    keyStack.push(keyCode);
  }
}


/*
This function removes keys from the key stack when they are released.
*/
function keyReleased() {
  for (let i = 0; i < keyStack.length; i++) {
    if (keyCode == keyStack[i]) {
      keyStack.splice(i, 1);
    }
  }
}


/*
This function checks if the key stack contains a specific keyCode.
*/
function keyStackContains(code) {
  for (let i = 0; i < keyStack.length; i++) {
    if (code == keyStack[i]) {
      return true;
    }
  }
  return false;
}