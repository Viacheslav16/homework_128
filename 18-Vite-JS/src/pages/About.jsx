import { useEffect, useState } from "react"

export default function AboutPage(){
    const [pageData, setPageData] = useState({
        title:'',
        content: ''
    })

    const fetchPageData = async (pageName)=>{
       const response = await fetch(`/data/${pageName}.json`)
       const json = await response.json();
       setPageData(json);
    }

    useEffect(()=>{
        fetchPageData('about')
    }, [])

    return <div className="about-page">
        <h1>{pageData.title}</h1>
         <div dangerouslySetInnerHTML = {{__html : pageData.content}}></div> 

         {/* {pageData.list.map((item,index) =><FAQItem item = {item} key={index}/>)} */}
    </div>
}