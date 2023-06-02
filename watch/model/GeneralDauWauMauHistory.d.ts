import IModel from '../../core/interface/IModel';
export default class GeneralDauWauMauHistory implements IModel {
    private dau;
    private wauLast7Days;
    private wauTargetWeekSunday;
    private wauTargetWeekMonday;
    private mauLast30Days;
    private mauTargetMonth;
    getDau(): number | null;
    setDau(dau: number | null): this;
    withDau(dau: number | null): this;
    getWauLast7Days(): number | null;
    setWauLast7Days(wauLast7Days: number | null): this;
    withWauLast7Days(wauLast7Days: number | null): this;
    getWauTargetWeekSunday(): number | null;
    setWauTargetWeekSunday(wauTargetWeekSunday: number | null): this;
    withWauTargetWeekSunday(wauTargetWeekSunday: number | null): this;
    getWauTargetWeekMonday(): number | null;
    setWauTargetWeekMonday(wauTargetWeekMonday: number | null): this;
    withWauTargetWeekMonday(wauTargetWeekMonday: number | null): this;
    getMauLast30Days(): number | null;
    setMauLast30Days(mauLast30Days: number | null): this;
    withMauLast30Days(mauLast30Days: number | null): this;
    getMauTargetMonth(): number | null;
    setMauTargetMonth(mauTargetMonth: number | null): this;
    withMauTargetMonth(mauTargetMonth: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GeneralDauWauMauHistory | null;
    toDict(): {
        [key: string]: any;
    };
}
