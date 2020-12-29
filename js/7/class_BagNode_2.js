class BagNode {
    constructor(value) {
        this.value = value;
        this.descendents = [];
        this.parent = null;
    }

    setdescendents(arr) {
        // eg ["1 bright white", "2 muted yellow"]
        for (const item of arr) {
            DEBUG && console.log("setdescendents called. Item is");
            DEBUG && console.log(item);
            // eg 1 bright white
            
            if (item == "no other") continue;
            let child = item.match(/(?<quantity>\d+) (?<bagname>[\w\s]+)/).groups
            DEBUG && console.log("in class, child:");
            DEBUG && console.log(child);
            this.descendents.push({
                "quantity":parseInt(child.quantity),
                "name": child.bagname
            });
        }
    }

    countBagsInside() {
        // sum the descendents 
        // sum the bags inside the descendents
        let bagsinside = 0; 
        for (const child of this.descendents) {
            console.log("called countBagsInside");
            console.log("in "+this.value+" working with child");
            /**
             * for each child
             * multiply the number of children x the number contained in that child
             */
            console.log(child);
            console.log(child.name + " adding " + child.quantity);
            bagsinside += child.quantity;

            let childbagsinside = luggage[child.name].countBagsInside();
            console.log("each " + child.name + " has " + childbagsinside +" bags inside");
            bagsinside += child.quantity * childbagsinside;
            // console.log(
            //     "in "+ this.value
            //     + " adding " + childbagsinside
            //     + " from " + child.name);
            // bagsinside += childbagsinside;
        }
        console.log(
            "in " + this.value
            + " returning " + bagsinside
        );
        return bagsinside;
    }

    bagContains(color) {
        // console.log("called bagContains. Bag is ");
        // console.log(this.value);
        // console.log("descendents");
        // console.log(this.descendents);
        for (const child of this.descendents) {
            if (child.name == color) {
                return true;
            } else {
                if (luggage[child.name].bagContains(color)) {
                    return true;
                }
            }
        }
        return false;
}

}