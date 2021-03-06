
export function use(model, callback) {
  return selectionUse(this, function(node, i, j) {
    callback.call(model, node.__data__, i, j);
  });
}

function selectionUse(groups, callback) {
  for (var j = 0, m = groups.length; j < m; j++) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; i++) {
      if (node = group[i]) {
        callback(node, i, j);
      }
    }
  }
  return groups;
}
