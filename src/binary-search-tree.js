const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.data = null;
    this.left = null;
    this.right = null;
  }

  root() {
    return this.data === null ? null : this;
  }

  add(data) {
    if (this.data === null) {
      this.data = data;
    } else {
      if (data < this.data) {
        if (this.left === null) this.left = new BinarySearchTree();
        this.left.add(data);
      }
      if (data > this.data) {
        if (this.right === null) this.right = new BinarySearchTree();
        this.right.add(data);
      }
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    if (this.data === null) return null;
    if (data === this.data) return this;
    if (data < this.data && this.left) return this.left.find(data);
    if (data > this.data && this.right) return this.right.find(data);
    return null;
  }

  remove(data) {
    if (data < this.data) {
      this.left = this.left.remove(data);
      return this;
    }
    if (data > this.data) {
      this.right = this.right.remove(data);
      return this;
    }
    if (data === this.data) {
      if (!this.left && !this.right) return null;
      if (!this.right) return this.left;
      const min = this.right.min();
      this.data = min;
      this.right = this.right.remove(min);
      return this;
    }
  }

  min() {
    if (this.data === null) return null;
    if (!this.left) return this.data;
    return this.left.min();
  }

  max() {
    if (this.data === null) return null;
    if (!this.right) return this.data;
    return this.right.max();
  }
}

module.exports = {
  BinarySearchTree,
};
