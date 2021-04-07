// Vamos a construir un árbol de éste tipo (con n hijos, no binario)

/*const tree = {
  value: "root",
  children: [
    {
      value: "child_1",
      children: [
        {
          value: "child_1_1",
          children: [
            {
              value: "child_1_1_1"
            }
          ]
        },
      ]
    },
    {
      value: "child_2"
    },
    {
      value: "child_3",
    }
  ]
};*/

class TreeNode<S> {
  value: S;
  children?: Array<TreeNode<S>>;

  constructor(value: S) {
    this.value = value;
  }

  addChild(value: S) {
    let newChild = new TreeNode(value);

    this.children ?? (this.children = []);
    this.children.push(newChild);

    return newChild;
  }

  isNode() {
    return this.hasOwnProperty('children');
  }

  isLeaf() {
    return !this.isNode();
  }

  traverseTree() {
    let groupName = `${this.value} (${this.isNode() ? "Node" : "Leaf"})`;
    console.group(groupName);

    console.table(this);


    if(this.isNode()) {
      console.log("Number of childrens: ", this.children.length);
      this.children.forEach(element => {
        element.traverseTree();
      });
    }

    console.groupEnd();
  }
}

let rootNode = new TreeNode<string>("root");

let child_1 = rootNode.addChild("child_1");
let child_2 = rootNode.addChild("child_2");
let child_3 = rootNode.addChild("child_3");

let child_1_1 = child_1.addChild("child_1_1");
let child_1_1_1 = child_1_1.addChild("child_1_1_1");
let child_1_1_2 = child_1_1.addChild("child_1_1_2");

console.log(rootNode);
rootNode.traverseTree();

//console.log(tree);
