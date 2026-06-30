interface Options {
    onMass: number
    onEndurance: number
}

type Muscles = 'верх груди' | 'центр груди' | 'низ груди'
 | 'широчайшие мышцы спины' | 'круглые мышцы спины' | 'трапециевидные мышцы спины'
 | 'бицепс' | 'трицепс' | 'предплечье' | 'передняя поверхность бедра' | 'задняя поверхность бедра' | 'икры'
 | 'пресс' | 'поясница' | 'передние дельты'
 | 'задние дельты' | 'средние дельты'

 type ImageKey =
    | 'jim'
    | 'jim_dumbbells'
    | 'bars'
    | 'push'
    | 'thrust_up'
    | 'thrust_down'
    | 'pull_ups';

type Place = 'улица и зал' | 'зал'

class Exercise {
    private static lastId: number = 0;

    public id: number;
    public name: string;
    public groupMuscles: Muscles[];
    public image: ImageKey;
    public place: Place;

    private _difficulty: number = 1;

    get difficulty(): number {
        return this._difficulty;
    }

    set difficulty(value: number) {
        if (value < 1) this._difficulty = 1;
        else if (value > 10) this._difficulty = 10;
        else this._difficulty = value;
    }

    private _effectiveness: Options = { onMass: 1, onEndurance: 1 };

    get effectiveness(): Options {
        return this._effectiveness;
    }

    set effectiveness(value: Options) {
        this._effectiveness = {
            onMass: Math.min(10, Math.max(1, value.onMass)),
            onEndurance: Math.min(10, Math.max(1, value.onEndurance)),
        };
    }

    constructor(
        name: string,
        image: ImageKey,
        place: Place,
        groupMuscles: Muscles[],
        difficulty: number,
        effectiveness: Options
    ) {
        this.id = ++Exercise.lastId; 
        this.name = name;
        this.image = image;
        this.place = place
        this.groupMuscles = groupMuscles;

        this.difficulty = difficulty;
        this.effectiveness = effectiveness;
    }
}

const path = "../assets/img/workout"

//Упражнения

/**грудные мышцы */

const jim = new Exercise(
    "Жим лёжа",
    "jim",
    "зал",
    ["центр груди", "передние дельты", "низ груди"],
    6,
    { onMass: 9, onEndurance: 4 }
);

const jim_dumbbells = new Exercise(
    "Жим гантелей в наклоне",
    "jim_dumbbells",
    "зал",
    ["центр груди", "передние дельты"],
    7,
    { onMass: 9, onEndurance: 4 }
);

const bars = new Exercise(
    "Брусья",
    "bars",
    "улица и зал",
    ["центр груди", "трицепс", "низ груди"],
    4,
    { onMass: 6, onEndurance: 5 }
);

const push_workout = new Exercise(
    "Жим сидя, толкая вперёд",
    "push",
    "зал",
    ["верх груди", "центр груди"],
    3,
    { onMass: 6, onEndurance: 2 }
);

/** спина */

const thrust_up_block = new Exercise(
    "Тяга верхнего блока",
    "thrust_up",
    "зал",
    [
        "широчайшие мышцы спины",
        "круглые мышцы спины",
        "трапециевидные мышцы спины"
    ],
    5,
    { onMass: 7, onEndurance: 3 }
);

const thrust_down_block = new Exercise(
    "Тяга нижнего блока",
    "thrust_down",
    "зал",
    ["широчайшие мышцы спины", "трапециевидные мышцы спины"],
    6,
    { onMass: 7, onEndurance: 4 }
);

const pull_ups = new Exercise(
    "Подтягивания",
    "pull_ups",
    "улица и зал",
    ["широчайшие мышцы спины", "бицепс", "предплечье"],
    7,
    { onMass: 5, onEndurance: 3 }
);



export const workouts: Exercise[] = [
    jim, jim_dumbbells, bars, push_workout,
    thrust_up_block, thrust_down_block,
    pull_ups
]

export const images: Record<ImageKey, any> = {
    jim: require(`${path}/jim.png`),
    jim_dumbbells: require(`../assets/img/fallback.png`),
    bars: require(`../assets/img/fallback.png`),
    push: require(`../assets/img/fallback.png`),
    thrust_up: require(`../assets/img/fallback.png`),
    thrust_down: require(`../assets/img/fallback.png`),
    pull_ups: require(`../assets/img/fallback.png`)
};