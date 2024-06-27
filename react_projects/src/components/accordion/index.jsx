import { useState } from 'react';
import data from './data';
import './styles.css';

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [multiSelect, setMultiSelect] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  function handleSingleSelection(currentId) {
    console.log(currentId);
    setSelected(currentId === selected ? null : currentId);
  }

  function handleMultiSelection(currentId) {
    if (selectedItems.includes(currentId)) {
      setSelectedItems(selectedItems.filter((id) => id !== currentId));
    } else {
      setSelectedItems([...selectedItems, currentId]);
    }
  }
  console.log(selected, selectedItems);

  return (
    <div className="wrapper">
      <h2>Accordion Component</h2>
      <button onClick={() => setMultiSelect(!multiSelect)}>
        Enable multi-selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={
                  multiSelect
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
                aria-expanded={
                  multiSelect
                    ? selectedItems.includes(dataItem.id)
                    : selected === dataItem.id
                }
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {(multiSelect && selectedItems.includes(dataItem.id)) ||
              (!multiSelect && selected === dataItem.id) ? (
                <div className="content">
                  <p>{dataItem.answer}</p>
                </div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
