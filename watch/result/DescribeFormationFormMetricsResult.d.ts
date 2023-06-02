import IResult from '../../core/interface/IResult';
import * as Gs2Watch from '../model';
export default class DescribeFormationFormMetricsResult implements IResult {
    private items;
    getItems(): Gs2Watch.FormationForm[] | null;
    setItems(items: Gs2Watch.FormationForm[] | null): this;
    withItems(items: Gs2Watch.FormationForm[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeFormationFormMetricsResult;
    toDict(): {
        [key: string]: any;
    };
}
