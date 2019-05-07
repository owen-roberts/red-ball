import Matter from 'matter-js';

export default function Ball(x, y){
    return Matter.Bodies.circle(x, y, 25, {
        friction: 0.0025,
        restitution: 0.8,
        render: {
            fillStyle: 'red',
        }
    });
}