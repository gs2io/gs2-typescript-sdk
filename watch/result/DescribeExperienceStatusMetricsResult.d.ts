import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class DescribeExperienceStatusMetricsResult implements IResult {
    private items;
    getItems(): Gs2Watch.ExperienceStatus[] | null;
    setItems(items: Gs2Watch.ExperienceStatus[] | null): this;
    withItems(items: Gs2Watch.ExperienceStatus[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeExperienceStatusMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
