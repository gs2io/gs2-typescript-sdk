import IResult from '../../core/interface/IResult';
import * as Gs2Deploy from '../model';
export default class GetResourceResult implements IResult {
    private item;
    getItem(): Gs2Deploy.Resource | null;
    setItem(item: Gs2Deploy.Resource | null): this;
    withItem(item: Gs2Deploy.Resource | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetResourceResult;
    toDict(): {
        [key: string]: any;
    };
}
