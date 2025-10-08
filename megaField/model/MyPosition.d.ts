import IModel from '../../core/interface/IModel';
import * as Gs2MegaField from '../../megaField/model';
export default class MyPosition implements IModel {
    private position;
    private vector;
    private r;
    getPosition(): Gs2MegaField.Position | null;
    setPosition(position: Gs2MegaField.Position | null): this;
    withPosition(position: Gs2MegaField.Position | null): this;
    getVector(): Gs2MegaField.Vector | null;
    setVector(vector: Gs2MegaField.Vector | null): this;
    withVector(vector: Gs2MegaField.Vector | null): this;
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
