import IModel from '../../core/interface/IModel';
import InboxStatisticSummary from './InboxStatisticSummary';
import InboxStatisticOpenMinutes from './InboxStatisticOpenMinutes';
export default class InboxStatistics implements IModel {
    private summary;
    private openMinutes;
    getSummary(): InboxStatisticSummary | null;
    setSummary(summary: InboxStatisticSummary | null): this;
    withSummary(summary: InboxStatisticSummary | null): this;
    getOpenMinutes(): InboxStatisticOpenMinutes | null;
    setOpenMinutes(openMinutes: InboxStatisticOpenMinutes | null): this;
    withOpenMinutes(openMinutes: InboxStatisticOpenMinutes | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InboxStatistics | null;
    toDict(): {
        [key: string]: any;
    };
}
