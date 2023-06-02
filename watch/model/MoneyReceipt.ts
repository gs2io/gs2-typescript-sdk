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
import MoneyReceiptStatistics from './MoneyReceiptStatistics';
import MoneyReceiptVerificationByUserDistributionStatistics from './MoneyReceiptVerificationByUserDistributionStatistics';
import MoneyReceiptVerificationByUserDistributionSegment from './MoneyReceiptVerificationByUserDistributionSegment';
import MoneyReceiptVerificationByUserDistribution from './MoneyReceiptVerificationByUserDistribution';
import MoneyReceiptDistributions from './MoneyReceiptDistributions';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:money:namespace:{namespaceName}:receipt:{contentsId}";

export default class MoneyReceipt implements IModel {
    private receiptId: string|null = null;
    private contentsId: string|null = null;
    private statistics: MoneyReceiptStatistics|null = null;
    private distributions: MoneyReceiptDistributions|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{contentsId}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getOwnerId(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{contentsId}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getYear(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '(.*)')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{contentsId}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getMonth(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '(.*)')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{contentsId}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getDay(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{contentsId}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getNamespaceName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{contentsId}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getContentsId(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{contentsId}', '(.*)')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static isValid(grn: string): boolean {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getYear(grn) == null || this.getYear(grn) === '') {
            return false;
        }
        if (this.getMonth(grn) == null || this.getMonth(grn) === '') {
            return false;
        }
        if (this.getDay(grn) == null || this.getDay(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getContentsId(grn) == null || this.getContentsId(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        year: string|null,
        month: string|null,
        day: string|null,
        namespaceName: string|null,
        contentsId: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{year}', year ?? '')
            .replace('{month}', month ?? '')
            .replace('{day}', day ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{contentsId}', contentsId ?? '');
    }
    public getReceiptId(): string|null {
        return this.receiptId;
    }
    public setReceiptId(receiptId: string|null) {
        this.receiptId = receiptId;
        return this;
    }
    public withReceiptId(receiptId: string|null): this {
        this.receiptId = receiptId;
        return this;
    }
    public getContentsId(): string|null {
        return this.contentsId;
    }
    public setContentsId(contentsId: string|null) {
        this.contentsId = contentsId;
        return this;
    }
    public withContentsId(contentsId: string|null): this {
        this.contentsId = contentsId;
        return this;
    }
    public getStatistics(): MoneyReceiptStatistics|null {
        return this.statistics;
    }
    public setStatistics(statistics: MoneyReceiptStatistics|null) {
        this.statistics = statistics;
        return this;
    }
    public withStatistics(statistics: MoneyReceiptStatistics|null): this {
        this.statistics = statistics;
        return this;
    }
    public getDistributions(): MoneyReceiptDistributions|null {
        return this.distributions;
    }
    public setDistributions(distributions: MoneyReceiptDistributions|null) {
        this.distributions = distributions;
        return this;
    }
    public withDistributions(distributions: MoneyReceiptDistributions|null): this {
        this.distributions = distributions;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): MoneyReceipt|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new MoneyReceipt()
            .withReceiptId(data["receiptId"])
            .withContentsId(data["contentsId"])
            .withStatistics(MoneyReceiptStatistics.fromDict(data["statistics"]))
            .withDistributions(MoneyReceiptDistributions.fromDict(data["distributions"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "receiptId": this.getReceiptId(),
            "contentsId": this.getContentsId(),
            "statistics": this.getStatistics()?.toDict(),
            "distributions": this.getDistributions()?.toDict(),
        };
    }
}
