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
import InboxNamespaceSendByUserDistributionStatistics from './InboxNamespaceSendByUserDistributionStatistics';
import InboxNamespaceSendByUserDistributionSegment from './InboxNamespaceSendByUserDistributionSegment';
import InboxNamespaceSendByUserDistribution from './InboxNamespaceSendByUserDistribution';
import InboxNamespaceReadElapsedMinutesDistributionStatistics from './InboxNamespaceReadElapsedMinutesDistributionStatistics';
import InboxNamespaceReadElapsedMinutesDistributionSegment from './InboxNamespaceReadElapsedMinutesDistributionSegment';
import InboxNamespaceReadElapsedMinutesDistribution from './InboxNamespaceReadElapsedMinutesDistribution';

export default class InboxNamespaceDistributions implements IModel {
    private sendByUser: Gs2Watch.InboxNamespaceSendByUserDistribution|null = null;
    private readElapsedMinutes: Gs2Watch.InboxNamespaceReadElapsedMinutesDistribution|null = null;
    public getSendByUser(): Gs2Watch.InboxNamespaceSendByUserDistribution|null {
        return this.sendByUser;
    }
    public setSendByUser(sendByUser: Gs2Watch.InboxNamespaceSendByUserDistribution|null) {
        this.sendByUser = sendByUser;
        return this;
    }
    public withSendByUser(sendByUser: Gs2Watch.InboxNamespaceSendByUserDistribution|null): this {
        this.sendByUser = sendByUser;
        return this;
    }
    public getReadElapsedMinutes(): Gs2Watch.InboxNamespaceReadElapsedMinutesDistribution|null {
        return this.readElapsedMinutes;
    }
    public setReadElapsedMinutes(readElapsedMinutes: Gs2Watch.InboxNamespaceReadElapsedMinutesDistribution|null) {
        this.readElapsedMinutes = readElapsedMinutes;
        return this;
    }
    public withReadElapsedMinutes(readElapsedMinutes: Gs2Watch.InboxNamespaceReadElapsedMinutesDistribution|null): this {
        this.readElapsedMinutes = readElapsedMinutes;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): InboxNamespaceDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new InboxNamespaceDistributions()
            .withSendByUser(Gs2Watch.InboxNamespaceSendByUserDistribution.fromDict(data["sendByUser"]))
            .withReadElapsedMinutes(Gs2Watch.InboxNamespaceReadElapsedMinutesDistribution.fromDict(data["readElapsedMinutes"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "sendByUser": this.getSendByUser()?.toDict(),
            "readElapsedMinutes": this.getReadElapsedMinutes()?.toDict(),
        };
    }
}
