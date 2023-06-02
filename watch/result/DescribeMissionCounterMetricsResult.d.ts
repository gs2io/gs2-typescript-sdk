import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class DescribeMissionCounterMetricsResult implements IResult {
    private items;
    getItems(): Gs2Watch.MissionCounter[] | null;
    setItems(items: Gs2Watch.MissionCounter[] | null): this;
    withItems(items: Gs2Watch.MissionCounter[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeMissionCounterMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
