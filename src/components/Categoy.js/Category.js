import React from "react"
import { Link } from "gatsby"

const Category = ({ catId, categories }) => {
  const sortedCategories = [...categories].sort((x, y) => {
    if (x.node.slug === "our-team") return -1
    if (y.node.slug === "our-team") return 1
    return 0
  })

  return (
    <>
      {sortedCategories.map(cat => {
        if (cat.node.count !== 0) {
          return cat.node.slug !== "uncategorized" ? (
            <li key={cat.node.id}>
              <span>{cat.node.count}</span>
              <Link to={cat.node.uri}>
                <span dangerouslySetInnerHTML={{ __html: cat.node.name }} />
              </Link>
            </li>
          ) : null
        }
        return null
      })}
    </>
  )
}

export default Category
