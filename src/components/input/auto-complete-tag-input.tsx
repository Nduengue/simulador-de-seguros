"use client"
import React, { useEffect, useState, useRef } from "react";
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
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const [isListOpen, setIsListOpen] = useState<boolean>(false);
  const [isKeyboardNavigation, setIsKeyboardNavigation] = useState<boolean>(false);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setValuesFn(selectedTags);
  }, [selectedTags, setValuesFn]);

  useEffect(() => {
    if (focusedIndex >= 0 && listRef.current && isKeyboardNavigation) {
      const listItems = listRef.current.getElementsByTagName('li');
      const focusedElement = listItems[focusedIndex];
      if (focusedElement) {
        focusedElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }
      setIsKeyboardNavigation(false);
    }
  }, [focusedIndex, isKeyboardNavigation]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    setIsListOpen(true);
    if (value.length > 0) {
      const filteredSuggestions = listOfOptions
        .filter((option) => option.name.toLowerCase().includes(value.toLowerCase()))
        .filter((option) => !selectedTags.some((tag) => tag.id === option.id));
      setSuggestions(filteredSuggestions);
      setFocusedIndex(0);
    } else {
      const availableOptions = listOfOptions.filter(
        (option) => !selectedTags.some((tag) => tag.id === option.id)
      );
      setSuggestions(availableOptions);
      setFocusedIndex(-1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIsKeyboardNavigation(true);
      setIsListOpen(true);
      if (!isListOpen) {
        setSuggestions(listOfOptions.filter(
          (option) => !selectedTags.some((tag) => tag.id === option.id)
        ));
      }
      setFocusedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : prev));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIsKeyboardNavigation(true);
      setFocusedIndex((prev) => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === "Enter" && focusedIndex >= 0) {
      e.preventDefault();
      handleAddTag(suggestions[focusedIndex]);
      setSuggestions(suggestions.filter((_, index) => index !== focusedIndex));
      setIsListOpen(false);
    } else if (e.key === "Escape") {
      e.preventDefault();
      setIsListOpen(false);
      setIsKeyboardNavigation(false);
      setFocusedIndex(-1);
    }
  };

  const handleAddTag = (option: AutoCompleteTagInputListType) => {
    if (!selectedTags.find((tag) => tag.id === option.id)) {
      setSelectedTags([...selectedTags, option]);
    }
    setInputValue("");
    setFocusedIndex(-1);
    setIsKeyboardNavigation(false);
    setSuggestions(suggestions.filter(
      (suggestion) => suggestion.id !== option.id
    ));
    setIsListOpen(false);
  };

  const handleRemoveTag = (id: string) => {
    setSelectedTags(selectedTags.filter((tag) => tag.id !== id));
  };

  return (
    <div className="w-full">
      <div className="relative">
        <div className={twMerge("flex items-center w-full outline-none gap-x-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500", inputClassName)}>
          {Icon && <Icon className={twMerge("text-gray-400", iconClassName)} />}
          <input
            type="text"
            className="w-full outline-none"
            placeholder={placeholder ? placeholder : "Digite para buscar..."}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={() => {
              setIsListOpen(true);
              setSuggestions(listOfOptions.filter(
                (option) => !selectedTags.some((tag) => tag.id === option.id)
              ));
            }}
            onBlur={() => setTimeout(() => {
              setIsListOpen(false);
              setIsKeyboardNavigation(false);
              setFocusedIndex(-1);
            }, 200)}
          />
        </div>

        {isListOpen && suggestions.length > 0 && (
          <ul
            ref={listRef}
            className={twMerge("absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-40 overflow-y-auto", suggestionUlClassName)}
          >
            {suggestions.map((option, index) => (
              <li
                key={option.id}
                className={twMerge(
                  "px-4 py-2 cursor-pointer transition-colors duration-200",
                  index === focusedIndex ? "bg-orange-500 text-white" : "",
                  suggestionLiClassName
                )}
                onClick={() => handleAddTag(option)}
                onMouseEnter={() => {
                  setFocusedIndex(index);
                  setIsKeyboardNavigation(false);
                }}
              >
                {option.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex flex-wrap mt-4">
        {selectedTags.map((tag) => (
          <div
            key={tag.id}
            className={twMerge(
              "flex items-center bg-orange-500 text-white rounded-full px-4 py-1 mr-2 mb-2 animate-fadeIn",
              selectedTagsClassName
            )}
          >
            <span className="mr-2">{tag.name}</span>
            <button
              onClick={() => handleRemoveTag(String(tag.id))}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
