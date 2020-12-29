class BagNode {
    constructor(value) {
        this.value = value;
        this.descendents = [];
        this.parent = null;
    }

    bagContains(color) {
        if (this.descendents.includes(color)) {
            return true;
        } else {
            // check descendents
            for (const child of this.descendents) {
                if (luggage[child].bagContains(color)) {
                    return true;
                }
            }
        }
        return false;
    }
}