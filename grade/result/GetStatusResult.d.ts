import IResult from '../../core/interface/IResult';
import * as Gs2Grade from '../model';
export default class GetStatusResult implements IResult {
    private item;
    getItem(): Gs2Grade.Status | null;
    setItem(item: Gs2Grade.Status | null): this;
    withItem(item: Gs2Grade.Status | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetStatusResult;
    toDict(): {
        [key: string]: any;
    };
}
