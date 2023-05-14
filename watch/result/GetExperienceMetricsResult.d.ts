import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetExperienceMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.ExperienceMetrics | null;
    setItem(item: Gs2Watch.ExperienceMetrics | null): this;
    withItem(item: Gs2Watch.ExperienceMetrics | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetExperienceMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
