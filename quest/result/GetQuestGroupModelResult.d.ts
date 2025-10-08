import IResult from '../../core/interface/IResult';
import * as Gs2Quest from '../model';
export default class GetQuestGroupModelResult implements IResult {
    private item;
    getItem(): Gs2Quest.QuestGroupModel | null;
    setItem(item: Gs2Quest.QuestGroupModel | null): this;
    withItem(item: Gs2Quest.QuestGroupModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetQuestGroupModelResult;
    toDict(): {
        [key: string]: any;
    };
}
