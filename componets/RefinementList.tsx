import { useRefinementList } from "react-instantsearch-hooks-web"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"
import { useState } from "react"

const RefinementList = (props: { title: string; attribute: string }) => {
  const [listShown, setListShown] = useState<boolean>(false)

  const { attribute, title } = props

  const { items, refine, toggleShowMore, hasExhaustiveItems } =
    useRefinementList({
      attribute,
      limit: 10,
      showMore: true,
      showMoreLimit: 15,
    })

  const handleShowList = () => setListShown((prevState) => !prevState)

  return (
    <div className="refinementList">
      <header onClick={handleShowList}>
        {listShown ? <BiChevronUp /> : <BiChevronDown />}
        <h2>{title}</h2>
      </header>
      {listShown && (
        <div>
          <ul className="">
            {items.map((item) => (
              <li key={item.value} className="refinementList-item">
                <label className="refinementList-label">
                  <input
                    className="refinementList-checkbox"
                    type="checkbox"
                    value={item.value}
                    checked={item.isRefined}
                    onChange={() => refine(item.value)}
                  />
                  <span className="refinementList-labelText">{item.label}</span>
                  <span className="refinementList-count">{item.count}</span>
                </label>
              </li>
            ))}
          </ul>
          {title !== "Location" && (
            <>
              {!hasExhaustiveItems && (
                <div onClick={() => toggleShowMore()} className="show_more">
                  <span style={{ display: "block" }}>Shore more</span>
                  <span style={{ marginTop: "2.5px" }}>
                    <BiChevronDown />
                  </span>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default RefinementList
