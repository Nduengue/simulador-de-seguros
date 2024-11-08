import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export interface AutoCompleteTagInputListType {
  id: string;
  name: string;
}

interface IAutoCompleteTagInput {
  listOfOptions: AutoCompleteTagInputListType[];
  placeholder?: string;
  icon?: React.ElementType;
  iconClassName?: string;
  inputClassName?: string;
  suggestionUlClassName?: string;
  suggestionLiClassName?: string;
  selectedTagsClassName?: string;
  values: AutoCompleteTagInputListType[];
  setValuesFn: (e: AutoCompleteTagInputListType[]) => void;
}

export function AutoCompleteTagInput({
  listOfOptions,
  inputClassName,
  iconClassName,
  placeholder,
  icon: Icon,
  suggestionLiClassName,
  suggestionUlClassName,
  selectedTagsClassName,
  values,
  setValuesFn,
}: IAutoCompleteTagInput) {
  const [inputValue, setInputValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<AutoCompleteTagInputListType[]>([]);

  const [selectedTags, setSelectedTags] = useState<AutoCompleteTagInputListType[]>(values);

  useEffect(() => {
    console.log(selectedTags);
    setValuesFn(selectedTags);
  }, [selectedTags]);

  // Filtra as sugestões ao digitar
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    if (value.length > 0) {
      const filteredSuggestions = listOfOptions.filter((option) => option.name.toLowerCase().includes(value.toLowerCase()));
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  // Adiciona a tag selecionada e limpa o campo de entrada
  const handleAddTag = (option: AutoCompleteTagInputListType) => {
    if (!selectedTags.find((tag) => tag.id === option.id)) {
      setSelectedTags([...selectedTags, option]);
    }
    setInputValue("");
    setSuggestions([]);
  };

  // Remove uma tag da lista
  const handleRemoveTag = (id: string) => {
    setSelectedTags(selectedTags.filter((tag) => tag.id !== id));
  };

  return (
    <div className="w-full">
      <div className="relative">
        <div className={twMerge("flex items-center  w-full outline-none gap-x-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500", inputClassName)}>
          {Icon && <Icon className={twMerge("text-gray-400", iconClassName)} />}
          <input type="text" className="w-full outline-none" placeholder={placeholder ? placeholder : "Digite para buscar..."} value={inputValue} onChange={handleInputChange} />
        </div>

        {suggestions.length > 0 && (
          <ul className={twMerge("absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-40 overflow-y-auto", suggestionUlClassName)}>
            {suggestions.map((option) => (
              <li key={option.id} className={twMerge("px-4 py-2 cursor-pointer hover:bg-blue-500 hover:text-white", suggestionLiClassName)} onClick={() => handleAddTag(option)}>
                {option.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Lista de Tags */}
      <div className="flex flex-wrap mt-4">
        {selectedTags.map((tag) => (
          <div key={tag.id} className={twMerge("flex items-center bg-blue-500 text-white rounded-full px-4 py-1 mr-2 mb-2", selectedTagsClassName)}>
            <span className="mr-2">{tag.name}</span>
            <button onClick={() => handleRemoveTag(String(tag.id))} className="text-white hover:text-gray-300 focus:outline-none">
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
