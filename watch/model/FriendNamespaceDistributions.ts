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
import FriendNamespaceAcceptByUserDistributionStatistics from './FriendNamespaceAcceptByUserDistributionStatistics';
import FriendNamespaceAcceptByUserDistributionSegment from './FriendNamespaceAcceptByUserDistributionSegment';
import FriendNamespaceAcceptByUserDistribution from './FriendNamespaceAcceptByUserDistribution';
import FriendNamespaceRejectByUserDistributionStatistics from './FriendNamespaceRejectByUserDistributionStatistics';
import FriendNamespaceRejectByUserDistributionSegment from './FriendNamespaceRejectByUserDistributionSegment';
import FriendNamespaceRejectByUserDistribution from './FriendNamespaceRejectByUserDistribution';
import FriendNamespaceSendRequestByUserDistributionStatistics from './FriendNamespaceSendRequestByUserDistributionStatistics';
import FriendNamespaceSendRequestByUserDistributionSegment from './FriendNamespaceSendRequestByUserDistributionSegment';
import FriendNamespaceSendRequestByUserDistribution from './FriendNamespaceSendRequestByUserDistribution';
import FriendNamespaceNewFollowByUserDistributionStatistics from './FriendNamespaceNewFollowByUserDistributionStatistics';
import FriendNamespaceNewFollowByUserDistributionSegment from './FriendNamespaceNewFollowByUserDistributionSegment';
import FriendNamespaceNewFollowByUserDistribution from './FriendNamespaceNewFollowByUserDistribution';

export default class FriendNamespaceDistributions implements IModel {
    private acceptByUser: Gs2Watch.FriendNamespaceAcceptByUserDistribution|null = null;
    private rejectByUser: Gs2Watch.FriendNamespaceRejectByUserDistribution|null = null;
    private sendRequestByUser: Gs2Watch.FriendNamespaceSendRequestByUserDistribution|null = null;
    private newFollowByUser: Gs2Watch.FriendNamespaceNewFollowByUserDistribution|null = null;
    public getAcceptByUser(): Gs2Watch.FriendNamespaceAcceptByUserDistribution|null {
        return this.acceptByUser;
    }
    public setAcceptByUser(acceptByUser: Gs2Watch.FriendNamespaceAcceptByUserDistribution|null) {
        this.acceptByUser = acceptByUser;
        return this;
    }
    public withAcceptByUser(acceptByUser: Gs2Watch.FriendNamespaceAcceptByUserDistribution|null): this {
        this.acceptByUser = acceptByUser;
        return this;
    }
    public getRejectByUser(): Gs2Watch.FriendNamespaceRejectByUserDistribution|null {
        return this.rejectByUser;
    }
    public setRejectByUser(rejectByUser: Gs2Watch.FriendNamespaceRejectByUserDistribution|null) {
        this.rejectByUser = rejectByUser;
        return this;
    }
    public withRejectByUser(rejectByUser: Gs2Watch.FriendNamespaceRejectByUserDistribution|null): this {
        this.rejectByUser = rejectByUser;
        return this;
    }
    public getSendRequestByUser(): Gs2Watch.FriendNamespaceSendRequestByUserDistribution|null {
        return this.sendRequestByUser;
    }
    public setSendRequestByUser(sendRequestByUser: Gs2Watch.FriendNamespaceSendRequestByUserDistribution|null) {
        this.sendRequestByUser = sendRequestByUser;
        return this;
    }
    public withSendRequestByUser(sendRequestByUser: Gs2Watch.FriendNamespaceSendRequestByUserDistribution|null): this {
        this.sendRequestByUser = sendRequestByUser;
        return this;
    }
    public getNewFollowByUser(): Gs2Watch.FriendNamespaceNewFollowByUserDistribution|null {
        return this.newFollowByUser;
    }
    public setNewFollowByUser(newFollowByUser: Gs2Watch.FriendNamespaceNewFollowByUserDistribution|null) {
        this.newFollowByUser = newFollowByUser;
        return this;
    }
    public withNewFollowByUser(newFollowByUser: Gs2Watch.FriendNamespaceNewFollowByUserDistribution|null): this {
        this.newFollowByUser = newFollowByUser;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): FriendNamespaceDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new FriendNamespaceDistributions()
            .withAcceptByUser(Gs2Watch.FriendNamespaceAcceptByUserDistribution.fromDict(data["acceptByUser"]))
            .withRejectByUser(Gs2Watch.FriendNamespaceRejectByUserDistribution.fromDict(data["rejectByUser"]))
            .withSendRequestByUser(Gs2Watch.FriendNamespaceSendRequestByUserDistribution.fromDict(data["sendRequestByUser"]))
            .withNewFollowByUser(Gs2Watch.FriendNamespaceNewFollowByUserDistribution.fromDict(data["newFollowByUser"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "acceptByUser": this.getAcceptByUser()?.toDict(),
            "rejectByUser": this.getRejectByUser()?.toDict(),
            "sendRequestByUser": this.getSendRequestByUser()?.toDict(),
            "newFollowByUser": this.getNewFollowByUser()?.toDict(),
        };
    }
}
