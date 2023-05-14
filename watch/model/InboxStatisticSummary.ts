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

export default class InboxStatisticSummary implements IModel {
    private totalReceived: number|null = null;
    private totalOpened: number|null = null;
    private openRate: number|null = null;
    public getTotalReceived(): number|null {
        return this.totalReceived;
    }
    public setTotalReceived(totalReceived: number|null) {
        this.totalReceived = totalReceived;
        return this;
    }
    public withTotalReceived(totalReceived: number|null): this {
        this.totalReceived = totalReceived;
        return this;
    }
    public getTotalOpened(): number|null {
        return this.totalOpened;
    }
    public setTotalOpened(totalOpened: number|null) {
        this.totalOpened = totalOpened;
        return this;
    }
    public withTotalOpened(totalOpened: number|null): this {
        this.totalOpened = totalOpened;
        return this;
    }
    public getOpenRate(): number|null {
        return this.openRate;
    }
    public setOpenRate(openRate: number|null) {
        this.openRate = openRate;
        return this;
    }
    public withOpenRate(openRate: number|null): this {
        this.openRate = openRate;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): InboxStatisticSummary|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new InboxStatisticSummary()
            .withTotalReceived(data["totalReceived"])
            .withTotalOpened(data["totalOpened"])
            .withOpenRate(data["openRate"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "totalReceived": this.getTotalReceived(),
            "totalOpened": this.getTotalOpened(),
            "openRate": this.getOpenRate(),
        };
    }
}
