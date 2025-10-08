import IResult from '../../core/interface/IResult';
import * as Gs2MegaField from '../model';
export default class PutPositionResult implements IResult {
    private item;
    getItem(): Gs2MegaField.Spatial | null;
    setItem(item: Gs2MegaField.Spatial | null): this;
    withItem(item: Gs2MegaField.Spatial | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): PutPositionResult;
    toDict(): {
        [key: string]: any;
    };
}
