import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class FormationFormDistributions implements IModel {
    private slot;
    private usage;
    getSlot(): Gs2Watch.FormationFormSlotDistribution | null;
    setSlot(slot: Gs2Watch.FormationFormSlotDistribution | null): this;
    withSlot(slot: Gs2Watch.FormationFormSlotDistribution | null): this;
    getUsage(): Gs2Watch.FormationFormUsageDistribution | null;
    setUsage(usage: Gs2Watch.FormationFormUsageDistribution | null): this;
    withUsage(usage: Gs2Watch.FormationFormUsageDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FormationFormDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
