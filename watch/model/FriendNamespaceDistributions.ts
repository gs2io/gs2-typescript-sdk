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
    private acceptByUser: FriendNamespaceAcceptByUserDistribution|null = null;
    private rejectByUser: FriendNamespaceRejectByUserDistribution|null = null;
    private sendRequestByUser: FriendNamespaceSendRequestByUserDistribution|null = null;
    private newFollowByUser: FriendNamespaceNewFollowByUserDistribution|null = null;
    public getAcceptByUser(): FriendNamespaceAcceptByUserDistribution|null {
        return this.acceptByUser;
    }
    public setAcceptByUser(acceptByUser: FriendNamespaceAcceptByUserDistribution|null) {
        this.acceptByUser = acceptByUser;
        return this;
    }
    public withAcceptByUser(acceptByUser: FriendNamespaceAcceptByUserDistribution|null): this {
        this.acceptByUser = acceptByUser;
        return this;
    }
    public getRejectByUser(): FriendNamespaceRejectByUserDistribution|null {
        return this.rejectByUser;
    }
    public setRejectByUser(rejectByUser: FriendNamespaceRejectByUserDistribution|null) {
        this.rejectByUser = rejectByUser;
        return this;
    }
    public withRejectByUser(rejectByUser: FriendNamespaceRejectByUserDistribution|null): this {
        this.rejectByUser = rejectByUser;
        return this;
    }
    public getSendRequestByUser(): FriendNamespaceSendRequestByUserDistribution|null {
        return this.sendRequestByUser;
    }
    public setSendRequestByUser(sendRequestByUser: FriendNamespaceSendRequestByUserDistribution|null) {
        this.sendRequestByUser = sendRequestByUser;
        return this;
    }
    public withSendRequestByUser(sendRequestByUser: FriendNamespaceSendRequestByUserDistribution|null): this {
        this.sendRequestByUser = sendRequestByUser;
        return this;
    }
    public getNewFollowByUser(): FriendNamespaceNewFollowByUserDistribution|null {
        return this.newFollowByUser;
    }
    public setNewFollowByUser(newFollowByUser: FriendNamespaceNewFollowByUserDistribution|null) {
        this.newFollowByUser = newFollowByUser;
        return this;
    }
    public withNewFollowByUser(newFollowByUser: FriendNamespaceNewFollowByUserDistribution|null): this {
        this.newFollowByUser = newFollowByUser;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): FriendNamespaceDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new FriendNamespaceDistributions()
            .withAcceptByUser(FriendNamespaceAcceptByUserDistribution.fromDict(data["acceptByUser"]))
            .withRejectByUser(FriendNamespaceRejectByUserDistribution.fromDict(data["rejectByUser"]))
            .withSendRequestByUser(FriendNamespaceSendRequestByUserDistribution.fromDict(data["sendRequestByUser"]))
            .withNewFollowByUser(FriendNamespaceNewFollowByUserDistribution.fromDict(data["newFollowByUser"]));
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
