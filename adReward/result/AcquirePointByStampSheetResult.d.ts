import IResult from '../../core/interface/IResult';
import * as Gs2AdReward from '../model';
export default class AcquirePointByStampSheetResult implements IResult {
    private item;
    getItem(): Gs2AdReward.Point | null;
    setItem(item: Gs2AdReward.Point | null): this;
    withItem(item: Gs2AdReward.Point | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AcquirePointByStampSheetResult;
    toDict(): {
        [key: string]: any;
    };
}
