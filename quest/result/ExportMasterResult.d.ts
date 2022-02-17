import IResult from '../../core/interface/IResult';
import * as Gs2Quest from '../model';
export default class ExportMasterResult implements IResult {
    private item;
    getItem(): Gs2Quest.CurrentQuestMaster | null;
    setItem(item: Gs2Quest.CurrentQuestMaster | null): this;
    withItem(item: Gs2Quest.CurrentQuestMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ExportMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
