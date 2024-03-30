interface NormalizedStructure {
  tag: string;
  children: NormalizedStructure[];
}

export const normalizeStructure = (node: Element): NormalizedStructure => {
  const normalized: NormalizedStructure = {
    tag: node.tagName.toLowerCase(),
    children: [],
  };

  for (const childNode of Array.from(node.childNodes)) {
    if (childNode.nodeType === Node.ELEMENT_NODE) {
      normalized.children.push(normalizeStructure(childNode as Element));
    }
  }

  normalized.children.sort((a, b) => a.tag.localeCompare(b.tag));

  return normalized;
};
