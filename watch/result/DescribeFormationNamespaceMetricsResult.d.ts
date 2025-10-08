import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class DescribeFormationNamespaceMetricsResult implements IResult {
    private items;
    getItems(): Gs2Watch.FormationNamespace[] | null;
    setItems(items: Gs2Watch.FormationNamespace[] | null): this;
    withItems(items: Gs2Watch.FormationNamespace[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeFormationNamespaceMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
