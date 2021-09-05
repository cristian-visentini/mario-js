import k from '../kaboom';

export default function controls(){

    const {
        keyPress
    } =k;

    return{
        add(){
            keyPress('left', ()=> {
                if(!this.movement){
                    console.log('error, falta moviemeto');
                    return;
                }
                this.movement.left();

            });
            keyPress('right', ()=> {
                this.movement.right();
            });
            keyPress('up', ()=> {
                this.movement.up();
            });
            keyPress('down', ()=> {
                this.movement.down();
            });
        }
    }
}