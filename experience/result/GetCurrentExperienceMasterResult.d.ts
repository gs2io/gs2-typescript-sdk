import IResult from '../../core/interface/IResult';
import * as Gs2Experience from '../model';
export default class GetCurrentExperienceMasterResult implements IResult {
    private item;
    getItem(): Gs2Experience.CurrentExperienceMaster | null;
    setItem(item: Gs2Experience.CurrentExperienceMaster | null): this;
    withItem(item: Gs2Experience.CurrentExperienceMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetCurrentExperienceMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
