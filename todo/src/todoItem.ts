export class TodoItem {
    public constructor(public id: number, public task: string, public complete: boolean = false) {}

    public toString(): string {
        return `Id: ${this.id}, Task: ${this.task}, Complete: ${this.complete ? "Done" : "In progress"}`;
    }

    public printDetails() : void {
        console.log(`${this.id}\t${this.task} ${this.complete ? "\t(complete)": ""}`);
    }
}
