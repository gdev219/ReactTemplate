export function dfsSearch<T extends object>(node: Array<T> | T, predicate: (item: T) => boolean): T | null {
  if (!Array.isArray(node) && predicate(node)) {
    return node;
  }
  if ('children' in node) {
    for (const child of node.children as Array<T>) {
      const result = dfsSearch(child, predicate);
      if (result) {
        return result;
      }
    }
  }

  return null;
}

export function searchTree<T extends object>(sourceArr: Array<T>, predicate: (item: T) => boolean) {
  const dfsResults = [];
  for (const node of sourceArr) {
    const result = dfsSearch(node, predicate);
    if (result) {
      dfsResults.push(result);
    }
  }
  return dfsResults;
}
