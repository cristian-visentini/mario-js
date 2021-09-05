import k from '../kaboom';

import movement from '../components/movement';
import controls from '../components/controls';
import spawn from '../components/spawn';

export default function snake(){

    const {
        add,
        pos,
        rect,
        color,
        origin
    } = k;

    const spawner = add([
        spawn()
            
    ]);

    add([
        pos(8, 8),
        rect(16, 16),
        color(0, 1, 0, 1),
        origin('center'),
        movement(),
        controls()
    ])
    spawner.spawn();
}
