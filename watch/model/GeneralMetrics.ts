/*
Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
Reserved.

Licensed under the Apache License, Version 2.0 (the "License").
You may not use this file except in compliance with the License.
A copy of the License is located at

 http://www.apache.org/licenses/LICENSE-2.0

or in the "license" file accompanying this file. This file is distributed
on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
 */

import IModel from '../../core/interface/IModel';
import GeneralDauWauMauHistory from './GeneralDauWauMauHistory';
import GeneralDauWauMauAverage from './GeneralDauWauMauAverage';
import GeneralDauWauMau from './GeneralDauWauMau';
import SessionDurationStatistics from './SessionDurationStatistics';
import SessionDurationDistribution from './SessionDurationDistribution';
import SessionDuration from './SessionDuration';
import FirstEngagementStatisticsLoginDays from './FirstEngagementStatisticsLoginDays';
import FirstEngagementStatistics from './FirstEngagementStatistics';
import FirstEngagementDistributionSegment from './FirstEngagementDistributionSegment';
import FirstEngagement from './FirstEngagement';
import EngagementHistory from './EngagementHistory';
import EngagementAverage from './EngagementAverage';
import Engagements from './Engagements';
import ChurnRateHistory from './ChurnRateHistory';
import ChurnRateAverage from './ChurnRateAverage';
import ChurnRateAggregate from './ChurnRateAggregate';
import UseServices from './UseServices';

export default class GeneralMetrics implements IModel {
    private dauWauMau: GeneralDauWauMau|null = null;
    private sessionDuration: SessionDuration|null = null;
    private firstEngagement: FirstEngagement|null = null;
    private engagements: Engagements|null = null;
    private churnRates: ChurnRateAggregate|null = null;
    private useServices: UseServices|null = null;
    public getDauWauMau(): GeneralDauWauMau|null {
        return this.dauWauMau;
    }
    public setDauWauMau(dauWauMau: GeneralDauWauMau|null) {
        this.dauWauMau = dauWauMau;
        return this;
    }
    public withDauWauMau(dauWauMau: GeneralDauWauMau|null): this {
        this.dauWauMau = dauWauMau;
        return this;
    }
    public getSessionDuration(): SessionDuration|null {
        return this.sessionDuration;
    }
    public setSessionDuration(sessionDuration: SessionDuration|null) {
        this.sessionDuration = sessionDuration;
        return this;
    }
    public withSessionDuration(sessionDuration: SessionDuration|null): this {
        this.sessionDuration = sessionDuration;
        return this;
    }
    public getFirstEngagement(): FirstEngagement|null {
        return this.firstEngagement;
    }
    public setFirstEngagement(firstEngagement: FirstEngagement|null) {
        this.firstEngagement = firstEngagement;
        return this;
    }
    public withFirstEngagement(firstEngagement: FirstEngagement|null): this {
        this.firstEngagement = firstEngagement;
        return this;
    }
    public getEngagements(): Engagements|null {
        return this.engagements;
    }
    public setEngagements(engagements: Engagements|null) {
        this.engagements = engagements;
        return this;
    }
    public withEngagements(engagements: Engagements|null): this {
        this.engagements = engagements;
        return this;
    }
    public getChurnRates(): ChurnRateAggregate|null {
        return this.churnRates;
    }
    public setChurnRates(churnRates: ChurnRateAggregate|null) {
        this.churnRates = churnRates;
        return this;
    }
    public withChurnRates(churnRates: ChurnRateAggregate|null): this {
        this.churnRates = churnRates;
        return this;
    }
    public getUseServices(): UseServices|null {
        return this.useServices;
    }
    public setUseServices(useServices: UseServices|null) {
        this.useServices = useServices;
        return this;
    }
    public withUseServices(useServices: UseServices|null): this {
        this.useServices = useServices;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): GeneralMetrics|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new GeneralMetrics()
            .withDauWauMau(GeneralDauWauMau.fromDict(data["dauWauMau"]))
            .withSessionDuration(SessionDuration.fromDict(data["sessionDuration"]))
            .withFirstEngagement(FirstEngagement.fromDict(data["firstEngagement"]))
            .withEngagements(Engagements.fromDict(data["engagements"]))
            .withChurnRates(ChurnRateAggregate.fromDict(data["churnRates"]))
            .withUseServices(UseServices.fromDict(data["useServices"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "dauWauMau": this.getDauWauMau()?.toDict(),
            "sessionDuration": this.getSessionDuration()?.toDict(),
            "firstEngagement": this.getFirstEngagement()?.toDict(),
            "engagements": this.getEngagements()?.toDict(),
            "churnRates": this.getChurnRates()?.toDict(),
            "useServices": this.getUseServices()?.toDict(),
        };
    }
}
