import IModel from '../../core/interface/IModel';
export default class StatsEvent implements IModel {
    private grn;
    private service;
    private method;
    private metric;
    private cumulative;
    private value;
    private tags;
    private callAt;
    getGrn(): string | null;
    setGrn(grn: string | null): this;
    withGrn(grn: string | null): this;
    getService(): string | null;
    setService(service: string | null): this;
    withService(service: string | null): this;
    getMethod(): string | null;
    setMethod(method: string | null): this;
    withMethod(method: string | null): this;
    getMetric(): string | null;
    setMetric(metric: string | null): this;
    withMetric(metric: string | null): this;
    getCumulative(): boolean | null;
    setCumulative(cumulative: boolean | null): this;
    withCumulative(cumulative: boolean | null): this;
    getValue(): number | null;
    setValue(value: number | null): this;
    withValue(value: number | null): this;
    getTags(): string[] | null;
    setTags(tags: string[] | null): this;
    withTags(tags: string[] | null): this;
    getCallAt(): number | null;
    setCallAt(callAt: number | null): this;
    withCallAt(callAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): StatsEvent | null;
    toDict(): {
        [key: string]: any;
    };
}
