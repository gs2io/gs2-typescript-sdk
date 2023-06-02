import IModel from '../../core/interface/IModel';
import MissionCounterCounterDistribution from './MissionCounterCounterDistribution';
export default class MissionCounterDistributions implements IModel {
    private counter;
    getCounter(): MissionCounterCounterDistribution | null;
    setCounter(counter: MissionCounterCounterDistribution | null): this;
    withCounter(counter: MissionCounterCounterDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): MissionCounterDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
