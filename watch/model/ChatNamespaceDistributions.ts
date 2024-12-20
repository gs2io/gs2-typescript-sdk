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
import ChatNamespacePostByRoomDistributionStatistics from './ChatNamespacePostByRoomDistributionStatistics';
import ChatNamespacePostByRoomDistributionSegment from './ChatNamespacePostByRoomDistributionSegment';
import ChatNamespacePostByRoomDistribution from './ChatNamespacePostByRoomDistribution';
import ChatNamespacePostByUserDistributionStatistics from './ChatNamespacePostByUserDistributionStatistics';
import ChatNamespacePostByUserDistributionSegment from './ChatNamespacePostByUserDistributionSegment';
import ChatNamespacePostByUserDistribution from './ChatNamespacePostByUserDistribution';
import ChatNamespacePostByCategoryDistributionStatistics from './ChatNamespacePostByCategoryDistributionStatistics';
import ChatNamespacePostByCategoryDistributionSegment from './ChatNamespacePostByCategoryDistributionSegment';
import ChatNamespacePostByCategoryDistribution from './ChatNamespacePostByCategoryDistribution';

export default class ChatNamespaceDistributions implements IModel {
    private postByRoom: Gs2Watch.ChatNamespacePostByRoomDistribution|null = null;
    private postByUser: Gs2Watch.ChatNamespacePostByUserDistribution|null = null;
    private postByCategory: Gs2Watch.ChatNamespacePostByCategoryDistribution|null = null;
    public getPostByRoom(): Gs2Watch.ChatNamespacePostByRoomDistribution|null {
        return this.postByRoom;
    }
    public setPostByRoom(postByRoom: Gs2Watch.ChatNamespacePostByRoomDistribution|null) {
        this.postByRoom = postByRoom;
        return this;
    }
    public withPostByRoom(postByRoom: Gs2Watch.ChatNamespacePostByRoomDistribution|null): this {
        this.postByRoom = postByRoom;
        return this;
    }
    public getPostByUser(): Gs2Watch.ChatNamespacePostByUserDistribution|null {
        return this.postByUser;
    }
    public setPostByUser(postByUser: Gs2Watch.ChatNamespacePostByUserDistribution|null) {
        this.postByUser = postByUser;
        return this;
    }
    public withPostByUser(postByUser: Gs2Watch.ChatNamespacePostByUserDistribution|null): this {
        this.postByUser = postByUser;
        return this;
    }
    public getPostByCategory(): Gs2Watch.ChatNamespacePostByCategoryDistribution|null {
        return this.postByCategory;
    }
    public setPostByCategory(postByCategory: Gs2Watch.ChatNamespacePostByCategoryDistribution|null) {
        this.postByCategory = postByCategory;
        return this;
    }
    public withPostByCategory(postByCategory: Gs2Watch.ChatNamespacePostByCategoryDistribution|null): this {
        this.postByCategory = postByCategory;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ChatNamespaceDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ChatNamespaceDistributions()
            .withPostByRoom(Gs2Watch.ChatNamespacePostByRoomDistribution.fromDict(data["postByRoom"]))
            .withPostByUser(Gs2Watch.ChatNamespacePostByUserDistribution.fromDict(data["postByUser"]))
            .withPostByCategory(Gs2Watch.ChatNamespacePostByCategoryDistribution.fromDict(data["postByCategory"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "postByRoom": this.getPostByRoom()?.toDict(),
            "postByUser": this.getPostByUser()?.toDict(),
            "postByCategory": this.getPostByCategory()?.toDict(),
        };
    }
}
