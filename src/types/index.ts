Player: {
    id: uuid
    games: Game[]
    created_at: TimeDate
    updated_at: TimeDate
}

Game: { 
    id: uuid
    status: enum
    lives: Int
    level: enum
    created_at: TimeDate
    updated_at: TimeDate
}


// board graphics stored as local vars to be rendered ss 
// update freq of x hz 
// obsticals stored as set of matrixs 
// 3x3 grid of 9x9 array or 27x27 array with bool or enum values
// check every open square every tik and if player, add points and update score / tile square / maybe more store begining boards with type point then remove when player gets thingy
// ^^^ might store in type Game or set Game type to status: finished and just save essential info
// 
