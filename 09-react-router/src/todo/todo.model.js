

export default class TodoTask {
    constructor(json) {
        this.id = json.id || 0;
        this.title = json.title || '';
        this.description = json.description || '';
    }
}