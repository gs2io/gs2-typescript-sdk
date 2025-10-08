import IModel from '../../core/interface/IModel';
export default class GeneralDauWauMauAverage implements IModel {
    private dau;
    private wau;
    private mau;
    getDau(): number | null;
    setDau(dau: number | null): this;
    withDau(dau: number | null): this;
    getWau(): number | null;
    setWau(wau: number | null): this;
    withWau(wau: number | null): this;
    getMau(): number | null;
    setMau(mau: number | null): this;
    withMau(mau: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GeneralDauWauMauAverage | null;
    toDict(): {
        [key: string]: any;
    };
}
