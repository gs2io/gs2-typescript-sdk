import IResult from '../../core/interface/IResult';
import * as Gs2Lottery from '../model';
export default class GetRawBoxByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Lottery.Box | null;
    setItem(item: Gs2Lottery.Box | null): this;
    withItem(item: Gs2Lottery.Box | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetRawBoxByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
