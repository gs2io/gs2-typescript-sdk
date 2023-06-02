import IModel from '../../core/interface/IModel';
import FormationNamespaceUpdateByMoldDistribution from './FormationNamespaceUpdateByMoldDistribution';
import FormationNamespaceIncreaseCapacityByMoldDistribution from './FormationNamespaceIncreaseCapacityByMoldDistribution';
export default class FormationNamespaceDistributions implements IModel {
    private updateByMold;
    private increaseCapacityByMold;
    getUpdateByMold(): FormationNamespaceUpdateByMoldDistribution | null;
    setUpdateByMold(updateByMold: FormationNamespaceUpdateByMoldDistribution | null): this;
    withUpdateByMold(updateByMold: FormationNamespaceUpdateByMoldDistribution | null): this;
    getIncreaseCapacityByMold(): FormationNamespaceIncreaseCapacityByMoldDistribution | null;
    setIncreaseCapacityByMold(increaseCapacityByMold: FormationNamespaceIncreaseCapacityByMoldDistribution | null): this;
    withIncreaseCapacityByMold(increaseCapacityByMold: FormationNamespaceIncreaseCapacityByMoldDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FormationNamespaceDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
