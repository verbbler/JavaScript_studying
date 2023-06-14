//Implement a buildDefinitionList() function that generates an HTML list of definitions (<dl>, <dt>, and <dd> tags) and returns the resulting string. If there are no elements in the array, the function returns an empty string. Export the default function//

const buildDefinitionList = (definitions) => {
  if (definitions.length === 0) {
    return '';
  }

  const parts = [];

  for (const definition of definitions) {
    const name = definition[0];
    const description = definition[1];
    parts.push(`<dt>${name}</dt><dd>${description}</dd>`);
  }

  const innerValue = parts.join('');
  const result = `<dl>${innerValue}</dl>`;

  return result;
};

export default buildDefinitionList;
