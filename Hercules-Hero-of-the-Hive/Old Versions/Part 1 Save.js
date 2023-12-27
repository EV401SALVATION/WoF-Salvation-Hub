//-------------------------OBJECTS-------------------------


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

        innerWebsBattleBG.resize(pos(10), pos(10));
        outerWebsBattleBG.resize(pos(10), pos(10));

        silkFloorBG.resize(pos(10), pos(10));
        outerWebsWestBG.resize(pos(10), pos(10));
        outerWebsCenterBG.resize(pos(10), pos(10));
        outerWebsEastBG.resize(pos(10), pos(10));
        outerWebsSouthBG.resize(pos(10), pos(10));
        stairwellTopBG.resize(pos(10), pos(10));

        playerSpriteD.resize(pos(1), pos(1));
        playerSpriteU.resize(pos(1), pos(1));
        playerSpriteL.resize(pos(1), pos(1));
        playerSpriteR.resize(pos(1), pos(1));

        mantidSpriteD.resize(pos(1), pos(1));
        mantidSpriteU.resize(pos(1), pos(1));
        mantidSpriteL.resize(pos(1), pos(1));
        mantidSpriteR.resize(pos(1), pos(1));

        magentaSpriteD.resize(pos(1), pos(1));
        magentaSpriteU.resize(pos(1), pos(1));
        magentaSpriteL.resize(pos(1), pos(1));
        magentaSpriteR.resize(pos(1), pos(1));

        silkwingBlueSpriteD.resize(pos(1), pos(1));
        silkwingBlueSpriteU.resize(pos(1), pos(1));
        silkwingBlueSpriteL.resize(pos(1), pos(1));
        silkwingBlueSpriteR.resize(pos(1), pos(1));

        silkwingYellowSpriteD.resize(pos(1), pos(1));
        silkwingYellowSpriteU.resize(pos(1), pos(1));
        silkwingYellowSpriteL.resize(pos(1), pos(1));
        silkwingYellowSpriteR.resize(pos(1), pos(1));

        silkwingPurpleSpriteD.resize(pos(1), pos(1));
        silkwingPurpleSpriteU.resize(pos(1), pos(1));
        silkwingPurpleSpriteL.resize(pos(1), pos(1));
        silkwingPurpleSpriteR.resize(pos(1), pos(1));

        hiveSoldierRedSpriteD.resize(pos(1), pos(1));
        hiveSoldierRedSpriteU.resize(pos(1), pos(1));
        hiveSoldierRedSpriteL.resize(pos(1), pos(1));
        hiveSoldierRedSpriteR.resize(pos(1), pos(1));
        hiveSoldierRedSpriteDowned.resize(pos(1), pos(1));

        hiveSoldierBlackSpriteD.resize(pos(1), pos(1));
        hiveSoldierBlackSpriteU.resize(pos(1), pos(1));
        hiveSoldierBlackSpriteL.resize(pos(1), pos(1));
        hiveSoldierBlackSpriteR.resize(pos(1), pos(1));
        hiveSoldierBlackSpriteDowned.resize(pos(1), pos(1));

        faceIconHercNeutral.resize(pos(2), pos(2));
        faceIconHercScared.resize(pos(2), pos(2));
        faceIconHercSkeptical.resize(pos(2), pos(2));
        faceIconHercHurt.resize(pos(2), pos(2));
        faceIconHercAngery.resize(pos(2), pos(2));
        faceIconHercShocked.resize(pos(2), pos(2));
        faceIconHercSad.resize(pos(2), pos(2));

        faceIconMantidNeutral.resize(pos(2), pos(2));
        faceIconMantidWorried.resize(pos(2), pos(2));

        faceIconRhinoNeutral.resize(pos(2), pos(2));
        faceIconRhinoTalking.resize(pos(2), pos(2));
        faceIconRhinoAngery.resize(pos(2), pos(2));
        faceIconRhinoHurt.resize(pos(2), pos(2));

        faceIconMagentaNeutral.resize(pos(2), pos(2));
        faceIconMagentaThinking.resize(pos(2), pos(2));
        faceIconMagentaAwestruck.resize(pos(2), pos(2));
        faceIconMagentaAngery.resize(pos(2), pos(2));
        faceIconMagentaPumped.resize(pos(2), pos(2));

        bedSprite.resize(pos(1), pos(1));
        silkTableSprite.resize(pos(1), pos(1));
        silkChestSprite.resize(pos(1), pos(1));
        stoneTableSprite.resize(pos(1), pos(1));
        stoneLampSprite.resize(pos(1), pos(1));
        rugSkySprite.resize(pos(1), pos(1));
        rugLeafSprite.resize(pos(1), pos(1));
        rugNightSprite.resize(pos(1), pos(1));
        potCrackedSprite.resize(pos(1), pos(1));
        potDecoratedSprite.resize(pos(1), pos(1));
        signSprite.resize(pos(1), pos(1));
        signPostersSprite.resize(pos(1), pos(1));
        notesSprite.resize(pos(1), pos(1));

        testWallSprite.resize(pos(1), pos(1));
        testTreeSprite.resize(pos(1), pos(1));
        silkWallSprite.resize(pos(1), pos(1));
        silkPillarSprite.resize(pos(1), pos(1));
        silkPillarBottomSprite.resize(pos(1), pos(1));
        silkPillarTopSprite.resize(pos(1), pos(1));

        testEncounterSprite.resize(pos(1), pos(1));

        slimeNor.resize(pos(4), pos(4));
        slimeDmg.resize(pos(4), pos(4));
        slimeAtk.resize(pos(4), pos(4));

        chompNor.resize(pos(4), pos(4));
        chompDmg.resize(pos(4), pos(4));
        chompAtk.resize(pos(4), pos(4));

        rhinoBattleNor.resize(pos(4), pos(4));
        rhinoBattleDmg.resize(pos(4), pos(4));
        rhinoBattleAtk.resize(pos(4), pos(4));

        soldierRedBattleNor.resize(pos(4), pos(4));
        soldierRedBattleDmg.resize(pos(4), pos(4));
        soldierRedBattleAtk.resize(pos(4), pos(4));

        soldierYellowBattleNor.resize(pos(4), pos(4));
        soldierYellowBattleDmg.resize(pos(4), pos(4));
        soldierYellowBattleAtk.resize(pos(4), pos(4));

        soldierBlackBattleNor.resize(pos(4), pos(4));
        soldierBlackBattleDmg.resize(pos(4), pos(4));
        soldierBlackBattleAtk.resize(pos(4), pos(4));

        defendIcon.resize(pos(1), pos(1));
    }


    //Setup Areas
    setupAreas() {
        //Walls
        this.setupWalls(testArea1Walls);
        this.setupWalls(testArea2Walls);

        this.setupWalls(herculesHouseWalls);
        this.setupWalls(innerWebsSouthWalls);
        this.setupWalls(innerWebsWestWalls);
        this.setupWalls(innerWebsCheckpointWalls);
        this.setupWalls(mantidHouseWalls);
        this.setupWalls(theMedianWalls);
        this.setupWalls(innerWebsEastWalls);
        this.setupWalls(innerWebsCenterWalls);
        this.setupWalls(abandonedHouseWalls);
        this.setupWalls(innerWebsNorthWalls);
        this.setupWalls(outerWebsWestWalls);
        this.setupWalls(outerWebsCenterWalls);
        this.setupWalls(outerWebsEastWalls);
        this.setupWalls(outerWebsSouthWalls);
        this.setupWalls(stairwellTopWalls);


        //Encounters
        this.setupEncounters(testArea2Encounters);


        //Interacts
        this.setupInteracts(testArea1Interacts);

        this.setupInteracts(herculesHouseInteracts);
        this.setupInteracts(innerWebsSouthInteracts);
        this.setupInteracts(innerWebsWestInteracts);
        this.setupInteracts(innerWebsCheckpointInteracts);
        this.setupInteracts(mantidHouseInteracts);
        this.setupInteracts(theMedianInteracts);
        this.setupInteracts(innerWebsEastInteracts);
        this.setupInteracts(innerWebsCenterInteracts);
        this.setupInteracts(abandonedHouseInteracts);
        this.setupInteracts(innerWebsNorthInteracts);
        this.setupInteracts(outerWebsCenterInteracts);
        this.setupInteracts(outerWebsEastInteracts);
        this.setupInteracts(stairwellTopInteracts);
    }


    //Setup Walls
    setupWalls(area) {
        this.area = area;
        this.setupMode = "walls";
        //Test Area 1
        if (this.area == testArea1Walls) {
            //Top Side
            this.setTilesRect(0, 0, 4, 1, 1);
            this.setTilesRect(pos(6), 0, 4, 1, 1);
            //Bottom Side
            this.setTilesRect(0, pos(9), 10, 1, 1);
            //Left Side
            this.setTilesRect(0, pos(1), 1, 8, 1);
            //Right Side
            this.setTilesRect(pos(9), pos(1), 1, 8, 1);
            //Trees
            this.area.push(new Wall(pos(2), pos(2), 2));
            this.area.push(new Wall(pos(4), pos(2), 2));
        }
        //Test Area 2
        else if (this.area == testArea2Walls) {
            //Top Side
            this.setTilesRect(0, 0, 10, 1, 2);
            //Bottom Side
            this.setTilesRect(0, pos(9), 4, 1, 1);
            this.setTilesRect(pos(6), pos(9), 4, 1, 1);
            //Left Side
            this.setTilesRect(0, pos(1), 1, 8, 2);
            //Right Side
            this.setTilesRect(pos(9), pos(1), 1, 8, 2);
        }
        //Hercules' House
        if (this.area == herculesHouseWalls) {
            //Top Side
            this.setTilesRect(0, 0, 4, 1, 3);
            this.setTilesRect(pos(6), 0, 4, 1, 3);
            //Bottom Side
            this.setTilesRect(0, pos(9), 10, 1, 3);
            //Left Side
            this.setTilesRect(0, pos(1), 1, 8, 3);
            //Right Side
            this.setTilesRect(pos(9), pos(1), 1, 8, 3);
            //Top Left Corner
            this.area.push(new Wall(pos(1), pos(1), 3));
            this.area.push(new Wall(pos(2), pos(1), 3));
            this.area.push(new Wall(pos(1), pos(2), 3));
            //Top Right Corner
            this.area.push(new Wall(pos(8), pos(1), 3));
            this.area.push(new Wall(pos(7), pos(1), 3));
            this.area.push(new Wall(pos(8), pos(2), 3));
            //Bottom Right Corner
            this.area.push(new Wall(pos(8), pos(8), 3));
            this.area.push(new Wall(pos(7), pos(8), 3));
            this.area.push(new Wall(pos(8), pos(7), 3));
            //Bottom Left Corner
            this.area.push(new Wall(pos(1), pos(8), 3));
            this.area.push(new Wall(pos(2), pos(8), 3));
            this.area.push(new Wall(pos(1), pos(7), 3));
            //Decor
            this.area.push(new Wall(pos(2), pos(2), 12));
            this.area.push(new Wall(pos(1), pos(3), 13));
            this.area.push(new Wall(pos(7), pos(4), 5));
            this.area.push(new Wall(pos(7), pos(3), 11));
            this.area.push(new Wall(pos(7), pos(5), 9));
            this.area.push(new Wall(pos(3), pos(1), 8));
            this.area.push(new Wall(pos(6), pos(1), 8));
            this.area.push(new Wall(pos(2), pos(7), 8));
            this.area.push(new Wall(pos(7), pos(7), 8));
        }
        //Inner Webs South
        if (this.area == innerWebsSouthWalls) {
            //Top Side
            this.setTilesRect(0, 0, 10, 1, 3);
            //Bottom Side
            this.setTilesRect(0, pos(9), 4, 1, 3);
            this.setTilesRect(pos(6), pos(9), 4, 1, 3);
            //Left Side
            this.setTilesRect(0, pos(1), 1, 3, 3);
            this.setTilesRect(0, pos(6), 1, 3, 3);
            //Right Side
            this.setTilesRect(pos(9), pos(1), 1, 3, 3);
            this.setTilesRect(pos(9), pos(6), 1, 3, 3);
            //Top Left Corner
            this.area.push(new Wall(pos(1), pos(1), 3));
            this.area.push(new Wall(pos(2), pos(1), 3));
            this.area.push(new Wall(pos(1), pos(2), 3));
            //Top Right Corner
            this.area.push(new Wall(pos(8), pos(1), 3));
            this.area.push(new Wall(pos(7), pos(1), 3));
            this.area.push(new Wall(pos(8), pos(2), 3));
            //Pillars
            this.area.push(new Wall(pos(2), pos(7), 14));
            this.area.push(new Wall(pos(2), pos(6), 4));
            this.area.push(new Wall(pos(2), pos(5), 15));
            this.area.push(new Wall(pos(7), pos(7), 14));
            this.area.push(new Wall(pos(7), pos(6), 4));
            this.area.push(new Wall(pos(7), pos(5), 15));
            //Decor
            this.area.push(new Wall(pos(1), pos(8), 8));
            this.area.push(new Wall(pos(8), pos(8), 8));
            this.area.push(new Wall(pos(2), pos(2), 8));
            this.area.push(new Wall(pos(7), pos(2), 8));
            this.area.push(new Wall(pos(5), pos(1), 7));
        }
        //Inner Webs West
        if (this.area == innerWebsWestWalls) {
            //Top Side
            this.setTilesRect(0, 0, 10, 1, 3);
            //Bottom Side
            this.setTilesRect(0, pos(9), 4, 1, 3);
            this.setTilesRect(pos(6), pos(9), 4, 1, 3);
            //Left Side
            this.setTilesRect(0, pos(1), 1, 8, 3);
            //Right Side
            this.setTilesRect(pos(9), pos(1), 1, 3, 3);
            this.setTilesRect(pos(9), pos(6), 1, 3, 3);
            //Inner Right Wall
            this.setTilesRect(pos(5), pos(1), 1, 5, 3);
            //Rest of Inner Room
            this.area.push(new Wall(pos(1), pos(1), 3));
            this.area.push(new Wall(pos(4), pos(1), 3));
            this.area.push(new Wall(pos(1), pos(4), 3));
            this.area.push(new Wall(pos(4), pos(4), 3));
            this.area.push(new Wall(pos(1), pos(5), 3));
            this.area.push(new Wall(pos(4), pos(5), 3));
            this.area.push(new Wall(pos(2), pos(5), 3));
            //Decor
            this.area.push(new Wall(pos(1), pos(6), 8));
            this.area.push(new Wall(pos(5), pos(6), 8));
            this.area.push(new Wall(pos(6), pos(1), 8));
            this.area.push(new Wall(pos(8), pos(1), 8));
            this.area.push(new Wall(pos(2), pos(1), 13));
            this.area.push(new Wall(pos(4), pos(2), 13));
            this.area.push(new Wall(pos(2), pos(7), 7));
        }
        //Inner Webs Checkpoint
        if (this.area == innerWebsCheckpointWalls) {
            //Top Side
            this.setTilesRect(0, 0, 5, 1, 3);
            this.setTilesRect(pos(6), 0, 4, 1, 3);
            //Bottom Side
            this.setTilesRect(0, pos(9), 10, 1, 3);
            //Left Side
            this.setTilesRect(0, pos(1), 1, 3, 3);
            this.setTilesRect(0, pos(6), 1, 3, 3);
            //Right Side
            this.setTilesRect(pos(9), pos(1), 1, 8, 3);
            //Pillars
            this.area.push(new Wall(pos(2), pos(2), 15));
            this.area.push(new Wall(pos(7), pos(2), 15));
            this.area.push(new Wall(pos(2), pos(3), 14));
            this.area.push(new Wall(pos(7), pos(3), 14));
            this.area.push(new Wall(pos(2), pos(6), 15));
            this.area.push(new Wall(pos(7), pos(6), 15));
            this.area.push(new Wall(pos(2), pos(7), 14));
            this.area.push(new Wall(pos(7), pos(7), 14));
            //Decor
            this.area.push(new Wall(pos(3), pos(3), 8));
            this.area.push(new Wall(pos(6), pos(3), 8));
            this.area.push(new Wall(pos(3), pos(7), 8));
            this.area.push(new Wall(pos(6), pos(7), 8));
        }
        //Mantid's House
        if (this.area == mantidHouseWalls) {
            //Top Side
            this.setTilesRect(0, 0, 4, 1, 3);
            this.setTilesRect(pos(6), 0, 4, 1, 3);
            //Bottom Side
            this.setTilesRect(0, pos(9), 10, 1, 3);
            //Left Side
            this.setTilesRect(0, pos(1), 1, 8, 3);
            //Right Side
            this.setTilesRect(pos(9), pos(1), 1, 8, 3);
            //Top Left Corner
            this.area.push(new Wall(pos(1), pos(1), 3));
            this.area.push(new Wall(pos(2), pos(1), 3));
            this.area.push(new Wall(pos(1), pos(2), 3));
            //Top Right Corner
            this.area.push(new Wall(pos(8), pos(1), 3));
            this.area.push(new Wall(pos(7), pos(1), 3));
            this.area.push(new Wall(pos(8), pos(2), 3));
            //Bottom Right Corner
            this.area.push(new Wall(pos(8), pos(8), 3));
            this.area.push(new Wall(pos(7), pos(8), 3));
            this.area.push(new Wall(pos(8), pos(7), 3));
            //Bottom Left Corner
            this.area.push(new Wall(pos(1), pos(8), 3));
            this.area.push(new Wall(pos(2), pos(8), 3));
            this.area.push(new Wall(pos(1), pos(7), 3));
            //Decor
            this.area.push(new Wall(pos(8), pos(5), 13));
            this.area.push(new Wall(pos(8), pos(6), 13));
            this.area.push(new Wall(pos(2), pos(4), 5));
            this.area.push(new Wall(pos(2), pos(5), 10));
            this.area.push(new Wall(pos(3), pos(1), 8));
            this.area.push(new Wall(pos(6), pos(1), 8));
            this.area.push(new Wall(pos(2), pos(7), 8));
            this.area.push(new Wall(pos(7), pos(7), 8));
        }
        //The Median
        if (this.area == theMedianWalls) {
            //Walls
            this.setTilesRect(0, 0, 5, 10, 3);
            this.setTilesRect(pos(6), 0, 4, 10, 3);
        }
        //Inner Webs East
        if (this.area == innerWebsEastWalls) {
            //Bottom Side
            this.setTilesRect(0, pos(9), 5, 1, 3);
            this.setTilesRect(pos(6), pos(9), 4, 1, 3);
            this.setTilesRect(pos(1), pos(8), 3, 1, 3);
            this.area.push(new Wall(pos(7), pos(8), 3));
            this.area.push(new Wall(pos(8), pos(8), 3));
            //Top Side
            this.setTilesRect(0, 0, 10, 1, 3);
            //Right Side
            this.setTilesRect(pos(9), pos(1), 1, 8, 3);
            //Left Side
            this.area.push(new Wall(0, pos(1), 3));
            this.setTilesRect(0, pos(4), 1, 5, 3);
            //Pillars
            this.area.push(new Wall(pos(3), pos(3), 15));
            this.area.push(new Wall(pos(7), pos(3), 15));
            this.area.push(new Wall(pos(3), pos(4), 14));
            this.area.push(new Wall(pos(7), pos(4), 14));
            //Decor
            this.area.push(new Wall(pos(3), pos(7), 8));
            this.area.push(new Wall(pos(7), pos(7), 8));
            this.area.push(new Wall(pos(5), pos(4), 7));
        }
        //Inner Webs Center
        if (this.area == innerWebsCenterWalls) {
            //Top Side
            this.setTilesRect(0, 0, 6, 1, 3);
            this.setTilesRect(pos(8), 0, 2, 1, 3);
            //Bottom Side
            this.setTilesRect(0, pos(9), 10, 1, 3);
            //Left Side
            this.setTilesRect(0, pos(1), 1, 3, 3);
            this.setTilesRect(0, pos(6), 1, 3, 3);
            //Right Side
            this.area.push(new Wall(pos(9), pos(1), 3));
            this.setTilesRect(pos(9), pos(4), 1, 5, 3);
            //Corner Squares
            this.setTilesRect(pos(1), pos(1), 2, 2, 3);
            this.setTilesRect(pos(1), pos(7), 2, 2, 3);
            //Inner Room
            this.setTilesRect(pos(5), pos(6), 1, 3, 3);
            this.area.push(new Wall(pos(6), pos(6), 3));
            this.area.push(new Wall(pos(8), pos(6), 3));
            //Decor
            this.area.push(new Wall(pos(5), pos(1), 8));
            this.area.push(new Wall(pos(8), pos(1), 8));
            this.area.push(new Wall(pos(1), pos(3), 8));
            this.area.push(new Wall(pos(1), pos(6), 8));
            this.area.push(new Wall(pos(8), pos(8), 8));
            this.area.push(new Wall(pos(6), pos(7), 13));
            this.area.push(new Wall(pos(6), pos(8), 13));
            this.area.push(new Wall(pos(3), pos(8), 12));
        }
        //Inner Webs North
        if (this.area == innerWebsNorthWalls) {
            //Top Side
            this.setTilesRect(0, 0, 2, 1, 3);
            this.setTilesRect(pos(4), 0, 6, 1, 3);
            //Bottom Side
            this.setTilesRect(0, pos(9), 6, 1, 3);
            this.setTilesRect(pos(8), pos(9), 2, 1, 3);
            //Left Side
            this.setTilesRect(0, pos(1), 1, 8, 3);
            //Right Side
            this.setTilesRect(pos(9), pos(1), 1, 8, 3);
            //Middle Walls
            this.setTilesRect(pos(1), pos(3), 7, 1, 3);
            this.setTilesRect(pos(2), pos(6), 7, 1, 3);
            //Decor
            this.area.push(new Wall(pos(1), pos(1), 8));
            this.area.push(new Wall(pos(4), pos(1), 8));
            this.area.push(new Wall(pos(8), pos(8), 8));
            this.area.push(new Wall(pos(5), pos(8), 8));

        }
        //Abandoned House
        if (this.area == abandonedHouseWalls) {
            //Top Side
            this.setTilesRect(0, 0, 10, 1, 3);
            //Bottom Side
            this.setTilesRect(0, pos(9), 10, 1, 3);
            //Left Side
            this.setTilesRect(0, pos(1), 1, 8, 3);
            //Right Side
            this.setTilesRect(pos(9), pos(1), 1, 3, 3);
            this.setTilesRect(pos(9), pos(6), 1, 3, 3);
            //Top Left Corner
            this.area.push(new Wall(pos(1), pos(1), 3));
            this.area.push(new Wall(pos(2), pos(1), 3));
            this.area.push(new Wall(pos(1), pos(2), 3));
            //Top Right Corner
            this.area.push(new Wall(pos(8), pos(1), 3));
            this.area.push(new Wall(pos(7), pos(1), 3));
            this.area.push(new Wall(pos(8), pos(2), 3));
            //Bottom Right Corner
            this.area.push(new Wall(pos(8), pos(8), 3));
            this.area.push(new Wall(pos(7), pos(8), 3));
            this.area.push(new Wall(pos(8), pos(7), 3));
            //Bottom Left Corner
            this.area.push(new Wall(pos(1), pos(8), 3));
            this.area.push(new Wall(pos(2), pos(8), 3));
            this.area.push(new Wall(pos(1), pos(7), 3));
            //Decor
            this.area.push(new Wall(pos(2), pos(2), 8));
            this.area.push(new Wall(pos(8), pos(3), 8));
            this.area.push(new Wall(pos(2), pos(7), 8));
            this.area.push(new Wall(pos(8), pos(6), 8));
            this.area.push(new Wall(pos(5), pos(4), 12));
            this.area.push(new Wall(pos(5), pos(5), 12));
            this.area.push(new Wall(pos(4), pos(5), 9));
            this.area.push(new Wall(pos(6), pos(4), 6));
            this.area.push(new Wall(pos(3), pos(7), 5));
            this.area.push(new Wall(pos(5), pos(8), 13));
            this.area.push(new Wall(pos(6), pos(8), 12));
            this.area.push(new Wall(pos(3), pos(1), 6));
        }
        //Outer Webs West
        if (this.area == outerWebsWestWalls) {
            //Bottom Side
            this.setTilesRect(0, pos(9), 2, 1, 3);
            this.setTilesRect(pos(4), pos(9), 6, 1, 3);
            //Left Side
            this.setTilesRect(0, pos(6), 1, 3, 3);
            //Pillars
            this.x = pos(1);
            for (let i = 0; i < 2; i++) {
                for (let i = 0; i < 2; i++) {
                    this.y = pos(4);
                    this.area.push(new Wall(this.x, this.y, 15));
                    this.y = pos(5);
                    this.area.push(new Wall(this.x, this.y, 4));
                    this.x += pos(2);
                }
                this.x += pos(1);
            }

            //Invisible Walls
            this.area.push(new Wall(pos(2), pos(4), 0));
            this.area.push(new Wall(pos(4), pos(4), 0));
            this.area.push(new Wall(pos(5), pos(5), 0));
            this.area.push(new Wall(pos(7), pos(5), 0));
            this.area.push(new Wall(pos(9), pos(5), 0));
            //Decor
            this.area.push(new Wall(pos(1), pos(8), 8));
            this.area.push(new Wall(pos(4), pos(8), 8));
        }
        //Outer Webs Center
        if (this.area == outerWebsCenterWalls) {
            //Bottom Side
            this.setTilesRect(0, pos(9), 3, 1, 3);
            this.setTilesRect(pos(5), pos(9), 5, 1, 3);
            //Pillars
            this.x = pos(1);
            for (let i = 0; i < 2; i++) {
                for (let i = 0; i < 2; i++) {
                    this.y = pos(4);
                    this.area.push(new Wall(this.x, this.y, 15));
                    this.y = pos(5);
                    this.area.push(new Wall(this.x, this.y, 4));
                    this.x += pos(2);
                }
                this.x += pos(1);
            }

            this.area.push(new Wall(pos(3), pos(6), 4));
            //Invisible Walls
            this.area.push(new Wall(pos(0), pos(4), 0));
            this.area.push(new Wall(pos(1), pos(3), 0));
            this.area.push(new Wall(pos(2), pos(2), 0));
            this.area.push(new Wall(pos(3), pos(2), 0));
            this.area.push(new Wall(pos(4), pos(1), 0));
            this.area.push(new Wall(pos(5), pos(1), 0));
            this.area.push(new Wall(pos(6), pos(0), 0));
            this.area.push(new Wall(pos(7), pos(0), 0));
            this.area.push(new Wall(pos(8), pos(1), 0));
            this.area.push(new Wall(pos(8), pos(2), 0));
            this.area.push(new Wall(pos(9), pos(3), 0));
            this.area.push(new Wall(pos(9), pos(5), 0));
            this.area.push(new Wall(pos(7), pos(5), 0));
            this.area.push(new Wall(pos(4), pos(5), 0));
            this.area.push(new Wall(pos(4), pos(6), 0));
            this.area.push(new Wall(pos(4), pos(7), 0));
            this.area.push(new Wall(pos(4), pos(8), 0));
            this.area.push(new Wall(pos(5), pos(7), 0));
            this.area.push(new Wall(pos(5), pos(8), 0));
            this.area.push(new Wall(pos(3), pos(9), 0));
            this.area.push(new Wall(pos(7), pos(4), 0));
        }
        //Outer Webs East
        if (this.area == outerWebsEastWalls) {
            //Wall
            this.area.push(new Wall(0, pos(9), 3));
            //Pillars
            this.x = pos(1);
            for (let i = 0; i < 2; i++) {
                this.y = pos(4);
                this.area.push(new Wall(this.x, this.y, 15));
                this.y = pos(5);
                this.area.push(new Wall(this.x, this.y, 4));
                this.x += pos(2);
            }

            //Invisible Walls
            this.area.push(new Wall(pos(0), pos(5), 0));
            this.area.push(new Wall(pos(2), pos(4), 0));
            this.area.push(new Wall(pos(3), pos(3), 0));
            this.area.push(new Wall(pos(4), pos(2), 0));
            this.area.push(new Wall(pos(5), pos(3), 0));
            this.area.push(new Wall(pos(6), pos(4), 0));
            this.area.push(new Wall(pos(6), pos(5), 0));
            this.area.push(new Wall(pos(7), pos(6), 0));
            this.area.push(new Wall(pos(6), pos(7), 0));
            this.area.push(new Wall(pos(5), pos(7), 0));
            this.area.push(new Wall(pos(4), pos(8), 0));
            this.area.push(new Wall(pos(4), pos(9), 0));
        }
        //Outer Webs South
        if (this.area == outerWebsSouthWalls) {
            //Left Side
            this.setTilesRect(0, 0, 1, 4, 3);
            this.setTilesRect(0, pos(6), 1, 4, 3);
            //Bottom Side
            this.setTilesRect(pos(1), pos(9), 3, 1, 3);
            //Pillars
            this.x = pos(4);
            this.y = 0;
            for (let i = 0; i < 2; i++) {
                for (let i = 0; i < 2; i++) {
                    area.push(new Wall(this.x, this.y, 15));
                    this.y += pos(1);
                    this.area.push(new Wall(this.x, this.y, 4));
                    this.y += pos(1);
                }
                this.y += pos(1);
            }

            //Invisible Walls
            this.area.push(new Wall(pos(5), pos(4), 0));
            //Decor
            this.area.push(new Wall(pos(1), pos(3), 8));
            this.area.push(new Wall(pos(1), pos(6), 8));
        }
        //Stairwell Top
        if (this.area == stairwellTopWalls) {
            //Top Side
            this.setTilesRect(0, 0, 10, 1, 3);
            //Bottom Side
            this.setTilesRect(0, pos(9), 4, 1, 3);
            this.setTilesRect(pos(6), pos(9), 4, 1, 3);
            //Left Side
            this.setTilesRect(0, pos(1), 1, 8, 3);
            //Right Side
            this.setTilesRect(pos(9), pos(1), 1, 3, 3);
            this.setTilesRect(pos(9), pos(6), 1, 3, 3);
            //Inner Walls
            this.setTilesRect(pos(3), pos(5), 1, 4, 3);
            this.setTilesRect(pos(6), pos(5), 1, 4, 3);
            //Decor
            this.area.push(new Wall(pos(1), pos(1), 8));
            this.area.push(new Wall(pos(1), pos(8), 8));
            this.area.push(new Wall(pos(8), pos(1), 8));
            this.area.push(new Wall(pos(8), pos(8), 8));
            this.area.push(new Wall(pos(3), pos(4), 8));
            this.area.push(new Wall(pos(6), pos(4), 8));
        }

    }


    //Setup Encounters
    setupEncounters(area) {
        this.area = area;
        this.setupMode = "encounters";
        //Test Area 2
        if (this.area == testArea2Encounters) {
            this.setTilesRect(pos(6), pos(1), 3, 4, 1);
        }

    }


    //Setup Interacts
    setupInteracts(area) {
        this.area = area;
        this.setupMode = "interacts";
        //Test Area 1
        if (this.area == testArea1Interacts) {
            this.area.push(new Interact(pos(7), pos(2), "left", 1));
            this.area.push(new Interact(pos(7), pos(4), "left", 2));
            this.area.push(new Interact(pos(7), pos(6), "left", 3));
            this.area.push(new Interact(pos(7), pos(8), "left", 4));
            this.area.push(new Interact(pos(3), pos(8), "up", 5));
            this.area.push(new Interact(pos(5), pos(8), "up", 6));
            this.area.push(new Interact(pos(2), pos(6), "up", 7));
        }
        //Hercules' House
        if (this.area == herculesHouseInteracts) {
            this.area.push(new Interact(pos(4), pos(7), "up", 7));
            this.area.push(new Interact(pos(5), pos(6), "down", 8));
            this.area.push(new Interact(pos(3), pos(2), "up", 15));
        }
        //Inner Webs South
        if (this.area == innerWebsSouthInteracts) {
            this.area.push(new Interact(pos(3), pos(2), "down", 10));
            this.area.push(new Interact(pos(6), pos(8), "down", 23));
        }
        //Inner Webs West
        if (this.area == innerWebsWestInteracts) {
            this.area.push(new Interact(pos(7), pos(2), "down", 11));
            this.area.push(new Interact(pos(6), pos(8), "down", 24));
        }
        //Inner Webs Checkpoint
        if (this.area == innerWebsCheckpointInteracts) {
            this.area.push(new Interact(pos(5), pos(1), "down", 13));
            this.area.push(new Interact(pos(6), pos(1), "down", 26));
        }
        //Mantid's House
        if (this.area == mantidHouseInteracts) {
            this.area.push(new Interact(pos(6), pos(4), "left", 12));
            this.area.push(new Interact(pos(6), pos(8), "up", 14));
        }
        //Inner Webs East
        if (this.area == innerWebsEastInteracts) {
            this.area.push(new Interact(pos(4), pos(4), "right", 16));
            this.area.push(new Interact(pos(6), pos(4), "left", 17));
            this.area.push(new Interact(pos(6), pos(8), "down", 26));
        }
        //Inner Webs Center
        if (this.area == innerWebsCenterInteracts) {
            this.area.push(new Interact(pos(4), pos(8), "up", 18));
            this.area.push(new Interact(pos(2), pos(6), "down", 25));
            this.area.push(new Interact(pos(3), pos(1), "down", 27));
        }
        //Abandoned House
        if (this.area == abandonedHouseInteracts) {
            this.area.push(new Interact(0, 0, "up", 19));
            this.area.push(new Interact(pos(4), pos(4), "up", 7));
        }
        //Inner Webs North
        if (this.area == innerWebsNorthInteracts) {
            this.area.push(new Interact(pos(1), pos(2), "left", 20));
        }
        //The Median
        if (this.area == theMedianInteracts) {
            this.area.push(new Interact(pos(5), pos(10), "up", 21));
        }
        //Outer Webs Center
        if (this.area == outerWebsCenterInteracts) {
            this.area.push(new Interact(pos(5), pos(2), "right", 28));
            this.area.push(new Interact(pos(6), pos(2), "left", 29));
        }
        //Outer Webs Center
        if (this.area == outerWebsEastInteracts) {
            this.area.push(new Interact(0, 0, "right", 32));
        }
        //Outer Webs Center
        if (this.area == stairwellTopInteracts) {
            this.area.push(new Interact(pos(8), pos(3), "right", 30));
            this.area.push(new Interact(pos(4), pos(4), "left", 31));
            this.area.push(new Interact(pos(5), pos(4), "left", 31));
        }

    }


    //Sets a rectangle of tiles of the specified type.
    setTilesRect(xPos, yPos, width, height, type) {
        this.x = xPos;
        this.y = yPos;
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                if (this.setupMode == "walls") {
                    this.area.push(new Wall(this.x, this.y, type));
                }
                else if (this.setupMode == "encounters") {
                    this.area.push(new Encounter(this.x, this.y, type));
                }
                else if (this.setupMode == "interacts") {
                    this.area.push(new Interact(this.x, this.y, type));
                }

                this.x += pos(1);
            }

            this.y += pos(1);
            this.x = xPos;
        }

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
        for (let i = 0; i < mapObj.currentAreaWalls.length; i++) {
            if (mapObj.currentAreaWalls[i].checkCollide(direction) == true) {
                return (true)
            }
        }

        for (let i = 0; i < mapObj.currentAreaInteracts.length; i++) {
            if (mapObj.currentAreaInteracts[i] != false) {
                if (mapObj.currentAreaInteracts[i].checkCollide(direction) == true) {
                    return (true)
                }

            }

        }

        return (false);
    }


    //Check Inside Encounter
    checkInsideEncounter() {
        for (let i = 0; i < mapObj.currentAreaEncounters.length; i++) {
            if (checkObj.checkInside(mapObj.currentAreaEncounters[i]) == true) {
                return (true)
            }
        }

        return (false);
    }


    //Check Facing
    checkFacing(object) {
        if (((object.checkCollide("up") == true) && (playerSprite == playerSpriteU)) || ((object.checkCollide("down") == true) && (playerSprite == playerSpriteD)) || ((object.checkCollide("left") == true) && (playerSprite == playerSpriteL)) || ((object.checkCollide("right") == true) && (playerSprite == playerSpriteR))) {
            return (true);
        }

        return (false);
    }


    //Check Transfer
    checkTransfer() {
        if (player.yPos == 0) {
            //Transfer Up
            if (mapObj.currentArea == "Test Area 1") {
                fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
                player.moveDebounce = 0;
                player.moveDirection = "none";
                mapObj.transferDirection = "up";
                mapObj.transferToArea = "Test Area 2";
            }
            else if (mapObj.currentArea == "Hercules' House") {
                fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
                player.moveDebounce = 0;
                player.moveDirection = "none";
                mapObj.transferDirection = "up";
                mapObj.transferToArea = "Inner Webs South";
            }
            else if (mapObj.currentArea == "Mantid's House") {
                fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
                player.moveDebounce = 0;
                player.moveDirection = "none";
                mapObj.transferDirection = "up";
                mapObj.transferToArea = "Inner Webs West";
            }
            else if (mapObj.currentArea == "Inner Webs Checkpoint") {
                fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
                player.moveDebounce = 0;
                player.moveDirection = "none";
                mapObj.transferDirection = "up";
                mapObj.transferToArea = "The Median";
            }
            else if (mapObj.currentArea == "The Median") {
                fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
                player.moveDebounce = 0;
                player.moveDirection = "none";
                mapObj.transferDirection = "up";
                mapObj.transferToArea = "Inner Webs East";
            }
            else if (mapObj.currentArea == "Inner Webs Center") {
                fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
                player.moveDebounce = 0;
                player.moveDirection = "none";
                mapObj.transferDirection = "up";
                mapObj.transferToArea = "Inner Webs North";
            }
            else if (mapObj.currentArea == "Inner Webs North") {
                fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
                player.moveDebounce = 0;
                player.moveDirection = "none";
                mapObj.transferDirection = "up";
                mapObj.transferToArea = "Outer Webs West";
            }
            else if (mapObj.currentArea == "Outer Webs South") {
                fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
                player.moveDebounce = 0;
                player.moveDirection = "none";
                mapObj.transferDirection = "up";
                mapObj.transferToArea = "Outer Webs East";
            }

        }
        else if (player.yPos == pos(9)) {
            //Transfer Down
            if (mapObj.currentArea == "Test Area 2") {
                fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");;
                player.moveDebounce = 0;
                player.moveDirection = "none";
                mapObj.transferDirection = "down";
                mapObj.transferToArea = "Test Area 1";
            }
            else if (mapObj.currentArea == "Inner Webs South") {
                fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
                player.moveDebounce = 0;
                player.moveDirection = "none";
                mapObj.transferDirection = "down";
                mapObj.transferToArea = "Hercules' House";
            }
            else if (mapObj.currentArea == "Inner Webs West") {
                fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
                player.moveDebounce = 0;
                player.moveDirection = "none";
                mapObj.transferDirection = "down";
                mapObj.transferToArea = "Mantid's House";
            }
            else if (mapObj.currentArea == "The Median") {
                fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
                player.moveDebounce = 0;
                player.moveDirection = "none";
                mapObj.transferDirection = "down";
                mapObj.transferToArea = "Inner Webs Checkpoint";
            }
            else if (mapObj.currentArea == "Inner Webs East") {
                fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
                player.moveDebounce = 0;
                player.moveDirection = "none";
                mapObj.transferDirection = "down";
                mapObj.transferToArea = "The Median";
            }
            else if (mapObj.currentArea == "Inner Webs North") {
                fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
                player.moveDebounce = 0;
                player.moveDirection = "none";
                mapObj.transferDirection = "down";
                mapObj.transferToArea = "Inner Webs Center";
            }
            else if (mapObj.currentArea == "Outer Webs West") {
                fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
                player.moveDebounce = 0;
                player.moveDirection = "none";
                mapObj.transferDirection = "down";
                mapObj.transferToArea = "Inner Webs North";
            }
            else if (mapObj.currentArea == "Outer Webs East") {
                fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
                player.moveDebounce = 0;
                player.moveDirection = "none";
                mapObj.transferDirection = "down";
                mapObj.transferToArea = "Outer Webs South";
            }

        }
        else if (player.xPos == 0) {
            //Transfer Left
            if (mapObj.currentArea == "Inner Webs South") {
                fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
                player.moveDebounce = 0;
                player.moveDirection = "none";
                mapObj.transferDirection = "left";
                mapObj.transferToArea = "Inner Webs West";
            }
            else if (mapObj.currentArea == "Inner Webs Checkpoint") {
                fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
                player.moveDebounce = 0;
                player.moveDirection = "none";
                mapObj.transferDirection = "left";
                mapObj.transferToArea = "Inner Webs South";
            }
            else if (mapObj.currentArea == "Inner Webs East") {
                fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
                player.moveDebounce = 0;
                player.moveDirection = "none";
                mapObj.transferDirection = "left";
                mapObj.transferToArea = "Inner Webs Center";
            }
            else if (mapObj.currentArea == "Inner Webs Center") {
                fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
                player.moveDebounce = 0;
                player.moveDirection = "none";
                mapObj.transferDirection = "left";
                mapObj.transferToArea = "Abandoned House";
            }
            else if (mapObj.currentArea == "Outer Webs Center") {
                fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
                player.moveDebounce = 0;
                player.moveDirection = "none";
                mapObj.transferDirection = "left";
                mapObj.transferToArea = "Outer Webs West";
            }
            else if (mapObj.currentArea == "Outer Webs East") {
                fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
                player.moveDebounce = 0;
                player.moveDirection = "none";
                mapObj.transferDirection = "left";
                mapObj.transferToArea = "Outer Webs Center";
            }
            else if (mapObj.currentArea == "Outer Webs South") {
                fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
                player.moveDebounce = 0;
                player.moveDirection = "none";
                mapObj.transferDirection = "left";
                mapObj.transferToArea = "Stairwell Top";
            }

        }
        else if (player.xPos == pos(9)) {
            //Transfer Right
            if (mapObj.currentArea == "Inner Webs West") {
                fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
                player.moveDebounce = 0;
                player.moveDirection = "none";
                mapObj.transferDirection = "right";
                mapObj.transferToArea = "Inner Webs South";
            }
            else if (mapObj.currentArea == "Inner Webs South") {
                fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
                player.moveDebounce = 0;
                player.moveDirection = "none";
                mapObj.transferDirection = "right";
                mapObj.transferToArea = "Inner Webs Checkpoint";
            }
            else if (mapObj.currentArea == "Inner Webs Center") {
                fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
                player.moveDebounce = 0;
                player.moveDirection = "none";
                mapObj.transferDirection = "right";
                mapObj.transferToArea = "Inner Webs East";
            }
            else if (mapObj.currentArea == "Abandoned House") {
                fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
                player.moveDebounce = 0;
                player.moveDirection = "none";
                mapObj.transferDirection = "right";
                mapObj.transferToArea = "Inner Webs Center";
            }
            else if (mapObj.currentArea == "Outer Webs West") {
                fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
                player.moveDebounce = 0;
                player.moveDirection = "none";
                mapObj.transferDirection = "right";
                mapObj.transferToArea = "Outer Webs Center";
            }
            else if (mapObj.currentArea == "Outer Webs Center") {
                fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
                player.moveDebounce = 0;
                player.moveDirection = "none";
                mapObj.transferDirection = "right";
                mapObj.transferToArea = "Outer Webs East";
            }
            else if (mapObj.currentArea == "Stairwell Top") {
                fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
                player.moveDebounce = 0;
                player.moveDirection = "none";
                mapObj.transferDirection = "right";
                mapObj.transferToArea = "Outer Webs South";
            }

        }

    }


    //Check for cutscene switches.
    checkCutscenes() {
        if ((fadeObj.checkFade("interact") == false) && (mapObj.pauseY == -(pos(12))) && (player.moveDebounce == 0) && (interactDebounce == 0)) {
            if ((mapObj.currentArea == "Hercules' House") && (introSceneSwitch == false)) {
                getInteract(8).interact();
                introSceneSwitch = true;
                inCutscene = true;
            }
            else if ((mapObj.currentArea == "Abandoned House") && (abandonedHouseIntroSwitch == false)) {
                getInteract(19).interact();
                abandonedHouseIntroSwitch = true;
                inCutscene = true;
            }
            else if ((mapObj.currentArea == "The Median") && (medianBossSwitch == false)) {
                getInteract(21).interact();
                medianBossSwitch = true;
                inCutscene = true;
            }
            else if ((mapObj.currentArea == "Outer Webs East") && (outerWebsBossSwitch == false)) {
                getInteract(32).interact();
                outerWebsBossSwitch = true;
                inCutscene = true;
            }

        }

    }


    //Check if the player is pressing any keys while in map mode.
    checkMapKeyPresses() {
        if ((keyIsPressed == true) && (player.moveDebounce == 0) && (interactDebounce == 0)) {
            //Move Up
            if ((keyCode == 87) && (interacting == false) && (fadeObj.checkFade("general") == false) && (mapObj.pauseY == -(pos(12)))) {
                player.changeDirection("up");
                if (checkObj.checkMoveCollisions("up") == true) {
                    player.moveDirection = "none";
                    //sfxBump.play();
                }
                else {
                    player.moveDirection = "up";
                }

                player.moveDebounce = 10;
            }
            //Move Down
            else if ((keyCode == 83) && (interacting == false) && (fadeObj.checkFade("general") == false) && (mapObj.pauseY == -(pos(12)))) {
                player.changeDirection("down");
                if (checkObj.checkMoveCollisions("down") == true) {
                    player.moveDirection = "none";
                    //sfxBump.play();
                }
                else {
                    player.moveDirection = "down";
                }

                player.moveDebounce = 10;
            }
            //Move Left
            else if ((keyCode == 65) && (interacting == false) && (fadeObj.checkFade("general") == false) && (mapObj.pauseY == -(pos(12)))) {
                player.changeDirection("left");
                if (checkObj.checkMoveCollisions("left") == true) {
                    player.moveDirection = "none";
                    //sfxBump.play();
                }
                else {
                    player.moveDirection = "left";
                }

                player.moveDebounce = 10;
            }
            //Move Right
            else if ((keyCode == 68) && (interacting == false) && (fadeObj.checkFade("general") == false) && (mapObj.pauseY == -(pos(12)))) {
                player.changeDirection("right");
                if (checkObj.checkMoveCollisions("right") == true) {
                    player.moveDirection = "none";
                    //sfxBump.play();
                }
                else {
                    player.moveDirection = "right";
                }

                player.moveDebounce = 10;
            }
            //Interact
            else if ((keyCode == ENTER) && (fadeObj.checkFade("interact") == false) && (player.moveDirection == "none") && (mapObj.pauseY == -(pos(12)))) {
                for (let i = 0; i < mapObj.currentAreaInteracts.length; i++) {
                    if (mapObj.currentAreaInteracts[i] != false) {
                        if ((checkObj.checkFacing(mapObj.currentAreaInteracts[i]) || ((inCutscene = true) && (mapObj.currentAreaInteracts[i].interactStep != 0))) && (this.checkForMovement() == false)) {
                            mapObj.currentAreaInteracts[i].interact();
                            sfxCursor.play();
                        }

                    }

                }

            }
            //Pause
            else if ((keyCode == 80) && (interacting == false) && (fadeObj.checkFade("general") == false) && (mapObj.pauseDebounce == 0)) {
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
            else if ((keyCode == 84) && (interacting == false) && (fadeObj.checkFade("general") == false) && (mapObj.pauseY == -(pos(12))) && (testingKeys == true)) {
                fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
                player.moveDebounce = 0;
                player.moveDirection = "none";
                mapObj.transferDirection = "point";
                mapObj.xTransfer = pos(3);
                mapObj.yTransfer = pos(3);
                mapObj.transferToArea = "Test Area 1";
                player.changeDirection("up");
            }
            //Teleport to Future Area with Y
            else if ((keyCode == 89) && (interacting == false) && (testingWaypoint != "none") && (fadeObj.checkFade("general") == false) && (mapObj.pauseY == -(pos(12))) && (testingKeys == true)) {
                fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
                player.moveDebounce = 0;
                player.moveDirection = "none";
                mapObj.transferDirection = "point";
                mapObj.xTransfer = testingWaypointX;
                mapObj.yTransfer = testingWaypointY;
                mapObj.transferToArea = testingWaypoint;
                player.changeDirection("up");
            }

        }

    }


    //Checks if any interacts are moving currently.
    checkForMovement() {
        for (let i = 0; i < mapObj.currentAreaInteracts.length; i++) {
            if ((mapObj.currentAreaInteracts[i] != false) && (mapObj.currentAreaInteracts[i].moveDirection != "none")) {
                return true;
            }

        }

        return false;
    }

}


//Map Object
class Map {
    constructor() {
        this.currentArea = "Hercules' House";
        this.encounterArea = false;
        this.outside = false;
        this.areaBiome = "Inner Webs";
        this.currentAreaWalls;
        this.currentAreaEncounters;
        this.currentAreaInteracts;

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


            //Draw Player
            player.draw();


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
        if (this.transferToArea == "Test Area 1") {
            this.currentAreaWalls = testArea1Walls;
            this.currentAreaEncounters = 0;
            this.currentAreaInteracts = testArea1Interacts;
            mapBG = "none";
        }
        else if (this.transferToArea == "Test Area 2") {
            this.currentAreaWalls = testArea2Walls;
            this.currentAreaEncounters = testArea2Encounters;
            this.currentAreaInteracts = 0;
            mapBG = "none";
        }
        else if (this.transferToArea == "Hercules' House") {
            this.currentAreaWalls = herculesHouseWalls;
            this.currentAreaEncounters = 0;
            this.currentAreaInteracts = herculesHouseInteracts;
            mapBG = silkFloorBG;
        }
        else if (this.transferToArea == "Inner Webs South") {
            this.currentAreaWalls = innerWebsSouthWalls;
            this.currentAreaEncounters = 0;
            this.currentAreaInteracts = innerWebsSouthInteracts;
            mapBG = silkFloorBG;
        }
        else if (this.transferToArea == "Inner Webs West") {
            this.currentAreaWalls = innerWebsWestWalls;
            this.currentAreaEncounters = 0;
            this.currentAreaInteracts = innerWebsWestInteracts;
            mapBG = silkFloorBG;
        }
        else if (this.transferToArea == "Inner Webs Checkpoint") {
            this.currentAreaWalls = innerWebsCheckpointWalls;
            this.currentAreaEncounters = 0;
            this.currentAreaInteracts = innerWebsCheckpointInteracts;
            mapBG = silkFloorBG;
        }
        else if (this.transferToArea == "Mantid's House") {
            this.currentAreaWalls = mantidHouseWalls;
            this.currentAreaEncounters = 0;
            this.currentAreaInteracts = mantidHouseInteracts;
            mapBG = silkFloorBG;
        }
        else if (this.transferToArea == "The Median") {
            this.currentAreaWalls = theMedianWalls;
            this.currentAreaEncounters = 0;
            this.currentAreaInteracts = theMedianInteracts;
            mapBG = silkFloorBG;
        }
        else if (this.transferToArea == "Inner Webs East") {
            this.currentAreaWalls = innerWebsEastWalls;
            this.currentAreaEncounters = 0;
            this.currentAreaInteracts = innerWebsEastInteracts;
            mapBG = silkFloorBG;
        }
        else if (this.transferToArea == "Inner Webs Center") {
            this.currentAreaWalls = innerWebsCenterWalls;
            this.currentAreaEncounters = 0;
            this.currentAreaInteracts = innerWebsCenterInteracts;
            mapBG = silkFloorBG;
        }
        else if (this.transferToArea == "Abandoned House") {
            this.currentAreaWalls = abandonedHouseWalls;
            this.currentAreaEncounters = 0;
            this.currentAreaInteracts = abandonedHouseInteracts;
            mapBG = silkFloorBG;
        }
        else if (this.transferToArea == "Inner Webs North") {
            this.currentAreaWalls = innerWebsNorthWalls;
            this.currentAreaEncounters = 0;
            this.currentAreaInteracts = innerWebsNorthInteracts;
            mapBG = silkFloorBG;
        }
        else if (this.transferToArea == "Outer Webs West") {
            this.currentAreaWalls = outerWebsWestWalls;
            this.currentAreaEncounters = 0;
            this.currentAreaInteracts = 0;
            mapBG = outerWebsWestBG;
        }
        else if (this.transferToArea == "Outer Webs Center") {
            this.currentAreaWalls = outerWebsCenterWalls;
            this.currentAreaEncounters = 0;
            this.currentAreaInteracts = outerWebsCenterInteracts;
            mapBG = outerWebsCenterBG;
        }
        else if (this.transferToArea == "Outer Webs East") {
            this.currentAreaWalls = outerWebsEastWalls;
            this.currentAreaEncounters = 0;
            this.currentAreaInteracts = outerWebsEastInteracts;
            mapBG = outerWebsEastBG;
        }
        else if (this.transferToArea == "Outer Webs South") {
            this.currentAreaWalls = outerWebsSouthWalls;
            this.currentAreaEncounters = 0;
            this.currentAreaInteracts = 0;
            mapBG = outerWebsSouthBG;
        }
        else if (this.transferToArea == "Stairwell Top") {
            this.currentAreaWalls = stairwellTopWalls;
            this.currentAreaEncounters = 0;
            this.currentAreaInteracts = stairwellTopInteracts;
            mapBG = stairwellTopBG;
        }

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
            for (let i = 0; i < this.currentAreaInteracts.length; i++) {
                if (this.currentAreaInteracts[i] != false) {
                    if (this.currentAreaInteracts[i].interactStep == 0) {
                        this.currentAreaInteracts[i].passiveAction();
                    }

                }

            }

        }

    }

    drawObjects() {
        for (let i = 0; i < this.currentAreaWalls.length; i++) {
            this.currentAreaWalls[i].draw();
        }

        if (this.currentAreaEncounters != 0) {
            for (let i = 0; i < this.currentAreaEncounters.length; i++) {
                this.currentAreaEncounters[i].draw();
            }

        }

        if (this.currentAreaInteracts != 0) {
            for (let i = 0; i < this.currentAreaInteracts.length; i++) {
                if (this.currentAreaInteracts[i] != false) {
                    if (this.currentAreaInteracts[i].dead == true) {
                        this.currentAreaInteracts[i] = false;
                    }
                    else {
                        this.currentAreaInteracts[i].draw();
                    }

                }

            }

        }

    }

    drawDayNight() {
        if (this.outside == true) {
            noStroke();
            fill(0, 0, 0, this.dayTime);
            rect(0, 0, pos(10), pos(10));
        }
    }

    updateDayNight() {
        if (this.morning == true) {
            this.dayTime -= 0.01;
            if (this.dayTime < 0.01) {
                this.morning = false;
            }
        }
        else {
            this.dayTime += 0.01;
            if (this.dayTime > 99.99) {
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
            if (player.moveDebounce > 0) { //Increment Move Debounce
                player.moveDebounce -= 1;
            }
            else {
                fixPosition(player);
            }

            if (interacting == true) { //Draw Textbox
                textBox.draw();
            }

            if (interactDebounce != 0) { //Increment Interact Debounce
                interactDebounce -= 1;
            }
            else { //Check For Interact Auto Advance
                for (let i = 0; i < this.currentAreaInteracts.length; i++) {
                    if (this.currentAreaInteracts[i] != false) {
                        if ((this.currentAreaInteracts[i].interactStep != 0) && (this.currentAreaInteracts[i].autoAdvance == true)) {
                            this.currentAreaInteracts[i].interact();
                        }

                    }

                }

            }

        }



        if (fadeObj.checkFade("general") == false) {
            this.mapTheme.setVolume(1);
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
        if (playerHealth <= (playerMaxHealth / 4)) {
            image(faceIconHercHurt, pos(7), pos(3));
        }
        else {
            image(faceIconHercNeutral, pos(7), pos(3));
        }

    }

    setCheckpoint() {
        this.checkpointArea = this.currentArea;
        this.checkpointX = player.xPos;
        this.checkpointY = player.yPos;
        cpSaved.instantiate();
    }

    transferToCheckpoint() {
        this.currentArea = this.checkpointArea;
        this.transferToArea = this.checkpointArea;
        player.xPos = this.checkpointX;
        player.yPos = this.checkpointY;
        this.encounterArea = false;
        this.setMapObjects();
        if (this.currentArea == "Test Area 1") {
            areaNameBox.instantiate("Test Area");
            this.mapTheme.stop();
            this.mapTheme = titleTheme;
            this.mapTheme.setLoop(true);
            this.mapTheme.play();
            this.outside = true;
            this.encounterArea = false;
            this.areaBiome = "Test Area"
        }
        else if (this.currentArea == "Hercules' House") {
            areaNameBox.instantiate("Hercules' House");
            this.mapTheme.stop();
            this.mapTheme = iWebsTheme1;
            this.mapTheme.setLoop(true);
            this.mapTheme.play();
            this.outside = false;
            this.encounterArea = false;
            this.areaBiome = "Inner Webs"
        }
        else if (this.currentArea == "The Median") {
            areaNameBox.instantiate("The Median");
            this.mapTheme.stop();
            this.outside = false;
            this.encounterArea = false;
            this.areaBiome = "Inner Webs"
        }
        else if (this.currentArea == "Abandoned House") {
            areaNameBox.instantiate("Abandoned House");
            this.mapTheme.stop();
            this.mapTheme = iWebsTheme2;
            this.mapTheme.setLoop(true);
            this.mapTheme.play();
            this.outside = false;
            this.encounterArea = false;
            this.areaBiome = "Inner Webs"
        }
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
        //Random Enemy Setup
        if (this.enemy == "random") {
            if (mapObj.areaBiome == "Test Area") {
                this.enemy = round(random(1, 2));
                if (this.enemy == 1) {
                    this.enemy = "Slime";
                }
                else if (this.enemy == 2) {
                    this.enemy = "Lil' Chomper";
                }
            }
            else if ((mapObj.areaBiome == "Inner Webs") || (mapObj.areaBiome == "Outer Webs")) {
                this.enemy = round(random(1, 3));
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

        }

        //Set Background
        if (mapObj.areaBiome == "Test Area") {
            battleBG = "Test Area";
        }
        else if (mapObj.areaBiome == "Inner Webs") {
            battleBG = innerWebsBattleBG;
        }
        else if (mapObj.areaBiome == "Outer Webs") {
            battleBG = outerWebsBattleBG;
        }

        //Set Enemy Images/Stats
        if (this.enemy == "Slime") {
            enemyImgNor = slimeNor;
            enemyImgDmg = slimeDmg;
            enemyImgAtk = slimeAtk;
            this.enemyMaxHealth = 40;
            this.enemyHealth = this.enemyMaxHealth;
            this.enemyAtkPower = 10;
            this.xpAwarded = 10;
        }
        else if (this.enemy == "Lil' Chomper") {
            enemyImgNor = chompNor;
            enemyImgDmg = chompDmg;
            enemyImgAtk = chompAtk;
            this.enemyMaxHealth = 50;
            this.enemyHealth = this.enemyMaxHealth;
            this.enemyAtkPower = 10;
            this.xpAwarded = 15;
        }
        else if (this.enemy == "HiveWing Soldier R") {
            enemyImgNor = soldierRedBattleNor;
            enemyImgDmg = soldierRedBattleDmg;
            enemyImgAtk = soldierRedBattleAtk;
            this.enemyMaxHealth = 50;
            this.enemyHealth = this.enemyMaxHealth;
            this.enemyAtkPower = 10;
            this.xpAwarded = 10;
        }
        else if (this.enemy == "HiveWing Soldier Y") {
            enemyImgNor = soldierYellowBattleNor;
            enemyImgDmg = soldierYellowBattleDmg;
            enemyImgAtk = soldierYellowBattleAtk;
            this.enemyMaxHealth = 40;
            this.enemyHealth = this.enemyMaxHealth;
            this.enemyAtkPower = 12;
            this.xpAwarded = 10;
        }
        else if (this.enemy == "HiveWing Soldier B") {
            enemyImgNor = soldierBlackBattleNor;
            enemyImgDmg = soldierBlackBattleDmg;
            enemyImgAtk = soldierBlackBattleAtk;
            this.enemyMaxHealth = 60;
            this.enemyHealth = this.enemyMaxHealth;
            this.enemyAtkPower = 8;
            this.xpAwarded = 10;
        }
        else if (this.enemy == "General Rhino") {
            enemyImgNor = rhinoBattleNor;
            enemyImgDmg = rhinoBattleDmg;
            enemyImgAtk = rhinoBattleAtk;
            this.enemyMaxHealth = 100;
            this.enemyHealth = this.enemyMaxHealth;
            this.enemyAtkPower = 13;
            this.xpAwarded = 50;
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
            image(enemyImgDmg, pos(3), pos(2));


            //Draw Text
            textBox.speaker = "Battle";
            textBox.text2 = "";
            textBox.icon = "none";
            if (this.timer < 30) {
                textBox.text1 = "You won!";
                textBox.draw();
            }
            else if (this.timer < 60) {
                textBox.text1 = "You got " + this.xpAwarded + "XP!";
                textBox.draw();
            }
            else if ((this.levelUp == true) && (this.timer < 90)) {
                textBox.text1 = "You reached level " + playerLevel + "!";
                textBox.draw();
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
            image(enemyImgNor, pos(3), pos(2));


            //Draw Text
            textBox.icon = "none";
            textBox.speaker = "Battle";
            textBox.text2 = "";
            textBox.text1 = "You lost!";
            textBox.draw();


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
            image(enemyImgNor, pos(3), pos(2));


            //Draw Text
            textBox.icon = "none";
            textBox.speaker = "Battle";
            textBox.text2 = "";
            textBox.text1 = "You flee!";
            textBox.draw();


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
            image(enemyImgNor, pos(3), pos(2));


            //Draw Text
            textBox.icon = "none";
            textBox.speaker = "Battle";
            textBox.text2 = "";
            textBox.text1 = this.enemy + " flees!";
            textBox.draw();


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
            image(enemyImgDmg, pos(3), pos(2));
        }
        else if (this.enemyAttack == true) {
            image(enemyImgAtk, pos(3), pos(2));
        }
        else {
            image(enemyImgNor, pos(3), pos(2));
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

        textBox.speaker = "Battle";
        textBox.text2 = "";
        textBox.icon = "none";
        textBox.color = 255;
        if (this.battleTextID == 1) {
            textBox.text1 = "You attack!";
            textBox.draw();
        }
        else if (this.battleTextID == 2) {
            textBox.text1 = "You miss!";
            textBox.draw();
        }
        else if (this.battleTextID == 3) {
            textBox.text1 = "You defend!";
            textBox.draw();
        }
        else if (this.battleTextID == 4) {
            textBox.text1 = this.enemy + " attacks!";
            textBox.draw();
        }
        else if (this.battleTextID == 5) {
            textBox.text1 = this.enemy + " misses!";
            textBox.draw();
        }
        else if (this.battleTextID == 6) {
            textBox.text1 = this.enemy + " defends!";
            textBox.draw();
        }
        else if (this.battleTextID == 7) {
            textBox.text1 = "You heal!";
            textBox.draw();
        }
        else if (this.battleTextID == 8) {
            textBox.text1 = this.enemy + " heals!";
            textBox.draw();
        }
        else if (this.battleTextID == 9) {
            textBox.text1 = "You are tired!";
            textBox.draw();
        }
        else if (this.battleTextID == 10) {
            textBox.text1 = this.enemy + " is tired!";
            textBox.draw();
        }
        else if (this.battleTextID == 11) {
            textBox.text1 = "You str. attack!";
            textBox.draw();
        }
        else if (this.battleTextID == 12) {
            textBox.text1 = this.enemy + " str. attacks!";
            textBox.draw();
        }
        else if (this.battleTextID == 13) {
            textBox.text1 = this.enemy + " appeared!";
            textBox.draw();
        }
        else if (this.battleTextID == 14) {
            textBox.text1 = "You couldn't escape!";
            textBox.draw();
        }
        else if (this.battleTextID == 15) {
            textBox.text1 = this.enemy + " couldn't escape!";
            textBox.draw();
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
                this.attackMiss = round(random(1, 5));
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
                this.attackMiss = round(random(1, 5));
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
                    let fleeChance = round(random(1, 4));
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

        }

    }

    enemyAtkAction() {
        this.attackMiss = round(random(1, 5));
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
        this.attackMiss = round(random(1, 5));
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
        let fleeChance = round(random(1, 4));
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


//Player Object
class Player {
    constructor(x, y) {
        this.xPos = x;
        this.yPos = y;
        this.moveDebounce = 0;
        this.moveDirection = "none";
    }


    //Draw Function
    draw() {
        image(playerSprite, this.xPos, this.yPos);
    }


    //Move Function
    move(direction) {
        if ((this.moveDebounce != 0) && (direction != "none")) {
            if (direction == "up") {
                this.yPos -= pos(0.1);
            }
            else if (direction == "down") {
                this.yPos += pos(0.1);
            }
            else if (direction == "left") {
                this.xPos -= pos(0.1);
            }
            else if (direction == "right") {
                this.xPos += pos(0.1);
            }

            //Check for transfers, cutscenes, and encounters
            if ((this.moveDebounce == 1) && (fadeObj.checkFade("general") == false) && (interacting == false)) {
                this.xPos = round(this.xPos);
                this.yPos = round(this.yPos);
                checkObj.checkTransfer();
                if ((this.xPos != 0) && (this.xPos != pos(9)) && (this.yPos != 0) && (this.yPos != pos(9)) && (doRandomEncounters == true)) {
                    if (checkObj.checkInsideEncounter() == true) {
                        mapObj.encounterChance = round(random(1, 7));
                        if (mapObj.encounterChance == 7) {
                            fadeObj.fadeOut(30, 0, 255, 255, 255, "battleStart");
                            sfxBattleStart.play();
                            battleObj = new Battle("random");
                            battleScripted = false;
                        }

                    }
                    //Whole Area Encounters
                    else if (mapObj.encounterArea == true) {
                        mapObj.encounterChance = round(random(1, 7));
                        if (mapObj.encounterChance == 7) {
                            fadeObj.fadeOut(30, 0, 255, 255, 255, "battleStart");
                            sfxBattleStart.play();
                            battleObj = new Battle("random");
                            battleScripted = false;
                        }

                    }

                }

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
            playerSprite = playerSpriteU;
        }
        else if (direction == "down") {
            playerSprite = playerSpriteD;
        }
        else if (direction == "left") {
            playerSprite = playerSpriteL;
        }
        else if (direction == "right") {
            playerSprite = playerSpriteR;
        }
        else {
            print("Unable to turn due to invalid direction.")
        }
    }
}


//Wall Object
class Wall {
    constructor(x, y, type) {
        this.xPos = x;
        this.yPos = y;
        this.type = type;
    }

    /*
    Wall Type Guide:
    1 - Test Wall
    2 - Test Tree
    3 - Silk Wall
    4 - Silk Pillar Middle
    5 - Silk Table
    6 - Silk Chest
    7 - Stone Table
    8 - Stone Lamp
    9 - Rug Sky
    10 - Rug Leaf
    11 - Rug Night
    12 - Pot Cracked
    13 - Pot Decorated
    14 - Silk Pillar Bottom
    15 - Silk Pillar Top
    */

    draw() {
        noStroke();
        let sprite;
        if (this.type == 1) {
            sprite = testWallSprite;
        }
        else if (this.type == 2) {
            sprite = testTreeSprite;
        }
        else if (this.type == 3) {
            sprite = silkWallSprite;
        }
        else if (this.type == 4) {
            sprite = silkPillarSprite;
        }
        else if (this.type == 4) {
            sprite = silkPillarSprite;
        }
        else if (this.type == 5) {
            sprite = silkTableSprite;
        }
        else if (this.type == 6) {
            sprite = silkChestSprite;
        }
        else if (this.type == 7) {
            sprite = stoneTableSprite;
        }
        else if (this.type == 8) {
            sprite = stoneLampSprite;
        }
        else if (this.type == 9) {
            sprite = rugSkySprite;
        }
        else if (this.type == 10) {
            sprite = rugLeafSprite;
        }
        else if (this.type == 11) {
            sprite = rugNightSprite;
        }
        else if (this.type == 12) {
            sprite = potCrackedSprite;
        }
        else if (this.type == 13) {
            sprite = potDecoratedSprite;
        }
        else if (this.type == 14) {
            sprite = silkPillarBottomSprite;
        }
        else if (this.type == 15) {
            sprite = silkPillarTopSprite;
        }
        else {
            sprite = "none";
        }

        if (sprite != "none") {
            image(sprite, this.xPos, this.yPos);
        }

    }


    //Check Collide Function
    checkCollide(direction) {
        if ((this.type != 9) && (this.type != 10) && (this.type != 11)) {
            if (direction == "up") {
                if ((player.xPos == this.xPos) && (player.yPos == this.yPos + pos(1))) {
                    return (true);
                }
                else {
                    return (false);
                }

            }
            else if (direction == "down") {
                if ((player.xPos == this.xPos) && (player.yPos == this.yPos - pos(1))) {
                    return (true);
                }
                else {
                    return (false);
                }

            }
            else if (direction == "left") {
                if ((player.yPos == this.yPos) && (player.xPos == this.xPos + pos(1))) {
                    return (true);
                }
                else {
                    return (false);
                }

            }
            else if (direction == "right") {
                if ((player.yPos == this.yPos) && (player.xPos == this.xPos - pos(1))) {
                    return (true);
                }
                else {
                    return (false);
                }

            }
        }
        else {
            return (false);
        }

    }

}


//Encounter Object
class Encounter {
    constructor(x, y, type) {
        this.xPos = x;
        this.yPos = y;
        this.type = type;
    }

    draw() {
        noStroke();
        let sprite;
        if (this.type == 1) {
            sprite = testEncounterSprite;
        }

        image(sprite, this.xPos, this.yPos);
    }

}


//Interact Object
class Interact {
    constructor(x, y, direction, id) {
        this.xPos = x;
        this.yPos = y;
        this.direction = direction;
        this.id = id
        this.pActionDebounce = 10;
        this.pActionStep = 0;
        this.interactStep = 0;
        this.moveDirection = "none";
        this.dead = false;
        this.selfSwitchA = false;
        this.autoAdvance;
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
    8 - Intro Hive Soldier
    9 - Intro Hive Soldier Defeated
    10 - "Glad To Be In The Inner Webs" Snooty SilkWing Y (Inner Webs South)
    11 - "This Place Is Getting Crowded" Observant SilkWing B (Inner Webs West)
    12 - Mantid (In House)
    13 - Median Guard
    14 - Mantid Bed
    15 - Hercules Rest Reminder Note
    16 - "I always knew you were trouble!" Judgemental SilkWing P (Inner Webs East)
    17 - "D-Don't talk to me!" Scared SilkWing B (Inner Webs East)
    18 - "That's totally crazy dude!" Laid Back SilkWing Y (Inner Webs Center)
    19 - Abandoned House Intro
    20 - "Don't fall behind!" Dilligent SilkWing P (Inner Webs North)
    21 - Median Guard Battle
    22 - Median Guard Defeated
    23 - Hercules House Sign
    24 - Mantid House Sign
    25 - Abandoned House Sign
    26 - Median Sign
    27 - Propoganda Sign "Watching"
    28 - "I swear I saw it!" Bewildered SilkWing B (Outer Webs Center)
    29 - "Sure you did." Skeptical SilkWing Y (Outer Webs Center)
    30 - Stairwell Top Sign
    31 - Coming Soon Sign
    32 - First fight with Rhino
    33 - Rhino Dummy
    34 - Magenta Dummy
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
    Hive Soldier Red - 255, 0, 0
    Hive Soldier Yellow - 255, 255, 0
    Hive Soldier Black - 200, 200, 200
    Notes - 255, 242, 210
    Sign - 200, 200, 200
    */

    //23 Chars without face and 19 chars with face
    //mmmmmmmmmmmmmmmmmmmmmmm
    //mmmmmmmmmmmmmmmmmmm


    //Draw Function
    draw() {
        this.move(this.moveDirection);
        //Magenta and Examples
        if ((this.id == 1) || (this.id == 2) || (this.id == 3) || (this.id == 4) || (this.id == 5) || (this.id == 6) || (this.id == 34)) {
            if (this.direction == "up") {
                image(magentaSpriteU, this.xPos, this.yPos);
            }
            else if (this.direction == "down") {
                image(magentaSpriteD, this.xPos, this.yPos);
            }
            else if (this.direction == "left") {
                image(magentaSpriteL, this.xPos, this.yPos);
            }
            else if (this.direction == "right") {
                image(magentaSpriteR, this.xPos, this.yPos);
            }

        }
        //Rhino
        else if (this.id == 33) {
            if (this.direction == "up") {
                image(rhinoSpriteU, this.xPos, this.yPos);
            }
            else if (this.direction == "down") {
                image(rhinoSpriteD, this.xPos, this.yPos);
            }
            else if (this.direction == "left") {
                image(rhinoSpriteL, this.xPos, this.yPos);
            }
            else if (this.direction == "right") {
                image(rhinoSpriteR, this.xPos, this.yPos);
            }

        }
        //Beds
        else if ((this.id == 7) || (this.id == 14)) {
            image(bedSprite, this.xPos, this.yPos);
        }
        //Intro Hive Soldier
        else if (this.id == 8) {
            if (this.selfSwitchA == false) {
                if (this.direction == "up") {
                    image(hiveSoldierRedSpriteU, this.xPos, this.yPos);
                }
                else if (this.direction == "down") {
                    image(hiveSoldierRedSpriteD, this.xPos, this.yPos);
                }
                else if (this.direction == "left") {
                    image(hiveSoldierRedSpriteL, this.xPos, this.yPos);
                }
                else if (this.direction == "right") {
                    image(hiveSoldierRedSpriteR, this.xPos, this.yPos);
                }
            }
            else {
                image(hiveSoldierRedSpriteDowned, this.xPos, this.yPos);
            }

        }
        //Median Guard Battle
        else if (this.id == 21) {
            if (this.selfSwitchA == false) {
                if (this.direction == "up") {
                    image(hiveSoldierBlackSpriteU, this.xPos, this.yPos);
                }
                else if (this.direction == "down") {
                    image(hiveSoldierBlackSpriteD, this.xPos, this.yPos);
                }
                else if (this.direction == "left") {
                    image(hiveSoldierBlackSpriteL, this.xPos, this.yPos);
                }
                else if (this.direction == "right") {
                    image(hiveSoldierBlackSpriteR, this.xPos, this.yPos);
                }
            }
            else {
                image(hiveSoldierBlackSpriteDowned, this.xPos, this.yPos);
            }

        }
        //Black HiveWings
        else if (this.id == 13) {
            if (this.direction == "up") {
                image(hiveSoldierBlackSpriteU, this.xPos, this.yPos);
            }
            else if (this.direction == "down") {
                image(hiveSoldierBlackSpriteD, this.xPos, this.yPos);
            }
            else if (this.direction == "left") {
                image(hiveSoldierBlackSpriteL, this.xPos, this.yPos);
            }
            else if (this.direction == "right") {
                image(hiveSoldierBlackSpriteR, this.xPos, this.yPos);
            }

        }
        //Intro Hive Soldier Defeated
        else if (this.id == 9) {
            image(hiveSoldierRedSpriteDowned, this.xPos, this.yPos);
        }
        //Median Guard Defeated
        else if (this.id == 22) {
            image(hiveSoldierBlackSpriteDowned, this.xPos, this.yPos);
        }
        //Blue SilkWings
        else if ((this.id == 11) || (this.id == 17) || (this.id == 28)) {
            if (this.direction == "up") {
                image(silkwingBlueSpriteU, this.xPos, this.yPos);
            }
            else if (this.direction == "down") {
                image(silkwingBlueSpriteD, this.xPos, this.yPos);
            }
            else if (this.direction == "left") {
                image(silkwingBlueSpriteL, this.xPos, this.yPos);
            }
            else if (this.direction == "right") {
                image(silkwingBlueSpriteR, this.xPos, this.yPos);
            }

        }
        //Yellow SilkWings
        else if ((this.id == 10) || (this.id == 18) || (this.id == 29)) {
            if (this.direction == "up") {
                image(silkwingYellowSpriteU, this.xPos, this.yPos);
            }
            else if (this.direction == "down") {
                image(silkwingYellowSpriteD, this.xPos, this.yPos);
            }
            else if (this.direction == "left") {
                image(silkwingYellowSpriteL, this.xPos, this.yPos);
            }
            else if (this.direction == "right") {
                image(silkwingYellowSpriteR, this.xPos, this.yPos);
            }

        }
        //Purple SilkWings
        else if ((this.id == 16) || (this.id == 20)) {
            if (this.direction == "up") {
                image(silkwingPurpleSpriteU, this.xPos, this.yPos);
            }
            else if (this.direction == "down") {
                image(silkwingPurpleSpriteD, this.xPos, this.yPos);
            }
            else if (this.direction == "left") {
                image(silkwingPurpleSpriteL, this.xPos, this.yPos);
            }
            else if (this.direction == "right") {
                image(silkwingPurpleSpriteR, this.xPos, this.yPos);
            }

        }
        //Mantid
        else if (this.id == 12) {
            if (this.direction == "up") {
                image(mantidSpriteU, this.xPos, this.yPos);
            }
            else if (this.direction == "down") {
                image(mantidSpriteD, this.xPos, this.yPos);
            }
            else if (this.direction == "left") {
                image(mantidSpriteL, this.xPos, this.yPos);
            }
            else if (this.direction == "right") {
                image(mantidSpriteR, this.xPos, this.yPos);
            }

        }
        //Notes
        else if (this.id == 15) {
            image(notesSprite, this.xPos, this.yPos);
        }
        //Signs
        else if ((this.id == 23) || (this.id == 24) || (this.id == 25) || (this.id == 26) || (this.id == 30) || (this.id == 31)) {
            image(signSprite, this.xPos, this.yPos);
        }
        //Poster Signs
        else if (this.id == 27) {
            image(signPostersSprite, this.xPos, this.yPos);
        }

    }


    //Check Collide Function
    checkCollide(direction) {
        if (direction == "up") {
            if ((player.xPos == this.xPos) && (player.yPos == this.yPos + pos(1))) {
                return (true);
            }
            else {
                return (false);
            }

        }
        else if (direction == "down") {
            if ((player.xPos == this.xPos) && (player.yPos == this.yPos - pos(1))) {
                return (true);
            }
            else {
                return (false);
            }

        }
        else if (direction == "left") {
            if ((player.yPos == this.yPos) && (player.xPos == this.xPos + pos(1))) {
                return (true);
            }
            else {
                return (false);
            }

        }
        else if (direction == "right") {
            if ((player.yPos == this.yPos) && (player.xPos == this.xPos - pos(1))) {
                return (true);
            }
            else {
                return (false);
            }

        }

    }


    //Interaction Function
    interact() {
        //Text Example
        if (this.id == 1) {
            if (this.interactStep == 0) {
                interacting = true;
                interactDebounce = 10;
                this.interactStep += 1;
                this.changeDirection("player");
                textBox.icon = "none";
                textBox.text1 = "This is some text!";
                textBox.text2 = "";
                textBox.speaker = "Text Example";
                textBox.color = "rgb(255, 255, 225)";
            }
            else if (this.interactStep == 1) {
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = "none";
                textBox.text1 = "Isn't it great!";
                textBox.text2 = "";
                textBox.speaker = "Text Example";
                textBox.color = "rgb(255, 255, 225)";
            }
            else if (this.interactStep == 2) {
                interactDebounce = 10;
                this.interactStep += 1;
                this.changeDirection("up");
                textBox.icon = "none";
                textBox.text1 = "Look over there!";
                textBox.text2 = "";
                textBox.speaker = "Text Example";
                textBox.color = "rgb(255, 255, 225)";
            }
            else if (this.interactStep == 3) {
                interacting = false;
                inCutscene = false;
                this.changeDirection("left");
                interactDebounce = 10;
                this.interactStep = 0;
            }

        }
        //Passive Turning Example
        else if (this.id == 2) {
            if (this.interactStep == 0) {
                interacting = true;
                interactDebounce = 10;
                this.interactStep += 1;
                this.changeDirection("player");
                textBox.icon = "none";
                textBox.text1 = "I like spinning!";
                textBox.text2 = "";
                textBox.speaker = "Spinning Example";
                textBox.color = "rgb(255, 255, 225)";
            }
            else if (this.interactStep == 1) {
                interacting = false;
                interactDebounce = 10;
                this.interactStep = 0;
            }

        }
        //Movement Example
        else if (this.id == 3) {
            if (this.interactStep == 0) {
                interacting = true;
                interactDebounce = 10;
                this.interactStep += 1;
                this.changeDirection("player");
                textBox.icon = "none";
                textBox.text1 = "Ah go away!";
                textBox.text2 = "";
                textBox.speaker = "Moving Example";
                textBox.color = "rgb(255, 255, 225)";
            }
            else if (this.interactStep == 1) {
                interactDebounce = 10;
                this.changeDirection("right");
                this.moveDirection = "right";
            }
            else if (this.interactStep == 2) {
                interactDebounce = 11;
                this.changeDirection("up");
                this.moveDirection = "up";
            }
            else if (this.interactStep == 3) {
                interactDebounce = 11;
                this.changeDirection("up");
                this.moveDirection = "up";
            }
            else if (this.interactStep == 4) {
                interactDebounce = 11;
                this.changeDirection("up");
                this.moveDirection = "up";
            }
            else if (this.interactStep == 5) {
                interacting = false;
                interactDebounce = 10;
                this.interactStep = 0;
            }

        }
        //Teleporter Example
        else if (this.id == 4) {
            if (this.interactStep == 0) {
                interacting = true;
                interactDebounce = 10;
                this.interactStep += 1;
                this.changeDirection("player");
                textBox.icon = "none";
                textBox.text1 = "Teleport!";
                textBox.text2 = "";
                textBox.speaker = "Transfer Example";
                textBox.color = "rgb(255, 255, 225)";
            }
            else if (this.interactStep == 1) {
                fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
                player.moveDebounce = 0;
                player.moveDirection = "none";
                mapObj.transferDirection = "point";
                mapObj.xTransfer = pos(3);
                mapObj.yTransfer = pos(3);
                mapObj.transferToArea = "Test Area 1";
                mapObj.inRoomTransfer = true;
                mapObj.transferPlayerDirection = "up";
                interacting = false;
                interactDebounce = 10;
                this.interactStep = 0;
            }

        }
        //Interact Type Switch Example
        else if (this.id == 5) {
            if (this.interactStep == 0) {
                interacting = true;
                interactDebounce = 10;
                this.interactStep += 1;
                this.changeDirection("player");
                textBox.icon = "none";
                textBox.text1 = "I am bed now.";
                textBox.text2 = "";
                textBox.speaker = "Interact Switch Example";
                textBox.color = "rgb(255, 255, 225)";
            }
            else if (this.interactStep == 1) {
                this.id = 7;
                interacting = false;
                interactDebounce = 10;
                this.interactStep = 0;
            }

        }
        //Interact Deletion Example
        else if (this.id == 6) {
            if (this.interactStep == 0) {
                interacting = true;
                interactDebounce = 10;
                this.interactStep += 1;
                this.changeDirection("player");
                textBox.icon = "none";
                textBox.text1 = "I am dead now.";
                textBox.text2 = "";
                textBox.speaker = "Interact Delete Example";
                textBox.color = "rgb(255, 255, 225)";
            }
            else if (this.interactStep == 1) {
                this.dead = true;
                interacting = false;
                interactDebounce = 10;
                this.interactStep = 0;
            }

        }
        //Bed
        else if (this.id == 7) {
            if (this.interactStep == 0) {
                interacting = true;
                interactDebounce = 10;
                this.interactStep += 1;
                mapObj.setCheckpoint();
                if (playerHealth != playerMaxHealth) {
                    GS_rests += 1;
                    playerHealth = playerMaxHealth;
                    sfxRegen.play();
                    textBox.icon = faceIconHercNeutral;
                    textBox.text1 = "Alright, now that I'm rested it's time";
                    textBox.text2 = "to get going!";
                    textBox.speaker = "Hercules";
                    textBox.color = "rgb(255, 252, 219)";
                }
                else {
                    textBox.icon = faceIconHercNeutral;
                    textBox.text1 = "Now's not a good time to be";
                    textBox.text2 = "sleeping.";
                    textBox.speaker = "Hercules";
                    textBox.color = "rgb(255, 252, 219)";
                }


            }
            else if (this.interactStep == 1) {
                interacting = false;
                interactDebounce = 10;
                this.interactStep = 0;
            }

        }
        //Intro Hive Soldier
        else if (this.id == 8) {
            if (this.interactStep == 0) {
                interacting = true;
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = "none";
                textBox.text1 = "Hey, you! Wake up!";
                textBox.text2 = "";
                textBox.speaker = "???";
                textBox.color = "rgb(255, 0, 0)";
            }
            else if (this.interactStep == 1) {
                interactDebounce = 10;
                this.interactStep += 1;
                sfxHit.play();
                fadeObj.fadeIn(5);
                textBox.text1 = "";
                textBox.text2 = "";
                textBox.speaker = "";
                textBox.color = "rgb(255, 0, 0)";
                this.autoAdvance = true;
            }
            else if (this.interactStep == 2) {
                this.autoAdvance = false;
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = faceIconHercAngery;
                textBox.text1 = "Wah! What the, who just...";
                textBox.text2 = "";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 3) {
                interactDebounce = 10;
                this.interactStep += 1;
                player.changeDirection("up");
                textBox.icon = faceIconHercScared;
                textBox.text1 = "I-I mean...is something the matter";
                textBox.text2 = "sir?";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 4) {
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = faceIconHercScared;
                textBox.text1 = "(Why is there a HiveWing here?";
                textBox.text2 = "Did I do something wrong?)";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 5) {
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = "none";
                textBox.text1 = "Tch, I always knew you were trouble.";
                textBox.text2 = "";
                textBox.speaker = "HiveWing Soldier";
                textBox.color = "rgb(255, 0, 0)";
            }
            else if (this.interactStep == 6) {
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = "none";
                textBox.text1 = "An unnatural SilkWing like you can't";
                textBox.text2 = "be left to roam free.";
                textBox.speaker = "HiveWing Soldier";
                textBox.color = "rgb(255, 0, 0)";
            }
            else if (this.interactStep == 7) {
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = faceIconHercScared;
                textBox.text1 = "Hold on, I'm sure this is just a...";
                textBox.text2 = "";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 8) {
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = "none";
                textBox.text1 = "Stand down Hercules! Th-That's an";
                textBox.text2 = "order!";
                textBox.speaker = "HiveWing Soldier";
                textBox.color = "rgb(255, 0, 0)";
            }
            else if (this.interactStep == 9) {
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = faceIconHercScared;
                textBox.text1 = "Wait! If this is about what I said, I'm";
                textBox.text2 = "sorry! I didn't mean anything by it!";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 10) {
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = "none";
                textBox.text1 = "I said stand down! You're still no";
                textBox.text2 = "match for a HiveWing like me!";
                textBox.speaker = "HiveWing Soldier";
                textBox.color = "rgb(255, 0, 0)";
            }
            else if (this.interactStep == 11) {
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = faceIconHercScared;
                textBox.text1 = "But I wasn't...!";
                textBox.text2 = "";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 12) {
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = "none";
                textBox.text1 = "GRAHH!";
                textBox.text2 = "";
                textBox.speaker = "HiveWing Soldier";
                textBox.color = "rgb(255, 0, 0)";
            }
            else if (this.interactStep == 13) {
                interactDebounce = 10;
                this.interactStep += 1;
                fadeObj.fadeOut(30, 0, 255, 255, 255, "battleStart");
                sfxBattleStart.play();
                battleObj = new Battle("HiveWing Soldier R");
                battleScripted = true;
            }
            else if (this.interactStep == 14) {
                if (scriptedBattleLost == true) {
                    scriptedBattleLost = false;
                    interactDebounce = 10;
                    this.interactStep = 13;
                    textBox.icon = faceIconHercHurt;
                    textBox.text1 = "No...I can't lose here... You can do";
                    textBox.text2 = "this Hercules!";
                    textBox.speaker = "Hercules";
                    textBox.color = "rgb(255, 252, 219)";
                }
                else {
                    interactDebounce = 10;
                    this.interactStep += 1;
                    this.selfSwitchA = true;
                    textBox.icon = faceIconHercScared;
                    textBox.text1 = "Oh no...oh no oh no oh no oh no...";
                    textBox.text2 = "";
                    textBox.speaker = "Hercules";
                    textBox.color = "rgb(255, 252, 219)";
                }

            }
            else if (this.interactStep == 15) {
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = faceIconHercScared;
                textBox.text1 = "I need to get out of here!";
                textBox.text2 = "";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 16) {
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = "none";
                textBox.text1 = "";
                textBox.text2 = "";
                textBox.speaker = "";
                textBox.color = "rgb(255, 252, 219)";
                fadeObj.fadeOut(60, 0, 0, 0, 0, "interact");
            }
            else if (this.interactStep == 17) {
                interactDebounce = 150;
                this.interactStep += 1;
                fadeObj.fadeText("~ PART 1 ~", "Fugitive", 60, 30, 255, 255, 255);
            }
            else if (this.interactStep == 18) {
                this.id = 9;
                fadeObj.fadeIn();
                interacting = false;
                interactDebounce = 10;
                this.interactStep = 0;
            }

        }
        //Intro Hive Soldier Defeated
        else if (this.id == 9) {
            if (this.interactStep == 0) {
                interacting = true;
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = faceIconHercNeutral;
                textBox.text1 = "They're out cold. Here's hoping";
                textBox.text2 = "they don't wake up quickly...";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 1) {
                interacting = false;
                inCutscene = false;
                interactDebounce = 10;
                this.interactStep = 0;
            }

        }
        //"Glad To Be In The Inner Webs" Snooty SilkWing Y
        else if (this.id == 10) {
            if (this.interactStep == 0) {
                interacting = true;
                interactDebounce = 10;
                this.interactStep += 1;
                this.changeDirection("player");
                textBox.icon = "none";
                textBox.text1 = "Hey Hercules! Why the rush? And was that";
                textBox.text2 = "a HiveWing that just went into your house?";
                textBox.speaker = "Snooty SilkWing";
                textBox.color = "rgb(225, 255, 100)";
            }
            else if (this.interactStep == 1) {
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = faceIconHercScared;
                textBox.text1 = "N-No! Just a...a relative. I'm just";
                textBox.text2 = "heading out to the outer webs.";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 2) {
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = "none";
                textBox.text1 = "The outer webs? Why would anyone want";
                textBox.text2 = "to go there?";
                textBox.speaker = "Snooty SilkWing";
                textBox.color = "rgb(225, 255, 100)";
            }
            else if (this.interactStep == 3) {
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = "none";
                textBox.text1 = "I for one am perfectly happy here in the";
                textBox.text2 = "new inner webs, instead of out there with";
                textBox.speaker = "Snooty SilkWing";
                textBox.color = "rgb(225, 255, 100)";
            }
            else if (this.interactStep == 4) {
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = "none";
                textBox.text1 = "the rif-raf.";
                textBox.text2 = "";
                textBox.speaker = "Snooty SilkWing";
                textBox.color = "rgb(225, 255, 100)";
            }
            else if (this.interactStep == 5) {
                interacting = false;
                inCutscene = false;
                interactDebounce = 10;
                this.interactStep = 0;
            }

        }
        //"This Place Is Getting Crowded" Observant SilkWing B (Inner Webs West)
        else if (this.id == 11) {
            if (this.interactStep == 0) {
                interacting = true;
                interactDebounce = 10;
                this.interactStep += 1;
                this.changeDirection("player");
                textBox.icon = "none";
                textBox.text1 = "Ever since they expanded the webs inside";
                textBox.text2 = "the hive, this place has felt so quiet...";
                textBox.speaker = "Observant SilkWing";
                textBox.color = "rgb(150, 150, 225)";
            }
            else if (this.interactStep == 1) {
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = "none";
                textBox.text1 = "Oh, hi Hercules.";
                textBox.text2 = "";
                textBox.speaker = "Observant SilkWing";
                textBox.color = "rgb(150, 150, 225)";
            }
            else if (this.interactStep == 2) {
                interacting = false;
                inCutscene = false;
                interactDebounce = 10;
                this.interactStep = 0;
            }

        }
        //Mantid (In House)
        else if (this.id == 12) {
            if (this.interactStep == 0) {
                interacting = true;
                interactDebounce = 10;
                this.changeDirection("player");
                if (passGetSwitch == false) {
                    this.interactStep += 1;
                    textBox.icon = faceIconMantidNeutral;
                    textBox.text1 = "Oh hi Hercules! Enjoying another";
                    textBox.text2 = "day in the hive?";
                    textBox.speaker = "Mantid";
                    textBox.color = "rgb(133, 255, 204)";
                }
                else {
                    this.interactStep = 9;
                    textBox.icon = faceIconMantidNeutral;
                    textBox.text1 = "Have fun out there Hercules! And";
                    textBox.text2 = "try not to cause any trouble!";
                    textBox.speaker = "Mantid";
                    textBox.color = "rgb(133, 255, 204)";
                }


            }
            else if (this.interactStep == 1) {
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = faceIconHercNeutral;
                textBox.text1 = "Um, yeah...hey Mantid? Do you still";
                textBox.text2 = "have that spare Median pass?";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 2) {
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = faceIconMantidNeutral;
                textBox.text1 = "Of course, are you heading out";
                textBox.text2 = "somewhere?";
                textBox.speaker = "Mantid";
                textBox.color = "rgb(133, 255, 204)";
            }
            else if (this.interactStep == 3) {
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = faceIconHercScared;
                textBox.text1 = "J-Just going out to get some fresh";
                textBox.text2 = "air...";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 4) {
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = faceIconMantidWorried;
                textBox.text1 = "You seem scared Herc, is";
                textBox.text2 = "something the matter?";
                textBox.speaker = "Mantid";
                textBox.color = "rgb(133, 255, 204)";
            }
            else if (this.interactStep == 5) {
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = faceIconHercScared;
                textBox.text1 = "What? No! I'm fine, really!";
                textBox.text2 = "";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 6) {
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = faceIconMantidNeutral;
                textBox.text1 = "Now there's no need to fret, the";
                textBox.text2 = "HiveWings are here to protect us!";
                textBox.speaker = "Mantid";
                textBox.color = "rgb(133, 255, 204)";
            }
            else if (this.interactStep == 7) {
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = faceIconMantidNeutral;
                textBox.text1 = "They always are.";
                textBox.text2 = "";
                textBox.speaker = "Mantid";
                textBox.color = "rgb(133, 255, 204)";
            }
            else if (this.interactStep == 8) {
                interactDebounce = 10;
                missionText = "Show the pass to the guard!";
                this.interactStep += 1;
                passGetSwitch = true;
                textBox.icon = faceIconHercNeutral;
                textBox.text1 = "Y-Yeah...right. Thanks Mantid.";
                textBox.text2 = "";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 9) {
                interacting = false;
                inCutscene = false;
                interactDebounce = 10;
                this.interactStep = 0;
            }

        }
        //Median Guard
        else if (this.id == 13) {
            if (this.interactStep == 0) {
                interacting = true;
                interactDebounce = 10;
                if (passGetSwitch == false) {
                    this.interactStep += 1;
                    this.changeDirection("player");
                    textBox.icon = "none";
                    textBox.text1 = "Hmm, Hercules. What do you want?";
                    textBox.text2 = "";
                    textBox.speaker = "HiveWing Soldier";
                    textBox.color = "rgb(200, 200, 200)";
                }
                else if (this.selfSwitchA == true) {
                    this.interactStep = 7;
                    this.changeDirection("player");
                    textBox.icon = "none";
                    textBox.text1 = "Go on. It's a crime to loiter you know.";
                    textBox.text2 = "";
                    textBox.speaker = "HiveWing Soldier";
                    textBox.color = "rgb(200, 200, 200)";
                }
                else {
                    fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
                    player.moveDebounce = 0;
                    player.moveDirection = "none";
                    mapObj.transferDirection = "point";
                    mapObj.xTransfer = pos(5);
                    mapObj.yTransfer = pos(2);
                    mapObj.transferToArea = "Inner Webs Checkpoint";
                    mapObj.inRoomTransfer = true;
                    mapObj.transferPlayerDirection = "up";
                    this.interactStep += 1;
                    this.changeDirection("down");
                    textBox.icon = "none";
                    textBox.text1 = "You got a pass?";
                    textBox.text2 = "";
                    textBox.speaker = "HiveWing Soldier";
                    textBox.color = "rgb(200, 200, 200)";
                }

            }
            else if (this.interactStep == 1) {
                interactDebounce = 10;
                this.interactStep += 1;
                if (passGetSwitch == false) {
                    textBox.icon = faceIconHercNeutral;
                    textBox.text1 = "I need to get through the Median.";
                    textBox.text2 = "";
                    textBox.speaker = "Hercules";
                    textBox.color = "rgb(255, 252, 219)";
                }
                else {
                    textBox.icon = faceIconHercNeutral;
                    textBox.text1 = "Yep! Right here! Heh heh...";
                    textBox.text2 = "";
                    textBox.speaker = "Hercules";
                    textBox.color = "rgb(255, 252, 219)";
                }

            }
            else if (this.interactStep == 2) {
                interactDebounce = 10;
                this.interactStep += 1;
                if (passGetSwitch == false) {
                    textBox.icon = "none";
                    textBox.text1 = "Do you have a pass?";
                    textBox.text2 = "";
                    textBox.speaker = "HiveWing Soldier";
                    textBox.color = "rgb(200, 200, 200)";
                }
                else {
                    textBox.icon = "none";
                    textBox.text1 = "Hmm... Hmmmmmmmmmm...";
                    textBox.text2 = "";
                    textBox.speaker = "HiveWing Soldier";
                    textBox.color = "rgb(200, 200, 200)";
                }

            }
            else if (this.interactStep == 3) {
                interactDebounce = 10;
                this.interactStep += 1;
                if (passGetSwitch == false) {
                    textBox.icon = faceIconHercScared;
                    textBox.text1 = "N-No...";
                    textBox.text2 = "";
                    textBox.speaker = "Hercules";
                    textBox.color = "rgb(255, 252, 219)";
                }
                else {
                    textBox.icon = "none";
                    textBox.text1 = "Hmmmmmmmmmmmmmmmmmmmmmm";
                    textBox.text2 = "mmmmmmmmm...";
                    textBox.speaker = "HiveWing Soldier";
                    textBox.color = "rgb(200, 200, 200)";
                }

            }
            else if (this.interactStep == 4) {
                interactDebounce = 10;
                this.interactStep += 1;
                if (passGetSwitch == false) {
                    textBox.icon = "none";
                    textBox.text1 = "Then you're not going through the Median.";
                    textBox.text2 = "";
                    textBox.speaker = "HiveWing Soldier";
                    textBox.color = "rgb(200, 200, 200)";
                }
                else {
                    textBox.icon = faceIconHercSkeptical;
                    textBox.text1 = "...?";
                    textBox.text2 = "";
                    textBox.speaker = "Hercules";
                    textBox.color = "rgb(255, 252, 219)";
                }

            }
            else if (this.interactStep == 5) {
                interactDebounce = 10;
                if (passGetSwitch == false) {
                    this.interactStep += 1;
                    textBox.icon = faceIconHercNeutral;
                    textBox.text1 = "(I think Mantid said she had a";
                    textBox.text2 = "spare pass.)";
                    textBox.speaker = "Hercules";
                    textBox.color = "rgb(255, 252, 219)";
                }
                else {
                    this.interactStep += 1;
                    textBox.icon = "none";
                    textBox.text1 = "Alright you can pass. But no funny";
                    textBox.text2 = "business.";
                    textBox.speaker = "HiveWing Soldier";
                    textBox.color = "rgb(200, 200, 200)";
                }

            }
            else if (this.interactStep == 6) {
                if (passGetSwitch == false) {
                    interactDebounce = 10;
                    missionText = "Get the Median pass from Mantid!";
                    this.interactStep = 7;
                    textBox.icon = faceIconHercNeutral;
                    textBox.text1 = "(She lives just to the left of my ";
                    textBox.text2 = "house.)";
                    textBox.speaker = "Hercules";
                    textBox.color = "rgb(255, 252, 219)";
                }
                else {
                    interactDebounce = 10;
                    this.changeDirection("left");
                    this.moveDirection = "left";
                    this.selfSwitchA = true;
                    missionText = "Escape through the Median!";
                }

            }
            else if (this.interactStep == 7) {
                this.changeDirection("down");
                interacting = false;
                inCutscene = false;
                interactDebounce = 10;
                this.interactStep = 0;
            }

        }
        //Mantid Bed
        else if (this.id == 14) {
            if (this.interactStep == 0) {
                interacting = true;
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = faceIconHercNeutral;
                textBox.text1 = "(It would be rude to take a nap in";
                textBox.text2 = "Mantid's bed.)";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 1) {
                interacting = false;
                interactDebounce = 10;
                this.interactStep = 0;
            }

        }
        //Hercules Rest Reminder Note
        else if (this.id == 15) {
            if (this.interactStep == 0) {
                interacting = true;
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = "none";
                textBox.text1 = "Remember to rest in your bed whenever";
                textBox.text2 = "you're feeling down!";
                textBox.speaker = "Note";
                textBox.color = "rgb(255, 242, 210)";
            }
            else if (this.interactStep == 1) {
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = "none";
                textBox.text1 = "-Mantid";
                textBox.text2 = "";
                textBox.speaker = "Note";
                textBox.color = "rgb(255, 242, 210)";
            }
            else if (this.interactStep == 2) {
                interacting = false;
                interactDebounce = 10;
                this.interactStep = 0;
            }

        }
        //"I always knew you were trouble!" Judgemental SilkWing P (Inner Webs East)
        else if (this.id == 16) {
            if (this.interactStep == 0) {
                interacting = true;
                interactDebounce = 10;
                this.interactStep += 1;
                this.changeDirection("player");
                textBox.icon = "none";
                textBox.text1 = "Hmph, I always knew you were trouble";
                textBox.text2 = "Hercules!";
                textBox.speaker = "Judgemental SilkWing";
                textBox.color = "rgb(200, 165, 255)";
            }
            else if (this.interactStep == 1) {
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = "none";
                textBox.text1 = "Just because you're weirdly strong doesn't";
                textBox.text2 = "mean you can disobey the HiveWings!";
                textBox.speaker = "Judgemental SilkWing";
                textBox.color = "rgb(200, 165, 255)";
            }
            else if (this.interactStep == 2) {
                interacting = false;
                interactDebounce = 10;
                this.interactStep = 0;
            }

        }
        //"D-Don't talk to me!" Scared SilkWing B (Inner Webs East)
        else if (this.id == 17) {
            if (this.interactStep == 0) {
                interacting = true;
                interactDebounce = 10;
                this.interactStep += 1;
                this.changeDirection("player");
                textBox.icon = "none";
                textBox.text1 = "Hercules?! D-Don't talk to me!";
                textBox.text2 = "";
                textBox.speaker = "Scared SilkWing";
                textBox.color = "rgb(150, 150, 225)";
            }
            else if (this.interactStep == 1) {
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = "none";
                textBox.text1 = "Whatever it is you've gotten yourself into,";
                textBox.text2 = "I don't want to be any part of it!";
                textBox.speaker = "Scared SilkWing";
                textBox.color = "rgb(150, 150, 225)";
            }
            else if (this.interactStep == 2) {
                interacting = false;
                interactDebounce = 10;
                this.interactStep = 0;
            }

        }
        //"That's totally crazy dude!" Laid Back SilkWing Y (Inner Webs Center)
        else if (this.id == 18) {
            if (this.interactStep == 0) {
                interacting = true;
                interactDebounce = 10;
                this.interactStep += 1;
                this.changeDirection("player");
                textBox.icon = "none";
                textBox.text1 = "Woah Herc, you're like a criminal now!";
                textBox.text2 = "That's totally crazy dude!";
                textBox.speaker = "Laid Back SilkWing";
                textBox.color = "rgb(255, 255, 0)";
            }
            else if (this.interactStep == 1) {
                interacting = false;
                interactDebounce = 10;
                this.interactStep = 0;
            }

        }
        //Abandoned House Intro
        else if (this.id == 19) {
            if (this.interactStep == 0) {
                interacting = true;
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = faceIconHercNeutral;
                textBox.text1 = "(The SilkWing that used to live here";
                textBox.text2 = "went missing a little while ago.)";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 1) {
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = faceIconHercNeutral;
                textBox.text1 = "(Looks like they still haven't moved";
                textBox.text2 = "out all of her things.)";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 2) {
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = faceIconHercNeutral;
                textBox.text1 = "(I suppose nobody would mind if I";
                textBox.text2 = "rested up in the bed here...)";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 3) {
                interacting = false;
                interactDebounce = 10;
                this.interactStep = 0;
                this.dead = true;
            }

        }
        //"Don't fall behind!" Dilligent SilkWing P (Inner Webs North)
        else if (this.id == 20) {
            if (this.interactStep == 0) {
                interacting = true;
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = "none";
                textBox.text1 = "Fix the wall, nice and perfect. Don't ever";
                textBox.text2 = "fall behind or it's back to misbehavor's";
                textBox.speaker = "Dilligent SilkWing";
                textBox.color = "rgb(200, 165, 255)";
            }
            else if (this.interactStep == 1) {
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = "none";
                textBox.text1 = "way with you! Good SilkWings always get";
                textBox.text2 = "the job done on time! Always...";
                textBox.speaker = "Dilligent SilkWing";
                textBox.color = "rgb(200, 165, 255)";
            }
            else if (this.interactStep == 2) {
                interacting = false;
                interactDebounce = 10;
                this.interactStep = 0;
            }

        }
        //Median Guard Battle
        else if (this.id == 21) {
            if (this.interactStep == 0) {
                interacting = true;
                this.interactStep += 1;
                interactDebounce = 10;
                player.moveDirection = "up";
                player.moveDebounce = 10;
                textBox.icon = "none";
                textBox.text1 = "";
                textBox.text2 = "";
                textBox.speaker = "";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 1) {
                this.interactStep += 1;
                interacting = true;
                interactDebounce = 11;
                player.moveDirection = "up";
                player.moveDebounce = 11;
            }
            else if (this.interactStep == 2) {
                this.interactStep += 1;
                interacting = true;
                interactDebounce = 11;
                player.moveDirection = "up";
                player.moveDebounce = 11;
            }
            else if (this.interactStep == 3) {
                this.interactStep += 1;
                interacting = true;
                interactDebounce = 11;
                player.moveDirection = "up";
                player.moveDebounce = 11;
            }
            else if (this.interactStep == 4) {
                player.moveDirection = "none";
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = "none";
                textBox.text1 = "Wait! Hold it right there!";
                textBox.text2 = "";
                textBox.speaker = "HiveWing Soldier";
                textBox.color = "rgb(200, 200, 200)";
            }
            else if (this.interactStep == 5) {
                player.changeDirection("down");
                interactDebounce = 10;
                this.moveDirection = "up";
            }
            else if (this.interactStep == 6) {
                interactDebounce = 11;
                this.moveDirection = "up";
            }
            else if (this.interactStep == 7) {
                interactDebounce = 11;
                this.moveDirection = "up";
            }
            else if (this.interactStep == 8) {
                interactDebounce = 11;
                this.moveDirection = "up";
            }
            else if (this.interactStep == 9) {
                interactDebounce = 11;
                this.moveDirection = "up";
            }
            else if (this.interactStep == 10) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = "none";
                textBox.text1 = "There's an arrest warrant out for you!";
                textBox.text2 = "Lucky me that I remembered just in time!";
                textBox.speaker = "HiveWing Soldier";
                textBox.color = "rgb(200, 200, 200)";
            }
            else if (this.interactStep == 11) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = "none";
                textBox.text1 = "The soldier that passed me earlier was";
                textBox.text2 = "heading to your place, right?";
                textBox.speaker = "HiveWing Soldier";
                textBox.color = "rgb(200, 200, 200)";
            }
            else if (this.interactStep == 12) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = "none";
                textBox.text1 = "Hmmm, well I'm not nearly as much of a";
                textBox.text2 = "pushover as him, so I'd say that my";
                textBox.speaker = "HiveWing Soldier";
                textBox.color = "rgb(200, 200, 200)";
            }
            else if (this.interactStep == 13) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = "none";
                textBox.text1 = "chances of victory against you are";
                textBox.text2 = "all but certain.";
                textBox.speaker = "HiveWing Soldier";
                textBox.color = "rgb(200, 200, 200)";
            }
            else if (this.interactStep == 14) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconHercSkeptical;
                textBox.text1 = "(Talk about self confidence...)";
                textBox.text2 = "";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 15) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = "none";
                textBox.text1 = "Hm, yes. This should be fun!";
                textBox.text2 = "";
                textBox.speaker = "HiveWing Soldier";
                textBox.color = "rgb(200, 200, 200)";
            }
            else if (this.interactStep == 16) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconHercScared;
                textBox.text1 = "(Uh oh, here they come...!)";
                textBox.text2 = "";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 17) {
                interactDebounce = 10;
                this.interactStep += 1;
                fadeObj.fadeOut(30, 0, 255, 255, 255, "battleStart");
                sfxBattleStart.play();
                battleObj = new Battle("HiveWing Soldier B");
                battleScripted = true;
            }
            else if (this.interactStep == 18) {
                if (scriptedBattleLost == true) {
                    scriptedBattleLost = false;
                    interactDebounce = 10;
                    this.interactStep = 17;
                    textBox.icon = faceIconHercHurt;
                    textBox.text1 = "(I can't lose here! Let's try this";
                    textBox.text2 = "again!)";
                    textBox.speaker = "Hercules";
                    textBox.color = "rgb(255, 252, 219)";
                }
                else {
                    interactDebounce = 10;
                    this.interactStep += 1;
                    textBox.icon = "none";
                    textBox.text1 = "Huff...hurk...gah! Now that was a FIGHT!";
                    textBox.text2 = "";
                    textBox.speaker = "HiveWing Soldier";
                    textBox.color = "rgb(200, 200, 200)";
                }

            }
            else if (this.interactStep == 19) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = "none";
                textBox.text1 = "You certainly didn't dissappoint, Herc...";
                textBox.text2 = "";
                textBox.speaker = "HiveWing Soldier";
                textBox.color = "rgb(200, 200, 200)";
            }
            else if (this.interactStep == 20) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = "none";
                textBox.text1 = "...";
                textBox.text2 = "";
                textBox.speaker = "HiveWing Soldier";
                textBox.color = "rgb(200, 200, 200)";
            }
            else if (this.interactStep == 21) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconHercSkeptical;
                textBox.text1 = "Uh...hello?";
                textBox.text2 = "";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 22) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = "none";
                textBox.text1 = "So...you're the unnaturally strong SilkWing";
                textBox.text2 = "causing trouble in Mantis Hive?";
                textBox.speaker = "HiveWing Soldier...?";
                textBox.color = "wasp";
            }
            else if (this.interactStep == 23) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconHercScared;
                textBox.text1 = "Wh...wha...? This is...then that";
                textBox.text2 = "means you're...!";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 24) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = "none";
                textBox.text1 = "Let's see how well you fare against all the";
                textBox.text2 = "HiveWings in the this hive...";
                textBox.speaker = "Queen Wasp";
                textBox.color = "wasp";
            }
            else if (this.interactStep == 25) {
                this.selfSwitchA = true;
                sfxDowned.play();
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconHercSkeptical;
                textBox.text1 = "...";
                textBox.text2 = "";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 26) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconHercSkeptical;
                missionText = "Escape the hive!";
                textBox.text1 = "Well...crud...";
                textBox.text2 = "";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 27) {
                mapObj.setCheckpoint();
                this.id = 22;
                interacting = false;
                inCutscene = false;
                interactDebounce = 10;
                this.interactStep = 0;
            }

        }
        //Median Guard Defeated
        else if (this.id == 22) {
            if (this.interactStep == 0) {
                interacting = true;
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = faceIconHercNeutral;
                textBox.text1 = "I should probably get going...";
                textBox.text2 = "";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 1) {
                interacting = false;
                interactDebounce = 10;
                this.interactStep = 0;
            }

        }
        //Hercules House Sign
        else if (this.id == 23) {
            if (this.interactStep == 0) {
                interacting = true;
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = "none";
                textBox.text1 = "Hercules";
                textBox.text2 = "";
                textBox.speaker = "Sign";
                textBox.color = "rgb(200, 200, 200)";
            }
            else if (this.interactStep == 1) {
                interacting = false;
                interactDebounce = 10;
                this.interactStep = 0;
            }

        }
        //Mantid House Sign
        else if (this.id == 24) {
            if (this.interactStep == 0) {
                interacting = true;
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = "none";
                textBox.text1 = "Mantid";
                textBox.text2 = "";
                textBox.speaker = "Sign";
                textBox.color = "rgb(200, 200, 200)";
            }
            else if (this.interactStep == 1) {
                interacting = false;
                interactDebounce = 10;
                this.interactStep = 0;
            }

        }
        //Abandoned House Sign
        else if (this.id == 25) {
            if (this.interactStep == 0) {
                interacting = true;
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = "none";
                textBox.text1 = "Vacant";
                textBox.text2 = "";
                textBox.speaker = "Sign";
                textBox.color = "rgb(200, 200, 200)";
            }
            else if (this.interactStep == 1) {
                interacting = false;
                interactDebounce = 10;
                this.interactStep = 0;
            }

        }
        //Median Sign
        else if (this.id == 26) {
            if (this.interactStep == 0) {
                interacting = true;
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = "none";
                textBox.text1 = "The Median";
                textBox.text2 = "Remember your pass!";
                textBox.speaker = "Sign";
                textBox.color = "rgb(200, 200, 200)";
            }
            else if (this.interactStep == 1) {
                interacting = false;
                interactDebounce = 10;
                this.interactStep = 0;
            }

        }
        //Propoganda Sign "Watching"
        else if (this.id == 27) {
            if (this.interactStep == 0) {
                interacting = true;
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = "none";
                textBox.text1 = "Remember, Queen Wasp is always";
                textBox.text2 = "watching!";
                textBox.speaker = "Sign";
                textBox.color = "rgb(200, 200, 200)";
            }
            else if (this.interactStep == 1) {
                interacting = false;
                interactDebounce = 10;
                this.interactStep = 0;
            }

        }
        //"I swear I saw it!" Bewildered SilkWing B (Outer Webs Center) 
        //"Sure you did." Skeptical SilkWing Y (Outer Webs Center)
        else if ((this.id == 28) || (this.id == 29)) {
            if (this.interactStep == 0) {
                interacting = true;
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = "none";
                textBox.text1 = "And then I saw a big metal ball fly out of it!";
                textBox.text2 = "It flew off before I could get a better look";
                textBox.speaker = "Bewildered SilkWing";
                textBox.color = "rgb(150, 150, 225)";
            }
            else if (this.interactStep == 1) {
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = "none";
                textBox.text1 = "at it though!";
                textBox.text2 = "";
                textBox.speaker = "Bewildered SilkWing";
                textBox.color = "rgb(150, 150, 225)";
            }
            else if (this.interactStep == 2) {
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = "none";
                textBox.text1 = "A big flying...metal ball?";
                textBox.text2 = "";
                textBox.speaker = "Skeptical SilkWing";
                textBox.color = "rgb(225, 255, 100)";
            }
            else if (this.interactStep == 3) {
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = "none";
                textBox.text1 = "Yeah! It was terrifying, I tell you!";
                textBox.text2 = "";
                textBox.speaker = "Bewildered SilkWing";
                textBox.color = "rgb(150, 150, 225)";
            }
            else if (this.interactStep == 4) {
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = "none";
                textBox.text1 = "Maybe you should ease off the beetle juice";
                textBox.text2 = "pal.";
                textBox.speaker = "Skeptical SilkWing";
                textBox.color = "rgb(225, 255, 100)";
            }
            else if (this.interactStep == 5) {
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = "none";
                textBox.text1 = "I swear I saw it! Honest!";
                textBox.text2 = "";
                textBox.speaker = "Bewildered SilkWing";
                textBox.color = "rgb(150, 150, 225)";
            }
            else if (this.interactStep == 6) {
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = "none";
                textBox.text1 = "Sure you did.";
                textBox.text2 = "";
                textBox.speaker = "Skeptical SilkWing";
                textBox.color = "rgb(225, 255, 100)";
            }
            else if (this.interactStep == 7) {
                interacting = false;
                interactDebounce = 10;
                this.interactStep = 0;
            }

        }
        //Stairwell Top Sign
        else if (this.id == 30) {
            if (this.interactStep == 0) {
                interacting = true;
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = "none";
                textBox.text1 = "Market";
                textBox.text2 = "<-----";
                textBox.speaker = "Sign";
                textBox.color = "rgb(200, 200, 200)";
            }
            else if (this.interactStep == 1) {
                interacting = false;
                interactDebounce = 10;
                this.interactStep = 0;
            }

        }
        //Coming Soon Sign
        else if (this.id == 31) {
            if (this.interactStep == 0) {
                interacting = true;
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = "none";
                textBox.text1 = "Part 2 coming soon!";
                textBox.text2 = "";
                textBox.speaker = "Sign";
                textBox.color = "rgb(200, 200, 200)";
            }
            else if (this.interactStep == 1) {
                interacting = false;
                interactDebounce = 10;
                this.interactStep = 0;
            }

        }
        //Rhino Battle 1
        else if (this.id == 32) {
            if (this.interactStep == 0) {
                interacting = true;
                interactDebounce = 10;
                fadeObj.fadeOut(30, 0, 255, 255, 255, "transfer");
                player.moveDebounce = 0;
                player.moveDirection = "none";
                mapObj.transferDirection = "point";
                mapObj.xTransfer = pos(5);
                mapObj.yTransfer = pos(5);
                mapObj.transferToArea = "Outer Webs East";
                mapObj.inRoomTransfer = true;
                mapObj.transferPlayerDirection = "up";
                this.interactStep += 1;
                if (getInteract(33) != "none") {
                    getInteract(33).dead = true;
                }

                if (this.selfSwitchA == true) {
                    mapObj.currentAreaInteracts.push(new Interact(pos(5), pos(4), "down", 33));
                    textBox.icon = faceIconHercAngery;
                    textBox.text1 = "Alright, here we go again!";
                    textBox.text2 = "";
                    textBox.speaker = "Hercules";
                    textBox.color = "rgb(255, 252, 219)";
                }
                else {
                    mapObj.currentAreaInteracts.push(new Interact(pos(5), pos(-1), "down", 33));
                    textBox.icon = faceIconHercNeutral;
                    textBox.text1 = "Alright Hercules, this is it.";
                    textBox.text2 = "";
                    textBox.speaker = "Hercules";
                    textBox.color = "rgb(255, 252, 219)";
                }

            }
            else if (this.interactStep == 1) {
                if (this.selfSwitchA == true) {
                    interactDebounce = 10;
                    this.interactStep = 25;
                    textBox.icon = faceIconRhinoNeutral;
                    textBox.text1 = "Back for more are you? Very well,";
                    textBox.text2 = "en guard!";
                    textBox.speaker = "General Rhino";
                    textBox.color = "rgb(228, 172, 164)";
                }
                else {
                    interactDebounce = 10;
                    this.interactStep += 1;
                    textBox.icon = faceIconHercNeutral;
                    textBox.text1 = "Just fly away and don't look back.";
                    textBox.text2 = "Hopefully this will all blow over.";
                    textBox.speaker = "Hercules";
                    textBox.color = "rgb(255, 252, 219)";
                }

            }
            else if (this.interactStep == 2) {
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = faceIconHercSad;
                textBox.text1 = "Eventually...";
                textBox.text2 = "";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 3) {
                interactDebounce = 10;
                this.interactStep += 1;
                player.changeDirection("down");
                textBox.icon = faceIconHercSad;
                textBox.text1 = "...";
                textBox.text2 = "";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 4) {
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = faceIconHercSad;
                textBox.text1 = "Look at this mess you've gotten";
                textBox.text2 = "yourself into.";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 5) {
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = faceIconHercSad;
                textBox.text1 = "Something was bound to happen";
                textBox.text2 = "eventually though.";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 6) {
                interactDebounce = 10;
                getInteract(33).moveDirection = "down";
            }
            else if (this.interactStep == 7) {
                interactDebounce = 11;
                getInteract(33).moveDirection = "down";
            }
            else if (this.interactStep == 8) {
                interactDebounce = 11;
                getInteract(33).moveDirection = "down";
            }
            else if (this.interactStep == 9) {
                interactDebounce = 11;
                getInteract(33).moveDirection = "down";
            }
            else if (this.interactStep == 10) {
                interactDebounce = 11;
                getInteract(33).moveDirection = "down";
            }
            else if (this.interactStep == 11) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconRhinoNeutral;
                textBox.text1 = "You are the one that is known as";
                textBox.text2 = "Hercules, correct?";
                textBox.speaker = "???";
                textBox.color = "rgb(228, 172, 164)";
            }
            else if (this.interactStep == 12) {
                this.interactStep += 1;
                interactDebounce = 10;
                player.changeDirection("up");
                textBox.icon = faceIconHercShocked;
                textBox.text1 = "Wah! Where did you come from?";
                textBox.text2 = "";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 13) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconRhinoNeutral;
                textBox.text1 = "I flew down from above, was that";
                textBox.text2 = "not obvious?";
                textBox.speaker = "???";
                textBox.color = "rgb(228, 172, 164)";
            }
            else if (this.interactStep == 14) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconHercSkeptical;
                textBox.text1 = "That's not what I...nevermind.";
                textBox.text2 = "";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 15) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconRhinoNeutral;
                textBox.text1 = "I have recieved word that you are";
                textBox.text2 = "disrupting the order of Mantis Hive.";
                textBox.speaker = "???";
                textBox.color = "rgb(228, 172, 164)";
            }
            else if (this.interactStep == 16) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconRhinoTalking;
                textBox.text1 = "As one of Queen Wasp's most";
                textBox.text2 = "respected generals, it is my solomn";
                textBox.speaker = "???";
                textBox.color = "rgb(228, 172, 164)";
            }
            else if (this.interactStep == 17) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconRhinoTalking;
                textBox.text1 = "duty to uphold the law and hault";
                textBox.text2 = "villains such as yourself.";
                textBox.speaker = "???";
                textBox.color = "rgb(228, 172, 164)";
            }
            else if (this.interactStep == 18) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconRhinoTalking;
                textBox.text1 = "For you see, order is paramount in ";
                textBox.text2 = "ensuring the operation of society.";
                textBox.speaker = "???";
                textBox.color = "rgb(228, 172, 164)";
            }
            else if (this.interactStep == 19) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconHercSkeptical;
                textBox.text1 = "Can we just skip to the part where";
                textBox.text2 = "you attack me?";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 20) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconRhinoAngery;
                textBox.text1 = "My word! Were you even listening";
                textBox.text2 = "to what I was saying! Do you truly";
                textBox.speaker = "???";
                textBox.color = "rgb(228, 172, 164)";
            }
            else if (this.interactStep == 21) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconRhinoAngery;
                textBox.text1 = "not care in the slightest for the";
                textBox.text2 = "wellbeing of your community?";
                textBox.speaker = "???";
                textBox.color = "rgb(228, 172, 164)";
            }
            else if (this.interactStep == 22) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconHercNeutral;
                textBox.text1 = "I mean, of course I do. But I'm in";
                textBox.text2 = "a bit of a rush here...";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 23) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconRhinoNeutral;
                textBox.text1 = "Very well then, we shall have it";
                textBox.text2 = "your way.";
                textBox.speaker = "???";
                textBox.color = "rgb(228, 172, 164)";
            }
            else if (this.interactStep == 24) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconRhinoAngery;
                textBox.text1 = "I, General Rhino, shall bring an end";
                textBox.text2 = "to your villanous deeds Hercules!";
                textBox.speaker = "General Rhino";
                textBox.color = "rgb(228, 172, 164)";
            }
            else if (this.interactStep == 25) {
                interactDebounce = 10;
                this.interactStep += 1;
                fadeObj.fadeOut(30, 0, 255, 255, 255, "battleStart");
                sfxBattleStart.play();
                battleObj = new Battle("General Rhino");
                battleScripted = true;
            }
            else if (this.interactStep == 26) {
                if (scriptedBattleLost == true) {
                    interactDebounce = 10;
                    this.interactStep += 1;
                    textBox.icon = faceIconHercHurt;
                    textBox.text1 = "(Ak! Gotta retreat for now!)";
                    textBox.speaker = "Hercules";
                    textBox.color = "rgb(255, 252, 219)";
                }
                else {
                    interactDebounce = 10;
                    this.interactStep += 1;
                    textBox.icon = faceIconRhinoHurt;
                    textBox.text1 = "You certainly pack quite a punch!";
                    textBox.text2 = "Were you not a criminal, I may very";
                    textBox.speaker = "General Rhino";
                    textBox.color = "rgb(228, 172, 164)";
                }

            }
            else if (this.interactStep == 27) {
                if (scriptedBattleLost == true) {
                    scriptedBattleLost = false;
                    fadeObj.fadeOut(30, 0, 255, 255, 255, "checkpointTransfer");
                    interacting = false;
                    interactDebounce = 10;
                    this.interactStep = 0;
                    this.selfSwitchA = true;
                    outerWebsBossSwitch = false;
                }
                else {
                    interactDebounce = 10;
                    this.interactStep += 1;
                    textBox.icon = faceIconRhinoHurt;
                    textBox.text1 = "well have been impressed!";
                    textBox.text2 = "";
                    textBox.speaker = "General Rhino";
                    textBox.color = "rgb(228, 172, 164)";
                }

            }
            else if (this.interactStep == 28) {
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = faceIconRhinoAngery;
                textBox.text1 = "But know this Hercules: your reign";
                textBox.text2 = "of terror shall come to an end!";
                textBox.speaker = "General Rhino";
                textBox.color = "rgb(228, 172, 164)";
            }
            else if (this.interactStep == 29) {
                interactDebounce = 10;
                this.interactStep += 1;
                textBox.icon = faceIconRhinoNeutral;
                textBox.text1 = "Whether it be by my talons, or";
                textBox.text2 = "those of some other loyal soldier.";
                textBox.speaker = "General Rhino";
                textBox.color = "rgb(228, 172, 164)";
            }
            else if (this.interactStep == 30) {
                interactDebounce = 10;
                getInteract(33).changeDirection("up");
                getInteract(33).moveDirection = "up";
            }
            else if (this.interactStep == 31) {
                interactDebounce = 11;
                getInteract(33).moveDirection = "up";
            }
            else if (this.interactStep == 32) {
                interactDebounce = 11;
                getInteract(33).moveDirection = "up";
            }
            else if (this.interactStep == 33) {
                interactDebounce = 11;
                getInteract(33).moveDirection = "up";
            }
            else if (this.interactStep == 34) {
                interactDebounce = 11;
                getInteract(33).moveDirection = "up";
            }
            else if (this.interactStep == 35) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconHercNeutral;
                textBox.text1 = "(Thank Clearsight that he's gone,";
                textBox.text2 = "though I'm sure that's not the last";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 36) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconHercNeutral;
                textBox.text1 = "I'll see of him...)";
                textBox.text2 = "";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 37) {
                interactDebounce = 10;
                mapObj.currentAreaInteracts.push(new Interact(pos(-1), pos(7), "right", 34));
                getInteract(34).moveDirection = "right";
            }
            else if (this.interactStep == 38) {
                interactDebounce = 11;
                getInteract(34).moveDirection = "right";
            }
            else if (this.interactStep == 39) {
                interactDebounce = 11;
                getInteract(34).moveDirection = "right";
            }
            else if (this.interactStep == 40) {
                interactDebounce = 11;
                getInteract(34).moveDirection = "right";
            }
            else if (this.interactStep == 41) {
                interactDebounce = 11;
                getInteract(34).changeDirection("up");
                getInteract(34).moveDirection = "up";
            }
            else if (this.interactStep == 42) {
                interactDebounce = 11;
                getInteract(34).changeDirection("right");
                getInteract(34).moveDirection = "right";
            }
            else if (this.interactStep == 43) {
                interactDebounce = 11;
                getInteract(34).changeDirection("up");
                getInteract(34).moveDirection = "up";
            }
            else if (this.interactStep == 44) {
                this.interactStep += 1;
                interactDebounce = 10;
                getInteract(34).changeDirection("right");
                getInteract(34).changeDirection("right");
                textBox.icon = faceIconMagentaAwestruck;
                textBox.text1 = "WOAH! That. Was. INCREDIBLE!";
                textBox.text2 = "";
                textBox.speaker = "Magenta";
                textBox.color = "rgb(247, 216, 255)";
            }
            else if (this.interactStep == 45) {
                this.interactStep += 1;
                interactDebounce = 10;
                player.changeDirection("left");
                textBox.icon = faceIconHercShocked;
                textBox.text1 = "EEP! Why does everyone keep";
                textBox.text2 = "sneaking up on me!";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 46) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconMagentaAwestruck;
                textBox.text1 = "I've never seen anyone face down";
                textBox.text2 = "a HiveWing general like that!";
                textBox.speaker = "Magenta";
                textBox.color = "rgb(247, 216, 255)";
            }
            else if (this.interactStep == 47) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconHercScared;
                textBox.text1 = "Y-Yeah, sure. Who are you?";
                textBox.text2 = "";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 48) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconMagentaNeutral;
                textBox.text1 = "Oh, sorry! Got a little ahead of";
                textBox.text2 = "myself there!";
                textBox.speaker = "Magenta";
                textBox.color = "rgb(247, 216, 255)";
            }
            else if (this.interactStep == 49) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconMagentaNeutral;
                textBox.text1 = "I'm Magenta!";
                textBox.text2 = "";
                textBox.speaker = "Magenta";
                textBox.color = "rgb(247, 216, 255)";
            }
            else if (this.interactStep == 50) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconHercScared;
                textBox.text1 = "(She's the SilkWing who went";
                textBox.text2 = "missing way back then!)";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 51) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconMagentaThinking;
                textBox.text1 = "What? No Silky, I'm not using a";
                textBox.text2 = "codename! He's clearly an ally!";
                textBox.speaker = "Magenta";
                textBox.color = "rgb(247, 216, 255)";
            }
            else if (this.interactStep == 52) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconHercScared;
                textBox.text1 = "Um, who's Silky?";
                textBox.text2 = "";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 53) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconMagentaNeutral;
                textBox.text1 = "Oh, he's one of my friends! He";
                textBox.text2 = "can be a bit overly cautious, but";
                textBox.speaker = "Magenta";
                textBox.color = "rgb(247, 216, 255)";
            }
            else if (this.interactStep == 54) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconMagentaNeutral;
                textBox.text1 = "he's a nice guy once you get to";
                textBox.text2 = "know him!";
                textBox.speaker = "Magenta";
                textBox.color = "rgb(247, 216, 255)";
            }
            else if (this.interactStep == 55) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconMagentaThinking;
                textBox.text1 = "Yes Silky, you are a nice guy!";
                textBox.text2 = "Quit being so hard on yourself!";
                textBox.speaker = "Magenta";
                textBox.color = "rgb(247, 216, 255)";
            }
            else if (this.interactStep == 56) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconHercSkeptical;
                textBox.text1 = "Uh...";
                textBox.text2 = "";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 57) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconMagentaAwestruck;
                textBox.text1 = "So anyway, you've GOT to join";
                textBox.text2 = "us!";
                textBox.speaker = "Magenta";
                textBox.color = "rgb(247, 216, 255)";
            }
            else if (this.interactStep == 58) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconHercSkeptical;
                textBox.text1 = "Us...who?";
                textBox.text2 = "";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 59) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconMagentaNeutral;
                textBox.text1 = "The Crysalis of course! Who else?";
                textBox.text2 = "";
                textBox.speaker = "Magenta";
                textBox.color = "rgb(247, 216, 255)";
            }
            else if (this.interactStep == 60) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconHercScared;
                textBox.text1 = "(Wait, aren't they that notorious";
                textBox.text2 = "revolutionary group!)";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 61) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconMagentaAngery;
                textBox.text1 = "For too long the HiveWings have";
                textBox.text2 = "oppressed us, and everyone";
                textBox.speaker = "Magenta";
                textBox.color = "rgb(247, 216, 255)";
            }
            else if (this.interactStep == 62) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconMagentaAngery;
                textBox.text1 = "always seems totally FINE with";
                textBox.text2 = "it!";
                textBox.speaker = "Magenta";
                textBox.color = "rgb(247, 216, 255)";
            }
            else if (this.interactStep == 63) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconMagentaAwestruck;
                textBox.text1 = "But seeing you fighting back, I";
                textBox.text2 = "could tell that you're just the guy";
                textBox.speaker = "Magenta";
                textBox.color = "rgb(247, 216, 255)";
            }
            else if (this.interactStep == 64) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconMagentaAwestruck;
                textBox.text1 = "we need!";
                textBox.text2 = "";
                textBox.speaker = "Magenta";
                textBox.color = "rgb(247, 216, 255)";
            }
            else if (this.interactStep == 65) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconMagentaPumped;
                textBox.text1 = "With your strength we can pound";
                textBox.text2 = "Queen Wasp into a pulp!";
                textBox.speaker = "Magenta";
                textBox.color = "rgb(247, 216, 255)";
            }
            else if (this.interactStep == 66) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconHercScared;
                textBox.text1 = "I-I'm sorry, but I don't think";
                textBox.text2 = "I'm the guy you're looking for!";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 67) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconMagentaNeutral;
                textBox.text1 = "Nonsense Hercules, you're a hero!";
                textBox.text2 = "Even Silky thinks so!";
                textBox.speaker = "Magenta";
                textBox.color = "rgb(247, 216, 255)";
            }
            else if (this.interactStep == 68) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconMagentaNeutral;
                textBox.text1 = "Come on, you'll be safe from the";
                textBox.text2 = "HiveWings at our secret base!";
                textBox.speaker = "Magenta";
                textBox.color = "rgb(247, 216, 255)";
            }
            else if (this.interactStep == 69) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconHercNeutral;
                textBox.text1 = "I...guess I could lay low there";
                textBox.text2 = "for the time being.";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 70) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconHercSkeptical;
                textBox.text1 = "(It's not like I have any better";
                textBox.text2 = "options...)";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 71) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconMagentaNeutral;
                textBox.text1 = "Great! You're going to love our...";
                textBox.text2 = "";
                textBox.speaker = "Magenta";
                textBox.color = "rgb(247, 216, 255)";
            }
            else if (this.interactStep == 72) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconMagentaThinking;
                textBox.text1 = "Wait...what's that Shells?";
                textBox.text2 = "";
                textBox.speaker = "Magenta";
                textBox.color = "rgb(247, 216, 255)";
            }
            else if (this.interactStep == 73) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconHercSkeptical;
                textBox.text1 = "(Shells?)";
                textBox.text2 = "";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 74) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconMagentaAwestruck;
                textBox.text1 = "Oh yeah! Great idea, if we go";
                textBox.text2 = "through the market, we'll be sure";
                textBox.speaker = "Magenta";
                textBox.color = "rgb(247, 216, 255)";
            }
            else if (this.interactStep == 75) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconMagentaAwestruck;
                textBox.text1 = "to shake the HiveWings from";
                textBox.text2 = "our tail!";
                textBox.speaker = "Magenta";
                textBox.color = "rgb(247, 216, 255)";
            }
            else if (this.interactStep == 76) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconHercNeutral;
                textBox.text1 = "Can't we just fly there?";
                textBox.text2 = "";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 77) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconMagentaNeutral;
                textBox.text1 = "We'd be WAY easier to spot in";
                textBox.text2 = "the air. PLUS we'd probably lead";
                textBox.speaker = "Magenta";
                textBox.color = "rgb(247, 216, 255)";
            }
            else if (this.interactStep == 78) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconMagentaNeutral;
                textBox.text1 = "the HiveWings right to our base!";
                textBox.text2 = "";
                textBox.speaker = "Magenta";
                textBox.color = "rgb(247, 216, 255)";
            }
            else if (this.interactStep == 79) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconMagentaNeutral;
                textBox.text1 = "The savannah grass should help";
                textBox.text2 = "conceal our movements!";
                textBox.speaker = "Magenta";
                textBox.color = "rgb(247, 216, 255)";
            }
            else if (this.interactStep == 80) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconHercNeutral;
                textBox.text1 = "I...guess that makes sense...";
                textBox.text2 = "";
                textBox.speaker = "Hercules";
                textBox.color = "rgb(255, 252, 219)";
            }
            else if (this.interactStep == 81) {
                this.interactStep += 1;
                interactDebounce = 10;
                textBox.icon = faceIconMagentaNeutral;
                textBox.text1 = "Come on! That Rhino guy could";
                textBox.text2 = "be back any second!";
                textBox.speaker = "Magenta";
                textBox.color = "rgb(247, 216, 255)";
            }
            else if (this.interactStep == 82) {
                interactDebounce = 10;
                getInteract(34).moveDirection = "right";
                missionText = "Head downstairs to the market!"
            }
            else if (this.interactStep == 83) {
                this.dead = true;
                getInteract(33).dead = true;
                getInteract(34).dead = true;
                interacting = false;
                inCutscene = false;
                interactDebounce = 10;
                this.interactStep = 0;
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


        //Passive Action Debounce Incrementer
        if (this.pActionDebounce > 0) {
            this.pActionDebounce -= 1;
        }

    }


    //Change Direction Function
    changeDirection(direction) {
        if (direction == "player") {
            if (playerSprite == playerSpriteU) {
                this.direction = "down";
            }
            else if (playerSprite == playerSpriteD) {
                this.direction = "up";
            }
            else if (playerSprite == playerSpriteL) {
                this.direction = "right";
            }
            else if (playerSprite == playerSpriteR) {
                this.direction = "left";
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


    //Move Function
    move(direction) {
        if ((interactDebounce != 0) && (direction != "none")) {
            if (direction == "up") {
                this.yPos -= pos(0.1);
            }
            else if (direction == "down") {
                this.yPos += pos(0.1);
            }
            else if (direction == "left") {
                this.xPos -= pos(0.1);
            }
            else if (direction == "right") {
                this.xPos += pos(0.1);
            }

        }
        else if ((interactDebounce == 0) && (direction != "none")) {
            this.moveDirection = "none";
            this.xPos = round(this.xPos);
            this.yPos = round(this.yPos);
            getInteract("continue").interactStep += 1;
            getInteract("continue").interact();
        }

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
            if ((this.fadeTimer == 0) && (this.mode == "transfer") && (mapObj.currentArea != mapObj.transferToArea)) {
                sfxTransfer.play();
            }

            if (this.fadeTimer < this.fadeTime) {
                if (this.mode == "battleStart") {
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
        if (((this.mode == "interact") || (this.mode == "startGame")) && (this.state == "interact faded")) {
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

    fadeAction() {
        if (this.mode == "transfer") {
            mapObj.currentArea = mapObj.transferToArea;
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

            //Display Area Name and Change BGM When Necessary
            if (mapObj.inRoomTransfer == false) {
                if ((mapObj.transferToArea == "Test Area 1") && (mapObj.transferDirection == "point")) {
                    areaNameBox.instantiate("Test Area");
                    mapObj.areaBiome = "Test Area";
                    mapObj.mapTheme.stop();
                    mapObj.mapTheme = titleTheme;
                    mapObj.mapTheme.setLoop(true);
                    mapObj.mapTheme.play();
                    mapObj.encounterArea = false;
                    mapObj.outside = true;
                }
                else if ((mapObj.transferToArea == "Hercules' House") && ((mapObj.transferDirection == "down") || (mapObj.transferDirection == "point"))) {
                    areaNameBox.instantiate("Hercules' House");
                }
                else if ((mapObj.transferToArea == "Mantid's House") && ((mapObj.transferDirection == "down") || (mapObj.transferDirection == "point"))) {
                    areaNameBox.instantiate("Mantid's House");
                }
                else if ((mapObj.transferToArea == "Inner Webs South") && ((mapObj.transferDirection == "up") || (mapObj.transferDirection == "point"))) {
                    areaNameBox.instantiate("Inner Webs");
                    mapObj.areaBiome = "Inner Webs";
                }
                else if ((mapObj.transferToArea == "Inner Webs West") && ((mapObj.transferDirection == "up") || (mapObj.transferDirection == "point"))) {
                    areaNameBox.instantiate("Inner Webs");
                    mapObj.areaBiome = "Inner Webs";
                }
                else if ((mapObj.transferToArea == "Inner Webs Checkpoint") && ((mapObj.transferDirection == "down") || (mapObj.transferDirection == "point"))) {
                    areaNameBox.instantiate("Inner Webs");
                    mapObj.mapTheme.stop();
                    mapObj.mapTheme = iWebsTheme1;
                    mapObj.mapTheme.setLoop(true);
                    mapObj.mapTheme.play();
                }
                else if ((mapObj.transferToArea == "The Median")) {
                    areaNameBox.instantiate("The Median");
                    mapObj.mapTheme.stop();
                    mapObj.encounterArea = false;
                }
                else if ((mapObj.transferToArea == "Inner Webs East") && ((mapObj.transferDirection == "up") || (mapObj.transferDirection == "point"))) {
                    areaNameBox.instantiate("Inner Webs");
                    mapObj.encounterArea = true;
                    mapObj.mapTheme.stop();
                    mapObj.mapTheme = iWebsTheme2;
                    mapObj.mapTheme.setLoop(true);
                    mapObj.mapTheme.play();
                }
                else if ((mapObj.transferToArea == "Inner Webs Center") && ((mapObj.transferDirection == "right") || (mapObj.transferDirection == "point"))) {
                    areaNameBox.instantiate("Inner Webs");
                    mapObj.encounterArea = true;
                }
                else if ((mapObj.transferToArea == "Abandoned House") && ((mapObj.transferDirection == "left") || (mapObj.transferDirection == "point"))) {
                    areaNameBox.instantiate("Abandoned House");
                    mapObj.encounterArea = false;
                }
                else if ((mapObj.transferToArea == "Outer Webs West") && ((mapObj.transferDirection == "up") || (mapObj.transferDirection == "point"))) {
                    areaNameBox.instantiate("Outer Webs");
                    mapBG = outerWebsWestBG;
                    mapObj.areaBiome = "Outer Webs";
                    mapObj.mapTheme.stop();
                    mapObj.mapTheme = oWebsTheme;
                    mapObj.mapTheme.setLoop(true);
                    mapObj.mapTheme.play();
                    mapObj.outside = true;
                }
                else if ((mapObj.transferToArea == "Inner Webs North") && ((mapObj.transferDirection == "down") || (mapObj.transferDirection == "point"))) {
                    areaNameBox.instantiate("Inner Webs");
                    mapBG = silkFloorBG;
                    mapObj.areaBiome = "Inner Webs";
                    mapObj.mapTheme.stop();
                    mapObj.mapTheme = iWebsTheme2;
                    mapObj.mapTheme.setLoop(true);
                    mapObj.mapTheme.play();
                    mapObj.outside = false;
                }
                else if ((mapObj.transferToArea == "Outer Webs East") && ((mapObj.transferDirection == "right") || (mapObj.transferDirection == "point"))) {
                    mapObj.encounterArea = false;
                }
                else if ((mapObj.transferToArea == "Outer Webs Center") && ((mapObj.transferDirection == "left") || (mapObj.transferDirection == "point"))) {
                    mapObj.encounterArea = true;
                }
                else if ((mapObj.transferToArea == "Stairwell Top") && ((mapObj.transferDirection == "left") || (mapObj.transferDirection == "point"))) {
                    areaNameBox.instantiate("Stairwell");
                    mapObj.mapTheme.stop();
                    mapObj.outside = false;
                }
                else if ((mapObj.transferToArea == "Outer Webs South") && ((mapObj.transferDirection == "right") || (mapObj.transferDirection == "point"))) {
                    areaNameBox.instantiate("Outer Webs");
                    mapObj.mapTheme.stop();
                    mapObj.mapTheme = oWebsTheme;
                    mapObj.mapTheme.setLoop(true);
                    mapObj.mapTheme.play();
                    mapObj.outside = true;
                }

            }
            else {
                mapObj.inRoomTransfer = false;
            }

            mapObj.setMapObjects();
            gameMode = "inMap";
            this.fadeIn();
        }
        else if (this.mode == "checkpointTransfer") {
            mapObj.transferToCheckpoint();
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
            if (battleObj.enemy == "General Rhino") {
                battleTheme = rhinoTheme;
            }
            else {
                battleTheme = mainBattleTheme;
            }

            battleTheme.play();
            battleObj.setup();
            this.fadeIn();
        }
        else if (this.mode == "battleEnd") {
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
            this.fadeIn();
        }
        else if (this.mode == "interact") {
            this.state = "interact faded";
            getInteract("continue").interact();
        }

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
    constructor(text1, text2, color, speaker, icon) {
        this.text1 = text1;
        this.text2 = text2;
        this.color = color;
        this.speaker = speaker;
        this.icon = icon;
    }

    draw() {
        noStroke();
        textSize(pos(0.5));
        textAlign(LEFT, BOTTOM);
        if (textBox.color == "wasp") {
            fill(0);
            stroke(255, 238, 0);
            strokeWeight(pos(0.04));
        }
        else {
            fill(this.color);
        }

        if (this.speaker != "") {
            if (this.icon == "TBA") {
                text(this.speaker + ":", pos(0.1), pos(10.5));
                text(this.text1, pos(0.1), pos(11));
                text(this.text2, pos(0.1), pos(11.5));
                rect(pos(8), pos(10), pos(2), pos(2));
            }
            else if (this.icon == "none") {
                text(this.speaker + ":", pos(0.1), pos(10.5));
                text(this.text1, pos(0.1), pos(11));
                text(this.text2, pos(0.1), pos(11.5));
            }
            else {
                text(this.speaker + ":", pos(0.1), pos(10.5));
                text(this.text1, pos(0.1), pos(11));
                text(this.text2, pos(0.1), pos(11.5));
                image(this.icon, pos(8), pos(10));
            }
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


//Stat Vars
let playerMaxHealth = 100;
let playerHealth = playerMaxHealth;
let playerAtkPower = 10;
let playerXP = 0;
let playerLevel = 1;
let xpToLevelUp = 20;
let missionText = "Escape through the Median!";


//Testing Vars
let testingWaypoint = "Outer Webs Center";
let testingWaypointX = pos(8);
let testingWaypointY = pos(7);
let godMode = false;
let doRandomEncounters = true;
let cinematicMode = false;
let testingKeys = false;


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
let mapObj = new Map();
let battleObj;
let player = new Player(pos(5), pos(7));
let fadeObj = new Fade();
let textBox = new TextBox("Good morning starshine!", "The Earth says hello!", "rgb(100, 200, 0)", "DonHp");
let areaNameBox = new AreaNameBox();
let cpSaved = new CPSaved();


//Cutscene Vars/Switches
let inCutscene = false;

let introSceneSwitch = false;
let passGetSwitch = false;
let abandonedHouseIntroSwitch = false;
let medianBossSwitch = false;
let outerWebsBossSwitch = false;


//Title Screen Vars
let titleHercY = pos(7);
let titleMagY = pos(7);
let titleCycle = 0;


//Interact Vars
let interacting = false;
let interactDebounce = 0;


//Map Object Arrays
let testArea1Walls = [];
let testArea2Walls = [];
let herculesHouseWalls = [];
let innerWebsSouthWalls = [];
let innerWebsWestWalls = [];
let mantidHouseWalls = [];
let innerWebsCheckpointWalls = [];
let theMedianWalls = [];
let innerWebsEastWalls = [];
let innerWebsCenterWalls = [];
let abandonedHouseWalls = [];
let innerWebsNorthWalls = [];
let outerWebsWestWalls = [];
let outerWebsCenterWalls = [];
let outerWebsEastWalls = [];
let outerWebsSouthWalls = [];
let stairwellTopWalls = [];

let testArea2Encounters = [];

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


//Title Sprite Vars
let titleScreenBG;
let hercTitleSprite;
let magTitleSprite;


//Main Map Image Vars
let mapBG;
let playerSprite;


//Map BG Vars
let silkFloorBG;
let outerWebsWestBG;
let outerWebsCenterBG;
let outerWebsEastBG;
let outerWebsSouthBG;
let stairwellTopBG;


//Character Sprite Vars
let playerSpriteD;
let playerSpriteU;
let playerSpriteL;
let playerSpriteR;

let mantidSpriteD;
let mantidSpriteU;
let mantidSpriteL;
let mantidSpriteR;

let rhinoSpriteD;
let rhinoSpriteU;
let rhinoSpriteL;
let rhinoSpriteR;

let magentaSpriteD;
let magentaSpriteU;
let magentaSpriteL;
let magentaSpriteR;

let silkwingBlueSpriteD;
let silkwingBlueSpriteU;
let silkwingBlueSpriteL;
let silkwingBlueSpriteR;

let silkwingYellowSpriteD;
let silkwingYellowSpriteU;
let silkwingYellowSpriteL;
let silkwingYellowSpriteR;

let silkwingPurpleSpriteD;
let silkwingPurpleSpriteU;
let silkwingPurpleSpriteL;
let silkwingPurpleSpriteR;

let hiveSoldierRedSpriteD;
let hiveSoldierRedSpriteU;
let hiveSoldierRedSpriteL;
let hiveSoldierRedSpriteR;
let hiveSoldierRedSpriteDowned;

let hiveSoldierBlackSpriteD;
let hiveSoldierBlackSpriteU;
let hiveSoldierBlackSpriteL;
let hiveSoldierBlackSpriteR;
let hiveSoldierBlackSpriteDowned;

let hiveSoldierYellowSpriteD;
let hiveSoldierYellowSpriteU;
let hiveSoldierYellowSpriteL;
let hiveSoldierYellowSpriteR;


//Map Tile Vars
let bedSprite;
let silkTableSprite;
let silkChestSprite;
let stoneTableSprite;
let stoneLampSprite;
let rugSkySprite;
let rugLeafSprite;
let rugNightSprite;
let potCrackedSprite;
let potDecoratedSprite;
let signSprite;
let signPostersSprite;
let notesSprite;

let testWallSprite;
let testTreeSprite;
let silkWallSprite;
let silkPillarSprite;
let silkPillarBottomSprite;
let silkPillarTopSprite;

let testEncounterSprite;


//Face Icon Sprite Vars
let faceIconHercNeutral;
let faceIconHercScared;
let faceIconHercSkeptical;
let faceIconHercHurt;
let faceIconHercAngery;
let faceIconHercSad;
let faceIconHercShocked;

let faceIconMantidNeutral;
let faceIconMantidWorried;

let faceIconRhinoNeutral;
let faceIconRhinoTalking;
let faceIconRhinoAngery;
let faceIconRhinoHurt;

let faceIconMagentaNeutral;
let faceIconMagentaThinking;
let faceIconMagentaAwestruck;
let faceIconMagentaAngery;
let faceIconMagentaPumped;


//Scripted Battle Vars
let battleScripted = false;
let scriptedBattleLost = false;


//Main Battle Image Vars
let enemyImgNor;
let enemyImgDmg;
let enemyImgAtk;
let battleBG;


//Battle Sprite Vars
let slimeNor;
let slimeDmg;
let slimeAtk;

let chompNor;
let chompDmg;
let chompAtk;

let rhinoBattleNor;
let rhinoBattleDmg;
let rhinoBattleAtk;

let soldierRedBattleNor;
let soldierRedBattleDmg;
let soldierRedBattleAtk;

let soldierYellowBattleNor;
let soldierYellowBattleDmg;
let soldierYellowBattleAtk;

let soldierBlackBattleNor;
let soldierBlackBattleDmg;
let soldierBlackBattleAtk;

let defendIcon;


//Battle Background Image Vars
let innerWebsBattleBG;
let outerWebsBallleBG;


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


//-------------------------MAIN FUNCTIONS-------------------------


//Preload
function preload() {
    //Load Images
    titleScreenBG = loadImage('SPRITES/BACKGROUNDS/BG_Title_Screen.png');
    hercTitleSprite = loadImage('SPRITES/Sprite_Hercules_Title.png');
    magTitleSprite = loadImage('SPRITES/Sprite_Magenta_Title.png');


    slimeNor = loadImage('SPRITES/BATTLE_SPRITES/Sprite_Slime_Normal_128x128.png');
    slimeDmg = loadImage('SPRITES/BATTLE_SPRITES/Sprite_Slime_Damage_128x128.png');
    slimeAtk = loadImage('SPRITES/BATTLE_SPRITES/Sprite_Slime_Attack_128x128.png');

    chompNor = loadImage('SPRITES/BATTLE_SPRITES/Sprite_Lil_Chomper_Normal_128x128.png');
    chompDmg = loadImage('SPRITES/BATTLE_SPRITES/Sprite_Lil_Chomper_Damage_128x128.png');
    chompAtk = loadImage('SPRITES/BATTLE_SPRITES/Sprite_Lil_Chomper_Attack_128x128.png');

    rhinoBattleNor = loadImage('SPRITES/BATTLE_SPRITES/Sprite_Rhino_Battle_Nor_128x128.png');
    rhinoBattleDmg = loadImage('SPRITES/BATTLE_SPRITES/Sprite_Rhino_Battle_Dmg_128x128.png');
    rhinoBattleAtk = loadImage('SPRITES/BATTLE_SPRITES/Sprite_Rhino_Battle_Atk_128x128.png');

    soldierRedBattleNor = loadImage('SPRITES/BATTLE_SPRITES/Sprite_HiveWing_Soldier_Red_Battle_Nor_128x128.png');
    soldierRedBattleDmg = loadImage('SPRITES/BATTLE_SPRITES/Sprite_HiveWing_Soldier_Red_Battle_Dmg_128x128.png');
    soldierRedBattleAtk = loadImage('SPRITES/BATTLE_SPRITES/Sprite_HiveWing_Soldier_Red_Battle_Atk_128x128.png');

    soldierYellowBattleNor = loadImage('SPRITES/BATTLE_SPRITES/Sprite_HiveWing_Soldier_Yellow_Battle_Nor_128x128.png');
    soldierYellowBattleDmg = loadImage('SPRITES/BATTLE_SPRITES/Sprite_HiveWing_Soldier_Yellow_Battle_Dmg_128x128.png');
    soldierYellowBattleAtk = loadImage('SPRITES/BATTLE_SPRITES/Sprite_HiveWing_Soldier_Yellow_Battle_Atk_128x128.png');

    soldierBlackBattleNor = loadImage('SPRITES/BATTLE_SPRITES/Sprite_HiveWing_Soldier_Black_Battle_Nor_128x128.png');
    soldierBlackBattleDmg = loadImage('SPRITES/BATTLE_SPRITES/Sprite_HiveWing_Soldier_Black_Battle_Dmg_128x128.png');
    soldierBlackBattleAtk = loadImage('SPRITES/BATTLE_SPRITES/Sprite_HiveWing_Soldier_Black_Battle_Atk_128x128.png');

    defendIcon = loadImage('SPRITES/BATTLE_SPRITES/Sprite_Defend_Icon_64x64.png');


    innerWebsBattleBG = loadImage('SPRITES/BACKGROUNDS/BG_Inner_Webs_Battleback_640x640.png');
    outerWebsBattleBG = loadImage('SPRITES/BACKGROUNDS/BG_Outer_Webs_Battleback_640x640.png');

    silkFloorBG = loadImage('SPRITES/BACKGROUNDS/BG_Silk_Floor_640x640.png');
    outerWebsWestBG = loadImage('SPRITES/BACKGROUNDS/BG_Outer_Webs_West_640x640.png');
    outerWebsCenterBG = loadImage('SPRITES/BACKGROUNDS/BG_Outer_Webs_Center_640x640.png');
    outerWebsEastBG = loadImage('SPRITES/BACKGROUNDS/BG_Outer_Webs_East_640x640.png');
    outerWebsSouthBG = loadImage('SPRITES/BACKGROUNDS/BG_Outer_Webs_South_640x640.png');
    stairwellTopBG = loadImage('SPRITES/BACKGROUNDS/BG_Stairwell_Top_640x640.png');


    playerSpriteD = loadImage('SPRITES/CHAR_SPRITES/Sprite_Hercules_Down_64x64.png');
    playerSpriteU = loadImage('SPRITES/CHAR_SPRITES/Sprite_Hercules_Up_64x64.png');
    playerSpriteL = loadImage('SPRITES/CHAR_SPRITES/Sprite_Hercules_Left_64x64.png');
    playerSpriteR = loadImage('SPRITES/CHAR_SPRITES/Sprite_Hercules_Right_64x64.png');

    mantidSpriteD = loadImage('SPRITES/CHAR_SPRITES/Sprite_Mantid_Down_64x64.png');
    mantidSpriteU = loadImage('SPRITES/CHAR_SPRITES/Sprite_Mantid_Up_64x64.png');
    mantidSpriteL = loadImage('SPRITES/CHAR_SPRITES/Sprite_Mantid_Left_64x64.png');
    mantidSpriteR = loadImage('SPRITES/CHAR_SPRITES/Sprite_Mantid_Right_64x64.png');

    rhinoSpriteD = loadImage('SPRITES/CHAR_SPRITES/Sprite_Rhino_Down_64x64.png');
    rhinoSpriteU = loadImage('SPRITES/CHAR_SPRITES/Sprite_Rhino_Up_64x64.png');
    rhinoSpriteL = loadImage('SPRITES/CHAR_SPRITES/Sprite_Rhino_Left_64x64.png');
    rhinoSpriteR = loadImage('SPRITES/CHAR_SPRITES/Sprite_Rhino_Right_64x64.png');

    magentaSpriteD = loadImage('SPRITES/CHAR_SPRITES/Sprite_Magenta_Down_64x64.png');
    magentaSpriteU = loadImage('SPRITES/CHAR_SPRITES/Sprite_Magenta_Up_64x64.png');
    magentaSpriteL = loadImage('SPRITES/CHAR_SPRITES/Sprite_Magenta_Left_64x64.png');
    magentaSpriteR = loadImage('SPRITES/CHAR_SPRITES/Sprite_Magenta_Right_64x64.png');

    silkwingBlueSpriteD = loadImage('SPRITES/CHAR_SPRITES/Sprite_SilkWing_Blue_Down_64x64.png');
    silkwingBlueSpriteU = loadImage('SPRITES/CHAR_SPRITES/Sprite_SilkWing_Blue_Up_64x64.png');
    silkwingBlueSpriteL = loadImage('SPRITES/CHAR_SPRITES/Sprite_SilkWing_Blue_Left_64x64.png');
    silkwingBlueSpriteR = loadImage('SPRITES/CHAR_SPRITES/Sprite_SilkWing_Blue_Right_64x64.png');

    silkwingYellowSpriteD = loadImage('SPRITES/CHAR_SPRITES/Sprite_SilkWing_Yellow_Down_64x64.png');
    silkwingYellowSpriteU = loadImage('SPRITES/CHAR_SPRITES/Sprite_SilkWing_Yellow_Up_64x64.png');
    silkwingYellowSpriteL = loadImage('SPRITES/CHAR_SPRITES/Sprite_SilkWing_Yellow_Left_64x64.png');
    silkwingYellowSpriteR = loadImage('SPRITES/CHAR_SPRITES/Sprite_SilkWing_Yellow_Right_64x64.png');

    silkwingPurpleSpriteD = loadImage('SPRITES/CHAR_SPRITES/Sprite_SilkWing_Purple_Down_64x64.png');
    silkwingPurpleSpriteU = loadImage('SPRITES/CHAR_SPRITES/Sprite_SilkWing_Purple_Up_64x64.png');
    silkwingPurpleSpriteL = loadImage('SPRITES/CHAR_SPRITES/Sprite_SilkWing_Purple_Left_64x64.png');
    silkwingPurpleSpriteR = loadImage('SPRITES/CHAR_SPRITES/Sprite_SilkWing_Purple_Right_64x64.png');

    hiveSoldierRedSpriteD = loadImage('SPRITES/CHAR_SPRITES/Sprite_HiveWing_Soldier_Red_Down_64x64.png');
    hiveSoldierRedSpriteU = loadImage('SPRITES/CHAR_SPRITES/Sprite_HiveWing_Soldier_Red_Up_64x64.png');
    hiveSoldierRedSpriteL = loadImage('SPRITES/CHAR_SPRITES/Sprite_HiveWing_Soldier_Red_Left_64x64.png');
    hiveSoldierRedSpriteR = loadImage('SPRITES/CHAR_SPRITES/Sprite_HiveWing_Soldier_Red_Right_64x64.png');
    hiveSoldierRedSpriteDowned = loadImage('SPRITES/CHAR_SPRITES/Sprite_HiveWing_Soldier_Red_Downed_64x64.png');

    hiveSoldierBlackSpriteD = loadImage('SPRITES/CHAR_SPRITES/Sprite_HiveWing_Soldier_Black_Down_64x64.png');
    hiveSoldierBlackSpriteU = loadImage('SPRITES/CHAR_SPRITES/Sprite_HiveWing_Soldier_Black_Up_64x64.png');
    hiveSoldierBlackSpriteL = loadImage('SPRITES/CHAR_SPRITES/Sprite_HiveWing_Soldier_Black_Left_64x64.png');
    hiveSoldierBlackSpriteR = loadImage('SPRITES/CHAR_SPRITES/Sprite_HiveWing_Soldier_Black_Right_64x64.png');
    hiveSoldierBlackSpriteDowned = loadImage('SPRITES/CHAR_SPRITES/Sprite_HiveWing_Soldier_Black_Downed_64x64.png');

    hiveSoldierYellowSpriteD = loadImage('SPRITES/CHAR_SPRITES/Sprite_HiveWing_Soldier_Yellow_Down_64x64.png');
    hiveSoldierYellowSpriteU = loadImage('SPRITES/CHAR_SPRITES/Sprite_HiveWing_Soldier_Yellow_Up_64x64.png');
    hiveSoldierYellowSpriteL = loadImage('SPRITES/CHAR_SPRITES/Sprite_HiveWing_Soldier_Yellow_Left_64x64.png');
    hiveSoldierYellowSpriteR = loadImage('SPRITES/CHAR_SPRITES/Sprite_HiveWing_Soldier_Yellow_Right_64x64.png');


    bedSprite = loadImage('SPRITES/TILE_SPRITES/Sprite_Bed_64x64.png');
    silkTableSprite = loadImage('SPRITES/TILE_SPRITES/Sprite_Silk_Table_64x64.png');
    silkChestSprite = loadImage('SPRITES/TILE_SPRITES/Sprite_Silk_Chest_64x64.png');
    stoneTableSprite = loadImage('SPRITES/TILE_SPRITES/Sprite_Stone_Table_64x64.png');
    stoneLampSprite = loadImage('SPRITES/TILE_SPRITES/Sprite_Stone_Lamp_64x64.png');
    rugSkySprite = loadImage('SPRITES/TILE_SPRITES/Sprite_Rug_Sky_64x64.png');
    rugLeafSprite = loadImage('SPRITES/TILE_SPRITES/Sprite_Rug_Leaf_64x64.png');
    rugNightSprite = loadImage('SPRITES/TILE_SPRITES/Sprite_Rug_Night_64x64.png');
    potCrackedSprite = loadImage('SPRITES/TILE_SPRITES/Sprite_Pot_Cracked_64x64.png');
    potDecoratedSprite = loadImage('SPRITES/TILE_SPRITES/Sprite_Pot_Decorated_64x64.png');
    signSprite = loadImage('SPRITES/TILE_SPRITES/Sprite_Stone_Sign_64x64.png');
    signPostersSprite = loadImage('SPRITES/TILE_SPRITES/Sprite_Stone_Sign_Posters_64x64.png');
    notesSprite = loadImage('SPRITES/TILE_SPRITES/Sprite_Notes_64x64.png');

    testWallSprite = loadImage('SPRITES/TILE_SPRITES/Sprite_Test_Wall_32x32.png');
    testTreeSprite = loadImage('SPRITES/TILE_SPRITES/Sprite_Test_Tree_32x32.png');
    silkWallSprite = loadImage('SPRITES/TILE_SPRITES/Sprite_Silk_Wall_64x64.png');
    silkPillarSprite = loadImage('SPRITES/TILE_SPRITES/Sprite_Silk_Pillar_64x64.png');
    silkPillarBottomSprite = loadImage('SPRITES/TILE_SPRITES/Sprite_Silk_Pillar_Bottom_64x64.png');
    silkPillarTopSprite = loadImage('SPRITES/TILE_SPRITES/Sprite_Silk_Pillar_Top_64x64.png');

    testEncounterSprite = loadImage('SPRITES/TILE_SPRITES/Sprite_Test_Encounter_32x32.png');


    faceIconHercNeutral = loadImage('SPRITES/FACE_ICONS/FI_Herc_Neutral.png');
    faceIconHercScared = loadImage('SPRITES/FACE_ICONS/FI_Herc_Scared.png');
    faceIconHercSkeptical = loadImage('SPRITES/FACE_ICONS/FI_Herc_Skeptical.png');
    faceIconHercHurt = loadImage('SPRITES/FACE_ICONS/FI_Herc_Hurt.png');
    faceIconHercAngery = loadImage('SPRITES/FACE_ICONS/FI_Herc_Angery.png');
    faceIconHercShocked = loadImage('SPRITES/FACE_ICONS/FI_Herc_Shocked.png');
    faceIconHercSad = loadImage('SPRITES/FACE_ICONS/FI_Herc_Sad.png');

    faceIconMantidNeutral = loadImage('SPRITES/FACE_ICONS/FI_Mantid_Neutral.png');
    faceIconMantidWorried = loadImage('SPRITES/FACE_ICONS/FI_Mantid_Worried.png');

    faceIconRhinoNeutral = loadImage('SPRITES/FACE_ICONS/FI_Rhino_Neutral.png');
    faceIconRhinoTalking = loadImage('SPRITES/FACE_ICONS/FI_Rhino_Talking.png');
    faceIconRhinoAngery = loadImage('SPRITES/FACE_ICONS/FI_Rhino_Angery.png');
    faceIconRhinoHurt = loadImage('SPRITES/FACE_ICONS/FI_Rhino_Hurt.png');

    faceIconMagentaNeutral = loadImage('SPRITES/FACE_ICONS/FI_Magenta_Neutral.png');
    faceIconMagentaThinking = loadImage('SPRITES/FACE_ICONS/FI_Magenta_Thinking.png');
    faceIconMagentaAwestruck = loadImage('SPRITES/FACE_ICONS/FI_Magenta_Awestruck.png');
    faceIconMagentaAngery = loadImage('SPRITES/FACE_ICONS/FI_Magenta_Angery.png');
    faceIconMagentaPumped = loadImage('SPRITES/FACE_ICONS/FI_Magenta_Pumped.png');


    //Load Sounds
    titleTheme = loadSound('SOUNDS/Music_Title_Theme.ogg');
    mainBattleTheme = loadSound('SOUNDS/Music_Ready!_Set!_Battle!.ogg');
    rhinoTheme = loadSound('SOUNDS/Music_General_Rhino.ogg');
    iWebsTheme1 = loadSound('SOUNDS/Music_In_The_Webs.ogg');
    iWebsTheme2 = loadSound('SOUNDS/Music_Inner_Webs_Escape.ogg');
    oWebsTheme = loadSound('SOUNDS/Music_The_Outer_Webs.ogg');

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
}


//Setup
function setup() {
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



    //Resize Images
    setupObj.resizeImgs();


    //Initial Array Setup
    setupObj.setupAreas();
    mapObj.currentAreaWalls = herculesHouseWalls;
    mapObj.currentAreaEncounters = 0;
    mapObj.currentAreaInteracts = herculesHouseInteracts;


    //Initial Var Setup
    gameMode = "title";
    titleCycle = titleCycle + (PI / 72);
    titleHercY = pos(6.4) + (pos(0.3) * sin(titleCycle));
    titleMagY = pos(6.4) + (-(pos(0.3)) * sin(titleCycle + (PI / 6)));
    playerSprite = playerSpriteD
    mapBG = silkFloorBG;
    mapObj.mapTheme = iWebsTheme1;
    mapObj.mapTheme.setLoop(true);
    mainBattleTheme.setLoop(true);
    rhinoTheme.setLoop(true);
    if (godMode == true) {
        playerMaxHealth = 9001;
        playerHealth = playerMaxHealth;
        playerAtkPower = 9001;
    }

}


//Draw
function draw() {
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


//Get Event Function
function getInteract(id) {
    if (id == "continue") {
        for (let i = 0; i < mapObj.currentAreaInteracts.length; i++) {
            if (mapObj.currentAreaInteracts[i] != false) {
                if (mapObj.currentAreaInteracts[i].interactStep != 0) {
                    return mapObj.currentAreaInteracts[i];
                }

            }

        }
        return ("none");

    }
    else {
        for (let i = 0; i < mapObj.currentAreaInteracts.length; i++) {
            if (mapObj.currentAreaInteracts[i] != false) {
                if (mapObj.currentAreaInteracts[i].id == id) {
                    return mapObj.currentAreaInteracts[i];
                }

            }

        }
        return ("none");

    }

}


//Fix any positional rounding errors
function fixPosition(object) {
    object.xPos = round(object.xPos);
    object.yPos = round(object.yPos);
}