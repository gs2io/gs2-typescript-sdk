import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class GetExperienceNamespaceMetricsResult implements IResult {
    private item;
    getItem(): Gs2Watch.ExperienceNamespace | null;
    setItem(item: Gs2Watch.ExperienceNamespace | null): this;
    withItem(item: Gs2Watch.ExperienceNamespace | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetExperienceNamespaceMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
