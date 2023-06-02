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
import FirstEngagementStatisticsLoginDays from './FirstEngagementStatisticsLoginDays';

export default class FirstEngagementStatistics implements IModel {
    private loginDays: FirstEngagementStatisticsLoginDays|null = null;
    public getLoginDays(): FirstEngagementStatisticsLoginDays|null {
        return this.loginDays;
    }
    public setLoginDays(loginDays: FirstEngagementStatisticsLoginDays|null) {
        this.loginDays = loginDays;
        return this;
    }
    public withLoginDays(loginDays: FirstEngagementStatisticsLoginDays|null): this {
        this.loginDays = loginDays;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): FirstEngagementStatistics|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new FirstEngagementStatistics()
            .withLoginDays(FirstEngagementStatisticsLoginDays.fromDict(data["loginDays"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "loginDays": this.getLoginDays()?.toDict(),
        };
    }
}
