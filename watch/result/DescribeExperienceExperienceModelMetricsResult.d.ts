import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class DescribeExperienceExperienceModelMetricsResult implements IResult {
    private items;
    getItems(): Gs2Watch.ExperienceExperienceModel[] | null;
    setItems(items: Gs2Watch.ExperienceExperienceModel[] | null): this;
    withItems(items: Gs2Watch.ExperienceExperienceModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeExperienceExperienceModelMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
