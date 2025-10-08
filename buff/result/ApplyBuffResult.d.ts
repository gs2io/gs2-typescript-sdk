import IResult from '../../core/interface/IResult';
import * as Gs2Buff from '../model';
export default class ApplyBuffResult implements IResult {
    private items;
    private newContextStack;
    getItems(): Gs2Buff.BuffEntryModel[] | null;
    setItems(items: Gs2Buff.BuffEntryModel[] | null): this;
    withItems(items: Gs2Buff.BuffEntryModel[] | null): this;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ApplyBuffResult;
    toDict(): {
        [key: string]: any;
    };
}
