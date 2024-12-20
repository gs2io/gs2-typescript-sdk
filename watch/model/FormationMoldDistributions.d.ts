import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class FormationMoldDistributions implements IModel {
    private capacity;
    private updateByIndex;
    getCapacity(): Gs2Watch.FormationMoldCapacityDistribution | null;
    setCapacity(capacity: Gs2Watch.FormationMoldCapacityDistribution | null): this;
    withCapacity(capacity: Gs2Watch.FormationMoldCapacityDistribution | null): this;
    getUpdateByIndex(): Gs2Watch.FormationMoldUpdateByIndexDistribution | null;
    setUpdateByIndex(updateByIndex: Gs2Watch.FormationMoldUpdateByIndexDistribution | null): this;
    withUpdateByIndex(updateByIndex: Gs2Watch.FormationMoldUpdateByIndexDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FormationMoldDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
