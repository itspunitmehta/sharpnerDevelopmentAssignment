class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    insert(data){
        var newNode = new Node(data);

        if(this.root===null)
        this.root = newNode;

        else
        this.inserNode(this.root, newNode)
    }
    inserNode(rootNode, newNode){
        if(newNode.data<rootNode.data){
            if(rootNode.left===null)
            rootNode.left = newNode;
            
            else
            this.inserNode(rootNode.left, newNode)
        }else{
            if(rootNode.right===null)
            rootNode.right = newNode;

            else
            this.inserNode(rootNode.right, newNode)
        }
    }
    getRootNode(){
        return this.root;
    }
    searchNode(rootNode,data){
        if(rootNode===null)
        return null;

        else if(data<rootNode.data)
        return this.searchNode(rootNode.left,data)

        else if(data>rootNode.data)
        return this.searchNode(rootNode.right,data)

        else 
        return rootNode;
    }
    preorder(node)
    {
        if(node !== null)
        {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }
    preOrderIt(node){
        if (node === null){
            return;
        }
        let nodeStack = [];

        let curr = node;
        while(curr!==null || nodeStack.length>0){
            while(curr!=null){
                document.write(curr.data + " ");

                if(curr.right!==null)
                nodeStack.push(curr.right);

                curr = curr.left;
            }
            if(nodeStack.length>0){
                curr = nodeStack.pop();
            }
        }
    }
        
}

var bstNode = new BinarySearchTree();

bstNode.insert(25);
bstNode.insert(23);
bstNode.insert(5);
bstNode.insert(30);
bstNode.insert(90);
bstNode.insert(10);
bstNode.insert(29);
bstNode.insert(19);
var root = bstNode.getRootNode();
console.log(root);

if(bstNode.searchNode(root,10)){
    console.log("true/found")
}else{
    console.log("false/not found")
}

bstNode.preOrderIt(root);
