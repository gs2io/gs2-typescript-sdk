import IModel from '../../core/interface/IModel';
export default class StaminaNamespaceRecoverDistributionSegment implements IModel {
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
    }): StaminaNamespaceRecoverDistributionSegment | null;
    toDict(): {
        [key: string]: any;
    };
}
