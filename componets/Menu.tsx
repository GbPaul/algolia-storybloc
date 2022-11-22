import { useEffect, useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { useHits, useMenu } from "react-instantsearch-hooks-web";

const Menu = (props: { title: string; attribute: string }) => {
  const { hits } = useHits();

  const [listShown, setListShown] = useState<boolean>(false);

  const [total, setTotal] = useState<number>(hits.length);

  const { attribute, title } = props;

  const { items, refine } = useMenu({ attribute });

  useEffect(() => {
    setTotal(hits.length);
  }, [hits]);

  const handleShowList = () => setListShown((prevState) => !prevState);

  const handleRefine = (value: string) => refine(value);

  return (
    <div>
      <header onClick={handleShowList} className="categories_header">
        {listShown ? <BiChevronUp /> : <BiChevronDown />}
        <h2>{title}</h2>
      </header>
      {listShown && (
        <ul className="categories">
          <li onClick={() => handleRefine("")} className="all_events">
            <span>All events </span> <span className="count">{total}</span>
          </li>
          {items.map((item) => (
            <li onClick={() => handleRefine(item.value)}>
              <span>{item.value}</span>
              <span className="refinementList-count">{item.count}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Menu;
