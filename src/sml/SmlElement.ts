import SmlNamedNode from "./SmlNamedNode";
import SmlNode from "./SmlNode";

export default class SmlElement extends SmlNamedNode {

    constructor(name: string) {
        super(name);
    }

    public add(node: SmlNode): void {
        // ...
    }

}
