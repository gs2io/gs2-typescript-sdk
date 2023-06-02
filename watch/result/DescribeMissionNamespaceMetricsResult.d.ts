import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class DescribeMissionNamespaceMetricsResult implements IResult {
    private items;
    getItems(): Gs2Watch.MissionNamespace[] | null;
    setItems(items: Gs2Watch.MissionNamespace[] | null): this;
    withItems(items: Gs2Watch.MissionNamespace[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeMissionNamespaceMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
