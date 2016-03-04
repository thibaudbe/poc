interface Animal {
  label: string;
  value: string;
}

export default function(data: Array<Object>) {
  return data.map((item: Animal) => {
    return `${item.label} use to ${item.value}`;
  });
}
