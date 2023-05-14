import IModel from '../../core/interface/IModel';
export default class InboxStatisticSummary implements IModel {
    private totalReceived;
    private totalOpened;
    private openRate;
    getTotalReceived(): number | null;
    setTotalReceived(totalReceived: number | null): this;
    withTotalReceived(totalReceived: number | null): this;
    getTotalOpened(): number | null;
    setTotalOpened(totalOpened: number | null): this;
    withTotalOpened(totalOpened: number | null): this;
    getOpenRate(): number | null;
    setOpenRate(openRate: number | null): this;
    withOpenRate(openRate: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InboxStatisticSummary | null;
    toDict(): {
        [key: string]: any;
    };
}
