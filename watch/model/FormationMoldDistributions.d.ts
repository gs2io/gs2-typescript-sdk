import IModel from '../../core/interface/IModel';
import FormationMoldCapacityDistribution from './FormationMoldCapacityDistribution';
import FormationMoldUpdateByIndexDistribution from './FormationMoldUpdateByIndexDistribution';
export default class FormationMoldDistributions implements IModel {
    private capacity;
    private updateByIndex;
    getCapacity(): FormationMoldCapacityDistribution | null;
    setCapacity(capacity: FormationMoldCapacityDistribution | null): this;
    withCapacity(capacity: FormationMoldCapacityDistribution | null): this;
    getUpdateByIndex(): FormationMoldUpdateByIndexDistribution | null;
    setUpdateByIndex(updateByIndex: FormationMoldUpdateByIndexDistribution | null): this;
    withUpdateByIndex(updateByIndex: FormationMoldUpdateByIndexDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FormationMoldDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
