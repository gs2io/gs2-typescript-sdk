import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetExperienceExperienceModelMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.ExperienceExperienceModel | null;
    setItem(item: Gs2Watch.ExperienceExperienceModel | null): this;
    withItem(item: Gs2Watch.ExperienceExperienceModel | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetExperienceExperienceModelMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
