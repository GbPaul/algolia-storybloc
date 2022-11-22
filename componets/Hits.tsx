import { useInfiniteHits } from "react-instantsearch-hooks-web"
import Hit from "./Hit"
const Hits = () => {
  const { hits } = useInfiniteHits()

  return (
    <>
      <header className="results_header">
        <p>{hits.length} results</p>
      </header>
      <div className="hits">
        {hits.map((hit) => (
          <Hit hit={hit} key={hit.objectID} />
        ))}
      </div>
    </>
  )
}

export default Hits
