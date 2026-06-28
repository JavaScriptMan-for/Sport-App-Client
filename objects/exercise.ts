interface Options {
    onMass: number
    onEndurance: number
}

type Muscles = 'верх груди' | 'центр груди' | 'низ груди'
 | 'широчайшие мышцы спины' | 'круглые мышцы спины' | 'трапециевидные мышцы спины'
 | 'бицепс' | 'трицепс' | 'предплечье' | 'передняя поверхность бедра' | 'задняя поверхность бедра' | 'икры'
 | 'пресс' | 'поясница' | 'передние дельты'
 | 'задние дельты' | 'средние дельты'

type Place = 'улица и зал' | 'зал'

class Exercise {
    private static lastId: number = 0;

    public id: number;
    public name: string;
    public groupMuscles: Muscles[];
    public image: string;
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
        image: string,
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
    `${path}/jim.png`,
    'зал',
    ["центр груди", "передние дельты", "низ груди"],
    6,
    { onMass: 9, onEndurance: 4 }
);

const jim_dumbbells = new Exercise(
    'Жим гантелей в наклоне', `${path}/jim_dumbbells.png`,
    'зал',
    ['центр груди', 'передние дельты'], 7,
    { onMass: 9, onEndurance: 4 }
)

const bars = new Exercise(
    'Брусья', `${path}/bars.png`,
    "улица и зал",
    ["центр груди", 'трицепс', "низ груди"],
    4, { onMass: 6, onEndurance: 5 }
)

const push_workout = new Exercise(
    'Жим сидя, толкая вперёд', `${path}/push.png`,
    "зал",
    ["верх груди", 'центр груди'], 3,
    { onMass: 6, onEndurance: 2 }
)

/**спина */

const thrust_up_block = new Exercise(
    "Тяга верхнего блока", `${path}/thrust_up.png`,
    "зал",
    ['широчайшие мышцы спины', "круглые мышцы спины", "трапециевидные мышцы спины"],
    5, { onMass: 7, onEndurance: 3 }
)

const thrust_down_block = new Exercise(
    'Тяга нижнего блока', `${path}/thrust_down.png`,
    "зал",
    ["широчайшие мышцы спины", 'трапециевидные мышцы спины'],
    6, { onMass: 7, onEndurance: 4 }
)

const pull_ups = new Exercise(
    "Подтягивания", `${path}/pull_ups.png`,
    'улица и зал', ["широчайшие мышцы спины", "бицепс", "предплечье"],
    7, { onMass: 5, onEndurance: 3}
)



export const workout: Exercise[] = [
    jim, jim_dumbbells, bars, push_workout,
    thrust_up_block, thrust_down_block,
    pull_ups
]