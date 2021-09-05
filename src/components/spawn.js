import k from '../kaboom';

export default function spawn(){
    const{
        wait,
        add,
        pos,
        rect,
        color,
        origin
    } = k;

    return{
        spawn(){
            wait(1, ()=>{
                add([
                    pos(128, 128),
                    rect(16, 16),
                    color(0, 0, 1, 1),
                    origin('center')
                ])
            })
        }
    }
}