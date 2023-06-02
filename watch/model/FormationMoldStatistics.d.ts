import IModel from '../../core/interface/IModel';
export default class FormationMoldStatistics implements IModel {
    private increaseCapacity;
    private increaseCapacityAmount;
    getIncreaseCapacity(): number | null;
    setIncreaseCapacity(increaseCapacity: number | null): this;
    withIncreaseCapacity(increaseCapacity: number | null): this;
    getIncreaseCapacityAmount(): number | null;
    setIncreaseCapacityAmount(increaseCapacityAmount: number | null): this;
    withIncreaseCapacityAmount(increaseCapacityAmount: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FormationMoldStatistics | null;
    toDict(): {
        [key: string]: any;
    };
}
