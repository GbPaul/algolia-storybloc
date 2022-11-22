import { useState } from "react"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"
import { useMenu } from "react-instantsearch-hooks-web"

const LanguagesMenu = (props: any) => {
  const [listShown, setListShown] = useState<boolean>(false)

  const { attribute, title } = props
  const { items, refine } = useMenu({ attribute })

  const handleShowList = () => setListShown((prevState) => !prevState)

  return (
    <div className="refinementList">
      <header onClick={handleShowList} className="categories_header">
        {listShown ? <BiChevronUp /> : <BiChevronDown />}
        <h2>{title}</h2>
      </header>
      {listShown && (
        <ul className="languages">
          <li>
            <input
              className="refinementList-checkbox"
              type="radio"
              onChange={() => refine("")}
            />
            All Languages {items.length}
          </li>
          {items.map((item, index) => (
            <li key={`${item.value}-${index}`}>
              <input
                className="refinementList-checkbox"
                type="radio"
                value={item.value}
                checked={item.isRefined}
                onChange={() => refine(item.value)}
              />
              <span>{item.value}</span>
              <span className="refinementList-count">{item.count}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default LanguagesMenu
