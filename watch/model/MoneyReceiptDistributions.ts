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

import * as Gs2Watch from '../../watch/model'
import MoneyReceiptVerificationByUserDistributionStatistics from './MoneyReceiptVerificationByUserDistributionStatistics';
import MoneyReceiptVerificationByUserDistributionSegment from './MoneyReceiptVerificationByUserDistributionSegment';
import MoneyReceiptVerificationByUserDistribution from './MoneyReceiptVerificationByUserDistribution';

export default class MoneyReceiptDistributions implements IModel {
    private verificationByUser: Gs2Watch.MoneyReceiptVerificationByUserDistribution|null = null;
    public getVerificationByUser(): Gs2Watch.MoneyReceiptVerificationByUserDistribution|null {
        return this.verificationByUser;
    }
    public setVerificationByUser(verificationByUser: Gs2Watch.MoneyReceiptVerificationByUserDistribution|null) {
        this.verificationByUser = verificationByUser;
        return this;
    }
    public withVerificationByUser(verificationByUser: Gs2Watch.MoneyReceiptVerificationByUserDistribution|null): this {
        this.verificationByUser = verificationByUser;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): MoneyReceiptDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new MoneyReceiptDistributions()
            .withVerificationByUser(Gs2Watch.MoneyReceiptVerificationByUserDistribution.fromDict(data["verificationByUser"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "verificationByUser": this.getVerificationByUser()?.toDict(),
        };
    }
}
