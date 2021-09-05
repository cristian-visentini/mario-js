import k from '../kaboom';

export default function movement(){
    const {
        vec2,
        dt
    } =k;
    const direction = vec2(0, 1);
    const speed = 5;
    let acumulatedTime = 0;


    return {
        add(){
            this.movement.down();
        },
        update(){
            acumulatedTime += dt();

            if(acumulatedTime < 0.25){
                return;
            }

            acumulatedTime = 0;

            if(!this.pos){
                console.log('Faltando componente');
            }

            this.pos.x += direction.x * speed;
            this.pos.y += direction.y * speed;
        },
        movement: {
            left() {
                direction.x = -1;
                direction.y = 0;
            },
            right() {
                direction.x = 1;
                direction.y = 0;
            },
            up(){
                direction.x = 0;
                direction.y = -1;
            },
            down(){
                direction.x = 0;
                direction.y = 1;
            }
        }
    }
}