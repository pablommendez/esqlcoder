class Mapper {
  constructor() {}

  mapLeftWithRight(leftside, rightside) {
    return `SET ${leftside} = ${rightside};`;
  }

  castDataType(node, type) {
    return `CAST(${node} AS ${type.toUpperCase()} DEFAULT NULL)`;
  }

  getLeftSide(node) {
    return `refLeft.${node}`;
  }

  getRightSide(node) {
    return `refRight.${node}`;
  }
  makeSentence(leftNode, rigthNode) {
    let left = this.getLeftSide(leftNode);
    let right = this.getRightSide(rigthNode);
    return this.mapLeftWithRight(left, right);
  }

  makeCastedSentence(leftNode, rigthNode, type) {
    let left = this.getLeftSide(leftNode);
    let right = this.getRightSide(rigthNode);
    right = this.castDataType(right, type);
    return this.mapLeftWithRight(left, right);
  }

  map({ ESB, Backend, Type }) {
    return Type === 'string'
      ? this.makeSentence(ESB, Backend)
      : this.makeCastedSentence(ESB, Backend, Type);
  }
}

module.exports = {
  Mapper,
};
