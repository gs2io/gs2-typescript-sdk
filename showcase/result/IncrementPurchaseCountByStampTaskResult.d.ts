import IResult from '../../core/interface/IResult';
import * as Gs2Showcase from '../model';
export default class IncrementPurchaseCountByStampTaskResult implements IResult {
    private item;
    private newContextStack;
    getItem(): Gs2Showcase.RandomDisplayItem | null;
    setItem(item: Gs2Showcase.RandomDisplayItem | null): this;
    withItem(item: Gs2Showcase.RandomDisplayItem | null): this;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): IncrementPurchaseCountByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
