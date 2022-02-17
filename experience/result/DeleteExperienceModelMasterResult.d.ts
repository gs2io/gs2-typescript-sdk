import IResult from '../../core/interface/IResult';
import * as Gs2Experience from '../model';
export default class DeleteExperienceModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Experience.ExperienceModelMaster | null;
    setItem(item: Gs2Experience.ExperienceModelMaster | null): this;
    withItem(item: Gs2Experience.ExperienceModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteExperienceModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
