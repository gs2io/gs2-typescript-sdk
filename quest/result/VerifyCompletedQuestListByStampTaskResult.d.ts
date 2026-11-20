import IResult from '../../core/interface/IResult';
import * as Gs2Quest from '../model';
export default class VerifyCompletedQuestListByStampTaskResult implements IResult {
    private item;
    private newContextStack;
    getItem(): Gs2Quest.CompletedQuestList | null;
    setItem(item: Gs2Quest.CompletedQuestList | null): this;
    withItem(item: Gs2Quest.CompletedQuestList | null): this;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VerifyCompletedQuestListByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
