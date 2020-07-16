import React, { FC, useState, ChangeEvent, KeyboardEvent, ReactElement, useEffect, useRef } from 'react'
import classNames from 'classnames'
import Input, { InputProps } from '../Input/input'
import Icon from '../Icon/icon'
import Transition from '../Transition/transition'
import useDebounce from '../../hooks/useDebounce'
import useClickOutside from '../../hooks/useClickOutside'

interface DataSourceObject {
  value: string;
}

export type DataSourceType<T = {}> = T & DataSourceObject

export interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  fetchSuggestions: (str: string) => DataSourceType[] | Promise<DataSourceType[]>;
  onSelect?: (item: DataSourceType) => void;
  renderOption?: (item: DataSourceType) => ReactElement;
}

export const AutoComplete: FC<AutoCompleteProps> = (props) => {
  const {
    fetchSuggestions,
    onSelect,
    value,
    renderOption,
    ...restProps
  } = props

  const [ inputValue, setInputValue ] = useState(value as string)

  const [ suggestions, setSugestions ] = useState<DataSourceType[]>([])
  const [ showDropdown, setShowDropdown] = useState(false)
  const [ highlightIndex, setHighlightIndex] = useState(-1)
  const triggerSearch = useRef(false)

  const componentRef = useRef<HTMLDivElement>(null)

  const debouncedValue = useDebounce(inputValue, 300)

  useClickOutside(componentRef, () => { setSugestions([])})

  useEffect(() => {
    if (debouncedValue && triggerSearch.current) {
      setSugestions([])
      const results = fetchSuggestions(debouncedValue)
      if (results instanceof Promise) {
        results.then(data => {
          setSugestions(data)
          if (data.length > 0) {
            setShowDropdown(true)
          }
        })
      } else {
        setSugestions(results)
        setShowDropdown(true)
        if (results.length > 0) {
          setShowDropdown(true)
        }
      }
    } else {
      setShowDropdown(false)
    }
    setHighlightIndex(-1)
  }, [debouncedValue, fetchSuggestions])

  const highlight = (index: number) => {
    if (index < 0) index = 0
    if (index >= suggestions.length) {
      index = suggestions.length - 1
    }
    setHighlightIndex(index)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    console.log('e.keyCode',e.keyCode);
    switch(e.keyCode) {
      case 13: //Enter
        if (suggestions[highlightIndex]) {
          handleSelect(suggestions[highlightIndex])
        }
        break
      case 38: // Up
        highlight(highlightIndex - 1)
        break
      case 40: // Down
        highlight(highlightIndex + 1)
        break
      case 27: // Esc
        setShowDropdown(false)
        break
      default:
        break
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setInputValue(value)
    triggerSearch.current = true
  }

  const handleSelect = (item: DataSourceType) => {
    console.log('[handleSelect] item',item);
    setInputValue(item.value)
    setShowDropdown(false)
    if (onSelect) {
      onSelect(item)
    }
    triggerSearch.current = false
  }

  const renderTemplate = (item: DataSourceType) => {
    return renderOption ? renderOption(item) : item.value
  }

  const generateDropdown = () => {
    return (
      <Transition
        in={showDropdown}
        animation="zoom-in-top"
        timeout={300}
        onExited={() => {setSugestions([])}}
      >
        { suggestions.length>0?<ul className="yc-suggestion-list">

          { suggestions.map((item, index) => {

            const cnames = classNames('suggestion-item', {
              'is-active': index === highlightIndex
            })

            return (
              <div key={index} className={cnames} onClick={() => handleSelect(item)}>
                {renderTemplate(item)}
              </div>
            )
          })}

        </ul> : <div></div>

        }
      </Transition>
    )
  }
  return (
    <div className="yc-auto-complete" ref={componentRef}>
      <Input
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...restProps}
      />
      {generateDropdown()}
    </div>
  )
}

export default AutoComplete;

