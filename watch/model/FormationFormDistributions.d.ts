import IModel from '../../core/interface/IModel';
import FormationFormSlotDistribution from './FormationFormSlotDistribution';
import FormationFormUsageDistribution from './FormationFormUsageDistribution';
export default class FormationFormDistributions implements IModel {
    private slot;
    private usage;
    getSlot(): FormationFormSlotDistribution | null;
    setSlot(slot: FormationFormSlotDistribution | null): this;
    withSlot(slot: FormationFormSlotDistribution | null): this;
    getUsage(): FormationFormUsageDistribution | null;
    setUsage(usage: FormationFormUsageDistribution | null): this;
    withUsage(usage: FormationFormUsageDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FormationFormDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
