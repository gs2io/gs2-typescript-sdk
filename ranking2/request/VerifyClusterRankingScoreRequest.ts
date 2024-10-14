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

import IRequest from '../../core/interface/IRequest';

import * as Gs2Ranking2 from '../model'

export default class VerifyClusterRankingScoreRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private accessToken: string|null = null;
    private rankingName: string|null = null;
    private clusterName: string|null = null;
    private verifyType: string|null = null;
    private season: number|null = null;
    private score: number|null = null;
    private multiplyValueSpecifyingQuantity: boolean|null = null;
    private duplicationAvoider: string|null = null;

    public getRequestId(): string|null {
        return this.requestId;
    }

    public setRequestId(requestId: string|null) {
        this.requestId = requestId;
        return this;
    }

    public withRequestId(requestId: string|null): this {
        this.requestId = requestId;
        return this;
    }

    public getContextStack(): string|null {
        return this.contextStack;
    }

    public setContextStack(contextStack: string|null) {
        this.contextStack = contextStack;
        return this;
    }

    public withContextStack(contextStack: string|null): this {
        this.contextStack = contextStack;
        return this;
    }
    public getNamespaceName(): string|null {
        return this.namespaceName;
    }
    public setNamespaceName(namespaceName: string|null) {
        this.namespaceName = namespaceName;
        return this;
    }
    public withNamespaceName(namespaceName: string|null): this {
        this.namespaceName = namespaceName;
        return this;
    }
    public getAccessToken(): string|null {
        return this.accessToken;
    }
    public setAccessToken(accessToken: string|null) {
        this.accessToken = accessToken;
        return this;
    }
    public withAccessToken(accessToken: string|null): this {
        this.accessToken = accessToken;
        return this;
    }
    public getRankingName(): string|null {
        return this.rankingName;
    }
    public setRankingName(rankingName: string|null) {
        this.rankingName = rankingName;
        return this;
    }
    public withRankingName(rankingName: string|null): this {
        this.rankingName = rankingName;
        return this;
    }
    public getClusterName(): string|null {
        return this.clusterName;
    }
    public setClusterName(clusterName: string|null) {
        this.clusterName = clusterName;
        return this;
    }
    public withClusterName(clusterName: string|null): this {
        this.clusterName = clusterName;
        return this;
    }
    public getVerifyType(): string|null {
        return this.verifyType;
    }
    public setVerifyType(verifyType: string|null) {
        this.verifyType = verifyType;
        return this;
    }
    public withVerifyType(verifyType: string|null): this {
        this.verifyType = verifyType;
        return this;
    }
    public getSeason(): number|null {
        return this.season;
    }
    public setSeason(season: number|null) {
        this.season = season;
        return this;
    }
    public withSeason(season: number|null): this {
        this.season = season;
        return this;
    }
    public getScore(): number|null {
        return this.score;
    }
    public setScore(score: number|null) {
        this.score = score;
        return this;
    }
    public withScore(score: number|null): this {
        this.score = score;
        return this;
    }
    public getMultiplyValueSpecifyingQuantity(): boolean|null {
        return this.multiplyValueSpecifyingQuantity;
    }
    public setMultiplyValueSpecifyingQuantity(multiplyValueSpecifyingQuantity: boolean|null) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    }
    public withMultiplyValueSpecifyingQuantity(multiplyValueSpecifyingQuantity: boolean|null): this {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    }

    public getDuplicationAvoider(): string|null {
        return this.duplicationAvoider;
    }

    public setDuplicationAvoider(duplicationAvoider: string|null) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    }

    public withDuplicationAvoider(duplicationAvoider: string|null): this {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): VerifyClusterRankingScoreRequest {
        return new VerifyClusterRankingScoreRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withRankingName(data["rankingName"])
            .withClusterName(data["clusterName"])
            .withVerifyType(data["verifyType"])
            .withSeason(data["season"])
            .withScore(data["score"])
            .withMultiplyValueSpecifyingQuantity(data["multiplyValueSpecifyingQuantity"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "rankingName": this.getRankingName(),
            "clusterName": this.getClusterName(),
            "verifyType": this.getVerifyType(),
            "season": this.getSeason(),
            "score": this.getScore(),
            "multiplyValueSpecifyingQuantity": this.getMultiplyValueSpecifyingQuantity(),
        };
    }
}