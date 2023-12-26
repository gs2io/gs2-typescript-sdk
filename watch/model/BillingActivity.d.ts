import IModel from '../../core/interface/IModel';
export default class BillingActivity implements IModel {
    private billingActivityId;
    private year;
    private month;
    private service;
    private activityType;
    private value;
    private revision;
    static getRegion(grn: string): string | null;
    static getOwnerId(grn: string): string | null;
    static getYear(grn: string): string | null;
    static getMonth(grn: string): string | null;
    static getService(grn: string): string | null;
    static getActivityType(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(region: string | null, ownerId: string | null, year: string | null, month: string | null, service: string | null, activityType: string | null): string | null;
    getBillingActivityId(): string | null;
    setBillingActivityId(billingActivityId: string | null): this;
    withBillingActivityId(billingActivityId: string | null): this;
    getYear(): number | null;
    setYear(year: number | null): this;
    withYear(year: number | null): this;
    getMonth(): number | null;
    setMonth(month: number | null): this;
    withMonth(month: number | null): this;
    getService(): string | null;
    setService(service: string | null): this;
    withService(service: string | null): this;
    getActivityType(): string | null;
    setActivityType(activityType: string | null): this;
    withActivityType(activityType: string | null): this;
    getValue(): number | null;
    setValue(value: number | null): this;
    withValue(value: number | null): this;
    getRevision(): number | null;
    setRevision(revision: number | null): this;
    withRevision(revision: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): BillingActivity | null;
    toDict(): {
        [key: string]: any;
    };
}
