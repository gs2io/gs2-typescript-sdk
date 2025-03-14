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

export default class MoneyReceiptStatistics implements IModel {
    private verification: number|null = null;
    public getVerification(): number|null {
        return this.verification;
    }
    public setVerification(verification: number|null) {
        this.verification = verification;
        return this;
    }
    public withVerification(verification: number|null): this {
        this.verification = verification;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): MoneyReceiptStatistics|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new MoneyReceiptStatistics()
            .withVerification(data["verification"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "verification": this.getVerification(),
        };
    }
}
