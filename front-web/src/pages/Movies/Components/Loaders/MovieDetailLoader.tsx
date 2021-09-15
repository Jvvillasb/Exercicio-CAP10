import { generateList } from "core/utils/list";
import ContentLoader from "react-content-loader"

const MovieDetailLoader = () => {
    const qtLoading = generateList(1);
    return(
        <>
            {qtLoading.map( load => (
                <ContentLoader 
                key={load}
                speed={2}
                width={800}
                height={660}
                viewBox="0 0 600 460"
                backgroundColor="#585050"
                foregroundColor="#ecebeb"
              >
                <rect x="284" y="60" rx="2" ry="2" width="142" height="26" /> 
                <rect x="284" y="119" rx="2" ry="2" width="140" height="16" /> 
                <rect x="-4" y="60" rx="2" ry="2" width="268" height="155" /> 
                <rect x="417" y="109" rx="0" ry="0" width="1" height="0" /> 
                <rect x="284" y="91" rx="0" ry="0" width="81" height="20" /> 
                <rect x="286" y="143" rx="0" ry="0" width="233" height="72" /> 
                <rect x="5" y="235" rx="0" ry="0" width="514" height="71" /> 
                <rect x="7" y="325" rx="0" ry="0" width="517" height="47" /> 
                <rect x="8" y="380" rx="0" ry="0" width="517" height="47" />
              </ContentLoader>
            ))

            }    
        </>
    )
}
  


export default MovieDetailLoader

