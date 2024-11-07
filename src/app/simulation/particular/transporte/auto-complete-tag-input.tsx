import React, { useState } from 'react';

interface Option {
  id: number;
  name: string;
}

const AutoCompleteTagInput: React.FC = () => {
  const options: Option[] = [
    { id: 1, name: 'React' },
    { id: 2, name: 'Next.js' },
    { id: 3, name: 'Tailwind CSS' },
    { id: 4, name: 'TypeScript' },
    { id: 5, name: 'JavaScript' },
    { id: 6, name: 'Node.js' },
  ];

  const [inputValue, setInputValue] = useState<string>('');
  const [suggestions, setSuggestions] = useState<Option[]>([]);
  const [selectedTags, setSelectedTags] = useState<Option[]>([]);

  // Filtra as sugestões ao digitar
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.length > 0) {
      const filteredSuggestions = options.filter((option) =>
        option.name.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  // Adiciona a tag selecionada e limpa o campo de entrada
  const handleAddTag = (option: Option) => {
    if (!selectedTags.find((tag) => tag.id === option.id)) {
      setSelectedTags([...selectedTags, option]);
    }
    setInputValue('');
    setSuggestions([]);
  };

  // Remove uma tag da lista
  const handleRemoveTag = (id: number) => {
    setSelectedTags(selectedTags.filter((tag) => tag.id !== id));
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10">
      <div className="relative">
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          placeholder="Digite para buscar..."
          value={inputValue}
          onChange={handleInputChange}
        />

        {suggestions.length > 0 && (
          <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-40 overflow-y-auto">
            {suggestions.map((option) => (
              <li
                key={option.id}
                className="px-4 py-2 cursor-pointer hover:bg-blue-500 hover:text-white"
                onClick={() => handleAddTag(option)}
              >
                {option.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Lista de Tags */}
      <div className="flex flex-wrap mt-4">
        {selectedTags.map((tag) => (
          <div
            key={tag.id}
            className="flex items-center bg-blue-500 text-white rounded-full px-4 py-1 mr-2 mb-2"
          >
            <span className="mr-2">{tag.name}</span>
            <button
              onClick={() => handleRemoveTag(tag.id)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoCompleteTagInput;
