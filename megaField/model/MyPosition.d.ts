import IModel from '../../core/interface/IModel';
import Position from './Position';
import Vector from './Vector';
export default class MyPosition implements IModel {
    private position;
    private vector;
    private r;
    getPosition(): Position | null;
    setPosition(position: Position | null): this;
    withPosition(position: Position | null): this;
    getVector(): Vector | null;
    setVector(vector: Vector | null): this;
    withVector(vector: Vector | null): this;
    getR(): number | null;
    setR(r: number | null): this;
    withR(r: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MyPosition | null;
    toDict(): {
        [key: string]: any;
    };
}
