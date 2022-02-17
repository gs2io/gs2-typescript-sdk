import IResult from '../../core/interface/IResult';
import * as Gs2Experience from '../model';
export default class UpdateCurrentExperienceMasterResult implements IResult {
    private item;
    getItem(): Gs2Experience.CurrentExperienceMaster | null;
    setItem(item: Gs2Experience.CurrentExperienceMaster | null): this;
    withItem(item: Gs2Experience.CurrentExperienceMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateCurrentExperienceMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
