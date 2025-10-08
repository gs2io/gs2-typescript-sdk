import IModel from '../../core/interface/IModel';
export default class InboxNamespaceStatistics implements IModel {
    private sent;
    private open;
    private openRate;
    getSent(): number | null;
    setSent(sent: number | null): this;
    withSent(sent: number | null): this;
    getOpen(): number | null;
    setOpen(open: number | null): this;
    withOpen(open: number | null): this;
    getOpenRate(): number | null;
    setOpenRate(openRate: number | null): this;
    withOpenRate(openRate: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): InboxNamespaceStatistics | null;
    toDict(): {
        [key: string]: any;
    };
}
