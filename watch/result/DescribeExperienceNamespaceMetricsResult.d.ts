import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class DescribeExperienceNamespaceMetricsResult implements IResult {
    private items;
    getItems(): Gs2Watch.ExperienceNamespace[] | null;
    setItems(items: Gs2Watch.ExperienceNamespace[] | null): this;
    withItems(items: Gs2Watch.ExperienceNamespace[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeExperienceNamespaceMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
