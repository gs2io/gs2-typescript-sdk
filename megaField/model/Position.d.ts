import IModel from '../../core/interface/IModel';
export default class Position implements IModel {
    private x;
    private y;
    private z;
    getX(): number | null;
    setX(x: number | null): this;
    withX(x: number | null): this;
    getY(): number | null;
    setY(y: number | null): this;
    withY(y: number | null): this;
    getZ(): number | null;
    setZ(z: number | null): this;
    withZ(z: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Position | null;
    toDict(): {
        [key: string]: any;
    };
}
