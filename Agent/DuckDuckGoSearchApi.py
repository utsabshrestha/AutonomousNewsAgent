from duckduckgo_search import DDGS
import uuid

def search_duckduckgo(query_obj : dict, max_results=3):

    searchresults = []
    query_text = query_obj["query"]
    
    try:
        results = DDGS().news(keywords=query_text, safesearch="off", timelimit="m", max_results=max_results)
        if results:
            for r in results:
                searchresults.append({
                            "id": uuid.uuid4().hex[:8],
                            "url": r.get("url"),
                            "title": r.get("title"),
                            "description": r.get("body"),
                            "page_age": r.get("date"),
                            "search_query": query_obj
                        })

        return searchresults           
    except Exception as e:
        print(f"Error in DuckDuckGo Search: {e}")
        
    return results