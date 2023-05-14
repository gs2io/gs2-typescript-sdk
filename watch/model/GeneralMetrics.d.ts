import IModel from '../../core/interface/IModel';
import WeeklyActiveUsers from './WeeklyActiveUsers';
import MonthlyActiveUsers from './MonthlyActiveUsers';
import ReturningUserRatio from './ReturningUserRatio';
import FirstWeekLoginDays from './FirstWeekLoginDays';
import SessionDuration from './SessionDuration';
export default class GeneralMetrics implements IModel {
    private dau;
    private wau;
    private mau;
    private churnRate;
    private returningUserRatio;
    private firstWeekLoginDays;
    private sessionDuration;
    getDau(): number | null;
    setDau(dau: number | null): this;
    withDau(dau: number | null): this;
    getWau(): WeeklyActiveUsers | null;
    setWau(wau: WeeklyActiveUsers | null): this;
    withWau(wau: WeeklyActiveUsers | null): this;
    getMau(): MonthlyActiveUsers | null;
    setMau(mau: MonthlyActiveUsers | null): this;
    withMau(mau: MonthlyActiveUsers | null): this;
    getChurnRate(): number | null;
    setChurnRate(churnRate: number | null): this;
    withChurnRate(churnRate: number | null): this;
    getReturningUserRatio(): ReturningUserRatio | null;
    setReturningUserRatio(returningUserRatio: ReturningUserRatio | null): this;
    withReturningUserRatio(returningUserRatio: ReturningUserRatio | null): this;
    getFirstWeekLoginDays(): FirstWeekLoginDays | null;
    setFirstWeekLoginDays(firstWeekLoginDays: FirstWeekLoginDays | null): this;
    withFirstWeekLoginDays(firstWeekLoginDays: FirstWeekLoginDays | null): this;
    getSessionDuration(): SessionDuration | null;
    setSessionDuration(sessionDuration: SessionDuration | null): this;
    withSessionDuration(sessionDuration: SessionDuration | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GeneralMetrics | null;
    toDict(): {
        [key: string]: any;
    };
}
