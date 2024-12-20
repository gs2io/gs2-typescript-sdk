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

export default class InboxNamespaceStatistics implements IModel {
    private sent: number|null = null;
    private open: number|null = null;
    private openRate: number|null = null;
    public getSent(): number|null {
        return this.sent;
    }
    public setSent(sent: number|null) {
        this.sent = sent;
        return this;
    }
    public withSent(sent: number|null): this {
        this.sent = sent;
        return this;
    }
    public getOpen(): number|null {
        return this.open;
    }
    public setOpen(open: number|null) {
        this.open = open;
        return this;
    }
    public withOpen(open: number|null): this {
        this.open = open;
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

    public static fromDict(data: {[key: string]: any}): InboxNamespaceStatistics|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new InboxNamespaceStatistics()
            .withSent(data["sent"])
            .withOpen(data["open"])
            .withOpenRate(data["openRate"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "sent": this.getSent(),
            "open": this.getOpen(),
            "openRate": this.getOpenRate(),
        };
    }
}
