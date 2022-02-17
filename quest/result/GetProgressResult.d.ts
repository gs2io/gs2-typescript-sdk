import IResult from '../../core/interface/IResult';
import * as Gs2Quest from '../model';
export default class GetProgressResult implements IResult {
    private item;
    private questGroup;
    private quest;
    getItem(): Gs2Quest.Progress | null;
    setItem(item: Gs2Quest.Progress | null): this;
    withItem(item: Gs2Quest.Progress | null): this;
    getQuestGroup(): Gs2Quest.QuestGroupModel | null;
    setQuestGroup(questGroup: Gs2Quest.QuestGroupModel | null): this;
    withQuestGroup(questGroup: Gs2Quest.QuestGroupModel | null): this;
    getQuest(): Gs2Quest.QuestModel | null;
    setQuest(quest: Gs2Quest.QuestModel | null): this;
    withQuest(quest: Gs2Quest.QuestModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetProgressResult;
    toDict(): {
        [key: string]: any;
    };
}
