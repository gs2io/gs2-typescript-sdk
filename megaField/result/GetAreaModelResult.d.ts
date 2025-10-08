import IResult from '../../core/interface/IResult';
import * as Gs2MegaField from '../model';
export default class GetAreaModelResult implements IResult {
    private item;
    getItem(): Gs2MegaField.AreaModel | null;
    setItem(item: Gs2MegaField.AreaModel | null): this;
    withItem(item: Gs2MegaField.AreaModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetAreaModelResult;
    toDict(): {
        [key: string]: any;
    };
}
