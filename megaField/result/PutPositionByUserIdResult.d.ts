import IResult from '../../core/interface/IResult';
import * as Gs2MegaField from '../model';
export default class PutPositionByUserIdResult implements IResult {
    private item;
    getItem(): Gs2MegaField.Spatial | null;
    setItem(item: Gs2MegaField.Spatial | null): this;
    withItem(item: Gs2MegaField.Spatial | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): PutPositionByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
