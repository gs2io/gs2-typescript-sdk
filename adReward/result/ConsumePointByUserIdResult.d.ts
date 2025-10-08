import IResult from '../../core/interface/IResult';
import * as Gs2AdReward from '../model';
export default class ConsumePointByUserIdResult implements IResult {
    private item;
    getItem(): Gs2AdReward.Point | null;
    setItem(item: Gs2AdReward.Point | null): this;
    withItem(item: Gs2AdReward.Point | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ConsumePointByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
