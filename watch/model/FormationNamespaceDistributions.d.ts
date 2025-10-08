import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class FormationNamespaceDistributions implements IModel {
    private updateByMold;
    private increaseCapacityByMold;
    getUpdateByMold(): Gs2Watch.FormationNamespaceUpdateByMoldDistribution | null;
    setUpdateByMold(updateByMold: Gs2Watch.FormationNamespaceUpdateByMoldDistribution | null): this;
    withUpdateByMold(updateByMold: Gs2Watch.FormationNamespaceUpdateByMoldDistribution | null): this;
    getIncreaseCapacityByMold(): Gs2Watch.FormationNamespaceIncreaseCapacityByMoldDistribution | null;
    setIncreaseCapacityByMold(increaseCapacityByMold: Gs2Watch.FormationNamespaceIncreaseCapacityByMoldDistribution | null): this;
    withIncreaseCapacityByMold(increaseCapacityByMold: Gs2Watch.FormationNamespaceIncreaseCapacityByMoldDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FormationNamespaceDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
