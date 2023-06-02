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
    private postByRoom: ChatNamespacePostByRoomDistribution|null = null;
    private postByUser: ChatNamespacePostByUserDistribution|null = null;
    private postByCategory: ChatNamespacePostByCategoryDistribution|null = null;
    public getPostByRoom(): ChatNamespacePostByRoomDistribution|null {
        return this.postByRoom;
    }
    public setPostByRoom(postByRoom: ChatNamespacePostByRoomDistribution|null) {
        this.postByRoom = postByRoom;
        return this;
    }
    public withPostByRoom(postByRoom: ChatNamespacePostByRoomDistribution|null): this {
        this.postByRoom = postByRoom;
        return this;
    }
    public getPostByUser(): ChatNamespacePostByUserDistribution|null {
        return this.postByUser;
    }
    public setPostByUser(postByUser: ChatNamespacePostByUserDistribution|null) {
        this.postByUser = postByUser;
        return this;
    }
    public withPostByUser(postByUser: ChatNamespacePostByUserDistribution|null): this {
        this.postByUser = postByUser;
        return this;
    }
    public getPostByCategory(): ChatNamespacePostByCategoryDistribution|null {
        return this.postByCategory;
    }
    public setPostByCategory(postByCategory: ChatNamespacePostByCategoryDistribution|null) {
        this.postByCategory = postByCategory;
        return this;
    }
    public withPostByCategory(postByCategory: ChatNamespacePostByCategoryDistribution|null): this {
        this.postByCategory = postByCategory;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ChatNamespaceDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ChatNamespaceDistributions()
            .withPostByRoom(ChatNamespacePostByRoomDistribution.fromDict(data["postByRoom"]))
            .withPostByUser(ChatNamespacePostByUserDistribution.fromDict(data["postByUser"]))
            .withPostByCategory(ChatNamespacePostByCategoryDistribution.fromDict(data["postByCategory"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "postByRoom": this.getPostByRoom()?.toDict(),
            "postByUser": this.getPostByUser()?.toDict(),
            "postByCategory": this.getPostByCategory()?.toDict(),
        };
    }
}
