import IResult from '../../core/interface/IResult';
import * as Gs2Quest from '../model';
export default class DeleteCompletedQuestListByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Quest.CompletedQuestList | null;
    setItem(item: Gs2Quest.CompletedQuestList | null): this;
    withItem(item: Gs2Quest.CompletedQuestList | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteCompletedQuestListByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
