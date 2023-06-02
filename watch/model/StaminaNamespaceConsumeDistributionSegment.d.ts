import IModel from '../../core/interface/IModel';
export default class StaminaNamespaceConsumeDistributionSegment implements IModel {
    private staminaName;
    private count;
    getStaminaName(): string | null;
    setStaminaName(staminaName: string | null): this;
    withStaminaName(staminaName: string | null): this;
    getCount(): number | null;
    setCount(count: number | null): this;
    withCount(count: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): StaminaNamespaceConsumeDistributionSegment | null;
    toDict(): {
        [key: string]: any;
    };
}
