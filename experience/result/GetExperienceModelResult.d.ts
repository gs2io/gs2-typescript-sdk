import IResult from '../../core/interface/IResult';
import * as Gs2Experience from '../model';
export default class GetExperienceModelResult implements IResult {
    private item;
    getItem(): Gs2Experience.ExperienceModel | null;
    setItem(item: Gs2Experience.ExperienceModel | null): this;
    withItem(item: Gs2Experience.ExperienceModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetExperienceModelResult;
    toDict(): {
        [key: string]: any;
    };
}
