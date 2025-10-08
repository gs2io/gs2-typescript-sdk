import IResult from '../../core/interface/IResult';
import * as Gs2AdReward from '../model';
export default class ConsumePointByStampTaskResult implements IResult {
    private item;
    private newContextStack;
    getItem(): Gs2AdReward.Point | null;
    setItem(item: Gs2AdReward.Point | null): this;
    withItem(item: Gs2AdReward.Point | null): this;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ConsumePointByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
