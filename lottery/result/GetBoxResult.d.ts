import IResult from '../../core/interface/IResult';
import * as Gs2Lottery from '../model';
export default class GetBoxResult implements IResult {
    private item;
    getItem(): Gs2Lottery.BoxItems | null;
    setItem(item: Gs2Lottery.BoxItems | null): this;
    withItem(item: Gs2Lottery.BoxItems | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetBoxResult;
    toDict(): {
        [key: string]: any;
    };
}
