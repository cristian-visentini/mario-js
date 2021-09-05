import k from '../kaboom';

import movement from '../components/movement';
import controls from '../components/controls';
import spawn from '../components/spawn';
import link from '../components/link';

export default function snake(){

    const {
        add,
        pos,
        rect,
        color,
        origin,
        overlaps,
        destroy,
        camShake
    } = k;

    const spawner = add([
        spawn()
            
    ]);

   let end = add([
        pos(8, 8),
        rect(16, 16),
        color(0, 1, 0, 1),
        origin('center'),
        movement(),
        controls(),
        link(),
        'head'
    ])
    spawner.spawn();

    overlaps('head', 'food', (head, food) => {
        destroy(food);
        camShake(3);

        const newChild = add([
            pos(end.pos.x, end.pos.y),
            rect(16, 16),
            color(0, 1, 0, 1),
            origin('center'),
            link()
        ]);

        end.setChild(newChild);

        end = newChild;

        spawner.spawn();
    })
}
