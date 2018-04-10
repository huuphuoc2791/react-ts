export class Base {
    static createFromModel<T>(this: { new(): T }, model: any): T {
        const newModel = new this();
        Object.assign(newModel, model);
        return newModel;
    }
}
