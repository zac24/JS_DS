
class Cell {
    constructor(address, formulaAST) {
        this.address = address
        this.formulaAST = formulaAST
    }
}

class NumberNode {
    constructor(value) {
        this.nodeType = "number"
        this.value = value
    }
}

class FuncNode {
    constructor(funcName, funcArgs) {
        this.nodeType = "func"
        this.funcName = funcName
        this.funcArgs = funcArgs
    }
}

class CellRefNode {
    constructor(address){
        this.nodeType = "ref"
        this.address = address
    }
}


function evaluateSpreadSheet(cells) {
    let visitedObjects = {}
    for(var cell of cells){
        visitedObjects[cell.address] = "visited"
        if(cell.formulaAST !== null){
           const containsCyle =  detectNodeType(cell.formulaAST, visitedObjects)
           if(containsCyle){ return false }
        }
    }
    return true
}

function detectNodeType(node, visitedObjects){
    if(node.nodeType === "func"){
        for (nodeObject of node.funcArgs){
            return detectNodeType(nodeObject, visitedObjects)
        }
    }else if(node.nodeType === "ref") {
        if(visitedObjects.hasOwnProperty(node.address)){
            return true
        }
    }else {
        console.log('Number node', node)
    }
}

let input = [
    {address: 'A1', formulaAST: new NumberNode(2)},
    {address: 'A2', formulaAST: new NumberNode(5)}, 
]

let input1 = [
    {address: 'A1', formulaAST: new CellRefNode('A2')},
    {address: 'A2', formulaAST: new CellRefNode('A1')}, 
]

let input2 = [
    {address: 'A1', formulaAST: new NumberNode(2)},
    {address: 'A2', formulaAST: new NumberNode(5)}, 
    {address: 'A3', formulaAST: new CellRefNode('A4')},
    {address: 'A4', formulaAST: new FuncNode('add', [new CellRefNode('A1'), new CellRefNode('A2'), new CellRefNode('A3')])}, 
]

console.log('The cycle detection =====>', evaluateSpreadSheet(input2))