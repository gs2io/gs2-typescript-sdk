import IResult from '../../core/interface/IResult';
import * as Gs2Quest from '../model';
export default class GetQuestGroupModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Quest.QuestGroupModelMaster | null;
    setItem(item: Gs2Quest.QuestGroupModelMaster | null): this;
    withItem(item: Gs2Quest.QuestGroupModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetQuestGroupModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
