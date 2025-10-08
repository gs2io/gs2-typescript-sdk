import IResult from '../../core/interface/IResult';
import * as Gs2Quest from '../model';
export default class DeleteQuestModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Quest.QuestModelMaster | null;
    setItem(item: Gs2Quest.QuestModelMaster | null): this;
    withItem(item: Gs2Quest.QuestModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteQuestModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
