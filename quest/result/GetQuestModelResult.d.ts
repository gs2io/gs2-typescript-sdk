import IResult from '../../core/interface/IResult';
import * as Gs2Quest from '../model';
export default class GetQuestModelResult implements IResult {
    private item;
    getItem(): Gs2Quest.QuestModel | null;
    setItem(item: Gs2Quest.QuestModel | null): this;
    withItem(item: Gs2Quest.QuestModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetQuestModelResult;
    toDict(): {
        [key: string]: any;
    };
}
