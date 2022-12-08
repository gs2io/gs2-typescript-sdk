import IResult from '../../core/interface/IResult';
import * as Gs2Enhance from '../model';
export default class GetProgressByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Enhance.Progress | null;
    setItem(item: Gs2Enhance.Progress | null): this;
    withItem(item: Gs2Enhance.Progress | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetProgressByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
