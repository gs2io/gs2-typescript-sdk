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

export default class Profile implements IModel {
    private profileId: string|null = null;
    private userId: string|null = null;
    private publicProfile: string|null = null;
    private followerProfile: string|null = null;
    private friendProfile: string|null = null;
    private createdAt: number|null = null;
    private updatedAt: number|null = null;

    public getProfileId(): string|null {
        return this.profileId;
    }

    public setProfileId(profileId: string|null) {
        this.profileId = profileId;
        return this;
    }

    public withProfileId(profileId: string|null): this {
        this.profileId = profileId;
        return this;
    }

    public getUserId(): string|null {
        return this.userId;
    }

    public setUserId(userId: string|null) {
        this.userId = userId;
        return this;
    }

    public withUserId(userId: string|null): this {
        this.userId = userId;
        return this;
    }

    public getPublicProfile(): string|null {
        return this.publicProfile;
    }

    public setPublicProfile(publicProfile: string|null) {
        this.publicProfile = publicProfile;
        return this;
    }

    public withPublicProfile(publicProfile: string|null): this {
        this.publicProfile = publicProfile;
        return this;
    }

    public getFollowerProfile(): string|null {
        return this.followerProfile;
    }

    public setFollowerProfile(followerProfile: string|null) {
        this.followerProfile = followerProfile;
        return this;
    }

    public withFollowerProfile(followerProfile: string|null): this {
        this.followerProfile = followerProfile;
        return this;
    }

    public getFriendProfile(): string|null {
        return this.friendProfile;
    }

    public setFriendProfile(friendProfile: string|null) {
        this.friendProfile = friendProfile;
        return this;
    }

    public withFriendProfile(friendProfile: string|null): this {
        this.friendProfile = friendProfile;
        return this;
    }

    public getCreatedAt(): number|null {
        return this.createdAt;
    }

    public setCreatedAt(createdAt: number|null) {
        this.createdAt = createdAt;
        return this;
    }

    public withCreatedAt(createdAt: number|null): this {
        this.createdAt = createdAt;
        return this;
    }

    public getUpdatedAt(): number|null {
        return this.updatedAt;
    }

    public setUpdatedAt(updatedAt: number|null) {
        this.updatedAt = updatedAt;
        return this;
    }

    public withUpdatedAt(updatedAt: number|null): this {
        this.updatedAt = updatedAt;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): Profile|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Profile()
            .withProfileId(data["profileId"])
            .withUserId(data["userId"])
            .withPublicProfile(data["publicProfile"])
            .withFollowerProfile(data["followerProfile"])
            .withFriendProfile(data["friendProfile"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "profileId": this.getProfileId(),
            "userId": this.getUserId(),
            "publicProfile": this.getPublicProfile(),
            "followerProfile": this.getFollowerProfile(),
            "friendProfile": this.getFriendProfile(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    }
}
