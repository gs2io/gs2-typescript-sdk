import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class DescribeFormationMoldMetricsResult implements IResult {
    private items;
    getItems(): Gs2Watch.FormationMold[] | null;
    setItems(items: Gs2Watch.FormationMold[] | null): this;
    withItems(items: Gs2Watch.FormationMold[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeFormationMoldMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
