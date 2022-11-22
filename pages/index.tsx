import Head from "next/head"
import { useEffect } from "react"

import algoliasearch from "algoliasearch"
import { InstantSearch } from "react-instantsearch-hooks-web"
import Hits from "../components/Hits"
import RefinementList from "../components/RefinementList"
import Menu from "../components/Menu"
import Search from "../components/Search"
import LanguagesMenu from "../components/LanguagesMenu"
import ToggleRefinement from "../components/Toggle"

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_TOKEN!
)

export default function Home() {
  const syncData = async () => {
    const response = await fetch("/api/storybloc", {
      method: "POST",
      body: JSON.stringify(null),
    })
    return response.json()
  }
  useEffect(() => {
    syncData()
  }, [])

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <InstantSearch indexName="Event" searchClient={searchClient}>
        <div className="container">
          <div className="container_left">
            <Search />
            <div className="filter_container">
              <header className="filter_header">
                <h2>Filter on</h2>
              </header>
              <Menu attribute="category" title="Categories" />
              <RefinementList attribute="location" title="Location" />
              <RefinementList attribute="products" title="Products" />
              <RefinementList attribute="solutions" title="Solutions" />
              <LanguagesMenu attribute="languages" title="Languages" />
              <ToggleRefinement attribute="new" />
            </div>
          </div>
          <div className="container_right">
            <Hits />
          </div>
        </div>
      </InstantSearch>
    </div>
  )
}
