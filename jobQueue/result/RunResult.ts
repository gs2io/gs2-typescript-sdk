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

import IResult from '../../core/interface/IResult';
import * as Gs2JobQueue from '../model'

export default class RunResult implements IResult {
    private item: Gs2JobQueue.Job|null = null;
    private result: Gs2JobQueue.JobResultBody|null = null;
    private isLastJob: boolean|null = null;

    public getItem(): Gs2JobQueue.Job|null {
        return this.item;
    }

    public setItem(item: Gs2JobQueue.Job|null) {
        this.item = item;
        return this;
    }

    public withItem(item: Gs2JobQueue.Job|null): this {
        this.item = item;
        return this;
    }

    public getResult(): Gs2JobQueue.JobResultBody|null {
        return this.result;
    }

    public setResult(result: Gs2JobQueue.JobResultBody|null) {
        this.result = result;
        return this;
    }

    public withResult(result: Gs2JobQueue.JobResultBody|null): this {
        this.result = result;
        return this;
    }

    public getIsLastJob(): boolean|null {
        return this.isLastJob;
    }

    public setIsLastJob(isLastJob: boolean|null) {
        this.isLastJob = isLastJob;
        return this;
    }

    public withIsLastJob(isLastJob: boolean|null): this {
        this.isLastJob = isLastJob;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): RunResult {
        return new RunResult()
            .withItem(Gs2JobQueue.Job.fromDict(data["item"]))
            .withResult(Gs2JobQueue.JobResultBody.fromDict(data["result"]))
            .withIsLastJob(data["isLastJob"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "item": this.getItem()?.toDict(),
            "result": this.getResult()?.toDict(),
            "isLastJob": this.getIsLastJob(),
        };
    }
}
