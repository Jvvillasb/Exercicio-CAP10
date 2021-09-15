import React from "react"
import ContentLoader from "react-content-loader"
import { generateList } from "core/utils/list"

const MovieCardLoader = () => {
  const qtLoading = generateList(4);
  return (
    <>

      {
        qtLoading.map(item => (
          <ContentLoader
            key={item}
            speed={1}
            width={255}
            height={255}
            viewBox="0 0 255 335"
            backgroundColor="#6C6C6C;"
            foregroundColor="#d6d2d2"

          >
            <rect x="0" y="0" rx="10" ry="10" width="250" height="335" />
          </ContentLoader>
        ))
      }
    </>
  )
}

export default MovieCardLoader

